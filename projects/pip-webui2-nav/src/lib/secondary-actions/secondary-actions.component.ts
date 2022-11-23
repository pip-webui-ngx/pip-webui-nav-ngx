import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Subscription } from 'rxjs';

import { PipNavService } from '../shared/nav.service';

@Component({
    selector: 'pip-secondary-actions',
    templateUrl: 'secondary-actions.component.html',
    styleUrls: ['./secondary-actions.component.scss']
})

export class PipSecondaryActionsComponent implements OnInit, OnDestroy {
    private partName = 'secondary-actions';

    private subs: Subscription;
    public config: any;
    @ViewChild('actionsMenuTrigger') actionsMenuTrigger: MatMenuTrigger;

    public constructor(
        private service: PipNavService
    ) { }

    public ngOnInit() {
        this.subs = new Subscription();
        this.subs.add(this.service.updateItemByName(this.partName, null).properties.subscribe((actionsProp) => {
            this.config = actionsProp;
        }));
        this.subs.add(this.service.toggleSecondaryActions$.asObservable().subscribe(state => {
            if (state) {
                this.actionsMenuTrigger.openMenu();
            } else {
                this.actionsMenuTrigger.closeMenu();
            }
        }));
    }

    public onActionClick(action) {
        if (action.click != null) {
            action.click();
        }
    }

    public onOpenActionsMenu() {
        if (this.config.openMenuClick) {
            this.config.openMenuClick();
        }
    }

    public ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
