import { Injectable, Injector } from '@angular/core';
import { RollbarService } from '../config';
import * as Rollbar from 'rollbar';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  rollbar: Rollbar;
  constructor(private injector: Injector) {
  }

  logError(error) {
    const rollbar = this.injector.get(RollbarService);
    rollbar.error(error.message);
  }
}
