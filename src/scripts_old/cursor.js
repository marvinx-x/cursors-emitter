import * as d3 from "d3";
import { hexToRgb } from "..";
import { findDiagonal } from "..";

export const paramParticles = {
  cursor1 : {
    speed : 0.2,
    cursor :{
      maxSqueeze : 0.6,
      accelerator : 1000,
      color : "#BCE3D3",
      size : 30,
      opacity : 1
    },
    particles : {
      maxSqueeze : 0,
      accelerator : 0,
      backgroundColor : "#ffffff",
      color : "none",
      nbrParticles : 370,
      radiusStart : 50,
      radiusDiff : 7,
      direction : ">",
      opacity : 1,
      strokeColor : "#BCE3D3",
      strokeWidth : 1.25,
      strokeOpacity : 1,
      blur : 0,
      mixBlendMode : "unset",
      transitionParticles : {
        duration : 18,
        delay : 6,
        timingfunction : "linear"
      },
    }
  },

  cursor2 : {
    speed : 0.2,
    cursor :{
      maxSqueeze : 0.1,
      accelerator : 2000,
      color : "#ffffff",
      size : 50,
      opacity : 0,
      borderWidth : 2,
      borderColor : "#ffffff",
      borderOpacity : .8
    },
    particles : {
      maxSqueeze : 0.1,
      accelerator : 2000,
      backgroundColor : "#ffffff",
      color : ["#fbf8cc", "#fde4cf", "#ffcfd2", "#f1c0e8", "#cfbaf0", "#a3c4f3", "#90dbf4", "#8eecf5", "#98f5e1", "#b9fbc0"],
      nbrParticles : 10,
      radiusStart : 400,
      radiusDiff : 20,
      direction : "<",
      opacity : 1,
      strokeColor : "none",
      strokeWidth : 0,
      strokeOpacity : 0,
      blur : 80,
      mixBlendMode : "darken",
      transitionParticles : {
        duration : 40,
        delay : 50,
        timingfunction : "ease-out"
      },
    }
  },
  cursor3 : {
    speed : 0.1,
    cursor :{
      maxSqueeze : 0.3,
      accelerator : 1000,
      color : "#ffffff",
      size : 50,
      opacity : 0.15
    },
    particles : {
      maxSqueeze : 0,
      accelerator : 0,
      backgroundColor : "#001813",
      color : "none",
      nbrParticles : 160,
      radiusStart : findDiagonal()/3,
      radiusDiff : 1,
      direction : "<",
      opacity : 1,
      strokeColor : "#BBE8F0",
      strokeWidth : 1,
      strokeOpacity : .25,
      blur : 0,
      mixBlendMode : "unset",
      transitionParticles : {
        duration : 18,
        delay : 1,
        timingfunction : "linear"
      },
      sort : "desc"
    }
  },
  cursor4 : {
    speed : 0.2,
    cursor :{
      maxSqueeze : 0.3,
      accelerator : 1000,
      color : "#001813",
      size : 40,
      opacity : .05
    },
    particles : {
      maxSqueeze : 0.3,
      accelerator : 6000,
      backgroundColor : "#001813",
      color : ["#184e77", "#1e6091", "#1a759f", "#168aad", "#34a0a4", "#52b69a", "#76c893", "#99d98c", "#b5e48c", "#d9ed92"],
      nbrParticles : 10,
      radiusStart : 250,
      radiusDiff : 5,
      direction : ">",
      opacity : .9,
      strokeColor : "none",
      strokeWidth : 0,
      strokeOpacity : 0,
      blur : 30,
      mixBlendMode : "screen",
      transitionParticles : {
        duration : 20,
        delay : 3,
        timingfunction : "ease-in-out"
      },
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

  constructor(el, xStart, yStart, speed, maxSqueeze, accelerator, color, size, opacity, borderWidth, borderColor, borderOpacity,  shape = "circle") {
    super(el, xStart, yStart, speed, maxSqueeze, accelerator);
    this.node.style.transform = this.translate;
    this.node.style.backgroundColor = `rgba(${hexToRgb(color).r}, ${hexToRgb(color).g}, ${hexToRgb(color).b}, ${opacity})`;
    this.node.style.width = `${size}px`;
    this.node.style.height = `${size}px`;
    this.node.style.marginTop = `${-(size/2)}px`;
    this.node.style.marginLeft = `${-(size/2)}px`;
    borderWidth ? this.node.style.border = `${borderWidth}px solid rgba(${hexToRgb(borderColor).r},${hexToRgb(borderColor).g},${hexToRgb(borderColor).b},${borderOpacity})` : null;
    shape === "circle" ? this.node.style.borderRadius = `${size}px` : false;
    this.loop();
  }

  loop(){
    this.setParamsDiffs();
    this.node.style.transform = this.translate + this.rotate + this.scale;
    requestAnimationFrame(() => this.loop());
  }
}

export class Particles extends Cursors{

  constructor(el, xStart, yStart, speed, maxSqueeze, accelerator, backgroundColor, color, nbrParticles, radiusStart, radiusDiff, direction, opacity, strokeColor, strokeWidth, strokeOpacity, blur, mixBlendMode, transitionParticles, sort){
    super(el, xStart, yStart, speed, maxSqueeze, accelerator);
    this.nbrParticles = nbrParticles;
    this.blur = blur;
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
    window.addEventListener('resize', (e) => { this.drawCircles()});
    document.body.style.backgroundColor = backgroundColor;
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
    `<svg width=${window.innerWidth} height=${window.innerHeight}>
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
        circle.style.transform = this.rotate + this.scale;
      }
      if(this.transitionParticles){
        circle.style.transitionProperty = "cx,cy"
        circle.style.transitionDuration = `${this.transitionParticles.duration + i*this.transitionParticles.delay}ms `;
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



