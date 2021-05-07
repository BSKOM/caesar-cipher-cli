
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
let re = /([A-Za-z])/g
let str = 'This is secret. Message about "_" symbol!'
let newStr = str.replace(re, (match) => {
  let lowerUpper = match.codePointAt(0) > 96 ? 'a'.codePointAt(0) : 'A'.codePointAt(0)
  return String.fromCodePoint((match.codePointAt(0) - lowerUpper + 26 + shift % 26) % 26 + lowerUpper)
})
let coder = str.replace(re, (match) => {
  return String.fromCodePoint((match.codePointAt(0) - 'A'.codePointAt(0) + (match > 'Z') ? 32 : 0 + 26 + shift % 26) % 26 + 'A'.codePointAt(0) + (match > 'Z') ? 32 : 0)
})

console.log(coder)