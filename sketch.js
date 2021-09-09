var player;
var edges;
var target;
var obstacle1;
var obstacle2;
var obstacle3;
var obstacle4;
var obstacle5;
var obstacle6;
var obstacle7;
var obstacle8;
var obstacle9;
var obstacle10;
function preload()
{

  //load game assets
}

function setup() {

createCanvas(700,700);


player = createSprite(50,650 , 30,30)
player.shapeColor="#F08080";

edges = createEdgeSprites();

target=createSprite(550,50 , 50,50)
target.shapeColor="#D35400 ";

obstacle1=createSprite(100,100 ,100,30)
obstacle1.shapeColor="#7E5109 ";
obstacle1.velocityX = 8;

obstacle2=createSprite(100,150,100,30)
obstacle2.shapeColor="#7D6608 ";
obstacle2.velocityX = -6;

obstacle3=createSprite(100,200,100,30)
obstacle3.shapeColor="#784212 ";
obstacle3.velocityX = 5;

obstacle4=createSprite(100,250,100,30)
obstacle4.shapeColor="#7E5109 ";
obstacle4.velocityX = -3;

obstacle5=createSprite(100,300,100,30)
obstacle5.shapeColor="#7D6608 ";
obstacle5.velocityX = 9;

obstacle6=createSprite(100,350,100,30)
obstacle6.shapeColor="#784212 ";
obstacle6.velocityX = -10;

obstacle7=createSprite(100,400,100,30)
obstacle7.shapeColor="#7E5109 ";
obstacle7.velocityX = 7;

obstacle8=createSprite(100,450,100,30)
obstacle8.shapeColor="#7D6608 ";
obstacle8.velocityX = -2;

obstacle9=createSprite(100,500,100,30)
obstacle9.shapeColor="#784212 ";
obstacle9.velocityX = 4;

obstacle10=createSprite(100,550,100,30)
obstacle10.shapeColor="#7E5109 ";
obstacle10.velocityX = -5;
}

function draw() {

  background("Black");
 
  player.bounceOff(edges[0])
  player.bounceOff(edges[1])
  player.bounceOff(edges[2])
  player.bounceOff(edges[3])

  if(keyDown("up"))
  {
    player.y = player.y - 4;
  }

  
  if(keyDown("down"))
  {
    player.y = player.y + 4;
  }

  
  if(keyDown("left"))
  {
    player.x = player.x - 4;
  }

  
  if(keyDown("right"))
  {
    player.x = player.x + 4;
  }
  obstacle1.bounceOff(edges[0])
  obstacle1.bounceOff(edges[1])
  obstacle1.bounceOff(edges[2])
  obstacle1.bounceOff(edges[3])

  obstacle2.bounceOff(edges[0])
  obstacle2.bounceOff(edges[1])
  obstacle2.bounceOff(edges[2])
  obstacle2.bounceOff(edges[3])

  obstacle3.bounceOff(edges[0])
  obstacle3.bounceOff(edges[1])
  obstacle3.bounceOff(edges[2])
  obstacle3.bounceOff(edges[3])

  obstacle4.bounceOff(edges[0])
  obstacle4.bounceOff(edges[1])
  obstacle4.bounceOff(edges[2])
  obstacle4.bounceOff(edges[3])

  obstacle5.bounceOff(edges[0])
  obstacle5.bounceOff(edges[1])
  obstacle5.bounceOff(edges[2])
  obstacle5.bounceOff(edges[3])

  obstacle6.bounceOff(edges[0])
  obstacle6.bounceOff(edges[1])
  obstacle6.bounceOff(edges[2])
  obstacle6.bounceOff(edges[3])

  obstacle7.bounceOff(edges[0])
  obstacle7.bounceOff(edges[1])
  obstacle7.bounceOff(edges[2])
  obstacle7.bounceOff(edges[3])

  obstacle8.bounceOff(edges[0])
  obstacle8.bounceOff(edges[1])
  obstacle8.bounceOff(edges[2])
  obstacle8.bounceOff(edges[3])

  obstacle9.bounceOff(edges[0])
  obstacle9.bounceOff(edges[1])
  obstacle9.bounceOff(edges[2])
  obstacle9.bounceOff(edges[3])

  obstacle10.bounceOff(edges[0])
  obstacle10.bounceOff(edges[1])
  obstacle10.bounceOff(edges[2])
  obstacle10.bounceOff(edges[3])

  if(player.isTouching(target))
  {
     text("YOU WIN", 250,250);
  }
  
  if(player.isTouching(obstacle1)){
  text("YOU LOSE", 250,250);
  obstacle1.velocityX =0;
  }
  if(player.isTouching(obstacle2)){
    text("YOU LOSE", 250,250);
    obstacle2.velocityX =0;
    }
    if(player.isTouching(obstacle3)){
      text("YOU LOSE", 250,250);
      obstacle3.velocityX =0;
      }
      if(player.isTouching(obstacle4)){
        text("YOU LOSE", 250,250);
        obstacle4.velocityX =0;
        }
        if(player.isTouching(obstacle5)){
          text("YOU LOSE", 250,250);
          obstacle5.velocityX =0;
          }
          if(player.isTouching(obstacle6)){
            text("YOU LOSE", 250,250);
            obstacle6.velocityX =0;
            }
            if(player.isTouching(obstacle7)){
              text("YOU LOSE", 250,250);
              obstacle7.velocityX =0;
              }
              if(player.isTouching(obstacle8)){
                text("YOU LOSE", 250,250);
                obstacle8.velocityX =0;
                }
                if(player.isTouching(obstacle9)){
                  text("YOU LOSE", 250,250);
                  obstacle9.velocityX =0;
                  }
                  if(player.isTouching(obstacle10)){
                    text("YOU LOSE", 250,250);
                    obstacle10.velocityX =0;
                    }

                    if(player.isTouching(obstacle1)){
                      text("YOU LOSE", 250,250);
                      player.x=50;
                      player.y=650;

                      }
                      if(player.isTouching(obstacle2)){
                        text("YOU LOSE", 250,250);
                        player.x=50;
                        player.y=650;
  
                        }
                        if(player.isTouching(obstacle3)){
                          text("YOU LOSE", 250,250);
                          player.x=50;
                          player.y=650;
    
                          }
                          if(player.isTouching(obstacle4)){
                            text("YOU LOSE", 250,250);
                            player.x=50;
                            player.y=650;
      
                            }
                            if(player.isTouching(obstacle5)){
                              text("YOU LOSE", 250,250);
                              player.x=50;
                              player.y=650;
        
                              }
                              if(player.isTouching(obstacle6)){
                                text("YOU LOSE", 250,250);
                                player.x=50;
                                player.y=650;
          
                                }
                                if(player.isTouching(obstacle7)){
                                  text("YOU LOSE", 250,250);
                                  player.x=50;
                                  player.y=650;
            
                                  }
                                  if(player.isTouching(obstacle8)){
                                    text("YOU LOSE", 250,250);
                                    player.x=50;
                                    player.y=650;
              
                                    }
                                    if(player.isTouching(obstacle9)){
                                      text("YOU LOSE", 250,250);
                                      player.x=50;
                                      player.y=650;
                
                                      }
                                      if(player.isTouching(obstacle10)){
                                        text("YOU LOSE", 250,250);
                                        player.x=50;
                                        player.y=650;
                  
                                        }

  drawSprites()}