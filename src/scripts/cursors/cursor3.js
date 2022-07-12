
import { Cursors } from "./../cursors";

export class Cursor3 extends Cursors{

  constructor(index) {
    super(index);
    this.backColor = getComputedStyle(document.body).getPropertyValue('--color-dark');
    this.speed = 0.1;
    this.setParamsCursor();
    this.setParamsParticles();
    this.drawCursor();
  }

  setParamsCursor() {
    this.radiusCursor = 30;
    this.colorCursor =  getComputedStyle(document.body).getPropertyValue('--color-primary');
    this.opacityCursor = 0.5;
  }

  setParamsParticles() {
    this.nbrParticles = 2;
    this.radiusStart = 50;
    this.radiusDiff = 50;
    this.colorParticles = "red";
    this.opacityParticles = 0.5;
    this.strokeColorParticles = "black";
    this.strokeWidthParticles = 4;
    this.strokeOpacityParticles = 1;
  }
}

