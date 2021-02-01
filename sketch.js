var dog,Happydog,database,foodS,foodStock, lives,greeting;

function preload()
{
  dog=loadImage("Dog.png/images");
  Happydog=loadImage("Happydog.png/images");
}

function setup() {
  createCanvas(800, 700);
  database=firebase.database();

 
 lives.html("Lives: "+Food,700,30);
 greeting.html("Note: Press the up arrow key to feed Drago milk!",100,70);
  
  
}


function draw() {  
  background(46,139,87);
  drawSprites();
  

  if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}



function readStock(data){
  foodS=data.val();
}

function writeStock(x){
 
  database.ref('/').update({
    Food:x
  });
}



}



