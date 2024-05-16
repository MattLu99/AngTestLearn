import { Component } from '@angular/core';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AngTestLearn';
  dateValue = new Date('2000.01.01');

  changeDelay(value: number) {
    this.dateValue.setTime(this.dateValue.getTime() + value);
  }
}
