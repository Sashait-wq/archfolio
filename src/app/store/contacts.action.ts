import { createAction, props } from '@ngrx/store';
import { FormContacts } from '../core/interfaces/contacts.model';

enum ContactsActionType {
  loadContact = '[Contacts] Load Contacts',
  loadContactSuccess = '[Contacts] Load Contacts Success',
  loadContactFailure = '[Contacts] Load Contacts Error'
}

export const loadContact = createAction(
  ContactsActionType.loadContact,
  props<{ contact: FormContacts }>()
);
export const loadContactSuccess = createAction(
  ContactsActionType.loadContactSuccess,
  props<{ contact: FormContacts }>()
);
export const loadContactFailure = createAction(
  ContactsActionType.loadContactFailure,
  props<{ error: any }>()
);
