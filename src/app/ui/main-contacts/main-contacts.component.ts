import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contacts, FormContacts } from '../../core/interfaces/contacts.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormModel } from '../../core/interfaces/formContacts.model';
import { MatIcon } from '@angular/material/icon';
import { LazyLoadImageDirective } from '../../shared/directives/lazy-load-image.directive';

@Component({
  selector: 'app-main-contacts',
  imports: [ReactiveFormsModule, MatIcon, LazyLoadImageDirective],
  templateUrl: './main-contacts.component.html',
  styleUrl: './main-contacts.component.scss'
})
export class MainContactsComponent {
  @Input() contacts!: Contacts;
  @Output() formSubmit = new EventEmitter<FormContacts>();

  public form = new FormGroup<FormModel>({
    name: new FormControl(null, Validators.required),
    phone: new FormControl(null, [Validators.required, Validators.pattern('[0-9]{10}')]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    interested: new FormControl(null),
    message: new FormControl(null)
  });

  public onSubmit(): void {
    this.formSubmit.emit(this.form.value as FormContacts);
    this.form.reset();
  }
}
