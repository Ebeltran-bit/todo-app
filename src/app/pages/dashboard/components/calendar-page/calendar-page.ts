import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-calendar-page',
  standalone: true,
  imports: [FormsModule, DatePickerModule],
  templateUrl: './calendar-page.html',
})
export default class CalendarPageComponent {
  date: Date = new Date();
}