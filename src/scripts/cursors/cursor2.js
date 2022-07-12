
import { Cursors } from "./../cursors";

export class Cursor2 extends Cursors{

  constructor(index) {
    super(index);
    this.speed = 1;
    this.tinyCursor = false;
    this.backColor = "none";
    this.setParamsParticles();
    this.drawCursor();
  }

  setParamsParticles() {
    this.nbrParticles = 10;
    this.radiusStart = 100;
    this.radiusDiff = 20;
    this.colorParticles = "red";
    this.opacityParticles = 0.1;
    this.strokeColorParticles = "black";
    this.strokeWidthParticles = 1;
    this.strokeOpacityParticles = 1;
  }
}

