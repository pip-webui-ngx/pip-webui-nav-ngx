import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslocoModule } from '@ngneat/transloco';
import { PipDocumentLayoutModule, PipShadowModule } from 'pip-webui-layouts-ngx';
import { PipNavModule } from 'pip-webui-nav-ngx';
import { NavpartsExampleComponent } from './navparts-example.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatListModule,
    TranslocoModule,
    PipDocumentLayoutModule,
    PipShadowModule,
    PipNavModule,
  ],
  declarations: [NavpartsExampleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NavpartsExampleModule {}
