var fixedRect, movingRect;

var gameobject1,gameobject2,gameobject3,gameobject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 // fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
 // movingRect.debug = true; 
fixedRect.velocityX=-5;
movingRect.velocityX=5;

gameobject1=createSprite(100,100,50,50);
gameobject1.shapeColor="blue";
gameobject2=createSprite(200,100,50,50);
gameobject2.shapeColor="blue";
gameobject3=createSprite(300,100,50,50);
gameobject3.shapeColor="blue";
gameobject4=createSprite(400,100,50,50);
gameobject4.shapeColor="blue";
 }


function draw() {
  background(0,0,0);  

bounceoff(movingRect,fixedRect)




  //movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;
if(isTouching(movingRect,gameobject1)){
  movingRect.shapeColor = "red";
  gameobject1.shapeColor = "red";
}
else {
  movingRect.shapeColor = "green";
  gameobject1.shapeColor = "green";
}

  
  drawSprites();
}
