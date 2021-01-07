const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundImage;
var StartGame;

//Images
var test;
var backStory;
var Table;
var man_sitting;
var house;
//var babyMove;
var baby
var stall;
var runMan;
var hi;
var hello;

//Sprites
var tableS ;
var man_sittingS;
var houseS;
var babyMoves;
var babyS;
var stallS;
var runManS;
var hiS;
var helloS;
var runAni;

function preload(){
    backgroundImage = loadImage("images/background story img.jpg");
    testImage = loadAnimation("images/Man Running/1.png","images/Man Running/2.png","images/Man Running/3.png","images/Man Running/4.png","images/Man Running/5.png","images/Man Running/6.png");
    babyMove = loadAnimation("images/baby/1.png","images/baby/2.png","images/baby/3.png","images/baby/4.png","images/baby/5.png","images/baby/6.png");
    backStory = loadImage("images/in Game/White.jpg");
    Table = loadImage("images/in Game/table.jpg");
    man_sitting = loadImage("images/in Game/a man sitting.jpg");
    house = loadImage("images/in Game/house.png");
    stall = loadImage("images/in Game/drinks.jpg");
    runMan = loadImage("images/in Game/run_man.png");
    hi = loadImage("images/in Game/hi.png");
    hello = loadImage("images/in Game/hello.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    StartGame = createButton('Start Game');
    StartGame.position(550,350);

    test = createSprite(-130,300,50,50);
    test.addAnimation("running",testImage);
      
    babyMoves = createSprite(990,170,150,150);
    babyMoves.scale = 0.2;
    babyMoves.addAnimation("pavan",babyMove);
    babyMoves.visible = false;

    runAni = createSprite(50,390,50,50);
    runAni.addAnimation(testImage);
    runAni.scale = 0.27;
    runAni.visible = false;
  
}

function draw(){
    background(backgroundImage);
    textSize(60);
    fill("blue")
    text("THE HERO",425,150);
    textSize(20);
    fill("White");
    text ("First a person will be walking he stops to have a cup of tea While drinking tea he sees a baby crawling from ",107,230);
    text ("highest floor then  He identified that she/he was in danger so he soon reacts and uses Physics to save the baby while falling.",50,280);
    StartGame.mousePressed(ManMoving);

    if (test.x >= 1200){
        background(backStory);
        StartGame.removeAttribute('disabled');
        man_sittingS = createSprite(100,400,50,50);
        man_sittingS.addImage(man_sitting);
        man_sittingS.scale = 0.09;

        tableS = createSprite(150,420,50,50);
        tableS.addImage(Table);
        tableS.scale = 0.11;

        stallS = createSprite(290,380,50,50);
        stallS.addImage(stall);
        stallS.scale = 0.15;

        houseS = createSprite(950,260,50,50);
        houseS.addImage(house);
        houseS.scale = 1.6;

        runManS = createSprite(50,390,50,50);
        runManS.addImage(runMan);
        runManS.scale = 0.27;

        hiS = createSprite(90,300,50,50);
        hiS.addImage(hi);
        hiS.scale = 0.09;

        helloS = createSprite(100,340,50,50);
        helloS.addImage(hello);
        helloS.scale = 0.09;

        runManS.visible = true;
        babyMoves.visible = true;
        BabyMoving();
        if(babyMoves === true){
            ManMoving();
        }
     
    }
    Engine.update(engine);
    drawSprites();
  
}

function ManMoving(){
    test.velocityX = 100;
}

function BabyMoving(){
    babyMoves.velocityX = -0.2;
}