function setup() {
  createCanvas(1200,800);
 car =  createSprite(200, 200, 80, 50);  //moving object
 car.shapeColor = "red";
 wall = createSprite(600,200,30,100);   //fixed object
 wall.shapeColor = "blue";
}

function draw() {
  background(0,0,0);
  console.log(car.width/2+wall.width/2)
  car.x = World.mouseX;
  car.y = World.mouseY;

if(car.x-wall.x < car.width/2+wall.width/2 && wall.x-car.x < car.width/2+wall.width/2 && car.y-wall.y < car.width/2+wall.width/2 && wall.y-car.y < car.width/2+wall.width/2 )
{
  car.shapeColor = "yellow";
  wall.shapeColor = "yellow";

} 
else{
  car.shapeColor = "red";
  wall.shapeColor = "blue";
}
  drawSprites();
}

//when distance is not there to collide
//when car.x-wall.x = car.width/2+wall.width/2