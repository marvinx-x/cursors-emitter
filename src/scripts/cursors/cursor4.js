
import { Cursors } from "./../cursors";

export class Cursor4 extends Cursors{

  constructor(index) {
    super(index);
    this.backColor = "center / cover no-repeat url(https://maltemacademy.com/wp-content/uploads/2019/10/Definition-Front-End-Developpeur.jpg)"
    this.speed = 1;
    this.setParamsCursor();
    this.setParamsParticles();
    this.drawCursor();
  }

  setParamsCursor() {
    this.maxSqueeze = 0.5;
    this.accelerator = 1000;
    this.radiusCursor = 300;
    this.fillCursor = "white";
  }

  setParamsParticles() {
    this.nbrParticles = 20;
    this.radiusStart = 50;
    this.radiusDiff = 50;
    this.fillParticles = "red";
    this.fillOpacityParticles = 0.5;
    this.strokeColorParticles = "black";
    this.strokeWidthParticles = 4;
    this.strokeOpacityParticles = 1;
  }
}

