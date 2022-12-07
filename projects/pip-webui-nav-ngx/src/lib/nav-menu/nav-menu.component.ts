import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PipSidenavService } from 'pip-webui-layouts-ngx';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NavConfigItem } from '../shared/nav-config.model';
import { PipNavService } from '../shared/nav.service';
import { NavMenuConfig, NavMenuLink, NavMenuSection } from './shared/nav-menu.model';

@Component({
  selector: 'pip-nav-menu',
  templateUrl: 'nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PipNavMenuComponent implements OnInit, OnDestroy {
  #destroyed$ = new Subject<void>();
  @Input() disableDefaultSelectActions = false;

  @Output() select = new EventEmitter<number>();

  config: NavMenuConfig;
  selectedSectionIndex: number;
  selectedItemIndex: number;
  sections: NavMenuSection[] = [];

  public constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: PipNavService,
    private sidenav: PipSidenavService,
    private cd: ChangeDetectorRef,
  ) {
    this.selectedSectionIndex = 0;
    this.selectedItemIndex = 0;
  }

  ngOnInit(): void {
    this.service
      .getConfig(NavConfigItem.navMenu)
      .pipe(takeUntil(this.#destroyed$))
      .subscribe((newConfig: NavMenuConfig) => {
        this.config = newConfig;
        if (this.config && this.config.sections) {
          this.sections = this.config.sections;
        }
        if (this.sections && this.sections.length) {
          this.selectIndex();
        }
        this.cd.detectChanges();
      });
    this.router.events.pipe(takeUntil(this.#destroyed$)).subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.selectIndex();
      }
    });
  }

  ngOnDestroy(): void {
    this.#destroyed$.next();
    this.#destroyed$.complete();
  }

  private selectIndex() {
    const url =
      this.route.snapshot.firstChild && this.route.snapshot.firstChild.url.length
        ? this.route.snapshot.firstChild.url[0].path
        : '';
    const urls = [url, '/' + url];
    let stop = false;
    this.sections.forEach((section, sk) => {
      if (stop) {
        return;
      }
      section.links.forEach((link, lk) => {
        if (urls.includes(link?.url ?? '') || urls.includes(link?.href ?? '')) {
          this.selectedSectionIndex = sk;
          this.selectedItemIndex = lk;
          stop = true;
        }
        if (stop) {
          return;
        }
      });
    });
  }

  onItemSelect(index: number, item: NavMenuLink): void {
    this.selectedItemIndex = index;
    if (!this.disableDefaultSelectActions) {
      if (!item.disableNavbarClose) {
        this.sidenav.start?.close();
      }
      if (!item.disableTitleChange) {
        this.service.showTitle(item.title);
      }
    }
    this.select.emit(index);
  }
}
