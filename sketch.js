var bullet,wall
var speed,weight ,thickness;
var wallLeftEdge,BulletRightEdge;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)
 
  bullet=createSprite(100,200,20,20);
  bullet.shapeColor=color("white")
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color("yellow")
 
  
}

function draw() {
  background("blue");  


  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage =0.5 * weight * speed * speed/(thickness*thickness*thickness);

    if(damage>10)
    {
        bullet.shapeColor=color("red")
    }
    

     if(damage<10)
     {
          bullet.shapeColor=color("green");
     }

  }
  drawSprites();
}
function hasCollided(lbullet,lwall)
{

  bulletRightEdge=lbullet.x+lbullet.width;
  wallLefEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
   return true
  }
  return false
}