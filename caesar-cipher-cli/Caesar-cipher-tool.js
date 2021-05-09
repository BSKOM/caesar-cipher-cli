const {coder} = require('./coder')
const {parser} = require('./parser')
const fs = require('fs')
const path = require('path');

// path.format({
//   root: '/ignored',
//   dir: '/home/user/dir',
//   base: 'file.txt'
// });

// path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')

console.log(parser()[0])


console.log(coder('encode', 7, 'This is secret. Message about "_" symbol!'))

console.log(coder('decode', 7, 'Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!'))
