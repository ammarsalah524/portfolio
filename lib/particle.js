class Particle {
    constructor(center) {
      this.pos = p5.Vector.random2D();
      this.pos.setMag(250);
      this.pos.add(center);
      this.pos.div(2);
      this.old = this.pos.copy();
      
      this.v = p5.Vector.sub(center, this.pos);
      this.v.setMag(random(0.5, 1));
    }  
    
    move() {
      this.old = this.pos.copy();
      this.pos.add(this.v);
      this.v.add(gravity);
    }
    
    draw() {
      stroke(frameCount/8 % 360, 100, 50, 0.04);
      line(this.pos.x, this.pos.y, this.old.x, this.old.y);
    }
  }
  
  class Planet {
    constructor(pos, tickOffset) {
      this.pos = pos;
      this.tickOffset = tickOffset;
    }
    
    draw() {
      stroke("white");
      fill("black");
      let r1 = sin(frameCount/10 + this.tickOffset)*8;
      ellipse(this.pos.x, this.pos.y, r1);
   }
    
    applyGravityOn(thing) {
      let dist = p5.Vector.sub(thing.pos, this.pos);
      let length = dist.mag();
      let g = 200 / (length);
      if(g > 0.01) {
        g = 0.01;
      }
      // We keep the angle of the distance
      dist.setMag(g);
      thing.v.sub(dist);
    }
  }
  
  let center;
  let particles;
  let planets;
  let w;
  let h;
  let gravity;
  
  function setup() {
    w = windowWidth;
    h = windowHeight;
    createCanvas(w, h);
    background("black");
    gravity = createVector(0, 0.0021);
    center = createVector(w/2, h/2);
    initParticles();
    initPlanets();
    cursor(CROSS);
    colorMode(HSL);
    //strokeWeight(2);
  }
  
  function draw() {
    planets.forEach(planet => {
      planet.draw();
    });
    
    particles.forEach(particle => { 
      planets.forEach(planet => {
        planet.applyGravityOn(particle);
      });
      particle.move();
      particle.draw();
    });
  }
  
  function initParticles() {
    particles = [];
    for(let i = 0; i < 300; i++) {
      particles.push(new Particle(center));
    }
  }
  
  function initPlanets() {
    planets = [];
    planets.push(new Planet(center, 0));
  }
  
  function windowResized() {
    w = windowWidth;
    h = windowHeight;
    resizeCanvas(w, h);
    background("black");
  }
  
  function mouseReleased() {
    let pos = createVector(mouseX, mouseY);
    let p = new Planet(pos, frameCount);
    planets.push(p);
    return false;
  }
  
  function touchEnded() {
    let pos = createVector(mouseX, mouseY);
    let p = new Planet(pos, frameCount);
    planets.push(p);
    return false;
  }