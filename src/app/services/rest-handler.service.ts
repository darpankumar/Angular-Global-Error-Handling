import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class RestHandlerService {
  constructor(private http: HttpClient) {}

  get(url): Observable<any> {
    return this.http.get(url);
    // return this.http.get(url).pipe(
    //   catchError(error => {
    //     alert("error catch using Httpclient and catchError operator");
    //     return throwError(error);
    //   })
    // );
  }
}
