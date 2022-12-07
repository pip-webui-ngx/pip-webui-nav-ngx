import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { PipSecondaryActionsComponent } from './secondary-actions.component';

@NgModule({
  declarations: [PipSecondaryActionsComponent],
  imports: [CommonModule, FlexLayoutModule, MatButtonModule, MatIconModule, MatMenuModule],
  exports: [PipSecondaryActionsComponent],
  providers: [],
})
export class PipSecondaryActionsModule {}
