var test = require('tape')
var path = require('path')
var apply = require('../')
var fs = require('fs')

var cssString = fs.readFileSync(path.join(__dirname, 'style.css'), {
  encoding: 'utf8'
})

test('basic', function (t) {
  var div = document.createElement('div')
  div.id = 'test'
  document.body.appendChild(div)

  var div2 = document.createElement('div')
  div2.id = 'test2'
  document.body.appendChild(div2)

  apply(div, cssString)

  t.end()
})
