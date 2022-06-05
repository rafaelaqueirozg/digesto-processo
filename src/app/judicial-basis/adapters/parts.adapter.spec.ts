import { Parts } from '../types/parts.type';
import { LawyerAdapter } from './lawyer.adapter';
import { PartsAdapter } from './parts.adapter';

describe('PartsAdapter', () => {
  let adapter = new PartsAdapter(new LawyerAdapter());

  it('should adapt parts', () => {
    const partsFromApi: Parts = [
      11111111,
      1234,
      'RAFAELA LTDA BRASIL S.A.',
      'RAFAELA LTDA BRASIL SA',
      0,
      0,
      '',
      40,
      'REQUERENTE',
      [[132154656, 'RAFAELA QUEIROZ', 'XX123465', '987456321', '']],
      true,
      false,
      false,
      false,
      0,
      0,
      false,
    ];

    const partsAdapted = adapter.adapt(partsFromApi);

    expect(partsAdapted).toEqual({
      processInternalId: partsFromApi[0],
      partInternalId: partsFromApi[1],
      name: partsFromApi[2],
      normalizedName: partsFromApi[3],
      cnpj: partsFromApi[4],
      cpf: partsFromApi[5],
      document: partsFromApi[6],
      partRelationId: partsFromApi[7],
      normalizedRelation: partsFromApi[8],
      lawyers: partsFromApi[9].map((lawyer) =>
        adapter['lawerAdapter'].adapt(lawyer)
      ),
      isAuthor: partsFromApi[10],
      isCoAuthor: partsFromApi[11],
      isAccused: partsFromApi[12],
      isNeutral: partsFromApi[13],
      zipCode: partsFromApi[14],
      monitoredPersonId: partsFromApi[15],
      isPhysicalPerson: partsFromApi[16],
    });
  });
});
