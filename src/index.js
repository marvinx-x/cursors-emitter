"use strict"

import Swup from 'swup';
import SwupOverlayTheme from '@swup/overlay-theme';
import { TinyCursor, Particles } from './scripts/cursor';

const classActive = 'active';
const nav = document.querySelector('nav[role=navigation]');

function isTouchDevice() {
  return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
}

function navLinksActive() {
  const pathNameMatch = window.location.pathname.match(/\d/);
  const link = document.querySelector(`nav[role="navigation"] li:nth-of-type(${pathNameMatch === null ? 1 : pathNameMatch[0]}) a`);
  link.classList.add(classActive);
}

window.addEventListener('load', (e) => {
  document.body.classList.remove('preload');
  if(isTouchDevice()){ document.body.classList.add('touch') }
  navLinksActive();

  const swup = new Swup({
    plugins: [new SwupOverlayTheme({
      color: getComputedStyle(document.body).getPropertyValue('--color-third'),
      duration: 1000,
      direction: 'to-right',
    })]
  });

  let xStart, yStart;
  const setCursors = (xStart, yStart) => {
    const tiny = new TinyCursor('#cursor', xStart, yStart, 0.1, 0.6, 1000);
    const particles = new Particles("#particles", xStart, yStart, 0.1, 0.6, 1000);
  }

  setCursors(xStart, yStart);

  swup.on('clickLink', (e) => {
    const allLinks = nav.querySelectorAll('a');
    for(const link of allLinks){ link.classList.remove(classActive)}
    e.delegateTarget.classList.add(classActive);
    xStart = e.clientX;
    yStart = e.clientY;
  });

  swup.on('contentReplaced', () => {
    setCursors(xStart, yStart)
  });
});

export { nav };
