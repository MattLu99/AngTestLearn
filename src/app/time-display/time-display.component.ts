import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrl: './time-display.component.scss',
})
export class TimeDisplayComponent {
  @Input({ required: true }) date!: string;
}
