let colorStrip;
let cleanStrip;
let topLayer;
let xPos = -1000;
const imageWidth = 1920;

function preload() {
  colorStrip = loadImage("colorstrip_v2.png");
  cleanStrip = loadImage("cleanstrip_v2.png");
}

function setup() {
  createCanvas(windowWidth, 333);

  topLayer = createGraphics(imageWidth, 333);
  topLayer.image(cleanStrip, 0, 0, imageWidth, 333);
  topLayer.strokeWeight(25);
  topLayer.blendMode(REMOVE);
}

function draw() {
  background(255);
  image(colorStrip, xPos, 0, 1920, 333);
  image(topLayer, xPos, 0);

  image(colorStrip, imageWidth + xPos, 0, 1920, 333);
  image(topLayer, imageWidth + xPos, 0);

  if (mouseIsPressed) {
    topLayer.line(pmouseX + abs(xPos), pmouseY, mouseX + abs(xPos), mouseY);
  }

  // this fixes for the "dead space"
  if (xPos <= -imageWidth + windowWidth && mouseIsPressed) {
    // print(xPos);
    topLayer.line(
      pmouseX + abs(xPos) - imageWidth,
      pmouseY,
      mouseX + abs(xPos) - imageWidth,
      mouseY
    );
  }

  if (xPos <= -imageWidth) {
    xPos = 0;
  }

  xPos--;
}

function windowResized() {
  resizeCanvas(windowWidth, 333);
}
