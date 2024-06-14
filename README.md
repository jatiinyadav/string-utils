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
import {
    capitalizeWords, toCamelCase,
    trimSpaces, wordCount, reverseString,
    isPalindrome, toDotCase, toSentenceCase,
    toSnakeCase } from 'str-text-utils';

const capitalized = capitalizeWords('the quick brown fox');
console.log(capitalized); // "The Quick Brown Fox"

const camelCase = toCamelCase('quick brown fox');
console.log(camelCase); // "quickBrownFox"

const trimmed = trimSpaces('   leading and trailing spaces   ');
console.log(trimmed); // "leading and trailing spaces"

const wordCountResult = wordCount('count the number of words');
console.log(wordCountResult); // 5

const reversed = reverseString('desserts');
console.log(reversed); // "stressed"

const palindromeCheck = isPalindrome('A man a plan a canal Panama');
console.log(palindromeCheck); // true

const dotCase = toDotCase('dot case example');
console.log(dotCase); // "dot.case.example"

const sentenceCase = toSentenceCase('this is a sentence. another one here!');
console.log(sentenceCase); // "This is a sentence. Another one here!"

const snakeCase = toSnakeCase('Snake Case Example');
console.log(snakeCase); // "snake_case_example"


```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## LICENSE

This package in under [MIT License](https://github.com/jatiinyadav/string-utils/blob/master/LICENSE).
