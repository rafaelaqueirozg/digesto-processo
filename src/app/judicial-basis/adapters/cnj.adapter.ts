import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter.interface';
import {
  CnjFromApi,
  OperationStatus,
} from '../interfaces/cnj-from-api.interface';
import { CnjInterface } from '../interfaces/cnj.interface';
import { NatureClassDigesto } from '../types/nature-class-digesto.type';
import { AttachmentAdapter } from './attachment.adapter';
import { AudienceAdapter } from './audience.adapter';
import { MovementAdapter } from './movement.adapter';
import { PartsAdapter } from './parts.adapter';
import { RelatedProcessAdapter } from './related-process.adapter';

@Injectable({ providedIn: 'root' })
export class CnjAdapter
  implements Adapter<CnjInterface, CnjFromApi | OperationStatus>
{
  constructor(
    private partsAdapter: PartsAdapter,
    private movementAdapter: MovementAdapter,
    private audienceAdapter: AudienceAdapter,
    private attachmentAdapter: AttachmentAdapter,
    private relatedProcessAdapter: RelatedProcessAdapter
  ) {}

  adapt(item: CnjFromApi | OperationStatus): CnjInterface {
    if ((item as OperationStatus).status_op) {
      return {} as CnjInterface;
    }

    item = item as CnjFromApi;

    return {
      regionalCnj: item.regional_cnj,
      alternativeNumber: item.numeroAlternativo,
      role: item.papel,
      natureId: item.natureza_id,
      rod: item.vara,
      natureClass: item.classeNatureza,
      roleId: item.papel_id,
      movements: item.movs.map((movement) =>
        this.movementAdapter.adapt(movement)
      ),
      distributionType: item.distribuicaoTipo,
      situation: item.situacao,
      jugde: item.juiz,
      area: item.area,
      extraSubject: item.assuntoExtra,
      injunction: item.liminar,
      audiences: item.audiencias.map((audience) =>
        this.audienceAdapter.adapt(audience)
      ),
      originalRod: item.vara_original,
      free: item.gratuita,
      value: item.valor,
      attachments: item.anexos.map((anexo) =>
        this.attachmentAdapter.adapt(anexo)
      ),
      updateDate: item.alteradoEm,
      systemFont: item.fonte_sistema,
      forum: item.foro,
      situationId: item.situacao_situacaoID,
      verdictDate: item.sentencaData,
      instance: item.instancia,
      relatedProcesses: item.processosRelacionados.map((processo) =>
        this.relatedProcessAdapter.adapt(processo)
      ),
      number: item.numero,
      customs: item.customs,
      flag: Boolean(item.flag),
      judicialDistrictCnj: item.comarca_cnj,
      judicialDistrict: item.comarca,
      tribunalId: item.tribunalID,
      natureClassDigesto: item.classeNatureza_dg as NatureClassDigesto,
      forumCnj: item.foro_cnj,
      tribunal: item.tribunal,
      areaId: item.area_id,
      processId: item.processoID,
      distributionDate: item.distribuicaoData,
      hasSecretJustice: item.segredo_justica,
      isFiled: item.arquivado,
      classes: item.classes,
      access: item.acessos,
      uf: item.uf,
      createDate: item.criadoEm,
      parts: item.partes.map((parte) => this.partsAdapter.adapt(parte)),
      polo: item.polo,
    };
  }
}
