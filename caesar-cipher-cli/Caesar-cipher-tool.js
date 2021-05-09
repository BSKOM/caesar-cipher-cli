const { coder } = require('./coder')
const { parser } = require('./parser')
const { pipeline } = require('stream')
const { Transform } = require('stream')
const fs = require('fs')
const path = require('path')
const { F_OK } = require('constants')


const filePathIn = parser[2]
const filePathOut = parser[3]

function inTest() {
  if (!fs.existsSync(filePathIn)) {
    console.log('File not exist');
  }
  fs.readFile(filePathIn, 'utf-8',(e, str) => {
    if (e) throw e})
}

const transformStream = new Transform({
  transform(chunk, _, done) {
    let data = chunk.toString()
    if (parser[0] === 'encode') 
      this.push(coder(data, shift, 1))
    else
      this.push(coder(data, shift, -1))
    done()
  }
})
function outTest() {
  fs.appendFile(filePathOut, (e, str) => {
    if (e) throw e
  })
}


// fs.appendFile()

// console.log(__dirname)
// console.log(__filename)




// path.format({
//   root: '/ignored',
//   dir: '/home/user/dir',
//   base: 'file.txt'
// });

// path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')

pipeline(
  inTest(),
  transformStream, 
  outTest() 
)
// .then(success and error callbacks)

// console.log(parser()[0])

// If the input file is missed - use stdin as an input source.
// If the output file is missed - use stdout as an output destination.
// If the input and / or output file is given but doesn't exist or you can't read it(e.g.because of permissions or it is a directory) - human - friendly error should be printed in stderr.
// If passed params are fine the output(file or stdout) should contain encoded / decoded content of input(file or stdin).
// For encoding / decoding use only the English alphabet, all other characters should be kept untouched.
// Using streams for reading, writing and transformation of text is mandatory.

// console.log(coder('encode', 7, 'This is secret. Message about "_" symbol!'))

// console.log(coder('decode', 7, 'Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!'))
