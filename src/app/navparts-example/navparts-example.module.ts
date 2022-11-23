import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { PipDocumentLayoutModule, PipShadowModule } from 'pip-webui2-layouts';
import { PipNavModule } from 'pip-webui2-nav';

import { NavpartsExampleComponent } from './navparts-example.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule, MatInputModule, MatToolbarModule, MatListModule,
    TranslateModule.forChild(),
    PipDocumentLayoutModule, PipShadowModule,
    PipNavModule
  ],
  declarations: [NavpartsExampleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavpartsExampleModule { }
