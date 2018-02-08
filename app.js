// Synth Properties====================================

//effects
var verb = new Tone.Freeverb(
	{
		'roomSize' : 0.8,
		'dampening' :2000,
		'wet' : 0.2
	}).toMaster();

var delay = new Tone.PingPongDelay(
	{
		'wet' : 0.5,
		'feedback' : 0.5,
		'delayTime' : 0.4
	}).connect(verb);

// synth oscillator
var synth = new Tone.Synth(
	{
		'oscillator' : 
			{
				'type' : 'sine'
			}
	}).connect(delay);

// init octave at 
var octave = 4;


// Random Note Function
function randomNote() 
{
	//stores a random integer from 0-10
	var randomNote = Math.floor(Math.random() *11);
	console.log(randomNote);

	//plays a random note based on the stored integer
	switch(randomNote)
	{
		case 0:
			synth.triggerAttackRelease('A4','18n');
			break;
		case 1:
			synth.triggerAttackRelease('B4','16n');
			break;
		case 2:
			synth.triggerAttackRelease('C4','16n');
			break;
		case 3:
			synth.triggerAttackRelease('D4','16n');
			break;
		case 4:
			synth.triggerAttackRelease('E4','16n');
			break;
		case 5:
			synth.triggerAttackRelease('F4','16n');
			break;
		case 6:
			synth.triggerAttackRelease('G4','16n');
			break;
		case 7:
			synth.triggerAttackRelease('A5','16n');
			break;
		case 8:
			synth.triggerAttackRelease('B5','16n');
			break;
		case 9:
			synth.triggerAttackRelease('C5','16n');
			break;
		case 10:
			synth.triggerAttackRelease('D5','16n');
			break;
		default:
			synth.triggerAttackRelease('A4','16n');
	}
}

// Simulates a piano keyboard lowercase letters only for now
function keyboard(event)
{	
	//stores the keyCode pressed on the keyboard
	var keyPress = event.which;
	console.log('keyPress ' + keyPress);
	//switches octave up or down based on keypress z(octave up) or x(octavedown)
	if(keyPress == 122)
	{
		octave = octave - 1;
	}
	if(keyPress == 120)
	{
		octave = octave + 1;
	}
	console.log('octave ' + octave);

	//notes played based on  keypress
	switch(keyPress)
	{
		case 97: //a	
			synth.triggerAttackRelease('C' + octave,'16n');
			break;
		case 119: //w
			synth.triggerAttackRelease('C#' + octave,'16n');
			break;
		case 115: //s
			synth.triggerAttackRelease('D' + octave,'16n');
			break;
		case 101: //e
			synth.triggerAttackRelease('D#' + octave,'16n');
			break;
		case 100: //d
			synth.triggerAttackRelease('E' + octave,'16n');
			break; 
		case 102: //f
			synth.triggerAttackRelease('F' + octave,'16n');
			break;
		case 116: //t
			synth.triggerAttackRelease('F#' + octave,'16n');
			break;
		case 103: //g
			synth.triggerAttackRelease('G' + octave,'16n');
			break;
		case 121: //y
			synth.triggerAttackRelease('G#' + octave,'16n');
			break;
		case 104: //h
			synth.triggerAttackRelease('A' + octave,'16n');
			break;
		case 117: //u
			synth.triggerAttackRelease('A#' + octave,'16n');
			break;
		case 106: //j
			synth.triggerAttackRelease('B' + octave,'16n');
			break;
		case 107: //k
			synth.triggerAttackRelease('C' + (octave + 1),'16n');
			break;
		default:
			return false;
	}
	circleMod();
}

//modify circle color
function circleMod()
{
	document.getElementById('circle').style.transition = '0.1s';
	document.getElementById('circle').style.backgroundColor = '#5499c7';
	document.getElementById('circle').style.filter = 'blur(2px)';

}

//init circle color
function initCircle()
{
	document.getElementById('circle').style.transition = '0.1s';
	document.getElementById('circle').style.backgroundColor = '#154360';
	document.getElementById('circle').style.filter = 'blur(0.5px)';

}