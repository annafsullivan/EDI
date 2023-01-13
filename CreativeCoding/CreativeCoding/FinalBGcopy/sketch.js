//create a progam that enables us to customize the number of squares in a grid
let gif;

function preload () {
    gif = loadImage ('assets/AiBGv1.gif');
}



function setup() {//runs once
createCanvas (windowWidth, windowWidth);//creates a canvas 720 pixels by 720 pixels
background ('225, 250, 252');//background color
}

function draw() {//runs in loop
fill ('turquoise');//fills shape with RGB color
strokeWeight (1);//assigns stroke weight

var num = 2; //number of sides in the array
var sideLen = windowWidth/num; //side length variable


for (var y = 0; y < windowWidth; y = y + sideLen){
  for (var x = 0; x < windowWidth; x = x + sideLen){
image (gif,x,y,windowWidth/num, windowWidth/num);
  }
}
}
