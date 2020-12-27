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
