import { RelatedProcessFromApi } from '../interfaces/related-process.interface';
import { RelatedProcessAdapter } from './related-process.adapter';

describe('RelatedProcessAdapter', () => {
  let adapter = new RelatedProcessAdapter();

  it('should adapt relatedProcess', () => {
    const relatedProcessFromApi: RelatedProcessFromApi = {
      tribunal: 'TJMG',
      natureza: 'RECURSO INOMINADO CIVEL',
      distribuicao_data: '2020-07-13',
      numero: '50016828820208130000',
      instancia: 2,
      codigo_identificador: 'RECURSO INOMINADO CÍVEL 5001682-88.2020.8.13.0000',
      id: 123456789,
    };

    const relatedProcessAdapted = adapter.adapt(relatedProcessFromApi);

    expect(relatedProcessAdapted).toEqual({
      id: relatedProcessFromApi.id,
      tribunal: relatedProcessFromApi.tribunal,
      caseNumber: relatedProcessFromApi.numero,
      instance: relatedProcessFromApi.instancia,
      caseNature: relatedProcessFromApi.natureza,
      distributionDate: relatedProcessFromApi.distribuicao_data,
      identifierCode: relatedProcessFromApi.codigo_identificador,
    });
  });
});
