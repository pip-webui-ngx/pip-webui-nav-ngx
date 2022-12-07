import { Component } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { NavConfigItem } from '../shared/nav-config.model';
import { PipNavService } from '../shared/nav.service';
import { NavIconConfig } from './shared/nav-icon.model';

@Component({
  selector: 'pip-nav-icon',
  templateUrl: 'nav-icon.component.html',
  styleUrls: ['./nav-icon.component.scss'],
})
export class PipNavIconComponent {
  ctx$: Observable<{
    props: NavIconConfig;
  }>;

  constructor(private service: PipNavService) {
    this.ctx$ = combineLatest({
      props: this.service.getConfig(NavConfigItem.navIcon),
    });
  }

  onClick(props: NavIconConfig) {
    if (props.action != null) {
      props.action();
    }
  }
}
