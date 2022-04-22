/**
 * Generate a pseudo-random string of a given length.
 * Default length is undefined.
 * @param {?string} [prefix='']
 * @param {?string} [suffix='']
 * @param {?number} [fixedLength=undefined]
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
declare function generateToken(prefix?: string, suffix?: string, fixedLength?: number | undefined): IterableIterator<string>;
export default generateToken;
//# sourceMappingURL=index.d.ts.map