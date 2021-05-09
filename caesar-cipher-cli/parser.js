function parser() {
  let args = process.argv.slice(2)
  let allArg = ['', undefined, , ]
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
          allArg[1] = args[i + 1]
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
    if (typeof argShift === undefined) {
      throw 'arg: shift - required option is empty';
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
  return allArg
}

module.exports = { parser }
