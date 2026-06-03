import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendar-page',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './calendar-page.html',
})
export default class CalendarPageComponent {
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    editable: true,
    selectable: true,
    events: [
      { title: 'Task 1', date: '2026-06-01' },
      { title: 'Task 2', date: '2026-06-04' },
      { title: 'Task 3', date: '2026-06-10' },
    ]
  };
}