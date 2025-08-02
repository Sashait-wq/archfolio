import { Component, Input } from '@angular/core';
import { MainAbout } from '../../core/interfaces/main.model';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { LazyLoadImageDirective } from '../../shared/directives/lazy-load-image.directive';

@Component({
  selector: 'app-about',
  imports: [MatIcon, RouterLink, NgIf, LazyLoadImageDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  @Input() about!: MainAbout;
}
