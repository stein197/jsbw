import assert from "assert";
import mocha from "mocha";
import * as bw from ".";

const b1101 = 0b1101;
const b0 = 0;
/*
All functions should be tested against next numbers:
- 0
- Arbitrary
All functions that accept indices should be tested against next indices:
- 0
- Arbitrary
- Larger than bits amount in which number can be represented
*/

mocha.describe("get()", () => {
	"get(0, 0) === 0" // Getting bit at 0 from zero returns 0
	"get(0, 1) === 0" // Getting bit at 1 from zero returns 0
	"get(0b1101, 0) === 1" // Getting 1 bit at 0 returns 1
	"get(0b1101, 1) === 0" // Getting 0 bit at 1 returns 0
	"get(0b1101, 10) === 0" // Getting bit at large index returns 0
});

mocha.describe("set()", () => {
	"set(0, 0) === 1" // Setting bit at 0 in zero returns 1
	"set(0, 1) === 0b10" // Setting bit at 1 in zero returns 2
	"set(0b1101, 0) === 0b1101" // Setting 1 bit at 0 remains the number unchanged
	"set(0b1101, 1) === 0b1111" // Setting 0 bit at 1 sets the bit to 1
	"set(0b1101, 10) === 0b10000001101" // Setting bit at large index returns large number
});

mocha.describe("unset()", () => {
	"unset(0, 0) === 0" // Unsetting bit at 0 in zero returns 0
	"unset(0, 1) === 0" // Unsetting bit at 1 in zero returns 0
	"unset(0b1101, 0) === 0b1100" // Unsetting 1 bit at 0 unsets the bit to 0
	"unset(0b1101, 1) === 0b1101" // Unsetting 0 bit at 1 remains the number unchanged
	"unset(0b1101, 10) === 0b1101" // Unsetting bit at large index remains the number unchanged
});

mocha.describe("toggle()", () => {
	"toggle(0, 0) === 1" // Toggling bit at 0 in zero returns 1
	"toggle(0, 1) === 0b10" // Toggling bit at 1 in zero returns 2
	"toggle(0b1101, 0) === 0b1100" // Toggling 1 bit at 0 toggles the bit to 0
	"toggle(0b1101, 1) === 0b1111" // Toggling 0 bit at 1 toggles the bit to 1
	"toggle(0b1101, 10) === 0b10000001101" // Togging bit at large index returns large number
	"" // Toggling number twice returns the initial number
});

mocha.describe("toArray()", () => {
	"toArray(0) == [0]" // Converting zero to array returns [0]
	"toArray(0b1101) == [1, 0, 1, 1]" // Converting to array returns an array with reversed order of bits
	"" // Converting to array and back to number returns the initial number
});

mocha.describe("fromArray()", () => {
	"fromArray([0]) == 0" // Converting [0] to number returns 0
	"fromArray([0, 0]) == 0" // Converting an array filled up with zeroes returns 0
	"fromArray([1, 0, 1, 1])" // Converting an array returns the number with reversed order of bits
	"" // Converting from array and back to it returns the initial array
});
