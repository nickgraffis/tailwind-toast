(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const h = require('../utils/helpers')

class Snackbar {
  constructor () {
    
  }
}

module.exports = Snackbar

},{"../utils/helpers":6}],2:[function(require,module,exports){
const h = require('../utils/helpers')
const options = require('../utils/options.json')

class Toast {
  constructor () {
    this.html,
    this.color,
    this.title,
    this.message,
    this.icon = 'fas fa-bell',
    this.duration = 3000,
    this.position = 'top',
    this.fontColor = 'gray',
    this.fontTone = 100
    this.tone = '500',
    this.shape = 'square',
    this.options = options
  }

  for(ms) {
    this.time = ms
    return this
  }

from(position) {
    this.position = position
    return this
  }

  with(params) {
    Object.keys(params).forEach((p) => {
      let object = params
      if (this.options.includes(p)) {
        eval('this.' + p + ' = ' + 'object.' + p)
      }
    })
    return this
  }

danger(title, message) {
    this.title = title
    this.message = message
    this.color = 'red'
    this.font = 'white'
    this.icon = 'fas fa-bell'
    return this
  }

success(title, message) {
    this.title = title
    this.message = message
    this.color = 'green'
    this.font = 'white'
    return this
  }

warning(title, message) {
    this.title = title
    this.message = message
    this.color = 'yellow'
    this.font = 'white'
    return this
  }

custom(title, message, color, font) {

  }

show() {
    let toast = this
    this.shape = toast.shape === 'pill' ? 'rounded-full' : 'rounded'
    this.html = eval('`' + h.getFile('./templates/toast.toast') + '`')
    let wrapper = document.createElement('DIV')
    wrapper.classList = `absolute ease-in-out transform duration-500 -${this.position}-24 flex justify-center w-full`
    wrapper.innerHTML = this.html
    let id = `tawilwind-toast`
    wrapper.id = id
    document.body.prepend(wrapper)
    setTimeout(() => {
      document.querySelector("#" + id)
      .classList
      .add(`${this.position === 'top' ? 'translate-y-36' : '-translate-y-36'}`)
    }, 1)
    setTimeout(() => {
      document.querySelector("#" + id)
      .classList
      .remove(`${this.position === 'top' ? 'translate-y-36' : '-translate-y-36'}`)
      document.querySelector("#" + id)
      .classList
      .add(`${this.position === 'top' ? '-translate-y-36' : 'translate-y-36'}`)
    }, this.duration)
  }
}

module.exports = Toast

},{"../utils/helpers":6,"../utils/options.json":7}],3:[function(require,module,exports){
const { toast } = require('./twtoast.js')

setTimeout(() => {
  toast()
  .purple('Purple!', 'This is a danger message! Watch out!')
  .for(2000)
  .show()
}, 3000)

},{"./twtoast.js":4}],4:[function(require,module,exports){
const config = require('./twtoastconfig.js')
const Toast = require('./classes/Toast')
const Snackbar = require('./classes/Snackbar')

config.methods.forEach((method) => {
  eval('Toast.prototype.' + Object.keys(method)[0] + ' = ' + Object.values(method))
})

module.exports = {
  toast: () => {
    return new Toast()
  },

  snackbar: () => {
    return new Snackbar()
  }
}

},{"./classes/Snackbar":1,"./classes/Toast":2,"./twtoastconfig.js":5}],5:[function(require,module,exports){
module.exports = {
  methods: [
    {
      purple: function (title, message) {
        this.title = title
        this.message = message
        this.color = 'purple'
        this.font = 'gray'
        this.fontTone = '100'
        this.icon = 'fas fa-bell'
        return this
      }
    }
  ]
}

},{}],6:[function(require,module,exports){
function getFile(file) {
  var x = new XMLHttpRequest();
  x.open('GET', file, false);
  x.send();
  return x.responseText;
}

module.exports = {
  getFile: getFile
}

},{}],7:[function(require,module,exports){
module.exports=[
  "color",
  "title",
  "message",
  "icon",
  "duration",
  "postion",
  "fontColor",
  "fontTone",
  "tone",
  "shape"
]

},{}]},{},[3]);
