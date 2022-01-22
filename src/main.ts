import assert from "assert";

function nearestValue(values: number[], search: number): number {
    // your code here

    let bestMatch = 1000000;
    values.sort((a, b) => a - b).forEach(v => {
        if (Math.abs(v - search) < Math.abs(bestMatch - search)) {
            bestMatch = v;
        }
    })
    return bestMatch;
}

console.log('Example:');
console.log(nearestValue([4, 7, 10, 11, 12, 17], 9));

// These "asserts" are used for self-checking
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 9), 10);
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 8), 7);
assert.equal(nearestValue([4, 8, 10, 11, 12, 17], 9), 8);
assert.equal(nearestValue([4, 9, 10, 11, 12, 17], 9), 9);
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 0), 4);
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 100), 17);
assert.equal(nearestValue([5, 10, 8, 12, 89, 100], 7), 8);
assert.equal(nearestValue([-1, 2, 3], 0), -1);

console.log("Coding complete? Click 'Check' to earn cool rewards!");