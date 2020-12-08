var movingRect
var fixRect

function setup() {
  createCanvas(800,800);
  movingRect=createSprite(300,400,40,100)
  movingRect.shapeColor="blue"
  fixRect=createSprite(100,500,140,80)
  fixRect.shapeColor="blue"
}

function draw() {
  background(0);
  movingRect.x=mouseX
  movingRect.y=mouseY
  if(movingRect.x-fixRect.x < movingRect.width/2+fixRect.width/2 &&
  fixRect.x-movingRect.x < movingRect.width/2+fixRect.width/2 &&
  movingRect.y-fixRect.y < movingRect.height/2+fixRect.height/2 &&
  fixRect.y-movingRect.y < movingRect.height/2+fixRect.height/2){
  movingRect.shapeColor="red"
  fixRect.shapeColor="red"  
  }
  else
  {
    movingRect.shapeColor="blue"
    fixRect.shapeColor="blue"
  }

  drawSprites();
}