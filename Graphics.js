var programCode = function(processingInstance) {
    
    with (processingInstance) {
      size(600, 600); 
      frameRate(60);
        var mouseIsPressed = false;
mouseReleased = function(){
    mouseIsPressed = false;
};
var cloneObject = function(obj){
    var newObj = {};
    if(obj.push){
        newObj = [];
    }
    for(var q in obj){
        if(typeof obj[q] === "object"){
            newObj[q] = cloneObject(obj[q]);
        }
        else{
            newObj[q] = obj[q];
        }
    }
    return newObj;
};
//{
var data;
var Person;
var mouseIsClicked = false;
mousePressed = function(){
    mouseIsPressed = true;
    mouseIsClicked = true;
};
var Bullet;
var getBackground = get();
var bullets = [];
var collectibles = [];
var sayingRect = false;
var platforms = [];
var people = [];
var Platform;
var keys=[];
var megaArray = [];
keyPressed = function(){
    keys[keyCode] = true;
    
};
keyReleased = function(){
    keys[keyCode] = false;
   
};
var scene = "load1";
var cam = {x:0, y:0};
var player = {x:0, y:0, ltilex:0, ltiley:0};
var backgroundImgs = {
    plains:{
        
    },
};
//}Variable Setup
//{
var loadingScreen = function(t) {
    pushMatrix();
    translate(width/2, height/2);
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    background(245);
    strokeWeight(((width+height)/2)/40);
    stroke(0+sin(radians(frameCount))*200, 255+sin(radians(frameCount))*100, 255-sin(radians(frameCount))*110);
    noFill();
    pushMatrix();
    rotate(sin(radians(frameCount/2))*360);
    arc(0, 0, width/1.5, height/1.5, 0, radians(80));
    rotate(sin(radians(frameCount/2))*360);
    arc(0, 0, width/2, height/2, 0, radians(80));
    rotate(sin(radians(frameCount/2))*360);
    arc(0, 0, width/3, height/3, 0, radians(80));
    popMatrix();
    stroke(155, 0, 0);
    line(-width/10, height/15, width/10, height/15);
    stroke(255, 0, 0);
    line(-width/10, height/15, -width/10 + (t/(100) * width/5), height/15);
    pushMatrix();
    scale(abs(sin(radians(frameCount))));
    rotate(cos(radians(frameCount*10))*40);
    noStroke();
    fill(255, 225, 148);
    rect(0, 0, width/10, height/10, width/40);
    fill(0);
    ellipse(-width/50, -height/50, width/55, height/55);
    ellipse(width/50, -height/50, width/55, height/55);
    popMatrix();
        
    popMatrix();
};
var maps= /*maps || */[
    [0    ,0.001,0.002,1,1,1,1,1,1,1,1,1],
    [0.003,0.004,0.005,1,1,1,1,1,1,1,1,1],
    [0.001,0    ,0.003,1,1,1,1,1,1,1,1,1]
];//main map (number=tileset, blank=nothing, .00x=preset map thing).
var littlemap=[];//each terrain set
var killMap = function(map){
    for(var a = 0; a < map.platforms.length; a ++){
        if(!map.platforms[a].pushable){
            map.platforms[a].dead = true;
        }
    }
    map.initialized = false;
};
var presetmaps=[
    {
        initialized:false,
        platforms:[],
        x:0,
        y:0,
        spawnTime:0,
        spawnTimeMin:1000,
        background:function(map){
            fill(104, 209, 69);
            rectMode(CORNER);
            rect(map.x, map.y, 1200, 1200);
            imageMode(CORNER);
            image(backgroundImgs.plains.norm1, map.x, map.y);
            image(backgroundImgs.plains.norm2, map.x + 600, map.y);
            image(backgroundImgs.plains.norm1, map.x, map.y + 600);
            image(backgroundImgs.plains.norm1, map.x + 600, map.y + 600);
        },
        make:function(map){
            if(frameCount - map.spawnTime >= map.spawnTimeMin || map.spawnTime === 0){
                map.spawnTime = frameCount;
                people.push(new Person(random(100, 1100) + map.x, random(100, 1100) + map.y, 55, 40, "Isaac Emerald"));
                /*
                for(var z = 0; z < 9; z ++){
                    people.push(new Person(random(100, 1100) + map.x, random(100, 1100) + map.y, 55, 40, "Cat Virus"));
                }
                */
                
            }
            map.platforms.push(new Platform(200 + map.x, 200 + map.y, 80, 160, "Plains Water"));
            map.platforms.push(new Platform(680 + map.x, 480 + map.y, 40, 480, "Plains Tall Tree"));
            for(var a = 0; a < map.platforms.length; a ++){
                platforms.push(map.platforms[a]);
            }
            map.initialized = true;
        },
    },
    {
        initialized:false,
        platforms:[],
        background:function(map){
            fill(100);
            rectMode(CORNER);
            rect(map.x, map.y, 1200, 1200);
        },
        x:0,
        y:0,
        spawnTime:0,
        spawnTimeMin:1000,
        make:function(map, x, y){
            if(!data.get_value("characters spawned").np){
                data.set_property("characters spawned", "np", true);
                people.push(new Person(0 + map.x, 50 + map.y, 55, 40, "The Non-pirate"));
            }
            map.platforms.push(new Platform(200 + map.x, 200 + map.y, 100, 25));
            map.platforms.push(new Platform(700 + map.x, 500 + map.y, 100, 500));
            for(var a = 0; a < map.platforms.length; a ++){
                platforms.push(map.platforms[a]);
            }
            map.initialized = true;
        },
    },
    {
        initialized:false,
        platforms:[],
        background:function(map){
            fill(255);
            rectMode(CORNER);
            rect(map.x, map.y, 1200, 1200);
        },
        x:0,
        y:0,
        spawnTime:0,
        spawnTimeMin:1000,
        make:function(map, x, y){
            map.platforms.push(new Platform(200 + map.x, 200 + map.y, 100, 25));
            map.platforms.push(new Platform(700 + map.x, 500 + map.y, 100, 500));
            for(var a = 0; a < map.platforms.length; a ++){
                platforms.push(map.platforms[a]);
            }
            map.initialized = true;
        },
    },
    {
        initialized:false,
        platforms:[],
        x:0,
        y:0,
        spawnTime:0,
        spawnTimeMin:1000,
        background:function(map){
            fill(150, 0, 0);
            rectMode(CORNER);
            rect(map.x, map.y, 1200, 1200);
        },
        make:function(map){
            map.platforms.push(new Platform(200 + map.x, 200 + map.y, 100, 25));
            map.platforms.push(new Platform(700 + map.x, 500 + map.y, 100, 500));
            for(var a = 0; a < map.platforms.length; a ++){
                platforms.push(map.platforms[a]);
            }
            map.initialized = true;
        },
    },
    {
        initialized:false,
        platforms:[],
        x:0,
        y:0,
        spawnTime:0,
        spawnTimeMin:1000,
        background:function(map){
            fill(150, 150, 0);
            rectMode(CORNER);
            rect(map.x, map.y, 1200, 1200);
        },
        make:function(map){
            map.platforms.push(new Platform(200 + map.x, 200 + map.y, 100, 25));
            map.platforms.push(new Platform(700 + map.x, 500 + map.y, 100, 500));
            for(var a = 0; a < map.platforms.length; a ++){
                platforms.push(map.platforms[a]);
            }
            map.initialized = true;
        },
    },
    {
        initialized:false,
        platforms:[],
        x:0,
        y:0,
        spawnTime:0,
        spawnTimeMin:1000,
        background:function(map){
            fill(0, 150, 150);
            rectMode(CORNER);
            rect(map.x, map.y, 1200, 1200);
        },
        make:function(map){
            map.platforms.push(new Platform(200 + map.x, 200 + map.y, 100, 25));
            map.platforms.push(new Platform(700 + map.x, 500 + map.y, 100, 500));
            for(var a = 0; a < map.platforms.length; a ++){
                platforms.push(map.platforms[a]);
            }
            map.initialized = true;
        },
    },
];//put in any tiles you want to be preset on a map in map sized array with all blank but the tiles you want
var map_img=/*map_img || */[];
var loadDone = /*loadDone || */false;
//}Loading and maps
//Menu Stuff (Don't add in yet as it is not essential to the gameplay)
//The Beginning Cutscene (Don't add in yet as it is not essential to the gameplay)
//{
//{
var rustysword = function(x, y, r, z){
    
    pushMatrix();
    
    translate(x, y);
    
    rotate(r);
    
    scale(z);
    
    noStroke();
    
    fill(196, 141, 82);
    
    (rect)(-6, 8, 12, 7, 0, 0, 5, 5);
    
    fill(170);
    
    rect(-15, 4, 30, 4, 5);
    
    fill(215);
    
    quad(-10, -15, 10, -25, 10, 4, -10, 4);
    
    fill(176, 86, 61);
    
    quad(-10, -15, 10, -25, 10, -15, -10, -10);
    
    fill(0, 0, 0, 30);
    
    quad(0, -20, 10, -25, 10, 4, 0, 4);
    
    (rect)(0, 4, 15, 4, 0, 5, 5, 0);
    
    (rect)(0, 10, 6, 5, 0, 0, 5, 0);
    
    rect(-6, 8, 12, 2);
    
    popMatrix();
    
};
var rustyspear = function(x, y, r, z, length){
    
    pushMatrix();
    
    translate(x, y);
    
    rotate(r);
    
    scale(z);
    scale(1, length || 1);
    
    noStroke();
    
    fill(196, 141, 82);
    
    (rect)(-3, -30, 6, 45, 0, 0, 5, 5);
    
    fill(0, 0, 0, 30);
    
    (rect)(0, -30, 3, 45, 0, 0, 5, 0);
    
    fill(215);
    
    quad(-5, -30, 0, -25, 5, -30, 0, -50);
    
    fill(176, 86, 61);
    
    triangle(0, -50, 4, -35, -2.5, -40);
    
    fill(0, 0, 0, 30);
    
    triangle(0, -25, 5, -30, 0, -50);
    
    popMatrix();
    
};
var steelsword = function(x, y, r, z){
    
    pushMatrix();
    
    translate(x, y);
    
    rotate(r);
    
    scale(z);
    
    noStroke();
    
    fill(194, 183, 81);
    
    (rect)(-6, 0, 12, 15, 0, 0, 5, 5);
    
    fill(168, 90, 0);
    
    rect(-15, -4, 30, 4, 5);
    
    fill(180);
    
    beginShape();
    vertex(-10, -4);
    vertex(-8, -35);
    vertex(0, -50);
    vertex(8, -35);
    vertex(10, -4);
    endShape(CLOSE);
    
    fill(0, 0, 0, 30);
    
    quad(0, -4, 0, -50, 8, -35, 10, -4);
    
    (rect)(0, -4, 15, 4, 0, 5, 5, 0);
    
    (rect)(0, 2, 6, 13, 0, 0, 5, 0);
    
    rect(-6, 0, 12, 2);
    
    popMatrix();
    
};

var steelspear = function(x, y, r, z, length){
    
    pushMatrix();
    
    translate(x, y);
    
    rotate(r);
    
    scale(z);
    scale(1, length || 1);
    
    noStroke();
    
    fill(194, 183, 81);
    
    (rect)(-3, -30, 6, 45, 0, 0, 5, 5);
    
    fill(90, 117, 158);
    
    rect(-3, -22, 6, 10);
    
    fill(0, 0, 0, 30);
    
    (rect)(0, -30, 3, 45, 0, 0, 5, 0);
    
    fill(180);
    
    quad(-7, -30, 0, -25, 7, -30, 0, -50);
    
    fill(0, 0, 0, 30);
    
    triangle(0, -25, 7, -30, 0, -50);
    
    popMatrix();
    
};
var pinapulammo = function(x, y, r, z){
    
    pushMatrix();
    
    translate(x, y);
    
    rotate(r);
    
    scale(z);
    
    noStroke();
    
    fill(235, 208, 54);
    rect(-10, -10, 20, 20, 5);
    
    fill(0, 0, 0, 30);
    (rect)(5, -10, 5, 20, 0, 5, 5, 0);
    
    fill(194, 172, 50);
    quad(0, -5, 5, 0, 0, 5, -5, 0);
    
    fill(104, 209, 34);
    beginShape();
    vertex(-3, 10);
    vertex(-6, 17);
    vertex(0, 15);
    vertex(6, 17);
    vertex(3, 10);
    endShape(CLOSE);
    
    fill(0, 0, 0, 30);
    quad(-3, 10, -6, 17, 0, 15, 0, 10);
    
    popMatrix();
    
};
//}Weapons
//{
var NonPirate = function(x,y,s,z){
    rectMode(CENTER);
    if(z === 1)
    {
    pushMatrix();
    translate(x,y);
    scale(s);
    translate(-100, 100);
    fill(110, 59, 14);
    (rect)(134 + sin(radians(frameCount * 2)) * 1.5, 0, 50, 30, 0, 20, 20, 20);
    (rect)(51 - sin(radians(frameCount * 2)) * 1.5, 0, 50, 30, 20, 0, 20, 20);
    translate(85, -110 + sin(radians(frameCount * 2)) * 2);
    fill(102, 219, 64);
    (rect)(0, 0, 100, 150, 0, 0, 20, 20);
    
    fill(0, 0, 0);
    rect(0,19,95,34);//belt
    noFill();
    stroke(255, 247, 0);
    strokeWeight(3);
    rect(0,19,40,34);
    noStroke();
    
    fill(212, 172, 70);
    rect(0, -142, 140, 140, 20);
    translate(0,30);
    fill(204, 157, 38);
    ellipse(-60, -50+asin(frameCount*600)*5, 40, 40);
    ellipse(60, -50, 40, 40);
    
    fill(30);
    ellipse(-30, -165, 30, 30);
    ellipse(30, -165, 30, 30);
    
    fill(2, 194, 2);
    (rect)(0, -240, 140, 60, 10, 10, 0, 0);
    
    fill(0, 220, 0);
    (rect)(40, -230, 80, 40, 20, 0, 20, 0);
    (rect)(-40, -230, 80, 40, 0, 20, 0, 20);
    
    noStroke();
        
        
        
    popMatrix();
    }
    if(z === 2)
    {
        
    pushMatrix();
    translate(x,y);
    scale(s);
    translate(-100, 100);
    
    fill(110, 59, 14);
                (rect)(80 + sin(radians(frameCount * 10)) * 25, 0, 50, 30, 20, 0, 20, 20);
        (rect)(80 - sin(radians(frameCount * 10)) * 25, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(radians(frameCount * 2)) * 2);
        fill(102, 219, 64);
        (rect)(0, 0, 100, 150, 0, 0, 20, 20);
        
        fill(0, 0, 0);
        rect(0,19,95,34);//belt
        noFill();
        stroke(255, 247, 0);
        strokeWeight(3);
        rect(-40,19,20,34);
        noStroke();
        
        fill(212, 172, 70);
        rect(0, -142, 140, 140, 20);
        translate(0,30);
        fill(204, 157, 38);
        ellipse(0+sin(radians(frameCount*5))*50, -40+asin(frameCount*600)*5, 40, 40);
        
        fill(30);
        ellipse(-45, -165, 30, 30);
        
        fill(2, 194, 2);
        (rect)(0, -240, 140, 60, 10, 10, 0, 0);
        
        fill(0, 220, 0);
        (rect)(40, -230, 80, 40, 0, 0, 20, 0);
        (rect)(-40, -230, 80, 40, 0, 0, 0, 20);
        
        noStroke();
        
        
        
    popMatrix();
    }  
    if(z === 3)
    {
        
    pushMatrix();
    translate(x,y);
    scale(s);
    scale(-1,1);
    translate(0+-155,0);
    translate(85, 100);
    fill(110, 59, 14);
                (rect)(80 + sin(radians(frameCount * 10)) * 25, 0, 50, 30, 20, 0, 20, 20);
        (rect)(80 - sin(radians(frameCount * 10)) * 25, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(radians(frameCount * 2)) * 2);
        fill(102, 219, 64);
        (rect)(0, 0, 100, 150, 0, 0, 20, 20);
        
        fill(0, 0, 0);
        rect(0,19,95,34);//belt
        noFill();
        stroke(255, 247, 0);
        strokeWeight(3);
        rect(-40,19,20,34);
        noStroke();
        
        fill(212, 172, 70);
        rect(0, -142, 140, 140, 20);
        translate(0,30);
        fill(204, 157, 38);
        ellipse(0+sin(radians(frameCount*5))*50, -40+asin(frameCount*600)*5, 40, 40);
        
        fill(30);
        ellipse(-45, -165, 30, 30);
        
        fill(2, 194, 2);
        (rect)(0, -240, 140, 60, 10, 10, 0, 0);
        
        fill(0, 220, 0);
        (rect)(40, -230, 80, 40, 0, 0, 20, 0);
        (rect)(-40, -230, 80, 40, 0, 0, 0, 20);
        
        noStroke();
        
        
        
    popMatrix();
    }
    if(z === 4){
        
    pushMatrix();
    translate(x,y);
    scale(s);
    translate(-100, 100);
    
    
        
    fill(110, 59, 14);
        (rect)(134 + sin(radians(frameCount * 2)) * 1.5, 0, 50, 30, 0, 20, 20, 20);
        (rect)(51 - sin(radians(frameCount * 2)) * 1.5, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(radians(frameCount * 2)) * 2);
        

        fill(204, 157, 38);
        ellipse(-60, -50+asin(frameCount*600)*5, 40, 40);
        ellipse(60, -50, 40, 40);
        
        fill(102, 219, 64);
        (rect)(0, 0, 100, 150, 0, 0, 20, 20);
        
        fill(0, 0, 0);
        rect(0,19,98,34);//belt
       
        
        fill(212, 172, 70);
        rect(0, -142, 140, 140, 20);
        
        
        fill(2, 194, 2);
        (rect)(0, -210, 140, 60, 10, 10, 0, 0);
        
        fill(0, 220, 0);
        (rect)(40, -200, 80, 40, 20, 0, 20, 0);
        (rect)(-40, -200, 80, 40, 0, 20, 0, 20);
        
        noStroke();
        
        
        
    popMatrix();
    }
}; // An adventurous adventurer who records his adventures. Insists he's not a pirate but constantly asks the player to fetch a pirate sword for him.
var Cyborg = function(x,y,s,z){
    rectMode(CENTER);
    if(z === 1){
    pushMatrix();
    translate(x,y);
    scale(s);
    translate(-100, 100);
    fill(110);
        (rect)(134 + sin(radians(frameCount * 2)) * 1.5, 0, 50, 30, 0, 20, 20, 20);
        (rect)(51 - sin(radians(frameCount * 2)) * 1.5, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(radians(frameCount * 2)) * 2);
        fill(116, 126, 135);
        (rect)(0, 0, 100, 150, 0, 0, 20, 20);
        
        strokeWeight(1);
        stroke(44, 60, 61);
        line(-40,-90,-30,-10);
        line(40,-90,30,-10);
        line(-35,20,-30,-10);
        line(35,20,30,-10);
        line(-35,20,-20,21);
        line(35,20,20,21);
        line(-15,74,-20,21);
        line(15,74,20,21);
        line(-40,-90,-15,-10);
        line(40,-90,15,-10);
        line(-15,-13,-10,-15);
        line(15,-13,10,-15);
        line(-15,-13,15,-15);
        line(15,-60,10,-15);
        line(-15,-60,-10,-15);
        line(-15,-60,15,-60);
        noStroke();
        fill(255, 127, 127);
        quad(-13,-58,-9,-15,9,-16,13,-58);
        fill(255, 61, 61);
        quad(-10,-55,-6,-18,6,-18,10,-55);
        
        
        noStroke();
        fill(235, 194, 91);
        rect(0, -142, 140, 140, 20);
        translate(0,20);
        fill(85, 102, 117); 
        ellipse(-60, -50, 40, 40);
        ellipse(60, -50, 40, 40);
        
        fill(149, 162, 173);
        (rect)(35, -185, 80, 100, 0, 15, 0, 15);
        
        fill(0, 0, 0);
        ellipse(-30, -165, 30, 30);
        
        fill(199, 186, 214);
        ellipse(30, -165, 40, 40);
        
        fill(240, 99, 99);
        ellipse(30, -165, 30, 30);
        
        fill(235, 194, 91);
        rect(-30, -185, 40, 20);
        
        
        noStroke();
    
    
    popMatrix();
    }
    if(z === 2){
    pushMatrix();
    translate(x,y);
    scale(s);
    translate(-100, 100);
    fill(110);
        (rect)(80 + sin(radians(frameCount * 10)) * 25, 0, 50, 30, 20, 0, 20, 20);
        (rect)(80 - sin(radians(frameCount * 10)) * 25, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(radians(frameCount * 2)) * 2);
        fill(116, 126, 135);
        (rect)(0, 0, 100, 150, 0, 0, 20, 20);
        
        fill(44, 60, 61);
        quad(-50,-60,-50,-15,-39,-14,-33,-59);
        fill(255, 127, 127);
        quad(-50,-58,-50,-15,-40,-16,-35,-58);
        fill(255, 61, 61);
        quad(-50,-55,-50,-18,-44,-18,-40,-55);
        
        strokeWeight(1);
        stroke(44, 60, 61);
        line(-20,-70,-40,-10);
        line(-20,-70,-25,-10);
        line(-20,15,-24,-10);
        line(-20,15,-35,15);
        line(-36,15,-48,55);
        noStroke();
        
        fill(235, 194, 91);
        rect(0, -142, 140, 140, 20);
        translate(0,20);
        fill(85, 102, 117); 
        ellipse(0+sin(radians(frameCount*10))*35, -25, 40, 40);
        
        fill(149, 162, 173);
        (rect)(-32, -184, 80, 100, 15, 0, 15, 0);
        
        fill(199, 186, 214);
        ellipse(-45, -170, 40, 40);
        
        fill(240, 99, 99);
        ellipse(-45, -170, 30, 30);
        
        noStroke();
    
    
    popMatrix();
    }
    if(z === 3){
    pushMatrix();
    translate(x,y);
    scale(s);
    translate(-100, 100);
    fill(110);
        (rect)(90 + sin(radians(frameCount * 10)) * 25, 0, 50, 30, 0, 20, 20, 20);
        (rect)(90 - sin(radians(frameCount * 10)) * 25, 0, 50, 30, 0, 20, 20, 20);
        translate(85, -110 + sin(radians(frameCount * 2)) * 2);
        fill(116, 126, 135);
        (rect)(0, 0, 100, 150, 0, 0, 20, 20);
                fill(149, 162, 173);
        (rect)(33, -164, 80, 100, 0, 15, 15, 0);
        
        fill(44, 60, 61);
        quad(50,-60,50,-15,39,-14,33,-59);
        fill(255, 127, 127);
        quad(50,-58,50,-15,40,-16,35,-58);
        fill(255, 61, 61);
        quad(50,-55,50,-18,44,-18,40,-55);
        
        strokeWeight(1);
        stroke(44, 60, 61);
        line(20,-70,40,-10);
        line(20,-70,25,-10);
        line(20,15,24,-10);
        line(20,15,35,15);
        line(36,15,48,55);
        noStroke();
        
        fill(235, 194, 91);
        rect(0, -142, 140, 140, 20);
        translate(0,20);
        fill(85, 102, 117); 
        ellipse(0+sin(radians(frameCount*10))*35, -25, 40, 40);
      
        fill(0, 0, 0);
        ellipse(45, -170, 30, 30);
        
         fill(235, 194, 91);
        rect(41, -190, 40, 20);
        noStroke();
    
    
    popMatrix();
    }
    if(z === 4){
    pushMatrix();
    translate(x,y);
    scale(s);
    translate(-100, 100);
    fill(110);
        (rect)(134 + sin(radians(frameCount * 2)) * 1.5, 0, 50, 30, 0, 20, 20, 20);
        (rect)(51 - sin(radians(frameCount * 2)) * 1.5, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(radians(frameCount * 2)) * 2);
        fill(116, 126, 135);
        (rect)(0, 0, 100, 150, 0, 0, 20, 20);
    
        fill(100, 101, 102);
        rect(0, -20, 80, 90, 5);
        
        strokeWeight(2);
        stroke(255, 127, 127);
        fill(255, 61, 61);
        beginShape();
        vertex(-15,-55);
        vertex(-30,-20);
        vertex(-15,15);
        vertex(15,15);
        vertex(30,-20);
        vertex(15,-55);
        vertex(-15,-55);
        endShape();
        
        
        
        noStroke();
        fill(235, 194, 91);
        rect(0, -142, 140, 140, 20);
        translate(0,20);
        fill(85, 102, 117); 
        ellipse(-60, -50, 40, 40);
        ellipse(60, -50, 40, 40);
        
        fill(149, 162, 173);
        (rect)(35, -185, 80, 100, 0, 15, 0, 15);
        
    
        
        
        
        noStroke();
    
    
    popMatrix();
    }
}; // A...well...cyborg. A guide to codelearner and not very good at not loosing his robot eye.
var Tobibular = function(x,y,s,z){
    rectMode(CENTER);
    if(z === 1){
    pushMatrix();
    translate(x,y);
    scale(s);
    translate(-100, 100);
    fill(70, 161, 13);
        (rect)(134 + sin(radians(frameCount * 2.5)) * 1.5, 0, 50, 30, 0, 20, 20, 20);
        (rect)(51 - sin(radians(frameCount * 2.5)) * 1.5, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(radians(frameCount * 2.5)) * 2);
        (rect)(0, 0, 100, 150, 0, 0, 20, 20);
        fill(80, 166, 23);
        rect(0, -142, 140, 140, 20);
        translate(0,20);
        fill(65, 135, 19);
        ellipse(-50, -30, 35, 35);
        ellipse(60, -50, 35, 35);
        
        fill(30);
        ellipse(-30, -165, 30, 30);
        ellipse(30, -165, 30, 30);
        triangle(-20, -230, 20, -230, -30, -250);
        triangle(-10, -230, 10, -230, -5, -260);
        triangle(-20, -230, 20, -230, 30, -250);
        
        stroke(30);
        strokeWeight(4);
        noFill();
        
        ellipse(30, -165, 50, 50);
        arc(55, -140, 50, 50, -radians(90), 0);
        
        noStroke();
    popMatrix();
    }
    if(z === 2){
    pushMatrix();
    translate(x,y);
    scale(s);
    translate(-100, 100);
    fill(70, 161, 13);
        (rect)(100 + sin(radians(frameCount * 2.5)) * 1.5, 0, 50, 30, 20, 0, 20, 20);
        fill(80, 184, 11);
        (rect)(65 - sin(radians(frameCount * 2.5)) * 1.5, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(radians(frameCount * 2.5)) * 2);
        fill(65, 135, 19);
        ellipse(-3+sin(radians(frameCount*-2))*60, -30+cos(radians(frameCount*-2))*6, 35, 35);
        fill(70, 161, 13);
        (rect)(0, 0, 100, 150, 0, 0, 20, 20);
        fill(80, 166, 23);
        rect(0, -142, 140, 140, 20);
        translate(0,20);
        fill(65, 135, 19);
        ellipse(-3+sin(radians(frameCount*2))*60, -30+cos(radians(frameCount*2))*6, 35, 35);

        
        fill(30);
        ellipse(-49, -165, 30, 30);
        triangle(-20, -230, 20, -230, -30, -250);
        triangle(-10, -230, 10, -230, -5, -260);
        triangle(-20, -230, 20, -230, 30, -250);
        
        stroke(30);
        strokeWeight(4);
        noFill();
        
        ellipse(-47, -165, 40, 50);
        arc(-23, -140, 25, 50, -radians(90), 0);
        
        noStroke();
    popMatrix();
    }
    if(z === 3){
    pushMatrix();
    translate(x,y);
    scale(s);
    translate(-100, 100);
    fill(70, 161, 13);
        (rect)(110 + sin(radians(frameCount * 2.5)) * 1.5, 0, 50, 30, 0, 20, 20, 20);
        fill(80, 184, 11);
        (rect)(70 - sin(radians(frameCount * 2.5)) * 1.5, 0, 50, 30, 0, 20, 20, 20);
        translate(85, -110 + sin(radians(frameCount * 2.5)) * 2);
        fill(65, 135, 19);
        ellipse(-3+sin(radians(frameCount*2))*60, -30+cos(radians(frameCount*2))*6, 35, 35);
        fill(70, 161, 13);
        (rect)(0, 0, 100, 150, 0, 0, 20, 20);
        fill(80, 166, 23);
        rect(0, -142, 140, 140, 20);
        translate(0,20);
        fill(65, 135, 19);
        ellipse(-3+sin(radians(frameCount*-2))*60, -30+cos(radians(frameCount*-2))*6, 35, 35);

        
        fill(30);
        ellipse(49, -165, 30, 30);
        triangle(-20, -230, 20, -230, -30, -250);
        triangle(-10, -230, 10, -230, -5, -260);
        triangle(-20, -230, 20, -230, 30, -250);
        

        noStroke();
    popMatrix();
    }
    if(z === 4){
    pushMatrix();
    translate(x,y);
    scale(s);
    translate(-100, 100);
    
        fill(65, 135, 19);
        ellipse(28, -131, 35, 35);
        ellipse(133, -143, 35, 35);
    
    fill(70, 161, 13);
        (rect)(134 + sin(radians(frameCount * 2.5)) * 1.5, 0, 50, 30, 0, 20, 20, 20);
        (rect)(51 - sin(radians(frameCount * 2.5)) * 1.5, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(radians(frameCount * 2.5)) * 2);
        (rect)(0, 0, 100, 150, 0, 0, 20, 20);
        fill(80, 166, 23);
        rect(0, -142, 140, 140, 20);
        translate(0,20);
        
        
        fill(30);
       
        triangle(-20, -230, 20, -230, -30, -250);
        triangle(-10, -230, 10, -230, -5, -260);
        triangle(-20, -230, 20, -230, 30, -250);
        
        stroke(30);
        strokeWeight(4);
        noFill();
     
        arc(55, -140, 50, 50, -radians(56), 0);
        
        noStroke();
    popMatrix();
    }
    
}; // The leader of the Khan Collab. Looks great with that monacle.
var Spamite = function(x, y, s,z){
    rectMode(CENTER);
    if(z === 1){
    pushMatrix();
    noStroke();
    translate(x, y);//whyyyyy
    scale(s);
    translate(0, 100);
    
    var drawSpamiteShield = function(x,y,s,r){
        pushMatrix();
        translate(x,y);
        scale(s);
        rotate(r);
        stroke(217, 181, 0);
        fill(168, 163, 163);
        strokeWeight(10);
        beginShape();
        vertex(0,0);
        vertex(200,0);
        vertex(200,200);
        vertex(100,300);
        vertex(0,200);
        endShape(CLOSE);
        
        noStroke();
        fill(148, 148, 148);
        triangle(0,-5,26,-71,52,-5);
        triangle(68,-5,101,-71,127,-5);
        triangle(143,-5,171,-71,197,-5);
        
        triangle(203,66,268,33,203,4);
        triangle(203,146,268,111,203,81);
        triangle(203,202,268,174,203,154);
        
        triangle(-5,66,-71,33,-5,4);
        triangle(-5,146,-71,111,-5,81);
        triangle(-5,202,-71,174,-5,154);
        
        triangle(-5,202,-20,262,33,241);
        triangle(41,247,22,316,86,294);
        
        triangle(203,202,227,262,167,241);
        triangle(160,247,185,316,113,294);
        
        stroke(207, 157, 131);//worm thing?
        strokeWeight(30);
        noFill();
        bezier(168,36,-149,118,353,100,56,218);
        
        
        popMatrix();
   
    };
    
    var drawSpamiteSword = function(x,y,s,r){
        pushMatrix();
        translate(x,y);
        scale(s);
        rotate(r);
        noStroke();
        fill(156, 109, 0);
        rect(0,0,150,62);
        rect(0,-43,64,100);
        ellipse(75,0,40,94);
        ellipse(-75,0,40,94);
        ellipse(0,-83,94,40);
        
        fill(201, 121, 0);
        ellipse(0,-4,50,50);
        
        fill(199, 30, 0);
        ellipse(0,-4,30,30);
        
        fill(212, 212, 212);
        rect(0,255,85,447);
        arc(0,476,85,85,0,radians(180));
        
        
        
        popMatrix();
    };
    //why is spamite so op
    //pls nerf
    
    rectMode(CENTER);
    
    fill(40);
    (rect)(40, 0, 50, 30, 0, 20, 20, 20);
    (rect)(-40, 0, 50, 30, 20, 0, 20, 20);
    
    fill(64);
    (rect)(0, -110, 100, 150, 0, 0, 20, 20);
    
    fill(120);
    quad(-65, -180, 65, -180, 55, -140, -55, -140);
    (rect)(0, -110, 110, 80, 0, 0, 20, 20);
    
    fill(189, 79, 79);
    beginShape();
    vertex(7.5, -140);
    vertex(22.5, -140);
    vertex(30, -130);
    vertex(22.5, -120);
    vertex(7.5, -120);
    vertex(0, -110);
    vertex(-17.5, -110);
    vertex(-25, -120);
    vertex(-17.5, -130);
    vertex(-25, -140);
    vertex(-17.5, -150);
    vertex(0, -150);
    endShape(CLOSE);
    
    fill(222, 84, 84);
    triangle(7.5, -140, 7.5, -120, -17.5, -130);
    
    fill(240, 220, 173);
    rect(0, -252, 140, 140, 20);
    
    fill(40);
    ellipse(-55, -110, 35, 35);
    ellipse(55, -110, 35, 35);
    
    fill(30);
    ellipse(-30, -252, 30, 30);
    ellipse(30, -252, 30, 30); // his hands are only slighty larger than his eyes
    
    fill(240, 220, 173);
    rect(0, -269, 90, 10);
    
    fill(100);
    (rect)(-70, -282, 20, 80, 0, 0, 0, 50);
    (rect)(70, -282, 20, 80, 0, 0, 50, 0);
    (rect)(0, -310, 160, 50, 20, 20, 0, 0);
    (rect)(0, -282, 20, 80, 0, 0, 50, 50);
    (rect)(0, -325, 80, 40, 10, 10, 0, 0);
    
    fill(150);
    rect(0, -310, 160, 20);
    
    fill(222, 84, 84);
    rect(0, -355, 30, 60, 10);
    
    fill(189, 79, 79);
    rect(0, -355, 20, 50, 10);
    
    drawSpamiteShield(21,-190,0.6,0);
    drawSpamiteSword(-59,-116,0.35,160);
    popMatrix();

    }
    if(z === 2){
    pushMatrix();
    noStroke();
    translate(x, y);//whyyyyy
    scale(s);
    translate(0, 100);
    
    var drawSpamiteShield = function(x,y,s,r){
        pushMatrix();
        translate(x,y);
        scale(s);
        rotate(r);
        stroke(217, 181, 0);
        fill(168, 163, 163);
        strokeWeight(10);
        beginShape();
        vertex(0,0);
        vertex(200,0);
        vertex(200,200);
        vertex(100,300);
        vertex(0,200);
        endShape(CLOSE);
        
        noStroke();
        fill(148, 148, 148);
        triangle(0,-5,26,-71,52,-5);
        triangle(68,-5,101,-71,127,-5);
        triangle(143,-5,171,-71,197,-5);
        
        triangle(203,66,268,33,203,4);
        triangle(203,146,268,111,203,81);
        triangle(203,202,268,174,203,154);
        
        triangle(-5,66,-71,33,-5,4);
        triangle(-5,146,-71,111,-5,81);
        triangle(-5,202,-71,174,-5,154);
        
        triangle(-5,202,-20,262,33,241);
        triangle(41,247,22,316,86,294);
        
        triangle(203,202,227,262,167,241);
        triangle(160,247,185,316,113,294);
        
        stroke(207, 157, 131);//worm thing?
        strokeWeight(30);
        noFill();
        bezier(168,36,-149,118,353,100,56,218);
        
        
        popMatrix();
   
    };
    var drawSpamiteSword = function(x,y,s,r){
        pushMatrix();
        translate(x,y);
        scale(s);
        rotate(r);
        noStroke();
        fill(156, 109, 0);
        rect(0,0,150,62);
        rect(0,-43,64,100);
        ellipse(75,0,40,94);
        ellipse(-75,0,40,94);
        ellipse(0,-83,94,40);
        
        fill(201, 121, 0);
        ellipse(0,-4,50,50);
        
        fill(199, 30, 0);
        ellipse(0,-4,30,30);
        
        fill(212, 212, 212);
        rect(0,255,85,447);
        arc(0,476,85,85,0,radians(180));
        
        
        
        popMatrix();
    };
    //why is spamite so op
    //pls nerf
    
    rectMode(CENTER);
    
    fill(40);
    (rect)(0-sin(radians(frameCount*5))*30, 0, 50, 30, 20, 0, 20, 20);
    (rect)(0+sin(radians(frameCount*5))*30, 0, 50, 30, 20, 0, 20, 20);
    
    drawSpamiteSword(-59,-116,0.35,160);
    
    fill(64);
    (rect)(0, -110, 100, 150, 0, 0, 20, 20);
    
    fill(240, 220, 173);
    rect(0, -252, 140, 140, 20);
    
      fill(97, 97, 97);
    (rect)(-47, -135, 15, 90, 0, 0, 20, 20);
    (rect)(47, -135, 15, 90, 0, 0, 20, 20);
    
    triangle(-45,-180,-45,-120,-5,-180);
    triangle(45,-180,45,-120,30,-180);
    
    fill(102, 102, 102);
    quad(-15, -195, 40, -195, 55, -180, -55, -180);
  
    fill(40);
    ellipse(0+sin(radians(frameCount*3))*10, -110, 35, 35);
    
    
    fill(30);
    ellipse(-45, -252, 30, 30);
    
    fill(240, 220, 173);
    rect(-10, -269, 90, 10);

    pushMatrix();
    rotate(14);
    fill(222, 84, 84);
    rect(-84, -335, 120, 60, 10);
    popMatrix();
    fill(100);
  
    (rect)(44, -282, 75, 80, 0, 0, 50, 0);
    (rect)(0, -310, 160, 50, 20, 20, 0, 0);
    (rect)(-73, -282, 15, 80, 0, 0, 0, 50);
    (rect)(0, -325, 140, 40, 10, 10, 0, 0);
        
     fill(150);
    rect(0, -310, 160, 20);
   
    
    drawSpamiteShield(-15+sin(radians(frameCount*3))*10,-190,0.6,0);
   
  popMatrix();
    
        
        
    }
    if(z === 3){
    pushMatrix();
    noStroke();
    translate(x, y);//whyyyyy
    scale(s);
    scale(-1,1);
    translate(0, 100);
    var drawSpamiteShield = function(x,y,s,r){
        pushMatrix();
        translate(x,y);
        scale(s);
        rotate(r);
        stroke(217, 181, 0);
        fill(168, 163, 163);
        strokeWeight(10);
        beginShape();
        vertex(0,0);
        vertex(200,0);
        vertex(200,200);
        vertex(100,300);
        vertex(0,200);
        endShape(CLOSE);
        
        noStroke();
        fill(148, 148, 148);
        triangle(0,-5,26,-71,52,-5);
        triangle(68,-5,101,-71,127,-5);
        triangle(143,-5,171,-71,197,-5);
        
        triangle(203,66,268,33,203,4);
        triangle(203,146,268,111,203,81);
        triangle(203,202,268,174,203,154);
        
        triangle(-5,66,-71,33,-5,4);
        triangle(-5,146,-71,111,-5,81);
        triangle(-5,202,-71,174,-5,154);
        
        triangle(-5,202,-20,262,33,241);
        triangle(41,247,22,316,86,294);
        
        triangle(203,202,227,262,167,241);
        triangle(160,247,185,316,113,294);
        
        stroke(207, 157, 131);//worm thing?
        strokeWeight(30);
        noFill();
        bezier(168,36,-149,118,353,100,56,218);
        
        
        popMatrix();
   
    };
    var drawSpamiteSword = function(x,y,s,r){
        pushMatrix();
        translate(x,y);
        scale(s);
        rotate(r);
        noStroke();
        fill(156, 109, 0);
        rect(0,0,150,62);
        rect(0,-43,64,100);
        ellipse(75,0,40,94);
        ellipse(-75,0,40,94);
        ellipse(0,-83,94,40);
        
        fill(201, 121, 0);
        ellipse(0,-4,50,50);
        
        fill(199, 30, 0);
        ellipse(0,-4,30,30);
        
        fill(212, 212, 212);
        rect(0,255,85,447);
        arc(0,476,85,85,0,radians(180));
        
        
        
        popMatrix();
    };
    //why is spamite so op
    //pls nerf
    
    rectMode(CENTER);
      
    drawSpamiteShield(-55-sin(radians(frameCount*3))*10,-190,0.6,0);
    
    noStroke();
    fill(40);
    (rect)(0-sin(radians(frameCount*5))*30, 0, 50, 30, 20, 0, 20, 20);
    (rect)(0+sin(radians(frameCount*5))*30, 0, 50, 30, 20, 0, 20, 20);
    
   
    fill(64);
    (rect)(0, -110, 100, 150, 0, 0, 20, 20);
    
    fill(240, 220, 173);
    rect(0, -252, 140, 140, 20);
    
      fill(97, 97, 97);
    (rect)(-47, -135, 15, 90, 0, 0, 20, 20);
    (rect)(47, -135, 15, 90, 0, 0, 20, 20);
    
    triangle(-45,-180,-45,-120,-5,-180);
    triangle(45,-180,45,-120,30,-180);
    
    fill(102, 102, 102);
    quad(-15, -195, 40, -195, 55, -180, -55, -180);
  
    fill(30);
    ellipse(-45, -252, 30, 30);
    
    fill(240, 220, 173);
    rect(-10, -269, 90, 10);

    pushMatrix();
    rotate(14);
    fill(222, 84, 84);
    rect(-84, -335, 120, 60, 10);
    popMatrix();
    fill(100);
  
    (rect)(44, -282, 75, 80, 0, 0, 50, 0);
    (rect)(0, -310, 160, 50, 20, 20, 0, 0);
    (rect)(-73, -282, 15, 80, 0, 0, 0, 50);
    (rect)(0, -325, 140, 40, 10, 10, 0, 0);
        
    fill(150);
    rect(0, -310, 160, 20);
   
     pushMatrix();
        translate(100,-70);
        rotate(-70);
        drawSpamiteSword(0+sin(radians(frameCount*3))*3,-125+sin(radians(frameCount*3))*10,0.35,160);
    
    popMatrix();
    
    fill(40);
    ellipse(0+sin(radians(frameCount*3))*10, -110, 35, 35);
    
  popMatrix();
    }
    if(z === 4){
    pushMatrix();
    noStroke();
    translate(x, y);//whyyyyy
    scale(s);
    translate(0, 100);
    
    var drawSpamiteShield = function(x,y,s,r){
        pushMatrix();
        translate(x,y);
        scale(s);
        rotate(r);
        stroke(217, 181, 0);
        fill(217, 181, 0);
        strokeWeight(10);
        beginShape();
        vertex(0,0);
        vertex(200,0);
        vertex(200,200);
        vertex(100,300);
        vertex(0,200);
        endShape(CLOSE);
        
        noStroke();
        fill(148, 148, 148);
        triangle(0,-5,26,-71,52,-5);
        triangle(68,-5,101,-71,127,-5);
        triangle(143,-5,171,-71,197,-5);
        
        triangle(203,66,268,33,203,4);
        triangle(203,146,268,111,203,81);
        triangle(203,202,268,174,203,154);
        
        triangle(-5,66,-71,33,-5,4);
        triangle(-5,146,-71,111,-5,81);
        triangle(-5,202,-71,174,-5,154);
        
        triangle(-5,202,-20,262,33,241);
        triangle(41,247,22,316,86,294);
        
        triangle(203,202,227,262,167,241);
        triangle(160,247,185,316,113,294);
        
        
        popMatrix();
   
    };
    
    var drawSpamiteSword = function(x,y,s,r){
        pushMatrix();
        translate(x,y);
        scale(s);
        rotate(r);
        noStroke();
        fill(156, 109, 0);
        rect(0,0,150,62);
        rect(0,-43,64,100);
        ellipse(75,0,40,94);
        ellipse(-75,0,40,94);
        ellipse(0,-83,94,40);
    
        fill(212, 212, 212);
        rect(0,255,85,447);
        arc(0,476,85,85,0,PI);
        
        
        
        popMatrix();
    };
    //why is spamite so op
    //pls nerf
    
    rectMode(CENTER);
    
    drawSpamiteShield(-130,-190,0.6,0);
    drawSpamiteSword(56,-116,0.35,205);
    
    fill(40);
    ellipse(-55, -110, 35, 35);
    ellipse(55, -110, 35, 35);
    
    fill(40);
    (rect)(40, 0, 50, 30, 0, 20, 20, 20);
    (rect)(-40, 0, 50, 30, 20, 0, 20, 20);
    
   
    fill(120);
    quad(-65, -180, 65, -180, 55, -140, -55, -140);
    (rect)(0, -110, 110, 150, 0, 0, 20, 20);
    
    fill(222, 84, 84);
    rect(0, -355, 30, 60, 10);
    
    fill(240, 220, 173);
    rect(0, -252, 140, 140, 20);

    
    fill(100);
    (rect)(0, -282, 160, 80, 0, 0, 20, 20);
    (rect)(0, -310, 160, 50, 20, 20, 0, 0);
    (rect)(0, -325, 80, 40, 10, 10, 0, 0);
    
    fill(150);
    rect(0, -310, 160, 20);
    
    
    
    
    popMatrix();

    }
    
}; // A mighty warrior with a strong personality. Attempts to not get the player killed.
var CarbonPenguin = function(x,y,s,z){
    rectMode(CENTER);
    if(z === 1){
    pushMatrix();
    translate(x,y);
    scale(s);
    translate(-100, 100);
    fill(10);
        (rect)(134 + sin(radians(frameCount * 4)) * 1.5, 0, 50, 30, 0, 20, 20, 20);
        (rect)(51 - sin(radians(frameCount * 4)) * 1.5, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(radians(frameCount * 4)) * 3);
        fill(64);
        (rect)(0, 0, 100, 150, 0, 0, 20, 20);
        
        fill(230);
        ellipse(0, -10, 70, 100);
        
        fill(224, 184, 90);
        rect(0, -142, 140, 140, 20);
        translate(0,30);
        fill(40);
        ellipse(-73, -50, 35, 35);
        ellipse(60, -30, 35, 35);
        
        fill(30);
        ellipse(-30, -165, 30, 30);
        ellipse(30, -165, 30, 30);
        
        fill(255, 255, 0);//pinapul
        ellipse(88,-29,72,111);
        fill(123, 255, 0);
        triangle(89,-86,82,-70,55,-90);
        triangle(105,-98,84,-70,87,-90);
        triangle(128,-86,96,-70,55,-90);
        
        fill(64);
        arc(0, -230, 140, 70, radians(180), radians(360));
        arc(-10, -231, 120, 40, radians(-1), PI);
        arc(60, -231, 20, 10, radians(-1), radians(180));
        
        noStroke();
    
    
    popMatrix();
    }
    if(z === 2){
    pushMatrix();
    translate(x,y);
    scale(s);
    translate(-100, 100);
    fill(10);
           (rect)(80 + sin(radians(frameCount * 10)) * 25, 0, 50, 30, 20, 0, 20, 20);
        (rect)(80 - sin(radians(frameCount * 10)) * 25, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(radians(frameCount * 4)) * 3);
        fill(64);
        (rect)(0, 0, 100, 150, 0, 0, 20, 20);
        
        fill(230);
        arc(-50, -10, 70, 100, -radians(90),radians(90));
        
        fill(224, 184, 90);
        rect(0, -142, 140, 140, 20);
        translate(0,30);
        fill(40);
        ellipse(7+sin(radians(frameCount*5))*10, -30, 35, 35);
        
        fill(30);
        ellipse(-45, -165, 30, 30);
        pushMatrix();
        translate(50-75+sin(radians(frameCount*5))*10,25-55);
        rotate(0+sin(radians(frameCount*2))*365);
        fill(255, 255, 0);//pinapul
        ellipse(0,0,72,111);
        fill(123, 255, 0);
        triangle(20,-37,10,-52,41,-76);
        triangle(2,-86,-13,-33,27,-45);
        triangle(-33,-74,-20,-40,0,-47);
        popMatrix();
        fill(64);
        arc(5, -230, 170, 70, radians(180), radians(360));
        arc(-30, -232, 100, 40, radians(-1), radians(180));
        arc(31, -231, 20, 11, radians(-1), radians(180));
        arc(65, -231, 50, 140, radians(-1), radians(80));
        arc(67, -232, 50, 140, radians(80), radians(180));
        
        noStroke();

    
    popMatrix();
    }
    if(z === 3){
    pushMatrix();
    translate(x,y);
    scale(s); 
    translate(-100, 100);
    pushMatrix();
        translate(175-75+sin(radians(frameCount*5))*10,-60-55);
        rotate(0+sin(radians(frameCount*2))*365);
        fill(255, 255, 0);//pinapul
        ellipse(0,0,72,111);
        fill(123, 255, 0);
        triangle(20,-37,10,-52,41,-76);
        triangle(2,-86,-13,-33,27,-45);
        triangle(-33,-74,-20,-40,0,-47);
        popMatrix();
    fill(10);
        (rect)(90 + sin(radians(frameCount * 10)) * 25, 0, 50, 30, 0, 20, 20, 20);
        (rect)(90 - sin(radians(frameCount * 10)) * 25, 0, 50, 30, 0, 20, 20, 20);
        translate(85, -110 + sin(radians(frameCount * 4)) * 3);
        fill(64);
        (rect)(0, 0, 100, 150, 0, 0, 20, 20);
        
        fill(230);
        arc(50, -10, 70, 100, radians(90),radians(270));
        
        fill(224, 184, 90);
        rect(0, -142, 140, 140, 20);
        translate(0,30);
        fill(40);
        ellipse(7+sin(radians(frameCount*5))*10, -30, 35, 35);
        
        fill(30);
        ellipse(45, -165, 30, 30);
       
        fill(64);
        pushMatrix();
        scale(-1,1);
        arc(5, -230, 170, 70, radians(180), radians(360));
        arc(-30, -232, 100, 40, radians(-1), radians(180));
        arc(31, -231, 20, 11, radians(-1), radians(180));
        arc(65, -231, 50, 140, radians(-1), radians(80));
        arc(67, -232, 50, 140, radians(80), radians(180));
        popMatrix();
        
        noStroke();

    
    popMatrix();
    }
    if(z === 4){
    pushMatrix();
    translate(x,y);
    scale(s);
    translate(-100, 100);
    fill(10);
        (rect)(134 + sin(radians(frameCount * 4)) * 1.5, 0, 50, 30, 0, 20, 20, 20);
        (rect)(51 - sin(radians(frameCount * 4)) * 1.5, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(radians(frameCount * 4)) * 3);
        fill(64);
        (rect)(0, 0, 100, 150, 0, 0, 20, 20);
        
       
        fill(224, 184, 90);
        rect(0, -142, 140, 140, 20);
        translate(0,30);
       
        fill(255, 255, 0);//pinapul
        ellipse(88,-29,72,111);
        fill(123, 255, 0);
        triangle(89,-86,82,-70,55,-90);
        triangle(105,-98,84,-70,87,-90);
        triangle(128,-86,96,-70,55,-90);
        
        fill(40);
        ellipse(-73, -50, 35, 35);
        ellipse(60, -30, 35, 35);
        
        fill(64);
        arc(0, -230, 140, 70, 0, radians(360));

        noStroke();
    
    
    popMatrix();
    }
}; // A penguin made of carbon and Ultimate Pinapulz of the Pineapple Empire. Makes maps and stuff.
var RandomProgrammer24 = function(x,y,s,z){
    rectMode(CENTER);
    if(z === 1){
    pushMatrix();
    translate(x, y);
    scale(s);
    translate(-100, 100);
    noStroke();
    rectMode(CENTER);
    
    fill(227, 73, 201);
    (rect)(134 + sin(radians(frameCount * 2)) * 1.5, 0, 50, 30, 0, 20, 20, 20);
    
    fill(222, 56, 56);
    (rect)(51 - sin(radians(frameCount * 2)) * 1.5, 0, 50, 30, 20, 0, 20, 20);
    
    pushMatrix();
    
    translate(85, -110 + sin(radians(frameCount * 2)) * 2);
    
    fill(226, 235, 59);
    (rect)(0, 0, 100, 150, 0, 0, 20, 20);
    
    fill(222, 56, 56);
    (rect)(-45, -160, 90, 130, 20, 0, 0, 20);
    
    fill(57, 140, 222);
    (rect)(45, -160, 90, 130, 0, 20, 20, 0);
    
    fill(250, 233, 180);
    rect(0, -142, 140, 140, 20);
    
    fill(222, 159, 57);
    (rect)(-38, -210, 76, 70, 20, 0, 0, 20);

    fill(57, 222, 90);
    (rect)(38, -210, 76, 70, 0, 20, 20, 0);
    
    fill(230, 230, 115);
    rect(0, -210, 100, 90, 20);
    
    fill(242, 250, 87);
    rect(8, -218, 72, 62, 10);
    
    fill(255, 251, 201 );
    rect(18, -227, 43, 43, 10);
    rect(-30, -190, 20, 20, 5);
    
    fill(135, 129, 105);
    quad(-55,-60,-65,65,-20,85,-45,-73);
    quad(-31,-72,-35,-60,-40,-30,-46,-73);
    quad(55,-60,65,65,20,85,45,-73);
    quad(31,-72,35,-60,40,-30,46,-73);
    
    stroke(255, 251, 235);
    strokeWeight(8);
    line(-16,20,-16,-5);
    line(-16,-16,-16,-16);
    line(-16+14,20,-16+14,-5);
    line(-16+14,-16,-16+14,-16);
    noFill();
    strokeWeight(7);
    ellipse(19,-13,18,18);
    line(11,-18,24,-35);
    noStroke();
    
    fill(232, 210, 148);
    ellipse(-60-sin(radians(frameCount*10))*15, -10, 35, 35);
    ellipse(60+sin(radians(frameCount*10))*15, -50, 35, 35);
    
    fill(30);
    ellipse(-30, -142, 30, 30);
    ellipse(30, -142, 30, 30);
    
    popMatrix();
    
    popMatrix();
}
     if(z === 2){
    pushMatrix();
    translate(x, y);
    scale(s);
    translate(-100, 100);
    noStroke();
    rectMode(CENTER);
    
    fill(227, 73, 201);
       (rect)(100 + sin(radians(frameCount * 10.0)) * 1.5, 0+ cos(frameCount * 13.0) * 4.0, 50, 30, 20, 0, 20, 20);
        fill(255, 0, 0);
        (rect)(65 - sin(radians(frameCount * 10.0)) * 1.5, 0- cos(frameCount * 13.0) * 4.0, 50, 30, 20, 0, 20, 20);
    
    pushMatrix();
    
    translate(85, -110 + sin(radians(frameCount * 30))* 2);
    
    fill(226, 235, 59);
    (rect)(0, 0, 100, 150, 0, 0, 20, 20);
    
    fill(135, 129, 105);
    quad(-4,-50,-20,-32,-35,-60,-18,-70);
    quad(50,-70,55,-55,-5,-50,-20,-70);
    quad(-15,75,-45,65,-35,-60,-15,-70);
    
    fill(255, 233, 176);
    rect(0, -142, 140, 140, 20);
    
    fill(226, 235, 59);
    rect(-40, -210, 100, 90, 20);
    
    fill(57, 140, 222);
    (rect)(45, -160, 90, 120, 20, 20, 20, 20);
    
    fill(57, 222, 90);
    (rect)(20, -202, 80, 80, 20, 20, 20, 20);


    fill(152, 28, 219);
    ellipse(0+sin(radians(frameCount*20))*40, -40+cos(radians(frameCount*20))*30, 35, 35);
    fill(27, 219, 113);
    
    
    fill(30);
    ellipse(-50, -142, 30, 30);

    
    popMatrix();
    
    popMatrix();
}
    if(z === 3){
    pushMatrix();
    translate(x, y);
    scale(s);
    translate(-100, 100);
    noStroke();
    rectMode(CENTER);
    
    fill(227, 73, 201);
       (rect)(100 + sin(radians(frameCount * 10.0)) * 1.5, 0+ cos(frameCount * 13.0) * 4.0, 50, 30, 0, 20, 20, 20);
        fill(255, 0, 0);
        (rect)(65 - sin(radians(frameCount * 10.0)) * 1.5, 0- cos(frameCount * 13.0) * 4.0, 50, 30, 0, 20, 20, 20);
    
    pushMatrix();
    
    translate(85, -110 + sin(radians(frameCount * 30)) * 2);
    
    fill(226, 235, 59);
    (rect)(0, 0, 100, 150, 0, 0, 20, 20);
    
    fill(135, 129, 105);
    quad(4,-50,20,-32,35,-60,18,-70);
    quad(-50,-70,-55,-55,5,-50,20,-70);
    quad(15,75,45,65,35,-60,15,-70);
    
    
    fill(255, 233, 176);
    rect(0, -142, 140, 140, 20);
    
    fill(226, 235, 59);
    rect(40, -210, 100, 90, 20);
    
    fill(255, 0, 0);
    (rect)(-45, -160, 90, 120, 20, 20, 20, 20);
    
    fill(222, 159, 57);
    (rect)(-20, -202, 80, 80, 20, 20, 20, 20);


    fill(27, 219, 113);
    ellipse(0-sin(radians(frameCount*20))*40, -40+cos(radians(frameCount*20))*30, 35, 35);
    fill(27, 219, 113);
    
    
    fill(30);
    ellipse(50, -142, 30, 30);

    
    popMatrix();
    
    popMatrix();
}
    if(z === 4){
    pushMatrix();
    translate(x, y);
    scale(s);
    translate(-100, 100);
    noStroke();
    rectMode(CENTER);
    
    fill(227, 73, 201);
    (rect)(134 + sin(radians(frameCount * 2)) * 1.5, 0, 50, 30, 0, 20, 20, 20);
    
    fill(222, 56, 56);
    (rect)(51 - sin(radians(frameCount * 2)) * 1.5, 0, 50, 30, 20, 0, 20, 20);
    
    pushMatrix();
    
    translate(85, -110 + sin(radians(frameCount * 2)) * 2);
    
    fill(250, 233, 180);
    rect(0, -142, 140, 140, 20);
    
    fill(222, 56, 56);
    (rect)(-45, -160, 90, 130, 20, 0, 0, 20);
    
    fill(57, 140, 222);
    (rect)(45, -160, 90, 130, 0, 20, 20, 0);
    
    
    fill(222, 159, 57);
    (rect)(-38, -210, 76, 70, 20, 0, 0, 20);

    fill(57, 222, 90);
    (rect)(38, -210, 76, 70, 0, 20, 20, 0);
    
    fill(230, 230, 115);
    rect(0, -210, 100, 90, 20);
    
    fill(232, 210, 148);
    ellipse(-60-sin(radians(frameCount*10))*15, -10, 35, 35);
    ellipse(60+sin(radians(frameCount*10))*15, -50, 35, 35);
    
    
    
    fill(135, 129, 105);
    quad(-55,-60,-65,65,-20,85,-45,-73);
    quad(-31,-72,-35,-60,-40,-30,-46,-73);
    quad(55,-60,65,65,20,85,45,-73);
    quad(31,-72,35,-60,40,-30,46,-73);
    (rect)(0, 0, 81, 147, 0, 0, 20, 20);
    quad(-47,68,-20,85,20,85,23,58);
   
    noFill();
    strokeWeight(7);
    ellipse(92,-13,18,18);
    line(11,-18,24,-35);
    noStroke();
    
    
    popMatrix();
    
    popMatrix();
}
}; // As the name implies, very random - especially when creating weapons. A good graphics artist who had the unfortunate fate of being stuck with an afro.
var Creeper = function(x,y,s,z){
    rectMode(CENTER);
    if(z === 1){
    pushMatrix();
    translate(x,y);
    scale(s);
    translate(-100, 100);
    fill(79, 171, 70);
        (rect)(134 + cos(radians(frameCount * 5)) * 1.5, 0, 50, 30, 0, 20, 20, 20);
        (rect)(51 - cos(radians(frameCount * 5)) * 1.5, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + cos(radians(frameCount * 5)) * 2);
        fill(88, 186, 77);
        rect(0, -142, 140, 140, 20);
        fill(79, 171, 70);
        (rect)(0, 0, 100, 150, 0, 0, 20, 20);
        
        fill(30);
        rect(-20,-40,20,21);
        rect(20,-40,20,21);
        rect(0,-20,20,21);
        rect(0,0,60,21);
        rect(-20,20,20,21);
        rect(20,20,20,21);
        
        noFill();
        stroke(191, 191, 191);
        ellipse(-30,-60,12,12);
        ellipse(30,-60,12,12);
        strokeWeight(7);
        stroke(43, 191, 27);
        line(30,-60,30,-10);
        line(-30,-60,-30,-20);
        noStroke();
        
        translate(0,10);
        fill(230, 205, 143);
        (rect)(0, -150, 130, 110, 10);
        ellipse(-60, -20 - sin(radians(frameCount * 2)) * 15, 40, 40);
        ellipse(60, -20 + sin(radians(frameCount * 2)) * 15, 40, 40);
        
        fill(30);
        ellipse(-30, -165, 30, 30);
        ellipse(30, -165, 30, 30);
    
    
    popMatrix();
    }
    if(z === 2){
    pushMatrix();
    translate(x,y);
    scale(s);
    translate(-100, 100);
    fill(79, 171, 70);
       (rect)(80 + sin(radians(frameCount * 10)) * 25, 0, 50, 30, 20, 0, 20, 20);
        (rect)(80 - sin(radians(frameCount * 10)) * 25, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + cos(radians(frameCount * 5)) * 2);
        fill(88, 186, 77);
        rect(0, -142, 140, 140, 20);
        fill(79, 171, 70);
        (rect)(0, 0, 100, 150, 0, 0, 20, 20);
        
        fill(0, 0, 0);
        rect(-25,-40,20,21);
        rect(-42,-20,15,21);
        rect(-35,0,30,21);
        rect(-30,20,20,21);
        
         noFill();
        stroke(191, 191, 191);
        ellipse(-40,-60,6,12);
        strokeWeight(7);
        stroke(41, 222, 24);
        line(-40,-60,-40,-10);
        noStroke();
        
        translate(0,10);
        fill(230, 205, 143);
        (rect)(-36, -145, 70, 115, 0,30,30,10);
        ellipse(0 + sin(radians(frameCount * 2)) * 30, -20 + sin(frameCount * 2) * 15, 40, 40);
        
        fill(30);
        ellipse(-50, -165, 30, 30);
    
    
    popMatrix();
    }    
    if(z === 3){
        
    pushMatrix();
    translate(x,y);
    scale(s);
    translate(-85, 100);
    scale(-1,1);
    translate(0+-155,0);
    fill(79, 171, 70);
        (rect)(80 + sin(radians(frameCount * 10)) * 25, 0, 50, 30, 20, 0, 20, 20);
        (rect)(80 - sin(radians(frameCount * 10)) * 25, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + cos(radians(frameCount * 5)) * 2);
        fill(88, 186, 77);
        rect(0, -142, 140, 140, 20);
        fill(79, 171, 70);
        (rect)(0, 0, 100, 150, 0, 0, 20, 20);
        
        fill(0, 0, 0);
        rect(-25,-40,20,21);
        rect(-42,-20,15,21);
        rect(-35,0,30,21);
        rect(-30,20,20,21);
        
        noFill();
        stroke(191, 191, 191);
        ellipse(-40,-60,6,12);
        strokeWeight(7);
        stroke(41, 222, 24);
        line(-40,-60,-40,-20);
        noStroke();
        
        translate(0,10);
        fill(230, 205, 143);
        (rect)(-36, -145, 70, 115, 0,30,30,10);
        ellipse(0 + sin(radians(frameCount * 2)) * 30, -20 + sin(frameCount * 2) * 15, 40, 40);
        
        fill(30);
        ellipse(-50, -165, 30, 30);
    
    
    popMatrix();
    }
    if(z === 4){
    pushMatrix();
    translate(x,y);
    scale(s);
    translate(-100, 100);
    
        
    
    fill(79, 171, 70);
        (rect)(134 + cos(radians(frameCount * 5)) * 1.5, 0, 50, 30, 0, 20, 20, 20);
        (rect)(51 - cos(radians(frameCount * 5)) * 1.5, 0, 50, 30, 20, 0, 20, 20);
        
        translate(85, -110 + cos(radians(frameCount * 5)) * 2);
        translate(0,10);
        fill(230, 205, 143);
        ellipse(-60, -20 - sin(radians(frameCount * 2)) * 15, 40, 40);
        ellipse(60, -20 + sin(radians(frameCount * 2)) * 15, 40, 40);
        fill(88, 186, 77);
        rect(0, -142, 140, 140, 20);
        fill(79, 171, 70);
        (rect)(0, 0, 100, 150, 0, 0, 20, 20);
       
        
        
     
    
    
    popMatrix();
    }
}; // A member of the creeper clan and a master beast tamer. Likes explosions, obviously.
var WyattMatthews = function(x,y,s,z){
    rectMode(CENTER);
    if(z === 1){
    pushMatrix();
    translate(x,y);
    scale(s);
    translate(-100, 100);
    fill(41, 41, 41);
        (rect)(134 + sin(radians(frameCount * 2)) * 1.5, 0, 50, 30, 0, 20, 20, 20);
        (rect)(51 - sin(radians(frameCount * 2)) * 1.5, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(radians(frameCount * 2)) * 2);
        fill(0, 0, 0);
        (rect)(0, 0, 100, 150, 0, 0, 20, 20);
        
        pushMatrix();
        translate(0,20);
         stroke(181, 132, 9);
        strokeWeight(14);
        line(40,48,-46,-80);
        line(-40,48,46,-79);
        noStroke();
        fill(97, 63, 3);
        triangle(-40,-90,-90,-105,0,-20);
        triangle(40,-90,90,-105,0,-20);
        fill(166, 113, 8);
        triangle(-40,-90,-90,-105,-15,-40);
        triangle(40,-90,90,-105,15,-40);
        popMatrix();
        
        fill(0, 0, 0);
        rect(0, -142, 140, 140, 20);
        translate(0,20);
        fill(41, 41, 41);
        ellipse(-60, -50, 40, 40);
        ellipse(60, -50, 40, 40);
        
         
        fill(89, 88, 89);
        rect(0,-163,139,49);
        
        fill(0, 0, 0);
        ellipse(-30, -165, 30, 30);
        
        ellipse(30, -165, 30, 30);
        
        fill(0, 0, 0);
        ellipse(0, -200, 112, 37);
        rect(-65,-165,10,55);
        rect(65,-165,10,55);
        noStroke();
    
      fill(0, 0, 0);
        triangle(-60,-139,-60,-155,0,-139);
        triangle(60,-139,60,-155,0,-139);
       
    popMatrix();
    }
    if(z === 2){
    pushMatrix();
    translate(x,y);
    scale(s);
    translate(-100, 100);
    fill(41, 41, 41);
         (rect)(80 + sin(radians(frameCount * 10)) * 25, 0, 50, 30, 20, 0, 20, 20);
        (rect)(80 - sin(radians(frameCount * 10)) * 25, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(radians(frameCount * 2)) * 2);
        fill(0, 0, 0);
        (rect)(0, 0, 100, 150, 0, 0, 20, 20);
        
        fill(0, 0, 0);
        rect(0, -142, 140, 140, 20);
        translate(0,20);
         
        fill(89, 88, 89);
        rect(0,-163,139,49);
        
        fill(0, 0, 0);
        ellipse(-45, -165, 30, 30);

        
        fill(0, 0, 0);
        ellipse(0, -200, 112, 37);
        rect(50,-165,40,55);
        noStroke();
        
        noStroke();     
        fill(166, 113, 8);
        triangle(13,-115,-30,-75,30,-75);
        triangle(50,-55,50,-75,14,-90);
        triangle(65,-87,50,-75,15,-90);
        
        triangle(-50,40,-50,-5,-30,-75);
        triangle(-40,-20,-10,-75,-30,-75);
        
        fill(97, 63, 3);
        triangle(8,-100,25,-75,-25,-75);
        triangle(-35,-25,-10,-75,-25,-75);

        
        fill(0, 0, 0);
        triangle(30,-139,30,-155,-60,-139);
       
         fill(41, 41, 41);
        ellipse(0+sin(radians(frameCount*2))*40, -20, 40, 40);

        
       
    popMatrix();
    }
    if(z === 3){
    pushMatrix();
    translate(x,y);
    scale(s);
    translate(-85, 100);
    scale(-1,1);
     translate(0+-155,0);
    fill(41, 41, 41);
         (rect)(80 + sin(radians(frameCount * 10)) * 25, 0, 50, 30, 20, 0, 20, 20);
        (rect)(80 - sin(radians(frameCount * 10)) * 25, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(radians(frameCount * 2)) * 2);
        fill(0, 0, 0);
        (rect)(0, 0, 100, 150, 0, 0, 20, 20);
        
        fill(0, 0, 0);
        rect(0, -142, 140, 140, 20);
        translate(0,20);
         
        fill(89, 88, 89);
        rect(0,-163,139,49);
        
        fill(0, 0, 0);
        ellipse(-45, -165, 30, 30);

        
        fill(0, 0, 0);
        ellipse(0, -200, 112, 37);
        rect(50,-165,40,55);
        noStroke();
        
        noStroke();     
        fill(166, 113, 8);
        triangle(13,-115,-30,-75,30,-75);
        triangle(50,-55,50,-75,14,-90);
        triangle(65,-87,50,-75,15,-90);
        
        triangle(-50,40,-50,-5,-30,-75);
        triangle(-40,-20,-10,-75,-30,-75);
        
        fill(97, 63, 3);
        triangle(8,-100,25,-75,-25,-75);
        triangle(-35,-25,-10,-75,-25,-75);

        
        fill(0, 0, 0);
        triangle(30,-139,30,-155,-60,-139);
       
         fill(41, 41, 41);
        ellipse(0+sin(radians(frameCount*2))*40, -20, 40, 40);

        
       
    popMatrix();
    }
    if(z === 4){
    pushMatrix();
    translate(x,y);
    scale(s);
    translate(-100, 100);
    fill(41, 41, 41);
        (rect)(134 + sin(radians(frameCount * 2)) * 1.5, 0, 50, 30, 0, 20, 20, 20);
        (rect)(51 - sin(radians(frameCount * 2)) * 1.5, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(radians(frameCount * 2)) * 2);
        
        pushMatrix();
        translate(0,20);
        fill(97, 63, 3);
        triangle(-40,-90,-90,-105,0,-20);
        triangle(40,-90,90,-105,0,-20);
        fill(166, 113, 8);
        triangle(-40,-90,-90,-105,-15,-40);
        triangle(40,-90,90,-105,15,-40);
        popMatrix();
        
        fill(41, 41, 41);
        ellipse(-60, -20, 40, 40);
        ellipse(60, -20, 40, 40);
        
        fill(0, 0, 0);
        (rect)(0, 0, 100, 150, 0, 0, 20, 20);
        
        
       
        
        fill(0, 0, 0);
        rect(0, -142, 140, 140, 20);
        
        translate(0,20);
        

        noStroke();
    
      fill(0, 0, 0);
        triangle(-60,-139,-60,-155,0,-139);
        triangle(60,-139,60,-155,0,-139);
       
    popMatrix();
    }
    
}; // A learning student who you find and need to train. You run into him in the Frozen Flats.
var Xacer = function(x,y,s,z){
        rectMode(CENTER);
      if(z === 1){      
            pushMatrix();
                
                translate(x,y);
                scale(s);
    translate(-100, 100);
                rectMode(CENTER);
                
                fill(32);
                
                (rect)(139, 0, 50, 30, 0, 20, 20, 20);
                (rect)(44, 0, 50, 30, 20, 0, 20, 20);
                
                pushMatrix();
                
                translate(83, -110 + sin(radians(frameCount * 1.5)) * 2);//THANK YOU RP24
                
                fill(250);
                (rect)(0, 0, 100, 150, 0, 0, 20, 20);
                
                fill(230);
                (rect)(-25, 0, 50, 150, 0, 0, 0, 25);
                
                fill(73, 18, 107);
                quad(52, -70, 5, -60, -10, 50, 58, 60);
                
                fill(50, 2, 79);
                quad(-52, -70, 5, -60, 10, 50, -58, 60);
                
                fill(186, 150, 7);
                ellipse(-5, -30, 10, 10);
                ellipse(-5, 30, 10, 10);
                
                fill(247, 201, 108);
                rect(0, -142, 140, 140, 20);
                ellipse(-30, sin(radians(frameCount)) * 2, 35, 35);
                ellipse(80, -20 + sin(radians(frameCount)) * 2, 35, 35);
                
                fill(30);
                ellipse(-30, -142, 30, 30);
                ellipse(30, -142, 30, 30);
                
                fill(40);
                triangle(-70, -180, -80, -218, 20, -212);
                triangle(70, -180, 80, -216, -10, -212);
                triangle(-60, -212, -20, -212, -55, -230);
                triangle(-40, -212, 20, -212, -30, -235);
                triangle(-5, -212, 8, -212, -3, -240);
                triangle(0, -212, 60, -212, 50, -230);
                triangle(0, -212, 20, -212, 20, -250);
                triangle(10, -212, 30, -212, 32, -240);
                triangle(0, -212, 15, -212, 0, -190);
                triangle(0, -212, 18, -212, 20, -180);
                
                fill(247, 201, 108);
                
                popMatrix();
                
                popMatrix();
      }
      if(z === 2){      
 pushMatrix();
                
                translate(x,y);
                scale(s);
    translate(-100, 100);
                rectMode(CENTER);
                
                fill(32);
                
                (rect)(85+sin(radians(frameCount*4))*20, 0, 50, 30, 20, 0, 20, 20);
                (rect)(85-sin(radians(frameCount*4))*20, 0, 50, 30, 20, 0, 20, 20);
                
                pushMatrix();
                
                translate(83, -110 + sin(radians(frameCount * 1.5)) * 2);
                
                fill(255, 255, 255);
                (rect)(0, 0, 100, 150, 0, 0, 20, 20);
                
                fill(230);
                (rect)(-25, 0, 25, 150, 0, 0, 0, 25);
                
                fill(73, 18, 107);
                quad(50, -70, -40, -52, -40, 50, 58, 60);
                
                fill(50, 2, 79);
                quad(10, -60, -40, -52, -40, 50, 0, 52);
                
                fill(186, 150, 7);
                ellipse(-25, -30, 10, 10);
                ellipse(-25, 30, 10, 10);
                
                fill(247, 201, 108);
                rect(0, -142, 140, 140, 20);
                ellipse(-0+sin(radians(frameCount*3)) * 20, sin(frameCount) * 2, 35, 35);
                
                fill(0, 0, 0);
                ellipse(-45, -142, 30, 30);
                
                fill(40);
                triangle(-70, -180, -80, -218, 20, -212);
                triangle(70, -144, 80, -216, -5, -212);
                triangle(-60, -212, -20, -213, -55, -230);
                triangle(-40, -212, 20, -212, -30, -235);
                triangle(-5, -212, 8, -212, -3, -240);
                triangle(0, -212, 60, -212, 60, -230);
                triangle(0, -212, 20, -212, 0, -250);
                triangle(10, -212, 30, -212, 23, -240);
                triangle(40, -173, -50, -190, 0, -215);         

                popMatrix();
                
                popMatrix();
      }
      if(z === 3){      
 pushMatrix();
                
                translate(x,y);
                scale(s);
    translate(-85, 100);
                rectMode(CENTER);
                scale(-1,1);
     translate(0+-155,0);
                fill(32);
                
                (rect)(85+sin(radians(frameCount*4))*20, 0, 50, 30, 20, 0, 20, 20);
                (rect)(85-sin(radians(frameCount*4))*20, 0, 50, 30, 20, 0, 20, 20);
                
                pushMatrix();
                
                translate(83, -110 + sin(radians(frameCount * 1.5)) * 2);
                
                fill(255, 255, 255);
                (rect)(0, 0, 100, 150, 0, 0, 20, 20);
                
                fill(230);
                (rect)(-25, 0, 25, 150, 0, 0, 0, 25);
                
                fill(73, 18, 107);
                quad(50, -70, -40, -52, -40, 50, 58, 60);
                
                fill(50, 2, 79);
                quad(10, -60, -40, -52, -40, 50, 0, 52);
                
                fill(186, 150, 7);
                ellipse(-25, -30, 10, 10);
                ellipse(-25, 30, 10, 10);
                
                fill(247, 201, 108);
                rect(0, -142, 140, 140, 20);
                ellipse(-0+sin(radians(frameCount*3)) * 20, sin(frameCount) * 2, 35, 35);
                
                fill(0, 0, 0);
                ellipse(-45, -142, 30, 30);
                
                fill(40);
             fill(40);
                triangle(-70, -180, -80, -218, 20, -212);
                triangle(70, -144, 80, -216, -5, -212);
                triangle(-60, -212, -20, -213, -55, -230);
                triangle(-40, -212, 20, -212, -30, -235);
                triangle(-5, -212, 8, -212, -3, -240);
                triangle(0, -212, 60, -212, 60, -230);
                triangle(0, -212, 20, -212, 0, -250);
                triangle(10, -212, 30, -212, 23, -240);
                triangle(40, -173, -50, -190, 0, -215);  

                popMatrix();
                
                popMatrix();
      }
      if(z === 4){      
 pushMatrix();
                
                translate(x,y);
                scale(s);
    translate(-100, 100);
                rectMode(CENTER);
                
                fill(32);
                
                (rect)(139, 0, 50, 30, 0, 20, 20, 20);
                (rect)(44, 0, 50, 30, 20, 0, 20, 20);
                
                pushMatrix();
                
                translate(83, -110 + sin(radians(frameCount * 1.5)) * 2);//THANK YOU RP24
                
                fill(247, 201, 108);
                
                ellipse(-82, sin(radians(frameCount)) * 2, 35, 35);
                ellipse(80, -20 + sin(radians(frameCount)) * 2, 35, 35);
                
                fill(230);
                (rect)(0, 0, 100, 150, 0, 0, 20, 20);
                
                fill(250);
                (rect)(-25, 0, 50, 150, 0, 0, 0, 25);
                
                fill(50, 2, 79);
                quad(52, -70, 5, -60, -10, 50, 58, 60);
                
                fill(73, 18, 107);
                quad(-52, -70, 5, -60, 10, 50, -58, 60);
                
                
                fill(247, 201, 108);
                rect(0, -142, 140, 140, 20);
                
                
                fill(40);
                triangle(-70, -180, -80, -218, 20, -212);
                triangle(70, -180, 80, -216, -10, -212);
                triangle(-60, -212, -20, -212, -55, -230);
                triangle(-40, -212, 20, -212, -30, -235);
                triangle(-5, -212, 8, -212, -3, -240);
                triangle(0, -212, 60, -212, 50, -230);
                triangle(0, -212, 20, -212, 20, -250);
                triangle(10, -212, 30, -212, 32, -240);
                rect(0,-195,134,29);
                
                fill(247, 201, 108);
                
                popMatrix();
                
                popMatrix();
      }
}; // An AI maker and guard. Viruses better beware, or they might end up getting rekt.
var AnthonyMullan = function(x,y,s,z, sword){
    textAlign(CORNER,CORNER);
    noStroke();
    smooth();
    var drawSword = function(x,y,s,r) {
        rectMode(CORNER);
        pushMatrix();
        translate(x,y);
        scale(s);
        rotate(r);
        translate(0,-30);
        {
        fill(117, 117, 117);
        rect(-1,0,2,158);
        fill(69, 73, 133);
        rect(0,6,3,21);
        fill(91, 81, 153);
        rect(-3,6,3,21);
        fill(207, 189, 85);
        arc(1,0,10,10,radians(-90),radians(90));
        fill(224, 206, 90);
        arc(-1,0,10,10,radians(90),radians(270));
        strokeWeight(3);
        stroke(207, 189, 85);
        line(-5,5,5,5);
        noStroke();
        strokeCap(SQUARE);
        fill(84, 119, 161);
        ellipse(0,1,6,6);
        }//Handle
        {
        noFill();
        stroke(161, 161, 161);
        arc(14,35,16,10,radians(-180),radians(-90));
        stroke(184, 184, 184);
        arc(-14,35,16,10,radians(-90),0);
        noStroke();
        fill(184);
        quad(-7.5,35,0,23.5,0,150,-4,150);
        triangle(0,165,0,140,-4,150);
        pushMatrix();
        fill(161);
        scale(-1,1);
        quad(-7.5,35,0,23.5,0,150,-4,150);
        triangle(0,165,0,140,-4,150);
        popMatrix();
        fill(91, 81, 153);
        rect(0,29,14,2);
        fill(109, 99, 176);
        rect(-14,29,14,2);
        noFill();
        strokeWeight(2);
        stroke(109, 99, 176);
        arc(-8,35,10,10,radians(-90),0);
        stroke(91, 81, 153);
        arc(8,35,10,10,radians(-180),radians(-90));
        noStroke();
        fill(91, 81, 153);
        rect(0,30,4,4.5);
        triangle(4.2,34,0,33,0,57);
        fill(109, 99, 176);
        rect(-4,30,4,4.5);
        triangle(-4.2,34,0,33,0,57);
        }//Blade
        {
        stroke(207, 189, 85);
        noFill();
        strokeWeight(3);
        arc(0,37,40,20,radians(-90),0);
        stroke(224, 206, 90);
        arc(0,37,40,20,radians(-180),radians(-90));
        strokeCap(ROUND);
        noStroke();
        fill(224, 206, 90);
        triangle(-21,37.2,-20,34.2,-13,37.2);
        quad(0,24,0,30,-7,29,-7,26.1);
        pushMatrix();
        scale(-1.03,1);
        fill(207, 189, 85);
        quad(0,24,0,30,-7,29,-7,26.1);
        triangle(-21,37.2,-20,34.2,-13,37.2);
        popMatrix();
        }//Hilt
        popMatrix();
        rectMode(CENTER);
    };
    if(z === 1){
    pushMatrix();
    translate(x, y);
    scale(s);
    translate(-100, 100);
    rectMode(CENTER);
    
    fill(0, 0, 0);
    (rect)(134 + sin(radians(frameCount * 2)) * 1.5, 0, 50, 30, 0, 20, 20, 20);
    (rect)(42 - sin(radians(frameCount * 2)) * 1.5, 0, 50, 30, 20, 0, 20, 20);
    
    pushMatrix();
    
    translate(87, -110 + sin(radians(frameCount * 2)) * 2);
    if(sword){drawSword(80,-70,1.9,55);}
    fill(130, 65, 0);
    rect(0,77,70,20);
    fill(162);
    (rect)(0, 0, 100, 150, 0, 0, 20, 20);
    
    fill(232, 232, 232);
    (rect)(0, -25, 100, 100);
    fill(0);
    rect(-17,-40,2,20);
    rect(-17,-50,10,1);
    rect(-17,-30,10,1);
    textSize(20);
    text("AUS",-20,0);
    pushMatrix();
    translate(28,-3);
    fill(255, 0, 0);
    ellipse(-1,-40,18,20);
    ellipse(-14,-40,18,20);
    pushMatrix();
    translate(-7.5,-35);
    rotate(45);
    rect(0,0,20,20);
    popMatrix();
    popMatrix();
    pushMatrix();
    translate(0,-4);
    fill(158, 82, 0);
    rect(-40,10,30,165,5);
    rect(40,10,30,165,5);
    quad(15,80,25,37,28,92.5,15,93);
    pushMatrix();
    scale(-1,1);
    triangle(25,37,28,92.5,15,93);
    popMatrix();
    fill(191, 96, 0);
    beginShape();
    vertex(45,-60);
    vertex(45,-75);
    vertex(25,-75);
    vertex(25,40);
    vertex(47,-50);
    vertex(35,-51);
    endShape();
    pushMatrix();
    scale(-1,1);
    beginShape();
    vertex(45,-60);
    vertex(45,-75);
    vertex(25,-75);
    vertex(25,40);
    vertex(47,-50);
    vertex(35,-51);
    endShape();
    popMatrix();
    popMatrix();
    fill(255, 233, 176);
    rect(0, -142, 140, 140, 20);
    if(!sword){drawSword(-80,-40,1.9,155);}
    fill(133, 55, 0);
    for(var i = 0; i < 75; i+=25){
        arc(-55,10+i,10,10,radians(-90),radians(90));
        arc(55,10+i,10,10,radians(90),radians(270));
    }
    fill(255, 233, 176);
    ellipse(-70, -10, 35, 35);
    ellipse(70, 0, 35, 35);
    fill(46, 10, 0);
    pushMatrix();
    translate(0,-145);
    beginShape();
    vertex(32, -40);
    vertex(12, -35);
    vertex(-7, -32);
    vertex(-17, -22);
    vertex(-27, -28);
    vertex(-38, -27);
    vertex(-54, -32);
    vertex(-69, -9);
    vertex(-75, -39);
    vertex(-67, -66);
    vertex(-35, -72);
    vertex(20, -73);
    vertex(63, -71);
    vertex(73, -41);
    vertex(70, -15);
    vertex(46, -35);
    endShape(CLOSE);
    popMatrix();
    fill(0, 0, 0);
    ellipse(-30, -142, 30, 30);
    ellipse(30, -142, 30, 30);
    fill(255, 233, 176);
    pushMatrix();
    translate(-56,-2);
    rotate(10);
    rect(0,-156,25,6);
    popMatrix();
    pushMatrix();
    translate(56,-2);
    rotate(-10);
    rect(0,-156,25,6);
    popMatrix();
    popMatrix();
    popMatrix();
    textAlign(CENTER,CENTER);
    }
     if(z === 2){
    pushMatrix();
    translate(x, y);
    scale(s);
    translate(-100, 100);
    rectMode(CENTER);
    
    fill(0, 0, 0);
    (rect)(90 + sin(radians(frameCount * 10)) * 30, 0, 50, 30, 20, 0, 20, 20);
    (rect)(90 - sin(radians(frameCount * 10)) * 30, 0, 50, 30, 20, 0, 20, 20);
    
    pushMatrix();
    
    translate(87, -110 + sin(radians(frameCount * 2)) * 2);
    if(sword){drawSword(80,-70,1.9,55);}
    fill(130, 65, 0);
    rect(0,77,70,20);
    fill(162);
    (rect)(0, 0, 100, 150, 0, 0, 20, 20);
    
    fill(232, 232, 232);
    (rect)(0, -25, 100, 100);
    
    pushMatrix();
    translate(0,-4);
    fill(158, 82, 0);
    rect(15,10,80,165,5);
    quad(15,80,25,37,28,92.5,15,93);
    pushMatrix();
    scale(-1,1);

    popMatrix();
    fill(191, 96, 0);
    beginShape();
    vertex(10,-65);
    vertex(-25,-75);
    vertex(-25,-75);
    vertex(-25,40);
    vertex(5,-50);
    vertex(-25,-51);
    endShape();
    
    popMatrix();
    fill(255, 233, 176);
    rect(0, -142, 140, 140, 20);
    
    fill(46, 10, 0);
    pushMatrix();
    translate(0,-145);
    beginShape();
    vertex(0, -40);
    vertex(-25, -35);
    vertex(-47, -32);
    vertex(-70, -22);
    vertex(-72, -28);
    vertex(-69, -40);
    vertex(-69, -39);
    vertex(-65, -65);
    vertex(-32, -72);
    vertex(20, -73);
    vertex(63, -71);
    vertex(73, -41);
    vertex(70, -15);
    vertex(46, -35);
    endShape(CLOSE);
    popMatrix();
    fill(0, 0, 0);
    ellipse(-45, -142, 30, 30);

    fill(255, 233, 176);
    pushMatrix();
    translate(-56,-2);
    rotate(10);
 
    popMatrix();
    pushMatrix();
    translate(-25,-2);
    rotate(-10);
    rect(0,-156,25,6);
    popMatrix();
    if(!sword){drawSword(-15+sin(frameCount*10)*40,-40,1.9,155);}
    fill(255, 233, 176);
    ellipse(0+sin(frameCount*10)*40, -10, 35, 35);
    popMatrix();
    popMatrix();
    textAlign(CENTER,CENTER);
    }
     if(z === 3){
    pushMatrix();
    translate(x, y);
    scale(s);
    translate(-85, 100);
    scale(-1,1);
    translate(0+-155,0);
    rectMode(CENTER);
    
    fill(0, 0, 0);
    (rect)(90 + sin(radians(frameCount * 10)) * 30, 0, 50, 30, 20, 0, 20, 20);
    (rect)(90 - sin(radians(frameCount * 10)) * 30, 0, 50, 30, 20, 0, 20, 20);
    
    pushMatrix();
    
    translate(87, -110 + sin(radians(frameCount * 2)) * 2);
    if(!sword){drawSword(-15-sin(radians(frameCount*10))*40,-40,1.9,155);}
    fill(255, 233, 176);
    ellipse(0+sin(frameCount*10)*40, -10, 35, 35);
    fill(130, 65, 0);
    rect(0,77,70,20);
    fill(162);
    (rect)(0, 0, 100, 150, 0, 0, 20, 20);
    
    fill(232, 232, 232);
    (rect)(0, -25, 100, 100);
    
    pushMatrix();
    translate(0,-4);
    fill(158, 82, 0);
    rect(15,10,80,165,5);
    quad(15,80,25,37,28,92.5,15,93);
    pushMatrix();
    scale(-1,1);

    popMatrix();
    fill(191, 96, 0);
    beginShape();
    vertex(10,-65);
    vertex(-25,-75);
    vertex(-25,-75);
    vertex(-25,40);
    vertex(5,-50);
    vertex(-25,-51);
    endShape();
    
    popMatrix();
    fill(255, 233, 176);
    rect(0, -142, 140, 140, 20);
    fill(255, 233, 176);
    ellipse(0+sin(radians(frameCount*10))*40, -10, 35, 35);
    fill(46, 10, 0);
    pushMatrix();
    translate(0,-145);
    beginShape();
    vertex(0, -40);
    vertex(-25, -35);
    vertex(-47, -32);
    vertex(-70, -22);
    vertex(-72, -28);
    vertex(-69, -40);
    vertex(-69, -39);
    vertex(-65, -65);
    vertex(-32, -72);
    vertex(20, -73);
    vertex(63, -71);
    vertex(73, -41);
    vertex(70, -15);
    vertex(46, -35);
    endShape(CLOSE);
    popMatrix();
    fill(0, 0, 0);
    ellipse(-45, -142, 30, 30);

    fill(255, 233, 176);
    pushMatrix();
    translate(-56,-2);
    rotate(10);
 
    popMatrix();
    pushMatrix();
    translate(-25,-2);
    rotate(-10);
    rect(0,-156,25,6);
    popMatrix();
    popMatrix();
    popMatrix();
    textAlign(CENTER,CENTER);
    }
    if(z === 4){
     pushMatrix();
    translate(x, y);
    scale(s);
    translate(-100, 100);
    rectMode(CENTER);
    
    fill(0, 0, 0);
    (rect)(134 + sin(radians(frameCount * 2)) * 1.5, 0, 50, 30, 0, 20, 20, 20);
    (rect)(42 - sin(radians(frameCount * 2)) * 1.5, 0, 50, 30, 20, 0, 20, 20);
    
    
    pushMatrix();
    
    translate(87, -110 + sin(radians(frameCount * 2)) * 2);
    
  
    
    pushMatrix();
    translate(0,-4);
    fill(158, 82, 0);
    rect(0,10,100,165,5);
    popMatrix();
    fill(255, 233, 176);
    rect(0, -142, 140, 140, 20);
    if(!sword){drawSword(87,-40,1.9,200);}

    fill(255, 233, 176);
    ellipse(-70, -10, 35, 35);
    ellipse(70, 0, 35, 35);
    fill(46, 10, 0);
    pushMatrix();
    translate(0,-145);
    beginShape();
    vertex(32, -19);
    vertex(12, -19);
    vertex(-7, -17);
    vertex(-17, -22);
    vertex(-27, -10);
    vertex(-45, -14);
    vertex(-54, -20);
    vertex(-70, 0);
    vertex(-75, -24);
    vertex(-67, -66);
    vertex(-35, -72);
    vertex(20, -73);
    vertex(63, -71);
    vertex(73, -41);
    vertex(70, -4);
    vertex(46, -15);
    endShape(CLOSE);
    popMatrix();

    fill(255, 233, 176);
    pushMatrix();
    translate(-56,-2);
    rotate(10);
    rect(0,-156,25,6);
    popMatrix();
    pushMatrix();
    translate(56,-2);
    rotate(-10);
    rect(0,-156,25,6);
    popMatrix();
    if(sword){drawSword(80,-70,1.9,55);}
    popMatrix();
    popMatrix();
    textAlign(CENTER,CENTER);
    }
    
}; // A wandering warrior who convenientely runs into you at the perfect time to save you in the Desert of Despair.
var Legowar = function(x, y, s, z){
    rectMode(CENTER);
    if(z === 1){
    pushMatrix();
    noStroke();
    translate(x, y);
    scale(s);
    translate(0, 100);
    
    rectMode(CENTER);
    
    fill(94, 67, 50);
    (rect)(40, 0, 50, 30, 0, 20, 20, 20);
    (rect)(-40, 0, 50, 30, 20, 0, 20, 20);
    
    fill(58, 176, 168);
    (rect)(0, -110, 100, 150, 0, 0, 20, 20);
    
    
    fill(39, 140, 132);
    (rect)(25, -110, 50, 150, 0, 0, 20, 0);
    
    fill(242, 46, 46);
    rect(0, -116, 40, 60);
    
    fill(255, 79, 79);
    ellipse(9, -118, 15, 15);
    ellipse(9, -138, 15, 15);
    ellipse(9, -98, 15, 15);
    ellipse(-9, -118, 15, 15);
    ellipse(-9, -138, 15, 15);
    ellipse(-9, -98, 15, 15);
    
    strokeWeight(13);
    stroke(5, 120, 101);
    arc(0,-183,60,30,0,PI);
    noStroke();
    
    fill(242, 206, 128);
    rect(0, -252, 140, 140, 20);
    ellipse(-55, -110, 35, 35);
    ellipse(55, -110, 35, 35);
    fill(209, 178, 111);
    arc(0,-183,60,30,0,PI);
    
 
    fill(235, 224, 103);
    beginShape();
    vertex(-70, -290);
    vertex(-80, -340);
    vertex(-40, -330);
    vertex(-50, -350);
    vertex(-10, -330);
    vertex(-10, -345);
    vertex(5, -335);
    vertex(15, -355);
    vertex(25, -330);
    vertex(40, -340);
    vertex(40, -330);
    vertex(80, -340);
    vertex(70, -290);
    vertex(20, -310);
    vertex(10, -295);
    vertex(5, -305);
    endShape(CLOSE);
    
    fill(30);
    ellipse(-30, -252, 30, 30);
    ellipse(30, -252, 30, 30); // his hands are only slighty larger than his eyes
    
    
    popMatrix();
    }
    if(z === 2){
    pushMatrix();
    noStroke();
    translate(x, y);
    scale(s);
    translate(0, 100);
    
    rectMode(CENTER);
    
    fill(94, 67, 50);
    (rect)(-5-sin(radians(frameCount*3))*26, 0, 50, 30, 20, 0, 20, 20);
    (rect)(-5+sin(radians(frameCount*3))*26, 0, 50, 30, 20, 0, 20, 20);
        
        
    fill(39, 140, 132);
    (rect)(0, -110, 100, 150, 0, 0, 20, 20);
    
    fill(58, 176, 168);
    (rect)(15, -110, 70, 150, 0, 0, 20, 0);
    
    fill(242, 46, 46);
    rect(-40, -116, 20, 60);
    
    fill(255, 79, 79);
    ellipse(-42, -118, 10, 15);
    ellipse(-42, -138, 10, 15);
    ellipse(-42, -98, 10, 15);
    
    fill(242, 206, 128);
    rect(0, -252, 140, 140, 20);
    ellipse(10+sin(radians(frameCount*5))*15, -110, 35, 35);
    
    fill(235, 224, 103);
    beginShape();
    vertex(-70, -280);
    vertex(-80, -330);
    vertex(-40, -330);
    vertex(-50, -350);
    vertex(-10, -330);
    vertex(-16, -345);
    vertex(5, -335);
    vertex(15, -355);
    vertex(25, -330);
    vertex(40, -340);
    vertex(40, -330);
    vertex(80, -340);
    vertex(70, -250);
    vertex(20, -310);
    vertex(-7, -295);
    vertex(-60, -305);
    endShape(CLOSE);
    
    fill(30);
    ellipse(-45, -252, 30, 30);
 // his hands are only slighty larger than his eyes
    
    
    popMatrix();
    }
    if(z === 3){
    pushMatrix();
    noStroke();
    translate(x, y);
    scale(s);
    translate(-155, 100);
    scale(-1,1);
    translate(0+-155,0);
    rectMode(CENTER);
    
    fill(94, 67, 50);
    (rect)(-5-sin(radians(frameCount*3))*26, 0, 50, 30, 20, 0, 20, 20);
    (rect)(-5+sin(radians(frameCount*3))*26, 0, 50, 30, 20, 0, 20, 20);
        
        
    fill(58, 176, 168);
    (rect)(0, -110, 100, 150, 0, 0, 20, 20);
    
    fill(39, 140, 132);
    (rect)(15, -110, 70, 150, 0, 0, 20, 0);
    
    fill(242, 46, 46);
    rect(-40, -116, 20, 60);
    
    fill(255, 79, 79);
    ellipse(-42, -118, 10, 15);
    ellipse(-42, -138, 10, 15);
    ellipse(-42, -98, 10, 15);
    
    fill(242, 206, 128);
    rect(0, -252, 140, 140, 20);
    ellipse(10+sin(radians(frameCount*5))*15, -110, 35, 35);
    
    fill(235, 224, 103);
    beginShape();
    vertex(-70, -280);
    vertex(-80, -330);
    vertex(-40, -330);
    vertex(-50, -350);
    vertex(-10, -330);
    vertex(-16, -345);
    vertex(5, -335);
    vertex(15, -355);
    vertex(25, -330);
    vertex(40, -340);
    vertex(40, -330);
    vertex(80, -340);
    vertex(70, -250);
    vertex(20, -310);
    vertex(-7, -295);
    vertex(-60, -305);
    endShape(CLOSE);
    
    fill(30);
    ellipse(-45, -252, 30, 30);
 // his hands are only slighty larger than his eyes
    
    
    popMatrix();
    }
    if(z === 4){
    pushMatrix();
    noStroke();
    translate(x, y);
    scale(s);
    translate(0, 100);
    
    rectMode(CENTER);
    
    fill(242,206,128);
    ellipse(-55, -110, 35, 35);
    ellipse(55, -110, 35, 35);
    
    fill(94, 67, 50);
    (rect)(40, 0, 50, 30, 0, 20, 20, 20);
    (rect)(-40, 0, 50, 30, 20, 0, 20, 20);
    
    fill(39, 140, 132);
    (rect)(0, -110, 100, 150, 0, 0, 20, 20);
    
    
    fill(58, 176, 168);
    (rect)(25, -110, 50, 150, 0, 0, 20, 0);
    
    fill(242, 206, 128);
    rect(0, -252, 140, 140, 20);

 
    fill(235, 224, 103);
    beginShape();
    vertex(-70, -290);
    vertex(-80, -340);
    vertex(-40, -330);
    vertex(-50, -350);
    vertex(-10, -330);
    vertex(-10, -345);
    vertex(5, -335);
    vertex(15, -355);
    vertex(25, -330);
    vertex(40, -340);
    vertex(40, -330);
    vertex(80, -340);
    vertex(70, -290);
    vertex(20, -310);
    vertex(10, -295);
    vertex(5, -305);
    endShape(CLOSE);
  
    popMatrix();
    }
}; // A shopkeeper and glowy rectangle user. I think the glowy rectangles are more important.
var AnimationStudios = function(x,y,s,z){
    if(z === 1){        
    pushMatrix();
    noStroke();
    translate(x, y);
    scale(s);
    translate(0, 100);
    
    rectMode(CENTER);
    
    fill(64);
    (rect)(40, 0, 50, 30, 0, 20, 20, 20);
    (rect)(-40, 0, 50, 30, 20, 0, 20, 20);
    
    fill(0, 161, 32);
    (rect)(0, -110, 100, 150, 0, 0, 20, 20);
    
    fill(2, 140, 27);
    (rect)(25, -110, 50, 150, 0, 0, 20, 0);
    
    pushMatrix();
    translate(-22,-32);
    scale(0.9,1.0);
    fill(125, 75, 0);
    rect(0, -91, 15, 11);
    fill(0, 84, 20);
    triangle(0, -95, 20, -95, 0, -115);
    triangle(0, -110, 15, -110, 0, -125);
    
    fill(11, 94, 0);
    triangle(0, -95, -20, -95, 0, -115);
    triangle(0, -110, -15, -110, 0, -125);
    popMatrix(); 
    
    strokeWeight(8);
    fill(184, 148, 77);
    stroke(8, 84, 8);
    arc(0,-183,60,30,0,PI);
    noStroke();
    
    fill(214, 175, 92);
    rect(0, -252, 140, 140, 20);
    ellipse(-55, -110, 35, 35);
    ellipse(55, -110, 35, 35);
    
    fill(92, 66, 14);
    beginShape();
    vertex(-70, -290);
    vertex(-80, -335);
    vertex(-10, -330);
    vertex(-10, -345);
    vertex(5, -335);
    vertex(15, -355);
    vertex(25, -330);
    vertex(80, -335);
    vertex(70, -290);
    vertex(20, -310);
    vertex(10, -295);
    vertex(5, -305);
    endShape(CLOSE);
    
    fill(30);
    ellipse(-30, -252, 30, 30);
    ellipse(30, -252, 30, 30); // his hands are only slighty larger than his eyes
    
    popMatrix();
    }
    if(z === 2){        
    pushMatrix();
    noStroke();
    translate(x, y);
    scale(s);
    translate(0, 100);
    
    rectMode(CENTER);
    
    fill(64);
    (rect)(0-sin(radians(frameCount*6))*27, 0, 50, 30, 20, 0, 20, 20);
    (rect)(0+sin(radians(frameCount*6))*27, 0, 50, 30, 20, 0, 20, 20);
    
    fill(0, 161, 32);
    (rect)(0, -110, 100, 150, 0, 0, 20, 20);
    
    fill(2, 140, 27);
    (rect)(15, -110, 70, 150, 0, 0, 20, 0);
    
    pushMatrix();
    translate(-40,-32);
    scale(0.3,1.0);
    fill(125, 75, 0);
    rect(0, -91, 15, 11);
    fill(0, 84, 20);
    triangle(0, -95, 20, -95, 0, -115);
    triangle(0, -110, 15, -110, 0, -125);
    
    fill(11, 94, 0);
    triangle(0, -95, -20, -95, 0, -115);
    triangle(0, -110, -15, -110, 0, -125);
    popMatrix(); 

    fill(8, 84, 8);
    arc(-50,-183,65,35,0,radians(90));
    
    fill(184, 148, 77);
    arc(-50,-183,55,25,0,radians(90));
    
    fill(214, 175, 92);
    rect(0, -252, 140, 140, 20);
    ellipse(5+sin(radians(frameCount*4))*10, -110, 35, 35);
    
    fill(92, 66, 14);
    beginShape();
    vertex(-70, -290);
    vertex(-75, -340);
    vertex(-10, -330);
    vertex(-12, -352);
    vertex(5, -335);
    vertex(15, -355);
    vertex(35, -330);
    vertex(80, -335);
    vertex(70, -220);
    vertex(20, -310);
    vertex(10, -295);
    vertex(5, -305);
    endShape(CLOSE);
    
    fill(30);
    ellipse(-45, -252, 30, 30);
 // his hands are only slighty larger than his eyes
    
    popMatrix();
    }
    if(z === 3){        
    pushMatrix();
    noStroke();
    translate(x, y);
    scale(s);
    translate(0, 100);
    scale(-1,1);
    rectMode(CENTER);
    fill(64);
    (rect)(0-sin(radians(frameCount*6))*27, 0, 50, 30, 20, 0, 20, 20);
    (rect)(0+sin(radians(frameCount*6))*27, 0, 50, 30, 20, 0, 20, 20);
    
    fill(2, 140, 27);
    (rect)(0, -110, 100, 150, 0, 0, 20, 20);
    
    fill(0, 161, 32);
    (rect)(15, -110, 70, 150, 0, 0, 20, 0);
    
    pushMatrix();
    translate(-35,-32);
    scale(0.3,1.0);
    fill(125, 75, 0);
    rect(0, -91, 15, 11);
    fill(0, 84, 20);
    triangle(0, -95, 20, -95, 0, -115);
    triangle(0, -110, 15, -110, 0, -125);
    
    fill(11, 94, 0);
    triangle(0, -95, -20, -95, 0, -115);
    triangle(0, -110, -15, -110, 0, -125);
    popMatrix(); 

    fill(8, 84, 8);
    arc(-50,-183,65,35,0,radians(90));
    
    fill(184, 148, 77);
    arc(-50,-183,55,25,0,radians(90));
    
    fill(214, 175, 92);
    rect(0, -252, 140, 140, 20);
    ellipse(5+sin(radians(frameCount*4))*10, -110, 35, 35);
    
    fill(92, 66, 14);
    beginShape();
    vertex(-70, -290);
    vertex(-75, -340);
    vertex(-10, -330);
    vertex(-12, -352);
    vertex(5, -335);
    vertex(15, -355);
    vertex(35, -330);
    vertex(80, -335);
    vertex(70, -220);
    vertex(20, -310);
    vertex(10, -295);
    vertex(5, -305);
    endShape(CLOSE);
    
    fill(30);
    ellipse(-45, -252, 30, 30);
 // his hands are only slighty larger than his eyes
    
    popMatrix();
    }
    if(z === 4){        
    pushMatrix();
    noStroke();
    translate(x, y);
    scale(s);
    translate(0, 100);
    
    rectMode(CENTER);
    
    fill(214, 175, 92);
    ellipse(-55, -110, 35, 35);
    ellipse(55, -110, 35, 35);
    
    fill(64);
    (rect)(40, 0, 50, 30, 0, 20, 20, 20);
    (rect)(-40, 0, 50, 30, 20, 0, 20, 20);
    
    fill(2, 140, 27);
    (rect)(0, -110, 100, 150, 0, 0, 20, 20);
    
    fill(0, 161, 32);
    (rect)(25, -110, 50, 150, 0, 0, 20, 0);
    
    fill(214, 175, 92);
    rect(0, -252, 140, 140, 20);
    
    
    fill(92, 66, 14);
    beginShape();
    vertex(-70, -282);
    vertex(-80, -335);
    vertex(-10, -330);
    vertex(-10, -345);
    vertex(5, -335);
    vertex(15, -355);
    vertex(25, -330);
    vertex(80, -335);
    vertex(70, -290);
    vertex(20, -284);
    vertex(10, -279);
    vertex(-42, -275);
    endShape(CLOSE);
    
    popMatrix();
    }
    
}; // An Animation expert who animates stuff. also definently not the hacker
var ESheep = function(x, y, s, z){
    if(z === 1){
    pushMatrix();
    noStroke();
    translate(x, y);
    scale(s);
    translate(0, 100);
    
    rectMode(CENTER);
    
    fill(146, 151, 209);
    (rect)(40, 0, 50, 30, 0, 20, 20, 20);
    (rect)(-40, 0, 50, 30, 20, 0, 20, 20);
    
    fill(55, 71, 79);
    (rect)(0, -110, 100, 150, 0, 0, 20, 20);
    
    fill(146, 151, 209);
    (rect)(-35, -115, 30, 140);
    (rect)(35, -115, 30, 140);
    
    fill(205, 207, 235);
    (rect)(-35, -50, 40, 20, 10);
    (rect)(35, -50, 40, 20, 10);
    
    fill(230, 196, 129);
    rect(0, -252, 140, 140, 20);
    ellipse(-55, -100, 35, 35);
    ellipse(55, -100, 35, 35);
    
    fill(146, 151, 209);
    (rect)(0, -315, 150, 50, 20, 20, 0, 0);
    
    fill(205, 207, 235);
    (rect)(0, -300, 165, 20, 20, 20, 0, 0);
    (rect)(-72, -250, 20, 80, 0, 0, 20, 20);
    (rect)(72, -250, 20, 80, 0, 0, 20, 20);
    ellipse(0, -340, 25, 25);
    
    fill(30);
    ellipse(-30, -252, 30, 30);
    ellipse(30, -252, 30, 30);
    
    popMatrix();
    }
    if(z === 2){
    pushMatrix();
    noStroke();
    translate(x, y);
    scale(s);
    translate(0, 100);
    
    rectMode(CENTER);
    
    fill(146, 151, 209);
    (rect)(-5+sin(radians(frameCount*8))*27, 0, 50, 30, 20, 0, 20, 20);
    (rect)(-5-sin(radians(frameCount*8))*27, 0, 50, 30, 20, 0, 20, 20);
    
    fill(55, 71, 79);
    (rect)(0, -110, 100, 150, 0, 0, 20, 20);
    
    fill(146, 151, 209);
    (rect)(-40, -115, 25, 140);
    (rect)(5, -170, 105, 25,10);

    fill(205, 207, 235);
    (rect)(-40, -50, 30, 20, 10);

    
    fill(230, 196, 129);
    rect(0, -252, 140, 140, 20);
    ellipse(0, -100, 35, 35);
    
    fill(205, 207, 235);
    ellipse(0, -340, 25, 25);
    
    fill(146, 151, 209);
    (rect)(0, -315, 150, 50, 20, 20, 0, 0);
    
    fill(205, 207, 235);
    (rect)(0, -300, 165, 20, 20, 20, 0, 20);
    (rect)(33, -250, 100, 80, 0, 0, 20, 20);
    
    fill(30);
    ellipse(-45, -252, 30, 30);
    
    popMatrix();
    }
    if(z === 3){
    pushMatrix();
    noStroke();
    translate(x, y);
    scale(s);
    translate(0, 100);
     scale(-1,1);
    rectMode(CENTER);
    
    fill(146, 151, 209);
    (rect)(-5+sin(radians(frameCount*8))*27, 0, 50, 30, 20, 0, 20, 20);
    (rect)(-5-sin(radians(frameCount*8))*27, 0, 50, 30, 20, 0, 20, 20);
    
    fill(55, 71, 79);
    (rect)(0, -110, 100, 150, 0, 0, 20, 20);
    
    fill(146, 151, 209);
    (rect)(-40, -115, 25, 140);
    (rect)(5, -170, 105, 25,10);

    fill(205, 207, 235);
    (rect)(-40, -50, 30, 20, 10);

    
    fill(230, 196, 129);
    rect(0, -252, 140, 140, 20);
    ellipse(0, -100, 35, 35);
    
    fill(205, 207, 235);
    ellipse(0, -340, 25, 25);
    
    fill(146, 151, 209);
    (rect)(0, -315, 150, 50, 20, 20, 0, 0);
    
    fill(205, 207, 235);
    (rect)(0, -300, 165, 20, 20, 20, 0, 20);
    (rect)(33, -250, 100, 80, 0, 0, 20, 20);
    
    fill(30);
    ellipse(-45, -252, 30, 30);
    
    popMatrix();
    }
    if(z === 4){
    pushMatrix();
    noStroke();
    translate(x, y);
    scale(s);
    translate(0, 100);
    
    rectMode(CENTER);
    
    fill(230, 196, 129);
    ellipse(-55, -100, 35, 35);
    ellipse(55, -100, 35, 35);
    
    fill(146, 151, 209);
    (rect)(-45, -115, 30, 140);
    (rect)(45, -115, 30, 140);
    
    fill(205, 207, 235);
    (rect)(-45, -50, 40, 20, 10);
    (rect)(45, -50, 40, 20, 10);
    
    fill(146, 151, 209);
    (rect)(40, 0, 50, 30, 0, 20, 20, 20);
    (rect)(-40, 0, 50, 30, 20, 0, 20, 20);
    
    fill(55, 71, 79);
    (rect)(0, -110, 100, 150, 0, 0, 20, 20);
    
    fill(230, 196, 129);
    rect(0, -252, 140, 140, 20);
  
    fill(205, 207, 235);
    (rect)(-72, -250, 20, 80, 20, 0, 20, 20);
    (rect)(72, -250, 20, 80, 20, 0, 20, 20);
    
    fill(146, 151, 209);
    (rect)(0, -275, 150, 126, 20, 20, 0, 0);
    
    fill(205, 207, 235);
    ellipse(0, -340, 25, 25);
    

    popMatrix();
    }
}; // The Khan Collab's scout and bug fixer. Often times he's nowhere to be seen, but will always pop up convenientely showing you where to go.
//}KC Members
//{
var BlueNinja = function(x, y,z,s){
    
    var blue_katana = function(x, y, z, r){
        
        pushMatrix(); translate(x, y); scale(z); rotate(r);
        noStroke();
        
        fill(170, 191, 212);
        rect(-15, -25, 30, 50);
        
        fill(197, 218, 240);
        beginShape();
        vertex(-15, -30); vertex(-15, -215);
        bezierVertex(-15, -245, 10, -250, 15, -250);
        vertex(15, -30);
        endShape(CLOSE);
        
        fill(144, 160, 189);
        rect(0, -25, 15, 50);
        
        fill(170, 180, 230);
        beginShape();
        vertex(0, -30); vertex(0, -215);
        bezierVertex(0, -245, 10, -250, 15, -250);
        vertex(15, -30);
        endShape(CLOSE);
        
        fill(214, 254, 255);
        triangle(-8, -30, 8, -30, 0, -120);
        quad(0, -120, -5, -140, 0, -160, 5, -140);
        
        fill(64);
        beginShape();
        vertex(0, -25); vertex(-25, -25); vertex(-35, -30);
        vertex(-25, -35); vertex(0, -35);
        endShape(CLOSE);
        
        triangle(0, 25, -25, 25, 0, 45);
        
        fill(32);
        beginShape();
        vertex(0, -25); vertex(25, -25); vertex(35, -30);
        vertex(25, -35); vertex(0, -35);
        endShape(CLOSE);
        
        triangle(0, 25, 25, 25, 0, 45);
        
        popMatrix();
        
    };
    if(s === 1){
    pushMatrix(); rectMode(CORNER);
    translate(x, y); scale(z);
    translate(-100, 100);
    noStroke();
    
    blue_katana(150, -180, 1, -120);
    
    fill(0, 79, 207);
    (rect)(85, -30, 50, 30, 0, 20, 20, 20);
    (rect)(5, -30, 50, 30, 20, 0, 20, 20);
    
    fill(140, 144, 255);
    (rect)(20, -200, 100, 150, 0, 0, 20, 20);
    
    fill(83, 120, 242);
    quad(18, -125, 18, -60, 122, -125, 122, -190);
    
    fill(250);
    rect(45, -130, 10, 40);
    rect(30, -115, 40, 10);
    
    fill(0, 79, 207);
    rect(0, -337, 140, 140, 20);
    ellipse(15, -140, 35, 35);
    ellipse(125, -140, 35, 35);
    
    fill(32);
    rect(10, -285, 120, 30);
    
    fill(209, 0, 0);
    rect(25, -270, 30, 10);
    rect(85, -270, 30, 10);
    
    popMatrix();
    }
     if(s === 2){
    pushMatrix(); rectMode(CORNER);
    translate(x, y); scale(z);
    translate(-100, 100);
    noStroke();
    
    blue_katana(150, -180, 1, -120);
    
    fill(0, 79, 207);
    (rect)(+40 - sin(radians(frameCount * 10)) * 25, -30, 50, 30, 20, 0, 20, 20);
    (rect)(+40 + sin(radians(frameCount * 10)) * 25, -30, 50, 30, 20, 0, 20, 20);
    
    fill(140, 144, 255);
    (rect)(20, -200, 100, 150, 0, 0, 20, 20);
    
    fill(83, 120, 242);
    quad(18, -125, 18, -60, 70, -150, 70, -190);
    quad(70, -150, 120, -60, 120, -125, 70, -190);
    

    
    fill(0, 79, 207);
    rect(0, -337, 140, 140, 20);

    ellipse(70 + sin(radians(frameCount * 15)) * 25, -140, 35, 35);
    
    fill(32);
    rect(0, -285, 60, 30);
    
    fill(209, 0, 0);
    rect(5, -270, 30, 10);
    
    popMatrix();
    }
     if(s === 3){
    pushMatrix();
    //translate(-125,0);
    rectMode(CORNER);
    translate(x, y); 
    scale(z);
    scale(-1,1);
    translate(-65, 100);
    noStroke();
    
    blue_katana(150, -180, 1, -120);
    
    fill(0, 79, 207);
    (rect)(+40 - sin(radians(frameCount * 10)) * 25, -30, 50, 30, 20, 0, 20, 20);
    (rect)(+40 + sin(radians(frameCount * 10)) * 25, -30, 50, 30, 20, 0, 20, 20);
    
    fill(140, 144, 255);
    (rect)(20, -200, 100, 150, 0, 0, 20, 20);
    
    fill(83, 120, 242);
    quad(18, -125, 18, -60, 70, -150, 70, -190);
    quad(70, -150, 120, -60, 120, -125, 70, -190);
    
    fill(250);
    rect(18, -120, 7, 40);
    rect(19, -105, 15, 10);
    

    
    fill(0, 79, 207);
    rect(0, -337, 140, 140, 20);

    ellipse(70 + sin(radians(frameCount * 15)) * 25, -140, 35, 35);
    
    fill(32);
    rect(0, -285, 60, 30);
    
    fill(209, 0, 0);
    rect(5, -270, 30, 10);
    
    popMatrix();
    }
    if(s === 4){
    pushMatrix(); 
    rectMode(CORNER);
    translate(x, y); scale(z);
    translate(-100, 100);
    noStroke();
    
    fill(0, 79, 207);
    ellipse(15, -140, 35, 35);
    ellipse(125, -140, 35, 35);
    
    
    fill(0, 79, 207);
    (rect)(85, -30, 50, 30, 0, 20, 20, 20);
    (rect)(5, -30, 50, 30, 20, 0, 20, 20);
    
    fill(140, 144, 255);
    (rect)(20, -200, 100, 150, 0, 0, 20, 20);
    
    fill(83, 120, 242);
    quad(18, -60, 18,-125 , 122, -190, 122, -125);

    fill(0, 79, 207);
    rect(0, -337, 140, 140, 20);
 
    blue_katana(-20, -180, 1, 120);
    
    popMatrix();
    }
}; // a blue ninja. i forget what this fellow does in the plot, but it probably isn't good.
var IsaacEmerald = function(x, y, s, z){
    if(z === 1){
    pushMatrix(); rectMode(CORNER);
    translate(x, y);
    scale(s);
    translate(-100, 100);
    noStroke();
    
    fill(47, 158, 79); (rect)(20, -200, 100, 150, 0, 0, 20, 20);
    fill(66, 209, 58);
    rect(30, -180, 10, 130); rect(55, -180, 55, 130);
    fill(161, 237, 69); rect(70, -180, 34, 130);
    fill(224, 255, 122); rect(90, -180, 10, 130);
    
    fill(52, 191, 93); (rect)(0, -30, 140, 30, 20, 20, 0, 0);
    fill(61, 235, 52);
    rect(40, -30, 85, 30); rect(15, -30, 10, 30);
    fill(164, 255, 59); rect(70, -30, 45, 30);
    fill(224, 255, 122);
    rect(90, -30, 15, 30); rect(45, -30, 10, 30);
    
    fill(56, 59, 77); (rect)(10, -60, 120, 30, 20, 20, 0, 0);
    fill(91, 128, 122);
    rect(50, -60, 65, 30); rect(25, -60, 10, 30);
    fill(128, 194, 183); rect(75, -60, 30, 30);
    
    fill(52, 191, 93); rect(0, -337, 140, 140, 20);
    fill(61, 235, 52); rect(23, -330, 110, 110, 10);
    fill(224, 255, 122);
    rect(63, -320, 65, 65, 10); rect(10, -230, 20, 20, 5);
    
    fill(56, 59, 77);
    ellipse(15, -140, 35, 35); ellipse(125, -140, 35, 35);
    
    fill(91, 128, 122);
    ellipse(17, -143, 15, 15); ellipse(127, -143, 15, 15);
    
    fill(255, 148, 66, 150);
    ellipse(40, -267, 46, 46); ellipse(100, -267, 46, 46);
    
    fill(255, 64, 64);
    ellipse(40, -267, 30, 30); ellipse(100, -267, 30, 30);
    
    fill(56, 59, 77);
    beginShape();
    vertex(20, -342);
    vertex(20, -375);
    vertex(35, -360);
    vertex(50, -375);
    vertex(65, -360);
    vertex(80, -375);
    vertex(80, -342);
    endShape(CLOSE);
    
    popMatrix();
    }
    if(z === 2){
    pushMatrix(); rectMode(CORNER);
    translate(x, y);
    scale(s);
    translate(-100, 100);
    noStroke();
    
    fill(47, 158, 79); (rect)(20, -200, 100, 150, 0, 0, 20, 20);
    fill(66, 209, 58);
    rect(30, -180, 10, 130); rect(55, -180, 55, 130);
    fill(161, 237, 69); rect(70, -180, 34, 130);
    fill(224, 255, 122); rect(90, -180, 10, 130);
    
    fill(52, 191, 93); (rect)(0, -30, 140, 30, 20, 20, 0, 0);
    fill(61, 235, 52);
    rect(40, -30, 85, 30); rect(15, -30, 10, 30);
    fill(164, 255, 59); rect(70, -30, 45, 30);
    fill(224, 255, 122);
    rect(90, -30, 15, 30); rect(45, -30, 10, 30);
    
    fill(56, 59, 77); (rect)(10, -60, 120, 30, 20, 20, 0, 0);
    fill(91, 128, 122);
    rect(50, -60, 65, 30); rect(25, -60, 10, 30);
    fill(128, 194, 183); rect(75, -60, 30, 30);
    
    fill(52, 191, 93); rect(0, -337, 140, 140, 20);
    fill(61, 235, 52); rect(23, -330, 110, 110, 10);
    fill(224, 255, 122);
    rect(63, -320, 65, 65, 10); rect(10, -230, 20, 20, 5);
    
    fill(56, 59, 77);
    ellipse(60, -140, 35, 35); 
    
    fill(91, 128, 122);
    ellipse(54, -143, 15, 15); 
    
    fill(255, 148, 66, 150);
    ellipse(21, -267, 46, 46);
    
    fill(255, 64, 64);
    ellipse(20, -267, 30, 30); 
    fill(56, 59, 77);
    beginShape();
    translate(20,0);
    vertex(20, -342);
    vertex(20, -375);
    vertex(35, -360);
    vertex(50, -375);
    vertex(65, -360);
    vertex(80, -375);
    vertex(80, -342);
    endShape(CLOSE);
    
    popMatrix();
    }
    if(z === 3){
    pushMatrix(); rectMode(CORNER);
    translate(x, y);
    scale(s);
    translate(-100, 100);
    noStroke();
    
    fill(47, 158, 79); (rect)(20, -200, 100, 150, 0, 0, 20, 20);
    fill(66, 209, 58);
    rect(30, -180, 10, 130); rect(55, -180, 55, 130);
    fill(161, 237, 69); rect(70, -180, 34, 130);
    fill(224, 255, 122); rect(90, -180, 10, 130);
    
    fill(52, 191, 93); (rect)(0, -30, 140, 30, 20, 20, 0, 0);
    fill(61, 235, 52);
    rect(40, -30, 85, 30); rect(15, -30, 10, 30);
    fill(164, 255, 59); rect(70, -30, 45, 30);
    fill(224, 255, 122);
    rect(90, -30, 15, 30); rect(45, -30, 10, 30);
    
    fill(56, 59, 77); (rect)(10, -60, 120, 30, 20, 20, 0, 0);
    fill(91, 128, 122);
    rect(50, -60, 65, 30); rect(25, -60, 10, 30);
    fill(128, 194, 183); rect(75, -60, 30, 30);
    
    fill(52, 191, 93); rect(0, -337, 140, 140, 20);
    fill(61, 235, 52); rect(23, -330, 110, 110, 10);
    fill(224, 255, 122);
    rect(63, -320, 65, 65, 10); rect(10, -230, 20, 20, 5);
    
    fill(56, 59, 77);
    ellipse(80, -140, 35, 35); 
    
    fill(91, 128, 122);
    ellipse(85, -143, 15, 15); 
    
    fill(255, 148, 66, 150);
    ellipse(119, -267, 46, 46);
    
    fill(255, 64, 64);
    ellipse(120, -267, 30, 30); 
    fill(56, 59, 77);
    beginShape();
    translate(20,0);
    vertex(20, -342);
    vertex(20, -375);
    vertex(35, -360);
    vertex(50, -375);
    vertex(65, -360);
    vertex(80, -375);
    vertex(80, -342);
    endShape(CLOSE);
    
    popMatrix();
    }
    if(z === 4){
    pushMatrix(); rectMode(CORNER);
    translate(x, y);
    scale(s);
    translate(-100, 100);
    noStroke();
    
      fill(56, 59, 77);
    ellipse(15, -140, 35, 35); ellipse(125, -140, 35, 35);
    
    fill(91, 128, 122);
    ellipse(17, -143, 15, 15); ellipse(127, -143, 15, 15);
    
    
    fill(47, 158, 79); (rect)(20, -200, 100, 150, 0, 0, 20, 20);
    fill(66, 209, 58);
    rect(30, -180, 10, 130); rect(55, -180, 55, 130);
    fill(161, 237, 69); rect(70, -180, 34, 130);
    fill(224, 255, 122); rect(90, -180, 10, 130);
    
    fill(52, 191, 93); (rect)(0, -30, 140, 30, 20, 20, 0, 0);
    fill(61, 235, 52);
    rect(40, -30, 85, 30); rect(15, -30, 10, 30);
    fill(164, 255, 59); rect(70, -30, 45, 30);
    fill(224, 255, 122);
    rect(90, -30, 15, 30); rect(45, -30, 10, 30);
    
    fill(56, 59, 77); (rect)(10, -60, 120, 30, 20, 20, 0, 0);
    fill(91, 128, 122);
    rect(50, -60, 65, 30); rect(25, -60, 10, 30);
    fill(128, 194, 183); rect(75, -60, 30, 30);
    
    fill(52, 191, 93); rect(0, -337, 140, 140, 20);
    fill(61, 235, 52); rect(23, -330, 110, 110, 10);
    fill(224, 255, 122);
    rect(63, -320, 65, 65, 10); rect(10, -230, 20, 20, 5);
    
    fill(56, 59, 77);
    pushMatrix();
    translate(30,0);
    beginShape();
    vertex(20, -342);
    vertex(20, -375);
    vertex(35, -360);
    vertex(50, -375);
    vertex(65, -360);
    vertex(80, -375);
    vertex(80, -342);
    endShape(CLOSE);
    popMatrix();
    popMatrix();
    }
    
}; // a... sentient emerald statue? oh dear, senor emerald has seen better days.
var awesomecookie = function(x, y, z, s){
    if(s === 1){
    pushMatrix(); rectMode(CORNER);
    translate(x, y); scale(z);
    noStroke();
    
    fill(163, 152, 104);
    arc(70, -290, 180, 180, radians(180), radians(360));
    fill(201, 180, 96);
    arc(70, -290, 180, 180, radians(270), radians(360));
    
    fill(112, 93, 73);
    (rect)(-5, -342, 150, 250, 20, 20, 50, 50);
    
    fill(82, 69, 55); quad(20, -200, 120, -200, 130, 0, 10, 0);
    
    fill(115, 57, 115);
    (rect)(85, -30, 50, 30, 0, 20, 20, 20);
    (rect)(5, -30, 50, 30, 20, 0, 20, 20);
    (rect)(20, -200, 100, 150, 0, 0, 20, 20);
    
    fill(163, 152, 104); quad(20, -200, 70, -170, 40, 0, 10, 0);
    fill(201, 180, 96);
    quad(120, -200, 70, -170, 100, 0, 130, 0);
    
    fill(255, 254, 229);
    rect(0, -40, 60, 40, 10); rect(80, -40, 60, 40, 10);
    
    fill(204, 86, 127); ellipse(70, -170, 30, 30);
    
    fill(237, 142, 202); ellipse(72, -172, 20, 20);
    
    fill(255);
    ellipse(75, -175, 10, 10);
    ellipse(65, -170, 5, 5);
    
    fill(242, 226, 155);
    rect(0, -337, 140, 140, 20);
    ellipse(15, -140, 35, 35); ellipse(125, -140, 35, 35);
    
    fill(82, 69, 55);
    beginShape();
    vertex(-1, -338); vertex(141, -338); vertex(141, -280);
    vertex(100, -320); vertex(-1, -260);
    endShape(CLOSE);
    
    fill(255, 148, 66, 150);
    ellipse(40, -267, 46, 46); ellipse(100, -267, 46, 46);
    
    fill(255, 64, 64);
    ellipse(40, -267, 30, 30); ellipse(100, -267, 30, 30);
    
    popMatrix();
    }
    if(s === 2){
    pushMatrix(); rectMode(CORNER);
    translate(x, y); scale(z);
    noStroke();
    
    fill(82, 69, 55); 
    quad(20, -200, 120, -200, 130, 0, 20, 0);
    
    fill(115, 57, 115);

    (rect)(20, -200, 100, 150, 0, 0, 0, 0);

    fill(255, 254, 229);
    rect(0, -40, 60, 40, 10); 

    fill(201, 180, 96);
    quad(120, -200, 30, -180, 15, 0, 130, 0);
    
    fill(204, 86, 127);
    ellipse(23, -170, 17, 30);
    
    fill(237, 142, 202); 
    ellipse(19, -172, 10, 20);
    
    fill(255);
    ellipse(25, -175, 10, 10);
    ellipse(18, -170, 5, 5);
    
    fill(242, 226, 155);
    rect(0, -337, 140, 140, 20);
        
    fill(82, 69, 55);
    (rect)(70, -338, 72, 250, 20, 20, 50, 50);
    
    beginShape();
    vertex(-1, -338); vertex(141, -338); vertex(141, -280);
    vertex(100, -270); vertex(-1, -300);
    endShape(CLOSE);
    
    fill(242, 226, 155);
    ellipse(53, -140, 35, 35); 
       
    fill(201, 180, 96);
    arc(100, -290, 100, 180,radians(213), radians(360));
    
    fill(255, 148, 66, 150);
    ellipse(20, -267, 46, 46);
    
    fill(255, 64, 64);
    ellipse(20, -267, 30, 30);
    
    popMatrix();
    }
    if(s === 3){
         pushMatrix();
         translate(491,0);
         scale(-1,1);
    pushMatrix(); rectMode(CORNER);
    translate(x, y);
    scale(z);
    noStroke();
    
    fill(82, 69, 55); 
    quad(20, -200, 120, -200, 130, 0, 20, 0);
    
    fill(115, 57, 115);

    (rect)(20, -200, 100, 150, 0, 0, 0, 0);

    fill(255, 254, 229);
    rect(0, -40, 60, 40, 10); 

    fill(201, 180, 96);
    quad(120, -200, 30, -180, 15, 0, 130, 0);
    
    fill(204, 86, 127);
    ellipse(23, -170, 17, 30);
    
    fill(237, 142, 202); 
    ellipse(19, -172, 10, 20);
    
    fill(255);
    ellipse(25, -175, 10, 10);
    ellipse(18, -170, 5, 5);
    
    fill(242, 226, 155);
    rect(0, -337, 140, 140, 20);
        
    fill(82, 69, 55);
    (rect)(70, -338, 72, 250, 20, 20, 50, 50);
    
    beginShape();
    vertex(-1, -338); vertex(141, -338); vertex(141, -280);
    vertex(100, -270); vertex(-1, -300);
    endShape(CLOSE);
    
    fill(242, 226, 155);
    ellipse(53, -140, 35, 35); 
       
    fill(201, 180, 96);
  arc(100, -290, 100, 180,radians(213), radians(360));
  
    fill(255, 148, 66, 150);
    ellipse(20, -267, 46, 46);
    
    fill(255, 64, 64);
    ellipse(20, -267, 30, 30);
    
    popMatrix();
    popMatrix();
    }
    if(s === 4){
    pushMatrix(); rectMode(CORNER);
    translate(x, y); scale(z);
    noStroke();
    
  
    fill(255, 254, 229);
    rect(0, -40, 60, 40, 10);
    rect(80, -40, 60, 40, 10);
 
    fill(163, 152, 104); 
    quad(20, -200, 70, -170, 70, 0, 10, 0);
    fill(201, 180, 96);
    quad(120, -200, 70, -170, 70, 0, 130, 0);
    
    ellipse(-10, -140, 35, 35);
    ellipse(150, -140, 35, 35);
    
    fill(82, 69, 55);
    (rect)(-5, -342, 150, 250, 20, 20, 50, 50);
    
     fill(163, 152, 104);
    arc(70, -290, 180, 180, radians(180), radians(360));
    fill(201, 180, 96);
    arc(70, -290, 180, 180, radians(270), radians(360));
   

    popMatrix();
    }
    
}; // mistress cookie's been stuck in this ice for quite a while now! that surely isn't the personality i knew, either...
var PhantomProgrammer = function(x, y, s, z){
    if(z === 1){
    pushMatrix(); rectMode(CORNER);
    translate(x, y);
    scale(s);
    noStroke();
    
    fill(130, 116, 138);
    rect(20, -200, 100, 120);
    ellipse(40, -80, 40, 40);
    ellipse(80, -80, 80, 80);
    ellipse(50, -30, 20, 20);
    ellipse(90, -40, 30, 30);
    ellipse(70, -8, 16, 16);
    
    fill(197, 191, 222);
    ellipse(75, -130, 40, 40);
    ellipse(50, -150, 30, 30);
    ellipse(65, -145, 16, 16);
    ellipse(65, -110, 16, 16);
    ellipse(75, -90, 10, 10);
    
    fill(159, 148, 166);
    rect(0, -337, 140, 140, 20);
    ellipse(15, -140, 35, 35); ellipse(125, -140, 35, 35);
    
    fill(255, 100, 117, 150);
    arc(36, -271, 50, 50, radians(-45), radians(135));
    arc(104, -271, 50, 50, radians(45), radians(215));
    
    fill(255, 64, 64);
    arc(40, -267, 30, 30, radians(-45), radians(135));
    arc(100, -267, 30, 30, radians(45), radians(215));
    
    popMatrix();
    }
    if(z === 2){
    pushMatrix(); rectMode(CORNER);
    translate(x, y);
    scale(s);
    noStroke();
    
    fill(130, 116, 138);
    rect(20, -200, 100, 120);
    ellipse(40, -80, 40, 40);
    ellipse(80, -80, 80, 80);
    ellipse(50, -30, 20, 20);
    ellipse(90, -40, 30, 30);
    ellipse(70, -8, 16, 16);
    
    fill(159, 148, 166);
    rect(0, -337, 140, 140, 20);
    ellipse(65 + sin(radians(frameCount*5))*20, -140, 35, 35);
    
    fill(255, 100, 117, 150);
    arc(36, -271, 50, 50, radians(45), radians(215));
    
    fill(255, 64, 64);
    arc(34, -267, 30, 30, radians(45), radians(215));
    
    popMatrix();
    }
    if(z === 3){
    pushMatrix(); rectMode(CORNER);
    translate(x, y);
    scale(s);
    noStroke();
    
    fill(130, 116, 138);
    rect(20, -200, 100, 120);
    ellipse(40, -80, 40, 40);
    ellipse(80, -80, 80, 80);
    ellipse(50, -30, 20, 20);
    ellipse(90, -40, 30, 30);
    ellipse(70, -8, 16, 16);
    
    fill(159, 148, 166);
    rect(0, -337, 140, 140, 20);
    ellipse(65 - sin(radians(frameCount*5))*20, -140, 35, 35);
    
    fill(255, 100, 117, 150);
    arc(104, -271, 50, 50, radians(-45), radians(135));
    
    fill(255, 64, 64);
    arc(107, -267, 30, 30, radians(-45), radians(135));
    
    popMatrix();
    }
    if(z === 4){
    pushMatrix(); rectMode(CORNER);
    translate(x, y);
    scale(s);
    noStroke();
    
    fill(159, 148, 166);
    ellipse(15, -140, 35, 35); ellipse(125, -140, 35, 35);
    
    fill(130, 116, 138);
    rect(20, -200, 100, 120);
    ellipse(40, -80, 40, 40);
    ellipse(80, -80, 80, 80);
    ellipse(50, -30, 20, 20);
    ellipse(90, -40, 30, 30);
    ellipse(70, -8, 16, 16);
    
    fill(159, 148, 166);
    rect(0, -337, 140, 140, 20);
    
    popMatrix();
    }
}; // hm. it's a ghost! wow, these hacked folks really do get a makeover. but why is phantom running around in the middle of the ocean?
var Pamela = function(x,y,s,z){
    if(z === 1){
    pushMatrix();
    translate(x, y);
    scale(s);
    rectMode(CENTER);
    noStroke();
    fill(59, 59, 59);
    (rect)(30 + sin(radians(frameCount * 2)) * 2, 0, 50, 30, 0, 20, 20, 20);
    
    (rect)(-30 - sin(radians(frameCount * 2)) * 2, 0, 50, 30, 20, 0, 20, 20);
    
    pushMatrix();
    
    translate(0, -110 + sin(radians(frameCount * 2)) * 2);
    
    fill(207, 99, 207);
    (rect)(0, 0, 100, 150, 0, 0, 20, 20);
    fill(140, 0, 255);
    textSize(20);
    textAlign(CENTER,CENTER);
    text("I LOVE KA",0,-40);
    
    fill(242, 218, 194);
    rect(0, -142, 140, 140, 20);
    
    fill(217, 0, 0);
    ellipse(-25,-150,25,25);
    ellipse(25,-150,25,25);
    for(var i = 0; i < 50; i+=3){
        fill(255,255,255,20);
        ellipse(-25,-150,-30+i+sin(radians(frameCount*2))*10,-20+i-sin(radians(frameCount*2))*10);
        ellipse(25,-150,-30+i+sin(radians(frameCount*2))*10,-20+i-sin(radians(frameCount*2))*10);
        fill(255, 0, 0,20);
        ellipse(-25,-150,-20+i+sin(radians(frameCount*2))*10,-30+i-sin(radians(frameCount*2))*10);
        ellipse(25,-150,-20+i+sin(radians(frameCount*2))*10,-30+i-sin(radians(frameCount*2))*10);
    }
    fill(237, 201, 151);
    ellipse(15, 10, 35, 35);
    imageMode(CENTER);
    image(getImage("creatures/Winston"),0,0,50,50);
    ellipse(-25+sin(radians(frameCount))*5, -19-cos(radians(frameCount))*10, 35, 35);
    fill(230, 147, 30);
    pushMatrix();
    translate(0,-145);
    beginShape();
    vertex(32, -40);
    vertex(12, -35);
    vertex(-7, -38);
    vertex(-17, -42);
    vertex(-27, -36);
    vertex(-38, -37);
    vertex(-54, -32);
    vertex(-60, -9);
    vertex(-69, 19);
    vertex(-75, -39);
    vertex(-67, -66);
    vertex(-35, -72);
    vertex(20, -73);
    vertex(63, -71);
    vertex(73, -41);
    vertex(70, -15);
    vertex(70, 15);
    vertex(50, -19);
    vertex(46, -35);
    endShape(CLOSE);
    popMatrix();
    popMatrix();
    }
    if(z === 2){
    pushMatrix();
    translate(x +35, y);
    scale(s);
    rectMode(CENTER);
    noStroke();
    fill(59, 59, 59);
    (rect)(0 + sin(radians(frameCount * 10)) * 25, 0, 50, 30, 20, 0, 20, 20);
    (rect)(0 - sin(radians(frameCount * 10)) * 25, 0, 50, 30, 20, 0, 20, 20);
    
    pushMatrix();
    
    translate(0, -110 + sin(radians(frameCount * 2)) * 2);
    
    fill(207, 99, 207);
    (rect)(0, 0, 100, 150, 0, 0, 20, 20);
    fill(140, 0, 255);
    
    fill(242, 218, 194);
    rect(0, -142, 140, 140, 20);
    
    fill(217, 0, 0);
    ellipse(-40,-150,25,25);
    for(var i = 0; i < 50; i+=3){
        fill(255,255,255,20);
        ellipse(-40,-150,-30+i+sin(radians(frameCount*2))*10,-20+i-sin(radians(frameCount*2))*10);
        fill(255, 0, 0,20);
        ellipse(-40,-150,-20+i+sin(radians(frameCount*2))*10,-30+i-sin(radians(frameCount*2))*10);
    }
    fill(237, 201, 151);
    ellipse(-75, 10, 35, 35);
    imageMode(CENTER);
    image(getImage("creatures/Winston"),-80,0,50,50);
    ellipse(-80+sin(radians(frameCount))*5, -19-cos(radians(frameCount))*10, 35, 35);
    fill(230, 147, 30);
    pushMatrix();
    translate(0,-145);
    beginShape();
    vertex(32, -40);
    vertex(12, -35);
    vertex(-7, -38);
    vertex(-17, -42);
    vertex(-27, -36);
    vertex(-38, -37);
    vertex(-54, -32);
    vertex(-75, -39);
    vertex(-67, -66);
    vertex(-35, -72);
    vertex(20, -73);
    vertex(63, -71);
    vertex(73, -41);
    vertex(70, -15);
    vertex(70, 15);
    vertex(50, -19);
    vertex(46, -35);
    endShape(CLOSE);
    popMatrix();
    popMatrix();
    }
    if(z === 3){
    pushMatrix();
    translate(x +35, y);
    scale(s);
    rectMode(CENTER);
    noStroke();
    fill(59, 59, 59);
    (rect)(0 + sin(radians(frameCount * 10)) * 25, 0, 50, 30, 0, 20, 20, 20);
    (rect)(0 - sin(radians(frameCount * 10)) * 25, 0, 50, 30, 0, 20, 20, 20);
    
    pushMatrix();
    
    translate(0, -110 + sin(radians(frameCount * 2)) * 2);
    
    fill(207, 99, 207);
    (rect)(0, 0, 100, 150, 0, 0, 20, 20);
    fill(140, 0, 255);
    
    fill(242, 218, 194);
    rect(0, -142, 140, 140, 20);
    
    fill(217, 0, 0);
    ellipse(40,-150,25,25);
    for(var i = 0; i < 50; i+=3){
        fill(255,255,255,20);
        ellipse(40,-150,-30+i+sin(radians(frameCount*2))*10,-20+i-sin(frameCount*2)*10);
        fill(255, 0, 0,20);
        ellipse(40,-150,-20+i+sin(radians(frameCount*2))*10,-30+i-sin(frameCount*2)*10);
    }
    fill(237, 201, 151);
    ellipse(75, 10, 35, 35);
    imageMode(CENTER);
    image(getImage("creatures/Winston"),80,0,50,50);
    ellipse(80+sin(radians(frameCount))*5, -19-cos(radians(frameCount))*10, 35, 35);
    fill(230, 147, 30);
    pushMatrix();
    translate(0,-145);
    beginShape();
    vertex(32, -40);
    vertex(12, -35);
    vertex(-7, -38);
    vertex(-17, -42);
    vertex(-27, -36);
    vertex(-38, -37);
    vertex(-54, -32);
    vertex(-60, -9);
    vertex(-69, 19);
    vertex(-75, -39);
    vertex(-67, -66);
    vertex(-35, -72);
    vertex(20, -73);
    vertex(63, -71);
    vertex(73, -41);
    vertex(70, -25);
    // vertex(70, 15);
    // vertex(50, -19);
    // vertex(46, -35);
    endShape(CLOSE);
    popMatrix();
    popMatrix();
    }
    if(z === 4){
    pushMatrix();
    translate(x +35, y);
    scale(s);
    rectMode(CENTER);
    noStroke();
    fill(59, 59, 59);
    (rect)(30 + sin(radians(frameCount * 2)) * 2, 0, 50, 30, 0, 20, 20, 20);
    
    (rect)(-30 - sin(radians(frameCount * 2)) * 2, 0, 50, 30, 20, 0, 20, 20);
    
    pushMatrix();
    
    translate(0, -110 + sin(radians(frameCount * 2)) * 2);
    
    fill(207, 99, 207);
    (rect)(0, 0, 100, 150, 0, 0, 20, 20);
    fill(140, 0, 255);
    fill(242, 218, 194);
    rect(0, -142, 140, 140, 20);
    
    fill(230, 147, 30);
    pushMatrix();
    translate(0,-145);
    beginShape();
    vertex(32, -40);
    vertex(12, -35);
    vertex(-7, -38);
    vertex(-17, -42);
    vertex(-27, -36);
    vertex(-38, -37);
    vertex(-54, -32);
    vertex(-60, -9);
    vertex(-69, 19);
    vertex(-75, -39);
    vertex(-67, -66);
    vertex(-35, -72);
    vertex(20, -73);
    vertex(63, -71);
    vertex(73, -41);
    vertex(70, -15);
    vertex(70, 15);
    vertex(20, 20);
    vertex(-20, 10);
    vertex(-40, 15);
    vertex(-70, 20);
    vertex(-70, -30);
    vertex(50, -19);
    vertex(46, -35);
    endShape(CLOSE);
    rect(0, -30, 120, 50);
    popMatrix();
    popMatrix();
    }
    popMatrix();
}; // A teacher of the CS course who also happens to be hacked. Causes the user's computer to lag, ouch.
var NoWayAroundIt = false;
var PlanetProponent = function(x,y,s,z){
    pushMatrix();
    translate(x, y);
    scale(s);
    rectMode(CENTER);
    noStroke();
    var func = function(x,y){
        fill(14, 163, 6);
        ellipse(x, y, 35, 35);
        // ellipse(60, -10, 35, 35);
        fill(8, 199, 27);
        ellipse(-1.5+x, -1.5+y, 32, 32);
        // ellipse(58, -12, 32, 32);
    };
    var orbit = sin(radians(frameCount*4))*80;
    var jj = false;
    fill(0, 122, 16);
    if(z === 1 || z === 4){
    (rect)(40 + sin(radians(frameCount * 2)) * 2, 0, 50, 30, 0, 20, 20, 20);
    
    (rect)(-40 - sin(radians(frameCount * 2)) * 2, 0, 50, 30, 20, 0, 20, 20);
    
    fill(2, 145, 21);
    (rect)(36 + sin(radians(frameCount * 2)) * 2, -2, 46, 26, 0, 20, 20, 20);
    
    (rect)(-44 - sin(radians(frameCount * 2)) * 2, -2, 46, 26, 20, 0, 20, 20);
    }
    if(z === 2){
    fill(0, 122, 16);
    (rect)(0 + sin(radians(frameCount * 10)) * 25, 0, 50, 30, 20, 0, 20, 20);
    
    (rect)(0 - sin(radians(frameCount * 10)) * 25, 0, 50, 30, 20, 0, 20, 20);
    
    fill(2, 145, 21);
    (rect)(0 + sin(radians(frameCount * 10)) * 25, -2, 46, 26, 20, 0, 20, 20);
    
    (rect)(0 - sin(radians(frameCount * 10)) * 25, -2, 46, 26, 20, 0, 20, 20);
    }
    if(z === 3){
    fill(0, 122, 16);
    (rect)(0 + sin(radians(frameCount * 10)) * 25, 0, 50, 30, 0, 20, 20, 20);
    
    (rect)(0 - sin(radians(frameCount * 10)) * 25, 0, 50, 30, 0, 20, 20, 20);
    
    fill(2, 145, 21);
    (rect)(0 + sin(radians(frameCount * 10)) * 25, -2, 46, 26, 0, 20, 20, 20);
    
    (rect)(0 - sin(radians(frameCount * 10)) * 25, -2, 46, 26, 0, 20, 20, 20);
    }
    
    pushMatrix();
    
    translate(0, -110 + sin(radians(frameCount * 2)) * 2);
    func(orbit,-20);
    func(-orbit,10);
    fill(17, 130, 0);
    (rect)(0, 0, 100, 150, 0, 0, 20, 20);
    fill(22, 148, 0);
    (rect)(-5, -5, 90, 140, 0, 0, 20, 20);
    
    noFill();
    pushMatrix();
    translate(0,-160);
    scale(1,0.3);
    strokeWeight(50);
    strokeCap(SQUARE);
    stroke(100, 173, 142);
    arc(0,0,205,205,radians(179),radians(364));
    strokeWeight(3);
    stroke(79, 143, 115);
    arc(0,0,205,205,radians(180),radians(360));
    popMatrix();
    noStroke();
    
    fill(14, 163, 6);
    ellipse(0,-135,166,165);
    fill(8, 199, 27);
    ellipse(-5,-140,152,150);
    
    fill(230, 0, 0);
    if(z === 1){
        ellipse(-30,-120,20,20);
        ellipse(30,-120,20,20);
    }
    if(z === 2){
        ellipse(-50,-120,20,20);
    }
    if(z === 3){
        ellipse(50,-120,20,20);
    }
    
    noFill();
    pushMatrix();
    translate(0,-160);
    scale(0.99,0.3);
    strokeWeight(49);
    strokeCap(SQUARE);
    stroke(100, 173, 142);
    arc(0,0,209,205,0,PI);
    strokeWeight(3);
    stroke(79, 143, 115);
    arc(0,0,207,205,0,PI);
    popMatrix();
    noStroke();
    
    if(!NoWayAroundIt){
        NoWayAroundIt=false;
    }
    if(orbit>70){
        NoWayAroundIt=false;
    }
    else if(orbit<-70){
        NoWayAroundIt=true;
    }
    if(NoWayAroundIt){
        func(orbit,-20);
    }
    if(!NoWayAroundIt){
        func(-orbit,10);
    }
    
    popMatrix();
    
    popMatrix();
}; // A proponent of planets. Has astronomical abilites, and could be the star of the show quite moon.
var Legolas = function(x,y,s,z){
    if(z === 1){
    pushMatrix();
    translate(x, y);
    scale(s);
    rectMode(CENTER);
    noStroke();
    fill(79, 82, 30);
    (rect)(30 + sin(radians(frameCount * 2)) * 2, 0, 50, 30, 0, 20, 20, 20);
    
    (rect)(-30 - sin(radians(frameCount * 2)) * 2, 0, 50, 30, 20, 0, 20, 20);
    
    pushMatrix();
    
    translate(0, -110 + sin(radians(frameCount * 2)) * 2);
    
    fill(184, 160, 116);
    rect(-1, -133, 149, 130, 20,20,5,5);
    
    fill(109, 110, 65);
    (rect)(0, 78, 100, 15,20);
    
    fill(139, 140, 81);
    (rect)(0, 0, 100, 150, 0, 0, 20, 20);
    (rect)(-43, 70, 15, 25, 0, 0, 10, 20);
    (rect)(42, 70, 15, 25, 0, 0, 20, 10);
    
    fill(138, 119, 80);
    (rect)(20, -42, 40, 60, 0, 0, 200, 0);
    (rect)(-20, -42, 40, 60, 0, 0, 0, 200);
    (rect)(0,-20,50,40,50);
    
    noFill();
    strokeWeight(1);
    stroke(97, 79, 34);
    line(0,-90,-1,-1);
    stroke(128, 106, 56);
    strokeWeight(3);
    line(38,-23,14,-3);
    line(-38,-23,-14,-3);
    strokeWeight(4);
    stroke(97, 79, 34);
    line(25,-75,10,-50);
    line(-48,-40,10,-50);
    line(48,-35,10,-50);
    strokeCap(SQUARE);
    strokeWeight(12);
    line(-50,10,50,10);
    strokeWeight(2);
    stroke(255);
    ellipse(10,-50,10,10);
    stroke(85, 89, 32);
    fill(255);
    quad(-15,-78,15,-78,5,-60,-5,-60);
    noStroke();
    fill(127, 128, 75);
    quad(-35,75,35,75,5,40,-5,40);
    
    pushMatrix();
    translate(20, -19);
    rotate(80);
    noFill();
    strokeCap(PROJECT);
    stroke(180);
    strokeWeight(4);
    line(0, -75, -30, 0);
    line(-30, 0, 0, 75);
    stroke(60, 20, 0);
    line(-30, 0, 90, 0);
    noStroke();
    fill(200);
    triangle(85, 5, 85, -5, 100, 0);
    noFill();
    stroke(80, 60, 0);
    strokeWeight(10);
    arc(0, 0, 105, 150, radians(-90), radians(90));
    popMatrix();
    
    noStroke();
    
    fill(242, 218, 194);
    rect(0, -142, 140, 140, 20);
    
    fill(150, 64, 11);
    ellipse(-25,-130,25,25);
    ellipse(25,-130,25,25);
    
    fill(242, 218, 194);
    ellipse(22, 36, 35, 35);
    ellipse(15, -45, 35, 35);
    fill(204, 175, 120);
    pushMatrix();
    translate(0,-145);
    beginShape();
    vertex(32, -20);
    vertex(22, -30);
    vertex(-7, -18);
    vertex(-17, -25);
    vertex(-27, -16);
    vertex(-38, -17);
    // vertex(-54, -32);
    vertex(-60, 5);
    vertex(-70, 29);
    vertex(-75, -39);
    vertex(-67, -66);
    vertex(-35, -72);
    vertex(20, -73);
    vertex(63, -71);
    vertex(73, -51);
    vertex(70, -15);
    vertex(70, 15);
    vertex(50, -9);
    // vertex(46, -35);
    endShape(CLOSE);
    popMatrix();
    popMatrix();
    }
    if(z === 2){
    pushMatrix();
    translate(x, y);
    scale(s);
    rectMode(CENTER);
    noStroke();
    fill(79, 82, 30);
    (rect)(0 + sin(radians(frameCount * 10)) * 25, 0, 50, 30, 0, 20, 20, 20);
    
    (rect)(0 - sin(radians(frameCount * 10)) * 25, 0, 50, 30, 0, 20, 20, 20);
    
    pushMatrix();
    
    translate(0, -110 + sin(frameCount * 2) * 2);
    
    fill(109, 110, 65);
    (rect)(0, 78, 100, 15,20);
    
    fill(184, 160, 116);
    rect(-39, -133, 75, 130, 20,20,5,5);
    
    fill(139, 140, 81);
    (rect)(0, 0, 100, 150, 0, 0, 0, 20);
    (rect)(-20, 70, 60, 25, 0, 0, 10, 20);
    // (rect)(42, 70, 15, 25, 0, 0, 20, 10);
    
    fill(138, 119, 80);
    // (rect)(20, -42, 40, 60, 0, 0, 200, 0);
    (rect)(30, -42, 40, 60, 0, 0, 0, 200);
    (rect)(35,-20,25,40,50, 0, 0, 50);
    
    noFill();
    stroke(128, 106, 56);
    strokeWeight(3);
    // line(38,-23,14,-3);
    line(10,-24,31,0);
    strokeWeight(4);
    stroke(97, 79, 34);
    line(25,-75,50,-53);
    line(-48,-40,50,-50);
    line(48,-35,50,-47);
    strokeCap(SQUARE);
    strokeWeight(12);
    line(-50,10,50,10);
    strokeWeight(2);
    stroke(85, 89, 32);
    fill(255);
    quad(35,-78,50,-78,50,-60,45,-60);
    noStroke();
    fill(127, 128, 75);
    quad(10,75,50,75,50,40,40,40);
    fill(60, 20, 0);
    rect(-65, -20, 5, 100);
    rect(-55, -20, 5, 100);
    rect(-75, -20, 5, 100);
    fill(100, 60, 0);
    rect(-65, 0, 30, 100);
    
    // pushMatrix();
    // translate(-51,68);
    // noFill();//the bow, stolen from Architect. Will fix later
    // stroke(191, 191, 191);
    // strokeWeight(3);
    // line(-4,-61,117,-133);
    // stroke(125, 67, 0);
    // strokeWeight(10);
    // bezier(-4,-60,-3,-102,60,-152,118,-134);
    // noStroke();
    // popMatrix();
    
    fill(242, 218, 194);
    rect(0, -142, 140, 140, 20);
    
    fill(150, 64, 11);
    ellipse(45,-130,25,25);
    
    fill(242, 218, 194);
    ellipse(120, -19, 35, 35);
    fill(204, 175, 120);
    pushMatrix();
    translate(70,-145);
    beginShape();
    vertex(-7, -18);
    vertex(-17, -25);
    vertex(-27, -16);
    vertex(-38, -17);
    // vertex(-54, -32);
    vertex(-60, 5);
    vertex(-70, 29);
    vertex(-87, 43);
    vertex(-97, 75);
    vertex(-147, 75);
    vertex(-147, -65);
    vertex(-139, -68);
    vertex(-129, -70);
    vertex(-35, -72);
    vertex(1, -68);
    vertex(6, -57);
    vertex(6, -27);
    endShape(CLOSE);
    popMatrix();
    pushMatrix();
    translate(65, -19);
    rotate(0);
    noFill();
    strokeCap(PROJECT);
    stroke(180);
    strokeWeight(4);
    line(0, -75, -60, 0);
    line(-60, 0, 0, 75);
    stroke(80, 60, 0);
    strokeWeight(10);
    arc(0, 0, 105, 150, radians(-90), radians(90));
    popMatrix();
    noStroke();
    fill(60, 20, 0);
    rect(70, -20, 130, 5);
    fill(200);
    triangle(130, -25, 130, -15, 150, -20);
    fill(242, 218, 194);
    ellipse(20, -19, 35, 35);
    popMatrix();
    }
    if(z === 3){
    pushMatrix();
    translate(x, y);
    scale(s);
    rectMode(CENTER);
    noStroke();
    fill(79, 82, 30);
    (rect)(0 + sin(radians(frameCount * 10)) * 25, 0, 50, 30, 20, 0, 20, 20);
    
    (rect)(0 - sin(radians(frameCount * 10)) * 25, 0, 50, 30, 20, 0, 20, 20);
    
    pushMatrix();
    
    translate(0, -110 + sin(radians(frameCount * 2)) * 2);
    
    fill(109, 110, 65);
    (rect)(0, 78, 100, 15,20);
    
    fill(184, 160, 116);
    rect(39, -133, 75, 130, 20,20,5,5);
    
    fill(139, 140, 81);
    (rect)(0, 0, 100, 150, 0, 0, 0, 20);
    (rect)(20, 70, 60, 25, 0, 0, 10, 20);
    // (rect)(42, 70, 15, 25, 0, 0, 20, 10);
    
    fill(138, 119, 80);
    // (rect)(20, -42, 40, 60, 0, 0, 200, 0);
    (rect)(-30, -42, 40, 60, 0, 0, 200, 0);
    (rect)(-38,-20,25,40,50, 0, 50, 0);
    
    noFill();
    stroke(128, 106, 56);
    strokeWeight(3);
    // line(38,-23,14,-3);
    line(-10,-24,-31,0);
    strokeWeight(4);
    stroke(97, 79, 34);
    line(48,-126,-42,-50);
    line(-48,-48,-42,-50);
    line(48,-8,-42,-50);
    strokeCap(SQUARE);
    strokeWeight(12);
    line(-50,10,50,10);
    strokeWeight(2);
    stroke(255);
    ellipse(-42, -50, 10, 10);
    stroke(85, 89, 32);
    fill(255);
    quad(-35,-78,-50,-78,-50,-60,-45,-60);
    noStroke();
    fill(127, 128, 75);
    quad(-10,75,-50,75,-50,40,-40,40);
    fill(60, 20, 0);
    rect(65, -20, 5, 100);
    rect(55, -20, 5, 100);
    rect(75, -20, 5, 100);
    fill(100, 60, 0);
    rect(65, 0, 30, 100);
    
    // pushMatrix();
    // translate(-51,68);
    // noFill();//the bow, stolen from Architect. Will fix later
    // stroke(191, 191, 191);
    // strokeWeight(3);
    // line(-4,-61,117,-133);
    // stroke(125, 67, 0);
    // strokeWeight(10);
    // bezier(-4,-60,-3,-102,60,-152,118,-134);
    // noStroke();
    // popMatrix();
    
    fill(242, 218, 194);
    rect(0, -142, 140, 140, 20);
    
    fill(150, 64, 11);
    ellipse(-45,-130,25,25);
    
    fill(242, 218, 194);
    ellipse(-120, -19, 35, 35);
    fill(204, 175, 120);
    pushMatrix();
    translate(-70,-145);
    beginShape();
    vertex(32, -20);
    vertex(22, -30);
    vertex(0, -18);
    vertex(-10, -25);
    // vertex(-54, -32);
    vertex(-5, -66);
    vertex(20, -73);
    vertex(63, -71);
    vertex(110, -73);
    vertex(145, -65);
    vertex(149, -1);
    vertex(152, 80);
    vertex(95, 80);
    vertex(91, 54);
    vertex(69, 29);
    vertex(68, 15);
    vertex(50, -9);
    // vertex(46, -35);
    endShape(CLOSE);
    popMatrix();
    pushMatrix();
    translate(-65, -19);
    rotate(0);
    noFill();
    strokeCap(PROJECT);
    stroke(180);
    strokeWeight(4);
    line(0, -75, 60, 0);
    line(60, 0, 0, 75);
    stroke(80, 60, 0);
    strokeWeight(10);
    arc(0, 0, 105, 150, radians(90), radians(270));
    popMatrix();
    noStroke();
    fill(60, 20, 0);
    rect(-70, -20, 130, 5);
    fill(200);
    triangle(-130, -25, -130, -15, -150, -20);
    fill(242, 218, 194);
    ellipse(-20, -19, 35, 35);
    popMatrix();
    }
    if(z === 4){
    pushMatrix();
    translate(x, y);
    scale(s);
    rectMode(CENTER);
    noStroke();
    fill(79, 82, 30);
    (rect)(30 + sin(radians(frameCount * 2)) * 2, 0, 50, 30, 0, 20, 20, 20);
    
    (rect)(-30 - sin(radians(frameCount * 2)) * 2, 0, 50, 30, 20, 0, 20, 20);
    
    pushMatrix();
    
    translate(0, -110 + sin(radians(frameCount * 2)) * 2);
    
    fill(139, 140, 81);
    (rect)(0, 0, 100, 150, 0, 0, 20, 20);
    (rect)(-43, 70, 15, 25, 0, 0, 10, 20);
    (rect)(42, 70, 15, 25, 0, 0, 20, 10);
    
    fill(138, 119, 80);
    (rect)(20, -42, 40, 60, 0, 0, 200, 0);
    (rect)(-20, -42, 40, 60, 0, 0, 0, 200);
    (rect)(0,-20,50,40,50);
    
    noFill();
    strokeWeight(1);
    stroke(97, 79, 34);
    line(0,-90,-1,-1);
    stroke(128, 106, 56);
    strokeWeight(3);
    line(38,-23,14,-3);
    line(-38,-23,-14,-3);
    strokeWeight(4);
    stroke(97, 79, 34);
    line(25,-75,10,-50);
    line(-48,-40,10,-50);
    line(48,-35,10,-50);
    strokeCap(SQUARE);
    strokeWeight(12);
    line(-50,10,50,10);
    strokeWeight(2);
    stroke(255);
    ellipse(10,-50,10,10);
    stroke(85, 89, 32);
    fill(255);
    quad(-15,-78,15,-78,5,-60,-5,-60);
    noStroke();
    fill(127, 128, 75);
    quad(-35,75,35,75,5,40,-5,40);
    
    pushMatrix();
    translate(20, -19);
    rotate(80);
    noFill();
    strokeCap(PROJECT);
    stroke(180);
    strokeWeight(4);
    line(0, -75, -30, 0);
    line(-30, 0, 0, 75);
    stroke(60, 20, 0);
    line(-30, 0, 90, 0);
    noStroke();
    fill(200);
    triangle(85, 5, 85, -5, 100, 0);
    noFill();
    stroke(80, 60, 0);
    strokeWeight(10);
    arc(0, 0, 105, 150, radians(-90), radians(90));
    popMatrix();
    
    noStroke();
    
    fill(242, 218, 194);
    rect(0, -142, 140, 140, 20);
    
    fill(150, 64, 11);
    ellipse(-25,-130,25,25);
    ellipse(25,-130,25,25);
    
    fill(242, 218, 194);
    ellipse(22, 36, 35, 35);
    ellipse(15, -45, 35, 35);
    fill(204, 175, 120);
    pushMatrix();
    translate(0,-145);
    beginShape();
    vertex(32, -20);
    vertex(22, -30);
    vertex(-7, -18);
    vertex(-17, -25);
    vertex(-27, -16);
    vertex(-38, -17);
    // vertex(-54, -32);
    vertex(-60, 5);
    vertex(-70, 29);
    vertex(-75, -39);
    vertex(-67, -66);
    vertex(-35, -72);
    vertex(20, -73);
    vertex(63, -71);
    vertex(73, -51);
    vertex(70, -15);
    vertex(70, 15);
    vertex(50, -9);
    // vertex(46, -35);
    endShape(CLOSE);
    popMatrix();
    fill(109, 110, 65);
    (rect)(0, 78, 100, 15,20);
    fill(139, 140, 81);
    (rect)(0, 0, 100, 150, 0, 0, 20, 20);
    fill(201, 173, 125);
    rect(-1, -133, 149, 130, 20,20,5,5);
    
    stroke(97, 79, 34);
    strokeCap(SQUARE);
    strokeWeight(12);
    line(-50,10,50,10);
    strokeWeight(4);
    stroke(97, 79, 34);
    line(-50, -40, 50, -40);
    noStroke();
    fill(80, 60, 0);
    rect(0, 0, 30, 100);
    rect(-10, -20, 5, 100);
    rect(0, -20, 5, 100);
    rect(10, -20, 5, 100);
    fill(225, 0, 0);
    quad(12.5, -60, 15, -65, 15, -75, 12.5, -70);
    quad(10, -60, 7.5, -65, 7.5, -75, 10, -70);
    quad(12.5-10, -60, 15-10, -65, 15-10, -75, 12.5-10, -70);
    quad(10-10, -60, 7.5-10, -65, 7.5-10, -75, 10-10, -70);
    quad(12.5-20, -60, 15-20, -65, 15-20, -75, 12.5-20, -70);
    quad(10-20, -60, 7.5-20, -65, 7.5-20, -75, 10-20, -70);
    
    popMatrix();
    }
    
    popMatrix();
};// A lego that is last
var b12counter = 1;
var TN1B12P = function(x,y,s,z){
    if(z === 1){
    pushMatrix();
    translate(x, y);
    scale(s);
    rectMode(CENTER);
    noStroke();
    
    (rect)(30 + sin(radians(frameCount * 2)) * 2, 100, 50, 30, 0, 20, 20, 20);
    
    (rect)(-30 - sin(radians(frameCount * 2)) * 2, 100, 50, 30, 20, 0, 20, 20);
  
    fill(135, 135, 135);
    (rect)(0, 0, 100, 150, 0, 0, 20, 20);
    
    noFill();
    stroke(15,10,10,90);
    strokeWeight(1);
    line(0,-70,0,72);

    strokeWeight(10);
    for(var points = -60;points < 61;points += 30){
        point(-9,points);
        point(9,points);
    }
    
    noStroke();
    fill(107, 107, 107);
    rect(0, -142, 140, 140, 20);
    
    stroke(150, 150, 150);
    fill(133, 255, 237);
    rect(0, -142, 110, 110, 20);
    noStroke();
    /*
    fill(235, 124, 124);
    rect(0,-110,100,50,10);
    */
    
    fill(255, 0, 0);
    rect(-25,-160,20,20,10);
    rect(25,-160,20,20,10);
    
    for(var i = 0; i < 50; i+=3){
        fill(255,255,255,20);
        ellipse(-25,-160,-30+i+sin(radians(frameCount*2))*10,-20+i-sin(radians(frameCount*2))*10);
        ellipse(25,-160,-30+i+sin(radians(frameCount*2))*10,-20+i-sin(radians(frameCount*2))*10);
        fill(255, 0, 0,20);
        ellipse(-25,-160,-20+i+sin(radians(frameCount*2))*10,-30+i-sin(radians(frameCount*2))*10);
        ellipse(25,-160,-20+i+sin(radians(frameCount*2))*10,-30+i-sin(radians(frameCount*2))*10);
    }
    
  //a circle of sorts
    noStroke();
    pushMatrix();
    translate(0,-59);
    rotate(cos(frameCount));
    scale(0.5);//it's going negative for some reason
    
    
    var base12 = ["0","1","2","3","4","5","6","7","8","9","ⵒ","Ɛ"];
    

    if(frameCount%60 === 0){
        b12counter++;
        if(b12counter >= 12){
            b12counter = 1;
        }
        
    }
    

        stroke(77,235,65);
        strokeWeight(3);
        fill(64,162,235);
        ellipse(47,24,100,100);
        fill(235,178,65);
        textAlign(CENTER,CENTER);
        textSize(100);
        text(base12[b12counter],47,24);
    
    
    
    noStroke();
    
    popMatrix();
    
    stroke(212, 212, 212);
    strokeWeight(3);
    fill(156, 156, 156);
    ellipse(55, -sin(radians(frameCount))*10, 35, 35);
    ellipse(-55, -19-cos(radians(frameCount))*10, 35, 35);
  
    popMatrix();
    }
    if(z === 2){
    pushMatrix();
    translate(x, y);
    scale(s);
    rectMode(CENTER);
    noStroke();
    
    (rect)(0 + sin(radians(frameCount * 10)) * 25, 100, 50, 30, 20, 0, 20, 20);
    
    (rect)(0 - sin(radians(frameCount * 10)) * 25, 100, 50, 30, 20, 0, 20, 20);
  
    fill(135, 135, 135);
    (rect)(0, 0, 100, 150, 0, 0, 20, 20);
    
    noFill();
    stroke(15,10,10,90);
    strokeWeight(1);
    line(0,-70,0,72);

    strokeWeight(10);
    for(var points = -60;points < 61;points += 30){
        point(-9,points);
        point(9,points);
    }
    
    noStroke();
    fill(107, 107, 107);
    rect(0, -142, 140, 140, 20);
    fill(150);
    rect(-10, -142, 120, 120, 5, 20, 20, 5);
    fill(133, 255, 237);
    rect(-15, -142, 110, 110, 0, 20, 20, 0);
    noStroke();
    /*
    fill(235, 124, 124);
    rect(0,-110,100,50,10);
    */
    
    fill(255, 0, 0);
    rect(-40,-160,20,20,10);
    
    for(var i = 0; i < 50; i+=3){
        fill(255,255,255,20);
        ellipse(-40,-160,-30+i+sin(radians(frameCount*2))*10,-20+i-sin(frameCount*2)*10);
        fill(255, 0, 0,20);
        ellipse(-40,-160,-20+i+sin(radians(frameCount*2))*10,-30+i-sin(frameCount*2)*10);
    }
    
  //a circle of sorts
    noStroke();
    
    popMatrix();
    stroke(212, 212, 212);
    strokeWeight(3);
    fill(156, 156, 156);
    ellipse(100, 200-sin(radians(frameCount))*10, 35, 35);
    ellipse(125, 219+sin(radians(frameCount))*10, 35, 35);
  
    popMatrix();
    }
    if(z === 3){
    pushMatrix();
    translate(x, y);
    scale(s);
    rectMode(CENTER);
    noStroke();
    
    (rect)(0 + sin(radians(frameCount * 10)) * 25, 100, 50, 30, 0, 20, 20, 20);
    
    (rect)(0 - sin(radians(frameCount * 10)) * 25, 100, 50, 30, 0, 20, 20, 20);
  
    fill(135, 135, 135);
    (rect)(0, 0, 100, 150, 0, 0, 20, 20);
    
    noFill();
    stroke(15,10,10,90);
    strokeWeight(1);
    line(0,-70,0,72);

    strokeWeight(10);
    for(var points = -60;points < 61;points += 30){
        point(-9,points);
        point(9,points);
    }
    
    noStroke();
    fill(107, 107, 107);
    rect(0, -142, 140, 140, 20);
    fill(150);
    rect(10, -142, 120, 120, 20, 5, 5, 20);
    fill(133, 255, 237);
    rect(15, -142, 110, 110, 20, 0, 0, 20);
    noStroke();
    /*
    fill(235, 124, 124);
    rect(0,-110,100,50,10);
    */
    
    fill(255, 0, 0);
    rect(40,-160,20,20,10);
    
    for(var i = 0; i < 50; i+=3){
        fill(255,255,255,20);
        ellipse(40,-160,-30+i+sin(radians(frameCount*2))*10,-20+i-sin(radians(frameCount*2))*10);
        fill(255, 0, 0,20);
        ellipse(40,-160,-20+i+sin(radians(frameCount*2))*10,-30+i-sin(radians(frameCount*2))*10);
    }
    
  //a circle of sorts
    noStroke();
    
    popMatrix();
    stroke(212, 212, 212);
    strokeWeight(3);
    fill(156, 156, 156);
    ellipse(270, 200-sin(radians(frameCount))*10, 35, 35);
    ellipse(295, 219+sin(radians(frameCount))*10, 35, 35);
  
    popMatrix();
    }
    if(z === 4){
    pushMatrix();
    translate(x, y);
    scale(s);
    rectMode(CENTER);
    noStroke();
    
    stroke(212, 212, 212);
    strokeWeight(3);
    fill(156, 156, 156);
    ellipse(55, -sin(radians(frameCount))*10, 35, 35);
    ellipse(-55, -19-cos(radians(frameCount))*10, 35, 35);
    
    noStroke();
    
    (rect)(30 + sin(radians(frameCount * 2)) * 2, 100, 50, 30, 0, 20, 20, 20);
    
    (rect)(-30 - sin(radians(frameCount * 2)) * 2, 100, 50, 30, 20, 0, 20, 20);
  
    fill(135, 135, 135);
    (rect)(0, 0, 100, 150, 0, 0, 20, 20);
    
    noFill();
    stroke(15,10,10,90);
    strokeWeight(1);
    line(0,-70,0,72);

    strokeWeight(10);
    for(var points = -60;points < 61;points += 30){
        point(-9,points);
        point(9,points);
    }
    
    noStroke();
    fill(107, 107, 107);
    rect(0, -142, 140, 140, 20);
    
    noStroke();
    
    popMatrix();
    
  
    popMatrix();
    }
};// An all powerful supercomputer supportive of universal base-12 time. Also a ghost for some reason as well
var fourxsquared = function(x,y,s,z){
    var gear = function(x, y, size, r) { // gear
        pushMatrix();
        translate(x, y);
        scale(size);
        rotate(r);
            
        for (var i = 0; i < 7; i++) {
            pushMatrix();
            rotate(i * 51);
                
            noStroke();
            fill(35, 35, 35);
            quad(13, -10, 25, -5, 25, 5, 13, 10);
            popMatrix();
        }
        
        noFill();
        strokeWeight(3);
        stroke(25, 25, 25);
        ellipse(0, 0, 27, 27);
        strokeWeight(3);
        ellipse(0, 0, 20, 20);
        popMatrix();
    };
    if(z === 1){
    pushMatrix();
    translate(x, y);
    scale(s);
    
    rectMode(CENTER);
    
    noStroke();
    fill(50, 50, 50);
    (rect)(51 - sin(radians(frameCount * 2)) * 1.5, 0, 50, 30, 20, 0, 20, 20); // left foot
    (rect)(134 + sin(radians(frameCount * 2)) * 1.5, 0, 50, 30, 0, 20, 20, 20); // right foot
    
    pushMatrix();
    translate(85, -110 + sin(radians(frameCount * 2)) * 2);
    
    fill(225, 225, 225);
    rect(0, 0, 90, 150, 0, 0, 20, 20); // body
    
    fill(255, 212, 127);
    // rect(0, -142, 140, 140, 20); // head
    (rect)(0, -132, 140, 120, 0, 0, 20, 20); // head
    
    fill(255, 36, 98);
    arc(32, -191, 50, 60, PI, radians(360)); // brains
    fill(255, 0, 77);
    arc(55, -191, 30, 30, PI, radians(360));
    
    fill(255, 76, 76);
    triangle(35, -127, 27, -127, 40, -100); // scar
    triangle(30, -80, 37, -110, 40, -100);
    
    fill(30, 30, 30);
    ellipse(-30, -142, 30, 30); // left eye
    ellipse(30, -142, 30, 30); // right eye
    fill(194, 24, 24);
    ellipse(-30, -142, 25, 25); // left eye
    ellipse(30, -142, 25, 25); // right eye
    
    fill(255, 212, 127);
    rect(0, -157, 85, 10); // eyelids
    
    // fill(140, 56, 0);
    strokeWeight(2);
    stroke(225, 225, 225);
    fill(255, 255, 255, 75);
    // (rect)(40, -220, 80, 60, 0, 40, 0, 20); // hair back right
    (rect)(35, -220, 70, 60, 0, 40, 0, 20); // glass back right
    
    noStroke();
    fill(180, 74, 0);
    (rect)(-40, -210, 100, 100, 40, 20, 40, 0); // hair back left
    fill(140, 56, 0);
    (rect)(-55, -180, 50, 80, 20, 0, 20, 0); // hair left
    fill(153, 61, 0);
    (rect)(-15, -210, 85, 60, 20, 0, 30, 0); // hair center
    fill(189, 100, 40);
    (rect)(-25, -185, 50, 45, 20, 0, 30, 0); // hair front center
    fill(153, 61, 0);
    (rect)(65, -170, 30, 50, 0, 20, 0, 20); // hair right
    // fill(180, 74, 0);
    // rect(0, -80, 40, 25, 10);
    
    gear(0, 0, 1.3, 0);
    
    noStroke(); // shirt
    fill(171, 21, 63);
    (rect)(-37, -5, 27, 135, 0, 0, 20, 0);
    (rect)(37, -5, 27, 135, 0, 0, 0, 20);
    fill(133, 17, 50);
    (rect)(-40, 30, 27, 35, 0, 0, 20, 20);
    (rect)(40, 30, 27, 35, 0, 0, 20, 20);
    
    fill(255, 212, 127); // fill skin
    ellipse(-55, 0, 35, 35); // left hand
    ellipse(100, -20, 35, 35); // right hand
    
    pushMatrix(); // taco
    translate(100, -35);
    
    for (var i = 0; i < 4; i++) { // lettuce
        pushMatrix();
        rotate(i * 40 + 13);
        
        fill(75, 133, 0);
        triangle(-50, -15, -20, 15, -40, -20);
        popMatrix();
    }
    for (var i = 0; i < 5; i++) { // tomato
        pushMatrix();
        rotate(i * 40 + 10);
        
        fill(184, 46, 46);
        ellipse(-37, 0, 20, 20);
        popMatrix();
    }
    
    fill(222, 201, 64);
    ellipse(0, 0, 80, 15);
    arc(0, 0, 80, 93, radians(180), radians(360));
    fill(199, 181, 64);
    ellipse(-20, -20, 15, 15);
    ellipse(-10, -5, 10, 10);
    
    fill(241, 87, 255, 17);
    
    for (var i = 0; i < 3; i++) {
        ellipse(0, -15, 120 + i * 10, 100 + i * 10);
    }
    popMatrix();
    popMatrix();
    popMatrix();
    }
    if(z === 2){
    pushMatrix();
    translate(x, y);
    scale(s);
    
    rectMode(CENTER);
    
    noStroke();
    fill(50, 50, 50);
    (rect)(90 + sin(radians(frameCount * 10)) * 25, 0, 50, 30, 0, 20, 20, 20); // left foot
    (rect)(90 - sin(radians(frameCount * 10)) * 25, 0, 50, 30, 0, 20, 20, 20); // right foot
    
    pushMatrix();
    translate(85, -110 + sin(radians(frameCount * 2)) * 2);
    
    fill(255, 212, 127); // fill skin
    ellipse(62, -20, 35, 35); // right hand
    
    pushMatrix(); // taco
    translate(62, -35);
    
    for (var i = 0; i < 4; i++) { // lettuce
        pushMatrix();
        rotate(i * 40 + 13);
        
        fill(75, 133, 0);
        triangle(-50, -15, -20, 15, -40, -20);
        popMatrix();
    }
    for (var i = 0; i < 5; i++) { // tomato
        pushMatrix();
        rotate(i * 40 + 10);
        
        fill(184, 46, 46);
        ellipse(-37, 0, 20, 20);
        popMatrix();
    }
    
    fill(222, 201, 64);
    ellipse(0, 0, 80, 15);
    arc(0, 0, 80, 93, radians(180), radians(360));
    fill(199, 181, 64);
    ellipse(-20, -20, 15, 15);
    ellipse(-10, -5, 10, 10);
    
    fill(241, 87, 255, 17);
    
    for (var i = 0; i < 3; i++) {
        ellipse(0, -15, 120 + i * 10, 100 + i * 10);
    }
    popMatrix();
    
    fill(225, 225, 225);
    rect(0, 0, 90, 150, 0, 0, 20, 20); // body
    
    fill(255, 212, 127);
    // rect(0, -142, 140, 140, 20); // head
    (rect)(0, -132, 140, 120, 0, 0, 20, 20); // head
    
    fill(255, 36, 98);
    arc(32, -191, 50, 60, radians(180), radians(360)); // brains
    fill(255, 0, 77);
    arc(55, -191, 30, 30, PI, radians(360));
    
    fill(30, 30, 30);
    ellipse(40, -142, 30, 30); // right eye
    fill(194, 24, 24);
    ellipse(40, -142, 25, 25); // right eye
    
    fill(255, 212, 127);
    rect(10, -157, 85, 10); // eyelids
    
    // fill(140, 56, 0);
    strokeWeight(2);
    stroke(225, 225, 225);
    fill(255, 255, 255, 75);
    // (rect)(40, -220, 80, 60, 0, 40, 0, 20); // hair back right
    (rect)(35, -220, 70, 60, 0, 40, 0, 20); // glass back right
    
    noStroke();
    fill(180, 74, 0);
    (rect)(1, -210, 150, 100, 40, 20, 40, 0); // hair back left
    fill(140, 56, 0);
    (rect)(5, -180, 50, 80, 20, 0, 20, 0); // hair left
    fill(153, 61, 0);
    (rect)(55, -210, 85, 60, 20, 0, 30, 0); // hair center
    fill(189, 100, 40);
    (rect)(45, -185, 50, 45, 20, 0, 30, 0); // hair front center
    // fill(180, 74, 0);
    // rect(0, -80, 40, 25, 10);
    
    // gear(45, 0, 1.3, 0);
    
    
    noStroke(); // shirt
    fill(171, 21, 63);
    (rect)(-5, -5, 77, 135, 0, 0, 20, 0);
    fill(133, 17, 50);
    (rect)(20, 30, 27, 35, 0, 0, 20, 20);
    
    fill(255, 212, 127);
    ellipse(25, 0, 35, 35); // left hand
    popMatrix();
    popMatrix();
    }
    if(z === 3){
    pushMatrix();
    translate(x, y);
    scale(s);
    
    rectMode(CENTER);
    
    noStroke();
    fill(50, 50, 50);
    (rect)(90 + sin(radians(frameCount * 10)) * 25, 0, 50, 30, 20, 0, 20, 20); // left foot
    (rect)(90 - sin(radians(frameCount * 10)) * 25, 0, 50, 30, 20, 0, 20, 20); // right foot
    
    pushMatrix();
    translate(85, -110 + sin(radians(frameCount * 2)) * 2);
    
        
    
    fill(255, 212, 127); // fill skin
    ellipse(-62, -20, 35, 35); // left hand
    
    pushMatrix(); // taco
    translate(-62, -35);
    
    for (var i = 0; i < 4; i++) { // lettuce
        pushMatrix();
        rotate(i * 40 + 13);
        
        fill(75, 133, 0);
        triangle(-50, -15, -20, 15, -40, -20);
        popMatrix();
    }
    for (var i = 0; i < 5; i++) { // tomato
        pushMatrix();
        rotate(i * 40 + 10);
        
        fill(184, 46, 46);
        ellipse(-37, 0, 20, 20);
        popMatrix();
    }
    
    fill(222, 201, 64);
    ellipse(0, 0, 80, 15);
    arc(0, 0, 80, 93, PI, radians(360));
    fill(199, 181, 64);
    ellipse(-20, -20, 15, 15);
    ellipse(-10, -5, 10, 10);
    
    fill(241, 87, 255, 17);
    
    for (var i = 0; i < 3; i++) {
        ellipse(0, -15, 120 + i * 10, 100 + i * 10);
    }
    popMatrix();
    
    fill(225, 225, 225);
    rect(0, 0, 90, 150, 0, 0, 20, 20); // body
    
    fill(189, 100, 40);
    (rect)(25, -185, 50, 45, 0, 20, 0, 30); // hair front center
    fill(153, 61, 0);
    (rect)(15, -210, 85, 60, 0, 20, 0, 30); // hair center
    fill(140, 56, 0);
    (rect)(55, -180, 50, 80, 0, 20, 0, 20); // hair left
    fill(180, 74, 0);
    (rect)(40, -210, 100, 100, 0, 40, 0, 20); // hair back left
    
    fill(255, 212, 127);
    // rect(0, -142, 140, 140, 20); // head
    (rect)(0, -132, 140, 120, 0, 0, 20, 20); // head
    
    fill(255, 36, 98);
    arc(32, -191, 50, 60, PI, radians(360)); // brains
    arc(-32, -191, 50, 60, PI, radians(360));
    fill(255, 127, 127);
    arc(-4, -191, 50, 60, PI, radians(360));
    fill(255, 0, 77);
    arc(55, -191, 30, 30, PI, radians(360));
    arc(15, -191, 30, 30, PI, radians(360));
    arc(-25, -191, 30, 30, PI, radians(360));
    arc(-55, -191, 30, 30, PI, radians(360));
    
    fill(255, 76, 76);
    triangle(-45, -127, -37, -127, -30, -100); // scar
    triangle(-40, -80, -36, -110, -31, -100);
    
    fill(30, 30, 30);
    ellipse(-40, -142, 30, 30); // right eye
    fill(194, 24, 24);
    ellipse(-40, -142, 25, 25); // right eye
    
    fill(255, 212, 127);
    rect(-10, -157, 85, 10); // eyelids
    // fill(140, 56, 0);
    strokeWeight(2);
    stroke(225, 225, 225);
    fill(255, 255, 255, 75);
    // (rect)(40, -220, 80, 60, 0, 40, 0, 20); // hair back right
    (rect)(0, -220, 140, 60, 20, 40, 0, 0); // glass back right
    
    noStroke();
    fill(153, 61, 0);
    (rect)(-2, -170, 30, 50, 0, 20, 0, 20); // hair right
    // fill(180, 74, 0);
    // rect(0, -80, 40, 25, 10);
    
    // gear(0, 0, 1.3, 0);
    
    noStroke(); // shirt
    fill(171, 21, 63);
    (rect)(5, -5, 77, 135, 0, 0, 0, 20);
    fill(133, 17, 50);
    (rect)(-20, 30, 27, 35, 0, 0, 20, 20);
    
    fill(255, 212, 127); // fill skin
    ellipse(-25, 0, 35, 35); // right hand
    popMatrix();
    popMatrix();
    }
    if(z === 4){
    pushMatrix();
    translate(x, y);
    scale(s);
    
    rectMode(CENTER);
    
    noStroke();
    fill(50, 50, 50);
    (rect)(51 - sin(radians(frameCount * 2)) * 1.5, 0, 50, 30, 20, 0, 20, 20); // left foot
    (rect)(134 + sin(radians(frameCount * 2)) * 1.5, 0, 50, 30, 0, 20, 20, 20); // right foot
    
    pushMatrix();
    translate(85, -110 + sin(radians(frameCount * 2)) * 2);
    
    fill(255, 212, 127); // fill skin
    ellipse(55, 0, 35, 35); // left hand
    ellipse(-100, -20, 35, 35); // right hand
    
    pushMatrix(); // taco
    translate(-100, -35);
    
    for (var i = 0; i < 4; i++) { // lettuce
        pushMatrix();
        rotate(i * 40 + 13);
        
        fill(75, 133, 0);
        triangle(-50, -15, -20, 15, -40, -20);
        popMatrix();
    }
    for (var i = 0; i < 5; i++) { // tomato
        pushMatrix();
        rotate(i * 40 + 10);
        
        fill(184, 46, 46);
        ellipse(-37, 0, 20, 20);
        popMatrix();
    }
    
    fill(222, 201, 64);
    ellipse(0, 0, 80, 15);
    arc(0, 0, 80, 93, PI, radians(360));
    fill(199, 181, 64);
    ellipse(-20, -20, 15, 15);
    ellipse(-10, -5, 10, 10);
    
    fill(241, 87, 255, 17);
    
    for (var i = 0; i < 3; i++) {
        ellipse(0, -15, 120 + i * 10, 100 + i * 10);
    }
    popMatrix();
    
    fill(225, 225, 225);
    rect(0, 0, 90, 150, 0, 0, 20, 20); // body
    
    fill(255, 212, 127);
    // rect(0, -142, 140, 140, 20); // head
    (rect)(0, -132, 140, 120, 0, 0, 20, 20); // head
    
    fill(255, 36, 98);
    arc(-32, -191, 50, 60, PI, radians(360)); // brains
    fill(255, 0, 77);
    arc(-55, -191, 30, 30, PI, radians(360));
    
    // fill(140, 56, 0);
    strokeWeight(2);
    stroke(225, 225, 225);
    fill(255, 255, 255, 75);
    // (rect)(40, -220, 80, 60, 0, 40, 0, 20); // hair back right
    (rect)(-35, -220, 70, 60, 40, 0, 20, 0); // glass back right
    
    noStroke();
    fill(180, 74, 0);
    (rect)(40, -210, 100, 100, 20, 40, 0, 40); // hair back left
    fill(140, 56, 0);
    (rect)(55, -180, 50, 80, 0, 20, 0, 20); // hair left
    fill(153, 61, 0);
    (rect)(15, -210, 85, 60, 0, 20, 0, 30); // hair center
    fill(189, 100, 40);
    (rect)(25, -185, 50, 45, 0, 20, 0, 30); // hair front center
    fill(153, 61, 0);
    (rect)(-65, -170, 30, 50, 20, 0, 20, 0); // hair right
    // fill(180, 74, 0);
    // rect(0, -80, 40, 25, 10);
    
    // gear(0, 0, 1.3, 0);
    
    noStroke(); // shirt
    fill(171, 21, 63);
    rect(0, -5, 102, 135);
    
    popMatrix();
    popMatrix();
    }
}; // One of the Supreme Taco Overlord's many forms. The final mandatory hacked user who uses magic tacos. They aren't edible.
//}Hacked users
// Other peeps {
var Lemira = function(x, y, s, z){
    if(z === 1){
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    rectMode(CORNER);
    
    noStroke();
    
    fill(112, 103, 120);
    
    (rect)(11 + sin(radians(frameCount * 2)) * 1.5, -30, 35, 30, 20, 0, 20, 20);
    
    (rect)(51 - sin(radians(frameCount * 2)) * 1.5, -30, 35, 30, 0, 20, 20, 20);
    
    rectMode(CENTER);
    
    fill(140, 84, 11);
    
    (rect)(47.5, -153, 100, 97, 42, 42, 5, 5);
    
    fill(50, 0, 97);
    
    (rect)(47.5, -75, 57, 74, 0, 0, 20, 20);
    
    fill(158, 216, 217);
    
    quad(88, -37, 76, -66, 17, -67, 10, -37);
    
    fill(127, 175, 176);
    
    rect(47, -68, 60, 7, 50);
   
    fill(175, 222, 187);
    
    arc(48, -114, 49, 32, radians(-12), radians(186));
    
    fill(255, 235, 219);
    
    rect(47.5, -152, 80, 80, 20);
    
    fill(mouseX, mouseY, 150, 5);
    
    ellipse(33, -155, 23, 23);
    
    ellipse(64, -155, 23, 23);
    
    fill(mouseX, mouseY, 150);
    
    ellipse(33, -155, 15, 15);
    
    ellipse(64, -155, 15, 15);
    
    fill(140, 84, 11);
    
    (rect)(47.5, -185, 80, 19, 50, 50, 0, 0);
    
    triangle(7, -180, 51, -183, 5, -155);
    
    triangle(37, -180, 76, -180, 38, -168);
    
    triangle(44, -180, 90, -183, 89, -169);
    
    fill(255, 235, 219);
    
    ellipse(64, -136.3, 25, 25);
    
    ellipse(37, -92, 25, 25);
    
    ellipse(61, -81, 25, 25);
    
    fill(255, 0, 200, 25);
    
    ellipse(26, -142, 23, 7);
    
    ellipse(71, -142, 23, 7);
    
    popMatrix();
    }
    if(z === 2){
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    rectMode(CORNER);
    
    noStroke();
    
    fill(112, 103, 120);
    
    (rect)(31 + sin(radians(frameCount * 10)) * 25, -30, 35, 30, 0, 20, 20, 20);
    
    (rect)(31 - sin(radians(frameCount * 10)) * 25, -30, 35, 30, 0, 20, 20, 20);
    
    rectMode(CENTER);
    
    fill(140, 84, 11);
    
    (rect)(47.5, -153, 100, 97, 42, 42, 5, 5);
    
    fill(50, 0, 97);
    
    (rect)(47.5, -75, 57, 74, 0, 0, 20, 20);
    
    fill(158, 216, 217);
    
    quad(88, -37, 76, -66, 17, -67, 10, -37);
    
    fill(127, 175, 176);
    
    rect(47, -68, 60, 7, 50);
    
    fill(255, 235, 219);
    
    rect(47.5, -152, 80, 80, 20);
    
    fill(mouseX, mouseY, 150, 5);
    
    ellipse(70, -155, 23, 23);
    
    fill(mouseX, mouseY, 150);
    
    ellipse(70, -155, 15, 15);
    
    fill(140, 84, 11);
    
    (rect)(47.5, -185, 80, 19, 50, 50, 0, 0);
    
    triangle(37, -180, 81, -183, 35, -155);
    
    triangle(67, -180, 96, -175, 68, -168);
    
    
    fill(255, 235, 219);
    
    ellipse(51+sin(frameCount*10)*35, -91, 25, 25);
    
    fill(255, 0, 200, 25);
    
    ellipse(62, -142, 23, 7);
    
    fill(140, 84, 11);
    
    (rect)(23, -142, 50, 80, 42, 0, 5, 5);
    
    popMatrix();
    }
    if(z === 3){
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    rectMode(CORNER);
    
    noStroke();
    
    fill(112, 103, 120);
    
    (rect)(31 + sin(radians(frameCount * 10)) * 25, -30, 35, 30, 20, 0, 20, 20);
    
    (rect)(31 - sin(radians(frameCount * 10)) * 25, -30, 35, 30, 20, 0, 20, 20);
    
    rectMode(CENTER);
    
    fill(140, 84, 11);
    
    (rect)(47.5, -153, 100, 97, 42, 42, 5, 5);
    
    fill(50, 0, 97);
    
    (rect)(47.5, -75, 57, 74, 0, 0, 20, 20);
    
    fill(158, 216, 217);
    
    quad(88, -37, 76, -66, 17, -67, 10, -37);
    
    fill(127, 175, 176);
    
    rect(47, -68, 60, 7, 50);
    
    fill(255, 235, 219);
    
    rect(47.5, -152, 80, 80, 20);
    
    fill(mouseX, mouseY, 150, 5);
    
    ellipse(23, -155, 23, 23);
    
    fill(mouseX, mouseY, 150);
    
    ellipse(23, -155, 15, 15);
    
    fill(140, 84, 11);
    
    (rect)(47.5, -185, 80, 19, 50, 50, 0, 0);
    
    triangle(7, -180, 46, -180, 8, -168);
    
    triangle(14, -180, 60, -183, 59, -169);
    
    
    fill(255, 235, 219);
    
    ellipse(51+sin(radians(frameCount*10))*35, -91, 25, 25);
    ellipse(23, -136.3, 25, 25);
    
    fill(255, 0, 200, 25);
    
    ellipse(30, -142, 23, 7);
    
    fill(140, 84, 11);
    
    (rect)(73, -142, 50, 80, 0, 42, 5, 5);
    
    popMatrix();
    }
    if(z === 4){
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    rectMode(CORNER);
    
    noStroke();
    
    fill(255, 235, 219);
    
    ellipse(27, -92, 25, 25);
    
    ellipse(71, -81, 25, 25);
    
    fill(112, 103, 120);
    
    (rect)(11 + sin(radians(frameCount * 2)) * 1.5, -30, 35, 30, 20, 0, 20, 20);
    
    (rect)(51 - sin(radians(frameCount * 2)) * 1.5, -30, 35, 30, 0, 20, 20, 20);
    
    rectMode(CENTER);
    
    fill(50, 0, 97);
    
    (rect)(47.5, -75, 57, 74, 0, 0, 20, 20);
    
    fill(158, 216, 217);
    
    quad(88, -37, 76, -66, 17, -67, 10, -37);
    
    fill(127, 175, 176);
    
    rect(47, -68, 60, 7, 50);
    
    fill(255, 235, 219);
    
    rect(47.5, -152, 80, 80, 20);
    
    fill(140, 84, 11);
    
    (rect)(47.5, -153, 100, 97, 42, 42, 5, 5);
    
    popMatrix();
    }
}; // Your average Partially Reptillian Humanoid Creature. Or eggplant supporter. Or something else. Will give you help in the Frozen Flats so you don't die by glacier.

var BransfordC = function(x, y, s, e, z){
var t = x;
var r = y;
    if(z === 1){
    pushMatrix();
    translate(x + 40, y + -150);
    scale(s);
    translate(-x, -y);
    rectMode(CENTER);
    //Massive credit to Skytobelow12 (@gingerlyginger1) for making the graphic itself and Bransford C (@BransfordC12). 
    
    //I'm very sorry Bransford I beat you up ;-; - CP
        
        stroke(143, 128, 128);
        fill(163, 163, 163);
        beginShape();
            vertex(t-14, 60+r);
            vertex(t-22, 69+r);
            vertex(t-22, 108+r);
            vertex(t-9, 108+r);
            vertex(t-9, 88+r);
            vertex(t+6, 88+r);
            vertex(t+6, 108+r);
            vertex(t+19, 108+r);
            vertex(t+19, 69+r);
            vertex(t+13, 60+r);
            vertex(t+6, 69+r);
            vertex(t+6, 78+r);
            vertex(t+-9, 78+r);
            vertex(t+-9, 69+r);
            vertex(t-14, 60+r);

        endShape();
        
        noStroke();
        
        
        //The right hand. (Your right, not his.)
        strokeWeight(2);
        stroke(212, 182, 148);
        fill(240, 212, 170);
        ellipse(t+18, 90+r, 14, 14);
        
        //The pants.
        strokeWeight(1);
        stroke(87, 87, 87);
        fill(128, 128, 128);
        beginShape();
            vertex(t-14, 95+r);
            vertex(t-17, 115+r);
            vertex(t-18, 130+r);
            vertex(t-4, 130+r);
            vertex(t-3, 115+r);
            vertex(t+2, 98+r);
            vertex(t+9, 115+r);
            vertex(t+11, 130+r);
            vertex(t+25, 130+r);
            vertex(t+21, 115+r);
            vertex(t+14, 102+r);
        endShape();
        
        //The shirt. (Which is just a rectangle.)
        fill(150, 215, 230);
        noStroke();
        rect(t-0, 88+r, 25, 41);
        
        
        //The neck.
        fill(240, 206, 158);
        ellipse(t, 66+r, 15, 6);
        fill(235, 199, 146);
        quad(t-5, 60+r, t-6, 65+r, t+6, 65+r, t+5, 60+r);
        
        //The suit.
        stroke(122, 122, 122);
        fill(245, 245, 245);
        beginShape();
            vertex(t-17,68+r);
            vertex(t+-10,65+r);
            vertex(t+-6,66+r);
            vertex(t-7,98+r);
            vertex(t-6, 123+r);
            vertex(t-21,121+r);
        endShape(CLOSE);
        beginShape();
            vertex(t+15,69+r);
            vertex(t+9,65+r);
            vertex(t+6,66+r);
            vertex(t+10,98+r);
            vertex(t+11, 113+r);
            vertex(t+16, 111+r);
            vertex(t+22, 118+r);
            vertex(t+20,106+r);
        endShape(CLOSE);
        
        //Khaneéball
        pushMatrix();
        translate(4,-11);
        strokeWeight(0.5);
        stroke(113, 115, 113);
        fill(255, 255, 255);
        ellipse(t-21,r + 99, 15,15);
        fill(0, 191, 0);
        arc(t-21, r + 99, 15, 15, radians(210), radians(390));
        fill(133, 219, 245);
        ellipse(t-21,r+99, 7,7);
        popMatrix();
        
        //The head and the left hand. (Your left, not his.)
        strokeWeight(2);
        stroke(224, 193, 139);
        fill(255, 231, 196);
        ellipse(t, 40+r, 40, 40);
        ellipse(t-20, 95+r, 15, 15);
        strokeWeight(1);
        
        //The eyes.
        fill(56, 56, 56);
        noStroke();
        ellipse(t-10, 42+r, 4, 6);
        ellipse(t-1, 42+r, 4, 6-tan(frameCount*2)%1);
        
        //The hairdo.
        fill(209, 164, 30);
        stroke(135, 94, 32);
        beginShape();
            vertex(t-20,32+r);
            vertex(t+12,35+r);
            vertex(t+15,43+r);
            vertex(t+21,47+r);
            vertex(t+21, 32+r);
            vertex(t+18, 27+r);
            vertex(t+10, 20+r);
            vertex(t+-6, 18+r);
            vertex(t-25, 24+r);
        endShape();
        
        //Soot
        noStroke();
        fill(79, 45, 4,30);
        ellipse(t + 8,r + 44,5,11);
        ellipse(t + 9,r + 40,5,11);
        ellipse(t + 6,r + 40,5,11);
        ellipse(t + 7,r + 44,5,11);
        ellipse(t + 3.6,r + 44,5,11);
        fill(51, 25, 2,120);//soot
        ellipse(t + 15,r + 104,5,11);
        ellipse(t + -12,r + 78,5,5);
        
        //The mouth.
        noFill();
        stroke(189, 151, 76);
        strokeWeight(1.5);
        switch(e){
            case "sad":
            arc(t-4, 54+r, 13, -8, radians(20), radians(135));
            break;
            
            case "happy":
            arc(t-4, 48+r, 16, 10, radians(20), radians(135));
            break;
            
            case "neutral":
            arc(t-4, 52+r, 14, 0, radians(20), radians(135));
            break;
            
            case "small smile":
            arc(t-4, 51+r, 14, 4, radians(20), radians(135));
            break;
        }
        
        stroke(255, 0, 0,100);//a gash :O
        strokeWeight(0.5);
        arc(t-14, 42+r, 7, -14, radians(113), radians(273));

        //The shoes.
        noStroke();
        fill(46, 46, 46);
        rect(t-13, 130+r, 16, 3, 2);
        rect(t+20, 130+r, 16, 3, 2);
        arc(t-14, 130+r, 14, 8, -PI, 0);
        arc(t+20, 130+r, 14, 8, -PI, 0);
        
        //the patch
        fill(196, 192, 184);
        stroke(158, 150, 139);
        strokeWeight(0.5);
        quad(t-15, 113+r, t-9, 114+r, t+-10, 119+r, t+-17, 117+r);
        popMatrix();
        }
    if(z === 2){
    pushMatrix();
    translate(x + 40, y + -150);
    scale(s);
    translate(-x, -y);
    rectMode(CENTER);
    //Massive credit to Skytobelow12 (@gingerlyginger1) for making the graphic itself and Bransford C (@BransfordC12). 
    
    //I'm very sorry Bransford I beat you up ;-; - CP
        noStroke();
        fill(46, 46, 46);
        // rect(t-13 + 10, 130+r, 16, 3, 2);
        rect(t+20-15, 130+r, 16, 3, 2);
        // arc(t-14 + 10, 130+r, 14, 8, -180, 0);
        arc(t+20-15, 130+r, 14, 8, -PI, 0);
        
        
        stroke(143, 128, 128);
        fill(163, 163, 163);
        beginShape();
            // vertex(t-14, 60+r);
            // vertex(t-22, 69+r);
            // vertex(t-22, 108+r);
            // vertex(t-9, 108+r);
            // vertex(t-9, 88+r);
            // vertex(t+6, 88+r);
            // vertex(t+6, 108+r);
            vertex(t+19, 108+r);
            vertex(t+19, 69+r);
            vertex(t+13, 60+r);
            vertex(t+6, 69+r);
            vertex(t+6, 78+r);
            vertex(t+-9, 78+r);
            // vertex(t+-9, 69+r);
            // vertex(t-14, 60+r);

        endShape();
        
        noStroke();
        
        
        //The right hand. (Your right, not his.)
        strokeWeight(2);
        stroke(212, 182, 148);
        fill(240, 212, 170);
        ellipse(t+-26, 79+r, 14, 14);
        
        //The pants.
        strokeWeight(1);
        stroke(87, 87, 87);
        fill(128, 128, 128);
        beginShape();
            // vertex(t-14+10, 95+r);
            // vertex(t-17+10, 115+r);
            // vertex(t-18+10, 130+r);
            // vertex(t-4+10, 130+r);
            // vertex(t-3+10, 115+r);
            vertex(t+2-15, 98+r);
            vertex(t+9-15, 115+r);
            vertex(t+11-15, 130+r);
            vertex(t+25-15, 130+r);
            vertex(t+21-15, 115+r);
            vertex(t+14-15, 102+r);
        endShape();
        beginShape();
            // vertex(t-14+10, 95+r);
            // vertex(t-17+10, 115+r);
            // vertex(t-18+10, 130+r);
            // vertex(t-4+10, 130+r);
            // vertex(t-3+10, 115+r);
            vertex(t+2-15, 98+r);
            vertex(t+9-20, 115+r);
            vertex(t+11-20, 130+r);
            vertex(t+25-20, 130+r);
            vertex(t+21-20, 115+r);
            vertex(t+14-20, 102+r);
        endShape();
        
        //The shirt. (Which is just a rectangle.)
        fill(150, 215, 230);
        noStroke();
        rect(t+-6, 85+r, 22, 41, 20, 0, 0, 20);
        
        
        //The neck.
        fill(240, 206, 158);
        ellipse(t, 66+r, 15, 6);
        fill(235, 199, 146);
        quad(t-5, 60+r, t-6, 65+r, t+6, 65+r, t+5, 60+r);
        
        //The suit.
        stroke(122, 122, 122);
        fill(245, 245, 245);
        // beginShape();
        //     vertex(t-17,68+r);
        //     vertex(t+-10,65+r);
        //     vertex(t+-6,66+r);
        //     vertex(t-7,98+r);
        //     vertex(t-6, 123+r);
        //     vertex(t-21,121+r);
        // endShape(CLOSE);
        beginShape();
            vertex(t+9,69+r);
            vertex(t+4,65+r);
            vertex(t+-13,66+r);
            vertex(t+-13,98+r);
            vertex(t+-15, 113+r);
            vertex(t+-9, 111+r);
            vertex(t+1, 118+r);
            vertex(t+13,106+r);
        endShape(CLOSE);
        
        //Khaneéball
        pushMatrix();
        translate(-6,-11);
        strokeWeight(0.5);
        stroke(113, 115, 113);
        fill(255, 255, 255);
        ellipse(t-21,r + 99, 15,15);
        fill(0, 191, 0);
        arc(t-21, r + 99, 15, 15, radians(210), radians(390));
        fill(133, 219, 245);
        ellipse(t-21,r+99, 7,7);
        popMatrix();
        
        //The head and the left hand. (Your left, not his.)
        strokeWeight(2);
        stroke(224, 193, 139);
        fill(255, 231, 196);
        ellipse(t, 40+r, 40, 40);
        ellipse(t-33, 95+r, 15, 15);
        strokeWeight(1);
        
        //The eyes.
        fill(56, 56, 56);
        noStroke();
        ellipse(t+-13, 42+r, 4, 6-tan(frameCount*2)%1);
        
        //The hairdo.
        fill(209, 164, 30);
        stroke(135, 94, 32);
        beginShape();
            vertex(t-20,32+r);
            vertex(t-2,35+r);
            vertex(t+1,43+r);
            vertex(t+21,47+r);
            vertex(t+21, 32+r);
            vertex(t+18, 27+r);
            vertex(t+10, 20+r);
            vertex(t+-6, 18+r);
            vertex(t-25, 24+r);
        endShape();
        
        //Soot
        noStroke();
        fill(79, 45, 4,30);
        ellipse(t - 8,r + 44,5,11);
        ellipse(t - 9,r + 40,5,11);
        ellipse(t - 6,r + 40,5,11);
        ellipse(t - 7,r + 44,5,11);
        ellipse(t - 3.6,r + 44,5,11);
        fill(51, 25, 2,120);//soot
        ellipse(t + -10,r + 104,5,11);
        ellipse(t + -7,r + 78,5,5);
        
        //The mouth.
        noFill();
        stroke(189, 151, 76);
        strokeWeight(1.5);
        switch(e){
            case "sad":
            arc(t-12, 54+r, 13, -8,radians(36), radians(135));
            break;
            
            case "happy":
            arc(t+-9, 48+r, 16, 10, radians(52), radians(135));
            break;
            
            case "neutral":
            arc(t-11, 52+r, 14, 0, radians(20), radians(135));
            break;
            
            case "small smile":
            arc(t-11, 51+r, 14, 4, radians(28), radians(135));
            break;
        }
        
        // stroke(255, 0, 0,100);//a gash :O
        // strokeWeight(0.5);
        // arc(t-14, 42+r, 7, -14, 113, 273);

        //The shoes.
        noStroke();
        fill(46, 46, 46);
        rect(t-13 + 10, 130+r, 16, 3, 2);
        // rect(t+20-15, 130+r, 16, 3, 2);
        arc(t-14 + 10, 130+r, 14, 8, -PI, 0);
        // arc(t+20-15, 130+r, 14, 8, -180, 0);
        
        popMatrix();
        }
    if(z === 3){
    pushMatrix();
    translate(x + 40, y + -150);
    scale(s);
    translate(-x, -y);
    rectMode(CENTER);
    //Massive credit to Skytobelow12 (@gingerlyginger1) for making the graphic itself and Bransford C (@BransfordC12). 
    
    //I'm very sorry Bransford I beat you up ;-; - CP
        
        stroke(143, 128, 128);
        fill(163, 163, 163);
        beginShape();
            vertex(t-14, 60+r);
            vertex(t-22, 69+r);
            vertex(t-22, 108+r);
            vertex(t-9, 108+r);
            vertex(t-9, 88+r);
            vertex(t+6, 88+r);
            vertex(t+6, 108+r);
            // vertex(t+19, 108+r);
            // vertex(t+19, 69+r);
            // vertex(t+13, 60+r);
            // vertex(t+6, 69+r);
            // vertex(t+6, 78+r);
            // vertex(t+-9, 78+r);
            // vertex(t+-9, 69+r);
            // vertex(t-14, 60+r);

        endShape();
        
        noStroke();
        
        
        //The right hand. (Your right, not his.)
        strokeWeight(2);
        stroke(212, 182, 148);
        fill(240, 212, 170);
        ellipse(t+18, 90+r, 14, 14);
        
        //The pants.
        strokeWeight(1);
        stroke(87, 87, 87);
        fill(128, 128, 128);
        beginShape();
            vertex(t-14+15, 95+r);
            vertex(t-17+15, 115+r);
            vertex(t-18+15, 130+r);
            vertex(t-4+15, 130+r);
            vertex(t-3+15, 115+r);
        endShape();
        beginShape();
            vertex(t+2-5, 98+r);
            vertex(t+9-5, 115+r);
            vertex(t+11-5, 130+r);
            vertex(t+25-5, 130+r);
            vertex(t+21-5, 115+r);
            vertex(t+14-5, 102+r);
        endShape();
        
        //The shirt. (Which is just a rectangle.)
        fill(150, 215, 230);
        noStroke();
        rect(t-0, 88+r, 25, 41, 10);
        
        
        //The neck.
        fill(240, 206, 158);
        ellipse(t, 66+r, 15, 6);
        fill(235, 199, 146);
        quad(t-5, 60+r, t-6, 65+r, t+6, 65+r, t+5, 60+r);
        
        //The suit.
        stroke(122, 122, 122);
        fill(245, 245, 245);
        beginShape();
            vertex(t-12,68+r);
            vertex(t+4,66+r);
            vertex(t+9,69+r);
            vertex(t+11,98+r);
            vertex(t+6, 117+r);
            vertex(t-11,121+r);
        endShape(CLOSE);
        
        //Khaneéball
        pushMatrix();
        translate(45,-11);
        strokeWeight(0.5);
        stroke(113, 115, 113);
        fill(255, 255, 255);
        ellipse(t-21,r + 99, 15,15);
        fill(0, 191, 0);
        arc(t-21, r + 99, 15, 15, radians(210), radians(390));
        fill(133, 219, 245);
        ellipse(t-21,r+99, 7,7);
        popMatrix();
        
        //The head and the left hand. (Your left, not his.)
        strokeWeight(2);
        stroke(224, 193, 139);
        fill(255, 231, 196);
        ellipse(t, 40+r, 40, 40);
        ellipse(t+24, 97+r, 15, 15);
        strokeWeight(1);
        
        //The eyes.
        fill(56, 56, 56);
        noStroke();
        ellipse(t+11, 42+r, 4, 6);
        
        //The hairdo.
        pushMatrix();
        translate(t, r);
        scale(-1, 1);
        fill(209, 164, 30);
        stroke(135, 94, 32);
        beginShape();
            vertex(-20,32);
            vertex(12,35);
            vertex(15,43);
            vertex(21,47);
            vertex(21, 32);
            vertex(18, 27);
            vertex(10, 20);
            vertex(-6, 18);
            vertex(-25, 24);
        endShape();
        popMatrix();
        
        //Soot
        noStroke();
        fill(51, 25, 2,120);//soot
        ellipse(t + -5,r + 104,5,11);
        ellipse(t + 5,r + 78,5,5);
        
        //The mouth.
        noFill();
        stroke(189, 151, 76);
        strokeWeight(1.5);
        switch(e){
            case "sad":
            arc(t+14, 54+r, 13, -8, radians(70), radians(135));
            break;
            
            case "happy":
            arc(t+12, 48+r, 16, 10, radians(60), radians(135));
            break;
            
            case "neutral":
            arc(t+13, 52+r, 7, 0, radians(20), radians(135));
            break;
            
            case "small smile":
            arc(t+12, 51+r, 14, 4, radians(60), radians(135));
            break;
        }
        
        stroke(255, 0, 0,100);//a gash :O
        strokeWeight(0.5);
        arc(t+8, 42+r, 7, -14, radians(113), radians(273));

        //The shoes.
        noStroke();
        fill(46, 46, 46);
        rect(t+4, 130+r, 16, 3, 2);
        rect(t+14, 130+r, 16, 3, 2);
        arc(t+4, 130+r, 14, 8, -PI, 0);
        arc(t+14, 130+r, 14, 8, -PI, 0);
        
        //the patch
        fill(196, 192, 184);
        stroke(158, 150, 139);
        strokeWeight(0.5);
        quad(t-15+7, 113+r-2, t-9+7, 114+r-2, t+-10+7, 119+r-2, t+-17+7, 117+r-2);
        popMatrix();
        }
    if(z === 4){
    pushMatrix();
    translate(x + 40, y + -150);
    scale(s);
    translate(-x, -y);
    rectMode(CENTER);
    //Massive credit to Skytobelow12 (@gingerlyginger1) for making the graphic itself and Bransford C (@BransfordC12). 
    
    //I'm very sorry Bransford I beat you up ;-; - CP
        noStroke();
        
        
        //The right hand. (Your right, not his.)
        strokeWeight(2);
        stroke(212, 182, 148);
        fill(240, 212, 170);
        ellipse(t+18, 90+r, 14, 14);
        
        
        //The shoes.
        noStroke();
        fill(46, 46, 46);
        rect(t-13, 130+r, 16, 3, 2);
        rect(t+20, 130+r, 16, 3, 2);
        arc(t-14, 130+r, 14, 8, -PI, 0);
        arc(t+20, 130+r, 14, 8, -PI, 0);
        
        //The pants.
        strokeWeight(1);
        stroke(87, 87, 87);
        fill(128, 128, 128);
        beginShape();
            vertex(t-14, 95+r);
            vertex(t-17, 115+r);
            vertex(t-18, 130+r);
            vertex(t-4, 130+r);
            vertex(t-3, 115+r);
            vertex(t+2, 98+r);
            vertex(t+9, 115+r);
            vertex(t+11, 130+r);
            vertex(t+25, 130+r);
            vertex(t+21, 115+r);
            vertex(t+14, 102+r);
        endShape();
        
        //The shirt. (Which is just a rectangle.)
        fill(150, 215, 230);
        noStroke();
        rect(t-0, 88+r, 25, 41);
        
        
        //The neck.
        fill(240, 206, 158);
        ellipse(t, 66+r, 15, 6);
        fill(235, 199, 146);
        quad(t-5, 60+r, t-6, 65+r, t+6, 65+r, t+5, 60+r);
        
        //The suit.
        stroke(122, 122, 122);
        fill(245, 245, 245);
        beginShape();
            vertex(t-17,68+r);
            vertex(t+-10,65+r);
            vertex(t+8,66+r);
            vertex(t+17,98+r);
            vertex(t+18, 123+r);
            vertex(t-21,121+r);
        endShape(CLOSE);
        //Khaneéball
        pushMatrix();
        translate(4,-11);
        strokeWeight(0.5);
        stroke(113, 115, 113);
        fill(255, 255, 255);
        ellipse(t-21,r + 99, 15,15);
        fill(0, 191, 0);
        arc(t-21, r + 99, 15, 15, radians(210), radians(390));
        fill(133, 219, 245);
        ellipse(t-21,r+99, 7,7);
        popMatrix();
        
        //The head and the left hand. (Your left, not his.)
        strokeWeight(2);
        stroke(224, 193, 139);
        fill(255, 231, 196);
        ellipse(t, 40+r, 40, 40);
        ellipse(t-20, 95+r, 15, 15);
        strokeWeight(1);
        
        //The hairdo.
        pushMatrix();
        translate(t, r);
        scale(-1, 1);
        fill(209, 164, 30);
        stroke(135, 94, 32);
        beginShape();
            vertex(-20,32);
            vertex(1,35);
            vertex(5,43);
            vertex(21,47);
            vertex(21, 32);
            vertex(18, 27);
            vertex(10, 20);
            vertex(-6, 18);
            vertex(-25, 24);
        endShape();
        popMatrix();
        
        //Soot
        noStroke();
        fill(79, 45, 4,30);
        ellipse(t + 8+5,r + 44,5,11);
        ellipse(t + 9+5,r + 40,5,11);
        ellipse(t + 6+5,r + 40,5,11);
        ellipse(t + 7+5,r + 44,5,11);
        ellipse(t + 3.6+5,r + 44,5,11);
        fill(51, 25, 2,120);//soot
        ellipse(t + 15,r + 104,5,11);
        ellipse(t + -12,r + 78,5,5);
        
        //the patch
        fill(196, 192, 184);
        stroke(158, 150, 139);
        strokeWeight(0.5);
        quad(t-15, 113+r, t-9, 114+r, t+-10, 119+r, t+-17, 117+r);
        
        stroke(143, 128, 128);
        fill(163, 163, 163);
        beginShape();
            vertex(t-14, 60+r);
            vertex(t-22, 69+r);
            vertex(t-22, 108+r);
            vertex(t-9, 108+r);
            vertex(t-9, 88+r);
            vertex(t+6, 88+r);
            vertex(t+6, 108+r);
            vertex(t+19, 108+r);
            vertex(t+19, 69+r);
            vertex(t+13, 60+r);
            vertex(t+6, 69+r);
            vertex(t+6, 78+r);
            vertex(t+-9, 78+r);
            vertex(t+-9, 69+r);
            vertex(t-14, 60+r);

        endShape();
        
        popMatrix();
        }
    
}; // An advanced coder who has merged with his character and is leading the Abyss to a new age. Also the only person in the game that has a mouth.

var Architect = function(x, y, s, z){
    if(z === 1){
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    rectMode(CORNER);
    
    noStroke();
    
    fill(84, 51, 8);
    
    (rect)(sin(radians(frameCount * 2)) * 1.5, -30, 35, 30, 20, 0, 20, 20);//leather boots
    
    (rect)(60 - sin(radians(frameCount * 2)) * 1.5, -30, 35, 30, 0, 20, 20, 20);
    
    fill(0, 0, 0);
    
    rect(72,-30,10,30);//straps? idk
    rect(14,-30,10,30);
    
    noFill();//the bow
    stroke(191, 191, 191);
    strokeWeight(3);
    line(-4,-61,117,-133);
    stroke(125, 67, 0);
    strokeWeight(10);
    bezier(-4,-60,-3,-102,60,-152,118,-134);
    noStroke();
    
    rectMode(CENTER);
    
    fill(18, 239, 255);
    
    quad(19, -106, 76, -112, 88, -35, 9, -36);//cloak
    
    fill(133, 100, 33);
    
    quad(19, -112, 76, -112, 80, -39, 14, -39);//leather armor
    
    fill(0, 0, 0);//belt thing
    quad(16, -67, 79, -67, 79, -59, 16, -59);
    
    fill(161, 161, 161);//metal strap things
    rect(22,-64,6,13);
    rect(35,-64,6,13);
    rect(48,-64,6,13);
    
    //arrows
    fill(135, 74, 0);
    rect(63,-75,2,-12);
    rect(67,-75,2,-12);
    rect(71,-75,2,-12);
    
    fill(255, 255, 255);
    triangle(63,-82,63,-80,60,-83); 
    triangle(63,-82,63,-80,66,-83); 
    
    triangle(67,-82,67,-80,64,-83); 
    triangle(66,-82,67,-80,69,-83);   
    
    triangle(71,-82,71,-80,69,-83); 
    triangle(71,-82,71,-80,73,-83);   
    
    fill(156, 112, 69);//quiver
    rect(67,-61,14,22);
    
    
    
    //face
    
    fill(194, 145, 72);
    
    rect(47.5, -151, 80, 80, 20);
    
    fill(36, 144, 171);//eyes
    
    ellipse(33, -155, 15, 15);
    
    ellipse(64, -155, 15, 15);
    
    fill(227, 212, 77);
    (rect)(47.5,-183,80,17,20,20,0,0);
    triangle(58,-179,8,-175,8,-158);
    triangle(88,-179,57,-175,88,-158);
    triangle(18,-179,61,-175,53,-165);    
    
    fill(194, 145, 72);//hands
    
    ellipse(5, -93, 25, 25);//this looks like a martial arts stance or something
    
    ellipse(84, -76, 25, 25);
    
    popMatrix();
    }
    if(z === 2){
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    rectMode(CORNER);
    
    noStroke();
    
    fill(84, 51, 8);
    
    (rect)(30 + sin(radians(frameCount * 10)) * 25, -30, 35, 30, 0, 20, 20, 20);//leather boots
    
    (rect)(30 - sin(radians(frameCount * 10)) * 25, -30, 35, 30, 0, 20, 20, 20);
    
    fill(0, 0, 0);
    
    rect(42 + sin(radians(frameCount * 10)) * 25,-30,10,30);//straps? idk
    rect(44 - sin(radians(frameCount * 10)) * 25,-30,10,30);
    
    noFill();//the bow
    stroke(191, 191, 191);
    strokeWeight(3);
    line(10,-61,64,-133);
    stroke(125, 67, 0);
    strokeWeight(10);
    bezier(8,-60,-3,-102,60,-152,74,-151);
    noStroke();
    
    rectMode(CENTER);
    
    fill(18, 239, 255);
    
    quad(19, -106, 76, -112, 88, -35, 9, -36);//cloak
    
    fill(133, 100, 33);
    
    quad(19, -112, 76, -112, 80, -39, 14, -39);//leather armor
    
    fill(0, 0, 0);//belt thing
    quad(16, -67, 79, -67, 79, -59, 16, -59);
    
    fill(161, 161, 161);//metal strap things
    rect(33+24,-64,6,13);
    rect(44+24,-64,6,13);
    rect(52+24,-64,6,13);
    
    //arrows
    fill(135, 74, 0);
    rect(63+16,-75,2,-12);
    rect(67+16,-75,2,-12);
    rect(71+16,-75,2,-12);
    
    fill(255, 255, 255);
    triangle(63+16,-82,63+16,-80,60+16,-83); 
    triangle(63+16,-82,63+16,-80,66+16,-83); 
    
    triangle(67+16,-82,67+16,-80,64+16,-83); 
    triangle(66+16,-82,67+16,-80,69+16,-83);   
    
    triangle(71+16,-82,71+16,-80,69+16,-83); 
    triangle(71+16,-82,71+16,-80,73+16,-83);   
    
    fill(156, 112, 69);//quiver
    rect(67+16,-61,14,22);
    
    
    
    //face
    
    fill(194, 145, 72);
    
    rect(47.5, -151, 80, 80, 20);
    
    fill(36, 144, 171);//eyes
    
    ellipse(74, -155, 15, 15);
    
    fill(227, 212, 77);
    (rect)(47.5,-183,80,17,20,20,0,0);
    triangle(58+30,-179,8,-175,8,-128);
    triangle(88,-179,57+30,-175,88,-158);
    triangle(18+30,-179,88,-175,53+30,-165);
    
    fill(194, 145, 72);//hands
    
    ellipse(50 + sin(radians(frameCount*10))*35, -76, 25, 25);
    
    popMatrix();
    }
    if(z === 3){
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    rectMode(CORNER);
    
    noStroke();
    
    fill(84, 51, 8);
    
    (rect)(30 + sin(radians(frameCount * 10)) * 25, -30, 35, 30, 20, 0, 20, 20);//leather boots
    
    (rect)(30 - sin(radians(frameCount * 10)) * 25, -30, 35, 30, 20, 0, 20, 20);
    
    fill(0, 0, 0);
    
    rect(42 + sin(radians(frameCount * 10)) * 25,-30,10,30);//straps? idk
    rect(44 - sin(radians(frameCount * 10)) * 25,-30,10,30);
    
    noFill();//the bow
    stroke(191, 191, 191);
    strokeWeight(3);
    line(95,-61,3,-133);
    stroke(125, 67, 0);
    strokeWeight(10);
    bezier(96,-60,87,-102,48,-152,0,-134);
    noStroke();
    
    rectMode(CENTER);
    
    fill(18, 239, 255);
    
    quad(19, -106, 76, -112, 88, -35, 9, -36);//cloak
    
    fill(133, 100, 33);
    
    quad(19, -112, 76, -112, 80, -39, 14, -39);//leather armor
    
    fill(0, 0, 0);//belt thing
    quad(16, -67, 79, -67, 79, -59, 16, -59);
    
    //arrows
    fill(135, 74, 0);
    rect(63-55,-75,2,-12);
    rect(67-55,-75,2,-12);
    rect(71-55,-75,2,-12);
    
    fill(255, 255, 255);
    triangle(63-55,-82,63-55,-80,60-55,-83); 
    triangle(63-55,-82,63-55,-80,66-55,-83); 
    
    triangle(67-55,-82,67-55,-80,64-55,-83); 
    triangle(66-55,-82,67-55,-80,69-55,-83);   
    
    triangle(71-55,-82,71-55,-80,69-55,-83); 
    triangle(71-55,-82,71-55,-80,73-55,-83);   
    
    fill(156, 112, 69);//quiver
    rect(67-55,-61,14,22);
    
    
    
    //face
    
    fill(194, 145, 72);
    
    rect(47.5, -151, 80, 80, 20);
    
    fill(36, 144, 171);//eyes
    
    ellipse(23, -155, 15, 15);
    
    fill(227, 212, 77);
    (rect)(47.5,-183,80,17,20,20,0,0);
    triangle(58-30,-179,8,-175,8,-158);
    triangle(88,-179,57-30,-175,88,-129);
    triangle(18-10,-179,61-30,-175,53-30,-165);    
    
    fill(194, 145, 72);//hands
    
    ellipse(50 - sin(radians(frameCount*10))*35, -76, 25, 25);
    
    popMatrix();
    }
    if(z === 4){
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    rectMode(CORNER);
    
    noStroke();
    
    fill(84, 51, 8);
    
    (rect)(sin(radians(frameCount * 2)) * 1.5, -30, 35, 30, 20, 0, 20, 20);//leather boots
    
    (rect)(60 - sin(radians(frameCount * 2)) * 1.5, -30, 35, 30, 0, 20, 20, 20);
    
    fill(0, 0, 0);
    
    rect(72,-30,10,30);//straps? idk
    rect(14,-30,10,30);
    
    rectMode(CENTER);
    
    //face
    
    fill(194, 145, 72);
    
    rect(47.5, -151, 80, 80, 20);
    
    fill(227, 212, 77);
    (rect)(47.5,-169,80,47,20,20,0,0);
    triangle(88,-145,8,-145,48,-126);
    
    fill(194, 145, 72);//hands
    
    ellipse(84, -93, 25, 25);//this looks like a martial arts stance or something
    
    ellipse(5, -76, 25, 25);
    
    fill(133, 100, 33);
    quad(19, -112, 76, -112, 80, -39, 14, -39);//leather armor
    
    fill(18, 239, 255);
    quad(19, -112, 76, -112, 88, -35, 9, -36);//cloak
    
    noFill();//the bow
    stroke(191, 191, 191);
    strokeWeight(3);
    line(117,-61,-4,-133);
    stroke(125, 67, 0);
    strokeWeight(10);
    bezier(118,-62,95,-126,30,-150,-4,-134);
    noStroke();
    
    popMatrix();
    }
}; // An architect/archer. a good map maker and handy with a bow. Will wander the Malevolent Marsh determining structural weaknesses.

var Gollum = function(x, y, s, z){
    if(z === 1){
    pushMatrix();
    noStroke();
    translate(x, y);
    scale(s);
    rectMode(CENTER);
    fill(237, 214, 154);
    (rect)(48,-74,57,74,0,0,20,20);//body
    (rect)(75 + sin(radians(frameCount * 2)) * 1.5,-14,35,30, 0,50,50,50);//feet
    (rect)(22 - sin(radians(frameCount * 2)) * 1.5,-14,35,30,50,0,55,50);
    stroke(230, 208, 67);
    strokeWeight(5);
    noFill();
    ellipse(-9, -54, 20, 20);//THE ONE RING TO RULE THEM ALLLLLLLLLL
    noStroke();
    fill(237, 214, 154);
    ellipse(107,-76,35,35);//hands
    ellipse(-2,-66,35,35);
    fill(100);
    (rect)(48, -48, 57, 20, 0, 0, 20, 20);//pants
    triangle(20, -45, 56, -39, 18, -24);
    triangle(45, -40, 63, -39, 50, -24);
    triangle(59, -40, 76, -43, 72, -24);
    
    fill(227, 204, 144);
    rect(50,-144+sin(radians(frameCount)*1)*5,80,80,20);
    strokeWeight(19);
    stroke(0);
    point(35,-142+sin(radians(frameCount)*1)*5);
    point(66,-142+sin(radians(frameCount)*1)*5);
    strokeWeight(3);
    line(27, -165+sin(radians(frameCount))*5, 27, -155+sin(radians(frameCount))*5);
    line(37, -165+sin(radians(frameCount))*5, 37, -158+sin(radians(frameCount))*5);
    line(47, -165+sin(radians(frameCount))*5, 47, -156+sin(radians(frameCount))*5);
    line(59, -165+sin(radians(frameCount))*5, 59, -159+sin(radians(frameCount))*5);
    line(71, -165+sin(radians(frameCount))*5, 71, -157+sin(radians(frameCount))*5);
    noStroke();
    popMatrix();
    }
    if(z === 2){
    pushMatrix();
    noStroke();
    translate(x, y);
    scale(s);
    rectMode(CENTER);
    fill(237, 214, 154);
    (rect)(48,-74,57,74,0,0,20,20);//body
    (rect)(57 + sin(radians(frameCount * 10)) * 25,-14,35,30, 0,50,50,50);//feet
    (rect)(40 -  sin(radians(frameCount * 10)) * 25,-14,35,30,0,50,55,50);
    stroke(230, 208, 67);
    strokeWeight(5);
    noFill();
    ellipse(44 + sin(radians(frameCount*10))*35, -54, 20, 20);//THE ONE RING TO RULE THEM ALLLLLLLLLL
    noStroke();
    fill(100);
    (rect)(48, -48, 57, 20, 0, 0, 20, 20);//pants
    triangle(20, -45, 56, -39, 18, -24);
    triangle(45, -40, 63, -39, 50, -24);
    triangle(59, -40, 76, -43, 72, -24);
    fill(230, 207, 150);
    ellipse(50 + sin(radians(frameCount*10))*35,-66,35,35);
    
    fill(227, 204, 144);
    rect(50,-144+sin(radians(frameCount*1))*5,80,80,20);
    strokeWeight(19);
    stroke(0);
    point(76,-142+sin(radians(frameCount*1))*5);
    strokeWeight(3);
    line(27 + 40, -165+sin(radians(frameCount))*5, 27 + 40, -155+sin(radians(frameCount))*5);
    line(37 + 40, -165+sin(radians(frameCount))*5, 37 + 40, -158+sin(radians(frameCount))*5);
    noStroke();
    popMatrix();
    }
    if(z === 3){
    pushMatrix();
    noStroke();
    translate(x, y);
    scale(s);
    rectMode(CENTER);
    fill(237, 214, 154);
    (rect)(48,-74,57,74,0,0,20,20);//body
    (rect)(57 + sin(radians(frameCount * 10)) * 25,-14,35,30,50,0,50,50);//feet
    (rect)(40 -  sin(radians(frameCount * 10)) * 25,-14,35,30,50,0,55,50);
    fill(100);
    (rect)(48, -48, 57, 20, 0, 0, 20, 20);//pants
    triangle(20, -45, 56, -39, 18, -24);
    triangle(45, -40, 63, -39, 50, -24);
    triangle(59, -40, 76, -43, 72, -24);
    fill(230, 207, 150);
    ellipse(50 + sin(radians(frameCount*10))*35,-66,35,35);
    
    fill(227, 204, 144);
    rect(50,-144+sin(radians(frameCount*1))*5,80,80,20);
    strokeWeight(19);
    stroke(0);
    point(26,-142+sin(radians(frameCount*1))*5);
    strokeWeight(3);
    line(37, -165+sin(radians(frameCount))*5, 37, -155+sin(frameCount)*5);
    line(27, -165+sin(radians(frameCount))*5, 27, -158+sin(frameCount)*5);
    noStroke();
    popMatrix();
    }
    if(z === 4){
    pushMatrix();
    noStroke();
    translate(x, y);
    scale(s);
    rectMode(CENTER);
    fill(237, 214, 154);
    (rect)(48,-74,57,74,0,0,20,20);//body
    (rect)(75 + sin(radians(frameCount * 2)) * 1.5,-14,35,30, 0,50,50,50);//feet
    (rect)(22 - sin(radians(frameCount * 2)) * 1.5,-14,35,30,50,0,55,50);
    stroke(230, 208, 67);
    strokeWeight(5);
    noFill();
    ellipse(104, -54, 20, 20);//THE ONE RING TO RULE THEM ALLLLLLLLLL
    noStroke();
    fill(237, 214, 154);
    ellipse(97,-66,35,35);//hands
    ellipse(-12,-76,35,35);
    fill(100);
    (rect)(48, -48, 57, 20, 0, 0, 20, 20);//pants
    triangle(20, -45, 56, -39, 18, -24);
    triangle(45, -40, 63, -39, 50, -24);
    triangle(59, -40, 76, -43, 72, -24);
    
    fill(227, 204, 144);
    rect(50,-144+sin(radians(frameCount*1))*5,80,80,20);
    noStroke();
    popMatrix();
    }
    
}; // A hobbit...sort of. He's turned into...this thing. Weilding the mighty power of the one ring, he can cook fish. Has his own private island in a volcano.

var fangdeng = function(x, y, s, z){
    
    var AnimeSword = function(x, y, s,r){
    
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    rotate(r);
    
    rectMode(CORNER);
    
    noStroke();
    fill(176, 176, 176);
    quad(-25,18,25,18,25,303,-25,213);//blade
   
    strokeWeight(12);
    stroke(0, 166, 255);
    noFill();
    
    ellipse(0,0,50,50);//hilt
    
    noStroke();
    fill(0, 166, 255);
    rect(-11,-56,21,32);
    ellipse(0,-59,38,12);
    
    textAlign(LEFT);
    textSize(34);
    fill(2, 133, 8);
    text("火",-19,9);
    fill(0, 217, 14);
    text("火",-17,10);
    
    textSize(26);
    fill(140, 0, 0);
    text("這\n是\n中\n文\n的",-13,63);
    
    popMatrix();
    
}; 
    
    if(z === 1){
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    rectMode(CORNER);
    
    noStroke();

    fill(150, 86, 14);//metal-ish boots
    
    (rect)(0, -30, 35, 30, 10, 0,0, 0);
    
    rect(17,-39,18,9);
    
    rect(60,-39,18,9);
    
    (rect)(60, -30, 35, 30, 0, 10, 0, 0);
    
    fill(255, 217, 0);//bronze...bands?
    rect(8,-30,7,29.5);
    rect(17,-36,18,5);
    
    rect(79,-30,7,29.5);
    rect(60,-36,18,5);
    
    rectMode(CENTER);
    
    //steampunk backpack thingy
    
    fill(181, 99, 6);//metal
    
    (rect)(47,-99,100,110,0,0,10,10);
    
    fill(209, 186, 128);//hair
    
    (rect)(48, -138, 84, 96);
    
    fill(191, 0, 0);
    
    (rect)(47.5, -75, 57, 74, 0, 0, 20, 20);//body
    
    fill(255, 166, 0);
    beginShape();//slightly worn shirt
    vertex(19,-126);
    vertex(19,-38);
    vertex(40,-49);
    vertex(54,-35);
    vertex(62,-44);
    vertex(76,-36);
    vertex(76,-114);
    endShape(CLOSE);
    
    fill(148, 72, 2);//belt thing
    
    rect(47,-109,57.5,-17);
    
    rect(47,-64,57.5,-17);
    
    //pipes
    
    rect(-24,-127,41,25);
    
    rect(-14,-87,24,25);
    
    rect(133,-122,73,25);
    
    rect(122,-72,50,25);
    
    fill(112,55,2);
    
    rect(-44,-127,8,30);
    
    rect(-28,-87,8,30);
    
    rect(172,-122,8,30);
    
    rect(148,-72,8,30);
    
    noFill();
    
    stroke(112, 55, 2);
    strokeWeight(5);
    
    rect(47,-64,34,18);
    
    noStroke();
    
    fill(217, 184, 123);
    
    rect(47.5, -152, 80, 80, 20);
    
    fill(56, 199, 0);//eyes
    
    ellipse(64, -155, 15, 15);
    ellipse(35, -155, 15, 15);
//goggles

    stroke(194, 123, 0);
    strokeWeight(3.5);
    fill(0, 174, 255,50);
    ellipse(64,-155,25,25);
    ellipse(35,-155,25,25);
    noStroke();
    
    fill(194, 123, 0);
    rect(49,-155,10,10);
    rect(35,-140,10,10);
    rect(35,-172,10,10);
    rect(64,-140,10,10);
    rect(64,-172,10,10);
    rect(15,-155,14,10);
    rect(81,-155,14,10);
    
    fill(207, 187, 135);//hair
    
    (rect)(47.5, -184, 84, 30, 20, 20, 10, 10);
    
    AnimeSword(64,-95,1.1,-120);
    
    fill(217, 184, 123);
    
    ellipse(20, -70, 25, 25);

    ellipse(90, -90, 25, 25);
    
    
    
    
    popMatrix();
    }
    if(z === 2){
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    rectMode(CORNER);
    
    noStroke();
    
    

    fill(150, 86, 14);//metal-ish boots
    
    (rect)(17, -30, 35, 30, 0, 10,0, 0);
    
    rect(17,-39,18,9);
    
    rect(60,-39,18,9);
    
    (rect)(60, -30, 35, 30, 0, 10, 0, 0);
    
    fill(255, 217, 0);//bronze...bands?
    rect(35,-30,7,29.5);
    rect(17,-36,18,5);
    
    rect(79,-30,7,29.5);
    rect(60,-36,18,5);
    
    rectMode(CENTER);
    
    //steampunk backpack thingy
    
    fill(181, 99, 6);//metal
    
    (rect)(-6,-99,50,110,0,0,0,10);
    
    fill(209, 186, 128);//hair
    
    (rect)(26, -138, 42, 96);
    
    fill(191, 0, 0);
    
    (rect)(47.5, -75, 57, 74, 0, 0, 20, 20);//body
    
    fill(255, 166, 0);
    beginShape();//slightly worn shirt
    vertex(19,-126);
    vertex(19,-38);
    vertex(40,-49);
    vertex(54,-35);
    vertex(62,-44);
    vertex(76,-36);
    vertex(76,-114);
    endShape(CLOSE);
    
    fill(148, 72, 2);//belt thing
    
    rect(47,-109,57.5,17);
    
    rect(47,-64,57.5,17);
    
    //pipes
    
    fill(112,55,2);
    ellipse(-9, -78, 30, 30);
    ellipse(-10, -121, 30, 30);
    fill(69, 32, 0);
    ellipse(-9, -78, 20, 20);
    ellipse(-10, -121, 20, 20);
    
    noFill();
    
    stroke(112, 55, 2);
    strokeWeight(6);
    
    beginShape();
    vertex(75, -72);
    vertex(55, -72);
    vertex(55, -53);
    vertex(75, -53);
    
    endShape();
    
    noStroke();
    
    fill(217, 184, 123);
    
    rect(47.5, -152, 80, 80, 20);
    
    fill(56, 199, 0);//eyes
    
    ellipse(64+6, -155, 15, 15);
//goggles

    stroke(194, 123, 0);
    strokeWeight(3.5);
    fill(0, 174, 255,50);
    ellipse(64+6,-155,25,25);
    noStroke();
    
    fill(194, 123, 0);
    rect(49,-155,10,10);
    // rect(35,-140,10,10);
    // rect(35,-172,10,10);
    rect(70,-140,10,10);
    rect(72,-172,10,10);
    rect(52,-155,14,10);
    rect(86,-155,7,10);
    
    fill(207, 187, 135);//hair
    
    (rect)(47.5, -184, 84, 30, 20, 20, 10, 10);
    
    
    
    (rect)(26, -138, 42, 96);
    
    AnimeSword(73,-80,1.1,-110);
    
    fill(217, 184, 123);
    
    ellipse(20, -70, 25, 25);

    ellipse(90, -90, 25, 25);
    
    
    
    
    popMatrix();
    }
    if(z === 3){
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    rectMode(CORNER);
    
    noStroke();
    
    

    fill(150, 86, 14);//metal-ish boots
    
    (rect)(0, -30, 35, 30, 10, 0, 0, 0);
    
    rect(17,-39,18,9);
    
    rect(60,-39,18,9);
    
    (rect)(44, -30, 35, 30, 10, 0, 0, 0);
    
    fill(255, 217, 0);//bronze...bands?
    rect(7,-30,7,29.5);
    rect(17,-36,18,5);
    
    rect(51,-30,7,29.5);
    rect(60,-36,18,5);
    
    rectMode(CENTER);
    
    //steampunk backpack thingy
    
    fill(181, 99, 6);//metal
    
    (rect)(98,-99,50,110,0,0,10,0);
    
    fill(209, 186, 128);//hair
    
    (rect)(70, -138, 42, 96);
    
    fill(191, 0, 0);
    
    (rect)(47.5, -75, 57, 74, 0, 0, 20, 20);//body
    
    fill(255, 166, 0);
    beginShape();//slightly worn shirt
    vertex(19,-126);
    vertex(19,-38);
    vertex(40,-49);
    vertex(54,-35);
    vertex(62,-44);
    vertex(76,-36);
    vertex(76,-114);
    endShape(CLOSE);
    
    fill(148, 72, 2);//belt thing
    
    rect(47,-109,57.5,17);
    
    rect(47,-64,57.5,17);
    
    //pipes
    
    fill(112,55,2);
    ellipse(105, -78, 30, 30);
    ellipse(108, -121, 30, 30);
    fill(69, 32, 0);
    ellipse(105, -78, 20, 20);
    ellipse(108, -121, 20, 20);
    
    noFill();
    
    stroke(112, 55, 2);
    strokeWeight(6);
    
    beginShape();
    vertex(20, -72);
    vertex(40, -72);
    vertex(40, -53);
    vertex(19, -53);
    
    endShape();
    
    noStroke();
    
    fill(217, 184, 123);
    
    rect(47.5, -152, 80, 80, 20);
    
    fill(56, 199, 0);//eyes
    
    ellipse(27, -155, 15, 15);
//goggles

    stroke(194, 123, 0);
    strokeWeight(3.5);
    fill(0, 174, 255,50);
    ellipse(27,-155,25,25);
    noStroke();
    
    fill(194, 123, 0);
    rect(13,-155,10,10);
    // rect(35,-140,10,10);
    // rect(35,-172,10,10);
    rect(26,-140,10,10);
    rect(28,-172,10,10);
    rect(44,-155,14,10);
    // rect(86,-155,7,10);
    
    fill(207, 187, 135);//hair
    
    (rect)(47.5, -184, 84, 30, 20, 20, 10, 10);
    
    
    
    (rect)(70, -138, 42, 96);
    
    AnimeSword(36,-80,1.1,110);
    
    fill(217, 184, 123);
    
    ellipse(90, -70, 25, 25);

    ellipse(20, -90, 25, 25);
    
    
    
    
    popMatrix();
    }
    if(z === 4){
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    rectMode(CORNER);
    
    noStroke();
    
    AnimeSword(51,-88,1.1,151);
    
    fill(150, 86, 14);//metal-ish boots
    
    (rect)(0, -30, 35, 30, 10, 0,0, 0);
    
    rect(17,-39,18,9);
    
    rect(60,-39,18,9);
    
    (rect)(60, -30, 35, 30, 0, 10, 0, 0);
    
    fill(255, 217, 0);//bronze...bands?
    rect(8,-30,7,29.5);
    rect(17,-36,18,5);
    
    rect(79,-30,7,29.5);
    rect(60,-36,18,5);
    
    rectMode(CENTER);
    
    fill(191, 0, 0);
    
    (rect)(47.5, -75, 57, 74, 0, 0, 20, 20);//body
    
    fill(255, 166, 0);
    beginShape();//slightly worn shirt
    vertex(19,-126);
    vertex(19,-38);
    vertex(40,-49);
    vertex(54,-35);
    vertex(62,-44);
    vertex(76,-36);
    vertex(76,-114);
    endShape(CLOSE);
    
    fill(148, 72, 2);//belt thing
    
    rect(47,-109,57.5,-17);
    
    rect(47,-64,57.5,-17);
    
    //pipes
    
    rect(-24,-127,41,25);
    
    rect(-14,-87,24,25);
    
    rect(133,-122,73,25);
    
    rect(122,-72,50,25);
    
    fill(112,55,2);
    
    rect(-44,-127,8,30);
    
    rect(-28,-87,8,30);
    
    rect(172,-122,8,30);
    
    rect(148,-72,8,30);
    
    noFill();
    
    stroke(112, 55, 2);
    strokeWeight(5);
    
    rect(47,-64,34,18);
    
    noStroke();
    
    fill(217, 184, 123);
    
    rect(47.5, -152, 80, 80, 20);
    
    fill(207, 187, 135);//hair
    
    (rect)(47.5, -184, 84, 30, 20, 20, 10, 10);
    
    fill(209, 186, 128);//hair
    
    (rect)(48, -138, 84, 96);
    
    //steampunk backpack thingy
    
    fill(181, 99, 6);//metal
    
    (rect)(47,-99,100,110,0,0,10,10);
    
    
    popMatrix();
    }
    
}; // A steampunk-themed scientist roaming the halls of Comet Castle installing steamwork technology. Also has an anime sword.

var CaptainArgon = function(x, y, s, BOB, z) {
var BLASTER_ON_BACK = function(x, y, s, rot, w) {
pushMatrix();
translate(x, y);
rotate(rot);
if(w === undefined){
scale(s);
}
else{
    scale(-s, s);
}
translate(-25, 0);
stroke(100);
strokeWeight(15);
noFill();
strokeCap(SQUARE);
arc(20, 8, 50, 80, 0, radians(70));
strokeWeight(2);
stroke(150);
arc(20, 8, 50, 80, radians(10), radians(60));
arc(20, 8, 42, 72, radians(11), radians(61));
arc(20, 8, 58, 88, radians(9), radians(59));
noStroke();
fill(150);
rect(-15, 8, 50, 10, 4);
fill(100);
rect(-15, 8, 2, 10);
rect(-2.5, 8, 2, 10);
rect(-27.5, 8, 2, 10);
fill(50);
rect(20, 4, 150, 8);
rect(-10, -4, 170, 8);
rect(100, 0, 50, 16);
triangle(-95, 0, -55, 0, -55, 8);
//75
triangle(125, -8, 125, 8, 165, -8);
rect(155, -4, 20, 8);
triangle(155, -8, 175, -8, 175, 8);
quad(105, 8, 90, 8, 95, 28, 110, 28);
pushMatrix();
translate(170, 0);
triangle(-95, -8, -75, -8, -75, -12);
triangle(-65, -8, -65, -12, -45, -8);
rect(-70, -10, 10, 4);
rect(-70, -12, 4, 10);
popMatrix();
fill(150);
rect(40, 0, 150, 8);
popMatrix();
};
noStroke();
pushMatrix();
translate(x, y);
scale(s - 0.3);
rectMode(CENTER);
textAlign(CENTER,CENTER);
if(z === 1){
// Blaster
if (BOB) {
BLASTER_ON_BACK(63, -145 + (sin(radians(frameCount * 2)) * 2), 1, 30);
}
// Feet + body {
fill(0, 50, 200);
stroke(0);
strokeWeight(8);
(rect)(124 + sin(radians(frameCount * 2)) * 1.5, 0, 52, 32, 0, 20, 20, 20);
(rect)(52 - sin(radians(frameCount * 2)) * 1.5, 0, 52, 32, 20, 0, 20, 20);
noStroke();
(rect)(124 + sin(radians(frameCount * 2)) * 1.5, -2, 60, 36, 0, 20, 20, 20);
(rect)(52 - sin(radians(frameCount * 2)) * 1.5, -2, 60, 36, 20, 0, 20, 20);
pushMatrix();
translate(83, -110 + sin(radians(frameCount * 2)) * 2);
fill(0, 25, 150);
(rect)(0, 30, 100, 90, 0, 0, 20, 20);
//}
// Armor {
fill(200);
(rect)(0, -35, 100, 90);
fill(0, 25, 150);
beginShape();
vertex(-50, 20);
vertex(50, 20);
vertex(50, 0);
vertex(0, -20);
vertex(-50, 0);
endShape();
beginShape();
vertex(0, -24);
vertex(4, -28);
vertex(4, -60);
vertex(0, -64);
vertex(-4, -60);
vertex(-4, -28);
endShape();
beginShape();
vertex(50, -80);
vertex(50, -8);
vertex(10, -24);
vertex(10, -60);
vertex(4, -68);
vertex(4, -80);
endShape();
beginShape();
vertex(-50, -80);
vertex(-50, -8);
vertex(-10, -24);
vertex(-10, -60);
vertex(-4, -68);
vertex(-4, -80);
endShape();
//}
// Equipment belt {
fill(0);
rect(0, 30, 100, 14);
fill(100);
stroke(200);
strokeWeight(2);
rect(20, 30, 24, 28);
noStroke();
rect(26, 8, 4, 16);
fill(200);
rect(20, 37, 14, 2);
rect(20, 30, 14, 2);
rect(20, 23, 14, 2);
ellipse(26, 0, 6, 6);
fill(100);
rect(-20, 15, 15, 10);
rect(-20, 15, 4, 20);
rect(-20, 5, 15, 4);
fill(255, 100, 0);
ellipse(-20, 30, 30, 30);
fill(100);
rect(-20, 26, 30, 4);
rect(-20, 34, 30, 4);
//}
// Blaster
if (!BOB || BOB === undefined) {
BLASTER_ON_BACK(-20, -30, 1, 10);
}
// Head, hands, and eyes {
fill(0, 50, 200);
rect(0, -142, 140, 140, 20);
if (!BOB || BOB === undefined) {
ellipse(-65, -7, 45, 45);
ellipse(50, 10, 45, 45);
} else if (BOB) {
ellipse(-60, -20, 45, 45);
ellipse(60, -20, 45, 45);
}
fill(0);
rect(0, -162, 100, 20, 10);
rect(0, -132, 20, 60, 10);
fill(100);
rect(76, -152, 6, 30);
fill(200);
rect(72, -152, 4, 40);
arc(78, -152, 12, 40, radians(-90), radians(90));

popMatrix();
}
if(z === 2){
// Feet + body {
fill(0, 50, 200);
stroke(0);
strokeWeight(8);
(rect)(104 + sin(radians(frameCount * 10)) * 25, 0, 52, 32, 0, 20, 20, 20);
(rect)(72 - sin(radians(frameCount * 10)) * 25, 0, 52, 32, 0, 20, 20, 20);
noStroke();
(rect)(104 + sin(radians(frameCount * 10)) * 25, -2, 60, 36, 0, 20, 20, 20);
(rect)(72 - sin(radians(frameCount * 10)) * 25, -2, 60, 36, 0, 20, 20, 20);
pushMatrix();
translate(83, -110 + sin(radians(frameCount * 2)) * 2);
fill(0, 25, 150);
(rect)(0, 30, 100, 90, 0, 0, 20, 20);
//}
// Armor {
fill(200);
(rect)(0, -35, 100, 90);
fill(0, 25, 150);
beginShape();
vertex(-50, 20);
vertex(50, 20);
vertex(50, 0);
vertex(50, -20);
vertex(-50, 0);
endShape();
beginShape();
vertex(4+45, -24);
vertex(0+45, -28);
vertex(0+45, -60);
vertex(4+45, -64);
// vertex(-4, -60);
// vertex(-4, -28);
endShape();
beginShape();
// vertex(50, -80);
// vertex(50, -8);
// vertex(10, -24);
// vertex(10, -60);
// vertex(4, -68);
// vertex(4, -80);
endShape();
beginShape();
vertex(-50, -80);
vertex(-50, -5);
vertex(-10+50, -24);
vertex(-10+50, -60);
vertex(-4+50, -68);
vertex(-4+50, -80);
endShape();
//}
// Equipment belt {
fill(0);
rect(0, 30, 100, 14);
fill(100);
stroke(200);
strokeWeight(2);
// rect(20, 30, 24, 28);
noStroke();
// rect(26, 8, 4, 16);
// fill(200);
// rect(20, 37, 14, 2);
// rect(20, 30, 14, 2);
// rect(20, 23, 14, 2);
// ellipse(26, 0, 6, 6);
fill(100);
rect(-20+60, 15, 15, 10);
rect(-20+60, 15, 4, 20);
rect(-20+60, 5, 15, 4);
fill(255, 100, 0);
ellipse(-20+60, 30, 30, 30);
fill(100);
rect(-20+60, 26, 30, 4);
rect(-20+60, 34, 30, 4);
//}
// Blaster
if(BOB){
BLASTER_ON_BACK(-60, -40, 1, 90);
}
else{
    BLASTER_ON_BACK(80, -40, 1, 0, -1);
}
// Head, hands, and eyes {
fill(0, 50, 200);
rect(0, -142, 140, 140, 20);
ellipse(0, -20, 45, 45);
ellipse(120, -20, 45, 45);

fill(0);
rect(45, -162, 50, 20, 10, 0, 0, 10);
rect(64, -132, 10, 60, 10, 0, 0, 10);
//}
popMatrix();
}
if(z === 3){
// Feet + body {
fill(0, 50, 200);
stroke(0);
strokeWeight(8);
(rect)(104 + sin(radians(frameCount * 10)) * 25, 0, 52, 32, 20, 0, 20, 20);
(rect)(72 - sin(radians(frameCount * 10)) * 25, 0, 52, 32, 20, 0, 20, 20);
noStroke();
(rect)(104 + sin(radians(frameCount * 10)) * 25, -2, 60, 36, 20, 0, 20, 20);
(rect)(72 - sin(radians(frameCount * 10)) * 25, -2, 60, 36, 20, 0, 20, 20);
pushMatrix();
translate(83, -110 + sin(radians(frameCount * 2)) * 2);
fill(0, 25, 150);
(rect)(0, 30, 100, 90, 0, 0, 20, 20);
//}
// Armor {
fill(200);
(rect)(0, -35, 100, 90);
fill(0, 25, 150);
beginShape();
vertex(-50, 20);
vertex(50, 20);
vertex(50, 0);
vertex(-50, -20);
vertex(-50, 0);
endShape();
beginShape();
vertex(-4-45, -24);
// vertex(4, -28);
// vertex(4, -60);
vertex(-4-45, -64);
vertex(-45, -60);
vertex(-45, -28);
endShape();
beginShape();
vertex(50, -80);
vertex(50, -5);
vertex(10-50, -24);
vertex(10-50, -60);
vertex(4-50, -68);
vertex(4-50, -80);
endShape();
// beginShape();
// vertex(-50, -80);
// vertex(-50, -8);
// vertex(-10, -24);
// vertex(-10, -60);
// vertex(-4, -68);
// vertex(-4, -80);
// endShape();
//}
// Equipment belt {
fill(0);
rect(0, 30, 100, 14);
fill(100);
stroke(200);
strokeWeight(2);
rect(20-60, 30, 24, 28);
noStroke();
rect(26-60, 8, 4, 16);
fill(200);
rect(20-60, 37, 14, 2);
rect(20-60, 30, 14, 2);
rect(20-60, 23, 14, 2);
ellipse(26, 0, 6, 6);
// fill(100);
// rect(-20, 15, 15, 10);
// rect(-20, 15, 4, 20);
// rect(-20, 5, 15, 4);
// fill(255, 100, 0);
// ellipse(-20, 30, 30, 30);
// fill(100);
// rect(-20, 26, 30, 4);
// rect(-20, 34, 30, 4);
//}
// Blaster
if(BOB){
BLASTER_ON_BACK(60, -70, 1, -90, -1);
}
else{
    BLASTER_ON_BACK(-80, -40, 1, 0);
}
// Head, hands, and eyes {
fill(0, 50, 200);
rect(0, -142, 140, 140, 20);
ellipse(0, -20, 45, 45);
ellipse(-120, -20, 45, 45);

fill(0);
rect(-45, -162, 50, 20, 0, 10, 10, 0);
rect(-65, -132, 10, 60, 0, 10, 10, 0);
fill(200);
ellipse(20, -150, 40, 40);

popMatrix();
//}
}
if(z === 4){

// Blaster
translate(83, -110 + sin(frameCount * 2) * 2);
if (!BOB || BOB === undefined) {
BLASTER_ON_BACK(-20, -30, 1, 10);
}

// Feet + body {
resetMatrix();
translate(x, y);
scale(s-0.3);
fill(0, 50, 200);
ellipse(20, -130, 45, 45);
ellipse(140, -130, 45, 45);
stroke(0);
strokeWeight(8);
(rect)(124 + sin(radians(frameCount * 2)) * 1.5, 0, 52, 32, 0, 20, 20, 20);
(rect)(52 - sin(radians(frameCount * 2)) * 1.5, 0, 52, 32, 20, 0, 20, 20);
noStroke();
(rect)(124 + sin(radians(frameCount * 2)) * 1.5, -2, 60, 36, 0, 20, 20, 20);
(rect)(52 - sin(radians(frameCount * 2)) * 1.5, -2, 60, 36, 20, 0, 20, 20);
pushMatrix();
translate(83, -110 + sin(radians(frameCount * 2)) * 2);
fill(0, 25, 150);
(rect)(0, 30, 100, 90, 0, 0, 20, 20);
//}

// Armor {
fill(200);
(rect)(0, -35, 100, 90);
fill(0, 25, 150);
beginShape();
vertex(-50, 20);
vertex(50, 20);
vertex(50, 0);
vertex(0, -20);
vertex(-50, 0);
endShape();
beginShape();
vertex(0, -24);
vertex(4, -28);
vertex(4, -60);
vertex(0, -64);
vertex(-4, -60);
vertex(-4, -28);
endShape();
beginShape();
vertex(50, -80);
vertex(50, -8);
vertex(10, -24);
vertex(10, -60);
vertex(4, -68);
vertex(4, -80);
endShape();
beginShape();
vertex(-50, -80);
vertex(-50, -8);
vertex(-10, -24);
vertex(-10, -60);
vertex(-4, -68);
vertex(-4, -80);
endShape();
//}
// Equipment belt {
fill(0);
rect(0, 30, 100, 14);
//}
// Head, hands, and eyes {

fill(0, 50, 200);
rect(0, -142, 140, 140, 20);

fill(100);
rect(-76, -152, 6, 30);
fill(200);
rect(-72, -152, 4, 40);
arc(-78, -152, 12, 40, radians(90), radians(270));
if (BOB) {
BLASTER_ON_BACK(20, -35, 1, -30, -1);
}
popMatrix();
//}

}

popMatrix();
}; // A lost soldier who eats cheese and blasts viruses left and right. He's also trying to find his way back all the time, but always ends up in the place he started.

//}
//}
// NPCs {
var Gardener = function(x, y, s, z){
    if(z === 1){
    pushMatrix();
    
    translate(x, y);
    
    scale(s); // I usually use z, but I want to be consistent with Cyborg's. :P
    
    rectMode(CORNER);
    
    noStroke();
    
    fill(125, 89, 59);
    
    (rect)(10 + sin(radians(frameCount * 2)) * 1.5, -30, 35, 30, 20, 0, 20, 20);
    
    (rect)(50 - sin(radians(frameCount * 2)) * 1.5, -30, 35, 30, 0, 20, 20, 20);
    
    rectMode(CENTER);
    
    fill(146, 222, 96);
    
    (rect)(47.5, -75, 57, 74, 0, 0, 20, 20);
    
    fill(232, 215, 207);
    
    quad(19, -112, 76, -112, 78, -50, 17, -50);
    
    fill(146, 222, 96);
    
    arc(47.5, -112, 20, 20, 0, PI);
    
    fill(214, 184, 131);
    
    rect(47.5, -152, 80, 80, 20);
    
    fill(146, 222, 96);
    
    (rect)(47.5, -193, 80, 30, 20, 20, 0, 0);
    
    fill(165, 242, 114);
    
    rect(55, -183, 80, 10, 20);
    
    fill(32);
    
    ellipse(33, -155, 15, 15);
    
    ellipse(64, -155, 15, 15);
    
    fill(96, 145, 64);
    
    ellipse(57, -105, 20, 20);
    
    ellipse(67, -105, 10, 10);
    
    fill(100, 209, 209);
    
    ellipse(57, -115, 10, 4);
    
    fill(125, 89, 59);
    
    (rect)(60, -90, 30, 30, 0, 0, 20, 20);
    
    fill(153, 109, 73);
    
    rect(60, -105, 32, 5, 20);
    
    fill(214, 184, 131);
    
    rect(47.5, -148, 70, 5);
    
    ellipse(50, -80, 25, 25);
    
    ellipse(70, -85, 25, 25);
    
    popMatrix();
    }
    if(z === 2){
    pushMatrix();
    
    translate(x, y);
    
    scale(s); // I usually use z, but I want to be consistent with Cyborg's. :P
    
    rectMode(CORNER);
    
    noStroke();
    
    fill(125, 89, 59);
    
    (rect)(30 + sin(radians(frameCount * 10)) * 25, -30, 35, 30, 0, 20, 20, 20);
    
    (rect)(30 - sin(radians(frameCount * 10)) * 25, -30, 35, 30, 0, 20, 20, 20);
    
    rectMode(CENTER);
    
    fill(146, 222, 96);
    
    (rect)(47.5, -75, 57, 74, 0, 0, 20, 20);
    
    fill(232, 215, 207);
    
    quad(19, -112, 76, -112, 78, -50, 17, -50);
    
    fill(146, 222, 96);
    
    arc(76, -112, 20, 20, radians(90), PI);
    
    fill(214, 184, 131);
    
    rect(47.5, -152, 80, 80, 20);
    
    fill(146, 222, 96);
    
    (rect)(47.5, -193, 80, 30, 20, 20, 0, 0);
    
    fill(165, 242, 114);
    
    rect(113, -183, 50, 10, 0, 20, 20, 0);
    
    fill(32);
    
    ellipse(74, -155, 15, 15);
    
    fill(96, 145, 64);
    
    ellipse(57+50, -105, 20, 20);
    
    ellipse(67+50, -105, 10, 10);
    
    fill(100, 209, 209);
    
    ellipse(57+50, -115, 10, 4);
    
    fill(125, 89, 59);
    
    (rect)(60+50, -90, 30, 30, 0, 0, 20, 20);
    
    fill(153, 109, 73);
    
    rect(60+50, -105, 32, 5, 20);
    
    fill(214, 184, 131);
    
    rect(47.5, -148, 70, 5);
    
    ellipse(100, -80, 25, 25);
    
    ellipse(120, -85, 25, 25);
    
    popMatrix();
    }
    if(z === 3){
    pushMatrix();
    
    translate(x, y);
    
    scale(s); // I usually use z, but I want to be consistent with Cyborg's. :P
    
    rectMode(CORNER);
    
    noStroke();
    
    fill(125, 89, 59);
    
    (rect)(30 + sin(radians(frameCount * 10)) * 25, -30, 35, 30, 20, 0, 20, 20);
    
    (rect)(30 - sin(radians(frameCount * 10)) * 25, -30, 35, 30, 20, 0, 20, 20);
    
    rectMode(CENTER);
    
    fill(146, 222, 96);
    
    (rect)(47.5, -75, 57, 74, 0, 0, 20, 20);
    
    fill(232, 215, 207);
    
    quad(19, -112, 76, -112, 78, -50, 17, -50);
    
    fill(146, 222, 96);
    
    arc(19, -112, 20, 20, 0, radians(90));
    
    fill(214, 184, 131);
    
    rect(47.5, -152, 80, 80, 20);
    
    fill(146, 222, 96);
    
    (rect)(47.5, -193, 80, 30, 20, 20, 0, 0);
    
    fill(165, 242, 114);
    
    rect(-17, -183, 50, 10, 20, 0, 0, 20);
    
    fill(32);
    
    ellipse(23, -155, 15, 15);
    
    fill(96, 145, 64);
    
    ellipse(57-70, -105, 20, 20);
    
    ellipse(67-70, -105, 10, 10);
    
    fill(100, 209, 209);
    
    ellipse(57-70, -115, 10, 4);
    
    fill(125, 89, 59);
    
    (rect)(60-70, -90, 30, 30, 0, 0, 20, 20);
    
    fill(153, 109, 73);
    
    rect(60-70, -105, 32, 5, 20);
    
    fill(214, 184, 131);
    
    rect(47.5, -148, 70, 5);
    
    ellipse(-20, -80, 25, 25);
    
    ellipse(0, -85, 25, 25);
    
    popMatrix();
    }
    if(z === 4){
    pushMatrix();
    
    translate(x, y);
    
    scale(s); // I usually use z, but I want to be consistent with Cyborg's. :P
    
    rectMode(CORNER);
    
    noStroke();
    
    fill(125, 89, 59);
    
    (rect)(10 + sin(radians(frameCount * 2)) * 1.5, -30, 35, 30, 20, 0, 20, 20);
    
    (rect)(50 - sin(radians(frameCount * 2)) * 1.5, -30, 35, 30, 0, 20, 20, 20);
    
    rectMode(CENTER);
    
    fill(165, 242, 114);
    
    rect(40, -183, 80, 10, 20);
    
    fill(146, 222, 96);
    
    (rect)(47.5, -75, 57, 74, 0, 0, 20, 20);
    
    fill(232, 215, 207);
    
    quad(19, -112, 76, -112, 78, -50, 17, -50);
    
    
    fill(214, 184, 131);
    
    rect(47.5, -152, 80, 80, 20);
    
    fill(146, 222, 96);
    
    (rect)(47.5, -193, 80, 30, 20, 20, 0, 0);
    
    popMatrix();
    }
    
}; // He'll give you the occaional hint for where you need to go, or give some tips for the general game.

var Apothecary = function(x, y, s, z){
    if(z === 1){
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    rectMode(CORNER);
    
    noStroke();
    
    fill(159, 187, 196);
    
    (rect)(0 + sin(radians(frameCount * 2)) * 1.5, -30, 35, 30, 20, 0, 20, 20);
    
    (rect)(60 - sin(radians(frameCount * 2)) * 1.5, -30, 35, 30, 0, 20, 20, 20);
    
    rectMode(CENTER);
    
    fill(145, 115, 71);
    
    (rect)(47.5, -125, 86, 140, 20, 20, 50, 50);
    
    fill(242, 217, 162);
    
    ellipse(18, -70, 25, 25);
    
    fill(128);
    
    (rect)(47.5, -75, 57, 74, 0, 0, 20, 20);
    
    fill(196, 145, 188);
    
    quad(19, -112, 42, -112, 39, -35, 15, -37);
    
    quad(53, -112, 76, -112, 80, -37, 56, -35);
    
    fill(242, 217, 162);
    
    rect(47.5, -152, 80, 80, 20);
    
    fill(32);
    
    ellipse(33, -155, 15, 15);
    
    ellipse(64, -155, 15, 15);
    
    fill(145, 115, 71);
    
    (rect)(47.5, -180, 86, 30, 20, 20, 0, 0);
    
    triangle(47.5, -180, 90, -180, 90, -140);
    
    pushMatrix();
    
    translate(75, -80);
    
    rotate(20);
    
    fill(230);
    
    (rect)(0, 0, 8, 36, 0, 0, 20, 20);
    
    fill(240);
    
    rect(0, -18, 10, 4, 20);
    
    popMatrix();
    
    fill(242, 217, 162);
    
    rect(33, -163, 30, 5);
    
    ellipse(75, -80, 25, 25);
    
    fill(212, 96, 96);
    
    rect(47.5, -195, 60, 20, 20);
    
    fill(220);
    
    ellipse(60, -205, 10, 10);
    
    popMatrix();
    }
    if(z === 2){
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    rectMode(CORNER);
    
    noStroke();
    
    fill(159, 187, 196);
    
    (rect)(30 + sin(radians(frameCount * 10)) * 25, -30, 35, 30, 0, 20, 20, 20);
    
    (rect)(30 - sin(radians(frameCount * 10)) * 25, -30, 35, 30, 0, 20, 20, 20);
    
    rectMode(CENTER);
    
    fill(145, 115, 71);
    
    (rect)(33, -125, 56, 140, 20, 20, 50, 0);
    
    fill(128);
    
    (rect)(47.5, -75, 57, 74, 0, 0, 20, 20);
    
    fill(196, 145, 188);
    
    quad(19, -112, 42+30, -112, 39+30, -35, 15, -37);
    
    fill(242, 217, 162);
    
    rect(47.5, -152, 80, 80, 20);
    
    fill(32);
    
    ellipse(33+40, -155, 15, 15);
    
    fill(145, 115, 71);
    
    (rect)(47.5, -180, 86, 30, 20, 20, 0, 0);
    
    // triangle(47.5, -180, 90, -180, 90, -140);
    
    fill(145, 115, 71);
    
    (rect)(33, -125, 56, 140, 20, 20, 50, 0);
    
    fill(242, 217, 162);
    
    rect(33+40, -163, 20, 5);
    
    ellipse(40 + sin(radians(frameCount*2))*30, -80, 25, 25);
    
    fill(212, 96, 96);
    
    rect(47.5, -195, 60, 20, 20);
    
    fill(220);
    
    ellipse(60, -205, 10, 10);
    
    popMatrix();
    }
    if(z === 3){
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    rectMode(CORNER);
    
    noStroke();
    
    fill(159, 187, 196);
    
    (rect)(30 + sin(radians(frameCount * 10)) * 25, -30, 35, 30, 20, 0, 20, 20);
    
    (rect)(30 - sin(radians(frameCount * 10)) * 25, -30, 35, 30, 20, 0, 20, 20);
    
    rectMode(CENTER);
    
    fill(145, 115, 71);
    
    (rect)(70, -125, 46, 140, 20, 20, 50, 50);
    
    // fill(242, 217, 162);
    
    // ellipse(18, -70, 25, 25);
    
    fill(128);
    
    (rect)(47.5, -75, 57, 74, 0, 0, 20, 20);
    
    fill(196, 145, 188);
    
    quad(53 - 30, -112, 76, -112, 80, -37, 56 - 30, -35);
    
    fill(242, 217, 162);
    
    rect(47.5, -152, 80, 80, 20);
    
    fill(32);
    
    ellipse(23, -155, 15, 15);
    
    fill(145, 115, 71);
    
    (rect)(47.5, -180, 86, 30, 20, 20, 0, 0);
    
    triangle(47.5-30, -180-4, 90, -180, 90, -100);
    
    pushMatrix();
    
    translate(47 + sin(radians(frameCount*2))*30, -80);
    
    rotate(20);
    
    fill(230);
    
    (rect)(0, 0, 8, 36, 0, 0, 20, 20);
    
    fill(240);
    
    rect(0, -18, 10, 4, 20);
    
    popMatrix();
    
    fill(242, 217, 162);
    
    ellipse(47 + sin(radians(frameCount*2))*30, -80, 25, 25);
    
    fill(212, 96, 96);
    
    rect(47.5, -195, 60, 20, 20);
    
    fill(255, 209, 209);
    
    ellipse(60, -205, 10, 10);
    
    popMatrix();
    }
    if(z === 4){
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    rectMode(CORNER);
    
    noStroke();
    
    fill(159, 187, 196);
    
    (rect)(0 + sin(radians(frameCount * 2)) * 1.5, -30, 35, 30, 20, 0, 20, 20);
    
    (rect)(60 - sin(radians(frameCount * 2)) * 1.5, -30, 35, 30, 0, 20, 20, 20);
    
    rectMode(CENTER);
    
    fill(242, 217, 162);
    
    ellipse(18, -70, 25, 25);
    
    fill(128);
    
    (rect)(47.5, -75, 57, 74, 0, 0, 20, 20);
    
    fill(196, 145, 188);
    
    quad(19, -112, 47.5, -112, 47.5, -35, 15, -37);
    
    quad(47.5, -112, 76, -112, 80, -37, 47.5, -35);
    
    fill(242, 217, 162);
    
    rect(47.5, -152, 80, 80, 20);
    
    fill(32);
    
    ellipse(33, -155, 15, 15);
    
    ellipse(64, -155, 15, 15);
    
    fill(145, 115, 71);
    
    (rect)(47.5, -180, 86, 30, 20, 20, 0, 0);
    
    triangle(47.5, -180, 90, -180, 90, -140);
    
    pushMatrix();
    
    translate(75, -80);
    
    rotate(20);
    
    fill(230);
    
    (rect)(0, 0, 8, 36, 0, 0, 20, 20);
    
    fill(240);
    
    rect(0, -18, 10, 4, 20);
    
    popMatrix();
    
    fill(242, 217, 162);
    
    rect(33, -163, 30, 5);
    
    ellipse(75, -80, 25, 25);
    
    fill(212, 96, 96);
    
    rect(47.5, -195, 60, 20, 20);
    
    fill(220);
    
    ellipse(40, -205, 10, 10);
    
    fill(145, 115, 71);
    
    (rect)(47.5, -125, 86, 140, 20, 20, 50, 50);
    
    popMatrix();
    }
    
}; // The Apothecary makes medicines / potions. She also has some tips for attacks that might be of value (she's experimented with code attacks to try and make better potions).

var AbyssStraggler = function(x, y, s, z){
    if(z === 1){
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    rectMode(CORNER);
    
    noStroke();
    
    fill(114, 104, 120);
    
    (rect)(10 + sin(radians(frameCount * 2)) * 1.5, -30, 35, 30, 20, 0, 20, 20);
    
    (rect)(50 - sin(radians(frameCount * 2)) * 1.5, -30, 35, 30, 0, 20, 20, 20);
    
    rectMode(CENTER);
    
    fill(219);
    
    (rect)(47.5, -75, 57, 74, 0, 0, 20, 20);
    
    fill(110);
    
    beginShape();
    vertex(19, -112);
    vertex(76, -112);
    vertex(80, -50);
    vertex(70, -55);
    vertex(55, -35);
    vertex(40, -40);
    vertex(15, -45);
    endShape(CLOSE);
    
    fill(245, 228, 191);
    
    rect(47.5, -152, 80, 80, 20);
    
    fill(32);
    
    ellipse(64, -155, 15, 15);
    
    fill(245, 228, 191);
    
    rect(64, -163, 30, 5);
    
    fill(125, 74, 184);
    
    rect(33, -155, 20, 20);
    
    rect(33, -131, 14, 40);
    
    fill(255);
    
    rect(33, -155, 12, 12);
    
    rect(33, -131, 6, 40);
    
    fill(161, 150, 122);
    
    (rect)(47.5, -184, 84, 30, 20, 20, 10, 10);
    
    fill(245, 228, 191);
    
    ellipse(20, -70, 25, 25);
    
    fill(64);
    
    rect(90, -8, 25, 16);
    
    rect(90, -60, 14, 110);
    
    fill(125, 74, 184, 100);
    
    ellipse(90, -160, 75, 75);
    
    fill(255, 255, 255, 150);
    
    ellipse(90, -160, 65, 65);
    
    fill(125, 74, 184, 150);
    
    quad(90, -140, 110, -160, 90, -180, 70, -160);
    
    fill(125, 74, 184);
    
    quad(90, -145, 105, -160, 90, -175, 75, -160);
    
    fill(255, 255, 255, 50);
    
    ellipse(90, -160, 65, 65);
    
    fill(245, 228, 191);
    
    ellipse(90, -90, 25, 25);
    
    popMatrix();
    }
    if(z === 2){
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    rectMode(CORNER);
    
    noStroke();
    
    fill(114, 104, 120);
    
    (rect)(30 + sin(radians(frameCount * 10)) * 25, -30, 35, 30, 0, 20, 20, 20);
    
    (rect)(30 - sin(radians(frameCount * 10)) * 25, -30, 35, 30, 0, 20, 20, 20);
    
    rectMode(CENTER);
    
    fill(219);
    
    (rect)(47.5, -75, 57, 74, 0, 0, 20, 20);
    
    fill(110);
    
    beginShape();
    vertex(19, -112);
    vertex(76, -112);
    vertex(80, -50);
    vertex(70, -55);
    vertex(55, -35);
    vertex(40, -40);
    vertex(15, -45);
    endShape(CLOSE);
    
    fill(245, 228, 191);
    
    rect(47.5, -152, 80, 80, 20);
    
    fill(125, 74, 184);
    
    rect(65, -155, 20, 20);
    
    rect(65, -131, 14, 40);
    
    fill(255);
    
    rect(65, -155, 12, 12);
    
    rect(65, -131, 6, 40);
    
    fill(161, 150, 122);
    
    (rect)(47.5, -184, 84, 30, 20, 20, 10, 10);
    
    fill(245, 228, 191);
    
    ellipse(50, -70, 25, 25);
    
    fill(64);
    
    rect(90+10, -8, 25, 16);
    
    rect(90+10, -60, 14, 110);
    
    fill(125, 74, 184, 100);
    
    ellipse(90+10, -160, 75, 75);
    
    fill(255, 255, 255, 150);
    
    ellipse(90+10, -160, 65, 65);
    
    fill(125, 74, 184, 150);
    
    quad(90+10, -140, 110+10, -160, 90+10, -180, 70+10, -160);
    
    fill(125, 74, 184);
    
    quad(90+10, -145, 105+10, -160, 90+10, -175, 75+10, -160);
    
    fill(255, 255, 255, 50);
    
    ellipse(100, -160, 65, 65);
    
    fill(245, 228, 191);
    
    ellipse(100, -90, 25, 25);
    
    popMatrix();
    }
    if(z === 3){
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    rectMode(CORNER);
    
    noStroke();
    
    fill(114, 104, 120);
    
    (rect)(30 + sin(radians(frameCount * 10)) * 25, -30, 35, 30, 20, 0, 20, 20);
    
    (rect)(30 - sin(radians(frameCount * 10)) * 25, -30, 35, 30, 20, 0, 20, 20);
    
    rectMode(CENTER);
    
    fill(219);
    
    (rect)(47.5, -75, 57, 74, 0, 0, 20, 20);
    
    fill(110);
    
    beginShape();
    vertex(19, -112);
    vertex(76, -112);
    vertex(80, -50);
    vertex(70, -55);
    vertex(55, -35);
    vertex(40, -40);
    vertex(15, -45);
    endShape(CLOSE);
    
    fill(245, 228, 191);
    
    rect(47.5, -152, 80, 80, 20);
    
    fill(32);
    
    ellipse(28, -155, 15, 15);
    
    fill(245, 228, 191);
    
    rect(28, -163, 30, 5);
    
    fill(161, 150, 122);
    
    (rect)(47.5, -184, 84, 30, 20, 20, 10, 10);
    
    fill(64);
    
    rect(90-90, -8, 25, 16);
    
    rect(90-90, -60, 14, 110);
    
    fill(125, 74, 184, 100);
    
    ellipse(90-90, -160, 75, 75);
    
    fill(255, 255, 255, 150);
    
    ellipse(90-90, -160, 65, 65);
    
    fill(125, 74, 184, 150);
    
    quad(90-90, -140, 110-90, -160, 90-90, -180, 70-90, -160);
    
    fill(125, 74, 184);
    
    quad(90-90, -145, 105-90, -160, 90-90, -175, 75-90, -160);
    
    fill(255, 255, 255, 50);
    
    ellipse(90-90, -160, 65, 65);
    
    fill(245, 228, 191);
    
    ellipse(90-90, -90, 25, 25);
    
    popMatrix();
    }
    if(z === 4){
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    rectMode(CENTER);
    
    noStroke();
    
    fill(245, 228, 191);
    
    ellipse(90-85, -90, 25, 25);
    
    fill(64);
    
    rect(90-85, -8, 25, 16);
    
    rect(90-85, -60, 14, 110);
    
    fill(125, 74, 184, 100);
    
    ellipse(90-85, -160, 75, 75);
    
    fill(255, 255, 255, 150);
    
    ellipse(90-85, -160, 65, 65);
    
    fill(125, 74, 184, 150);
    
    quad(90-85, -140, 110-85, -160, 90-85, -180, 70-85, -160);
    
    fill(125, 74, 184);
    
    quad(90-85, -145, 105-85, -160, 90-85, -175, 75-85, -160);
    
    fill(255, 255, 255, 50);
    
    ellipse(90-85, -160, 65, 65);
    
    fill(245, 228, 191);
    
    ellipse(76, -70, 25, 25);
    
    rectMode(CORNER);
    
    fill(114, 104, 120);
    
    (rect)(10 + sin(radians(frameCount * 2)) * 1.5, -30, 35, 30, 20, 0, 20, 20);
    
    (rect)(50 - sin(radians(frameCount * 2)) * 1.5, -30, 35, 30, 0, 20, 20, 20);
    
    rectMode(CENTER);
    
    fill(219);
    
    (rect)(47.5, -75, 57, 74, 0, 0, 20, 20);
    
    fill(110);
    
    beginShape();
    vertex(19, -112);
    vertex(76, -112);
    vertex(80, -50);
    vertex(70, -55);
    vertex(55, -35);
    vertex(40, -40);
    vertex(15, -45);
    endShape(CLOSE);
    
    fill(245, 228, 191);
    
    rect(47.5, -152, 80, 80, 20);
    
    fill(161, 150, 122);
    
    (rect)(47.5, -184, 84, 30, 20, 20, 10, 10);
    
    popMatrix();
    }
    
}; // You find this poor soul in the Bonus World. Luckily, he's doing better off than most and has some supplies he's willing to sell.

var DesertShopkeeper = function(x, y, s, z){
    if(z === 1){
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    rectMode(CORNER);
    
    noStroke();
    
    fill(176, 140, 83);
    
    (rect)(10 + sin(radians(frameCount * 2)) * 1.5, -30, 35, 30, 20, 0, 20, 20);
    
    (rect)(50 - sin(radians(frameCount * 2)) * 1.5, -30, 35, 30, 0, 20, 20, 20);
    
    fill(80);
    
    (rect)(10 + sin(radians(frameCount * 2)) * 1.5, -15, 35, 15, 0, 0, 50, 50);
    
    (rect)(50 - sin(radians(frameCount * 2)) * 1.5, -15, 35, 15, 0, 0, 50, 50);
    
    rectMode(CENTER);
    
    fill(230, 221, 187);
    
    quad(19, -112, 76, -112, 79, -43, 15, -35);
    
    fill(227, 186, 75);
    
    quad(19, -112, 76, -112, 77, -90, 18, -100);
    
    fill(176, 140, 83);
    
    rect(47.5, -151, 80, 80, 20);
    
    fill(227, 186, 75);
    
    beginShape();
    vertex(7.5, -180);
    vertex(0, -187.5);
    vertex(0, -195);
    vertex(7.5, -202.5);
    vertex(47.5, -210);
    vertex(42.5, -215);
    vertex(47.5, -220);
    vertex(52.5, -215);
    vertex(47.5, -210);
    vertex(87.5, -202.5);
    vertex(95, -195);
    vertex(95, -187.5);
    vertex(87.5, -180);
    endShape(CLOSE);
    
    fill(191, 152, 53);
    
    quad(7.5, -180, 0, -187.5, 95, -187.5, 87.5, -180);
    
    rect(71.25, -191.25, 47.5, 7.5);
    
    fill(32);
    
    ellipse(33, -155, 15, 15);
    
    ellipse(64, -155, 15, 15);
    
    pushMatrix();
    
    translate(30, -90);
    
    rotate(-5);
    
    fill(102, 156, 70);
    
    quad(0, 15, 15, 0, 0, -15, -15, 0);
    
    fill(255, 255, 255, 50);
    
    triangle(0, 0, -15, 0, 0, -15);
    
    fill(0, 0, 0, 50);
    
    triangle(0, 0, 15, 0, 0, 15);
    
    popMatrix();
    
    fill(176, 140, 83);
    
    ellipse(20, -80, 25, 25);
    
    ellipse(75, -70, 25, 25);
    
    popMatrix();
    }
    if(z === 2){
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    rectMode(CORNER);
    
    noStroke();
    
    fill(176, 140, 83);
    
    (rect)(30 + sin(radians(frameCount * 10)) * 25, -30, 35, 30, 0, 20, 20, 20);
    
    (rect)(30 - sin(radians(frameCount * 10)) * 25, -30, 35, 30, 0, 20, 20, 20);
    
    fill(80);
    
    (rect)(30 + sin(radians(frameCount * 10)) * 25, -15, 35, 15, 0, 0, 50, 50);
    
    (rect)(30 - sin(radians(frameCount * 10)) * 25, -15, 35, 15, 0, 0, 50, 50);
    
    rectMode(CENTER);
    
    fill(230, 221, 187);
    
    quad(19, -112, 76, -112, 79, -43, 15, -35);
    
    fill(227, 186, 75);
    
    quad(19, -112, 76, -112, 77, -90, 18, -100);
    
    fill(176, 140, 83);
    
    rect(47.5, -151, 80, 80, 20);
    
    fill(227, 186, 75);
    
    beginShape();
    vertex(7.5, -180);
    vertex(0, -187.5);
    vertex(0, -195);
    vertex(7.5, -202.5);
    vertex(47.5, -210);
    vertex(42.5, -215);
    vertex(47.5, -220);
    vertex(52.5, -215);
    vertex(47.5, -210);
    vertex(87.5, -202.5);
    vertex(95, -195);
    vertex(95, -187.5);
    vertex(87.5, -180);
    endShape(CLOSE);
    
    fill(191, 152, 53);
    
    quad(7.5, -180, 0, -187.5, 95, -187.5, 87.5, -180);
    
    rect(71.25, -191.25, 47.5, 7.5);
    
    fill(32);
    
    ellipse(74, -155, 15, 15);
    
    pushMatrix();
    
    translate(50 + sin(radians(frameCount*2))*30, -80);
    
    rotate(-5);
    
    fill(102, 156, 70);
    
    quad(0, 15, 15, 0, 0, -15, -15, 0);
    
    fill(255, 255, 255, 50);
    
    triangle(0, 0, -15, 0, 0, -15);
    
    fill(0, 0, 0, 50);
    
    triangle(0, 0, 15, 0, 0, 15);
    
    popMatrix();
    
    fill(176, 140, 83);
    
    ellipse(40 + sin(radians(frameCount*2))*30, -70, 25, 25);
    
    // ellipse(75, -70, 25, 25);
    
    popMatrix();
    }
    if(z === 3){
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    rectMode(CORNER);
    
    noStroke();
    
    fill(176, 140, 83);
    
    (rect)(30 + sin(radians(frameCount * 10)) * 25, -30, 35, 30, 20, 0, 20, 20);
    
    (rect)(30 - sin(radians(frameCount * 10)) * 25, -30, 35, 30, 20, 0, 20, 20);
    
    fill(80);
    
    (rect)(30 + sin(radians(frameCount * 10)) * 25, -15, 35, 15, 0, 0, 50, 50);
    
    (rect)(30 - sin(radians(frameCount * 10)) * 25, -15, 35, 15, 0, 0, 50, 50);
    
    rectMode(CENTER);
    
    fill(230, 221, 187);
    
    quad(19, -112, 76, -112, 79, -43, 15, -35);
    
    fill(227, 186, 75);
    
    quad(19, -112, 76, -112, 77, -90, 18, -100);
    
    fill(176, 140, 83);
    
    rect(47.5, -151, 80, 80, 20);
    
    fill(227, 186, 75);
    
    beginShape();
    vertex(7.5, -180);
    vertex(0, -187.5);
    vertex(0, -195);
    vertex(7.5, -202.5);
    vertex(47.5, -210);
    vertex(42.5, -215);
    vertex(47.5, -220);
    vertex(52.5, -215);
    vertex(47.5, -210);
    vertex(87.5, -202.5);
    vertex(95, -195);
    vertex(95, -187.5);
    vertex(87.5, -180);
    endShape(CLOSE);
    
    fill(191, 152, 53);
    
    quad(7.5, -180, 0, -187.5, 95, -187.5, 87.5, -180);
    
    rect(71.25, -191.25, 47.5, 7.5);
    
    fill(32);
    
    ellipse(23, -155, 15, 15);
    
    fill(176, 140, 83);
    
    ellipse(50 + sin(radians(frameCount*2))*30, -70, 25, 25);
    
    // ellipse(75, -70, 25, 25);
    
    popMatrix();
    }
    if(z === 4){
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    rectMode(CORNER);
    
    noStroke();
    
    pushMatrix();
    
    translate(30, -90);
    
    rotate(-5);
    
    fill(102, 156, 70);
    
    quad(0, 15, 15, 0, 0, -15, -15, 0);
    
    fill(255, 255, 255, 50);
    
    triangle(0, 0, -15, 0, 0, -15);
    
    fill(0, 0, 0, 50);
    
    triangle(0, 0, 15, 0, 0, 15);
    
    popMatrix();
    
    fill(176, 140, 83);
    
    ellipse(20, -80, 25, 25);
    
    ellipse(75, -70, 25, 25);
    
    fill(176, 140, 83);
    
    (rect)(10 + sin(radians(frameCount * 2)) * 1.5, -30, 35, 30, 20, 0, 20, 20);
    
    (rect)(50 - sin(radians(frameCount * 2)) * 1.5, -30, 35, 30, 0, 20, 20, 20);
    
    fill(80);
    
    (rect)(10 + sin(radians(frameCount * 2)) * 1.5, -15, 35, 15, 0, 0, 50, 50);
    
    (rect)(50 - sin(radians(frameCount * 2)) * 1.5, -15, 35, 15, 0, 0, 50, 50);
    
    rectMode(CENTER);
    
    fill(230, 221, 187);
    
    quad(19, -112, 76, -112, 79, -43, 15, -35);
    
    fill(227, 186, 75);
    
    quad(19, -112, 76, -112, 77, -90, 18, -100);
    
    fill(176, 140, 83);
    
    rect(47.5, -151, 80, 80, 20);
    
    fill(227, 186, 75);
    
    beginShape();
    vertex(7.5, -180);
    vertex(0, -187.5);
    vertex(0, -195);
    vertex(7.5, -202.5);
    vertex(47.5, -210);
    vertex(42.5, -215);
    vertex(47.5, -220);
    vertex(52.5, -215);
    vertex(47.5, -210);
    vertex(87.5, -202.5);
    vertex(95, -195);
    vertex(95, -187.5);
    vertex(87.5, -180);
    endShape(CLOSE);
    
    fill(191, 152, 53);
    
    quad(7.5, -180, 0, -187.5, 95, -187.5, 87.5, -180);
    
    rect(71.25, -191.25, 47.5, 7.5);
    
    popMatrix();
    }
}; // This shopkeeper also gives you advice for different viruses (he's very well-traveled). See what I did with the hat? :P

var DesertTombstone = function(x, y, s, z){
    
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    noStroke();
    
    rectMode(CENTER);
    
    fill(227, 186, 75);
    
    rect(47.5, -15, 95, 30);
    
    beginShape();
    vertex(3, -30);
    vertex(6, -150);
    vertex(10, -154);
    vertex(15, -164);
    vertex(22, -210);
    vertex(73, -210);
    vertex(80, -164);
    vertex(85, -154);
    vertex(89, -150);
    vertex(92, -30);
    endShape(CLOSE);
    
    fill(191, 152, 53);
    
    rect(47.5, -8, 95, 5);
    
    beginShape();
    vertex(35, -190);
    vertex(19, -190);
    vertex(21, -200);
    vertex(40, -200);
    vertex(47.5, -190);
    vertex(55, -200);
    vertex(74, -200);
    vertex(76, -190);
    vertex(60, -190);
    vertex(53, -180);
    vertex(60, -170);
    vertex(80, -170);
    vertex(82, -160);
    vertex(55, -160);
    vertex(47.5, -170);
    vertex(40, -160);
    vertex(13, -160);
    vertex(15, -170);
    vertex(35, -170);
    vertex(42, -180);
    endShape(CLOSE);
    if(z === 1 || z === 4){
    ellipse(47.5, -100, 20, 20);
    
    ellipse(47.5, -135, 20, 20);
    
    ellipse(47.5, -65, 20, 20);
    
    fill(253);
    
    ellipse(47.5, -100, 12, 12);
    
    ellipse(47.5, -133, 12, 12);
    
    ellipse(47.5, -67, 12, 12);
    }

    fill(0, 0, 0, 50);
    
    triangle(3, -30, 92, -30, 91, -50);
    
    popMatrix();
    
}; // Creepily, people are buried under these. Even more creepily (but helpful), they'll talk to you and give you advice for the desert.

var Mermaid = function(x, y, s, z){
    if(z === 1){
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    rectMode(CORNER);
    
    noStroke();
    
    fill(84, 148, 176);
    
    (rect)(13, -30, 35, 30, 20, 0, 20, 0);
    
    (rect)(47, -30, 35, 30, 0, 20, 0, 20);
    
    rectMode(CENTER);
    
    fill(87, 143, 70);
    
    (rect)(47.5, -125, 86, 140, 20, 20, 50, 50);
    
    fill(84, 148, 176);
    
    quad(30, -30, 65, -30, 76, -50, 19, -50);
    
    (rect)(47.5, -75, 57, 74, 0, 0, 20, 20);
    
    fill(232, 212, 151);
    
    rect(47, -102, 58, 20);
    
    rect(47.5, -151, 80, 80, 20);
    
    fill(87, 143, 70);
    
    (rect)(30, -178, 50, 32, 20, 0, 50, 0);
    
    (rect)(72, -178, 38, 32, 0, 20, 0, 50);
    
    fill(32);
    
    ellipse(33, -150, 15, 15);
    
    ellipse(64, -150, 15, 15);
    
    fill(181, 90, 154);
    
    pushMatrix();
    
    translate(47.5, -82.5);
    
    rotate(-5);
    
    rect(0, 0, 90, 10, 20);
    
    popMatrix();
    
    fill(232, 212, 151);
    
    rect(47.5, -157, 70, 5);
    
    ellipse(20, -80, 25, 25);
    
    ellipse(75, -85, 25, 25);
    
    popMatrix();
    }
    if(z === 3){
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    rectMode(CORNER);
    
    noStroke();
    
    fill(84, 148, 176);
    pushMatrix();
    translate(80, -31 + sin(radians(frameCount*8))*5);
    rotate(-45);
    (rect)(-8, 0, 35, 30, 20, 0, 20, 0);
    
    (rect)(26, 0, 35, 30, 0, 20, 0, 20);
    popMatrix();
    rectMode(CENTER);
    
    fill(87, 143, 70);
    
    (rect)(47.5, -125, 86, 140, 20, 20, 50, 50);
    
    fill(84, 148, 176);
    
    quad(69+20, -37 + sin(radians(frameCount*8))*5, 96+20, -64 + sin(radians(frameCount*8))*5, 76, -65, 43, -37);
    
    (rect)(47.5, -75, 57, 74, 0, 0, 20, 20);
    
    fill(232, 212, 151);
    
    rect(47, -102, 58, 20);
    
    rect(47.5, -151, 80, 80, 20);
    
    fill(87, 143, 70);
    
    (rect)(30, -178, 50, 32, 20, 0, 50, 0);
    
    (rect)(72, -178, 38, 32, 0, 20, 0, 50);
    
    fill(32);
    
    ellipse(23, -150, 15, 15);
    
    fill(181, 90, 154);
    
    pushMatrix();
    
    translate(5, -82.5);
    
    rotate(5);
    
    rect(0, 0, 20, 10, 20);
    
    popMatrix();
    
    fill(232, 212, 151);
    
    rect(47.5, -157, 70, 5);
    
    ellipse(20, -80, 25, 25);
    
    ellipse(75, -85, 25, 25);
    
    fill(87, 143, 70);
    
    (rect)(68, -125, 43, 140, 20, 20, 0, 50);
    
    popMatrix();
    }
    if(z === 2){
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    rectMode(CORNER);
    
    noStroke();
    
    fill(84, 148, 176);
    pushMatrix();
    translate(-28, -69 + sin(radians(frameCount*8))*5);
    rotate(30);
    (rect)(-8, 0, 35, 30, 20, 0, 20, 0);
    
    (rect)(26, 0, 35, 30, 0, 20, 0, 20);
    popMatrix();
    rectMode(CENTER);
    
    fill(87, 143, 70);
    
    (rect)(47.5, -125, 86, 140, 20, 20, 50, 50);
    
    fill(84, 148, 176);
    
    quad(33-20, -37 + sin(radians(frameCount*8))*5, -26, -61 + sin(radians(frameCount*8))*5, 19, -61, 69, -44);
    
    (rect)(47.5, -75, 57, 74, 0, 0, 20, 20);
    
    fill(232, 212, 151);
    
    rect(47, -102, 58, 20);
    
    rect(47.5, -151, 80, 80, 20);
    
    fill(87, 143, 70);
    
    (rect)(30, -178, 50, 32, 20, 0, 50, 0);
    
    (rect)(72, -178, 38, 32, 0, 20, 0, 50);
    
    fill(32);
    
    ellipse(74, -150, 15, 15);
    
    fill(181, 90, 154);
    
    pushMatrix();
    
    translate(85, -82.5);
    
    rotate(-5);
    
    rect(0, 0, 20, 10, 20);
    
    popMatrix();
    
    fill(232, 212, 151);
    
    rect(47.5, -157, 70, 5);
    
    ellipse(20, -80, 25, 25);
    
    ellipse(75, -85, 25, 25);
    
    fill(87, 143, 70);
    
    (rect)(25, -125, 43, 140, 20, 20, 50, 0);
    
    popMatrix();
    }
    if(z === 4){
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    rectMode(CORNER);
    
    noStroke();
    
    fill(84, 148, 176);
    
    (rect)(13, -30, 35, 30, 20, 0, 20, 0);
    
    (rect)(47, -30, 35, 30, 0, 20, 0, 20);
    
    rectMode(CENTER);
    
    fill(87, 143, 70);
    
    (rect)(47.5, -125, 86, 140, 20, 20, 50, 50);
    
    fill(84, 148, 176);
    
    quad(30, -30, 65, -30, 76, -50, 19, -50);
    
    (rect)(47.5, -75, 57, 74, 0, 0, 20, 20);
    
    fill(232, 212, 151);
    
    rect(47, -102, 58, 20);
    
    rect(47.5, -151, 80, 80, 20);
    
    fill(87, 143, 70);
    
    (rect)(30, -178, 50, 32, 20, 0, 50, 0);
    
    (rect)(72, -178, 38, 32, 0, 20, 0, 50);
    
    fill(32);
    
    ellipse(33, -150, 15, 15);
    
    ellipse(64, -150, 15, 15);
    
    fill(181, 90, 154);
    
    pushMatrix();
    
    translate(47.5, -82.5);
    
    rotate(-5);
    
    rect(0, 0, 90, 10, 20);
    
    popMatrix();
    
    fill(232, 212, 151);
    
    rect(47.5, -157, 70, 5);
    
    ellipse(20, -80, 25, 25);
    
    ellipse(75, -85, 25, 25);
    
    fill(87, 143, 70);
    
    (rect)(47.5, -125, 86, 140, 20, 20, 50, 50);
    
    popMatrix();
    }
}; // These folks have managed to make a place for themselves in the dangerous sea, but still have to time to collect a lot of goods to sell.

var RogueComputer = function(x, y, s){
    
    pushMatrix();
    
    translate(x, y);
    
    scale(s);
    
    noStroke();
    
    rectMode(CENTER);
    
    fill(255, 32, 32);
    
    (rect)(47.5, -100, 91, 190, 25, 25, 0, 0);
    
    fill(255, 64, 64);
    
    (rect)(69.25, -100, 47.5, 190, 0, 30, 0, 0);
    
    fill(255, 32, 32);
    
    rect(47.5, -152, 91, 4);
    
    fill(40);
    
    rect(47.5, -10, 95, 20);
    
    rect(47.5, -28, 95, 10);
    
    rect(47.5, -160, 95, 10);
    
    quad(47.5, -120, 27.5, -100, 47.5, -80, 67.5, -100);
    
    popMatrix();
    
}; // Hmmm, the hacker didn't wire this one enough. It's still sentient, and has some last-ditch boosts you may need for the final battle.


//}
//{
var rotbull = function(x, y, s, r) {
    pushMatrix();
    translate(x, y);
    scale(s);
    rotate(r);
    noFill();
    strokeCap(SQUARE);
    stroke(225, 0, 0);
    strokeWeight(5);
    arc(-1, 0, 25, 25, 0, radians(120));
    arc(-1, 0, 25, 25, radians(180), radians(300));
    stroke(255, 0, 0);
    arc(1, 0, 25, 25, 0, radians(120));
    arc(1, 0, 25, 25, radians(180), radians(300));
    noStroke();
    fill(225, 0, 0);
    triangle(3, 0, 17, 0, 10, -6);
    triangle(-7, 0, -23, 0, -14, 6);
    fill(255, 0, 0);
    triangle(5, 0, 19, 0, 12, -4);
    triangle(-5, 0, -21, 0, -12, 6);
    popMatrix();
};
var rbull = function(x, y, s, r) {
    pushMatrix();
    translate(x, y);
    scale(s);
    rotate(r);
    rectMode(CENTER);
    noStroke();
    rect(0, 0, 5, 10);
    triangle(3, -5, -2, -5, 0, -10);
    popMatrix();
};
var keyGraphic = function(x, y, s, r) {
    pushMatrix();
    translate(x, y);
    scale(s);
    rotate(r);
    textAlign(CENTER, CENTER);
    textSize(25);
    fill(225, 225, 0);
    text("O", -10, 0);
    pushMatrix();
    translate(8, 2);
    rotate(radians(90));
    text("F", 0, 0);
    popMatrix();
    fill(255, 255, 0);
    text("O", -8, 0);
    pushMatrix();
    translate(10, 2);
    rotate(radians(90));
    text("F", 0, 0);
    popMatrix();
        
    popMatrix();
};
var unlockedGraphic = function(x, y, s) {
    pushMatrix();
    translate(x, y);
    scale(s);
    strokeWeight(2);
    noFill();
    rectMode(CENTER);
    strokeCap(PROJECT);
    stroke(0, 225, 0);
    arc(0, 2, 25, 55, 0, PI/2);
    arc(0, 2, 25, 55, PI/2, PI);
    line(-12, 2, 12, 2);
    arc(0, 10, 6, 6, -PI, 0);
    line(3, 10, 3, 13);
    fill(255, 255, 105);
    rect(0, 17, 6, 6);
    noFill();
    stroke(0, 255, 0);
    arc(1, 2, 25, 55, 0, PI/2);
    arc(1, 2, 25, 55, PI/2, PI);
    line(-12, 2, 12, 2);
    arc(1, 10, 6, 6, -PI, 0);
    line(4, 10, 4, 13);
    fill(0, 255, 0);
    rect(1, 17, 6, 6);
    popMatrix();
};
var loopTurret = function(x, y, s) {
    pushMatrix();
    translate(x, y);
    scale(s);
    strokeWeight(5);
    stroke(225, 225, 225);
    noFill();
    ellipse(-2, 0, 100, 100);
    stroke(255, 255, 255);
    ellipse(2, 0, 100, 100);
    textAlign(CENTER, CENTER);
    textSize(14);
    fill(255, 255, 255);
    text("while(alive){\nattack();\n}", 1, 0);
        
    popMatrix();
};
var cannon = function(x, y, r, s, p){
    pushMatrix();
        translate(x, y);
        rotate(r);
        rectMode(CENTER);
        noStroke();
        fill(100, 100, 100);
        bezier(-15*s, -25*s + p, -43*s, 110*s + p, 43*s, 110*s + p, 15*s, -25*s + p);// Cannon Body
        rect(0, 30*s, 80*s, 10*s); // Wheel Axis
        ellipse(0, 80*s + p, 15*s, 15*s); // Little nub on back of cannon
        strokeWeight(5*s);
        stroke(100);
        fill(40, 40, 40);
        ellipse(0, -27*s + p, 36*s, 15*s);// Cannon mouth
        noStroke();
        fill(110, 58, 0);
        rect(-34*s, 30*s, 12*s, 50*s); //WHEELS
        rect(34*s, 30*s, 12*s, 50*s); //WHEELS
        fill(120, 68, 0);
        rect(-34*s, 30*s, 11.5*s, 43*s); //WHEELS
        rect(34*s, 30*s, 11.5*s, 43*s); //WHEELS
        fill(130, 78, 0);
        rect(-34*s, 30*s, 11*s, 36*s); //WHEELS
        rect(34*s, 30*s, 11*s, 36*s); //WHEELS
        if(p){
            fill(255, 0, 0);
            bezier(-15*s, -28*s + p, -43*s, -100*s + p, 43*s, -100*s + p, 15*s, -28*s + p);
            //arc(0, -28, 30, 10, 0, 180);
            fill(255, 100, 0);
            bezier(-10.5*s, -28*s + p, -36*s, -90*s + p, 36*s, -90*s + p, 10.5*s, -28*s + p);
            //arc(0, -28, 21, 10, 0, 180);
            fill(255, 255, 0);
            bezier(-6.5*s, -28*s + p, -26*s, -80*s + p, 26*s, -80*s + p, 6.5*s, -28*s + p);
            //arc(0, -28, 12, 10, 0, 180);
        }
    popMatrix();
};
var emeraldspikes = function(x,y,z,z2){
    noStroke();
    pushMatrix();
    translate(x,y);
    scale(z,z2);
    fill(47, 158, 79); 
    translate(-25, 0);
    triangle(0,0,50,0,25,-120);
  fill(66, 209, 58);
   triangle(9,0,45,0,25,-120);
   fill(161, 237, 69);
    triangle(40,0,20,0,25,-120);
    fill(224, 255, 122);
    triangle(35,0,30,0,25,-120);
 popMatrix();
};
var burger = function(x,y,z,z2){
    pushMatrix();
    translate(x,y);
    scale(z,z2);
    fill(255, 197, 8);
    ellipse(0,0,100,53);
    fill(255, 208, 66);
    ellipse(0,-5,100,40);
     fill(94, 37, 8);
    ellipse(0,-10,105,50);
    fill(43, 14, 1);
    ellipse(0,-15,105,45);
    fill(0, 186, 3);
    ellipse(-31,-15,55,35);
    ellipse(-16,-12,55,35);
    ellipse(20,-15,77,35);
    fill(0, 255, 0);
    ellipse(-31,-17,50,30);
    ellipse(-16,-14,50,30);
    ellipse(19,-17,72,30);
    fill(255, 28, 28);
    ellipse(-30,-20,50,25);
    ellipse(25,-20,50,25);
    fill(255, 87, 87);
    ellipse(-30,-22,50,20);
    ellipse(25,-22,50,20);
     fill(255, 197, 8);
    arc(0,-27,105,90,radians(180),radians(360));
    arc(0,-28,106,30,0,radians(180));
    noFill();
    strokeWeight(5);
    stroke(255, 255, 255);
    arc(0,-27,94,80,radians(210),radians(255));
    arc(0,-27,94,80,radians(187),radians(195));
    
    noStroke();
    popMatrix();
};
var bird = function(x,y,z,z2){
    pushMatrix();
    translate(x,y);
    scale(z,z2);
    fill(79, 161, 255);
    rectMode(CORNER);
    rect(0,0,50,50);
    fill(247, 156, 0);
    arc(50,25,25,35,0,radians(90));
    fill(255, 193, 87);
    arc(50,25,35,35,-radians(90),0);
      fill(0, 115, 255);
    arc(25,23,40,35,radians(90),radians(180));
    fill(255, 255, 255);
    ellipse(35,15,15,15);
     fill(0, 0, 0);
    ellipse(36,15,8,8);
    fill(0, 43, 255);
    triangle(0,45,0,35,-15,35);
    triangle(0,35,0,25,-15,25);
    popMatrix();
};
//}Graphics for attacks
var StandardBlockSize = 40;
noStroke();
background(0, 0);
var textures = {
    ice: {
        ground1: (function(){
            fill(217, 217, 217);
            rect(0, 0, 40, 45);
            fill(252, 252, 252);
            rect(0, 0, 40, 40);
            fill(200);
            ellipse(30, 30, 7, 7);
            ellipse(32, 23, 4, 4);
            ellipse(18, 35, 3, 3);
            ellipse(10, 10, 4, 4);
            return get(0,0,40,45);
        }) (),
        ground2: (function(){
            fill(108, 174, 196);
            rect(0, 0, 40, 45);
            fill(149, 204, 222);
            rect(0, 0, 40, 40);
            fill(255, 255, 255, 150);
            quad(15, 15, 25, 20, 15, 25, 5, 20);
            quad(35, 25, 30, 28, 25, 25, 30, 22.5);
            return get(0,0,40,45);
        }) (),
        ground3: (function(){
            fill(161, 133, 98);
            rect(0, 0, 40, 45);
            fill(186, 155, 117);
            rect(0, 0, 40, 40);
            fill(158, 126, 87);
            ellipse(30, 25, 10, 10);
            ellipse(15, 30, 15, 15);
            ellipse(20, 15, 7, 7);
            ellipse(27, 7, 5, 5);
            ellipse(32, 12, 6, 6);
            ellipse(10, 15, 5, 5);
            ellipse(30, 34, 3, 3);
            ellipse(15, 7, 4, 4);
            return get(0,0,40,45);
        }) (),
        water: (function(){
            fill(127, 137, 156);
            rect(0, 0, 40, 45);
            fill(139, 152, 176);    
            rect(0, 0, 40, 40);
            fill(250, 250, 255);
            quad(15, 15, 25, 20, 15, 25, 5, 20);
            quad(35, 25, 30, 28, 25, 25, 30, 22.5);
            return get(0,0,40,45);
        }) (),
        rockform: {
            tall: function(x, y){
                pushMatrix();
                
                translate(x, y);
                scale(StandardBlockSize / 40);
                
                fill(149, 204, 222);
                
                beginShape();
                
                vertex(5, 20);
                bezierVertex(10, 30, 30, 30, 35, 20);
                vertex(35, 20);
                vertex(22, -50);
                vertex(18, -48);
                
                endShape(CLOSE);
                
                fill(108, 174, 196);
                
                beginShape();
                
                vertex(5, 20);
                bezierVertex(10, 30, 30, 30, 35, 20);
                vertex(35, 20);
                vertex(30, -10);
                bezierVertex(30, 0, 20, 0, 7, 10);
                vertex(7, 10);
                
                endShape(CLOSE);
                
                popMatrix();
            },
            short: function(x, y){
                pushMatrix();
                
                translate(x, y);
                scale(StandardBlockSize / 40);
                
                fill(149, 204, 222);
                
                beginShape();
                
                vertex(5, 20);
                bezierVertex(10, 30, 30, 30, 35, 20);
                vertex(35, 20);
                vertex(22, -30);
                vertex(18, -28);
                
                endShape(CLOSE);
                
                fill(108, 174, 196);
                
                beginShape();
                
                vertex(5, 20);
                bezierVertex(10, 30, 30, 30, 35, 20);
                vertex(35, 20);
                vertex(28, -10);
                bezierVertex(28, 0, 20, 0, 8, 10);
                vertex(8, 10);
                
                endShape(CLOSE);
                
                popMatrix();
            }
        },
        tree: {
            tall: function(x, y){
                pushMatrix();
                
                translate(x, y);
                scale(StandardBlockSize / 40);
                
                fill(161, 133, 98);
                beginShape();
                vertex(12, 0);
                vertex(28, 0);
                vertex(28, 25);
                bezierVertex(25, 30, 15, 30, 12, 25);
                endShape(CLOSE);
                
                fill(29, 138, 40);
                
                beginShape();
                vertex(20, -50);
                vertex(35, 10);
                bezierVertex(30, 20, 10, 20, 5, 10);
                endShape(CLOSE);
                
                fill(28, 97, 34);
                
                beginShape();
                vertex(27, -20);
                vertex(35, 10);
                bezierVertex(30, 20, 10, 20, 5, 10);
                vertex(8, 0);
                bezierVertex(10, -5, 27, -15, 27, -20);
                endShape(CLOSE);
                
                popMatrix();
            },
            short: function(x, y){
                pushMatrix();
                
                translate(x, y);
                scale(StandardBlockSize / 40);
                
                fill(161, 133, 98);
                beginShape();
                vertex(12, 0);
                vertex(28, 0);
                vertex(28, 25);
                bezierVertex(25, 30, 15, 30, 12, 25);
                endShape(CLOSE);
                
                fill(29, 138, 40);
                
                beginShape();
                vertex(20, -30);
                vertex(35, 10);
                bezierVertex(30, 20, 10, 20, 5, 10);
                endShape(CLOSE);
                
                fill(28, 97, 34);
                
                beginShape();
                vertex(27, -10);
                vertex(35, 10);
                bezierVertex(30, 20, 10, 20, 5, 10);
                vertex(8, 5);
                bezierVertex(10, -5, 27, 0, 27, -10);
                endShape(CLOSE);
                
                popMatrix();
            }
        },
        portal: function(x, y){
            pushMatrix();
            translate(x, y);
            scale(StandardBlockSize / 40);
            fill(255, 255, 255, 150);
            rect(10, -65, 100, 90);
            fill(108, 174, 196);
            rect(5, -70, 30, 100, 5);
            rect(5, -70, 110, 40, 5);
            rect(85, -70, 30, 100, 5);
            fill(217);
            rect(5, -70, 110, 35, 5);
            fill(252);
            rect(5, -70, 110, 30, 5);
            fill(200);
            ellipse(100, -60, 7, 7);
            ellipse(107, -55, 3, 3);
            ellipse(15, -47, 5, 5);
            popMatrix();
        }
    },
    town: {
        ground1: (function(){
            fill(64);
            rect(0, 0, 40, 45);
            fill(128);
            rect(0, 0, 40, 40);
            fill(240);
            rect(15, 10, 10, 20);
            return get(0,0,40,45);
        }) (),
        ground2: (function(){
            fill(212, 185, 157);
            rect(0, 0, 40, 45);
            fill(232, 209, 186);
            rect(0, 0, 40, 40);
            fill(212, 185, 157);
            ellipse(30, 30, 7, 7);
            ellipse(32, 23, 4, 4);
            ellipse(18, 35, 3, 3);
            ellipse(10, 10, 4, 4);
            return get(0,0,40,45);
        }) (),
        ground3: (function(){
            fill(133, 127, 69);
            rect(0, 0, 40, 45);
            fill(181, 169, 56);
            rect(0, 0, 40, 40);
            return get(0,0,40,45);
        }) (),
        water: (function(){
            fill(93, 113, 148);
            rect(0, 0, 40, 45);
            fill(120, 141, 179);
            rect(0, 0, 40, 40);
            fill(230, 230, 230);
            quad(15, 15, 25, 20, 15, 25, 5, 20);
            quad(35, 25, 30, 28, 25, 25, 30, 22.5);
            return get(0,0,40,45);
        }) (),
        rockform: {
            short: function(x, y){
                pushMatrix();
                
                translate(x, y);
                scale(StandardBlockSize / 40);
                
                fill(128);
                rect(18, -30, 4, 55);
                
                fill(32);
                triangle(5, -30, 35, -30, 20, -5);
                
                fill(237, 216, 26);
                triangle(10, -27, 30, -27, 20, -10);
                
                popMatrix();
            },
            tall: function(x, y){
                pushMatrix();
                
                translate(x, y);
                scale(StandardBlockSize / 40);
                
                fill(128);
                rect(18, -50, 4, 75);
                
                fill(255);
                beginShape();
                vertex(10, -50);
                vertex(30, -50);
                vertex(40, -40);
                vertex(40, -20);
                vertex(30, -10);
                vertex(10, -10);
                vertex(0, -20);
                vertex(0, -40);
                endShape(CLOSE);
                
                fill(230, 25, 25);
                beginShape();
                vertex(11, -48);
                vertex(29, -48);
                vertex(38, -39);
                vertex(38, -21);
                vertex(29, -12);
                vertex(11, -12);
                vertex(2, -21);
                vertex(2, -39);
                endShape(CLOSE);
                
                fill(0, 0, 0, 20);
                beginShape();
                vertex(40, -30);
                vertex(40, -20);
                vertex(30, -10);
                vertex(10, -10);
                vertex(0, -20);
                vertex(0, -30);
                endShape(CLOSE);
                
                popMatrix();
            },
        },
        tree: {
            tall: function(x, y){
                pushMatrix();
                
                translate(x, y);
                scale(StandardBlockSize / 40);
                
                fill(161, 133, 98);
                beginShape();
                vertex(15, -10);
                vertex(25, -10);
                vertex(25, 25);
                bezierVertex(25, 30, 15, 30, 15, 25);
                endShape(CLOSE);
                
                fill(148, 94, 35);
                rect(2, -40, 36, 50, 3);
                
                fill(199, 117, 30);
                rect(2, -40, 36, 30, 3);
                
                popMatrix();
            },
            short: function(x, y){
                pushMatrix();
                
                translate(x, y);
                scale(StandardBlockSize / 40);
                
                fill(161, 133, 98);
                beginShape();
                vertex(15, -10);
                vertex(25, -10);
                vertex(25, 25);
                bezierVertex(25, 30, 15, 30, 15, 25);
                endShape(CLOSE);
                
                fill(148, 94, 35);
                rect(2, -25, 36, 35, 3);
                
                fill(199, 117, 30);
                rect(2, -25, 36, 25, 3);
                
                popMatrix();
            }
        },
        portal: function(x, y){
            pushMatrix();
            translate(x, y);
            scale(StandardBlockSize / 40);
            fill(247, 235, 180, 150);
            rect(10, -65, 100, 90);
            fill(148, 94, 35);
            rect(5, -70, 30, 100, 5);
            rect(5, -70, 110, 40, 5);
            rect(85, -70, 30, 100, 5);
            fill(199, 117, 30);
            rect(5, -70, 110, 30, 5);
            popMatrix();
        }
    },
    plains: {
        ground1: (function(){
            fill(87, 184, 57);
            rect(0, 0, 40, 45);
            fill(104, 209, 69);
            rect(0, 0, 40, 40);
            return get(0,0,40,45);
        }) (),
        ground2: (function(){
            fill(224, 205, 127);
            rect(0, 0, 40, 45);
            fill(250, 233, 173);
            rect(0, 0, 40, 40);
            fill(200);
            ellipse(30, 30, 7, 7);
            ellipse(32, 23, 4, 4);
            ellipse(18, 35, 3, 3);
            ellipse(10, 10, 4, 4);
            return get(0,0,40,45);
        }) (),
        ground3: (function(){
            fill(87, 184, 57);
            rect(0, 0, 40, 45);
            fill(104, 209, 69);
            rect(0, 0, 40, 40);
            fill(200);
            ellipse(30, 25, 10, 10);
            ellipse(15, 30, 15, 15);
            ellipse(20, 15, 7, 7);
            ellipse(27, 7, 5, 5);
            ellipse(32, 12, 6, 6);
            ellipse(10, 15, 5, 5);
            ellipse(30, 34, 3, 3);
            ellipse(15, 7, 4, 4);
            return get(0,0,40,45);
        }) (),
        water: (function(){
            fill(111, 155, 232);
            rect(0, 0, 40, 40);
            fill(250, 250, 255);
            quad(15, 15, 25, 20, 15, 25, 5, 20);
            quad(35, 25, 30, 28, 25, 25, 30, 22.5);
            return get(0,0,40,40);
        }) (),
        rockform: {
            tall: function(x, y){
                pushMatrix();
                translate(x, y);
                scale(StandardBlockSize / 40);
                fill(160);
                rect(5, -20, 30, 50, 3);
                fill(200);
                rect(5, -20, 30, 30, 3);
                popMatrix();
            },
            short: function(x, y){
                pushMatrix();
                translate(x, y);
                scale(StandardBlockSize / 40);
                fill(160);
                rect(5, -10, 30, 40, 3);
                fill(200);
                rect(5, -10, 30, 30, 3);
                popMatrix();
            }
        },
        tree: {
            tall: function(x, y){
                pushMatrix();
                translate(x, y);
                scale(StandardBlockSize / 40);
                fill(161, 133, 98);
                beginShape();
                vertex(12, 0);
                vertex(28, 0);
                vertex(28, 25);
                bezierVertex(25, 30, 15, 30, 12, 25);
                endShape(CLOSE);
                fill(28, 97, 34);
                rect(2, -40, 36, 60, 3);
                fill(29, 138, 40);
                rect(2, -40, 36, 30, 3);
                popMatrix();
            },
            short: function(x, y){
                pushMatrix();
                translate(x, y);
                scale(StandardBlockSize / 40);
                fill(161, 133, 98);
                beginShape();
                vertex(12, 0);
                vertex(28, 0);
                vertex(28, 25);
                bezierVertex(25, 30, 15, 30, 12, 25);
                endShape(CLOSE);
                fill(28, 97, 34);
                rect(2, -20, 36, 40, 3);
                fill(29, 138, 40);
                rect(2, -20, 36, 30, 3);
                popMatrix();
            }
        },
        portal: function(x, y){
            pushMatrix();
            translate(x, y);
            scale(StandardBlockSize / 40);
            fill(255, 255, 255, 150);
            rect(10, -65, 100, 90);
            fill(160);
            rect(5, -70, 30, 100, 5);
            rect(5, -70, 110, 40, 5);
            rect(85, -70, 30, 100, 5);
            fill(200);
            rect(5, -70, 110, 30, 5);
            popMatrix();
        }
    },
    volc: {
        ground1: (function(){
            fill(90);
            rect(0, 0, 40, 45);
            fill(110);
            rect(0, 0, 40, 40);
            return get(0,0,40,45);
        }) (),
        ground2: (function(){
            fill(196, 92, 57);
            rect(0, 0, 40, 45);
            fill(250, 94, 42);
            rect(0, 0, 40, 40);
            fill(64);
            beginShape();
            vertex(5, 18);
            vertex(15, 3);
            vertex(25, 3);
            vertex(35, 18);
            vertex(35, 22);
            vertex(25, 38);
            vertex(15, 38);
            vertex(5, 22);
            endShape(CLOSE);
            fill(128);
            beginShape();
            vertex(5, 18);
            vertex(15, 3);
            vertex(25, 3);
            vertex(35, 18);
            vertex(25, 32);
            vertex(15, 32);
            endShape(CLOSE);
            popMatrix();
            return get(0,0,40,45);
        }) (),
        ground3: (function(){
            fill(90);
            rect(0, 0, 40, 45);
            fill(110);
            rect(0, 0, 40, 40);
            fill(250, 94, 42, 200);
            ellipse(30, 25, 10, 10);
            ellipse(15, 30, 15, 15);
            ellipse(20, 15, 7, 7);
            ellipse(27, 7, 5, 5);
            ellipse(32, 12, 6, 6);
            ellipse(10, 15, 5, 5);
            ellipse(30, 34, 3, 3);
            ellipse(15, 7, 4, 4);
            return get(0,0,40,45);
        }) (),
        water: (function(){
            fill(196, 92, 57);
            rect(0, 0, 40, 45);
            fill(250, 94, 42);
            rect(0, 0, 40, 40);
            fill(250, 161, 18);
            arc(15, 25, 15, 15, -radians(180), 0);
            arc(15, 25, 15, 7, 0, radians(180));
            ellipse(20, 10, 5, 5);
            ellipse(30, 15, 7, 7);
            return get(0,0,40,45);
        }) (),
        rockform: {
            tall: function(x, y){
                pushMatrix();
                
                translate(x, y);
                scale(StandardBlockSize / 40);
            
                fill(64);
                beginShape();
                vertex(5, -5);
                vertex(15, -20);
                vertex(25, -20);
                vertex(35, -5);
                vertex(35, 15);
                vertex(25, 30);
                vertex(15, 30);
                vertex(5, 15);
                endShape(CLOSE);
                
                fill(128);
                beginShape();
                vertex(5, -5);
                vertex(15, -20);
                vertex(25, -20);
                vertex(35, -5);
                vertex(25, 10);
                vertex(15, 10);
                endShape(CLOSE);
                
                popMatrix();
            },
            short: function(x, y){
                pushMatrix();
                
                translate(x, y);
                scale(StandardBlockSize / 40);
                
                fill(64);
                beginShape();
                vertex(5, 0);
                vertex(15, -15);
                vertex(25, -15);
                vertex(35, 0);
                vertex(35, 15);
                vertex(25, 30);
                vertex(15, 30);
                vertex(5, 15);
                endShape(CLOSE);
                
                fill(128);
                beginShape();
                vertex(5, 0);
                vertex(15, -15);
                vertex(25, -15);
                vertex(35, 0);
                vertex(25, 15);
                vertex(15, 15);
                endShape(CLOSE);
                
                popMatrix();
            }
        },
        tree: {
            tall: function(x, y){
                pushMatrix();
                
                translate(x, y);
                scale(StandardBlockSize / 40);
                
                fill(90);
                beginShape();
                vertex(12, 0);
                vertex(28, 0);
                vertex(28, 25);
                bezierVertex(25, 30, 15, 30, 12, 25);
                endShape(CLOSE);
                
                fill(128);
                rect(2, -40, 36, 60, 3);
                
                fill(160);
                rect(2, -40, 36, 30, 3);
                
                popMatrix();
            },
            short: function(x, y){
                pushMatrix();
                
                translate(x, y);
                scale(StandardBlockSize / 40);
                
                fill(90);
                beginShape();
                vertex(12, 0);
                vertex(28, 0);
                vertex(28, 25);
                bezierVertex(25, 30, 15, 30, 12, 25);
                endShape(CLOSE);
                
                fill(128);
                rect(2, -20, 36, 40, 3);
                
                fill(160);
                rect(2, -20, 36, 30, 3);
                
                popMatrix();
            }
        }
    },
    monolith: {
        ground2: (function(){
            fill(16);
            rect(0, 0, 40, 45);
            fill(32);
            rect(0, 0, 40, 40);
            return get(0,0,40,45);
        }) (),
        ground1: (function(){
            fill(16);
            rect(0, 0, 40, 45);
            fill(32);
            rect(0, 0, 40, 40);
            fill(255, 32, 32);
            rect(19, 0, 2, 15);
            rect(19, 25, 2, 15);
            rect(8, 0, 2, 40);
            rect(30, 0, 2, 40);
            stroke(255, 32, 32);
            strokeWeight(2);
            noFill();
            ellipse(20, 20, 10, 10);
            noStroke();
            return get(0,0,40,45);
        }) (),
        ground3: (function(){
            fill(16);
            rect(0, 0, 40, 45);
            fill(32);
            rect(0, 0, 40, 40);
            fill(255, 32, 32);
            rect(19, 0, 2, 40);
            rect(8, 0, 2, 15);
            rect(8, 25, 2, 15);
            rect(30, 0, 2, 15);
            rect(30, 25, 2, 15);
            stroke(255, 32, 32);
            strokeWeight(2);
            noFill();
            ellipse(9, 20, 10, 10);
            ellipse(31, 20, 10, 10);
            noStroke();
            return get(0,0,40,45);
        }) (),
        water: (function(){
            fill(255, 32, 32);
            rect(0, 0, 40, 45);
            fill(255, 64, 64);
            rect(0, 0, 40, 40);
            fill(64);
            quad(15, 15, 25, 20, 15, 25, 5, 20);
            quad(35, 25, 30, 28, 25, 25, 30, 22.5);
            return get(0,0,40,45);
        }) (),
        rockform: {
            tall: function(x, y){
                pushMatrix();
                
                translate(x, y);
                scale(StandardBlockSize / 40);
            
                fill(255, 32, 32);
                rect(5, -20, 30, 50, 3);
                
                fill(255, 64, 64);
                rect(5, -20, 30, 30, 3);
                
                fill(32);
                
                rect(19, -20, 2, 10);
                rect(19, 0, 2, 30);
                
                stroke(32);
                strokeWeight(2);
                noFill();
                
                ellipse(20, -5, 10, 10);
                
                noStroke();
                
                popMatrix();
            },
            short: function(x, y){
                pushMatrix();
                
                translate(x, y);
                scale(StandardBlockSize / 40);
                
                fill(255, 32, 32);
                rect(5, -10, 30, 40, 3);
                
                fill(255, 64, 64);
                rect(5, -10, 30, 30, 3);
                
                fill(32);
                
                rect(19, -10, 2, 10);
                rect(19, 10, 2, 20);
                
                stroke(32);
                strokeWeight(2);
                noFill();
                
                ellipse(20, 5, 10, 10);
                
                noStroke();
                
                popMatrix();
            }
        },
        tree: {
            tall: function(x, y){
                pushMatrix();
                
                translate(x, y);
                scale(StandardBlockSize / 40);
                
                fill(115, 24, 24);
                beginShape();
                vertex(12, 0);
                vertex(28, 0);
                vertex(28, 25);
                bezierVertex(25, 30, 15, 30, 12, 25);
                endShape(CLOSE);
                
                fill(8);
                rect(2, -40, 36, 60, 3);
                
                fill(32);
                rect(2, -40, 36, 30, 3);
                
                popMatrix();
            },
            short: function(x, y){
                pushMatrix();
                
                translate(x, y);
                scale(StandardBlockSize / 40);
                
                fill(115, 24, 24);
                beginShape();
                vertex(12, 0);
                vertex(28, 0);
                vertex(28, 25);
                bezierVertex(25, 30, 15, 30, 12, 25);
                endShape(CLOSE);
                
                fill(8);
                rect(2, -20, 36, 40, 3);
                
                fill(32);
                rect(2, -20, 36, 30, 3);
                
                popMatrix();
            }
        },
        portal: function(x, y){
            pushMatrix();
            translate(x, y);
            scale(StandardBlockSize / 40);
            fill(255, 32, 32, 150);
            rect(10, -65, 100, 90);
            fill(16);
            rect(5, -70, 110, 40, 5);
            fill(32);
            rect(5, -70, 110, 30, 5);
            fill(255, 32, 32);
            ellipse(25, -54, 20, 13);
            ellipse(45, -54, 10, 7);
            fill(255, 64, 64);
            arc(25, -54, 20, 13, radians(180), radians(360));
            arc(25, -54, 20, 5, 0, radians(180));
            arc(45, -54, 10, 7, radians(180), radians(360));
            arc(45, -54, 10, 2, 0, radians(180));
            popMatrix();
        }
    },
    gateway: {
        front: function(x, y){
            pushMatrix();
            translate(x, y);
            scale(StandardBlockSize / 40);
            fill(5);
            rect(0, -260, 250, 300, 5);
            rect(50, 30, 150, 40, 5);
            rect(-40, -60, 330, 80, 5);
            rect(70, -265, 110, 45, 5);
            fill(32);
            rect(0, -260, 250, 40, 5);
            (rect)(50, -10, 150, 40, 0, 0, 5, 5);
            (rect)(-40, -60, 40, 40, 5, 0, 0, 5);
            (rect)(250, -60, 40, 40, 0, 5, 5, 0);
            
            fill(5);
            rect(70, -260, 110, 35, 5);
            
            fill(32);
            rect(70, -265, 110, 30, 5);
            
            fill(255, 90, 90);
            rect(50, 48, 100, 4);
            rect(170, 48, 30, 4);
            rect(-40, -2, 40, 4);
            rect(250, -2, 40, 4);
            
            rect(28, -260, 4, 140);
            rect(28, -100, 4, 40);
            rect(28, -30, 4, 70);
            rect(58, -30, 4, 20);
            rect(58, -260, 4, 200);
            rect(218, -160, 4, 200);
            rect(218, -230, 4, 20);
            rect(188, -230, 4, 220);
            rect(218, -260, 4, 15);
            
            rect(60, -5, 30, 30, 5);
            rect(110, -5, 30, 30, 5);
            rect(160, -5, 30, 30, 5);
            
            stroke(255, 90, 90);
            strokeWeight(4);
            noFill();
            
            ellipse(160, 50, 20, 20);
            ellipse(30, -110, 20, 20);
            line(30, -60, 60, -30);
            line(190, -230, 220, -245);
            
            ellipse(220, -170, 20, 20);
            
            noStroke();
            
            fill(255, 32, 32);
            rect(50, 49, 100, 2);
            rect(170, 49, 30, 2);
            rect(-40, -1, 40, 2);
            rect(250, -1, 40, 2);
            
            rect(29, -260, 2, 140);
            rect(29, -100, 2, 40);
            rect(29, -30, 2, 70);
            rect(59, -30, 2, 20);
            rect(59, -260, 2, 200);
            rect(219, -160, 2, 200);
            rect(219, -230, 2, 20);
            rect(189, -230, 2, 220);
            rect(219, -260, 2, 15);
            
            rect(60, -5, 30, 30, 5);
            rect(110, -5, 30, 30, 5);
            rect(160, -5, 30, 30, 5);
            
            quad(125, -150, 165, -110, 125, -70, 85, -110);
            
            fill(255, 64, 64);
            rect(60, -5, 30, 25, 5);
            rect(110, -5, 30, 25, 5);
            rect(160, -5, 30, 25, 5);
            
            quad(125, -150, 160, -115, 125, -80, 90, -115);
            
            stroke(255, 32, 32);
            strokeWeight(2);
            noFill();
            
            ellipse(160, 50, 20, 20);
            ellipse(30, -110, 20, 20);
            line(30, -60, 60, -30);
            line(190, -230, 220, -245);
            
            ellipse(220, -170, 20, 20);
            
            noStroke();
            popMatrix();    
        },
    },
    sea: {
        ground1: (function(){
            fill(93, 113, 148);
            rect(0, 0, 40, 45);
            fill(120, 141, 179);
            rect(0, 0, 40, 40);
            fill(230, 230, 230);
            quad(15, 15, 25, 20, 15, 25, 5, 20);
            quad(35, 25, 30, 28, 25, 25, 30, 22.5);
            return get(0,0,40,45);
        }) (),
        ground3: (function(){
            fill(48, 63, 89);
            rect(0, 0, 40, 45);
            fill(68, 90, 128);
            rect(0, 0, 40, 40);
            fill(220, 221, 227);
            quad(15, 15, 25, 20, 15, 25, 5, 20);
            quad(35, 25, 30, 28, 25, 25, 30, 22.5);
            return get(0,0,40,45);
        }) (),
        ground2: (function(){
            fill(191, 162, 109);
            rect(0, 0, 40, 40);
            fill(214, 176, 112);
            rect(0, 0, 40, 45);
            fill(120, 141, 179, 125);
            rect(0, 0, 40, 45);
            rect(0, 0, 40, 40);
            fill(230, 230, 230);
            quad(15, 15, 25, 20, 15, 25, 5, 20);
            quad(35, 25, 30, 28, 25, 25, 30, 22.5);
            return get(0,0,40,45);
        }) (),
        water: (function(){
            fill(191, 162, 109);
            rect(0, 0, 40, 45);
            fill(214, 176, 112);
            rect(0, 0, 40, 40);
            fill(219, 197, 160);
            ellipse(30, 5, 5, 5);
            ellipse(25, 15, 10, 10);
            ellipse(34, 20, 3, 3);
            return get(0,0,40,45);
        }) (),
        rockform: {
            tall: function(x, y){
                pushMatrix();
                translate(x, y);
                scale(StandardBlockSize / 40);
                fill(200);
                beginShape();
                vertex(5, 20);
                bezierVertex(10, 30, 30, 30, 35, 20);
                vertex(35, 20);
                vertex(22, -50);
                vertex(18, -48);
                endShape(CLOSE);
                fill(150);
                beginShape();
                vertex(5, 20);
                bezierVertex(10, 30, 30, 30, 35, 20);
                vertex(35, 20);
                vertex(30, -10);
                bezierVertex(30, 0, 20, 0, 7, 10);
                vertex(7, 10);
                endShape(CLOSE);
                popMatrix();
            },
            short: function(x, y){
                pushMatrix();
                translate(x, y);
                scale(StandardBlockSize / 40);
                fill(200);
                beginShape();
                vertex(5, 20);
                bezierVertex(10, 30, 30, 30, 35, 20);
                vertex(35, 20);
                vertex(22, -30);
                vertex(18, -28);
                endShape(CLOSE);
                fill(150);
                beginShape();
                vertex(5, 20);
                bezierVertex(10, 30, 30, 30, 35, 20);
                vertex(35, 20);
                vertex(28, -10);
                bezierVertex(28, 0, 20, 0, 8, 10);
                vertex(8, 10);
                endShape(CLOSE);
                popMatrix();
            }
        },
        tree: {
            tall: function(x, y){
                pushMatrix();
                translate(x, y);
                scale(StandardBlockSize / 40);
                fill(179, 151, 127);
                beginShape();
                vertex(15, 0);
                vertex(25, 0);
                vertex(25, 25);
                bezierVertex(25, 30, 15, 30, 15, 25);
                endShape(CLOSE);
                fill(0, 0, 0, 50);
                rect(15, 0, 10, 10);
                arc(20, 10, 10, 3, 0, radians(180));
                fill(50, 153, 109);
                arc(20, 0, 35, 100, 180, 360);
                arc(20, 0, 35, 10, 0, 180);
                fill(57, 184, 129);
                arc(20, 0, 35, 100, radians(180), radians(270));
                arc(20, 0, 35, 10, radians(90), radians(180));
                popMatrix();
            },
            short: function(x, y){
                pushMatrix();
                translate(x, y);
                scale(StandardBlockSize / 40);
                fill(179, 151, 127);
                beginShape();
                vertex(15, 0);
                vertex(25, 0);
                vertex(25, 25);
                bezierVertex(25, 30, 15, 30, 15, 25);
                endShape(CLOSE);
                fill(0, 0, 0, 50);
                rect(15, 10, 10, 10);
                arc(20, 20, 10, 3, 0, radians(180));
                fill(50, 153, 109);
                arc(20, 10, 35, 80, radians(180), radians(360));
                arc(20, 10, 35, 10, 0, radians(180));
                fill(57, 184, 129);
                arc(20, 10, 35, 80, radians(180), radians(270));
                arc(20, 10, 35, 10, radians(90), radians(180));
                popMatrix();
            }
        },
        portal: function(x, y){
            pushMatrix();
            translate(x, y);
            scale(StandardBlockSize / 40);
            fill(98, 227, 214, 150);
            rect(10, -65, 100, 90);
            fill(150);
            (rect)(5, -70, 30, 100, 5, 5, 0, 0);
            rect(5, -70, 110, 40, 5);
            (rect)(85, -70, 30, 100, 5, 5, 0, 0);
            fill(200);
            rect(5, -70, 110, 30, 5);
            fill(227, 127, 202, 200);
            triangle(5, 30, 15, 30, 10, 0);
            triangle(12, 30, 24, 30, 18, -5);
            triangle(20, 30, 35, 30, 27.5, 5);
            triangle(90, 30, 110, 30, 100, 0);
            triangle(102, 30, 112, 30, 107, 10);
            popMatrix();
        },
    },
    desert: {
        ground3: (function(){
            fill(207, 188, 95);
            rect(0, 0, 40, 45);
            fill(237, 220, 124);
            rect(0, 0, 40, 40);
            fill(190);
            ellipse(30, 5, 5, 5);
            ellipse(25, 15, 10, 10);
            ellipse(34, 20, 3, 3);
            return get(0,0,40,45);
        }) (),
        ground1: (function(){
            fill(207, 188, 95);
            rect(0, 0, 40, 45);
            fill(237, 220, 124);
            rect(0, 0, 40, 40);
            return get(0,0,40,45);
        }) (),
        ground2: (function(){
            fill(199, 163, 66);
            rect(0, 0, 40, 45);
            fill(214, 179, 83);
            rect(0, 0, 40, 40);
            return get(0,0,40,45);
        }) (),
        water: (function(){
            fill(171, 138, 53);
            rect(0, 0, 40, 45);
            fill(189, 153, 62);
            rect(0, 0, 40, 40);
            fill(194, 170, 110);
            arc(15, 25, 15, 15, -radians(180), 0);
            arc(15, 25, 15, 7, 0, radians(180));
            ellipse(20, 10, 5, 5);
            ellipse(30, 15, 7, 7);
            return get(0,0,40,45);
        })(),
        rockform: {
            tall: function(x, y){
                pushMatrix();
                translate(x, y);
                scale(StandardBlockSize / 40);
                fill(240, 208, 127);
                beginShape();
                vertex(5, 30);
                vertex(35, 30);
                vertex(35, -45);
                vertex(30, -40);
                vertex(15, -40);
                vertex(10, -35);
                vertex(5, -35);
                endShape(CLOSE);
                fill(227, 186, 75);
                beginShape();
                vertex(5, 30);
                vertex(35, 30);
                vertex(35, -20);
                vertex(30, -25);
                vertex(25, -25);
                vertex(20, -20);
                vertex(15, -20);
                vertex(10, -15);
                vertex(5, -15);
                endShape(CLOSE);
                fill(191, 152, 53);
                rect(19, -10, 2, 30);
                rect(13, -3, 4, 16);
                rect(23, -3, 4, 16);
                popMatrix();
            },
            short: function(x, y){
                pushMatrix();
                
                translate(x, y);
                scale(StandardBlockSize / 40);
                
                fill(240, 208, 127);
                
                beginShape();
                vertex(5, 30);
                vertex(35, 30);
                vertex(35, -25);
                vertex(30, -30);
                vertex(25, -25);
                vertex(20, -30);
                vertex(10, -30);
                vertex(5, -25);
                endShape(CLOSE);
                
                fill(227, 186, 75);
                
                beginShape();
                vertex(5, 30);
                vertex(35, 30);
                vertex(35, -10);
                vertex(30, -10);
                vertex(25, -5);
                vertex(20, -10);
                vertex(10, -10);
                vertex(5, 0);
                endShape(CLOSE);
                
                fill(191, 152, 53);
                
                for(var r = 7.5; r < 35; r += 7){
                    rect(r, 2, 4, 4);
                }
                rect(5, 10, 30, 2);
                
                popMatrix();
            }
        },
        tree: {
            tall: function(x, y){
                pushMatrix();
                translate(x, y);
                scale(StandardBlockSize / 40);
                fill(47, 125, 27);
                rect(5, -30, 30, 60, 3);
                fill(79, 173, 54);
                rect(5, -30, 30, 30, 3);
                popMatrix();
            },
            short: function(x, y){
                pushMatrix();
                translate(x, y);
                scale(StandardBlockSize / 40);
                fill(47, 125, 27);
                rect(5, -10, 30, 40, 3);
                fill(79, 173, 54);
                rect(5, -10, 30, 30, 3);
                popMatrix();
            }
        },
        portal: function(x, y){
            pushMatrix();
            translate(x, y);
            scale(StandardBlockSize / 40);
            fill(180, 180, 180, 150);
            rect(10, -65, 100, 90);
            fill(227, 186, 75);
            rect(5, -70, 30, 100, 5);
            rect(5, -70, 110, 40, 5);
            rect(85, -70, 30, 100, 5);
            fill(240, 208, 127);
            rect(5, -70, 110, 30, 5);
            fill(191, 152, 53);
            rect(5, -20, 30, 10);
            rect(5, -7, 13, 3);
            rect(22, -7, 13, 3);
            rect(85, -20, 30, 10);
            rect(85, -7, 13, 3);
            rect(102, -7, 13, 3);
            popMatrix();
        }
    },
    marsh: {
        ground3: (function(){
            fill(102, 150, 35);
            rect(0, 0, 40, 45);
            fill(131, 184, 57);
            rect(0, 0, 40, 40);
            return get(0,0,40,45);
        }) (),
        ground1: (function(){
            fill(74, 105, 30);
            rect(0, 0, 40, 45);
            fill(100, 140, 45);
            rect(0, 0, 40, 40);
            return get(0,0,40,45);
        }) (),
        ground2: (function(){
            fill(143, 122, 39);
            rect(0, 0, 40, 45);
            fill(168, 141, 42);
            rect(0, 0, 40, 40);
            fill(143, 122, 39);
            ellipse(30, 25, 10, 10);
            ellipse(15, 30, 15, 15);
            ellipse(20, 15, 7, 7);
            ellipse(27, 7, 5, 5);
            ellipse(32, 12, 6, 6);
            ellipse(10, 15, 5, 5);
            ellipse(30, 34, 3, 3);
            ellipse(15, 7, 4, 4);
            return get(0,0,40,45);
        }) (),
        water: (function(){
            fill(33, 138, 61);
            rect(0, 0, 40, 45);
            fill(42, 168, 76);
            rect(0, 0, 40, 40);
            fill(33, 139, 61);
            arc(15, 25, 15, 15, -radians(180), 0);
            arc(15, 25, 15, 7, 0, radians(180));
            ellipse(20, 10, 5, 5);
            ellipse(30, 15, 7, 7);
            return get(0,0,40,45);
        }) (),
        rockform: {
            tall: function(x, y){
                pushMatrix();
                translate(x, y);
                scale(StandardBlockSize / 40);
                fill(128);
                beginShape();
                vertex(5, 20);
                bezierVertex(10, 30, 30, 30, 35, 20);
                vertex(35, 20);
                vertex(22, -50);
                vertex(18, -48);
                endShape(CLOSE);
                fill(100);
                beginShape();
                vertex(5, 20);
                bezierVertex(10, 30, 30, 30, 35, 20);
                vertex(35, 20);
                vertex(30, -10);
                bezierVertex(30, 0, 20, 0, 7, 10);
                vertex(7, 10);
                endShape(CLOSE);
                popMatrix();
            },
            short: function(x, y){
                pushMatrix();
                translate(x, y);
                scale(StandardBlockSize / 40);
                fill(128);
                beginShape();
                vertex(5, 20);
                bezierVertex(10, 30, 30, 30, 35, 20);
                vertex(35, 20);
                vertex(22, -30);
                vertex(18, -28);
                endShape(CLOSE);
                fill(100);
                beginShape();
                vertex(5, 20);
                bezierVertex(10, 30, 30, 30, 35, 20);
                vertex(35, 20);
                vertex(28, -10);
                bezierVertex(28, 0, 20, 0, 8, 10);
                vertex(8, 10);
                endShape(CLOSE);
                popMatrix();
            }
        },
        tree: {
            tall: function(x, y){
                pushMatrix();
                translate(x, y);
                scale(StandardBlockSize / 40);
                fill(122, 93, 57);
                rect(10, 0, 20, 20);
                ellipse(20, 20, 20, 20);
                ellipse(20, 0, 20, 20);
                fill(74, 105, 30);
                rect(2, -40, 36, 50, 3);
                fill(100, 140, 45);
                rect(2, -40, 36, 30, 3);
                popMatrix();
            },
            short: function(x, y){
                pushMatrix();
                translate(x, y);
                scale(StandardBlockSize / 40);
                fill(122, 93, 57);
                rect(10, 0, 20, 20);
                ellipse(20, 20, 20, 20);
                ellipse(20, 0, 20, 20);
                fill(179, 145, 104);
                ellipse(20, 0, 18, 18);
                popMatrix();
            }
        },
        portal: function(x, y){
            pushMatrix();
            translate(x, y);
            scale(StandardBlockSize / 40);
            fill(63, 184, 77, 150);
            rect(10, -55, 100, 80);
            fill(122, 93, 57);
            rect(5, -75, 30, 105, 5);
            rect(5, -65, 110, 30, 5);
            rect(85, -75, 30, 105, 5);
            fill(94, 71, 42);
            rect(35, -65, 5, 30);
            fill(179, 145, 104);
            rect(7, -72, 26, 26, 5);
            rect(87, -72, 26, 26, 5);
            popMatrix();
        }
    },
    castle: {
        ground3: (function(){
            fill(176, 164, 135);
            rect(0, 0, 20, 45);
            fill(47, 128, 153);
            rect(20, 0, 20, 45);
            fill(212, 198, 163);
            rect(0, 0, 40, 40);
            fill(71, 156, 217);
            rect(20, 20, 20, 20);
            rect(0, 0, 20, 20);
            return get(0,0,40,45);
        }) (),
        ground1: (function(){
            fill(176, 164, 135);
            rect(0, 0, 40, 45);
            fill(212, 198, 163);
            rect(0, 0, 40, 40);
            fill(194, 181, 149);
            rect(0, 9, 40, 2);
            rect(0, 19, 40, 2);
            rect(0, 29, 40, 2);
            rect(19, 0, 2, 10);
            rect(9, 10, 2, 10);
            rect(29, 10, 2, 10);
            rect(19, 20, 2, 10);
            rect(9, 30, 2, 10);
            rect(29, 30, 2, 10);
            rect(0,0,40,2);
            return get(0,0,40,45);
        }) (),
        ground2: (function(){
            fill(176, 164, 135);
            rect(0, 0, 40, 45);
            fill(194, 181, 149);
            rect(0, 0, 40, 40);
            fill(212, 198, 163);
            rect(2, 2, 36, 36);
            return get(0,0,40,45);
        })(),
        water: (function(){
            fill(121, 142, 181);
            rect(0, 0, 40, 45);
            fill(141, 168, 214);
            rect(0, 0, 40, 40);
            fill(250, 250, 255);
            quad(15, 15, 25, 20, 15, 25, 5, 20);
            quad(35, 25, 30, 28, 25, 25, 30, 22.5);
            return get(0,0,40,45);
        }) (),
        rockform: {
            tall: function(x, y){
                pushMatrix();
                translate(x, y);
                scale(StandardBlockSize / 40);
                fill(166, 154, 128);
                rect(5, 0, 30, 30, 5);
                fill(209, 194, 163);
                rect(5, 0, 30, 25, 5);
                fill(166, 154, 128);
                rect(8, -30, 24, 45);
                arc(20, 15, 24, 10, 0, radians(180));
                rect(5, -40, 30, 30, 5);
                fill(209, 194, 163);
                rect(5, -40, 30, 25, 5);
                popMatrix();
            },
            short: function(x, y){
                pushMatrix();
                translate(x, y);
                scale(StandardBlockSize / 40);
                fill(166, 154, 128);
                rect(5, 0, 30, 30, 5);
                fill(209, 194, 163);
                rect(5, 0, 30, 25, 5);
                fill(166, 154, 128);
                rect(8, -20, 24, 35);
                arc(20, 15, 24, 10, 0, radians(180));
                rect(5, -25, 30, 30, 5);
                fill(209, 194, 163);
                rect(5, -25, 30, 25, 5);
                popMatrix();
            }
        },
        tree: {
            tall: function(x, y){
                pushMatrix();
                translate(x, y);
                scale(StandardBlockSize / 40);
                fill(166, 154, 128);
                rect(2, -5, 36, 35, 5);
                fill(209, 194, 163);
                rect(2, -5, 36, 25, 5);
                fill(166, 154, 128);
                rect(7, 0, 26, 15, 5);
                fill(125, 95, 31);
                rect(7, 5, 26, 10, 5);
                fill(199, 160, 34);
                arc(20, 5, 20, 100, radians(180), radians(360));
                arc(20, 5, 20, 15, 0, radians(180));
                fill(222, 184, 57);
                arc(20, 5, 20, 100, radians(180), radians(270));
                arc(20, 5, 20, 15, radians(90), radians(180));
                popMatrix();
            },
            short: function(x, y){
                pushMatrix();
                translate(x, y);
                scale(StandardBlockSize / 40);
                fill(166, 154, 128);
                rect(2, -5, 36, 35, 5);
                fill(209, 194, 163);
                rect(2, -5, 36, 25, 5);
                fill(166, 154, 128);
                rect(7, 0, 26, 15, 5);
                fill(125, 95, 31);
                rect(7, 5, 26, 10, 5);
                fill(199, 160, 34);
                arc(20, 5, 20, 60, radians(180), radians(360));
                arc(20, 5, 20, 15, 0, radians(180));
                fill(222, 184, 57);
                arc(20, 5, 20, 60, radians(180), radians(270));
                arc(20, 5, 20, 15, radians(90), radians(180));
                popMatrix();
            }
        },
        wall: function(x, y){
            pushMatrix();
            translate(x, y);
            scale(StandardBlockSize / 40);
            fill(166, 154, 128);
            rect(0, -55, 40, 85, 2);
            fill(212, 198, 163);
            rect(0, -55, 40, 40);
            fill(194, 181, 149);
            rect(0, -46, 40, 2);
            rect(0, -36, 40, 2);
            rect(0, -26, 40, 2);
            rect(19, -55, 2, 10);
            rect(9, -45, 2, 10);
            rect(29, -45, 2, 10);
            rect(19, -35, 2, 10);
            rect(9, -25, 2, 10);
            rect(29, -25, 2, 10);
            rect(0, -55, 40, 2);
            popMatrix();
        },
        portal: function(x, y){
            pushMatrix();
            translate(x, y);
            scale(StandardBlockSize / 40);
            fill(71, 156, 217, 150);
            rect(10, -65, 100, 90);
            fill(176, 164, 135);
            rect(5, -70, 30, 100, 5);
            rect(5, -70, 110, 40, 5);
            rect(85, -70, 30, 100, 5);
            fill(212, 198, 163);
            rect(5, -70, 110, 30, 5);
            fill(47, 128, 153);
            quad(10, 0, 20, 10, 30, 0, 20, -10);
            quad(90, 0, 100, 10, 110, 0, 100, -10);
            popMatrix();
        }
    },
    garden: {
        ground3: (function(){
            fill(87, 184, 57);
            rect(0, 0, 40, 45);
            fill(118, 214, 86);
            rect(0, 0, 40, 40);
            return get(0,0,40,45);
        }) (),
        ground1: (function(){
            fill(87, 184, 57);
            rect(0, 0, 40, 45);
            fill(118, 214, 86);
            rect(0, 0, 40, 40);
            fill(106, 201, 74);
            triangle(10, 20, 15, 20, 12.5, 5);
            triangle(17, 30, 23, 30, 20, 15);
            triangle(20, 15, 25, 15, 22.5, 0);
            triangle(30, 35, 35, 35, 32.5, 25);
            return get(0,0,40,45);
        }) (),
        ground2: (function(){
            fill(176, 164, 135);
            rect(0, 0, 40, 45);
            fill(194, 181, 149);
            rect(0, 0, 40, 40);
            fill(212, 198, 163);
            rect(2, 2, 36, 36);
            return get(0,0,40,45);
        })(),
        water: (function(){
            fill(121, 142, 181);
            rect(0, 0, 40, 45);
            fill(141, 168, 214);
            rect(0, 0, 40, 40);
            fill(250, 250, 255);
            quad(15, 15, 25, 20, 15, 25, 5, 20);
            quad(35, 25, 30, 28, 25, 25, 30, 22.5);
            return get(0,0,40,45);
        }) (),
        rockform: {
            tall: function(x, y){
                pushMatrix();
                translate(x, y);
                scale(StandardBlockSize / 40);
                fill(150, 126, 102);
                rect(5, 0, 30, 30, 5);
                fill(201, 175, 149);
                rect(5, 0, 30, 25, 5);
                fill(150, 126, 102);
                quad(20, 20, 32, 15, 28, -30, 20, -25);
                fill(181, 151, 121);
                quad(20, 20, 8, 15, 12, -30, 20, -25);
                triangle(28, -30, 20, -25, 20, -40);
                fill(196, 160, 124);
                triangle(12, -30, 20, -25, 20, -40);
                popMatrix();
            },
            short: function(x, y){
                pushMatrix();
                translate(x, y);
                scale(StandardBlockSize / 40);
                fill(150, 126, 102);
                rect(5, 0, 30, 30, 5);
                fill(201, 175, 149);
                rect(5, 0, 30, 25, 5);
                fill(150, 126, 102);
                quad(20, 20, 32, 15, 28, -20, 20, -15);
                fill(181, 151, 121);
                quad(20, 20, 8, 15, 12, -20, 20, -15);
                triangle(28, -20, 20, -15, 20, -25);
                fill(196, 160, 124);
                triangle(12, -20, 20, -15, 20, -25);
                popMatrix();
            }
        },
        tree: {
            tall: function(x, y){
                pushMatrix();
                translate(x, y);
                scale(StandardBlockSize / 40);
                fill(179, 160, 138);
                beginShape();
                vertex(12, 0);
                vertex(28, 0);
                vertex(28, 25);
                bezierVertex(25, 30, 15, 30, 12, 25);
                endShape(CLOSE);
                fill(199, 95, 175);
                rect(2, -40, 36, 60, 3);
                fill(224, 146, 207);
                rect(2, -40, 36, 30, 3);
                popMatrix();
            },
            short: function(x, y){
                pushMatrix();
                translate(x, y);
                scale(StandardBlockSize / 40);
                fill(179, 160, 138);
                beginShape();
                vertex(12, 0);
                vertex(28, 0);
                vertex(28, 25);
                bezierVertex(25, 30, 15, 30, 12, 25);
                endShape(CLOSE);
                fill(199, 95, 175);
                rect(2, -20, 36, 40, 3);
                fill(224, 146, 207);
                rect(2, -20, 36, 30, 3);
                popMatrix();
            }
        },
        
        portal: function(x, y){
            pushMatrix();
            translate(x, y);
            scale(StandardBlockSize / 40);
            fill(201, 175, 149, 150);
            rect(10, -65, 100, 90);
            fill(176, 164, 135);
            rect(5, -70, 30, 100, 5);
            rect(5, -70, 110, 40, 5);
            rect(85, -70, 30, 100, 5);
            fill(212, 198, 163);
            rect(5, -70, 110, 30, 5);
            fill(150, 126, 102);
            quad(10, 0, 20, 10, 30, 0, 20, -10);
            quad(90, 0, 100, 10, 110, 0, 100, -10);
            popMatrix();
        }
    },
    bonus: {
        ground3: (function(){
            fill(5);
            rect(0, 0, 40, 45);
            fill(40);
            rect(0, 0, 40, 40);
            return get(0,0,40,45);
        }) (),
        ground1: (function(){
            fill(10);
            rect(0, 0, 40, 45);
            fill(70);
            rect(0, 0, 40, 40);
            return get(0,0,40,45);
        }) (),
        ground2: (function(){
            fill(10);
            rect(0, 0, 40, 45);
            fill(70);
            rect(0, 0, 40, 40);
            fill(86, 57, 150);
            rect(27, 28, 7, 7);
            rect(30, 21, 4, 4);
            rect(16, 33, 3, 3);
            rect(8, 8, 4, 4);
            return get(0,0,40,45);
        })(),
        water: (function(){
            
            fill(78, 41, 99);
            rect(0, 0, 40, 45);
            fill(86, 57, 150);
            rect(0, 0, 40, 40);
            fill(123, 77, 184);
            rect(5, 10, 15, 15);
            rect(8, 2, 5, 5);
            rect(23, 20, 10, 10);
            return get(0,0,40,45);
        }) (),
        rockform: {
            tall: function(x, y){
                pushMatrix();
                
                translate(x, y);
                scale(StandardBlockSize / 40);
            
                fill(10);
                rect(5, -20, 30, 50, 3);
                
                fill(70);
                rect(5, -20, 30, 30, 3);
                
                fill(86, 57, 150);
                rect(18, -20, 4, 10);
                rect(18, 0, 4, 30);
                strokeWeight(4);
                noFill();
                
                stroke(86, 57, 150);
                rect(15, -10, 10, 10);

                noStroke();
                
                popMatrix();
            },
            short: function(x, y){
                pushMatrix();
                
                translate(x, y);
                scale(StandardBlockSize / 40);
                
                fill(10);
                rect(5, -10, 30, 40, 3);
                
                fill(70);
                rect(5, -10, 30, 30, 3);
                
                fill(86, 57, 150);
                
                rect(18, -10, 4, 10);
                rect(18, 10, 4, 20);
                
                stroke(86, 57, 150);
                strokeWeight(4);
                noFill();
                
                rect(15, 0, 10, 10);
                
                noStroke();
                
                popMatrix();
            }
        },
        tree: {
            tall: function(x, y){
                pushMatrix();
                
                translate(x, y);
                scale(StandardBlockSize / 40);
                
                fill(64);
                
                rect(15, -10, 10, 40);
                ellipse(20, 30, 10, 7);
                ellipse(20, -10, 10, 7);
                
                fill(125, 74, 184, 100);
                ellipse(20, -20, 40, 40);
                
                fill(255, 255, 255, 100);
                ellipse(20, -20, 30, 30);
                
                fill(125, 74, 184, 150);
                quad(20, -30, 30, -20, 20, -10, 10, -20);
                
                fill(125, 74, 184);
                quad(20, -25, 25, -20, 20, -15, 15, -20);
                
                fill(255, 255, 255, 50);
                ellipse(20, -20, 35, 35);
                
                popMatrix();
            },
            short: function(x, y){
                pushMatrix();
                
                translate(x, y);
                scale(StandardBlockSize / 40);
                
                fill(64);
                
                rect(15, 5, 10, 25);
                ellipse(20, 30, 10, 7);
                ellipse(20, 5, 10, 7);
                
                fill(125, 74, 184, 100);
                ellipse(20, -5, 40, 40);
                
                fill(255, 255, 255, 100);
                ellipse(20, -5, 30, 30);
                
                fill(125, 74, 184, 150);
                quad(20, -15, 30, -5, 20, 5, 10, -5);
                
                fill(125, 74, 184);
                quad(20, -10, 25, -5, 20, 0, 15, -5);
                
                fill(255, 255, 255, 50);
                ellipse(20, -5, 35, 35);
                
                popMatrix();
            }
        },
        portal: function(x, y){
            pushMatrix();
            translate(x, y);
            scale(StandardBlockSize / 40);
            fill(86, 57, 150, 150);
            rect(10, -65, 20, 70);
            rect(30, -65, 20, 90);
            rect(50, -65, 20, 60);
            rect(70, -65, 20, 80);
            rect(90, -65, 20, 50);
            rect(95, -10, 10, 10);
            rect(17, 10, 6, 6);
            fill(10);
            rect(5, -70, 110, 40, 5);
            fill(70);
            rect(5, -70, 110, 30, 5);
            popMatrix();
        }
    },
    strange: {
        shack: function(x, y){
            pushMatrix();
            translate(x, y);
            scale(StandardBlockSize / 40);
            fill(181, 135, 114);
            rect(5, -5, 70, 75, 5);
            fill(0, 0, 0, 30);
            quad(5, -5, 5, 34, 40, 25, 40, -15);
            quad(75, -5, 75, 34, 40, 25, 40, -15);
            fill(201, 155, 87);
            rect(10, 60, 60, 5);
            fill(166, 129, 76);
            rect(10, 65, 60, 10);
            fill(56, 36, 18);
            rect(30, 30, 20, 30);
            fill(158, 106, 84);
            quad(0, -10, 0, 30, 40, 20, 40, -20);
            fill(117, 79, 64);
            quad(80, -10, 80, 30, 40, 20, 40, -20);
            fill(56, 36, 18);
            quad(20, 0, 25, -2, 25, 10, 20, 12);
            quad(10, -5, 15, -7, 15, 18, 10, 20);
            popMatrix();
            
        },
        barrel: function(x, y){
            pushMatrix();
            translate(x, y);
            scale(StandardBlockSize / 40);
            fill(105, 76, 44);
            rect(7, -5, 26, 35, 5);
            fill(148, 107, 64);
            rect(7, -5, 26, 15, 5);
            fill(180);
            rect(7, 14, 26, 4);
            rect(7, 21, 26, 4);
            popMatrix();
        },
        
    },
    storeexterior: {
        
        greenhouse: function(x, y){
            pushMatrix();
            translate(x, y);
            scale(StandardBlockSize / 40);
            fill(230);
            rect(2, -40, 196, 120, 5);
            fill(150);
            rect(2, 35, 196, 2);
            rect(2, 55, 196, 2);
            rect(2, 75, 196, 2);
            for(var f = 10; f < 200; f += 20){
                rect(f - 1, 30, 2, 50);
            }
            fill(0, 0, 0, 30);
            rect(2, 32, 196, 5);
            fill(90, 181, 119);
            rect(0, -52, 200, 84, 5);
            fill(109, 219, 144);
            rect(0, -57, 200, 84, 5);
            rect(85, 40, 30, 40);
            fill(220);
            arc(100, -40, 100, 100, radians(180), radians(360));
            rect(50, -40, 100, 50);
            fill(230);
            arc(100, 10, 100, 100, radians(180), radians(360));
            noFill();
            stroke(150);
            strokeWeight(2);
            arc(100, 10, 100, 100, radians(180), radians(360));
            arc(100, -6, 100, 100, radians(180), radians(360));
            arc(100, -23, 100, 100, radians(180), radians(360));
            arc(100, -40, 100, 100, radians(180), radians(360));
            line(100, -90, 100, -40);
            line(65, -75, 65, -25);
            line(135, -75, 135, -25);
            noStroke();
            popMatrix();
        },
        apothecary: function(x, y){
            pushMatrix();
            translate(x, y);
            scale(StandardBlockSize / 40);
            fill(189, 168, 116);
            rect(2, -40, 156, 120, 5);
            fill(0, 0, 0, 30);
            rect(2, 32, 156, 5);
            fill(219, 65, 142);
            rect(0, -52, 160, 84);
            fill(219, 83, 151);
            quad(0, -52, 10, -62, 10, 22, 0, 32);
            quad(160, -52, 150, -62, 150, 22, 160, 32);
            fill(224, 103, 163);
            rect(10, -62, 140, 84);
            fill(189, 168, 116);
            rect(100, -65, 40, 60, 5);
            fill(219, 65, 142);
            rect(98, -65, 44, 40);
            fill(224, 103, 163);
            rect(103, -70, 34, 40);
            fill(219, 83, 151);
            quad(98, -65, 103, -70, 103, -30, 98, -25);
            quad(142, -65, 137, -70, 137, -30, 142, -25);
            fill(155, 219, 222);
            ellipse(120, -16, 14, 14);
            fill(0, 0, 0, 30);
            rect(100, -25, 40, 5);
            fill(255, 0, 0);
            rect(-400, -1, 800, 2);
            rect(-1, -400, 2, 800);
            popMatrix();
        },
        mapstore: function(x, y){
            pushMatrix();
            translate(x, y);
            scale(StandardBlockSize / 40);
            fill(230, 218, 172);
            rect(2, -60, 156, 140, 5);
            fill(0, 0, 0, 30);
            rect(2, 12, 156, 5);
            fill(89, 179, 167);
            rect(0, -72, 160, 84, 5);
            fill(137, 217, 206);
            rect(0, -77, 160, 84, 5);
            fill(0, 0, 0, 30);
            rect(30, 20, 100, 30);
            fill(128);
            rect(40, 20, 6, 65);
            rect(114, 20, 6, 65);
            ellipse(43, 85, 6, 6);
            ellipse(117, 85, 6, 6);
            fill(80, 102, 145);
            rect(30, 20, 100, 20);
            for(var k = 0; k <= 3; k ++){
                fill(253);
                rect(37 + (k * 25), 20, 10, 20);
            }
            fill(255, 0, 0);
            //rect(-400, -1, 800, 2);
            //rect(-1, -400, 2, 800);
            popMatrix();
        },
        
    },
};
resetMatrix();
var playerG = function(x,y,motion, weapon, fist2, noFilled){
    var drawHands = function(){
        switch(weapon){
            case "Rusty Sword":{
                var theX = x + 30;
                var theY = y + 25 + sin(radians(frameCount)) * 2;
                var theRot = atan2((mouseY - cam.y) - (theY + player.y), (mouseX - cam.x) - (theX + player.x));
                rustysword(theX + cos(theRot) * 5, theY + sin(theRot) * 5, theRot + 90, 0.8);
                fill(245, 208, 152);
                stroke(245 * 0.8, 208 * 0.8, 152 * 0.8);
                strokeWeight(3);
                ellipse(theX, theY,10,10);
                noStroke();
                strokeWeight(1);
            }break;
            case "Steel Sword":{
                var theX = x + 30;
                var theY = y + 25 + sin(radians(frameCount)) * 2;
                var theRot = atan2((mouseY - cam.y) - (theY + player.y), (mouseX - cam.x) - (theX + player.x));
                steelsword(theX + cos(theRot) * 5, theY + sin(theRot) * 5, theRot + 90, 0.8);
                fill(245, 208, 152);
                stroke(245 * 0.8, 208 * 0.8, 152 * 0.8);
                strokeWeight(3);
                ellipse(theX, theY,10,10);
                noStroke();
                strokeWeight(1);
            }break;
            case "Rusty Spear":{
                var theX = x + 30;
                var theY = y + 25 + sin(radians(frameCount)) * 2;
                var theRot = atan2((mouseY - cam.y) - (theY + player.y), (mouseX - cam.x) - (theX + player.x));
                rustyspear(theX + cos(theRot) * 5, theY + sin(theRot) * 5, theRot + 90, 0.8);
                fill(245, 208, 152);
                stroke(245 * 0.8, 208 * 0.8, 152 * 0.8);
                strokeWeight(3);
                ellipse(theX, theY,10,10);
                noStroke();
                strokeWeight(1);
            }break;
            case "Steel Spear":{
                var theX = x + 30;
                var theY = y + 25 + sin(radians(frameCount)) * 2;
                var theRot = atan2((mouseY - cam.y) - (theY + player.y), (mouseX - cam.x) - (theX + player.x));
                steelspear(theX + cos(theRot) * 5, theY + sin(theRot) * 5, theRot + 90, 0.8);
                fill(245, 208, 152);
                stroke(245 * 0.8, 208 * 0.8, 152 * 0.8);
                strokeWeight(3);
                ellipse(theX, theY,10,10);
                noStroke();
                strokeWeight(1);
            }break;
            case "Punch":{
                var theX = x + 30;
                var theY = y + 25 + sin(radians(frameCount)) * 2;
                fill(245, 208, 152);
                stroke(245 * 0.8, 208 * 0.8, 152 * 0.8);
                strokeWeight(3);
                ellipse(theX, theY,10,10);
                noStroke();
                strokeWeight(1);
            }break;
        }
        if(!fist2){
            fill(245, 208, 152);
            stroke(245 * 0.8, 208 * 0.8, 152 * 0.8);
            strokeWeight(3);
            ellipse(x-5,y+25-sin(radians(frameCount))*2,10,10);
            noStroke();
            strokeWeight(1);
        }
    };
    switch(motion){
        case "left":
            {
            if(noFilled){
                noFill();
                stroke(255, 233, 171);
            }
            else{
                fill(255, 233, 171);
            }
            rect(x+2.5,y,20,20);
            if(noFilled){
                stroke(255, 0, 0);
            }
            else{
                fill(255, 0, 0);
            }
            rect(x+2.5,y+22,20,20);
            if(noFilled){
                stroke(0);
            }
            else{
                fill(0);
            }
            rect(x+2.5,y+37,20,10);
            ellipse(x+14,y+10,5,5);
            ellipse(x+6,y+9,5,5);
            pushMatrix();
            translate(x+3,y+42);
            rotate(45+sin(radians(frameCount)*15)*1);
            rect(0,0,10,15);
            popMatrix();
            pushMatrix();
            translate(x+23,y+42);
            rotate(-45-sin(radians(frameCount)*15)*1);
            scale(-1,1);
            rect(0,0,10,15);
            popMatrix();
            drawHands();}   
        break;
        case "right":
            
            pushMatrix();
            
            translate(5,0);
            
            {
            if(noFilled){
                noFill();
                stroke(255, 233, 171);
            }
            else{
                fill(255, 233, 171);
            }
            rect(x+2.5,y,20,20);
            if(noFilled){
                stroke(255, 0, 0);
            }
            else{
                fill(255, 0, 0);
            }
            rect(x+2.5,y+22,20,20);
            if(noFilled){
                stroke(0);
            }
            else{
                fill(0);
            }
            rect(x+2.5,y+37,20,10);
            ellipse(x+18,y+9,5,5);
            ellipse(x+10,y+10,5,5);
            pushMatrix();
            
            translate(x+3,y+42);
            
            rotate(45+sin(radians(frameCount)*15)*1);
            
            rect(0,0,10,15);
            
            popMatrix();
            
            
            pushMatrix();
            
            translate(x+23,y+42);
            
            rotate(-45-sin(radians(frameCount)*15)*1);
            
            scale(-1,1);
            
            rect(0,0,10,15);
            
            popMatrix();
            drawHands();}
            
            popMatrix();
            
        break;    
        case "up":
            
            pushMatrix();
            
            translate(2,0);
            
            { {if(noFilled){
                noFill();
                stroke(255, 233, 171);
            }
            else{
                fill(255, 233, 171);
            }
            rect(x+2.5,y,20,20);
            
            if(noFilled){
                stroke(0);
            }
            else{
                fill(0);
            }
            rect(x+3,y+37,20,5);
            pushMatrix();
            
            translate(x+3,y+37+sin(radians(frameCount)*15)*5);
            
            rect(0,0,9,15);
            
            popMatrix();
            
            
            pushMatrix();
            
            translate(x+23,y+37);
            
            scale(-1,1);
            
            rect(0,0,9,15-sin(radians(frameCount)*15)*5);
            
            popMatrix();
            if(noFilled){
                stroke(255, 0, 0);
            }
            else{
                fill(255, 0, 0);
            }
            rect(x+2.5,y+22,20,20);
            }}
            
            drawHands();
            popMatrix();
            
        break;
        case "down":
            pushMatrix();
            translate(2,0);
            {
            if(noFilled){
                noFill();
                stroke(255, 233, 171);
            }
            else{
                fill(255, 233, 171);
            }
            rect(x+2.5,y,20,20);
            if(noFilled){
                stroke(0);
            }
            else{
                fill(0);
            }
            rect(x+3,y+37,20,5);
            ellipse(x+17,y+10,5,5);
            ellipse(x+9,y+10,5,5);
            pushMatrix();
            
            translate(x+3,y+37+sin(radians(frameCount)*15)*5);
            
            rect(0,0,9,15);
            
            popMatrix();
            
            
            pushMatrix();
            
            translate(x+23,y+37);
            
            scale(-1,1);
            
            rect(0,0,9,15-sin(radians(frameCount)*15)*5);
            
            popMatrix();
            if(noFilled){
                stroke(255, 0, 0);
            }
            else{
                fill(255, 0, 0);
            }
            rect(x+2.5,y+22,20,20);
            drawHands();
            
            }
            popMatrix();
            
        break; 
        case "none":
            pushMatrix();
            translate(2,0);
            {
            if(noFilled){
                noFill();
                stroke(255, 233, 171);
            }
            else{
                fill(255, 233, 171);
            }
            rect(x+2.5,y,20,20);
            if(noFilled){
                stroke(255, 0, 0);
            }
            else{
                fill(255, 0, 0);
            }
            rect(x+2.5,y+22,20,20);
            if(noFilled){
                stroke(0);
            }
            else{
                fill(0, 0, 0);
            }
            rect(x+3,y+37,20,5);
            ellipse(x+17,y+10,5,5);
            ellipse(x+9,y+10,5,5);
            pushMatrix();
            translate(x+3,y+42);
            rect(0,0,9,15);
            popMatrix();
            pushMatrix();
            translate(x+23,y+42);
            scale(-1,1);
            rect(0,0,9,15);
            popMatrix();
            drawHands();
            
            }
            popMatrix();
            
        break; 
        
    }

};
//}Graphics
