import { Audicence } from '../types/audience.type';
import { AudienceAdapter } from './audience.adapter';

describe('AudienceAdapter', () => {
  let adapter = new AudienceAdapter();

  it('should adapt audience', () => {
    const audienceFromApi: Audicence = [
      '2020-03-19 14:30:00',
      'Unidade Jurisdicional Cível - 1º JD da Comarca de Sete Lagoas.',
      'Conciliação',
      'cancelada',
    ];

    const audienceAdapted = adapter.adapt(audienceFromApi);

    expect(audienceAdapted).toEqual({
      date: audienceFromApi[0],
      local: audienceFromApi[1],
      type: audienceFromApi[2],
      situation: audienceFromApi[3],
    });
  });
});
