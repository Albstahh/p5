var sideLength = 600;
var x = 300;
var y = 0;
var r = 300;
var angle = 0;

function setup() {
    createCanvas(sideLength,sideLength);
    frameRate(120);
}

function draw() {
    background(51);
    translate(sideLength/2,sideLength/2);
    movingline();
    rect(100,-100,150,-150);
}

function movingline(){
    stroke(255);
    line(0,0,x,y);
    x = r*cos(angle);
    y = r*sin(angle);
    angle -= 0.01;
}
