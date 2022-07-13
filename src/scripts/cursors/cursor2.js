
import { Cursors } from "./../cursors";

export class Cursor2 extends Cursors{

  constructor(index) {
    super(index);
    this.speed = 0.01;
    this.tinyCursor = false;
    this.backColor = "none";
    this.setParamsParticles();
    this.drawCursor();
  }

  setParamsParticles() {
    this.nbrParticles = 150;
    this.radiusStart = 200;
    this.radiusDiff = 0;
    this.fillParticles = "url('#test')";

    // this.sorting = "desc";

    // this.transitionParticles = {
    //   duration: 1,
    //   delay: 1,
    //   easing : "linear"
    // };
    // this.fillOpacityParticles = 0.1;
    // this.strokeColorParticles = "black";
    // this.strokeWidthParticles = 1;
    // this.strokeOpacityParticles = 1;

  }
}

