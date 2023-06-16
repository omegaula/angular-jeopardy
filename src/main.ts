// import required packages
import 'zone.js';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { JeopardyAppComponent } from './jeopardy-app/jeopardy-app.component';

// describe component
@Component({
  selector: 'add-one-button',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
   <app-jeopardy-app></app-jeopardy-app>
  `,
  imports: [JeopardyAppComponent],
})

// export component
export class AddOneButtonComponent {}

bootstrapApplication(AddOneButtonComponent);
