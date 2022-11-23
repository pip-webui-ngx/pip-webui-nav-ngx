import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PipNavService } from '../shared/nav.service';

@Component({
    selector: 'pip-primary-actions',
    templateUrl: 'primary-actions.component.html',
    styleUrls: ['./primary-actions.component.scss']
})

export class PipPrimaryActionsComponent implements OnInit, OnDestroy {
    private partName = 'primary-actions';

    private subscription: Subscription;
    public config: any;

    public constructor(
        private service: PipNavService
    ) { }

    public ngOnInit() {
        this.subscription = this.service.updateItemByName(this.partName, null).properties.subscribe((actionsProp) => {
            this.config = actionsProp;
        });
    }

    public onActionClick(action) {
        if (action.click != null) {
            action.click();
        }
    }

    public ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
