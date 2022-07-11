
import { Cursors } from "./../cursors";

export class Cursor1 extends Cursors{

  constructor(index) {
    super(index);
    this.backColor = "none";
    this.speed = 0.1;
    this.setParamsCursor();
    this.drawCursor();
  }

  setParamsCursor() {
    this.radiusCursor = 20;
    this.colorCursor = "none";
    this.opacityCursor = 1;
    this.strokeColor = getComputedStyle(document.body).getPropertyValue('--color-dark');
    this.strokeWidth = 1;
    this.maxSqueeze = 0.15;
    this.accelerator = 1000;
  }
}


