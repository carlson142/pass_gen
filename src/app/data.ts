// NOTE: Data for password (Letters, symbols, etc.)

// Indexes for constructing alphabet, numbers and symbols
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const numAlpha = Array.from(Array(10)).map((e, i) => i + 48);
const symbolAlpha1 = Array.from(Array(14)).map((e, i) => i + 33);
const symbolAlpha2 = Array.from(Array(6)).map((e, i) => i + 58);

// LowerCase
export const lowerCaseAlphabet = alpha.map((e) =>
  String.fromCharCode(e).toLowerCase()
);

// UpperCase
export const upperCaseAlphabet = alpha.map((e) => String.fromCharCode(e));

// Numbers (two times, because we have cases, when we need password with 10+ numbers)
export const numbers = [
  ...numAlpha.map((e) => String.fromCharCode(e)),
  ...numAlpha.map((e) => String.fromCharCode(e)),
];

// Symbols
export const symbols = [
  ...symbolAlpha1.map((e) => String.fromCharCode(e)),
  ...symbolAlpha2.map((e) => String.fromCharCode(e)),
];

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

//NOTE: Password options

export type switchDataProps = {
  id: number;
  name: string;
  arrayForShuffle: string[];
};

export const switcData: switchDataProps[] = [
  {
    id: 1,
    name: "Include Uppercase Letters",
    arrayForShuffle: upperCaseAlphabet,
  },
  {
    id: 2,
    name: "Include Lowercase Letters",
    arrayForShuffle: lowerCaseAlphabet,
  },
  { id: 3, name: "Include Numbers", arrayForShuffle: numbers },
  { id: 4, name: "Include Symbols", arrayForShuffle: symbols },
];
