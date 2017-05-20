const sense = require("node-sense-hat").Leds;

var X = [255, 0, 0];  // Red
var O = [255, 255, 255];  // White

var questionMark = [
X, O, O, X, X, O, O, X,
X, O, X, O, O, X, O, X,
X, O, O, O, O, X, O, X,
X, O, O, O, X, O, O, X,
X, O, O, X, O, O, O, X,
X, O, O, X, O, O, O, X,
X, O, O, O, O, O, O, X,
X, O, O, X, O, O, O, X
];

sense.setPixels(questionMark);

while(true){}
