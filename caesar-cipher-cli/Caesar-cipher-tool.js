
let shift = 0;
function encode(math, p) {
  let codeS = (p.codePointAt(0) - 'a'.codePointAt(0) + 26 + (shift % 26)) % 26 + 'a'.codePointAt(0)
  console.log(codeS)
  return String.fromCodePoint(codeS)
}

// function caesCipher(str, shift){
//   str.replace(a-z, )

// }