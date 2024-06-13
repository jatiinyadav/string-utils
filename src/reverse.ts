/**
 * Reverses the characters in a string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reversed string.
 */
export function reverseString(str: string): string {
    return str.split('').reverse().join('');
}