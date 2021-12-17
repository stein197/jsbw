type bit = 0 | 1;

export const get = (n: number, i: number): bit => (n >> i & 1) as bit;

export const set = (n: number, i: number): number => n & 1 << i;

export const unset = (n: number, i: number): number => n & ~(1 << i);

export const toggle = (n: number, i: number): number => n ^ 1 << i;

export const toArray = (n: number): bit[] => n.toString(2).split("").reverse().map(bit => +bit) as bit[];

export const fromArray = (bits: bit[]): number => +`0b${bits.reverse().join("")}`;

// TODO: not, and, or, nand, nor, xor, xnor. Chain them?
