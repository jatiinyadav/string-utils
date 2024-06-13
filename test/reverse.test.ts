import { reverseString } from '../src/reverse';

describe('capitalizeWords', () => {
  it('should return the reversed string', () => {
    const result = reverseString('hello world');
    expect(result).toBe('dlrow olleh');
  });

  it('should handle empty string', () => {
    const result = reverseString('');
    expect(result).toBe('');
  });

  it('should handle single word', () => {
    const result = reverseString('JAVAscript');
    expect(result).toBe('tpircsAVAJ');
  });
});