const {reverseArray} = require('./reverseArray');
const {countOccurrences} = require('./countElements')
const {sumArray} = require('./sumOfArrays')
const {findLongestString} = require('./findLongest')
let array = ["you", "are", "are", "great", "my", "friend"]
let newArray = [1,2,3,4];

console.log(reverseArray(array));
countOccurrences(array,"are");
console.log(sumArray(newArray));
console.log(findLongestString(array));
