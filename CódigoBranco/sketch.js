var quadrado; 
function setup() { 
  createCanvas(400,400); 
  quadrado = createSprite (100,100,10,10);
} function draw() { 
  background(255); 
  if(keyDown("w")){ 
    quadrado.velocityY=-2
  console.log("asadsad")}
  drawSprites();
   
} 