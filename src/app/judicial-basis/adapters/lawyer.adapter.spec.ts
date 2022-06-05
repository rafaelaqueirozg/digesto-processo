import { Lawyer } from '../types/lawyer.type';
import { LawyerAdapter } from './lawyer.adapter';

describe('LawyerAdapter', () => {
  let adapter = new LawyerAdapter();

  it('should adapt lawyer', () => {
    const lawyerFromApi: Lawyer = [
      546465465,
      'RAFAELA QUEIROZ',
      'XX123456 ',
      '00122364985',
      'SP',
    ];

    const lawyerAdapted = adapter.adapt(lawyerFromApi);

    expect(lawyerAdapted).toEqual({
      id: lawyerFromApi[0],
      name: lawyerFromApi[1],
      oab: lawyerFromApi[2],
      cpf: lawyerFromApi[3],
      uf: lawyerFromApi[4],
    });
  });
});
