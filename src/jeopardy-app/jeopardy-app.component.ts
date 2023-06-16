import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { JeopardyTileComponent } from '../jeopardy-tile/jeopardy-tile.component';

@Component({
  selector: 'app-jeopardy-app',
  templateUrl: './jeopardy-app.component.html',
  styleUrls: ['./jeopardy-app.component.css'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JeopardyTileComponent],
})
export class JeopardyAppComponent implements OnInit {
  tile1 = signal('$100');

  ngOnInit() {}
}
