import { nav } from './../index'

class Cursors{

  constructor(el, xStart, yStart, speed, maxSqueeze, accelerator){
    this.node = document.querySelector(el);
    this.speed = speed || 1;
    this.xStart = xStart || this.getBoundsFirstLink().x;
    this.yStart = yStart || this.getBoundsFirstLink().y;
    this.mouse = { x : this.xStart, y : this.yStart };
    this.pos = { x : this.xStart, y : this.yStart };
    this.diff = { x : null, y : null };
    this.maxSqueeze = maxSqueeze || 0;
    this.accelerator = accelerator || 1;
    this.updateCoordinates = (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    }
    window.addEventListener('mousemove', this.updateCoordinates);
  }

  getBoundsFirstLink(){
    const firstLink = nav.querySelector('li:first-of-type').getBoundingClientRect();
    return {
      y : firstLink.top + firstLink.height/2,
      x : firstLink.left + firstLink.width/2
    };
  }

  setParamsDiffs(){
    this.diff.x = this.mouse.x - this.pos.x;
    this.diff.y = this.mouse.y - this.pos.y;
    this.pos.x += this.diff.x * this.speed;
    this.pos.y += this.diff.y * this.speed;
    this.translate = `translate(${this.pos.x + 'px'},${this.pos.y + 'px'})`;
    this.rotate = `rotate(${ Math.atan2(this.diff.y, this.diff.x) * 180 / Math.PI }deg)`;
    const squeeze = Math.min(Math.sqrt(Math.pow(this.diff.x, 2) + Math.pow(this.diff.y, 2)) / this.accelerator, this.maxSqueeze);
    this.scale = `scale(${1 + squeeze},${1 - squeeze})`;
  }
}

export class TinyCursor extends Cursors{

  constructor(el, xStart, yStart, speed, maxSqueeze, accelerator) {
    super(el, xStart, yStart, speed, maxSqueeze, accelerator);
    this.loop();
  }

  loop(){
    this.setParamsDiffs();
    this.node.style.transform = this.translate + this.rotate + this.scale;
    requestAnimationFrame(() => this.loop());
  }
}

export class Particles extends Cursors{

  constructor(el, xStart, yStart, speed, maxSqueeze, accelerator){
    super(el, xStart, yStart, speed, maxSqueeze, accelerator);
    this.nbrParticles = 1;
    this.blur = 0;
    this.drawCircles();
  }

  loop(){
    this.setParamsDiffs();
    this.translate = this.translate.replaceAll('px','').replace(',', ' ');
    this.rotate = this.rotate.replace('deg', '');
    this.circle.setAttribute('transform', this.translate + this.rotate + this.scale);
    requestAnimationFrame(() => this.loop());
  }

  drawCircles(){
    const idBlurParticles = "blur-particles";
    const exceedSize = this.blur*3;

    this.node.innerHTML =
    `<svg width=${window.innerWidth + exceedSize} height=${window.innerHeight + exceedSize}>
      <defs>
        <filter id=${idBlurParticles} x="-100%" y="-100%" width="${window.innerWidth/2}%" height="${window.innerWidth/2}%">
          <feGaussianBlur in="SourceGraphic" stdDeviation=${this.blur}></feGaussianBlur>
        </filter>
      </defs>
        <g filter="url(#${idBlurParticles})">
          ${Array(this.nbrParticles).fill().map((i) => `<circle cx="0" cy="0" r="100" fill="red"></circle>` ).join('')}
        </g>
      </svg>`;

    this.circle = this.node.querySelector('circle');
    this.loop();
  }
}



