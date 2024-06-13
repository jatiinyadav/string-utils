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
