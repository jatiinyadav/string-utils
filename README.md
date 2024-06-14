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
import { toCamelCase, capitalizeWords, countCharacters } from 'str-text-utils';

const camelCaseString = toCamelCase('hello world');
console.log(camelCaseString); // "helloWorld"

const capitalized = capitalizeWords('hello world');
console.log(capitalized); // "Hello World"

const charCount = countCharacters('hello world');
console.log(charCount); // 11

```

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## LICENSE
This package in under [MIT License](https://github.com/jatiinyadav/string-utils/blob/master/LICENSE).
