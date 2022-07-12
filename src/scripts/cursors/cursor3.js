
import { isTouchDevices } from "./../utils";
import { Cursors } from "./../cursors";

export class Cursor3 extends Cursors{

  constructor(index) {
    super(index);
    this.backColor = getComputedStyle(document.body).getPropertyValue('--color-dark');
    this.speed = !isTouchDevices ? 0.1 : 0.8;
    this.setParamsCursor();
    this.setParamsParticles();
    this.drawCursor();
  }

  setParamsCursor() {
    this.radiusCursor = 30;
    this.colorCursor = getComputedStyle(document.body).getPropertyValue('--color-third');
    this.maxSqueeze = 0.1;
    this.accelerator = 1000;
  }

  setParamsParticles() {
    this.colorParticles = "none";
    this.strokeWidthParticles = 1;
    this.strokeOpacityParticles = .1;
    this.nbrParticles = 120;
    this.directionRadius = ">";
    this.radiusStart = this.diagonalWindow()/3;
    this.radiusDiff = 1;
    this.sorting = "desc";
    this.strokeColorParticles = "white";
    this.transitionParticles = {
      duration: 1,
      delay: 1,
      easing : "linear"
    };
  }
}

