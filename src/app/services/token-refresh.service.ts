import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenRefreshService {

  constructor() { }

  getNewToken(): Observable<any> {
    return of(12345).pipe(
    );
  }
}
