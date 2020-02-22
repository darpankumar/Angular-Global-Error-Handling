import { Injectable } from '@angular/core';
import * as Rollbar from 'rollbar';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor(private rollbar: Rollbar) { }

  logError(error) {
    this.rollbar.error(error.message);
  }
}
