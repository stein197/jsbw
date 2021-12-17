# Easier bitwise operations
This package provides a tiny set of functions to make work with bitmask much easier.

## Installation
```
npm install @stein197/bw
```

## Usage
The next code chunk illustrates all available functions that the package provides. For more details refer to doc comments in the source code.
```ts
import * as bw from "@stein197/bw";

bw.get(0b1011, 0); // 1: The least significant bit
bw.set(0b1011, 2); // 0b1111: Sets bit at index 2 to 1
bw.unset(0b1011, 1); // 0b1001: Unsets bit at index 1
bw.toggle(0b1011, 0); // 0b1010: Toggles (inverses) bit at index 0
bw.toArray(0b1011); // [1, 1, 0, 1]: Converts number into a bit array
bw.fromArray([1, 1, 0, 1]); // 0b1011: Converts bitarray into a number
```

Note that index counting starts at 0 and goes from right to left. For example bit at 0 index for `0b100` number is 0 and the only 1 in the number can be referred by index 2.

> **NOTE**: For bit arrays the order of bits is reversed. This is done in order to access bits in array in the same manner as for numbers. So bit at index 0 refers to the least significant bit.

# NPM scripts
- `clean` cleans output files
- `build` builds the project
- `test` builds and tests the project
