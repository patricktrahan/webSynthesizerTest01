//Polar Perlin Noise Loops

let noiseMax = 5;
let phase = 0;
let adjust;
function setup() {
	createCanvas(600, 600);
}

function draw() {
	background(0);
	translate(width/2, height/2);
	stroke(255);
	noFill();
	let t = 0;
	beginShape();
	
	for (let a = -122 ; a < PI; a+=0.2) {
		let xoff = map(sin(a-phase*2),-1,1,0,noiseMax);
		let yoff = map(sin(a+phase/8),-1,1,0,noiseMax);
		let r = map(noise(xoff, yoff),0.1,1.5,-200,200);
		let x = r * sin(a);
		let y = r * cos(a);	
		vertex(x,y);
	}
	endShape();

	phase += 0.01;
}

function keyPressed() {
	if (keyCode === 65) {
		noiseMax = 10;
	} 

	if (keyCode === 87) {
		noiseMax = 15;
	}

	if (keyCode === 83) {
		noiseMax = 20;
	}

	if (keyCode === 69) {
		noiseMax = 25;
	}

	if (keyCode === 68) {
		noiseMax = 30;
	}

	if (keyCode === 70) {
		noiseMax = 40;
	}

	if (keyCode === 84) {
		noiseMax = 45;
	}

	if (keyCode === 71) {
		noiseMax = 50;
	}

	if (keyCode === 89) {
		noiseMax = 55;
	}

	if (keyCode === 72) {
		noiseMax = 60;
	}

	if (keyCode === 85) {
		noiseMax = 65;
	}

	if (keyCode === 74) {
		noiseMax = 70;
	}

	if (keyCode === 75) {
		noiseMax = 80;
	}
	
	return false;
}

function keyReleased() {
	noiseMax = 5;

	return false;
}