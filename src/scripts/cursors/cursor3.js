
import { isTouchDevices } from "./../utils";
import { Cursors } from "./../cursors";

export class Cursor3 extends Cursors{

  constructor(index) {
    super(index);
    this.speed = !isTouchDevices ? 0.1 : 1;
    this.init();
    this.loop();
  }

  setParamsCursor() {
    this.radiusCursorBack = 32;
    this.radiusCursor = 16;
    this.strokeColorCursorBack = getComputedStyle(document.body).getPropertyValue('--primary')
    this.fillCursor = getComputedStyle(document.body).getPropertyValue('--primary');
    this.maxSqueeze = 0.1;
    this.accelerator = 1000;
  }

  setParamsParticles() {
    this.strokeGradient = {
      idStrokeGradient : "gradient",
      color2 : getComputedStyle(document.body).getPropertyValue('--primary'),
      color1 : getComputedStyle(document.body).getPropertyValue('--secondary'),
    }
    this.radiusDiff = 1;
    this.strokeWidthParticles = 1;
    this.strokeOpacityParticles = .2;
    this.nbrParticles = !isTouchDevices ? 120 : 60;
    this.directionRadius = ">";
    this.radiusStart = this.diagonalWindow()/3;
    this.sorting = "desc";
    this.transitionParticles = {
      duration: !isTouchDevices ? 20 : 100,
      delay: !isTouchDevices ? 1 : 4,
      easing : "linear"
    };
  }
}

