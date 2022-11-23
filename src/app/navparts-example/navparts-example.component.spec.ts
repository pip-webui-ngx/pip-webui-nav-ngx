import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { PipMediaService, PipSidenavService, PipRightnavService } from 'pip-webui2-layouts';
import { PipThemesService } from 'pip-webui2-themes';

import { NavpartsExampleModule } from './navparts-example.module';
import { NavpartsExampleComponent } from './navparts-example.component';

describe('NavpartsExampleComponent', () => {
  let component: NavpartsExampleComponent;
  let fixture: ComponentFixture<NavpartsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        NavpartsExampleModule,
        TranslateModule.forRoot()
      ],
      providers: [
        PipMediaService,
        PipSidenavService,
        PipRightnavService,
        PipThemesService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavpartsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
