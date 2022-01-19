import * as d3 from "d3";

/* params Object Particles */
/*  */
/*
speed : between > 0 and 1
maxSqueeze : between > 0 and 1
accelerator : average between 1000 and 2000
radiusStart : radius of first circle (and decrement it by radiusDiff)
radiusDiff : space between each circle
/*  */
/*  */

export const paramParticles = {
  particle1 : {
    speed : 0.1,
    maxSqueeze : 0.6,
    accelerator : 1000,
    color : "green",
    nbrParticles : 5,
    radiusStart : 100,
    radiusDiff : 10,
    opacity : 1,
    strokeColor : "black",
    strokeWidth : 4,
    strokeOpacity : 1,
    blur : 0,
    mixBlendMode : "unset",
    transitionParticles : {
      delay : 0.1,
      timingfunction : "linear"
    },
    sort : 'desc'
  },

  particle2 : {
    speed : 0.2,
    maxSqueeze : 0.16,
    accelerator : 1000,
    color : "red",
    nbrParticles : 10,
    radiusStart : 10,
    radiusDiff : 20,
    opacity : 0.2,
    strokeColor : "gray",
    strokeWidth : 1,
    strokeOpacity : 1,
    blur : 10,
    mixBlendMode : "multiply"
  },

  particle3 : {
    speed : 0.3,
    maxSqueeze : 0.16,
    accelerator : 1000,
    color : "purple",
    nbrParticles : 2,
    radiusStart : 200,
    radiusDiff : 30,
    opacity : 0.3,
    strokeColor : "red",
    strokeWidth : 10,
    strokeOpacity : 1,
    blur : 100,
    mixBlendMode : "screen"
  },

  particle4 : {
    speed : 0.4,
    maxSqueeze : 0.16,
    accelerator : 1000,
    color : "teal",
    nbrParticles : 6,
    radiusStart : 30,
    radiusDiff : 40,
    opacity : 0.4,
    strokeColor : "green",
    strokeWidth : 20,
    strokeOpacity : 1,
    blur : 200,
    mixBlendMode : "saturation"
  }
}
class Cursors{

  constructor(el, xStart, yStart, speed, maxSqueeze, accelerator){
    this.node = document.querySelector(el);
    this.speed = speed;
    this.xStart = xStart;
    this.yStart = yStart;
    this.mouse = { x : this.xStart, y : this.yStart };
    this.pos = { x : this.xStart, y : this.yStart };
    this.diff = { x : null, y : null };
    this.maxSqueeze = maxSqueeze;
    this.accelerator = accelerator;
    window.addEventListener('mousemove', (e) => {this.updateCoordinates(e)});
  }

  updateCoordinates(e){
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  }

  setParamsDiffs(speed){
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
    this.setParamsDiffs('tiny cursor : ' + this.speed);
    this.node.style.transform = this.translate + this.rotate + this.scale;
    requestAnimationFrame(() => this.loop());
  }
}

export class Particles extends Cursors{

  constructor(el, xStart, yStart, speed, maxSqueeze, accelerator, color, nbrParticles, radiusStart, radiusDiff, opacity, strokeColor, strokeWidth, strokeOpacity, blur, mixBlendMode, transitionParticles, sort){
    super(el, xStart, yStart, speed, maxSqueeze, accelerator);
    this.nbrParticles = nbrParticles;
    this.blur = blur;
    this.color = color;
    this.radiusStart = radiusStart;
    this.radiusDiff = radiusDiff;
    this.opacity = opacity;
    this.strokeColor = strokeColor;
    this.strokeWidth = strokeWidth;
    this.strokeOpacity = strokeOpacity;
    this.mixBlendMode = mixBlendMode;
    this.transitionParticles = transitionParticles;
    this.sort = sort;
    this.drawCircles();
    this.loop();
    window.addEventListener('resize', (e) => { this.drawCircles()})
  }

  drawCircles(){
    const idBlurParticles = "blur-particles";
    this.node.innerHTML =
    `<svg width=${window.innerWidth} height=${window.innerHeight}>
      ${this.blur !== 0 ?
      `<defs>
        <filter id=${idBlurParticles} x="-100%" y="-100%" width="${window.innerWidth/2}%" height="${window.innerWidth/2}%">
          <feGaussianBlur in="SourceGraphic" stdDeviation=${this.blur}></feGaussianBlur>
        </filter>
      </defs>
      <g filter="url(#${idBlurParticles})">` :
      '<g>' }
        ${Array(this.nbrParticles).fill().map((el, i) => `<circle id=${i+1} cx=${this.pos.x} cy=${this.pos.y} r=${Math.abs(this.radiusStart-(i*this.radiusDiff))} fill=${this.color} fill-opacity=${this.opacity*100}% stroke=${this.strokeColor} stroke-width=${this.strokeWidth} stroke-opacity=${this.strokeOpacity} style="mix-blend-mode:${this.mixBlendMode}">
        </circle> ` ).join('') }
      </g>
    </svg>`;

    this.circles = this.node.querySelectorAll('circle');
    if(this.sort && this.sort === 'desc'){
      this.sortCircles();
    }
  }

  loop(){{}
    this.setParamsDiffs();

    for(const [i, circle] of this.circles.entries()){
      if(this.maxSqueeze !== 0){
        this.rotate = this.rotate.replace('deg', '');
        circle.setAttribute('transform', this.rotate + this.scale)
      }
      if(this.transitionParticles){
        circle.style.transitionProperty = "cx,cy"
        circle.style.transitionDuration = `${this.transitionParticles.delay*i}s`;
        circle.style.transitionTimingFunction = this.transitionParticles.timingfunction ;
      }
      circle.setAttribute('cx', this.pos.x);
      circle.setAttribute('cy', this.pos.y);
    }
    requestAnimationFrame(() => this.loop());
  }

  sortCircles(){
    const circlesD3 = d3.selectAll(this.circles);
    const zOrders = circlesD3._groups[0].map((circle) => { return Number(circle.id) });
    circlesD3.data(zOrders);
    circlesD3.sort(d3.descending);
  }
}



