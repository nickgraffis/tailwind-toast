const { toast, snackbar } = require('./twtoast.js')

  let snackBar = snackbar()
  snackBar
  .danger('Purple!', 'This is a danger message! Watch out!')
  .addButtons(
    { retry: () => alert('Works!') },
    { ok: () => {
      snackBar.hide()
      toast().success('Great!', 'We did it!').show()
    }}
  )
  .show()
