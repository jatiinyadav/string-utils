/**
 * Counts the number of words in a string.
 * @param {string} str - The string to count words in.
 * @returns {number} - The word count.
 */
export function wordCount(str: string): number {
    return str.split(/\s+/).filter(word => word.length > 0).length;
}