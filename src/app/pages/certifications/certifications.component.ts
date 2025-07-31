import { Component, inject } from '@angular/core';
import { CertificationsService } from '../../core/services/certifications.service';
import { Certification } from '../../core/interfaces/certifications.model';
import { Observable } from 'rxjs';
import { CertificationCardComponent } from '../../ui/certification-card/certification-card.component';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-certifications',
  imports: [CertificationCardComponent, NgIf, AsyncPipe],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent {
  private certificationsService = inject(CertificationsService);

  public certifications$: Observable<Certification[]> =
    this.certificationsService.getCertifications();
}
