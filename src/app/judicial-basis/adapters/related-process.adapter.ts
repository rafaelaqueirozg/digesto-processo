import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter.interface';
import {
  RelatedProcessFromApi,
  RelatedProcessInterface,
} from '../interfaces/related-process.interface';

@Injectable({ providedIn: 'root' })
export class RelatedProcessAdapter
  implements Adapter<RelatedProcessInterface, RelatedProcessFromApi>
{
  adapt({
    id,
    distribuicao_data,
    codigo_identificador,
    instancia,
    natureza,
    numero,
    tribunal,
  }: RelatedProcessFromApi): RelatedProcessInterface {
    return {
      id,
      tribunal,
      caseNumber: numero,
      instance: instancia,
      caseNature: natureza,
      distributionDate: distribuicao_data,
      identifierCode: codigo_identificador,
    };
  }
}
