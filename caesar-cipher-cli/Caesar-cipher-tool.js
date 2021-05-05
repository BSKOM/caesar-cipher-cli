
let shift = 7;
function encoder(math, p) {
  return String.fromCodePoint((p.codePointAt(0) - 'a'.codePointAt(0) + 26 + (shift % 26)) % 26 + 'a'.codePointAt(0))
}
console.log('This is secret. Message about "_" symbol!'.replace(/[a-z]*/, encoder))

// function caesCipher(str, shift){
//   str.replace(a-z, )

// }