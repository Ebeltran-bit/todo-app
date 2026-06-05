import { Injectable, signal } from '@angular/core';

// Service that controls the visibility of the task panel across the application
@Injectable({ providedIn: 'root' }) // Registers the service as a singleton available throughout the entire app
export class TaskPanelService {

    isOpen = signal(false); // Signal that stores the current visibility state of the task panel

    open() { this.isOpen.set(true); } // Sets isOpen to true to show the task panel
    close() { this.isOpen.set(false); } // Sets isOpen to false to hide the task panel
}