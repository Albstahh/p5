var x = 0;
var y = 0;
var angle = 0;
var length = 100;

function setup() {
	createCanvas(400,400);
	angleMode(DEGREES)
	frameRate(120);
}

function draw() {
	background(51);
	stroke(255);
	strokeWeight(4);
	translate(200,200);
	dial(angle,length,1);
	angle += 1;
}

function dial(a,l){
	x = l*sin(a);
	y = l*cos(a);
	line(0,0,x,-y);
}