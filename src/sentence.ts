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
