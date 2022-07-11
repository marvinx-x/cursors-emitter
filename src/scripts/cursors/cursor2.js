
import { Cursors } from "./../cursors";

export class Cursor2 extends Cursors{

  constructor(index) {
    super(index);
    this.tinyCursor = false;
    this.backColor = "none";
    this.drawCursor();
  }
}

