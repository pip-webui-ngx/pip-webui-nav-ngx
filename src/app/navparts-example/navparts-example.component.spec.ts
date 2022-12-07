import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { PipMediaService, PipSidenavService } from 'pip-webui-layouts-ngx';
import { PipThemesService } from 'pip-webui-themes-ngx';
import { NavpartsExampleComponent } from './navparts-example.component';
import { NavpartsExampleModule } from './navparts-example.module';

describe('NavpartsExampleComponent', () => {
  let component: NavpartsExampleComponent;
  let fixture: ComponentFixture<NavpartsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, NavpartsExampleModule, TranslocoTestingModule],
      providers: [PipMediaService, PipSidenavService, PipThemesService],
    }).compileComponents();
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
