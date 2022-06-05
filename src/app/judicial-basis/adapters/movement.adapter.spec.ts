import { STANDARDIZED_TYPE_DIGESTO } from 'src/app/shared/utils/standardized-type-digesto';
import { Movs } from '../types/movs.type';
import { MovementAdapter } from './movement.adapter';

describe('MovementAdapter', () => {
  let adapter = new MovementAdapter();

  it('should adapt movement', () => {
    const movementFromApi: Movs = [
      '2022-03-07',
      'Andamento - Expedicao',
      'EXPEDICAO - Expedição de comunicação via sistema.',
      '',
      4638273704,
      [[21, 2]],
    ];

    const movementAdapted = adapter.adapt(movementFromApi);

    expect(movementAdapted).toEqual({
      date: movementFromApi[0],
      type: movementFromApi[1],
      text: movementFromApi[2],
      judgeName: movementFromApi[3],
      id: movementFromApi[4],
      digestType:
        STANDARDIZED_TYPE_DIGESTO[movementFromApi[5][0][0]][
          movementFromApi[5][0][1]
        ],
    });
  });
});
