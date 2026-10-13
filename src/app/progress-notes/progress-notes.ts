
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

  private readonly projectCodeMap: Record<string, string> = {
    PPT101: 'Project Progress Tracker',
    WEB202: 'Website Redesign',
    APP303: 'Mobile Application Development',
    DATA404: 'Data Analytics Dashboard'
  };

  projectCodeMessage = '';

  progressNotesForm = new FormGroup({

    projectCode: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),

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

  onProjectCodeBlur(): void {
    const code = this.progressNotesForm.controls.projectCode
      .value
      .trim()
      .toUpperCase();

    const projectName = this.projectCodeMap[code];

    if (projectName) {
      this.progressNotesForm.controls.projectName.setValue(projectName);
      this.projectCodeMessage = '';
    } else {
      this.progressNotesForm.controls.projectName.setValue('');
      this.projectCodeMessage = code
        ? 'Project code not found.'
        : '';
    }
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.progressNotesForm.valid) {
      console.log('Progress Notes:', this.progressNotesForm.value);
    } else {
      this.progressNotesForm.markAllAsTouched();
    }
  }
}
