
let sound1 = new Tone.Player("sounds/golf-ball.wav");

let sounds = new Tone.Players({

  "golfball": "sounds/golf-ball.wav",
  "snowball": "sounds/snowball.wav",
  "whale": "sounds/whale.wav",
  "tiger": "sounds/tiger.wav"

});


let button1, button2, button3, button4;
const delay = new Tone.FeedbackDelay('8n', 0.5);
const node = new Tone.Gain();
console.log(node.numberOfOutputs);


const delayTime = new Tone.Param({
  value: '8n', 
  units: 'time', 
  minValue: 0, 
  maxValue: '1m', 
});

delayTime.connect(delay.delayTime);
delayTime.value = '4n';
function setup() {
  createCanvas(400, 400);

  sounds.toDestination();
  sound1.toDestination();
  
  delay.toDestination();
  sounds.connect(delay);
  
  
  button1 = createButton("Golf Ball!");
  button1.position(50,50);
  button1.mousePressed(() => sounds.player("golfball").start());

  button2 = createButton("Snowball");
  button2.position(50, 100);
  button2.mousePressed(() => sounds.player("snowball").start());

  button3 = createButton("Whale");
  button3.position(50, 150);
  button3.mousePressed(() => sounds.player("whale").start());

  button4 = createButton("Tiger");
  button4.position(50,200);
  button4.mousePressed(() => sounds.player("tiger").start());




}

function draw() {
  background(220);
  
}


