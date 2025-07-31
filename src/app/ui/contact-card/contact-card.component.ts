import { Component, Input } from '@angular/core';
import { ContactsPage } from '../../core/interfaces/contacts-page.interface';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-contact-card',
  imports: [MatIcon],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.scss'
})
export class ContactCardComponent {
  @Input() contacts?: ContactsPage;
  protected readonly encodeURIComponent = encodeURIComponent;
}
