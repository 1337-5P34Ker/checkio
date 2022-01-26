import assert from "assert";

function threeWords(text: string): boolean {

    let words = text.split(' ');

    let wordsCount = 0;
    let already3Found = false;

    words.forEach(word => {
        if(isNaN(Number(word))){
            wordsCount++
            if(wordsCount > 2) {
                already3Found = true;
            }
        } else {
            wordsCount = 0
        }
    })
    return already3Found;
}

console.log('Example:')
console.log(threeWords("Hello World hello"))

assert.equal(threeWords("Hello World hello"), true);
assert.equal(threeWords("He is 123 man"), false);
assert.equal(threeWords("1 2 3 4"), false);
assert.equal(threeWords("bla bla bla bla"), true);
assert.equal(threeWords("Hi"), false);
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");