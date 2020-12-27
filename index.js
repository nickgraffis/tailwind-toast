const { toast, snackbar } = require('./twtoast.js')

setTimeout(() => {
  let snackBar = snackbar()
  snackBar
  .purple('Purple!', 'This is a danger message! Watch out!')
  .addButtons(
    { retry: () => alert('Works!') },
    { ok: () => snackBar.hide() }
  )
  .show()
}, 3000)
