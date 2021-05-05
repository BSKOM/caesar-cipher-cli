
let shift = 0;
function encode(math, p) {
  let codeS = (p.codePointAt(0) - 'a'.codePointAt(0) + 26 + (shift%26))%26
  console.log(codeS)
  return String.fromCodePoint(codeS + 'a'.codePointAt(0))
}

// function caesCipher(str, shift){
//   str.replace(a-z, )

// }