import Swup from 'swup';
import SwupFadeTheme from '@swup/fade-theme';
import { setCursor } from './../index'


export function swupTransitions() {

  const swup = new Swup({
    linkSelector : `a[href^="/index"], a[href^="index"]`,
    plugins: [new SwupFadeTheme()]
  });

  setCursor();
  swup.on('contentReplaced',() => {
     setCursor();
  });
}
