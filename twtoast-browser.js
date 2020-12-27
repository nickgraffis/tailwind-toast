(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const h = require('../utils/helpers')
const options = require('../utils/options.json')
const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero', 'ten', 'eleven']

class Snackbar {
  constructor(color, icon, duration, positionX, positionY, fontColor, fontTone, tone, shape, speed) {
    this.color = color,
      this.icon = icon,
      this.duration = duration,
      this.positionX = positionX,
      this.positionY = positionY,
      this.fontColor = fontColor,
      this.fontTone = fontTone,
      this.tone = tone,
      this.shape = shape,
      this.speed = speed,
      this.buttons = [],
      this.html,
      this.id,
      this.title,
      this.message
  }

  for (ms) {
    this.duration = ms
    return this
  }

  from(positionY, positionX = this.positionX) {
    this.positionX = positionX
    this.postionY = positionY
    return this
  }

  with(params) {
    Object.keys(params).forEach((p) => {
      let object = params
      if (options.includes(p)) {
        eval('this.' + p + ' = ' + 'object.' + p)
      }
    })
    return this
  }

  danger(title, message) {
    this.title = title
    this.message = message
    this.color = 'red'
    this.font = 'gray'
    this.icon = 'fas fa-bell'
    return this
  }

  success(title, message) {
    this.title = title
    this.message = message
    this.color = 'green'
    this.font = 'gray'
    return this
  }

  warning(title, message) {
    this.title = title
    this.message = message
    this.color = 'yellow'
    this.font = 'gray'
    return this
  }

  addButtons(...buttonObjects) {
    this.buttons = buttonObjects
    return this
  }

  hide() {
    let snackbar = document.querySelector("#" + this.id)
    snackbar.classList.remove(`${this.positionY === 'top' ? 'translate-y-36' : '-translate-y-36'}`)
    snackbar.classList.add(`${this.positionY === 'top' ? '-translate-y-36' : 'translate-y-36'}`)
  }

  show() {
    this.shape = this.shape === 'pill' ? 'rounded-full' : 'rounded'
    let wrapper = document.createElement('DIV')
    wrapper.classList = `absolute ease-in-out transform duration-${this.speed} -${this.positionY}-24 flex justify-${this.positionX} w-full`
    wrapper.innerHTML = eval('`' + h.getFile('./templates/snackbar.toast') + '`')
    this.id = `tawilwind-snackbar-${numbers[Math.floor(Math.random() * Math.floor(11))]}`
    wrapper.id = this.id
    let buttonWrapper = wrapper.querySelector('.twsnackbar').querySelector('#buttons')
    this.buttons.forEach((button) => {
      let newButton = document.createElement('DIV')
      newButton.classList = `cursor-pointer hover:bg-${this.color}-${(parseInt(this.tone) + 100)} p-2 rounded flex justify-center items-center`
      newButton.innerHTML = `<b class="uppercase"> ${Object.keys(button)[0]}</b>`
      newButton.onclick = Object.values(button)[0]
      buttonWrapper.append(newButton)
    })
    document.body.prepend(wrapper)
    setTimeout(() => {
      document.querySelector("#" + this.id)
        .classList
        .add(`${this.positionY === 'top' ? 'translate-y-36' : '-translate-y-36'}`)
    }, 1)
  }
}

module.exports = Snackbar

},{"../utils/helpers":6,"../utils/options.json":7}],2:[function(require,module,exports){
const h = require('../utils/helpers')
const options = require('../utils/options.json')
const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero', 'ten', 'eleven']

class Toast {
  constructor(color, icon, duration, positionX, positionY, fontColor, fontTone, tone, shape, speed) {
    this.color = color,
      this.icon = icon,
      this.duration = duration,
      this.positionX = positionX,
      this.positionY = positionY,
      this.fontColor = fontColor,
      this.fontTone = fontTone,
      this.tone = tone,
      this.shape = shape,
      this.speed = speed,
      this.buttons = [],
      this.html,
      this.id,
      this.title,
      this.message
  }

  for(ms) {
    this.time = ms
    return this
  }

  from(positionY, positionX = this.positionX) {
    this.positionX = positionX
    this.postionY = positionY
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
    this.fontColor = 'gray'
    return this
  }

warning(title, message) {
    this.title = title
    this.message = message
    this.color = 'yellow'
    this.font = 'white'
    return this
  }

show() {
  this.shape = this.shape === 'pill' ? 'rounded-full' : 'rounded'
    let wrapper = document.createElement('DIV')
    wrapper.classList = `absolute ease-in-out transform duration-${this.speed} -${this.positionY}-24 flex justify-${this.postionX} w-full`
    wrapper.innerHTML = eval('`' + h.getFile('./templates/toast.toast') + '`')
    this.id = `tawilwind-toast-${numbers[Math.floor(Math.random() * Math.floor(11))]}`
    wrapper.id = this.id
    document.body.prepend(wrapper)
    setTimeout(() => {
      let toast = document.querySelector("#" + this.id)
      toast.classList.add(`${this.position === 'top' ? 'translate-y-36' : '-translate-y-36'}`)
    }, 1)
    setTimeout(() => {
      let toast = document.querySelector("#" + this.id)
      toast.classList.remove(`${this.position === 'top' ? 'translate-y-36' : '-translate-y-36'}`)
      toast.classList.add(`${this.position === 'top' ? '-translate-y-36' : 'translate-y-36'}`)
    }, this.duration)
  }
}

module.exports = Toast

},{"../utils/helpers":6,"../utils/options.json":7}],3:[function(require,module,exports){
const { toast, snackbar } = require('./twtoast.js')

setTimeout(() => {
  let snackBar = snackbar()
  snackBar
  .purple('Purple!', 'This is a danger message! Watch out!')
  .addButtons(
    { retry: () => alert('Works!') },
    { ok: () => {
      snackBar.hide()
      toast().success('Great!', 'We did it!').show() 
    }}
  )
  .show()
}, 3000)

},{"./twtoast.js":4}],4:[function(require,module,exports){
const config = require('./twtoastconfig.js')
const Toast = require('./classes/Toast')
const Snackbar = require('./classes/Snackbar')

config.methods.forEach((method) => {
  eval('Toast.prototype.' + Object.keys(method)[0] + ' = ' + Object.values(method))
  eval('Snackbar.prototype.' + Object.keys(method)[0] + ' = ' + Object.values(method))
})

module.exports = {
  toast: () => {
    return new Toast(
      config.color ? config.color : 'blue',
      config.icon ? config.icon : 'fas fa-bell',
      config.duration ? config.duration : 3000,
      config.positionX ? config.positionX : 'center',
      config.positionY ? config.positionY : 'top',
      config.fontColor ? config.fontColor : 'grey',
      config.fontTone ? config.fontTone : 100,
      config.tone ? config.tone : 500,
      config.shape ? config.shape : 'square',
      config.speed ? config.speed : 200
    )
  },

  snackbar: () => {
    return new Snackbar(
      config.color ? config.color : 'blue',
      config.icon ? config.icon : 'fas fa-bell',
      config.duration ? config.duration : 3000,
      config.positionX ? config.positionX : 'center',
      config.positionY ? config.positionY : 'top',
      config.fontColor ? config.fontColor : 'grey',
      config.fontTone ? config.fontTone : 100,
      config.tone ? config.tone : 500,
      config.shape ? config.shape : 'square',
      config.speed ? config.speed : 200
    )
  }
}

},{"./classes/Snackbar":1,"./classes/Toast":2,"./twtoastconfig.js":5}],5:[function(require,module,exports){
module.exports = {
  positionX: 'end',
  positionY: 'bottom',
  speed: 1000,
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
  "shape",
  "speed"
]

},{}]},{},[3]);
