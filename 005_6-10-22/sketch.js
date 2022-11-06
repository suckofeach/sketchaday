const gridX = 1;
const gridY = 10;

let size = 50;

let spanX;
let spanY;

const speed = 2;

const clrBot = 100;
const clrTop = 255;

let circles = [];
let colorset = ['red', 'blue', 'orange', 'green']


function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('cont');

  spanX = windowWidth/(gridX+1);
  spanY = windowHeight/(gridY+1);

  // size = spanY;

  for (let x = 0; x < gridX; x++) {
    for (let y = 0; y < gridY; y++) {

      circles.push({
        xpos: (x+1) * spanX,
        ypos: (y+1) * spanY,
        xinc: -speed,
        yinc: speed,
        color: [random(clrBot, clrTop), 100, random(clrBot, clrTop), 20],
        opacity: 0,
      })
    }
  }

  // background(250, 232, 220, 10);
  noStroke();

  blendMode(BLEND);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(250, 232, 220, 1);

  for (c of circles) {
    fill(...c.color);
    ellipse(c.xpos, c.ypos, size, size);

    c.xpos += c.xinc;
    c.ypos += c.yinc;

    if (!pointOnScreenX(c)) {
      c.xinc *= -1;
    }
    if (!pointOnScreenY(c)) {
      c.yinc *= -1;
    }
  }
}

function mouseClicked() {
  for (let x = 0; x < gridX; x++) {
    for (let y = 0; y < gridY; y++) {
      circles.push({
        xpos: (x+1) * spanX,
        ypos: (y+1) * spanY,
      })
    }
  }
}

function pointOnScreenX(point) {
  return (point.xpos >= size && point.xpos <= windowWidth-size
     ? true : false);
}

function pointOnScreenY(point) {
  return (point.ypos >= size && point.ypos <= windowHeight-size
     ? true : false);
}