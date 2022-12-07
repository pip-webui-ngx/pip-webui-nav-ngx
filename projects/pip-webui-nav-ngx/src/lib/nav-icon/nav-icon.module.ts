import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PipNavIconComponent } from './nav-icon.component';

@NgModule({
  declarations: [PipNavIconComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [PipNavIconComponent],
  providers: [],
})
export class PipNavIconModule {}
