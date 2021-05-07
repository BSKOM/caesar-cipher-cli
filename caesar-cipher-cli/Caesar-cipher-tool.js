
let shift = 7;
let secret = 'This is secret. Message about "_" symbol!'
// function encoder(math, p) {
//    let res = ''
//   for (let i = 0; i < secret.length; i++){
//     let lowerUpper = secret[i].codePointAt(0) > 96 ? 'a'.codePointAt(0) : 'A'.codePointAt(0)
//     if ((secret[i] >= 'a' && secret[i] <= 'z') || (secret[i] >= 'A' && secret[i] <= 'Z')){
//       res += String.fromCodePoint((secret[i].codePointAt(0) - lowerUpper + 26 + shift % 26) % 26 + lowerUpper)
//     } else { 
//       res += secret[i]
//     }
//    }
//  return res
// }
// console.log(encoder())
// function replacer(p){
//   let lowerUpper = p.codePointAt(0) > 96 ? 'a'.codePointAt(0) : 'A'.codePointAt(0)
//   return String.fromCodePoint((secret[i].codePointAt(0) - lowerUpper + 26 + shift % 26) % 26 + lowerUpper) 
// }

const coder = (sh, s) =>{
  let coded = s.replace(/([A-Za-z])/g, (match) => {
    let lowerUpper = match.codePointAt(0) > 96 ? 'a'.codePointAt(0) : 'A'.codePointAt(0)
    let res = String.fromCodePoint(
      (match.codePointAt(0) - lowerUpper + 26 + sh % 26) % 26 + lowerUpper)  
    return res
  })
  return coded 
}

console.log(coder(7, 'This is secret. Message about "_" symbol!'))
console.log(coder(-7, 'Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!'))
