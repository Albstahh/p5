var x = 0;
var y = 0;
var angle = 90;
var length = 200;
var angle_counter = 0;

function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES)
    frameRate(120);
}

function draw() {
    background(51);
    strokeWeight(4);
    translate(width / 2, height / 2);
    dial(angle, length);
    angle -= 0.1;
    angle_counter += 0.1;

    stroke(255);
    strokeWeight(0.5);
    text(coordinates, -140, 250);
    text('A: ' + round(angle_counter), 0, -250)
}

function dial(a, l) {
    x = l * sin(a);
    y = l * cos(a);
    stroke('YELLOW');
    noFill();
    ellipse(0, 0, length * 2, length * 2);
    stroke('RED');
    line(0, 0, x, -y);
    stroke('GREEN');
    line(x, 0, x, -y);

    stroke('BLACK')
    line(-length, 0, length, 0);
    line(0, -length, 0, length);

    stroke('BLUE');
    line(0, 0, x, 0);

    coordinates = 'X: ' + x / length + '   ' + 'Y: ' + y / length;
}