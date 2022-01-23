import * as d3 from "d3";
// import { findDiagonal } from "..";

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
  cursor1 : {
    speed : 0.1,
    cursor :{
      maxSqueeze : 0.6,
      accelerator : 1000,
      color : "#55828b",
      size : 25,
      opacity : 0.1
    },
    particles : {
      maxSqueeze : 0,
      accelerator : 0,
      backgroundColor : "none",
      color : "none",
      nbrParticles : 270,
      radiusStart : 50,
      radiusDiff : 7,
      direction : ">",
      opacity : 1,
      strokeColor : "#55828b",
      strokeWidth : 1.25,
      strokeOpacity : 0.25,
      blur : 0,
      mixBlendMode : "unset",
      transitionParticles : {
        delay : 0.01,
        timingfunction : "linear"
      },
      sort : "desc"
    }
  },
  cursor2 : {
    speed : 0.1,
    cursor :{
      maxSqueeze : 0.6,
      accelerator : 1000,
      color : "#B298DC",
      size : 25,
      opacity : 0.1
    },
    particles : {
      maxSqueeze : 0,
      accelerator : 0,
      backgroundColor : "none",
      color : "none",
      nbrParticles : 270,
      radiusStart : 50,
      radiusDiff : 7,
      direction : ">",
      opacity : 1,
      strokeColor : "#B298DC",
      strokeWidth : 1.25,
      strokeOpacity : 0.25,
      blur : 0,
      mixBlendMode : "unset",
      transitionParticles : {
        delay : 0.01,
        timingfunction : "linear"
      },
      sort : "desc"
    }
  },
  cursor3 : {
    speed : 0.3,
    cursor : {
      color : "blue"
    },
    particles : {
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
    }
  },
  cursor4 : {
    speed : 0.4,
    cursor : {
      color : "yellow"
    },
    particles : {
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
}
class Cursors{

  constructor(el, xStart, yStart, speed, maxSqueeze, accelerator){
    this.node = document.querySelector(el);
    this.speed = speed;
    this.xStart = xStart;
    this.yStart = yStart;
    this.mouse = { x : this.xStart, y : this.yStart };
    this.pos = { x : this.xStart, y : this.yStart };
    this.translate = `translate(${this.pos.x + 'px'},${this.pos.y + 'px'})`;
    this.diff = { x : null, y : null };
    this.maxSqueeze = maxSqueeze;
    this.accelerator = accelerator;
    window.addEventListener('mousemove', (e) => {this.updateCoordinates(e)});
  }

  updateCoordinates(e){
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
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

  constructor(el, xStart, yStart, speed, maxSqueeze, accelerator, color, size, opacity, shape = "circle") {
    super(el, xStart, yStart, speed, maxSqueeze, accelerator);
    this.node.style.transform = this.translate;
    this.node.style.backgroundColor = color;
    this.node.style.width = `${size}px`;
    this.node.style.height = `${size}px`;
    this.node.style.marginTop = `${-(size/2)}px`;
    this.node.style.marginLeft = `${-(size/2)}px`;
    this.node.style.opacity = opacity;
    shape === "circle" ? this.node.style.borderRadius = `${size}px` : false;
    this.loop();
  }

  loop(){
    this.setParamsDiffs('tiny cursor : ' + this.speed);
    this.node.style.transform = this.translate + this.rotate + this.scale;
    requestAnimationFrame(() => this.loop());
  }
}

export class Particles extends Cursors{

  constructor(el, xStart, yStart, speed, maxSqueeze, accelerator, backgroundColor, color, nbrParticles, radiusStart, radiusDiff, direction, opacity, strokeColor, strokeWidth, strokeOpacity, blur, mixBlendMode, transitionParticles, sort){
    super(el, xStart, yStart, speed, maxSqueeze, accelerator);
    this.nbrParticles = nbrParticles;
    this.blur = blur;
    this.backgroundColor = backgroundColor;
    this.color = color;
    this.radiusStart = radiusStart;
    this.radiusDiff = radiusDiff;
    this.direction = direction;
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
    const setRadius = (i) => {
      let radius;
      if(this.direction && this.direction === ">"){
        radius = this.radiusStart+(i*this.radiusDiff);}
      else{
        radius = this.radiusStart-(i*this.radiusDiff);}
      radius > 0 ? radius = radius : radius = 0;
      return radius;
    }

    this.node.innerHTML =
    `<svg width=${window.innerWidth} height=${window.innerHeight} style="background-color:${this.backgroundColor};">
      ${this.blur !== 0 ?
      `<defs>
        <filter id=${idBlurParticles} x="-100%" y="-100%" width="${window.innerWidth/2}%" height="${window.innerWidth/2}%">
          <feGaussianBlur in="SourceGraphic" stdDeviation=${this.blur}></feGaussianBlur>
        </filter>
      </defs>
      <g filter="url(#${idBlurParticles})">` :
      '<g>' }
        ${Array(this.nbrParticles).fill().map((el, i) => `<circle id=${i+1} cx=${this.pos.x} cy=${this.pos.y} r=${setRadius(i)} fill=${Array.isArray(this.color) ? this.color[i] : this.color} fill-opacity=${this.opacity*100}% stroke=${Array.isArray(this.strokeColor) ? this.strokeColor[i] : this.strokeColor} stroke-width=${this.strokeWidth} stroke-opacity=${this.strokeOpacity} style="mix-blend-mode:${this.mixBlendMode}">
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



