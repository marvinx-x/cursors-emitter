
import { Cursors } from "./../cursors";

export class Cursor3 extends Cursors{

  constructor(index) {
    super(index);
    this.backColor = getComputedStyle(document.body).getPropertyValue('--color-dark');
    this.speed = 0.1;
    this.setParamsCursor();
    this.drawCursor();
  }

  setParamsCursor() {
    this.radiusCursor = 30;
    this.colorCursor =  getComputedStyle(document.body).getPropertyValue('--color-primary');
    this.opacityCursor = 0.5;
  }
}

