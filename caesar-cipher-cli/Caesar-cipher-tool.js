
let shift = 7;
function encoder(math, p) {
  let lowerUpper = p.codePointAt(0) > 96 ? 'a'.codePointAt(0) : 'A'.codePointAt(0)
  return String.fromCodePoint((p.codePointAt(0) - lowerUpper + 26 + shift) % 26 + lowerUpper)
}
console.log('This is secret. Message about "_" symbol!'.replace(/[a-zA-Z]*/, encoder))

// function caesCipher(str, shift){
//   str.replace(a-z, )

// }