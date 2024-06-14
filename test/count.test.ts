import { wordCount } from '../src/cases';

describe('wordCount', () => {
  it('should return 2 for 2 words', () => {
    const result = wordCount('hello world');
    expect(result).toBe(2);
  });

  it('should handle empty string', () => {
    const result = wordCount('');
    expect(result).toBe(0);
  });

  it('should handle single word', () => {
    const result = wordCount('javascript');
    expect(result).toBe(1);
  });
});
