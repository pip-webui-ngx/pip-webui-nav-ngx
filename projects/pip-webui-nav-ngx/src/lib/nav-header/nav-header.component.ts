import { Component } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { NavConfigItem } from '../shared/nav-config.model';
import { PipNavService } from '../shared/nav.service';
import { NavHeaderConfig } from './shared/nav-header.model';

@Component({
  selector: 'pip-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
})
export class PipNavHeaderComponent {
  ctx$: Observable<{
    props: NavHeaderConfig;
  }>;

  constructor(private pipNav: PipNavService) {
    this.ctx$ = combineLatest({
      props: this.pipNav.getConfig(NavConfigItem.navHeader),
    });
  }
}
