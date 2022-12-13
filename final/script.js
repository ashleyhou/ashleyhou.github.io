var i = 0;
var txt = 'press space to continue';
var speed = 50;

window.onload = function typewriter() {
	if (i<txt.length) {
		ocument.getElementById("typing").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typewriter, speed);
	}
}