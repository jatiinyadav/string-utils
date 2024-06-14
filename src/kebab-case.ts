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