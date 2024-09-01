function rot13(str) {
  const englishAlphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const englishAlphabetUppercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const numbersArray = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "!",
    "?",
    ".",
    ",",
    "+",
    "-",
    "#",
    "~",
    "\\",
    "'",
    "$",
    "=",
    "@",
    "[",
    "`",
    "{",
    "}",
    ":",
    ";",
    ")",
    "]",
    "(",
    "|",
    "*",
    "/",
    ">",
    "<",
    "%",
    "^",
    "*"
  ];
  let acc = "";
  for (let j = 0; j < str.length; j++) {
    if (str[j] === " ") {
      acc = acc + " ";
    }
    for (let i = 0; i <= 25; i++) {
      if (str[j] === englishAlphabet[i]) {
        acc = acc + englishAlphabet[i + 13 > 25 ? i + 13 - 26 : i + 13];
      }
      if (str[j] === englishAlphabetUppercase[i]) {
        acc =
          acc + englishAlphabetUppercase[i + 13 > 25 ? i + 13 - 26 : i + 13];
      }
      if (str[j] === numbersArray[i]) {
        acc = acc + numbersArray[i];
      }
    }
  }

  return acc;
}

// console.log(rot13("+HT#\\DR\\?K6~Y7JJ2gSznQ"));
// console.log(
//   rot13(
//     "Guvf vf npghnyyl gur svefg xngn V rire znqr. Gunaxf sbe svavfuvat vg! :)"
//   )
// );
// console.log(
//   rot13(
//     "How can you tell an extrovert from an\nintrovert at NSA? Va gur ryringbef,\ngur rkgebireg ybbxf ng gur BGURE thl'f fubrf."
//   )
// );
