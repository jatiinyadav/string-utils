/**
 * Converts a string to camelCase.
 * @param {string} str - The string to convert.
 * @returns {string} - The camelCase string.
 */
export function toCamelCase(str: string): string {
    return str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

/**
 * Capitalizes the first letter of each word in a string.
 * @param {string} str - The string to capitalize.
 * @returns {string} - The capitalized string.
 */
export function capitalizeWords(str: string): string {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

/**
 * Counts the number of words in a string.
 * @param {string} str - The string to count words in.
 * @returns {number} - The word count.
 */
export function wordCount(str: string): number {
    return str.split(/\s+/).filter(word => word.length > 0).length;
}

/**
 * Converts a string to dot case.
 * @param {string} str - The string to convert.
 * @returns {string} - The dot-cased string.
 */
export function toDotCase(str: string): string {
    return str
        .replace(/([a-z])([A-Z])/g, '$1.$2') // Add dot between camelCase words
        .replace(/[\s_-]+/g, '.')            // Replace spaces, underscores, and hyphens with dots
        .toLowerCase();                      // Convert to lowercase
}

/**
 * Converts a string to kebab-case.
 * @param {string} str - The string to convert.
 * @returns {string} - The kebab-case string.
 */
export function toKebabCase(str: string): string {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2')  // Add hyphen between camelCase words
        .replace(/[\s_]+/g, '-')              // Replace spaces and underscores with hyphens
        .toLowerCase();                       // Convert to lowercase
}

/**
 * Checks if a string is a palindrome.
 * @param {string} str - The string to check.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
export function isPalindrome(str: string): boolean {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

/**
 * Reverses the characters in a string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reversed string.
 */
export function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

/**
 * Converts a string to sentence case.
 * @param {string} str - The string to convert.
 * @returns {string} - The sentence-cased string.
 */
export function toSentenceCase(str: string): string {
    return str
        .toLowerCase()
        .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, char => char.toUpperCase());
}

/**
 * Converts a string to snake case.
 * @param {string} str - The string to convert.
 * @returns {string} - The snake-cased string.
 */
export function toSnakeCase(str: string): string {
    return str
        .replace(/([a-z])([A-Z])/g, '$1_$2') // Add underscore between camelCase words
        .replace(/[\s-]+/g, '_')             // Replace spaces and hyphens with underscores
        .toLowerCase();                      // Convert to lowercase
}

/**
 * Trims leading and trailing spaces from a string.
 * @param {string} str - The string to trim.
 * @returns {string} - The trimmed string.
 */
export function trimSpaces(str: string): string {
    return str.trim();
}