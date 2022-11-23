// import * as assert from 'assert';
// import { TestBed, inject, ComponentFixture } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { DebugElement } from '@angular/core';

// import { PipPrimaryActionsModule } from './primary-actions.module';
// import { PipNavPartService } from '../navpart/shared/navpart.service';
// import { PipPrimaryActionsComponent } from './primary-actions.component';

describe('a pip-primary-actions component', () => {
    // let component: PipPrimaryActionsComponent;
    // let service: PipNavPartService;
    // let fixture: ComponentFixture<PipPrimaryActionsComponent>;
    // let de: DebugElement;
    // let el: HTMLElement;
    // let navPartName = 'primary-actions';

    // // register all needed dependencies
    // beforeEach(() => {
    //     TestBed.configureTestingModule({
    //         imports: [
    //             PipPrimaryActionsModule
    //         ],
    //         providers: [
    //             PipPrimaryActionsComponent,
    //             PipNavPartService
    //         ]
    //     });
    // });

    // // instantiation through framework injection
    // beforeEach(inject([PipNavPartService], (navPartSErvice: PipNavPartService) => {
    //     fixture = TestBed.createComponent(PipPrimaryActionsComponent);
    //     service = navPartSErvice;
    //     component = fixture.componentInstance;

    //     de = fixture.debugElement;
    //     el = de.nativeElement;
    // }));

    // it('should add and show actions and icons', () => {
    //     let props = {
    //         actions: [
    //             { icon: 'notifications' },
    //             { icon: 'cloud' }
    //         ]
    //     };

    //     component.pipNavPartName = navPartName;
    //     service.updatePartByName(navPartName, true, props);
    //     expect(component.config).toEqual(props);
    //     fixture.detectChanges();
    //     let actionItems = el.getElementsByTagName('mat-icon');

    //     expect(actionItems.length).toEqual(props.actions.length);
    //     for (let i = 0; i < props.actions.length; i++) {
    //         expect(actionItems[i].innerHTML).toEqual(props.actions[i].icon);
    //     }
    // });
});
