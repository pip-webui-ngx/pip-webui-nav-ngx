import { Component, OnInit, OnDestroy, Input, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { NavIconConfig, DefaultIcon } from './shared/nav-icon.model';
import { PipNavService } from '../shared/nav.service';


@Component({
    selector: 'pip-nav-icon',
    templateUrl: 'nav-icon.component.html',
    styleUrls: ['./nav-icon.component.scss']
})

export class PipNavIconComponent implements OnInit, OnDestroy {
    private partName = 'nav-icon';

    private subscription: Subscription;
    public icon: NavIconConfig = DefaultIcon;

    public constructor(
        private service: PipNavService,
        private cd: ChangeDetectorRef
    ) { }

    public ngOnInit() {
        this.subscription = this.service.updateItemByName(this.partName, null).properties.subscribe((iconProps) => {
            this.icon = iconProps;
            this.cd.detectChanges();
        });
    }

    public onClick() {
        if (this.icon.action != null) {
            this.icon.action();
        }
    }

    public ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
