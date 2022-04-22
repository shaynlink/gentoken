'use strict';

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
function* generateToken(prefix: string = '', suffix: string = '', fixedLength: number | undefined = undefined): IterableIterator<string> {
    while (true) {
        yield prefix + Math.random().toString(36).substring(2, fixedLength ?? undefined) + suffix;
    }
}

export default generateToken;