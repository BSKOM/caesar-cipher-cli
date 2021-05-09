const {coder} = require('./coder')
const {parser} = require('./parser')

console.log(parser()[0])


console.log(coder('encode', 7, 'This is secret. Message about "_" symbol!'))

console.log(coder('decode', 7, 'Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!'))
