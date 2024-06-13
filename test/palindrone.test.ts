import { isPalindrome } from '../src/palindrome';

describe('capitalizeWords', () => {
  it('should return false', () => {
    const result = isPalindrome('hello world');
    expect(result).toBe(false);
  });

  it('should handle empty string', () => {
    const result = isPalindrome('');
    expect(result).toBe(true);
  });

  it('should handle single word', () => {
    const result = isPalindrome('javascript');
    expect(result).toBe(false);
  });
});
