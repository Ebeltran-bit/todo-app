import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular'; // Enables the full-calendar component in the template
import { CalendarOptions } from '@fullcalendar/core'; // Type that defines the configuration options for the calendar
import dayGridPlugin from '@fullcalendar/daygrid'; // Plugin that enables the month grid view
import timeGridPlugin from '@fullcalendar/timegrid'; // Plugin that enables the week and day views with time slots
import interactionPlugin from '@fullcalendar/interaction'; // Plugin that enables clicking and dragging events

@Component({
  selector: 'app-calendar-page',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './calendar-page.html',
})
export default class CalendarPageComponent {

  // Configuration object passed to the full-calendar component
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth', // Sets the default view to month grid on load
    headerToolbar: {
      left: 'prev,next today', // Navigation buttons on the left
      center: 'title', // Current month and year in the center
      right: 'dayGridMonth,timeGridWeek,timeGridDay' // View switcher buttons on the right
    },
    editable: true, // Allows dragging and dropping events to change their date
    selectable: true, // Allows clicking on a day to select it
    events: [
      { title: 'Task 1', date: '2026-06-01' },
      { title: 'Task 2', date: '2026-06-04' },
      { title: 'Task 3', date: '2026-06-10' },
    ]
  };
}