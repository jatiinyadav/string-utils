# str-text-utils
str-text-utils is a utility library for string manipulation, providing a set of functions to simplify common string operations such as converting to camelCase, capitalizing words, counting characters, checking for palindromes, reversing strings, and trimming whitespace.

## Installation
Install str-text-utils via npm:
```pre
npm install str-text-utils
```

## Usage
Import the functions you need from str-text-utils:

```
import { toCamelCase, capitalizeWords, countCharacters, isPalindrome, reverseString, trimString } from 'str-text-utils';

// Example usage
const camelCaseString = toCamelCase('hello world');
console.log(camelCaseString); // "helloWorld"

const capitalized = capitalizeWords('hello world');
console.log(capitalized); // "Hello World"

const charCount = countCharacters('hello world');
console.log(charCount); // 11

const palindromeCheck = isPalindrome('madam');
console.log(palindromeCheck); // true

const reversed = reverseString('hello');
console.log(reversed); // "olleh"

const trimmed = trimString('  hello world  ');
console.log(trimmed); // "hello world"

```

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
