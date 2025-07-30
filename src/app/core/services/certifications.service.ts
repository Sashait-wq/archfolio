import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { map, Observable } from 'rxjs';
import { Certification } from '../interfaces/certifications.model';

@Injectable({
  providedIn: 'root'
})
export class CertificationsService extends BaseService {
  public getCertifications(): Observable<Certification[]> {
    return this.get('certifications.json').pipe(map((data) => data.certifications));
  }
}
