// Synth Properties====================================

//effects
var verb = new Tone.Freeverb(
	{
		'roomSize' : 0.2,
		'dampening' :2000,
		'wet' : 0.2
	}).toMaster();

var delay = new Tone.PingPongDelay(
	{
		'wet' : 0.2,
		'feedback' : 0.1,
		'delayTime' : 0.2
	}).connect(verb);

// synth oscillator
var synth = new Tone.PolySynth(
	{
		'voice' : Tone.FMSynth
	}).connect(delay);

// init octave at 
var octave = 4;

// Simulates a piano keyboard lowercase letters only for now
function keyboard(event)
{	
	//stores the keyCode pressed on the keyboard
	var keyPress = event.which || keyCode;
	console.log('keyPress ' + keyPress);

	//shifts the keyboard an octave up or down based on keypress z(octave down) or x(octave up)
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
	document.getElementById('body').style.backgroundColor = '#5499c7';
}

//init circle color
function initCircle()
{
	document.getElementById('body').style.transition = '0.2s';
	document.getElementById('body').style.backgroundColor = 'black';
}

