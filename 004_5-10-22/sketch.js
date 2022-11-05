let particles = []
let colorSet = [
  'orange', 'blue', 'black', 'magenta',
]
const amount = 100;
const speed = 2;
const slowing = 0.3;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('cont');

  // Filling array of objects
  for (let i = 0; i < amount; i++) {
    particles.push({
      x: random(windowWidth),
      y: random(windowHeight),
      xinc: random(-1, 1) * speed,
      yinc: random(-1, 1) * speed,
      color: random(colorSet),
    });
  }

  // background(0);
  strokeWeight(50);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // background(0, 20);
  // stroke(255);

  for (p of particles) {
    // Drawing
    stroke(p.color);
    point(p.x, p.y);

    // Movement
    p.x += p.xinc;
    p.y += p.yinc;

    // Changing color

    // Redirect p on border
    if (!pointOnScreenX(p)) {
      p.xinc *= -1;
    }

    if (!pointOnScreenY(p)) {
      p.yinc *= -1;
    }
  }
}

function pointOnScreenX(point) {
  return (point.x >= 0 && point.x <= windowWidth 
     ? true : false);
}

function pointOnScreenY(point) {
  return (point.y >= 0 && point.y <= windowHeight
     ? true : false);
}