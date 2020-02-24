import * as Rollbar from 'rollbar';
import { InjectionToken } from '@angular/core';

const rollBarConfig = {
  accessToken: 'd875b0e557544bb39021bf7ff48ef188',
  captureUncaught: true,
  captureUnhandledRejections: true,
};

export function rollbarFactory(): Rollbar {
  return new Rollbar(rollBarConfig);
}

export const RollbarService = new InjectionToken<Rollbar>('rollbar');