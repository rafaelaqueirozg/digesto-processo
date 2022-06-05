import { Injectable } from '@angular/core';
import { STANDARDIZED_TYPE_DIGESTO } from 'src/app/shared/utils/standardized-type-digest';
import { Adapter } from '../interfaces/adapter.interface';
import { MovementInterface } from '../interfaces/movement.interface';
import { Movs } from '../types/movs.type';

@Injectable({
  providedIn: 'root',
})
export class MovementAdapter implements Adapter<MovementInterface, Movs> {
  adapt(item: Movs): MovementInterface {
    return {
      date: item[0],
      type: item[1],
      text: item[2],
      judgeName: item[3],
      id: item[4],
      digestType: STANDARDIZED_TYPE_DIGESTO[item[5][0][0]][item[5][0][1]],
    };
  }
}
