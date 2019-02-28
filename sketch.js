//Polar Perlin Noise Loops

let noiseMaxX = 5;
let noiseMaxY = 5;
let phase = 0;

var osc, fft;

function setup() {
	createCanvas(windowWidth, windowHeight);

	osc = new p5.TriOsc(); // set frequency and type
  	osc.amp(.5);

  	fft = new p5.FFT();
  	osc.start();
}

function draw() {

	background(0);
	translate(width/2, height/2);
	stroke(255);
	noFill();
	let t = 0;
	beginShape();
	
	for (let a = -122 ; a < PI; a+=0.2) {
		let xoff = map(sin(a-phase*2),-1,1,0,noiseMaxX);
		let yoff = map(sin(a+phase/8),-1,1,0,noiseMaxY);
		let r = map(noise(xoff, yoff),0.1,1.5,-200,200);
		let x = r * sin(a);
		let y = r * cos(a);	
		vertex(x,y);
	}
	endShape();

	phase += 0.01;

	// change oscillator frequency based on mouseX
  	var freq = map(mouseX, 0, width, 40, 880);
  	osc.freq(freq);

  	//change oscillator amplitude based on mouseY
  	var amp = map(mouseY, 0, height, 1, .01);
  	osc.amp(amp);

  	// change the amount of noise based on mouse position
  	noiseMaxX = map(mouseX, 0, width, 5, 100);

  	// change the amount of noise based on mouse position
  	noiseMaxY = map(mouseY, 0, height, 100, 5);
}

function windowResized() {

	resizeCanvas(windowWidth,windowHeight);
}