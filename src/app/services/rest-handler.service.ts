import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestHandlerService {
  constructor(private http: HttpClient) { }

  get(url): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({ 'Authorization': '1234' });
    return this.http.get(url, { headers });
    // return this.http.get(url).pipe(
    //   catchError(error => {
    //     alert("error catch using Httpclient and catchError operator");
    //     return throwError(error);
    //   })
    // );
  }
}
