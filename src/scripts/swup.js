import Swup from 'swup';
import SwupFadeTheme from '@swup/fade-theme';
import { setCursor } from './../index';


function FontsLoaded() {
  document.fonts.ready.then(() => {
    document.querySelector('header[role=banner]').classList.add('font-loaded');
  });
}


function removeControlsVideo() {
  const videos = document.querySelectorAll('video');
  if (videos.length > 0) {
    for (const video of videos) {
      video.removeAttribute('controls');
    }
  }
}

export function swupTransitions() {

  const swup = new Swup({
    linkSelector : `a[href^="/index"], a[href^="index"]`,
    plugins: [new SwupFadeTheme()]
  });

  const initPage = () => {
    setCursor();
    FontsLoaded();
    removeControlsVideo();
  }

  initPage();
  swup.on('contentReplaced',() => {
    initPage();
  });
}
