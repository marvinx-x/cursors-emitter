import Swup from 'swup';
import SwupOverlayTheme from '@swup/overlay-theme';
import { setCursor } from './../index'


export function swupTransitions() {

  const swup = new Swup({
    linkSelector : `a[href^="/index"], a[href^="index"]`,
    plugins: [
      new SwupOverlayTheme({
      color: getComputedStyle(document.body).getPropertyValue('--color-third')
    })]
  });

  swup.on('transitionStart', (e) => {
    document.body.style.pointerEvents = 'none';
  });

   swup.on('transitionEnd', (e) => {
    document.body.style.pointerEvents = 'auto';
   });

   setCursor();
   swup.on('contentReplaced', (e) => {
     setCursor();
  });
}
