var cuid = require('cuid')
var css = require('css')
var insert = require('insert-css')

var globals = ['*', 'body', 'html']

module.exports = function (scope, style) {
  var id = cuid.slug()
  scope.setAttribute('data-scoped-css', id)

  var styleStr = parseCSS(id, style)

  insert(styleStr)
}

function parseCSS (identifier, style) {
  var o = css.parse(style)
  o.stylesheet.rules.forEach(function (rule, i) {
    if (o.stylesheet.rules[i].type !== 'rule') return

    var selectors = o.stylesheet.rules[i].selectors
    var globalAttr = false

    selectors.forEach(function (s, idx) {
      if (globals.indexOf(s) > -1) globalAttr = true
      var selector = globalAttr
        ? s + ' [data-scoped-css="' + identifier + '"]'
        : '[data-scoped-css="' + identifier + '"] ' + s
      o.stylesheet.rules[i].selectors[idx] = selector
    })
  })

  return css.stringify(o)
}

module.exports.parseCSS = parseCSS
