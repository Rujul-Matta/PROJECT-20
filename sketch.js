var car , wall;
var speed , weight ;
var wall_image;
var background2 , background_i;
var game = 0;
function preload(){
  wall_image = loadImage("Wall.png");
  background_i =  loadImage("Road.jpg");
}
function setup() {
  createCanvas(1000,400);
  background2 = createSprite(500,200,1000,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(900, 200 , 60 , height/2);
  wall.shapeColor = "lightgreen" ; 
  wall.addImage(wall_image);
  wall.scale = 1.5;

  speed = random(20,90);
  weight = random(400,1500);

  
  
}

function draw() {
  background2.addImage(background_i);
  background2.scale = 5;

  // car.debug = true;
  // wall.debug = true;
  if(game == 0){
    background("lightblue");
    textSize(25);
    fill("Black");
    stroke("lightblue");
    text("PRESS space to test the car " , 350,200);
    if(keyDown("space")){
      game = 1;
    }
  }

  if(game == 1){
    car.velocityX = speed;
  c = wall.x - car.x;
  b = wall.width/2 + car.width/2;
  a = car.x - wall.x; 

  car.depth += wall.depth;
 
 if(a <= b && c <= b ){
   car.velocityX = 0;
   var deformation = (0.5*weight*speed*speed)/22509;

   if(deformation > 180){
     car.shapeColor = color(225,0,0);
   }
   if(deformation < 180 && deformation > 100){
    car.shapeColor = color(230,230,0);
   }
   if(deformation < 100){
    car.shapeColor = color(0,225,0);
   }
  }
  drawSprites();
 }



  
}
