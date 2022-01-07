

function navLinksActive() {
  const pathNameMatch = window.location.pathname.match(/\d/);
  const link = document.querySelector(`nav[role="navigation"] li:nth-of-type(${pathNameMatch === null ? 1 : pathNameMatch[0]}) a`);
  link.classList.add('active');
}

function isTouchDevice() {
  return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
}

window.addEventListener('load', () => {
  document.body.classList.remove('preload');
  if(isTouchDevice()){ document.body.classList.add('touch') }
  navLinksActive();
})
