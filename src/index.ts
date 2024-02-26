export {};

// EXAMPLE 1 - Get an Enum Key by Value in TypeScript

// ✅ For String Enums
enum Sizes {
  Small = 'S',
  Medium = 'M',
  Large = 'L',
}

const indexOfS = Object.values(Sizes).indexOf('S' as unknown as Sizes);

const key = Object.keys(Sizes)[indexOfS];
console.log(key); // 👉️ "Small"

// ---------------------------------------------------

// // EXAMPLE 2

// // ✅ For Numeric Enums
// enum SizesNumeric {
//   Small,
//   Medium,
//   Large,
// }

// console.log(SizesNumeric[0]); // 👉️ "Small"
// console.log(SizesNumeric[1]); // 👉️ "Medium"

// ---------------------------------------------------

// // EXAMPLE 3 - Creating a reusable function

// enum Sizes {
//   Small = 'S',
//   Medium = 'M',
//   Large = 'L',
// }

// function getKeyByValue(value: string) {
//   const indexOfS = Object.values(Sizes).indexOf(value as unknown as Sizes);

//   const key = Object.keys(Sizes)[indexOfS];

//   return key;
// }

// console.log(getKeyByValue('S')); // 👉️ Small
// console.log(getKeyByValue('M')); // 👉️ Medium

// ---------------------------------------------------

// // EXAMPLE 4 - Get the key of a numeric enum by value

// // ✅ For Numeric Enums
// enum SizesNumeric {
//   Small,
//   Medium,
//   Large,
// }

// console.log(SizesNumeric[0]); // 👉️ "Small"
// console.log(SizesNumeric[1]); // 👉️ "Medium"
// console.log(SizesNumeric[2]); // 👉️ "Large"

// // ---------------------------------------------------

// // EXAMPLE 5 - Access an Enum by Index in TypeScript

// // ✅ For STRING Enums
// enum Sizes {
//   Small = 'S',
//   Medium = 'M',
//   Large = 'L',
// }

// const indexOfS = Object.keys(Sizes).indexOf('Small');
// console.log(indexOfS);

// const s = Object.values(Sizes)[indexOfS];
// console.log(s); // 👉️ "S"

// const indexOfM = Object.keys(Sizes).indexOf('Medium');
// console.log(indexOfM); // 👉️ 1

// const m = Object.values(Sizes)[indexOfM];
// console.log(m); // 👉️ "M"

// ---------------------------------------------------

// // EXAMPLE 6 - For Numeric enums

// // ✅ For Numeric Enums
// enum NumericEnum {
//   Small,
//   Medium,
//   Large,
// }

// const names = Object.keys(NumericEnum).filter((v) => isNaN(Number(v)));
// console.log(names); // 👉️ ['Small', 'Medium', 'Large']

// const values = Object.values(NumericEnum).filter((v) => !isNaN(Number(v)));
// console.log(values); // 👉️ [0, 1, 2]

// ---------------------------------------------------

// // EXAMPLE 7 - Access a numeric enum by index

// // ✅ For Numeric Enums
// enum NumericEnum {
//   Small,
//   Medium,
//   Large,
// }

// const s1 = NumericEnum[0];
// console.log(s1); // 👉️ "Small"

// const m1 = NumericEnum[1];
// console.log(m1); // 👉️ "Medium"
