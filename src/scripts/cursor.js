export class Cursor {

  constructor(el) {
    this.node = document.querySelector(el);
    this.bounds = this.node.getBoundingClientRect();
    this.xStart = window.innerWidth/2;
    this.yStart = window.innerHeight/2;
    this.mouse = { x : this.xStart, y : this.yStart };
    this.pos = { x : this.xStart, y : this.yStart };
    this.diff = { x : null, y : null }
    this.speed = 0.25;
    this.maxSqueeze = 0.6;
    this.accelerator = 1000;

    this.updateCoordinates = (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    }

    window.addEventListener('mousemove', this.updateCoordinates);
    this.loop();
  }

  loop(){
    this.diff.x = this.mouse.x - this.pos.x;
    this.diff.y = this.mouse.y - this.pos.y;
    this.pos.x += this.diff.x * this.speed;
    this.pos.y += this.diff.y * this.speed;
    this.squeeze = Math.min(Math.sqrt(Math.pow(this.diff.x, 2) + Math.pow(this.diff.y, 2)) / this.accelerator, this.maxSqueeze);
    const translate = `translate3d(${this.pos.x + 'px'},${this.pos.y + 'px'},0)`;
    const scale = `scale(${1 + this.squeeze},${1 - this.squeeze})`;
    const rotate = `rotate(${ Math.atan2(this.diff.y, this.diff.x) * 180 / Math.PI }deg)`;
    this.node.style.transform = translate + rotate + scale;
    requestAnimationFrame(() => this.loop());
  }
}
