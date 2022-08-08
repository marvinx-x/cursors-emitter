import { isTouchDevices } from "./../utils";
import { Cursors } from "./../cursors";
export class Cursor1 extends Cursors{

  constructor(index) {
    super(index);
    this.speed = !isTouchDevices ? 0.5 : 1;
    this.init();
    this.loop();
  }

  setParamsCursor() {
    this.radiusCursor = 15;
    this.fillCursor = getComputedStyle(document.body).getPropertyValue('--primary');
    this.maxSqueeze = 0.6;
    this.accelerator = 1000;
  }

  setParamsParticles() {
    this.strokeGradient = {
      idStrokeGradient : "gradient",
      color2 : getComputedStyle(document.body).getPropertyValue('--primary'),
      color1 : getComputedStyle(document.body).getPropertyValue('--secondary'),
    }
    this.strokeWidthParticles = 1.5;
    this.strokeOpacityParticles = .15;
    this.radiusDiff = 7;
    this.radiusStart = this.radiusCursor*3;
    this.nbrParticles = Math.round((this.diagonalWindow() + this.radiusDiff - this.radiusStart) / this.radiusDiff);
    this.transitionParticles = {
      duration: 18,
      delay: !isTouchDevices ? 4 : 14,
      easing : "linear"
    };
  }
}


