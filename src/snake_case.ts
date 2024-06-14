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
