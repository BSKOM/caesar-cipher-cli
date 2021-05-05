
let shift = 7;
let secret = 'This is secret. Message about "_" symbol!'
function encoder(math, p) {
 
  let res = ''
  for (let i = 0; i < secret.length; i++){
    let lowerUpper = secret[i].codePointAt(0) > 96 ? 'a'.codePointAt(0) : 'A'.codePointAt(0)
    if ((secret[i] >= 'a' && secret[i] <= 'z') || (secret[i] >= 'A' && secret[i] <= 'Z')){
      let codeS = (secret[i].codePointAt(0) - lowerUpper + 26 + shift) % 26 + lowerUpper
      res += String.fromCodePoint((secret[i].codePointAt(0) - lowerUpper + 26 + shift) % 26 + lowerUpper)
    } else { 
      res += secret[i]
    }
   }
 return res
  // return String.fromCodePoint((String(p).codePointAt(0) - lowerUpper + 26 + shift) % 26 + lowerUpper)
}
console.log(encoder())
// console.log(console.log('This is secret. Message about "_" symbol!'.replace(/([a-zA-Z]*)/, encoder)).replace(/([a-zA-Z]*)/g, encoder))
// console.log('This is secret. Message about "_" symbol!'.replace(/([a-zA-Z]*)/g, encoder))
// function caesCipher(str, shift){
//   str.replace(a-z, )

// }