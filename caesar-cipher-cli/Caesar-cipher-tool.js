
let shift = 7;
let secret = 'This is secret. Message about "_" symbol!'
function encoder(math, p) {
   let res = ''
  for (let i = 0; i < secret.length; i++){
    let lowerUpper = secret[i].codePointAt(0) > 96 ? 'a'.codePointAt(0) : 'A'.codePointAt(0)
    if ((secret[i] >= 'a' && secret[i] <= 'z') || (secret[i] >= 'A' && secret[i] <= 'Z')){
      res += String.fromCodePoint((secret[i].codePointAt(0) - lowerUpper + 26 + shift % 26) % 26 + lowerUpper)
    } else { 
      res += secret[i]
    }
   }
 return res
}
// console.log(encoder())
function replacer(p){
  let lowerUpper = p.codePointAt(0) > 96 ? 'a'.codePointAt(0) : 'A'.codePointAt(0)
  return String.fromCodePoint((secret[i].codePointAt(0) - lowerUpper + 26 + shift % 26) % 26 + lowerUpper) 
}
console.log(console.log('This is secret. Message about "_" symbol!'.replace(/([^\D]*)/g, replacer)))
console.log('This is secret. Message about "_" symbol!'.replace(/([a-zA-Z]*)/g, encoder))
// function caesCipher(str, shift){
//   str.replace(a-z, )

// }