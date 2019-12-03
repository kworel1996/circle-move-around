var x =55;

function setup() {
  // put setup code here
  createCanvas(500, 500);
}

function draw() {
  background(255, 0, 0);
  strokeWeight(4);
  fill(255, 204, 100);
  ellipse(mouseX, mouseY, x, x);
  strokeWeight(6);
  fill(100, 200, 230);
  ellipse(60, 50, x, x);
  strokeWeight(3);
  fill(200, 200, 90);
  ellipse(70, 60, x, x);
}
