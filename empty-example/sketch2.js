var d = 8;
var n = 5;
var sliderD;
var sliderN;

function setup() {
    createCanvas(400, 400);
    sliderD = createSlider(1, 10, 5);
    sliderN = createSlider(1, 10, 5);
}

function draw() {
    d = sliderD.value();
    n = sliderN.value();
    var k = n / d;
    background(51);
    translate(width / 2, height / 2);

    beginShape();
    stroke(255);
    noFill();
    strokeWeight(1);

    for (var a = 0; a < TWO_PI * d; a += 0.01) {
        var r = 200 * cos(k * a);
        var x = r * cos(a);
        var y = r * sin(a);
        vertex(x, y);
    }
    endShape(CLOSE);
}