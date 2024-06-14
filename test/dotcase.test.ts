import { toDotCase } from '../src/cases';

describe('dot-cases', () => {
  it('should return dot-cased string', () => {
    const result = toDotCase('Hello World');
    expect(result).toBe("hello.world");
  });

  it('should handle empty string', () => {
    const result = toDotCase('');
    expect(result).toBe('');
  });

  it('should handle single word', () => {
    const result = toDotCase('javascript');
    expect(result).toBe('javascript');
  });
});
