import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
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
    // Avoid status check for api which refresh token otherwise it will go to infinte loop
    let count = 0;
    return next.handle(req).pipe(
      catchError((error) => {
        //debugger;
        count++;
        if (count > 1 || error.status === 404) {
          throw error;
        } else if (error.status === 401) {
          return this.tokenRefreshService.getNewToken().pipe(flatMap(val => {
            const updatedReq = req.clone({
              setHeaders: {
                'Authorization': val
              }
            });
            return next.handle(updatedReq);
          }));
          //This could be 504 or other status code
        } else {
          return next.handle(req);
        }
      })
    );
  }
}
