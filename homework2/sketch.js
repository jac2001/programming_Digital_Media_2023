
var colors=['red','orange', 'yellow','green', 'cyan','blue', 'magenta','brown','white', 'black'];
var color=0;
var cell_size=30;
var x, y;
var drawing=false;

function setup() {

  createCanvas(400,400);
  strokeWeight(10);
  background(400);
}

function draw() {
  
  noStroke();
  for(let i=0;i<colors.length;i++){
    fill(colors[i]);
    rect(0,i*cell_size,cell_size,cell_size);
  }
  stroke(colors[color]);
}

function mousePressed(){
  
  if(mouseX>=0 && mouseX<cell_size && mouseY>=0 && mouseY<(colors.length*cell_size)){
    color=floor(mouseY/cell_size);
    stroke(colors[color]);
    drawing=false;  
  }
  else
  {
    x=mouseX;
    y=mouseY;
    drawing=true;
  }
}

function mouseDragged(){
  if(drawing){
    line(x,y, mouseX, mouseY);
    x=mouseX;
    y=mouseY;
  }
}
