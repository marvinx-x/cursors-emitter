
import { Cursors } from "./../cursors";
import { isTouchDevices } from "./../utils";
export class Cursor2 extends Cursors{

  constructor(index) {
    super(index);
    this.speed = !isTouchDevices ? 0.5 : 0.9;
    this.delta = !isTouchDevices ? 0.04 : 0.02;
    this.cursor = true;
    this.tinyCursor = false;
    this.backColor = "none";
    this.init();
    this.loop();
  }

  setParamsText() {
    this.text = "Trail";
    this.fontFamilyText = "Syne";
    this.fontWeightText = 800;
    this.mixBlendModeText = "soft-light"
  }

  setParamsParticles() {
    this.nbrParticles = 800;
    this.radiusStart = this.diagonalWindow()/8;
    this.radiusDiff = 0;
    this.sorting = "desc";
    this.idGradient = "gradient";
    this.fillParticles = `url('#${this.idGradient}')`;
    this.gradientParticles = {
      color1: getComputedStyle(document.body).getPropertyValue('--color-third'),
      color2: "#4B5D8F"
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
