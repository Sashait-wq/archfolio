import { Component, Input } from '@angular/core';
import { MainFocus } from '../../core/interfaces/main.model';
import { JoinTitlesPipe } from '../../core/pipes/join-titles.pipe';

@Component({
  selector: 'app-focus',
  imports: [JoinTitlesPipe],
  templateUrl: './focus.component.html',
  styleUrl: './focus.component.scss'
})
export class FocusComponent {
  @Input() focus: MainFocus[] = [];
}
