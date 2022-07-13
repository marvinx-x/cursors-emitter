
import { Cursors } from "./../cursors";

export class Cursor2 extends Cursors{

  constructor(index) {
    super(index);
    this.speed = 0.011;
    this.tinyCursor = false;
    this.cursor = true;
    this.backColor = "none";
    this.setParamsParticles();
    this.drawCursor();
  }

  setParamsParticles() {
    this.nbrParticles = 150;
    this.radiusStart = this.diagonalWindow()/10;
    this.radiusDiff = 0;
    this.fillParticles = "url('#gradient')";
    this.gradientParticles = {
      color1: "#BCE3D3",
      color2: "#55828b"
    };
  }
}

