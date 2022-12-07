import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { PipNavMenuSectionComponent } from './nav-menu-section.component';

import { PipNavMenuComponent } from './nav-menu.component';

@NgModule({
  declarations: [PipNavMenuComponent, PipNavMenuSectionComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FormsModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatOptionModule,
    MatGridListModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  exports: [PipNavMenuComponent, PipNavMenuSectionComponent],
  providers: [],
})
export class PipNavMenuModule {}
