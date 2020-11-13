


function preload(){
  backImage=loadImage("jungle.jpg");
 monkeyImage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png", "Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png", "Monkey_10.png");
  
bananaImage = loadImage("banana.png");
  ObstacleImage= loadImage("stone.png");
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  Monkey=createSprite(100, 315, 20, 50 );
  
  Monkey.addAnimation("monkey", monkeyImage);
 Monkey.scale= 0.2; 
  
}

function draw() {
  
  background(255);
  
  if (backgr.x<0) {
   backgr.x= backgr.width/2; 
  }
  
  
  
  
  
  drawSprites();
    
  
}

function SpawnBanana(){
  
  if(World.frameCount % 60 === 0) {
    banana=createSprite(400, 200, 20, 20);
   banana.velocityX= -(6 + 3*count/100);
    
}
}
function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = - (6 + 3*count/100);
    
    
    var rand = randomNumber(1,6);
    obstacle.setAnimation("obstacle" + rand);
    
             
    obstacle.scale = 0.5;
    obstacle.lifetime = 70;
   
    ObstaclesGroup.add(obstacle);
  }
}





