import assert from "assert";

/*
Sort Array by Element Frequency
Sort the given Array so that its elements end up in the decreasing frequency order, that is, 
the number of times they appear in elements. 
If two elements have the same frequency, they should end up in the same order as the first appearance in the Array.
*/

interface elements {
    order: number;
    value: any;
    count: number;

}

function frequencySort(items: any[]): any[] {
    let lastOrder = 0;
    let frequencies: elements[] = [];
    items.forEach(item => {
        let existing = frequencies.find(x => x.value == item);
        if (existing) {
            frequencies = frequencies.filter(i => i != existing);
            frequencies.push({ order: existing.order, value: existing.value, count: existing.count + 1 });
        } else {
            frequencies.push({ order: ++lastOrder, value: item, count: 1 })
        }
    });
    const sortedArray = frequencies.sort((a, b) => b.count - a.count || a.order - b.order);
    let result: any[] = [];
    sortedArray.forEach(item => {
        for(let i = 0; i<item.count; i++){
            result.push(item.value);
        }
    })
    return result;
}

console.log('Example:');
console.log(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]));

// These "asserts" are used for self-checking and not for an auto-testing

assert.deepEqual(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]), [4, 4, 4, 4, 6, 6, 2, 2]);
assert.deepEqual(frequencySort(['bob', 'bob', 'carl', 'alex', 'bob']), ['bob', 'bob', 'bob', 'carl', 'alex']);
assert.deepEqual(frequencySort([17, 99, 42]), [17, 99, 42]);
assert.deepEqual(frequencySort([]), []);
assert.deepEqual(frequencySort([1]), [1]);

console.log("Coding complete? Click 'Check' to earn cool rewards!");