import assert from "assert";
import mocha from "mocha";
import * as bw from ".";

const b1101 = 0b1101;
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
	mocha.it("Getting bit at 0 from zero returns 0", () => assert.equal(bw.get(0, 0), 0));
	mocha.it("Getting bit at 1 from zero returns 0", () => assert.equal(bw.get(0, 1), 0));
	mocha.it("Getting 1 bit at 0 returns 1", () => assert.equal(bw.get(b1101, 0), 1));
	mocha.it("Getting 0 bit at 1 returns 0", () => assert.equal(bw.get(b1101, 1), 0));
	mocha.it("Getting bit at large index returns 0", () => assert.equal(bw.get(b1101, 10), 0));
});

mocha.describe("set()", () => {
	mocha.it("Setting bit at 0 in zero returns 1", () => assert.equal(bw.set(0, 0), 1));
	mocha.it("Setting bit at 1 in zero returns 2", () => assert.equal(bw.set(0, 1), 0b10));
	mocha.it("Setting 1 bit at 0 remains the number unchanged", () => assert.equal(bw.set(b1101, 0), b1101));
	mocha.it("Setting 0 bit at 1 sets the bit to 1", () => assert.equal(bw.set(b1101, 1), 0b1111));
	mocha.it("Setting bit at large index returns large number", () => assert.equal(bw.set(b1101, 10), 0b10000001101));
});

mocha.describe("unset()", () => {
	mocha.it("Unsetting bit at 0 in zero returns 0", () => assert.equal(bw.unset(0, 0), 0));
	mocha.it("Unsetting bit at 1 in zero returns 0", () => assert.equal(bw.unset(0, 1), 0));
	mocha.it("Unsetting 1 bit at 0 unsets the bit to 0", () => assert.equal(bw.unset(b1101, 0), 0b1100));
	mocha.it("Unsetting 0 bit at 1 remains the number unchanged", () => assert.equal(bw.unset(b1101, 1), b1101));
	mocha.it("Unsetting bit at large index remains the number unchanged", () => assert.equal(bw.unset(b1101, 10), b1101));
});

mocha.describe("toggle()", () => {
	mocha.it("Toggling bit at 0 in zero returns 1", () => assert.equal(bw.toggle(0, 0), 1));
	mocha.it("Toggling bit at 1 in zero returns 2", () => assert.equal(bw.toggle(0, 1), 0b10));
	mocha.it("Toggling 1 bit at 0 toggles the bit to 0", () => assert.equal(bw.toggle(b1101, 0), 0b1100));
	mocha.it("Toggling 0 bit at 1 toggles the bit to 1", () => assert.equal(bw.toggle(b1101, 1), 0b1111));
	mocha.it("Toggling bit at large index returns large number", () => assert.equal(bw.toggle(b1101, 10), 0b10000001101));
	mocha.it("Toggling number twice returns the initial number", () => assert.equal(bw.toggle(bw.toggle(b1101, 2), 2), b1101));
});

mocha.describe("toArray()", () => {
	mocha.it("Converting zero to array returns [0]", () => assert.deepStrictEqual(bw.toArray(0), [0]));
	mocha.it("Converting to array returns an array with reversed order of bits", () => assert.deepStrictEqual(bw.toArray(b1101), [1, 0, 1, 1]));
	mocha.it("Converting to array and back to number returns the initial number", () => assert.equal(bw.fromArray(bw.toArray(b1101)), b1101));
});

mocha.describe("fromArray()", () => {
	mocha.it("Converting [0] to number returns 0", () => assert.equal(bw.fromArray([0]), 0));
	mocha.it("Converting an array filled up with zeroes returns 0", () => assert.equal(bw.fromArray([0, 0]), 0));
	mocha.it("Converting an array returns the number with reversed order of bits", () => assert.equal(bw.fromArray([1, 0, 1, 1]), b1101));
	mocha.it("Converting from array and back to it returns the initial array", () => assert.deepStrictEqual(bw.toArray(bw.fromArray([1, 0, 1, 1])), [1, 0, 1, 1]));
});
