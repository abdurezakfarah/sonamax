/**
 * Converts a string to "kebab-case", where each word is lowercase and separated by hyphens.
 *
 * This is useful for converting camelCase or PascalCase strings to kebab-case, commonly used in URLs or CSS class names.
 *
 * @example
 * ```typescript
 * kebabify('someExampleString'); // returns 'some-example-string'
 * kebabify('AnotherExample'); // returns 'another-example'
 * kebabify('HTMLText'); // returns 'html-text'
 * ```
 *
 * @param str - The camelCase input string to be converted to kebab-case.
 * @returns The string in kebab-case format.
 */
export const kebabify = (str: string) =>
  str.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? "-" : "") + $.toLowerCase(),
  );
