import assert from "assert";

// Check if a given string has all symbols in upper case. If the string is empty or doesn't have any letter in it - function should return True.

function isAllUpper(text: string): boolean {
    // your code here
    return text === text.toUpperCase();
}

console.log('Example:');
console.log(isAllUpper('ALL UPPER'));

// These "asserts" are used for self-checking
assert.equal(isAllUpper('ALL UPPER'), true);
assert.equal(isAllUpper('all lower'), false);
assert.equal(isAllUpper('mixed UPPER and lower'), false);
assert.equal(isAllUpper(''), true);

console.log("Coding complete? Click 'Check' to earn cool rewards!");