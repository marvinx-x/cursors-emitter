
import { Cursors } from "./../cursors";

export class Cursor4 extends Cursors{

  constructor(index) {
    super(index);
    this.speed = 0.2;
    this.setParamsCursor();
    this.setParamsParticles();
    this.drawCursor();
  }

  setParamsCursor() {
    this.maxSqueeze = 0.1;
    this.accelerator = 2000;
    this.radiusCursor = 40;
    this.fillCursor = "white";
  }

  setParamsParticles() {
    this.nbrParticles = 1;
    this.radiusStart = 200;
    this.radiusDiff = 20;
    this.idMask = "maskGradient"
    this.fillParticles = `url('#${this.idMask}')`;
    this.maskCursor = {
      image1: "https://picsum.photos/200/300?grayscale&blur=2",
      image2: "https://picsum.photos/200/300"
    };
    this.transitionParticles = {
      duration: 18,
      delay: 6,
      easing : "linear"
    };
  }

  drawMaskCursor() {
    return `<defs>
      <radialGradient id="${this.idMask}">
        <stop offset="50%" stop-color="#fff"/>
        <stop offset="100%" stop-color="#000"/>
      </radialGradient>
      <mask id="theMask">${this.drawParticles()}</mask>
    </defs>
    <image xlink:href=${this.maskCursor.image1} width="${this.widthContainer}" height="${this.heightContainer}" />
    <g id="maskReveal" mask="url(#theMask)" >
      <image xlink:href=${this.maskCursor.image2} width="${this.widthContainer}" height="${this.heightContainer}"  />
    </g>`
  }
}




