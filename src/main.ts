import assert from "assert";

function splitPairs(text: string): string[] {
    // your code here
    if(text.length > 0 && text.length % 2 !== 0) text += '_';
    const array = text.split('');
    const result: string[] = [];
    while(array.length> 0){
        result.push(array.splice(0,2).join(''));
    }
    return result;
}

console.log('Example:');
console.log(splitPairs('abcd'));

// These "asserts" are used for self-checking
assert.deepEqual(splitPairs('abcd'), ['ab', 'cd']);
assert.deepEqual(splitPairs('abc'), ['ab', 'c_']);
assert.deepEqual(splitPairs('abcdf'), ['ab', 'cd', 'f_']);
assert.deepEqual(splitPairs('a'), ['a_']);
assert.deepEqual(splitPairs(''), []);

console.log("Coding complete? Click 'Check' to earn cool rewards!");