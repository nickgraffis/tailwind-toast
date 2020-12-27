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
