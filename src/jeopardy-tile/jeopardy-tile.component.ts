import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Signal,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-jeopardy-tile',
  templateUrl: './jeopardy-tile.component.html',
  styleUrls: ['./jeopardy-tile.component.css'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JeopardyTileComponent implements OnInit {
  @Input({ required: true })
  title: Signal<string>;

  constructor() {}

  ngOnInit() {}
}
