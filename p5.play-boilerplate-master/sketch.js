var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  fixedRect=createSprite(200,200,40,30);
}

function draw() {
  background(0,0,0); 
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if (movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 && 
    movingRect.y-fixedRect.y<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.y-movingRect.y<fixedRect.width/2+movingRect.width/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor=rgb(100,100,0);
  } 
  else{
    movingRect.shapeColor=rgb(100,100,0);
    fixedRect.shapeColor="red";
  }

  drawSprites();
 
}