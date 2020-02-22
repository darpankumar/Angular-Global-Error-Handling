import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService extends ErrorHandler {

  constructor(private loggingService: LoggingService) {
    super();
  }

  handleError(error) {

    // //HttpErrorResponse is error reponse for http calls 
    // if (!(error instanceof HttpErrorResponse)) {

    //   alert('An Client side Error occur');
    // }

    if (error instanceof HttpErrorResponse) {

      alert('Backend error occur')
    } else {

      alert('Frontend error occur');
    }
    this.loggingService.logError(error);
    super.handleError(error);
  }
}








// if(error instanceof HttpErrorResponse){

//   alert('Backend error occur')
// } else {

//   alert('Frontend error occur');
// }