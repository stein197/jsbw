type bit = 0 | 1;

/**
 * Returns the specified bit from a number.
 * @param n Number from which the bit is retrieved.
 * @param i Index of the bit to return. Counting starts from the rightmost (least significant) digit.
 * @returns Bit of the number.
 */
export const get = (n: number, i: number): bit => (n >> i & 1) as bit;

/**
 * Sets the specified bit to 1.
 * @param n Number whose bit to set.
 * @param i Index of the bit to set. Counting starts from the rightmost (least significant) digit.
 * @returns Number with bit set to 1.
 */
export const set = (n: number, i: number): number => n | 1 << i;

/**
 * Sets the specified bit to 0.
 * @param n Number whose bit to unset.
 * @param i Index of the bit to unset. Counting starts from the rightmost (least significant) digit.
 * @returns Number with bit set to 0.
 */
export const unset = (n: number, i: number): number => n & ~(1 << i);

/**
 * Toggles the specified bit in the number.
 * @param n Number whose bit to toggle.
 * @param i Index of the bit to toggle. Counting starts from the rightmost (least significant) digit.
 * @returns Number with toggled bit.
 */
export const toggle = (n: number, i: number): number => n ^ 1 << i;

/**
 * Converts number to an array of bits. Bits in the array are sorted from least to most significant digit.
 * @param n Number to convert.
 * @returns Array of bits.
 */
export const toArray = (n: number): bit[] => n.toString(2).split("").reverse().map(bit => +bit) as bit[];

/**
 * Converts an array of bits to number. Bits in the array should be sorted from least to most significant digit.
 * @param bits Array to convert.
 * @returns Number.
 */
export const fromArray = (bits: bit[]): number => +`0b${bits.reverse().join("")}`;

// TODO: not, and, or, nand, nor, xor, xnor. Chain them?
