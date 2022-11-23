import { Component, ElementRef, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

import { BreadcrumbConfig } from './shared/breadcrumb.model';
import { PipNavService } from '../shared/nav.service';

@Component({
    selector: 'pip-breadcrumb',
    templateUrl: 'breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})

export class PipBreadcrumbComponent implements OnInit, OnDestroy {
    private partName = 'breadcrumb';

    private subscription: Subscription;
    public config: BreadcrumbConfig;

    public constructor(
        private service: PipNavService,
        private media: MediaObserver,
        private elRef: ElementRef,
        private cd: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.media.asObservable().subscribe((change: any) => {
            this.elRef.nativeElement.classList[change.mqAlias === 'xs' || change.mqAlias === 'sm'
                ? 'add'
                : 'remove']('pip-mobile-breadcrumb');
            this.cd.detectChanges();
        });

        this.subscription = this.service.updateItemByName(this.partName, null).properties.subscribe((breadcrumbProps: BreadcrumbConfig) => {
            this.config = breadcrumbProps;
            this.calculateWidth();
            this.cd.detectChanges();
        });

        this.setClass();
    }

    private calculateWidth(): void {
        if (!this.config || !this.config.items) { return; }

        let breadcrumbWidth = 0;
        const n: number = this.config.items.length;
        // calculate total length
        for (let i = 0; i < n; i++) {
            const str = this.config.items[i].title || '';
            breadcrumbWidth += this.config.items[i].width ? this.config.items[i].width : str.length;
            // add 4 character for each level
            breadcrumbWidth += 5;
        }

        for (let i = 0; i < n; i++) {
            const str = this.config.items[i].title || '';
            this.config.items[i].width = Math.trunc(str.length / breadcrumbWidth * 100);
        }
    }

    private setClass() {
        this.elRef.nativeElement.classList[this.media.isActive('xs') || this.media.isActive('sm')
        ? 'add'
        : 'remove']('pip-mobile-breadcrumb');
        this.cd.detectChanges();
    }

    public onSearchClick() {
        if (this.config.searchClick) {
            this.config.searchClick(this.config.searchCriteria);
        }
    }

    public onItemClick(item) {
        if (this.config.itemClick) {
            this.config.itemClick(item);
        } else {
            if (item.click) {
                item.click();
            }
        }
    }

    public ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
