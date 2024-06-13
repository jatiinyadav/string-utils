import { trimSpaces } from '../src/trim';

describe('capitalizeWords', () => {
  it('should removed spaces from starting and end ', () => {
    const result = trimSpaces('    hello world    ');
    expect(result).toBe('hello world');
  });

  it('should handle empty string', () => {
    const result = trimSpaces('');
    expect(result).toBe('');
  });

  it('should handle single word', () => {
    const result = trimSpaces('javas  cript');
    expect(result).toBe('javas  cript');
  });
});
