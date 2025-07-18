import { Component, Input } from '@angular/core';
import { MainAbout } from '../../../core/interfaces/main.model';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [MatIcon, RouterLink, NgIf],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  @Input() about!: MainAbout;
}
