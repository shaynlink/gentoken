/* eslint-disable valid-jsdoc */
'use strict';

/**
 * Generate a pseudo-random string of a given length.
 * Default length is 10.
 * @function generateToken
 * @param {?string} [prefix=''] Prefix of the token.
 * @param {?string} [suffix=''] Suffix of the token.
 * @param {?number} [fixedLength=10] Fixed length of the token between 1 and 10.
 * @return {IterableIterator<string>}
 *
 * @example
 * const tokenizer = generateToken();
 *
 * const token1 = tokenizer.next().value;
 * const token2 = tokenizer.next().value;
 *
 * console.log(token1 == token2); // false
 *
 * @example
 * const tokenizer = generateToken('prefix');
 *
 * const token = tokenizer.next().value;
 *
 * console.log(token.match(/^prefix\w+/)); // true
 *
 * @example
 * const tokenizer = generateToken('', 'suffix');
 *
 * const token = tokenizer.next().value;
 *
 * console.log(token.match(/\w+suffix$/)); // true
 *
 * @example
 * const tokenizer = generateToken('', '', 5);
 *
 * const token = tokenizer.next().value;
 *
 * console.log(token.length === 5); // true
 */
function* _generateToken(
    prefix: string = '',
    suffix: string = '',
    fixedLength: number = 10): IterableIterator<string> {
  while (true) {
    yield prefix +
      Math.random()
          .toString(36)
          .substring(2, (fixedLength ?? 10) + 2)
          .padEnd(
              fixedLength ?? 10, Math.random().toString(36).substring(2),
          ) +
      suffix;
  }
}

export const generateToken = _generateToken;
export default _generateToken;
