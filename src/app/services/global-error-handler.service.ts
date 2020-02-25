import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService {

  constructor(private loggingService: LoggingService) { }

  handleError(error) {
    debugger;
    if (error instanceof HttpErrorResponse) {
      alert('Backend error occur')
    } else {
      alert('Frontend error occur');
    }
    this.loggingService.logError(error);
    console.error(error);
  }
}





// you can also do this if you want the defualt functionality as well using super
//export class GlobalErrorHandlerService extends ErrorHandler {

//   constructor(private loggingService: LoggingService) {
//     super();
//   }

//   handleError(error) {
//     if (error instanceof HttpErrorResponse) {
//       alert('Backend error occur')
//     } else {
//       alert('Frontend error occur');
//     }
//     this.loggingService.logError(error);
//     super.handleError(error);
//   }
// }