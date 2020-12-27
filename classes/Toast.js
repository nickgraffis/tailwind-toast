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
