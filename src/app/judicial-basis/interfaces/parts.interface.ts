import { LawyerInterface } from './lawyer.interface';

export interface PartsInterface {
  processInternalId: number;
  partInternalId: number;
  name: string;
  normalizedName: string;
  cnpj: number;
  cpf: number;
  document: string;
  partRelationId: number;
  normalizedRelation: string;
  lawyers: LawyerInterface[];
  isAuthor: boolean;
  isCoAuthor: boolean;
  isAccused: boolean;
  isNeutral: boolean;
  zipCode: number;
  monitoredPersonId: number;
  isPhysicalPerson: boolean;
}
