import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterService extends BaseService {
  public getFooter() {
    return this.get('footer.json').pipe(map((data) => data.footer));
  }
}
