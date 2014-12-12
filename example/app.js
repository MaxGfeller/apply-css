var apply = require('../')
var fs = require('fs')

var cssString = fs.readFileSync('style.css',  { encoding: 'utf8' })

apply(document.querySelector('#div-1'), cssString)
