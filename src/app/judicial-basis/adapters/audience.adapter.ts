import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter.interface';
import { AudienceInterface } from '../interfaces/audience.interface';
import { Audicence } from '../types/audience.type';

@Injectable({ providedIn: 'root' })
export class AudienceAdapter implements Adapter<AudienceInterface, Audicence> {
  adapt(item: Audicence): AudienceInterface {
    return {
      date: item[0],
      local: item[1],
      type: item[2],
      situation: item[3],
    };
  }
}
