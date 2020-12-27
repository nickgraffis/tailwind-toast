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

  for (ms) {
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
