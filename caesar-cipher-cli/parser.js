function parser() {
  let args = process.argv.slice(2)
  let argAction = ''
  let argShift = undefined
  let argIn = ''
  let argOut = ''
  let allArg = []
  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--action':
      case '-a':
        if ((args[i + 1] === 'encode' || args[i + 1] === 'decode')) {
          throw err
          console.error('arg:action - param must be encode or decode only');
        }
        argAction = args[i + 1]
        i += 1
        countOpt += 1
        break;
      case '--shift':
      case '-s':
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

  if (argAction.length === 0) {
    throw err
    console.error('arg: action - required option is empty');
  }
  if (typeof argShift === undefined) {
    throw err
    console.error('arg: shift - required option is empty');
  }
  allArg += argAction
  allArg += argShift
  allArg += argIn
  allArg += argOut
  return allArg
}
module.export = { parser }
