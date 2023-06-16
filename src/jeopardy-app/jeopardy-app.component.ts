import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jeopardy-app',
  templateUrl: './jeopardy-app.component.html',
  styleUrls: ['./jeopardy-app.component.css'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JeopardyAppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
