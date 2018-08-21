var sideLength = 600;
var position = [0, -250];
var speed = [0, 0];
var acceleration = [0, 10];
var multipliers = [0.5,-0.7]

function setup() {
    createCanvas(sideLength, sideLength);
    angleMode(DEGREES)
    frameRate(120);
}

function draw() {
    background(51);
    translate(width / 2, height / 2);
    ball();
}

function ball() {
    ellipse(position[0], position[1], 75, 75);

    speed[0] += acceleration[0];
    speed[1] += acceleration[1];

    position[1] += speed[1] * multipliers[0];
    position[0] += speed[0] * multipliers[0];


    if (position[0] > sideLength / 2 || position[0] < -sideLength / 2) {
        if (position[0] > sideLength / 2) {
            position[0] = sideLength / 2;
        }
        if (position[0] < -sideLength / 2) {
            position[0] = -sideLength / 2;
        }
        acceleration[0] *= -0.9;
    }
    if (position[1] > sideLength / 2 || position[1] < -sideLength / 2) {
        if (position[1] > sideLength / 2) {
            position[1] = sideLength / 2;
        }
        if (position[1] < -sideLength / 2) {
            position[1] = -sideLength / 2;
        }
        speed[1] *= multipliers[1];
    }
    print(speed[0]);
}
