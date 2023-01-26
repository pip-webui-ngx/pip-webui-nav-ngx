import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { combineLatest, map, Observable, startWith, tap } from 'rxjs';
import { NavConfigItem } from '../shared/nav-config.model';
import { PipNavService } from '../shared/nav.service';
import { BreadcrumbConfig, BreadcrumbItem } from './shared/breadcrumb.model';

@Component({
  selector: 'pip-breadcrumb',
  templateUrl: 'breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PipBreadcrumbComponent {
  ctx$: Observable<{
    config: BreadcrumbConfig;
    isMobile: boolean;
  }>;

  @HostBinding('class.pip-mobile-breadcrumb') isMobile = false;

  public constructor(
    private cd: ChangeDetectorRef,
    private elRef: ElementRef,
    private media: MediaObserver,
    private pipNav: PipNavService,
  ) {
    const mobileAliases = ['xs', 'sm'];
    const isMobile$ = this.media.asObservable().pipe(
      startWith(mobileAliases.filter((alias) => this.media.isActive(alias)).map((alias) => ({ mqAlias: alias }))),
      map((changes: MediaChange[]) => changes.map((change) => change.mqAlias)),
      map((aliases: any) => aliases.some((alias) => mobileAliases.includes(alias))),
    );
    this.ctx$ = combineLatest({
      config: this.pipNav.getConfig(NavConfigItem.breadcrumb).pipe(
        map((breadcrumbProps) => {
          const newConfig = { ...breadcrumbProps };
          this.calculateWidth(newConfig);
          return newConfig;
        }),
      ),
      isMobile: isMobile$.pipe(tap((isMobile) => (this.isMobile = isMobile))),
    });
  }

  private calculateWidth(config: BreadcrumbConfig): void {
    if (!config?.items?.length) {
      return;
    }

    let breadcrumbWidth = 0;
    const n: number = config.items.length;
    // calculate total length
    for (let i = 0; i < n; i++) {
      const str = config.items[i].title || '';
      breadcrumbWidth += config.items[i].width ? config.items[i].width : str.length;
      // add 4 character for each level
      breadcrumbWidth += 5;
    }

    for (let i = 0; i < n; i++) {
      const str = config.items[i].title || '';
      config.items[i].width = Math.trunc((str.length / breadcrumbWidth) * 100);
    }
  }

  getLastTitle(items?: BreadcrumbItem[]): string {
    let res = '';
    if (Array.isArray(items) && items.length && items[items.length - 1].title) {
      res = items[items.length - 1].title;
    }
    return res;
  }

  onSearchClick(config: BreadcrumbConfig): void {
    if (config.searchClick) {
      config.searchClick(config.searchCriteria);
    }
  }

  onItemClick(item: BreadcrumbItem, config: BreadcrumbConfig): void {
    if (config.itemClick) {
      config.itemClick(item);
    } else {
      if (item.click) {
        item.click(item);
      }
    }
  }
}
