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
