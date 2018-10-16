let width = 600;
let height = 400;
let radius = 100;
let gravity = 10;

function setup() {
    // put setup code here
    createCanvas(width, height);
    background(51);

}

function draw() {
    // put drawing code here
    ball((width) / 2, (height) / 2);
}

function ball(x, y) {
    ellipse(x, y, radius);
}