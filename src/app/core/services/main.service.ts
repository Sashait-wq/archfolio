import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { Main } from '../interfaces/main.model';

@Injectable({
  providedIn: 'root'
})
export class MainService extends BaseService {
  public getMain(): Observable<Main> {
    return this.get('main.json');
  }
}
