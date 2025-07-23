import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class FooterService extends BaseService {
  public getFooter() {
    return this.get('footer.json');
  }
}
