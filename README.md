<!-- # Cursors emitter
Set and params differents creative cursors and particles.
See example by checking this [demo](https://www.marvinx.com/cursors-emitter).

### Tech
* [parcel](https://parceljs.org/) - Zero configuration build tool
* [pugJS](https://pugjs.org) - Clean, whitespace sensitive syntax for writing HTML
* [SCSS](https://sass-lang.com/) - CSS preprocessor

### Installation
Using npm:
```sh
$ npm install
```
Start the application:
```sh
$ npm start
```
Create minified bundle of your app:
```sh
$ npm run build
```

### Cursors
* In `partials/layout.pug`, set the number of cursors you want to set with the variable `nbrCursors`
* Create the number of `index.pug` relative to the number of cursors.
* In `cursor.js`, add yours params in object `paramParticles` for each cursors.

### Parameters
* `speed` : set global speed between 0 and 1

The cursor is split in two parts : the center and the particles around
```sh
cursor : {
  ...
},
particles : {
  ...
}
```
##### Cursor Parameters
* `maxSqueeze` : squeeze cursor effect, between 0 and 1
* `accelerator` : relative to maxSqueeze, average between 1000 and 3000
* `color` : background-color in hex
* `size` : tiny cursor width and height
* `opacity`
* `borderWidth`
* `borderColor`
* `borderOpacity`
* `shape` : **"circle"** by default or **"square"**

##### Particles Parameters
* `maxSqueeze` : squeeze particle effect, between 0 and 1
* `accelerator` : relative to maxSqueeze, average between 1000 and 3000
* `backgroundColor` : background-color of all page in hex
* `nbrParticles` : set particles number
* `radiusStart` : first circle radius
* `radiusDiff` : length between each particles
* `direction` : **">"** decrement particles size, **"<"** increment it
* `opacity`
* `strokeColor`
* `strokeWidth`
* `strokeOpacity`
* `blur`
* `mixBlendMode`
* `transitionParticles`
    * `duration` : in ms
    * `delay` : in ms
    * `timingfunction`
* `sort` : **"desc"** by default or **"asc"**, manage superpositions of each particles.

### Transitions Pages
Each page transitions use [Swup](https://swup.js.org/) library with theme [@swup/overlay-theme](https://swup.js.org/themes/overlay-theme)







 -->
