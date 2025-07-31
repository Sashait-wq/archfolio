import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { map, Observable } from 'rxjs';
import { ContactsPage } from '../interfaces/contacts-page.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactsPageService extends BaseService {
  public getContacts(): Observable<ContactsPage> {
    return this.get('contacts.json').pipe(map((data) => data.contacts));
  }
}
