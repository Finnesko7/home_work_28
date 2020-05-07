export const sum = (a: number, b: number) => a + b;

export const conditionalSum = (a: string | number, b: number) => {
  if (typeof a === 'string') {
    return Number(a) + b;
  }
  return a + b;
};

export const conditionalReturn = (obj: any, key: string) =>
  obj && obj[key] ? obj[key] : undefined;

export const toPromise = <T>(value: T): Promise<T> => Promise.resolve(value);

/**
 * TODO: Write a function to reverse a number
 * Input: 123
 * Output 321
 */

/**
 * TODO: Write a JavaScript function that returns a passed string with letters in alphabetical order
 * Input : 'webmaster'
 *  Output : 'abeemrstw'
 */

/**
 * TODO: Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
 * Input: 'the quick brown fox'
 * Output: 'The Quick Brown Fox'
 */
