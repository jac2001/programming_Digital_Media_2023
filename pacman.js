//index4.html
function setup() {
    angleMode(DEGREES);
    createCanvas(175, 100); 
    background("black");
    
    noStroke();
    fill("yellow");
    arc(50, 50, 50, 50, 225, 135); //pac man with 90 degree mouth open. Always draws clockwise. can start with higher number.
    
    fill("red");
    rect(90, 50, 50, 25); //bottom half of ghost
    ellipse(115, 50, 50, 50); //top half of ghost
    fill("white"); //eye whites
    ellipse(105, 45, 15, 15);
    ellipse(125, 45, 15, 15);
    fill("blue");//blue part of eyes
    ellipse(105, 45, 10, 10);
    ellipse(125, 45, 10, 10);
  }