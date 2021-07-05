# Tailwind Toast 🍞

# FYI - Working on a pretty big update, same concept, v2 ETA End of March

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
### There are some quick commands to help specify some major parts of your toast

```javascript
show() //this does not return the object, but shows the toast or snackbar with the parameters
```

```javascript
for(ms) //specify how long the toast will be displayed, in miliseconds
/* Example */
toast().warning('Hey!', 'There was a minor error!').for(3000).show() //display for 3000ms
```

```javascript
as(shape) //specify the shape of the toast or snackbar ('pill' or 'square')
/* Example */
toast().success('Great!', 'We saved it!').as('pill').show() //show pill shaped toast
```

```javascript
from(positionY, positionX) //specify the location
//Y only is ok
//Y options are 'top' and 'bottom'
//X options are 'start', 'end', and 'center'
/* Example */
toast().default(null, 'Jocelyn just logged on!').from('bottom', 'end').show() //display toast at bottom right
```
```javascript
with(parameters) //a catch all to change any setting {setting: value}
/* Example */
toast()
.warning('Hey!', 'There was a minor error!')
.with({
  shape: 'pill',
  duration: 4000,
  speed: 1000,
  positionX: 'end',
  positionY: 'top',
  color: 'bg-blue-800',
  fontColor: 'blue',
  fontTone: 200
}).show() //display with all parameters
```

```javascript
addButtons(buttons) //add buttons to snackbar {title: () => action}, {anotherTitle: () => action}
/* Example */
snackBar()
.danger('Hey!', 'You just deleted the message!')
.addButtons(
  { undo: () => {
      undoDeleteMessage()
    }
  }
)
.show()
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

### The default modules are:
```javascript
danger() //red box with grey text and an hand icon
success() //green box with grey text and a check mark icon
warning() //yellow box with grey text and a warning icon
default() //changes no default styling
```

### Options
```javascript
"color", -> the background color of the snackbar or toast (tailwind colors) with the tone (ie. bg-blue-500)
"title", -> the title which is shown first in bold
"message", -> the message which is show second and not bold
"icon", -> the icon on the far left
"duration", -> how long the toast should stay for
"postion", -> positionY (top or bottom) and positionX (start, end, center)
"fontColor", -> color of the font
"fontTone", -> tailwind font tone (ie. text-blue-"500")
"shape", -> square (rounded) or pill (rounded-full)
"speed" -> the speed the toast will appear and disappear (75, 100, 150, 200, 300, 500, 700, 1000)
```

### Adding custom modules
In your `twtoast.config.js` file you can add custom modules. Make sure to `return this`
```javascript
{
  //default values
  modules: [
    myModule: (title, message) => {
      this.color = 'bg-indigo-200'
      this.fontColor = 'indigo'
      this.fontTone = 800
      this.shape = 'pill'
      this.postionY = 'top'
      this.positionX = 'start'
      return this
    }
  ]
}
```
