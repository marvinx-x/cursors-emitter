import { isTouchDevices } from "./utils";

export class Cursors{

  constructor(index) {
    this.widthContainer = window.innerWidth;
    this.heightContainer = window.innerHeight;
    this.container = document.querySelector(`#cursor-${index}`);
    this.links = document.querySelectorAll(`nav[role="navigation"] a`);
    this.link = this.links[index-1];
    this.boundsLinks = this.link.getBoundingClientRect();
    this.xStart = this.boundsLinks.left + this.boundsLinks.width/2;
    this.yStart = this.boundsLinks.top + this.boundsLinks.height/2;
    this.mouse = { x: this.xStart,y: this.yStart };
    this.pos = { x: this.xStart, y: this.yStart };
    this.diff = { x: null,y: null };
    this.tinyCursor = true;
    this.activeLinks();
    this.mousemoveCursor();
  }

  activeLinks() {
    this.activeClass = 'active';
    for (const link of this.links) { link.classList.remove(this.activeClass) };
    this.link.classList.add(this.activeClass);
  }

  drawCursor() {
    this.container.innerHTML =
      `<svg width="${this.widthContainer}" height="${this.heightContainer}" viewbox="0 0 ${this.widthContainer} ${this.heightContainer}" style="background:${this.backColor}">
        <g class="particles">
          <circle r="50" cx=${this.pos.x} cy=${this.pos.y} fill="blue" fill-opacity="0.1" stroke="3" stroke-opacity="0.2"></circle>
          <circle r="100" cx=${this.pos.x} cy=${this.pos.y} fill="blue" fill-opacity="0.1" stroke="3" stroke-opacity="0.2"></circle>
          <circle r="150" cx=${this.pos.x} cy=${this.pos.y} fill="blue" fill-opacity="0.1" stroke="3" stroke-opacity="0.2"></circle>
        </g>
        ${this.tinyCursor ? ` <g class="tiny-cursor">
          <circle r=${this.radiusCursor || 10} cx=${this.pos.x} cy=${this.pos.y} style="transform-origin: ${this.pos.x}px ${this.pos.y}px" fill="${this.colorCursor}" fill-opacity="${this.opacityCursor}" stroke="${this.strokeColor}" stroke-width="${this.strokeWidth}" stroke-opacity="${this.strokeOpacityCursor}"></circle>
        </g> ` : false}
    </svg>`;

    this.tinyCursor ? this.nodeCursor = this.container.querySelector('.tiny-cursor circle') : null;
    this.loop();
  }

  mousemoveCursor() {
    window.addEventListener(isTouchDevices ? 'touchmove' : 'mousemove',(e) => {
      this.updateCoordinates(e);
    },{ passive : true });
  }

  updateCoordinates(e) {
    if (e.type.match('touch')) {
      this.mouse.x = e.touches[0].clientX;
      this.mouse.y = e.touches[0].clientY;
    }
    else {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    }
  }

  setParamsDiffs(){
    this.diff.x = this.mouse.x - this.pos.x;
    this.diff.y = this.mouse.y - this.pos.y;
    this.pos.x += this.diff.x * this.speed;
    this.pos.y += this.diff.y * this.speed;
  }

  loop() {
    this.setParamsDiffs();
    this.tinyCursor ? this.setTinyCursor() : null;
    requestAnimationFrame( () => this.loop() );
  }

  setTinyCursor() {
    // this.translate = `translate(${this.pos.x + 'px'},${this.pos.y + 'px'})`;
    this.rotate = `rotate(${ Math.atan2(this.diff.y, this.diff.x) * 180 / Math.PI }deg)`;
    this.squeeze = Math.min(Math.sqrt(Math.pow(this.diff.x, 2) + Math.pow(this.diff.y, 2)) / this.accelerator, this.maxSqueeze);
    this.scale = `scale(${1 + this.squeeze},${1 - this.squeeze})`;
    this.nodeCursor.setAttribute('cx', this.pos.x)
    this.nodeCursor.setAttribute('cy',this.pos.y)
    this.nodeCursor.style.transformOrigin = `${this.pos.x}px ${this.pos.y}px`;
    this.nodeCursor.style.transform = this.rotate + this.scale;
  }
}





