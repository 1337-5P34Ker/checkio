import assert from "assert";

function betweenMarkers(line: string, left: string, right: string): string {
    line = line.substring(line.indexOf(left)+1);
    line = line.substring(0,line.indexOf(right));
    return line;
}

console.log('Example:');
console.log(betweenMarkers('What is >apple<', '>', '<'));

// These "asserts" are used for self-checking
assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple');
assert.equal(betweenMarkers('What is [apple]', '[', ']'), 'apple');
assert.equal(betweenMarkers('What is ><', '>', '<'), '');
assert.equal(betweenMarkers('[an apple]', '[', ']'), 'an apple');

console.log("Coding complete? Click 'Check' to earn cool rewards!");