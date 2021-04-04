var cat,cat1Image; 
var cat2Image,cat3Image;  
 
var mouse,mouse1Image; 
var mouse2Image; 
var mouse3Image;  	

var gardenImage; 


function preload() {
    //load the images here
    gardenImage = loadImage("images/garden.png");

    mouse1Image = loadAnimation("images/mouse1.png"); 
    mouse2Image = loadAnimation("images/mouse2.png","images/mouse3.png"); 
    mouse3Image = loadAnimation("images/mouse4.png"); 
    
	cat1Image  = loadAnimation("images/cat1.png"); 
	cat2Image  = loadAnimation("images/cat2.png","images/cat3.png"); 
	cat3Image =  loadAnimation("images/cat4.png");  
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    mouse = createSprite(200,595); 
    mouse.addAnimation("jeeryStanding",mouse1Image); 
	mouse.scale = 0.2; 

	cat = createSprite(870,600); 
	cat.addAnimation("tomSleeping",cat1Image); 
	cat.scale = 0.2; 
	


}

function draw() {

    background(gardenImage);
    //Write condition here to evalute if tom and jerry collide

	if(cat.x-mouse.x < cat.width/2 - mouse.width/2){
		cat.velocityX = 0; 
		cat.addAnimation("catLastImage",cat3Image);  	
		cat.x = 300; 
		cat.changeAnimation("catLastImage");  	

		mouse.addAnimation("mouseLastImage",mouse3Image); 
		mouse.changeAnimation("mouseLastImage"); 


	}





    
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here

  if(keyCode===LEFT_ARROW){
	cat.velocityX = -4; 
	cat.addAnimation("cat2RunningImage",cat2Image); 
	cat.changeAnimation("cat2RunningImage"); 

	mouse.addAnimation("mouseTeasing",mouse2Image); 
	mouse.frameDelay = 50; 
	mouse.changeAnimation("mouseTeasing"); 
  }

}
