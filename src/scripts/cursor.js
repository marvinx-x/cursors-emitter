import { nav } from './../index'

export class Cursor {

  constructor(el, xStart, yStart, speed, maxSqueeze, accelerator) {
    this.node = document.querySelector(el);
    this.xStart = xStart || this.getBoundsFirstLink().x;
    this.yStart = yStart || this.getBoundsFirstLink().y;
    this.mouse = { x : this.xStart, y : this.yStart };
    this.pos = { x : this.xStart, y : this.yStart };
    this.diff = { x : null, y : null }
    this.speed = speed || 1;
    this.maxSqueeze = maxSqueeze || 0;
    this.accelerator = accelerator || 0;
    this.node.style.transform = this.setTranslate();

    this.updateCoordinates = (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    }

    window.addEventListener('mousemove', this.updateCoordinates);
    this.loop();
  }

  getBoundsFirstLink(){
    const firstLink = nav.querySelector('li:first-of-type').getBoundingClientRect();
    return {
      y : firstLink.top + firstLink.height/2,
      x : firstLink.left + firstLink.width/2
    };
  }

  setTranslate() {
    return `translate3d(${this.pos.x + 'px'},${this.pos.y + 'px'},0)`;
  }

  loop(){
    this.diff.x = this.mouse.x - this.pos.x;
    this.diff.y = this.mouse.y - this.pos.y;
    this.pos.x += this.diff.x * this.speed;
    this.pos.y += this.diff.y * this.speed;
    this.squeeze = Math.min(Math.sqrt(Math.pow(this.diff.x, 2) + Math.pow(this.diff.y, 2)) / this.accelerator, this.maxSqueeze);
    const scale = `scale(${1 + this.squeeze},${1 - this.squeeze})`;
    const rotate = `rotate(${ Math.atan2(this.diff.y, this.diff.x) * 180 / Math.PI }deg)`;
    this.node.style.transform = this.setTranslate() + rotate + scale;
    requestAnimationFrame(() => this.loop());
  }
}

export class Particles extends Cursor{

}



