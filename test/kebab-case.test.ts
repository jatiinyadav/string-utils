import { toKebabCase } from '../src/kebab-case';

describe('capitalizeWords', () => {
  it('should convert the string in kebab-case', () => {
    const result = toKebabCase('hello world WorldHELLO');
    expect(result).toBe('hello-world-world-hello');
  });

  it('should handle empty string', () => {
    const result = toKebabCase('');
    expect(result).toBe('');
  });

  it('should handle single word', () => {
    const result = toKebabCase('javascript');
    expect(result).toBe('javascript');
  });
});
