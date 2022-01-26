"use strict";

import { createStringLiteralFromNode } from "typescript";

function popularWords(text: string, words: string[]) {

    let result: { [k: string]: any } = {};;

    words.forEach(word => {
        result[word] = 0;
    })

    let strings = text.toLowerCase().replace(/\s/g, ' ').trim().split(' ');

    strings.forEach(s => {
        if (result.hasOwnProperty(s)) {
            result[s.toLocaleLowerCase()] += 1;
        }
    });

    // your code here
    return result;
}


console.log('Example:')
console.log(popularWords(`
When I was One
I had just begun
When I was Two
I was nearly new`, ['i', 'was', 'three', 'near']))