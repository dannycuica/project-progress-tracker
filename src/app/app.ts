import { Component } from '@angular/core';
import { MilestoneTrackerComponent } from './milestone-tracker/milestone-tracker';
import { ProgressNotesComponent } from './progress-notes/progress-notes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MilestoneTrackerComponent,
    ProgressNotesComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Project Progress Tracker';
}
