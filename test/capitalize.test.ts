// test/capitalize.test.ts
import { capitalizeWords } from '../src/capitalize';

describe('capitalizeWords', () => {
  it('should capitalize the first letter of each word', () => {
    const result = capitalizeWords('hello world');
    expect(result).toBe('Hello World');
  });

  it('should handle empty string', () => {
    const result = capitalizeWords('');
    expect(result).toBe('');
  });

  it('should handle single word', () => {
    const result = capitalizeWords('javascript');
    expect(result).toBe('Javascript');
  });
});
