import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { map, Observable } from 'rxjs';
import { Contacts, FormContacts } from '../interfaces/contacts.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService extends BaseService {
  public getContacts(): Observable<Contacts> {
    return this.get('contacts.json').pipe(map((data) => data.contacts));
  }

  public postContacts(contact: FormContacts): Observable<FormContacts> {
    return this.post(contact);
  }
}
