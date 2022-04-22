declare module 'gentoken' {
    export function generateToken(prefix?: string, suffix?: string, fixedLength?: undefined): IterableIterator<string>;
}