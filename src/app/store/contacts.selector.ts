import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ContactsState } from './contacts.reduser';

const selectContactsFeature = createFeatureSelector<ContactsState>('contacts');
export const selectContacts = createSelector(selectContactsFeature, (state) => state.contact);
export const selectContactsFailure = createSelector(selectContactsFeature, (state) => state.error);
