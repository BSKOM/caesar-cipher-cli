function parser() {
  let args = process.argv.slice(2)
  let allArg = ['', '', , ]
  try {
    for (let i = 0; i < args.length; i++) {
      switch (args[i]) {
        case '--action':
        case '-a':
          if (!(args[i + 1] === 'encode' || args[i + 1] === 'decode')) {
            throw 'arg:action - param must be encode or decode only';
          }
          allArg[0] = args[i + 1]
          i += 1
          break;
        case '--shift':
        case '-s':
          if (!(parseInt(args[i + 1], 10))) {
             throw 'arg:action - param must be integer number only';
          }
          allArg[1] = parseInt(args[i + 1], 10)
          i += 1
           break;
        case '--input':
        case '-i':
          allArg[2] = args[i + 1]
          i += 1
          break;
        case '--output':
        case '-o':
          allArg[3] = args[i + 1]
          i += 1
          break;
        default:
          break;
      }
    }
    if (allArg[0].length === 0) {
      throw 'arg: action - required option is empty';
    }
    console.log(allArg)
    if (allArg[1].length === 0) {
      throw 'arg: shift - required option is empty';
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
  return allArg
}

module.exports = { parser }
