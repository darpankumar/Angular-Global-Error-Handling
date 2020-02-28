import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  catchError,
  flatMap
} from 'rxjs/operators';
import { TokenRefreshService } from './token-refresh.service';
@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(private tokenRefreshService: TokenRefreshService) { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        //debugger;
        if (error.status === 401) {
          return this.tokenRefreshService.getNewToken().pipe(flatMap(val => {
            const updatedReq = req.clone({
              setHeaders: {
                'Authorization': val
              }
            });
            return next.handle(updatedReq);
          }));
        } else if (error.status === 504) {
          // here we are retrying the call
          return next.handle(req);
        } else {
          // example like 404
          throw error;
        }
      })
    );
  }
}
