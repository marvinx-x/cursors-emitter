
import { Cursors } from "./../cursors";
import { isTouchDevices } from "./../utils";
export class Cursor4 extends Cursors{

  constructor(index) {
    super(index);
    this.speed = !isTouchDevices ? 0.5 : 1;
    this.delta = !isTouchDevices ? 0.05 : 0.05;
    this.videoUrlDesktop =  new URL('../../video/space_desktop.mp4', import.meta.url );
    this.videoUrlMobile =  new URL('../../video/space_mobile.mp4', import.meta.url );
    this.init();
    this.loop();
  }

  setParamsCursor() {
    this.radiusCursorBack = 32;
    this.radiusCursor = 16;
    this.strokeColorCursorBack = getComputedStyle(document.body).getPropertyValue('--white')
    this.fillCursor = getComputedStyle(document.body).getPropertyValue('--white');
    this.maxSqueeze = 0.3;
    this.accelerator = 1000;
  }

  setParamsParticles() {
    this.nbrParticles = !isTouchDevices ? 400 : 200;
    this.radiusStart = this.diagonalWindow()/8;
    this.radiusDiff = 0.1;
    this.directionRadius = ">"
    this.idMask = "maskGradient";
    this.idCursorFilter = "filter-cursor";
    this.filterParticles = `url('#${this.idCursorFilter}')`;
    this.fillParticles = `url('#${this.idMask}')`;
    this.maskCursor = {
      videoDesktop : this.videoUrlDesktop.href,
      videoMobile : this.videoUrlMobile.href
    };
  }

  drawMaskCursor() {
    return `
    <defs>
      <radialGradient id="${this.idMask}">
        <stop offset="0%" stop-color="#fff"/>
        <stop offset="100%" stop-color="#fff"/>
      </radialGradient>
      <mask id="theMask">${this.drawParticles()}</mask>
      ${this.filterImageCursor()}
      ${this.filterImageBack()}
      ${this.filterCursor()}
    </defs>
    <foreignObject x="0" y="0" width="100%" height="100%" filter=url(#filter-image-back) style="opacity:0.075">${this.insertVideo()}</foreignObject>
    <g id="maskReveal" mask="url(#theMask)">
      <foreignObject x="0" y="0" width="100%" height="100%" filter=url(#filter-image-cursor)>${this.insertVideo()}</foreignObject>
    </g>`
  }

  insertVideo(filter) {
    return `
    <video width="100%" height="100%" controls="false" autoplay loop muted crossorigin=anonymous>
      <source src="${!isTouchDevices ? this.maskCursor.videoDesktop : this.maskCursor.videoMobile}" type="video/mp4" />
    </video>`
  }

  filterCursor() {
    return `<filter id="${this.idCursorFilter}"><feGaussianBlur in="SourceGraphic" stdDeviation="0" /></filter>`
  }

  filterImageBack() {
    return `
    <filter id="filter-image-back">
      <feColorMatrix type="matrix" values=".33 .33 .33 0 0
        .33 .33 .33 0 0
        .33 .33 .33 0 0
        0 0 0 1 0">
      </feColorMatrix>
    </filter>`
  }

  filterImageCursor() {
    return `
    <filter id="filter-image-cursor" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feColorMatrix type="matrix" values=".44 .44 .44 0 0
        .44 .44 .44 0 0
        .44 .44 .44 0 0
        0 0 0 1 0">
      </feColorMatrix>
      <feComponentTransfer in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.55 0.25"/>
        <feFuncG type="table" tableValues="0.06 1"/>
        <feFuncB type="table" tableValues="0.93 0.91"/>
        <feFuncA type="table" tableValues="0 1"/>
      </feComponentTransfer>
    </filter>`
  }
}



