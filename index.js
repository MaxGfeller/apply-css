var cuid = require('cuid')
var css = require('css')
var insert = require('insert-css')

var globals = ['*', 'body', 'html']

module.exports = function(scope, style) {
  var id = cuid.slug()
  scope.setAttribute('data-scoped-css', id)

  var o = css.parse(style)
  o.stylesheet.rules.forEach(function(rule, i) {
    if (o.stylesheet.rules[i].type !== 'rule') return

    var s = o.stylesheet.rules[i].selectors[0]
    var globalAttr = false
    if (globals.indexOf(s) > -1) globalAttr = true
    var selector = globalAttr ?
      s + ' [data-scoped-css="' + id + '"]'
      : '[data-scoped-css="' + id + '"] ' + s
    o.stylesheet.rules[i].selectors[0] = selector
  })

  insert(css.stringify(o))
}
