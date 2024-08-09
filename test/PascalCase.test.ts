import { toPascalCase } from '../src/cases';

describe('toPascalCase', () => {
  it('should capitalize the first letter of each word and remove spaces', () => {
    const result = toPascalCase('hello world');
    expect(result).toBe('HelloWorld');
  });

  it('should handle an empty string', () => {
    const result = toPascalCase('');
    expect(result).toBe('');
  });

  it('should capitalize a single word correctly', () => {
    const result = toPascalCase('JAVAscript');
    expect(result).toBe('Javascript');
  });
});
