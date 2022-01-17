"use strict"

import Swup from 'swup';
import SwupOverlayTheme from '@swup/overlay-theme';
import { paramParticles, TinyCursor, Particles } from './scripts/cursor';

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


  let index = 0;
  const setParamsParticles = (elNumber) => Object.values(Object.values(paramParticles)[elNumber]);

  const setCursors = (xStart, yStart, ...args) => {
    new TinyCursor('#cursor', xStart, yStart, 0.1, 0.6, 1000);
    new Particles( "#particles", xStart, yStart, ...args);
  }

  setCursors(xStart, yStart, ...setParamsParticles(index));

  swup.on('clickLink', (e) => {
    const currentLink = e.delegateTarget;
    const allLinks = nav.querySelectorAll('a');
    const li = currentLink.parentNode;
    const ul = li.parentNode;
    for(const link of allLinks){ link.classList.remove(classActive)}
    currentLink.classList.add(classActive);
    xStart = e.clientX;
    yStart = e.clientY;
    index = Array.prototype.slice.call( ul.childNodes ).indexOf(li);
  });

  swup.on('contentReplaced', (e) => {
    setCursors(xStart, yStart, ...setParamsParticles(index))
  });
});

export { nav };
