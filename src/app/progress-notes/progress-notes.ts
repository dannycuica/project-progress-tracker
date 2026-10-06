import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-progress-notes',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './progress-notes.html',
  styleUrl: './progress-notes.css'
})
export class ProgressNotesComponent {

  progressNotesForm = new FormGroup({

    projectName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),

    date: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),

    currentStatus: new FormControl('On Track', {
      nonNullable: true,
      validators: [Validators.required]
    }),

    teamMember: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),

    progressNote: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    })

  });

  submitted = false;

  onSubmit(): void {
    this.submitted = true;

    if (this.progressNotesForm.valid) {
      console.log('Progress Notes:', this.progressNotesForm.value);
    } else {
      this.progressNotesForm.markAllAsTouched();
    }
  }
}
