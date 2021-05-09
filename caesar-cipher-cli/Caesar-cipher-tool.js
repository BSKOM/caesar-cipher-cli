const { coder } = require('./coder')
const { parser } = require('./parser')
const { pipeline } = require('stream')
const { Transform } = require('stream')
const fs = require('fs')
const path = require('path')

const filePathIn = path.join(__dirname, parser()[2])
const filePathOut = path.join(__dirname, parser()[3])

let myText = fs.readFileSync(filePathIn, 'utf-8')
let myCodedText = coder((parser()[0] === 'encode' ? 1 : -1), parser()[1], myText)
fs.appendFileSync(filePathOut, myCodedText )

