import * as Rollbar from 'rollbar';
import { InjectionToken } from '@angular/core';

const rollBarConfig = {
  accessToken: 'dae488098b234216965f0514fbb7a601',

  captureUncaught: true,
  captureUnhandledRejections: true,
};

export function rollbarFactory(): Rollbar {
  return new Rollbar(rollBarConfig);
}

export const RollbarService = new InjectionToken<Rollbar>('rollbar');