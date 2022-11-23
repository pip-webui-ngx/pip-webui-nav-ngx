// import * as assert from 'assert';
import { TestBed, inject, ComponentFixture } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { DebugElement } from '@angular/core';

// import { PipNavPartService } from '../navpart/shared/navpart.service';

import { PipNavService } from '../shared/nav.service';
import { PipBreadcrumbModule } from './breadcrumb.module';
import { PipBreadcrumbComponent } from './breadcrumb.component';

describe('a PipBreadcrumbComponentd component', () => {
    let component: PipBreadcrumbComponent;
    // let service: PipNavPartService;
    let fixture: ComponentFixture<PipBreadcrumbComponent>;
    // let de: DebugElement;
    // let el: HTMLElement;
    // let navPartName = 'breadcrumb';

    // register all needed dependencies
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                PipBreadcrumbModule
            ],
            providers: [
                PipNavService
            ]
        });
        fixture = TestBed.createComponent(PipBreadcrumbComponent);
        component = fixture.componentInstance;
    });

    it('should have an instance', () => {
        expect(component).toBeDefined();
    });

    // // instantiation through framework injection
    // beforeEach(inject([PipNavPartService], (navPartSErvice: PipNavPartService) => {
    //     fixture = TestBed.createComponent(PipBreadcrumbComponent);
    //     service = navPartSErvice;
    //     component = fixture.componentInstance;

    //     de = fixture.debugElement;
    //     el = de.nativeElement;
    // }));

    // it('should add and show titles', () => {
    //     let props = {
    //         items: [
    //             { title: 'Title 1' }
    //         ]
    //     };

    //     component.pipNavPartName = navPartName;
    //     service.updatePartByName(navPartName, true, props);
    //     expect(component.config).toEqual(props);
    //     fixture.detectChanges();
    //     let navItems = el.getElementsByClassName('navigation-item');

    //     expect(navItems.length).toEqual(props.items.length);
    //     expect(navItems[0].children[0].innerHTML).toEqual(props.items[0].title);
    // });

    // it('should show search', () => {
    //     let props = {
    //         items: [
    //             { title: 'Title 1' },
    //         ], searchCriteria: 'criteria'
    //     };

    //     component.pipNavPartName = navPartName;
    //     service.updatePartByName(navPartName, true, props);
    //     fixture.detectChanges();
    //     let navItems = el.getElementsByClassName('search-container');

    //     expect(navItems.length).toEqual(2);
    //     expect(navItems[0].innerHTML).toEqual(props.searchCriteria + ' - ');
    // });
});
