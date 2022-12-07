import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { PipBreadcrumbComponent } from './breadcrumb.component';

@NgModule({
  declarations: [PipBreadcrumbComponent],
  imports: [CommonModule, FlexLayoutModule, MatMenuModule, MatButtonModule, MatIconModule],
  exports: [PipBreadcrumbComponent],
  providers: [],
})
export class PipBreadcrumbModule {}
