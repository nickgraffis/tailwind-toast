const { toast } = require('./twtoast.js')

setTimeout(() => {
  toast()
  .purple('Purple!', 'This is a danger message! Watch out!')
  .for(2000)
  .show()
}, 3000)
