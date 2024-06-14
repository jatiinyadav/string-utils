import { toSnakeCase } from '../src/cases';

describe('snakeCase', () => {
  it('should convert a string to snake case. ', () => {
    const result = toSnakeCase('Hello World');
    expect(result).toBe('hello_world');
  });

  it('should handle empty string', () => {
    const result = toSnakeCase('');
    expect(result).toBe('');
  });

  it('should handle single word', () => {
    const result = toSnakeCase('JAVAscript');
    expect(result).toBe('javascript');
  });
});
