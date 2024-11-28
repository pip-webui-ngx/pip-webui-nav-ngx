import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Observable } from 'rxjs';
import { NavConfigItem } from '../shared/nav-config.model';
import { PipNavService } from '../shared/nav.service';
import { PrimaryAction, PrimaryActionsConfig, PrimarySubAction } from './shared/primary-actions.model';

@Component({
  selector: 'pip-primary-actions',
  templateUrl: 'primary-actions.component.html',
  styleUrls: ['./primary-actions.component.scss'],
})
export class PipPrimaryActionsComponent {
  config$: Observable<PrimaryActionsConfig>;

  constructor(private nav: PipNavService) {
    this.config$ = this.nav.getConfig(NavConfigItem.primaryActions);
  }

  onActionClick(action: PrimaryAction): void {
    if (action?.icon?.action && typeof action.icon.action === 'function') {
      action.icon.action();
    }
  }

  onSubActionClick(subAction: PrimarySubAction): void {
    if (subAction?.action && typeof subAction.action === 'function') {
      subAction.action();
    }
  }

  isThemePaletteColor(color: ThemePalette | string) {
    return !color || ['primary', 'accent', 'warn'].includes(color);
  }
}
