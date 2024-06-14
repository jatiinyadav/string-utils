import { toCamelCase } from '../src/camelCase';

describe('capitalizeWords', () => {
  it('should make the first letter small, then capitalize all the first letters', () => {
    const result = toCamelCase('hello world');
    expect(result).toBe('helloWorld');
  });

  it('should handle empty string', () => {
    const result = toCamelCase('');
    expect(result).toBe('');
  });

  it('should handle single word', () => {
    const result = toCamelCase('JAVAscript');
    expect(result).toBe('javascript');
  });
});
