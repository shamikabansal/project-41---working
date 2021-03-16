const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var thun, thun1, thun2, thun3, thun4;

var engine, world;

var maxdrops =100;
var drops = [];

var rand;

var thunderCreatedFrame = 0;

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");

}

function setup(){
createCanvas(400, 700); 

    engine = Engine.create();
    world = engine.world;
    
    umbrella = new Umbrella(200,550);


    if(frameCount % 150 === 0){

        for(var i=0; i<maxdrops; i++){
            drops.push(new Drops(random(0,400), random(0,400)));
        }

    }
}

function draw(){
    background(0);
    Engine.update(engine);   

    rand = Math.round(random(1,4));
      if(frameCount%80===0){
          thunderCreatedFrame=frameCount;
          thun = createSprite(random(10,370), random(10,30), 10, 10);
          
          switch(rand){
              case 1: thun.addImage(thunder1);
              break;
              case 2: thun.addImage(thunder2);
              break; 
              case 3: thun.addImage(thunder3);
              break;
              case 4: thun.addImage(thunder4);
              break;
              default: break;
          }
          thun.scale = random(0.3,0.5)
      }
  
      if(thunderCreatedFrame + 100 ===frameCount && thun){
          thun.destroy();
      }

      umbrella.display();

      //displaying rain drops
      for(var i = 0; i<maxdrops; i++){
          drops[i].showDrop();
          drops[i].updatedrops();
          
      }



   // drawSprites(); 
}   

