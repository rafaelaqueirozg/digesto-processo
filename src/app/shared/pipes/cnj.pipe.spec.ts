import { CnjPipe } from './cnj.pipe';

describe('CnjPipe', () => {
  const pipe = new CnjPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format to CNJ', () => {
    const cnj = pipe.transform('50016828820208130672');
    expect(cnj).toEqual('5001682-88.2020.8.13.0672');
  });
});
