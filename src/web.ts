import { WebPlugin } from '@capacitor/core';

import type {
  DatetimePickerPlugin,
  PresentOptions,
  PresentResult,
} from './definitions';

export class DatetimePickerWeb
  extends WebPlugin
  implements DatetimePickerPlugin {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async present(_options: PresentOptions): Promise<PresentResult> {
    throw this.unimplemented('Not implemented on web.');
  }
}
