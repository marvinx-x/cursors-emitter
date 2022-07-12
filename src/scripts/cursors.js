import * as d3 from "d3";
import { isTouchDevices } from "./utils";

export class Cursors{

  constructor(index) {
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
    this.transitionParticles = false;
    this.activeLinks();
    this.mousemoveCursor();
    window.addEventListener('resize',() => {
      this.setParamsCursor();
      this.setParamsParticles();
      this.drawCursor();
    });
  }

  activeLinks() {
    this.activeClass = 'active';
    for (const link of this.links) { link.classList.remove(this.activeClass) };
    this.link.classList.add(this.activeClass);
  }

  drawCursor() {
    this.widthContainer = window.innerWidth;
    this.heightContainer = window.innerHeight;

    this.container.innerHTML =
      `<svg width="${this.widthContainer}" height="${this.heightContainer}" viewbox="0 0 ${this.widthContainer} ${this.heightContainer}" style="background:${this.backColor || "none"}">
        <g class="particles">
          ${Array(this.nbrParticles).fill().map((_,i) =>
            `<circle r="${this.setRadiusParticles(i)}" cx=${this.pos.x} cy=${this.pos.y} fill="${this.colorParticles || "none"}" fill-opacity="${this.opacityParticles || 1}" stroke="${this.strokeColorParticles || "none"}" stroke-width="${this.strokeWidthParticles || 0}" stroke-opacity="${this.strokeOpacityParticles || 1}" id="${i+1}"></circle>`).join('')}
        </g>
        ${this.tinyCursor ? `<g class="tiny-cursor">
          <circle r=${this.radiusCursor || 10} cx=${this.pos.x} cy=${this.pos.y} style="transform-origin: ${this.pos.x}px ${this.pos.y}px" fill="${this.colorCursor || "none"}" fill-opacity="${this.opacityCursor || 1}" stroke="${this.strokeColorCursor || "none"}" stroke-width="${this.strokeWidthCursor || 0}" stroke-opacity="${this.strokeOpacityCursor || 1}"></circle>
        </g>` : ''}
    </svg>`;

    this.tinyCursor ? this.nodeCursor = this.container.querySelector('.tiny-cursor circle') : null;
    this.nodesParticles = this.container.querySelectorAll('.particles circle');
    !this.transitionParticles ? this.points = Array(this.nbrParticles).fill().map((el,i) => this.mouse) : null;
    this.sorting === "desc" ? this.sortParticles() : null;
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
    this.setParticles();
    requestAnimationFrame( () => this.loop() );
  }

  setTinyCursor() {
    this.rotate = `rotate(${ Math.atan2(this.diff.y, this.diff.x) * 180 / Math.PI }deg)`;
    this.squeeze = Math.min(Math.sqrt(Math.pow(this.diff.x, 2) + Math.pow(this.diff.y, 2)) / this.accelerator, this.maxSqueeze);
    this.scale = `scale(${1 + this.squeeze},${1 - this.squeeze})`;
    this.nodeCursor.setAttribute('cx', this.pos.x)
    this.nodeCursor.setAttribute('cy',this.pos.y)
    this.nodeCursor.style.transformOrigin = `${this.pos.x}px ${this.pos.y}px`;
    this.nodeCursor.style.transform = this.rotate + this.scale;
  }

  setParticles() {
    for (const [i,particle] of this.nodesParticles.entries()) {
      if (this.transitionParticles) {
        particle.setAttribute('cx',this.pos.x )
        particle.setAttribute('cy',this.pos.y);
        particle.style.transitionProperty = "cx,cy"
        particle.style.transitionDuration = `${this.transitionParticles.duration+i*this.transitionParticles.delay}ms `;
        particle.style.transitionTimingFunction = this.transitionParticles.easing;
      }
      else {
        this.points[i] = this.points[i + 1];
        this.points[this.points.length - 1] = { x: this.pos.x,y: this.pos.y };
        particle.setAttribute('cx',this.points[i].x )
        particle.setAttribute('cy',this.points[i].y);
      }
    }
  }

  sortParticles(){
    this.particlesD3 = d3.selectAll(this.nodesParticles);
    this.particlesD3.data(this.particlesD3._groups[0].map((particle) => { return Number(particle.id) }));
    this.particlesD3.sort(d3.descending);
  }

  setRadiusParticles(i) {
    this.radius = null;
    if(this.directionRadius === ">"){
      this.radius = this.radiusStart-(i*this.radiusDiff);}
    else{
      this.radius = this.radiusStart+(i*this.radiusDiff);}
    this.radius > 0 ? this.radius = this.radius : this.radius = 0;
    return this.radius;
  }

  diagonalWindow() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    return Math.ceil(Math.sqrt(this.width*this.width + this.height*this.height));
  }
}





