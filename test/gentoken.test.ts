import generateToken from './../src/index';

describe('GenToken UT', () => {
  it('basic generate token', () => {
    const generator: IterableIterator<string> = generateToken();

    const token: string = generator.next().value;

    expect(typeof token).toBe('string');
  });

  it('generate token with prefix', () => {
    const generator: IterableIterator<string> = generateToken('prefix');

    const token: string = generator.next().value;

    expect(token).toMatch(/^prefix\w+/);
  });

  it('generate token with suffix', () => {
    const generator: IterableIterator<string> = generateToken('', 'suffix');

    const token: string = generator.next().value;

    expect(token).toMatch(/\w+suffix$/);
  });

  it('generate token with fixed length', () => {
    const generator: IterableIterator<string> = generateToken('', '', 100);

    const token: string = generator.next().value;

    expect(token.length).toBe(100);
  });
});
