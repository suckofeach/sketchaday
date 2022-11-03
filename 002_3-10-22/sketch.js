let particles = [];
const num = 10000;
const speed = .5;
const curve = 2;

let zoff = 0;
const inc = .000001;

const noiseScale = .001;

function setup() {
  createCanvas(1100, 700);
  for (let i = 0; i < num; i++) {
    particles.push(createVector(random(width), random(height)));
  }

  strokeWeight(1);
  // noiseDetail(32);
}

function draw() {
  background(50, 70);
  for (let i = 0; i < num; i++) {
    let p = particles[i];
    point(p.x, p.y);
    let n = noise(p.x * noiseScale, p.y * noiseScale, zoff);
    let a = TAU * n * curve;
    p.x += speed * cos(a);
    p.y += speed * sin(a);

    // Stroke color changing
    let s = map(sin(a), -1, 1, 0, 255);
    stroke(s);

    zoff += inc;

    if (!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);
    }
  }
}

function mouseReleased() {
  noiseSeed(millis());
}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}