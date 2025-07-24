import { Component, Input } from '@angular/core';
import { Contacts } from '../../../core/interfaces/contacts.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormModel } from '../../../core/interfaces/formContacts.model';
import { MatIcon } from '@angular/material/icon';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-main-contacts',
  imports: [ReactiveFormsModule, MatIcon],
  templateUrl: './main-contacts.component.html',
  styleUrl: './main-contacts.component.scss'
})
export class MainContactsComponent {
  @Input() contacts!: Contacts;

  public form = new FormGroup<FormModel>({
    name: new FormControl(null, Validators.required),
    phone: new FormControl(null, [Validators.required, Validators.pattern('[0-9]{10}')]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    interested: new FormControl(null),
    message: new FormControl(null)
  });

  public onSubmit(): void {
    console.log(this.form.value);
  }
}
