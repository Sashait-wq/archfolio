import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { Contacts, ContactsForm } from '../interfaces/contacts.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactsService extends BaseService {
  public getContacts(): Observable<Contacts> {
    return this.get('contacts.json');
  }

  public postContacts(contact: ContactsForm): Observable<ContactsForm> {
    return this.post(contact);
  }
}
