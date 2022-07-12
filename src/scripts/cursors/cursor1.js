import { isTouchDevices } from "./../utils";
import { Cursors } from "./../cursors";
export class Cursor1 extends Cursors{

  constructor(index) {
    super(index);
    this.speed = !isTouchDevices ? 0.5 : 0.9;
    this.setParamsCursor();
    this.setParamsParticles();
    this.drawCursor();
  }

  setParamsCursor() {
    this.radiusCursor = 15;
    this.colorCursor = getComputedStyle(document.body).getPropertyValue('--color-third');
    this.maxSqueeze = 0.6;
    this.accelerator = 1000;
  }

  setParamsParticles() {
    this.strokeWidthParticles = 1.25;
    this.strokeColorParticles = getComputedStyle(document.body).getPropertyValue('--color-third');
    this.radiusStart = this.radiusCursor*3;
    this.radiusDiff = 7;
    this.nbrParticles = Math.round((this.diagonalWindow() + this.radiusDiff - this.radiusStart) / this.radiusDiff);
    this.transitionParticles = {
      duration: 1,
      delay: 6,
      easing : "linear"
    };
  }
}


