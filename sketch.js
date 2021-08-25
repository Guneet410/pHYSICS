
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var balls = [];
start = 0
playing = 1
lost = 2
var gameState = start 

function preload(){
bg = loadImage("snow.jpg");
play = loadAnimation("witch.png")
sad = loadAnimation("sad.png")
}


function setup() {
  createCanvas(600,600);

  engine = Engine.create();
  world = engine.world;
   
  options = {
    isStatic: true }


    for(var i = 0; i < 5; i++){
      var x = random(200,450);
      var y = random(-10,0);  
      setTimeout(function () {
        snowball = new Ball(x,y);
        World.add(world,snowball)
        balls.push(snowball);
      }, 3000);
    }
  

    
      for(var i = 0; i < 5; i++){
        var x = random(150,350);
        var y = random(-10,0);
         setTimeout(function () {
          snowball = new Ball(x,y);
          World.add(world,snowball)
          balls.push(snowball);
        }, 6000);
      }
    
      for(var i = 0; i < 5; i++){
        var x = random(100,250);
        var y = random(-10,0);
       setTimeout(function () {
          snowball = new Ball(x,y);
          World.add(world,snowball)
          balls.push(snowball);
        }, 9000);
      }
    
    
      for(var i = 0; i < 5; i++){
        var x = random(300,450);
        var y = random(-10,0);
        setTimeout(function () {
          snowball = new Ball(x,y);
          World.add(world,snowball)
          balls.push(snowball);
        }, 12000);
      }
    
    
      for(var i = 0; i < 5; i++){
        var x = random(50,400);
        var y = random(-10,0);
        setTimeout(function () {
          snowball = new Ball(x,y);
          World.add(world,snowball)
          balls.push(snowball);
        }, 15000);
      }
  

    


 



  player = createSprite(200,200,20,40)
  player.addAnimation("main",play)
  player.addAnimation("lost",sad)
  player.scale = 0.3;


  }
 



function draw() 
{
  background(51);

     
  Engine.update(engine);
  imageMode(CENTER)
  image(bg,200,200,800,880)

  fill(0)
  textSize(15)
 
 
 text("Use arrow keys to avoid the balls.If you avoid all 5 sets of balls,you WIN ",20,400)


  player.velocityX = 0
  player.velocityY = 0
 
 


  if(keyDown("right")){
    player.velocityX = 5
  }

  if(keyDown("left")){
    player.velocityX = -5
  }

  if(keyDown("up")){
    player.velocityY = -5
  }

  if(keyDown("down")){
    player.velocityY = 5
  }

  
    
  

  drawSprites()




  for(var i = 0; i < balls.length; i++){
    balls[i].display(); 
    var pos =  balls[i].body.position;

  
   var d = dist(player.x,player.y,pos.x,pos.y)
    
   if(d<50){

    balls.splice( i , 1)
    World.remove(world,snowball)
    balls = null;

    fill(0)
    textSize(40)
    text ("You lost",200,100);
 
    player.changeAnimation("lost",sad)

    }}}


   