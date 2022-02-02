
# Cursors emitter

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
Create a non minified bundle of your app:

```sh
$ npm run build
```
Build a minified and optimized final bundle:

```sh
$ npm run build:prod
```


### Components
#### Colors

In `variables.scss`, pick your main color in hsl values and play with the lightness and the saturation to get your palette color. You can after play with that color with these three sass functions:
* `lightness(var(--$color), $multiplier)`
* `saturation(var(--$color), $multiplier)`
* `alpha(var(--$color), $opacity)`

#### Typography
You can use a google font `fontFamilyName` or a local custom font `fontCustomName` on your main project. Params it in `default.pug`

#### Titles
In `titles.scss`, you can style titles `h1, h2, h3, h4, h5, h6` or use class `.style-h#{nbr}` on it.

#### Icons
Find here all icons used into your project.
Icons are automatically generate in `styleguide.js`.

`font-awesome` `material-icons` and `glyphicon` librairies are already included (long to install via `npm install`) and you can use it with this pug mixin: `+icon("nameIcon","nameLibrary")`.
You can also use a custom svg icon in `assets/icons/nameIcon.svg`. That will create a `sprite.svg` that you can call into your pug pages simply this way: `+icon("nameIcon")`. You can also use it with a background-image with mixin in `_sprites.scss`.

#### Breakpoints
In `breakpoints.scss`, find differents mixins:
* `breakpoints-min($breakpoint)`
* `breakpoints-max($breakpoint)`
* `breakpoints-between($breakpoint)`

to play with differents devices points.

#### Grid
Find in `grid.scss`, a simple grid system which work with class `.grid` as a container.
Add an additionnal class to it to put the number of wanted columns `.col--$numberCol`.
Inside it, put other children with the class `.col`. You can nested this system.

#### Menu
By default, the main layout is a left nav with a burger menu.
On container `#app`, you can change it by putting class `.right-nav` to have the same system but in right side.
You can also use class `.top-nav` and add a top bar navigation system.

#### Buttons
The class `.btn` can be use on a link or a button. Put additionnals classes to style it: `.radius` `.outlined` `.rounded`

#### Tags
As buttons, put additionnals classes to `.tag` class: `.radius` `.outlined` `.rounded`.

#### Tooltip
Base on the [script van11y-accessible-simple-tooltip-aria](https://github.com/nico3333fr/van11y-accessible-hide-show-aria), you can add any tooltip with the class `.js-simple-tooltip`.

Add an additionnal class to set the position of your tooltip:
* `.tooltip--top`
* `.tooltip--right`
* `.tooltip--bottom`
* `.tooltip--left`
* `.tooltip--top-left`
* `.tooltip--top-right`
* `.tooltip--bottom-left`
* `.tooltip--bottom-right`

All tooltips are accessible and visible on focus.

#### Forms
All the forms elements are styled with css only in `forms.scss` at the exception of `input="file"` (simple javascript script) and select dropdown.

Last ones work with Jquery, and the plugin [select2.js](https://select2.org/getting-started/installation).
That make those selects entirely accessibles (keyboard navigation, focus...)

#### Images
Call any jpg, png or webp images like this in your pug files: `require(imgDir+"image.ext").src`.
If you want to use a data-uri image, just call it this way: `require(imgDir+"image.ext").placeholder`.

Thanks to `responsive-loader` package in `webpack.config.js`, we automatically generate the differents images in the good srcset dimensions.

You can also params the quality of your images with `ImageminPlugin`.

If you add the class `.lazyload` and replace src attribute by data-src to any images or elements with a background-image in css, you can lazyload those images by using included [lazysizes](https://www.npmjs.com/package/lazysizes) script.


