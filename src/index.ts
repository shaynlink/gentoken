'use strict';

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
function* _generateToken(prefix: string = '', suffix: string = '', fixedLength: number = 10): IterableIterator<string> {
    while (true) {
        yield prefix + Math.random().toString(36).substring(2, (fixedLength ?? 10) + 2).padEnd(fixedLength ?? 10, Math.random().toString(36).substring(2)) + suffix
    }
}

export const generateToken = _generateToken;
export default _generateToken;