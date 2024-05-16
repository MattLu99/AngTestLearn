import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrl: './delay.component.scss',
})
export class DelayComponent {
  @Output() delayEvent = new EventEmitter<number>();

  delayChanged(event: Event) {
    const inputNumber = Number((event.target as HTMLInputElement).value);
    this.delayEvent.emit(inputNumber);
  }
}
