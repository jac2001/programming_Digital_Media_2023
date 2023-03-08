let img;
const synth = new Tone.Synth({
  frequency: 50,
  envelope:{
    attack: 0.01,
    decay: 0.5,
    sustain: 0.5,
    release: 2.0},
    oscillator:
    {
      type: 'triangle'
    },
    resonance : 300 ,
	octaves: 2
  }).toDestination();

  function setup() {
  // Display the loaded image
  createCanvas(400, 400);
  
}

function draw(){
  background(220);
  if (img) {
    img.resize(width, height);
    image(img, 0, 0);
  }
}

const noise = new Tone.Noise('white');
const noiseFilter = new Tone.Filter({
  frequency: 1000,
  type: 'bandpass'
});

const lfo = new Tone.LFO({
  type: 'square',
  frequency: 2,
  amplitude: 500
}).start();

noise.connect(noiseFilter);
noiseFilter.connect(Synth.frequency);

lfo.connect(noiseFilter.frequency); 
function mouseClicked() {
  // Load the image when the canvas is clicked
  img = loadImage("js/doorbell.png");
  Tone.start();
  const freq = 600;
  const dur = Math.random() * 0.5 + 0.1;
  synth.triggerAttackRelease(freq, dur);

  noise.start();
}
