import { Injectable, ErrorHandler } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GlobalErrorHandlerService extends ErrorHandler {
  handleError(error) {
    if (error instanceof HttpErrorResponse) {
      //  alert("An error occur in your Backend");
    } else {
      alert("An error occur in your Client ");
    }
    super.handleError(error);
  }
}
