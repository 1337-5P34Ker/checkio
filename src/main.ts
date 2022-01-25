import assert from "assert";

function correctSentence(text: string): string {
    const arr = Array.from(text)
    let firstLetter: string = arr.shift()||'';
    arr.unshift(firstLetter.toUpperCase());
    text = text.lastIndexOf('.') == text.length-1 ? arr.join('') : arr.join('') + '.';
    return text;
}

console.log('Example:');
console.log(correctSentence('greetings, friends'));

// These "asserts" are used for self-checking
assert.equal(correctSentence('greetings, friends'), 'Greetings, friends.');
assert.equal(correctSentence('Greetings, friends'), 'Greetings, friends.');
assert.equal(correctSentence('Greetings, friends.'), 'Greetings, friends.');

console.log("Coding complete? Click 'Check' to earn cool rewards!");