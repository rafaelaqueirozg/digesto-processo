import { Area } from '../types/area.type';
import { Attachment } from '../types/attachment.type';
import { Audicence } from '../types/audience.type';
import { Flag } from '../types/flag.type';
import { Movs } from '../types/movs.type';
import { Parts } from '../types/parts.type';
import { RelatedProcessFromApi } from './related-process.interface';

export interface CnjFromApi {
  regional_cnj: boolean | null;
  numeroAlternativo: string;
  papel: string;
  natureza_id: number;
  vara: string;
  classeNatureza: string;
  papel_id: number;
  movs: Movs[];
  distribuicaoTipo: string;
  situacao: string | null;
  juiz: string | null;
  area: Area;
  assuntoExtra: string;
  liminar: boolean | null;
  audiencias: Audicence[];
  vara_original: string;
  gratuita: boolean | null;
  valor: number | null;
  anexos: Attachment[];
  alteradoEm: string;
  fonte_sistema: string;
  foro: string;
  situacao_situacaoID: number | null;
  sentencaData: string | null;
  instancia: number;
  processosRelacionados: RelatedProcessFromApi[];
  numero: string;
  customs: any[];
  flag: Flag;
  comarca_cnj: string;
  comarca: string;
  tribunalID: number;
  classeNatureza_dg: number;
  foro_cnj: string;
  tribunal: string;
  area_id: number;
  processoID: number;
  distribuicaoData: string;
  segredo_justica: boolean;
  arquivado: boolean;
  classes: string[];
  acessos: string[];
  uf: string;
  criadoEm: string;
  partes: Parts[];
  polo: boolean;

  /**
   * 0 para não-extinto.
   * 1 ou mais para já extinto.
   *
   * Alguns tribunais mostram um checkbox “extinto”, e salvamos nesse campo o
   * valor que estiver no tribunal.
   * Pode ser o caso do tribunal não informar isso e o processo estar extinto,
   * nesse caso vamos informar por default 0.
   */
  extinto: number;
}

export interface OperationStatus {
  status_op: string;
}
