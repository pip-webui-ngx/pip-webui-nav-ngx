import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PipNavService } from '../shared/nav.service';
import { NavHeaderConfig } from './shared/nav-header.model';

@Component({
    selector: 'pip-nav-header',
    templateUrl: './nav-header.component.html',
    styleUrls: ['./nav-header.component.scss']
})
export class PipNavHeaderComponent implements OnInit, OnDestroy {
    private partName = 'nav-header';

    private subscription: Subscription;

    public props: NavHeaderConfig;

    public constructor(
        private service: PipNavService
    ) { }

    public ngOnInit() {
        this.subscription = this.service.updateItemByName(this.partName, null).properties.subscribe((props: NavHeaderConfig) => {
            this.props = props;
        });
    }

    public ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
