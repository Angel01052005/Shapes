function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 100);
  movingrect=createSprite(600, 200, 80, 30);

  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";

  fixedrect.debug=true;
  movingrect.debug=true;
}

function draw() {
  background(255,255,255);  

  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 && movingrect.y-fixedrect.y<movingrect.width/2+fixedrect.width/2 && fixedrect.y-movingrect.y<fixedrect.width/2+movingrect.width/2) {
    fixedrect.shapeColor="red";
    movingrect.shapeColor="red";
  }
  else{
    fixedrect.shapeColor="green";
    movingrect.shapeColor="green";
  }
  drawSprites();
}