import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NavConfigItem } from '../shared/nav-config.model';
import { PipNavService } from '../shared/nav.service';
import { SecondaryAction, SecondaryActionsConfig } from './shared/secondary-actions.model';

@Component({
  selector: 'pip-secondary-actions',
  templateUrl: 'secondary-actions.component.html',
  styleUrls: ['./secondary-actions.component.scss'],
})
export class PipSecondaryActionsComponent implements OnInit, OnDestroy {
  #destroyed$ = new Subject<void>();

  public config$: Observable<SecondaryActionsConfig>;

  @ViewChild('actionsMenuTrigger') actionsMenuTrigger: MatMenuTrigger;

  public constructor(private nav: PipNavService) {}

  ngOnInit(): void {
    this.config$ = this.nav.getConfig(NavConfigItem.secondaryActions);
    this.nav.toggleSecondaryActions$
      .asObservable()
      .pipe(takeUntil(this.#destroyed$))
      .subscribe((state) => {
        if (state) {
          this.actionsMenuTrigger.openMenu();
        } else {
          this.actionsMenuTrigger.closeMenu();
        }
      });
  }

  ngOnDestroy(): void {
    this.#destroyed$.next();
    this.#destroyed$.complete();
  }

  onActionClick(action: SecondaryAction) {
    if (action.click != null) {
      action.click();
    }
  }

  onOpenActionsMenu(config: SecondaryActionsConfig) {
    if (config.openMenuClick && typeof config.openMenuClick === 'function') {
      config.openMenuClick();
    }
  }
}
