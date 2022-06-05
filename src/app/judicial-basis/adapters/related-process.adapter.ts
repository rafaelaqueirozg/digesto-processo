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
  adapt(item: RelatedProcessFromApi): RelatedProcessInterface {
    return {
      id: item.id,
      tribunal: item.tribunal,
      caseNumber: item.numero,
      instance: item.instancia,
      caseNature: item.natureza,
      distributionDate: item.distribuicao_data,
      identifierCode: item.codigo_identificador,
    };
  }
}
