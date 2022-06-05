import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter.interface';
import { LawyerInterface } from '../interfaces/lawyer.interface';
import { Lawyer } from '../types/lawyer.type';

@Injectable({
  providedIn: 'root',
})
export class LawyerAdapter implements Adapter<LawyerInterface, Lawyer> {
  adapt(item: Lawyer): LawyerInterface {
    return {
      id: item[0],
      name: item[1],
      oab: item[2],
      cpf: item[3],
      uf: item[4],
    };
  }
}
