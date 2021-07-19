var runner
var ground

function preload(){
  //pre-load images
runner.loadAnimation("Runner-1.png","Runner-2.png")
ground.loadImage(path.png)

}

function setup(){
  createCanvas(400,400);
  //create sprites here
Runner.createSprite(200,300)
Runner.addAnimation(runner)

Ground1.createSprite(200,200,400,400)
Ground1.loadImage(ground)
}

function draw() {
  background(0);

//move runner when arrow key pressed
if (keyIsDown(RIGHT_ARROW)){
  Runner.x=-15
}

if (keyIsDown(LEFT_ARROW)){
  Runner.x+= 15
}

  //make ground move
Ground1.velocityY=-10
console.log(Ground1.y)

  //reset ground
if (Ground1.x<0){
  Ground1.x=Ground1.width/2;
}

  drawSprites();
}
