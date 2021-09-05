var form
var bgImg
var gameState=0

function preload(){
  bgImg = loadImage("bg.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight);

  
}

function draw() {
  background(255,255,255);  
  drawSprites();
if (gameState===0){
  form = new Form();
  form.display()
}

}