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
const { toast, snackbar } = require('./twtoast.js')

toast().default('Title', 'Message!').show()
```
There are some quick commands to help specify some major parts of your toast

`for(ms) //specify how long the toast will be displayed, in miliseconds`
```from(positionY, positionX) //specify the location
//Y only is ok
//Y options are 'top' and 'bottom'
//X options are 'start' and 'end'
```
`with(parameters) //a catch all to change any setting {setting: value}`
