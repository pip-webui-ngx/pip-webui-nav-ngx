import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  PipAppbarModule,
  PipMediaModule,
  PipRootLayoutModule,
  PipSidenavModule,
  PipSidenavPosition,
} from 'pip-webui-layouts-ngx';
import {
  PipBreadcrumbModule,
  PipNavHeaderModule,
  PipNavIconModule,
  PipNavMenuModule,
  PipNavModule,
  PipPrimaryActionsModule,
  PipSecondaryActionsModule,
} from 'pip-webui-nav-ngx';
import { mstThemes, PipThemesModule, pipWebUI2ThemesList } from 'pip-webui-themes-ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavpartsExampleModule } from './navparts-example/navparts-example.module';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,

    PipThemesModule.forRoot({
      themes: [...pipWebUI2ThemesList, mstThemes['Elegant']],
    }),
    PipAppbarModule.forRoot(),
    PipMediaModule.forRoot(),
    PipSidenavModule,
    PipRootLayoutModule,
    PipSidenavModule.withConfig({
      start: {
        views: [
          {
            name: 'default',
            position: PipSidenavPosition.Main,
            width: 250,
          },
          {
            name: 'tablet',
            alias: 'lt-md',
            position: PipSidenavPosition.Root,
            mode: 'side',
            collapsed: true,
            opened: true,
            active: false,
            width: 250,
          },
          {
            name: 'mobile',
            alias: 'lt-sm',
            position: PipSidenavPosition.Root,
            mode: 'over',
            width: 250,
          },
        ],
      },
      end: {
        views: [
          {
            name: 'default',
            position: PipSidenavPosition.Root,
            mode: 'side',
            width: 350,
          },
          {
            name: 'mobile',
            alias: 'lt-sm',
            position: PipSidenavPosition.Root,
            mode: 'over',
          },
        ],
      },
    }),
    PipBreadcrumbModule,
    PipNavIconModule,
    PipPrimaryActionsModule,
    PipSecondaryActionsModule,
    PipNavModule,
    PipNavHeaderModule,
    PipNavMenuModule,

    AppRoutingModule,
    NavpartsExampleModule,
    HttpClientModule,
    TranslocoRootModule,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
