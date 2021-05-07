const {coder} = require('./coder.js')

let args = process.argv.slice(2)
let argAction = ''
let argShift = undefined
let argIn = stdin
let argOut = stdout
let argErr = stderr
let countOpt = 0
for(let i = 0; i<args.length; i++){
  switch (args[i]) {
    case '--action':
    case '-a':
      if ((args[i + 1] === 'encode' || args[i + 1] === 'decode')){
        throw err
      }
      argAction = args[i + 1]
      i += 1
      countOpt += 1
      break;
    case '--shift':
    case '-s':
      if ((args[i + 1] === 'encode' || args[i + 1] === 'decode')) {
        throw err
      }
      argShift = args[i + 1]
      i += 1
      countOpt += 1
      break;
    case '--input':
    case '-i':
      argIn = args[i + 1]
      i += 1
      countOpt += 1
      break;
    case '--output':
    case '-o':
      argOut = args[i + 1]
      i += 1
      countOpt += 1
      break;
    default:
      break;
  }
}
if (argAction.length === 0 ) {
  throw err
}
if (typeof argShift === undefined) {
  throw err
}

console.log(coder(7, 'This is secret. Message about "_" symbol!'))

console.log(coder(-7, 'Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!'))
