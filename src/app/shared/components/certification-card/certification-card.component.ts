import { Component, Input } from '@angular/core';
import { Certification } from '../../../core/interfaces/certifications.model';
import { DatePipe } from '@angular/common';
import { LazyLoadImageDirective } from '../../directives/lazy-load-image.directive';

@Component({
  selector: 'app-certification-card',
  imports: [LazyLoadImageDirective, DatePipe],
  templateUrl: './certification-card.component.html',
  styleUrl: './certification-card.component.scss'
})
export class CertificationCardComponent {
  @Input() certifications: Certification[] = [];
}
