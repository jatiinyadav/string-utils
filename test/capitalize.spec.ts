// test/capitalize.test.ts
import { describe } from 'mocha';
import { expect } from 'chai';
import { capitalizeWords } from '../src/capitalize';

describe('capitalizeWords', () => {
  it('should capitalize the first letter of each word', () => {
    const result = capitalizeWords('hello world');
    expect(result).to.equal('Hello World');
  });

  it('should handle empty string', () => {
    const result = capitalizeWords('');
    expect(result).to.equal('');
  });

  it('should handle single word', () => {
    const result = capitalizeWords('javascript');
    expect(result).to.equal('Javascript');
  });
});
