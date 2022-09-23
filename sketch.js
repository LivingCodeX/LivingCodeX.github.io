/* Canvas */
let canvasX = 400;
let canvasY = 450;

/* Ball */
let x = 0.0;
let y = 0.0;

let vx = 0.0;
let vy = 0.0;

let ballR = 0;
let ballG = 0;
let ballB = 255;
let ballGS = 5; // gradient speed

d = 20
r = d/2

let speed = 5;
let gravity = 0.981;

function setup() {
  canvas = createCanvas(canvasX, canvasY);
  canvas.position(0, 0);

  x = 100;
  y = 300;
  vx = speed;
  vy = 0;
}

function draw() {
  background(220);
  updateX();
  updateY();

  if (ballB > 0 && ballG == 0) {
    if (ballR < 255) {
      ballR += ballGS;
    } else {
      ballB -= ballGS;
    }
  } else if (ballR > 0 && ballB == 0) {
    if (ballG < 255) {
      ballG += ballGS;
    } else {
      ballR -= ballGS;
    }
  } else if (ballG > 0 && ballR == 0) {
    if (ballB < 255) {
      ballB += ballGS;
    } else {
      ballG -= ballGS;
    }
  }
  if (ballR > 255) ballR = 255;
  else if (ballR < 0) ballR = 0;
  if (ballG > 255) ballG = 255;
  else if (ballG < 0) ballG = 0;
  if (ballB > 255) ballB = 255;
  else if (ballB < 0) ballB = 0;

  fill(ballR, ballG, ballB);

  circle(x, canvasY-y, d);
}

function updateX() {
  x += vx;
  if (x > canvasX) {
    x = canvasX;
  } else if (x < 0) {
    x = 0;
  }

  if (x == 0 && vx < 0) {
    vx *= -1;
  } else if (x == canvasX && vx > 0) {
    vx *= -1;
  }
}

function updateY() {
  fall();
  if (y <= 0) {
    y = 0;
    vy *= -0.9;
    vy -= 0.08;
    //bounce();
  }
}

function fall() {
  y += vy;
  vy -= gravity;
}

function bounce() {
  vy = 10;//vy *= -0.95;
}
