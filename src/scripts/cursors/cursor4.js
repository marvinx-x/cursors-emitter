
import { Cursors } from "./../cursors";

export class Cursor4 extends Cursors{

  constructor(index) {
    super(index);
    this.speed = 0.3;
    this.delta = 0.05;
    this.init();
    this.loop();
  }

  setParamsText() {
    this.text = "Mask";
    this.fontFamilyText = "Sonsie One";
    this.fontSizeText = 200;
    this.mixBlendModeText = "exclusion";
    this.fillColorText = "black";
    this.strokeColorText = "white";
    this.strokeWidthText = 50;
  }

  setParamsCursor() {
    this.radiusCursor = 30;
    this.strokeColorCursor = "white";
    this.strokeWidthCursor = 3;
    this.maxSqueeze = 0.3;
    this.accelerator = 1000;
  }

  setParamsParticles() {
    this.nbrParticles = 200;
    this.radiusStart = this.diagonalWindow()/9;
    this.radiusDiff = 0.3;
    this.directionRadius = ">"
    this.idMask = "maskGradient";
    this.idCursorFilter = "filter-cursor";
    this.filterParticles = `url('#${this.idCursorFilter}')`;
    this.fillParticles = `url('#${this.idMask}')`;
    this.sorting = "desc";
    this.maskCursor = {
      image: "https://i.picsum.photos/id/1069/3500/2333.jpg?hmac=VBJ1vR2opkcKLS9NKGDl5uPxF02u6dSqbwc1x1b4oJc"
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
      <image xlink:href=${this.maskCursor.image} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" filter="url(#filter-image-back)" />
      <g id="maskReveal" mask="url(#theMask)" >
        <image xlink:href=${this.maskCursor.image} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" filter="url(#filter-image-cursor)" />
      </g>`
  }


  filterCursor() {
    return `<filter id="${this.idCursorFilter}">
      <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
    </filter>`
  }

  filterImageBack() {
    return `<filter id="filter-image-back">
      <feColorMatrix type="matrix" values=".03 .03 .03 0 0
      .03 .03 .03 0 0
      .03 .03 .03 0 0
      0   0   0  1 0">
      </feColorMatrix>
    </filter>`
  }

  filterImageCursor() {
    return `<filter id="filter-image-cursor" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feColorMatrix type="matrix" values="1 0 0 0 0
        1 0 0 0 0
        1 0 0 0 0
        0 0 0 1 0"
      in="SourceGraphic" result="colormatrix"/>
      <feComponentTransfer in="colormatrix" result="componentTransfer">
          <feFuncR type="table" tableValues="0.03 0.8"/>
          <feFuncG type="table" tableValues="0.57 1"/>
          <feFuncB type="table" tableValues="0.49 0.53"/>
          <feFuncA type="table" tableValues="0 1"/>
        </feComponentTransfer>
        <feBlend mode="color-burn" in="componentTransfer" in2="SourceGraphic" result="blend"/>
    </filter>`
  }
}


