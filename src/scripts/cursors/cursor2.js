
import { Cursors } from "./../cursors";
import { isTouchDevices } from "./../utils";
export class Cursor2 extends Cursors{

  constructor(index) {
    super(index);
    this.speed = !isTouchDevices ? 0.5 : 1;
    this.delta = !isTouchDevices ? 0.04 : 0.04;
    this.cursor = true;
    this.tinyCursor = false;
    this.init();
    this.loop();
  }

  setParamsParticles() {
    this.nbrParticles =  !isTouchDevices ? 800 : 300;
    this.radiusStart = this.diagonalWindow()/9;
    this.radiusDiff = 0;
    this.sorting = "desc";
    this.idGradient = "gradient";
    this.fillParticles = `url('#${this.idGradient}')`;
    this.gradientParticles = {
      color1: getComputedStyle(document.body).getPropertyValue('--secondary'),
      color2: getComputedStyle(document.body).getPropertyValue('--primary'),
    };
  }

  drawGradient() {
    return `<defs>
      <linearGradient id=${this.idGradient}>
        <stop offset="0%"  stop-color="${this.gradientParticles.color1}" />
        <stop offset="100%" stop-color="${this.gradientParticles.color2}" />
      </linearGradient>
    </defs>`
  }
}
