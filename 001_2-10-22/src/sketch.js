let elRadius = 20;
let circlesAmount = 30;
let distance = 50;
let strokeWidth = 3;
let strokeDevider = 70;

let strokeMod;

let strokeColor;


let k = 1;
let inc = 1;

let isLoop = True;

function setup() {
  let canvas = createCanvas(500, 700);
  canvas.parent('cont');

  fill(0, 0, 0, 0);
  stroke(255);

  background(0);

  // Drawing static shape
  // for (let i = 0; i < circlesAmount; i++) {
  //   strokeWeight((strokeWidth * i*2)/strokeDevider);
  //   ellipse(width/2, height/2, elRadius+(i*distance), elRadius+(i*distance));
  // }
  // noLoop();
}

function draw() {

  strokeColor = map(mouseY, 0, 700, 255, 0);
  strokeMod = map(mouseX, 0, 500, 0, 10);

  if (k == 1){
    stroke(strokeColor);
    strokeWeight(strokeWidth*(k/4)+strokeMod);
    drawEllipse(k);
    inc = 1;
    k += inc;
  } else if (k == circlesAmount) {
    stroke(strokeColor);
    strokeWeight(strokeWidth*(k/4)+strokeMod);
    drawEllipse(k);
    inc = -1;
    k += inc;
  } else {
    stroke(strokeColor);
    strokeWeight(strokeWidth*(k/4)+strokeMod);
    drawEllipse(k);
    k += inc;
  }
}

function drawEllipse(input) {
  ellipse(width/2, height/2, elRadius+(input*distance), elRadius+(input*distance));
}

function mousePressed(){

    // redraw(circlesAmount);
  
}
