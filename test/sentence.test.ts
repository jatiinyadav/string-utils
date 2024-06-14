import { toSentenceCase } from '../src/cases';

describe('sentence', () => {
  it('should return sentence-based string', () => {
    const result = toSentenceCase('hello world. this is an example.');
    expect(result).toBe("Hello world. This is an example.");
  });

  it('should handle empty string', () => {
    const result = toSentenceCase('');
    expect(result).toBe('');
  });

  it('should handle single word', () => {
    const result = toSentenceCase('javascript');
    expect(result).toBe("Javascript");
  });
});
