# Tailwind Toast 🍞

## Usage
You can pull the package in with `npm install tailwind-toast`!

Then create a `twtoast.config.js` file in the root of your directory.

```javascript
{
  //default values
  modules: [
    //custom modules
  ]
}
```
Here you can define your default values and create custom modules

The fastest way to get started would be to require the package and call one
of the default modules:
```javascript
const { toast, snackbar } = require('tailwind-toast')

toast().default('Title', 'Message!').show()
```
There are some quick commands to help specify some major parts of your toast

```javascript
for(ms) //specify how long the toast will be displayed, in miliseconds
```
```javascript
from(positionY, positionX) //specify the location
//Y only is ok
//Y options are 'top' and 'bottom'
//X options are 'start', 'end', and 'center'
```
```javascript
with(parameters) //a catch all to change any setting {setting: value}
```

```javascript
addButtons(buttons) //add buttons to snackbar {title: () => action}, {anotherTitle: () => action}
```

```javascript
show() //this does not return the object, but shows the toast or snackbar with the parameters
```

```javascript
hide() //snackbar only, this helper can hide the snackbar as one of the button functions
/* Example */
let snackBar = snackbar()
snackBar
.danger('Cookies!', 'This website uses cookies! Yum!')
.addButtons(
  { accept: () => {
      snackBar.hide()
    }
  }
)
.show()
```

The default modules are:
```javascript
danger() //red box with grey text and an hand icon
success() //green box with grey text and a check mark icon
warning() //yellow box with grey text and a warning icon
default() //changes no default styling
```

Options:
"color", -> the background color of the snackbar or toast (tailwind colors)
"title", -> the title which is shown first in bold
"message", -> the message which is show second and not bold
"icon", -> the icon on the far left
"duration", -> how long the toast should stay for
"postion", -> positionY (top or bottom) and positionX (start, end, center)
"fontColor", -> color of the font
"fontTone", -> tailwind font tone (ie. text-blue-"500")
"tone", -> tailwind bg tone of the snackbar or toast (ie. bg-blue-"500")
"shape", -> square (rounded) or pill (rounded-full)
"speed" -> the speed the toast will appear and disappear (75, 100, 150, 200, 300, 500, 700, 1000)
