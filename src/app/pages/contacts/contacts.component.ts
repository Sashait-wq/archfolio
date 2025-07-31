import { Component, inject } from '@angular/core';
import { ContactsPage } from '../../core/interfaces/contacts-page.interface';
import { ContactsPageService } from '../../core/services/contacts-page.service';
import { Observable } from 'rxjs';
import { ContactCardComponent } from '../../ui/contact-card/contact-card.component';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-contacts',
  imports: [ContactCardComponent, NgIf, AsyncPipe],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  private contactsPageService = inject(ContactsPageService);

  public contactsPage$: Observable<ContactsPage> = this.contactsPageService.getContacts();
}
