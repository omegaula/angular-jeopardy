// import required packages
import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { JeopardyAppComponent } from './jeopardy-app/jeopardy-app.component';

// describe component
@Component({
  selector: 'add-one-button', // component name used in markup
  standalone: true, // component is self-contained
  // the component's markup
  template: `
   <app-jeopardy-app></app-jeopardy-app>
  `,
  imports: [JeopardyAppComponent],
})

// export component
export class AddOneButtonComponent {}

bootstrapApplication(AddOneButtonComponent);
