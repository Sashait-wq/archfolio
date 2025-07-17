import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private http = inject(HttpClient);
  private url = 'assets/mock/';

  private handleError(error: any) {
    console.error('Error', error);
    return throwError(() => error);
  }

  public get(url: string): Observable<any> {
    return this.http.get<any>(this.url + url).pipe(catchError(this.handleError));
  }

  public post(data: any): Observable<any> {
    console.warn('POST is disabled: working with static mock data from assets.');
    return of(data).pipe(catchError(this.handleError));
  }
}
