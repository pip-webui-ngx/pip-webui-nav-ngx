import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { PipSecondaryActionsComponent } from './secondary-actions.component';

@NgModule({
  declarations: [
    PipSecondaryActionsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    PipSecondaryActionsComponent
  ],
  providers: [],
})
export class PipSecondaryActionsModule { }
