/**
 * Generate a pseudo-random string of a given length.
 * Default length is 10.
 * @function generateToken
 * @param {?string} [prefix=''] Prefix of the token.
 * @param {?string} [suffix=''] Suffix of the token.
 * @param {?number} [fixedLength=10] Fixed length of the token between 1 and 10.
 * @return {string}
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
declare function _generateToken(prefix?: string, suffix?: string, fixedLength?: number): IterableIterator<string>;
export declare const generateToken: typeof _generateToken;
export default _generateToken;
//# sourceMappingURL=index.d.ts.map