
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
    this.fontSizeText = "10vw"
    this.mixBlendModeText = "soft-light";
    this.fillColorText = "black";
    this.strokeColorText = "white";
    this.strokeWidthText = 10;
  }

  setParamsCursor() {
    this.radiusCursor = 30;
    this.strokeColorCursor = "white";
    this.strokeWidthCursor = 3;
    this.maxSqueeze = 0.3;
    this.accelerator = 1000;
  }

  setParamsParticles() {
    this.nbrParticles = 800;
    this.radiusStart = this.diagonalWindow()/9;
    this.radiusDiff = 0;
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
    <feColorMatrix type="matrix" values=".33 .33 .33 0 0
        .33 .33 .33 0 0
        .33 .33 .33 0 0
        0 0 0 1 0">
    </feColorMatrix>

    <!-- Map the grayscale result to the gradient map provided in tableValues -->
    <feComponentTransfer color-interpolation-filters="sRGB">
      <feFuncR type="table" tableValues=".996078431  .984313725"></feFuncR>
      <feFuncG type="table" tableValues=".125490196  .941176471"></feFuncG>
      <feFuncB type="table" tableValues=".552941176  .478431373"></feFuncB>
    </feComponentTransfer>
    </filter>`
  }
}


