const synth = new Tone.MonoSynth({
  frequency: 50,
  envelope:{
    attack: 0.1,
    decay: 0.2,
    sustain: 1.0,
    release: 0.8},
    oscillator:
    {
      type: 'sine'
    },
    resonance : 300 ,
	octaves: 1.5
  });

  const filter = new Tone.Filter({
    frequency: 1000,
    type: 'lowpass'
  });
  
  // Connect the synth to the filter
  
const noise = new Tone.Noise("white").start();
const reverb = new Tone.JCReverb(0.2);


/*
Follow these notes and it should be TwinkleTwinkle little star
C4, C4, G4, G4,
A4, A4, G4,
F4, F4, E4, E4,
D4, D4, C4
*/


let myNotes = {
'q':"C4",
"w":"D4",
"e":"E4",
"r":"G4",
"t":"A4",
"y":"B4",
"u":"C5",
"i":"E5",
"o":"F4",
"p":"G5"}

function setup(){
  createCanvas(400,400);
  synth.toDestination();
  filter.toDestination();
  synth.connect(filter);
  
  slider = new Nexus.Slider("#slider");
  reverb.toDestination();

  synth.release = 2;
  synth.resonance = 0.98;
  synth.connect(reverb);

  slider.on('change', (v) =>  {
    reverb.roomSize.value = v;
  }); 
}


function draw(){
  background(220);
}

function keyPressed(){
  
    let notePressed = myNotes[key]
    console.log(notePressed)
    synth.triggerAttackRelease(notePressed, "4n");
    
  
}
