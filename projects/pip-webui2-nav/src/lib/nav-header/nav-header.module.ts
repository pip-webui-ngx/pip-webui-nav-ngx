import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';

import { PipNavHeaderComponent } from './nav-header.component';

@NgModule({
  declarations: [
    PipNavHeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    FlexLayoutModule,
    TranslateModule,
  ],
  exports: [
    PipNavHeaderComponent
  ],
  providers: [],
})
export class PipNavHeaderModule { }
