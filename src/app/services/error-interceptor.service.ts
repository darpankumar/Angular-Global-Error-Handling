import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Observable, throwError, empty } from "rxjs";
import { catchError } from "rxjs/operators";
import { RestHandlerService } from "./rest-handler.service";
@Injectable({
  providedIn: "root"
})
export class ErrorInterceptorService implements HttpInterceptor {
  constructor(private restService: RestHandlerService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        alert("Error Handle using interceptor");
        return throwError(error);
      })
    );
  }
}
