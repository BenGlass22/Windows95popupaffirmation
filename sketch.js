var images = [];
var randX = 0;
var randY = 0;
let fr= 1.5;
let bg;
function setup() {
 createCanvas(windowWidth, windowHeight);
  frameRate(fr);
  background(0,128,128);
   for (var i = 0; i < 29; i++) {
  images[i] = loadImage('Error' + i + '.png');
      console.log('Error' + i + '.png');
  }
}

function draw() {
  
  image(random(images), randX, randY);
  randX = random(0, windowWidth);
  randY = random(0, windowHeight);


}