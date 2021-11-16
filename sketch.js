var canvas;
var music;
var boxSprite;
var surface1, surface2, surface3, surface4;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(100,400,250,20);
    surface1.shapeColor="red"

    surface2=createSprite(300,400,250,20);
    surface2.shapeColor="purple"

    surface3=createSprite(500,400,250,20);
    surface3.shapeColor="blue"

    surface4=createSprite(700,400,250,20);
    surface4.shapeColor="green"

     //create box sprite and give velocity
     boxSprite=createSprite(random(20,750),400,30,30);
     boxSprite.shapeColor="white"
     boxSprite.velocityX=5
     boxSprite.velocityY=5

}

function draw() {
    background(rgb(255,160,122));
    edges=createEdgeSprites();
    boxSprite.bounceOff(edges)



    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(boxSprite)&&boxSprite.bounceOff(surface1)){
        boxSprite.shapeColor="red"
    }
    if(surface2.isTouching(boxSprite)&&boxSprite.bounceOff(surface2)){
        boxSprite.shapeColor="purple"
    }
    if(surface3.isTouching(boxSprite)){
        boxSprite.shapeColor=rgb(10,10,10)
        boxSprite.velocityX=0
        boxSprite.velocityY=0
    }
    if(surface4.isTouching(boxSprite)&&boxSprite.bounceOff(surface4)){
        boxSprite.shapeColor="green"
    }
 
  
                                   
    
    drawSprites();
}
