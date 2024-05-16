import { NgModule } from '@angular/core';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { DelayComponent } from './delay/delay.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [TimeDisplayComponent, DelayComponent],
  exports: [TimeDisplayComponent, DelayComponent],
  imports: [CommonModule, RouterOutlet],
})
export class AppModule {}
