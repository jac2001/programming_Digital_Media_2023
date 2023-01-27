//index4.html
function setup() {
  createCanvas(215,215);
}

function draw() {
background(26,0,153);

fill(0,153,0);
stroke(255);
strokeWeight(7);
ellipse(107.5,107.5,112.5, 112.5);

fill(255,0,0)
beginShape();
vertex(165,90)
vertex(125,90)
vertex(110,47.5)
vertex(90,90)
vertex(50,90)
vertex(82.5,117.5)
vertex(70,152.5)
vertex(107.5,132.5)
vertex(145,152.5)
vertex(132.5,117.5)
endShape(CLOSE);
}