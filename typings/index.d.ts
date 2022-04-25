/**
 * Generate a pseudo-random string of a given length.
 * Default length is undefined.
 * @param {?string} [prefix='']
 * @param {?string} [suffix='']
 * @param {?number} [fixedLength=10]
 * @return {string}
 *
 * @example
 * const tokenizer = generateToken();
 *
 * const token1 = tokenizer.next().value;
 * const token2 = tokenizer.next().value;
 *
 * console.log(token1 == token2); // false
 */
declare function _generateToken(prefix?: string, suffix?: string, fixedLength?: number): IterableIterator<string>;
export declare const generateToken: typeof _generateToken;
export default _generateToken;
//# sourceMappingURL=index.d.ts.map