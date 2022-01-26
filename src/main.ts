import assert from "assert";

/*

You are given a string and two markers (the initial and final). You have to find a substring enclosed between these two markers. 
But there are a few important conditions:

The initial and final markers are always different.
If there is no initial marker, then the first character should be considered the beginning of a string.
If there is no final marker, then the last character should be considered the ending of a string.
If the initial and final markers are missing then simply return the whole string.
If the final marker comes before the initial marker, then return an empty string.
Input: Three arguments. All of them are strings. The second and third arguments are the initial and final markers.

Output: A string.
*/




function betweenMarkers(text: string, begin: string, end: string): string {
    const indexBegin = text.indexOf(begin);
    const indexEnd = text.indexOf(end);

    if (indexBegin == -1 && indexEnd == -1) {
        return text;
    }

    if (indexBegin == -1 && indexEnd != -1) {
        return text.substring(0, indexEnd);
    }

    if (indexBegin != -1 && indexEnd == -1) {
        return text.substring(indexBegin + begin.length);
    }

    if (indexBegin != -1 && indexEnd != -1 && indexBegin < indexEnd) {
        return text.substring(indexBegin + begin.length, indexEnd);
    } else {
        return '';
    }
    return '';
}

console.log('Example:')
console.log(betweenMarkers('What is >apple<', '>', '<'), 'apple')

assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple')
assert.equal(betweenMarkers("<head><title>My new site</title></head>", "<title>", "</title>"), 'My new site')
assert.equal(betweenMarkers('No[/b] hi', '[b]', '[/b]'), 'No')
assert.equal(betweenMarkers('No [b]hi', '[b]', '[/b]'), 'hi')
assert.equal(betweenMarkers('No hi', '[b]', '[/b]'), 'No hi')
assert.equal(betweenMarkers('No <hi>', '>', '<'), '')
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");