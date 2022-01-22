import assert from "assert";

//You have a number and you need to determine which digit in this number is the biggest.

function maxDigit(value: number): number {
    // your code here
    let x = value.toString(10).split('').map(Number);
    let biggest:number  = x.sort((a,b) => b-a)[0];
    return biggest;
}

console.log('Example:');


// These "asserts" are used for self-checking
assert.equal(maxDigit(0), 0);
assert.equal(maxDigit(52), 5);
assert.equal(maxDigit(634), 6);
assert.equal(maxDigit(1), 1);
assert.equal(maxDigit(10000), 1);

console.log("Coding complete? Click 'Check' to earn cool rewards!");