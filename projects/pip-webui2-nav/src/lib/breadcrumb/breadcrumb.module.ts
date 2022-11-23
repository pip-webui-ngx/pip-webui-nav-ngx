import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule } from '@ngx-translate/core';

import { PipBreadcrumbComponent } from './breadcrumb.component';

@NgModule({
  declarations: [
    PipBreadcrumbComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TranslateModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    PipBreadcrumbComponent
  ],
  providers: [],
})
export class PipBreadcrumbModule { }
