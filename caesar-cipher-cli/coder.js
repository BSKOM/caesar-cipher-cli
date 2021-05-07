function coder(sh, s) {
  let coded = s.replace(/([A-Za-z])/g, (match) => {
    let lowerUpper = match.codePointAt(0) > 96 ? 'a'.codePointAt(0) : 'A'.codePointAt(0)
    let res = String.fromCodePoint(
      (match.codePointAt(0) - lowerUpper + 26 + sh % 26) % 26 + lowerUpper)  
    return res
  })
  return coded 
}
module.exports = { coder }


