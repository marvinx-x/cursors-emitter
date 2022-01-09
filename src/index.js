import Swup from 'swup';
import SwupOverlayTheme from '@swup/overlay-theme';

const classActive = 'active';

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
      duration: 600,
      direction: 'to-right',
    })]
  });

  swup.on('clickLink', function(e) {
    const allLinks = document.querySelectorAll("nav[role='navigation'] a")
    for(const link of allLinks){ link.classList.remove(classActive)}
    e.delegateTarget.classList.add(classActive);
  });
});