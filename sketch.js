var bath,brush,eat,gym,move,bg,drink,sleep,astronaut;

function preload(){
    bath = loadAnimation("bath1.png","bath2.png");
    brush = loadAnimation("brush.png");
    drink = loadAnimation("drink1.png","drink2.png");
    eat = loadAnimation("eat1.png","eat2.png");
    gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
    bg = loadImage("iss.png");
    move = loadAnimation("move.png","move1.png");
    sleep = loadAnimation("sleep.png");

}

function setup(){
    createCanvas(1400,675);
    astronaut = createSprite(700,390);
    astronaut.addAnimation("sleeping",sleep);
    astronaut.scale = 0.1;

}

function draw(){
    background(bg);
    drawSprites();

    textSize(20);
    fill("white")
    text("Instructions:",20, 35);
    textSize(15);
    text("Up Arrow = Brushing",20, 55);
    text("Down Arrow = Gymming",20, 70);
    text("Left Arrow = Eating",20, 85);
    text("Right Arrow = Bathing",20, 100);
    text("m key = Moving",20, 115);
    
    edges=createEdgeSprites();
    astronaut.bounceOff(edges);
    

    if(keyDown("UP_ARROW")){
        astronaut.addAnimation("brushing", brush);
        astronaut.changeAnimation("brushing");
        astronaut.y = 420;
      
      }

      if(keyDown("DOWN_ARROW")){
        astronaut.addAnimation("gymming", gym);
        astronaut.changeAnimation("gymming");
        astronaut.y = 525;
      
      }

      if(keyDown("RIGHT_ARROW")){
          astronaut.addAnimation("bathing",bath);
          astronaut.changeAnimation("bathing");
          astronaut.y = 420;
        
      }

      if(keyDown("LEFT_ARROW")){
          astronaut.addAnimation("eating",eat);
          astronaut.changeAnimation("eating");
          astronaut.y = 420;
          astronaut.x = 300;
          astronaut.velocityX = 0.5;
          astronaut.velocityY = 0.5;

      }

        if(keyDown("m")){
            astronaut.addAnimation("moving", move);
            astronaut.changeAnimation("moving");
            astronaut.X = 300;
            astronaut.Y = 525
            astronaut.velocityX = 1;
            astronaut.velocityY = 1;
        }
    





}