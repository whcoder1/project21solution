var car, wall;
var speed, weight;
var thickness;




function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)
  car=createSprite(50, 200, 50, 5);
  car.shapeColor="white";
  car.velocityX=speed;
  wall=createSprite(1200,200,thickness,height/2)

 wall.shapecolor="white"

 

  
}
function draw() {
  background("black"); 
  //ckecking if the car has collided with the wall"
  if(car.x+car.width>=wall.x)
  {
 car.velocityX=0;
var deformation=(0.5 * weight * speed* speed)/(thickness *thickness *thickness);
if (deformation>10)
{
  wall.shapeColor="red";
}

  if (deformation<10)
{
  wall.shapeColor="green"
}

  }

  drawSprites();
}



