import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ContactsService } from '../core/services/contacts.service';
import { loadContact, loadContactFailure, loadContactSuccess } from './contacts.action';
import { catchError, map, of, switchMap, tap } from 'rxjs';

@Injectable()
export class ContactsEffects {
  private actions$ = inject(Actions);
  private contactsService = inject(ContactsService);

  contact$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadContact),
      switchMap(({ contact }) =>
        this.contactsService.postContactsUs(contact).pipe(
          tap((response) => localStorage.setItem('lastContactForm', JSON.stringify(response))),
          map((contact) => loadContactSuccess({ contact })),
          catchError((error) => of(loadContactFailure({ error })))
        )
      )
    );
  });
}
