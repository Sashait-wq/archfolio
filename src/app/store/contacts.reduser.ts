import { FormContacts } from '../core/interfaces/contacts.model';
import { createReducer, on } from '@ngrx/store';
import { loadContact, loadContactFailure, loadContactSuccess } from './contacts.action';

export interface ContactsState {
  contact: FormContacts | null;
  error: any;
}

const initialState: ContactsState = {
  contact: null,
  error: null
};

export const contactsReducer = createReducer(
  initialState,
  on(loadContact, (state) => ({
    ...state,
    contact: state.contact,
    error: null
  })),
  on(loadContactSuccess, (state, { contact }) => ({
    ...state,
    contact,
    error: null
  })),
  on(loadContactFailure, (state, { error }) => ({
    ...state,
    error: error
  }))
);
