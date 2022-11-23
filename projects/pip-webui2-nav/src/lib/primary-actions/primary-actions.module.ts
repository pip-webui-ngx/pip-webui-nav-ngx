import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { PipPrimaryActionsComponent } from './primary-actions.component';

@NgModule({
  declarations: [
    PipPrimaryActionsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    PipPrimaryActionsComponent
  ],
  providers: [],
})
export class PipPrimaryActionsModule { }
