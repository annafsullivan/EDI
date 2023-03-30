//create a progam that enables us to customize the number of squares in a grid
let gif;

function preload () {
    gif = loadImage ('assets/AIBG2.gif');
}



function setup() {//runs once
createCanvas (windowWidth, windowWidth);//creates a canvas 720 pixels by 720 pixels

}

function draw() {//runs in loop
  background(216, 237, 242);
  translate (-100,-100);
//fill ('turquoise');//fills shape with RGB color
//strokeWeight (1);//assigns stroke weight

var num = 7; //number of sides in the array
var sideLen = windowWidth/num; //side length variable


for (var y = 0; y < 2 * windowWidth; y = y + sideLen){
  for (var x = 0; x < 2 * windowWidth; x = x + sideLen){
image (gif,x,y,windowWidth/num, windowWidth/num);
  }
  function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }
}
}
