var programCode = function(processingInstance) {
    with (processingInstance) {
      size(600, 600); 
      frameRate(60);
        //Hi
        var mouseIsPressed = false;
var mousePressed = function(){
    mouseIsPressed = true;
};
var mouseReleased = function(){
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
    stroke(0+sin(frameCount)*200, 255+sin(frameCount)*100, 255-sin(frameCount)*110);
    noFill();
    pushMatrix();
    rotate(sin(frameCount/2)*360);
    arc(0, 0, width/1.5, height/1.5, 0, 80);
    rotate(sin(frameCount/2)*360);
    arc(0, 0, width/2, height/2, 0, 80);
    rotate(sin(frameCount/2)*360);
    arc(0, 0, width/3, height/3, 0, 80);
    popMatrix();
    stroke(155, 0, 0);
    line(-width/10, height/15, width/10, height/15);
    stroke(255, 0, 0);
    line(-width/10, height/15, -width/10 + (t/(100) * width/5), height/15);
    pushMatrix();
    scale(abs(sin(frameCount)));
    rotate(cos(frameCount*10)*40);
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
                people.push(new Person(random(100, 1100) + map.x, random(100, 1100) + map.y, 55, 40, "Octo Virus"));
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
    (rect)(134 + sin(frameCount * 2) * 1.5, 0, 50, 30, 0, 20, 20, 20);
    (rect)(51 - sin(frameCount * 2) * 1.5, 0, 50, 30, 20, 0, 20, 20);
    translate(85, -110 + sin(frameCount * 2) * 2);
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
                (rect)(80 + sin(frameCount * 10) * 25, 0, 50, 30, 20, 0, 20, 20);
        (rect)(80 - sin(frameCount * 10) * 25, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(frameCount * 2) * 2);
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
        ellipse(0+sin(frameCount*5)*50, -40+asin(frameCount*600)*5, 40, 40);
        
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
                (rect)(80 + sin(frameCount * 10) * 25, 0, 50, 30, 20, 0, 20, 20);
        (rect)(80 - sin(frameCount * 10) * 25, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(frameCount * 2) * 2);
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
        ellipse(0+sin(frameCount*5)*50, -40+asin(frameCount*600)*5, 40, 40);
        
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
        (rect)(134 + sin(frameCount * 2) * 1.5, 0, 50, 30, 0, 20, 20, 20);
        (rect)(51 - sin(frameCount * 2) * 1.5, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(frameCount * 2) * 2);
        

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
        (rect)(134 + sin(frameCount * 2) * 1.5, 0, 50, 30, 0, 20, 20, 20);
        (rect)(51 - sin(frameCount * 2) * 1.5, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(frameCount * 2) * 2);
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
        (rect)(80 + sin(frameCount * 10) * 25, 0, 50, 30, 20, 0, 20, 20);
        (rect)(80 - sin(frameCount * 10) * 25, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(frameCount * 2) * 2);
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
        ellipse(0+sin(frameCount*10)*35, -25, 40, 40);
        
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
        (rect)(90 + sin(frameCount * 10) * 25, 0, 50, 30, 0, 20, 20, 20);
        (rect)(90 - sin(frameCount * 10) * 25, 0, 50, 30, 0, 20, 20, 20);
        translate(85, -110 + sin(frameCount * 2) * 2);
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
        ellipse(0+sin(frameCount*10)*35, -25, 40, 40);
      
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
        (rect)(134 + sin(frameCount * 2) * 1.5, 0, 50, 30, 0, 20, 20, 20);
        (rect)(51 - sin(frameCount * 2) * 1.5, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(frameCount * 2) * 2);
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
        (rect)(134 + sin(frameCount * 2.5) * 1.5, 0, 50, 30, 0, 20, 20, 20);
        (rect)(51 - sin(frameCount * 2.5) * 1.5, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(frameCount * 2.5) * 2);
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
        arc(55, -140, 50, 50, -90, 0);
        
        noStroke();
    popMatrix();
    }
    if(z === 2){
    pushMatrix();
    translate(x,y);
    scale(s);
    translate(-100, 100);
    fill(70, 161, 13);
        (rect)(100 + sin(frameCount * 2.5) * 1.5, 0, 50, 30, 20, 0, 20, 20);
        fill(80, 184, 11);
        (rect)(65 - sin(frameCount * 2.5) * 1.5, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(frameCount * 2.5) * 2);
        fill(65, 135, 19);
        ellipse(-3+sin(frameCount*-2)*60, -30+cos(frameCount*-2)*6, 35, 35);
        fill(70, 161, 13);
        (rect)(0, 0, 100, 150, 0, 0, 20, 20);
        fill(80, 166, 23);
        rect(0, -142, 140, 140, 20);
        translate(0,20);
        fill(65, 135, 19);
        ellipse(-3+sin(frameCount*2)*60, -30+cos(frameCount*2)*6, 35, 35);

        
        fill(30);
        ellipse(-49, -165, 30, 30);
        triangle(-20, -230, 20, -230, -30, -250);
        triangle(-10, -230, 10, -230, -5, -260);
        triangle(-20, -230, 20, -230, 30, -250);
        
        stroke(30);
        strokeWeight(4);
        noFill();
        
        ellipse(-47, -165, 40, 50);
        arc(-23, -140, 25, 50, -90, 0);
        
        noStroke();
    popMatrix();
    }
    if(z === 3){
    pushMatrix();
    translate(x,y);
    scale(s);
    translate(-100, 100);
    fill(70, 161, 13);
        (rect)(110 + sin(frameCount * 2.5) * 1.5, 0, 50, 30, 0, 20, 20, 20);
        fill(80, 184, 11);
        (rect)(70 - sin(frameCount * 2.5) * 1.5, 0, 50, 30, 0, 20, 20, 20);
        translate(85, -110 + sin(frameCount * 2.5) * 2);
        fill(65, 135, 19);
        ellipse(-3+sin(frameCount*2)*60, -30+cos(frameCount*2)*6, 35, 35);
        fill(70, 161, 13);
        (rect)(0, 0, 100, 150, 0, 0, 20, 20);
        fill(80, 166, 23);
        rect(0, -142, 140, 140, 20);
        translate(0,20);
        fill(65, 135, 19);
        ellipse(-3+sin(frameCount*-2)*60, -30+cos(frameCount*-2)*6, 35, 35);

        
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
        (rect)(134 + sin(frameCount * 2.5) * 1.5, 0, 50, 30, 0, 20, 20, 20);
        (rect)(51 - sin(frameCount * 2.5) * 1.5, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(frameCount * 2.5) * 2);
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
     
        arc(55, -140, 50, 50, -56, 0);
        
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
        arc(0,476,85,85,0,180);
        
        
        
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
        arc(0,476,85,85,0,180);
        
        
        
        popMatrix();
    };
    //why is spamite so op
    //pls nerf
    
    rectMode(CENTER);
    
    fill(40);
    (rect)(0-sin(frameCount*5)*30, 0, 50, 30, 20, 0, 20, 20);
    (rect)(0+sin(frameCount*5)*30, 0, 50, 30, 20, 0, 20, 20);
    
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
    ellipse(0+sin(frameCount*3)*10, -110, 35, 35);
    
    
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
   
    
    drawSpamiteShield(-15+sin(frameCount*3)*10,-190,0.6,0);
   
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
        arc(0,476,85,85,0,180);
        
        
        
        popMatrix();
    };
    //why is spamite so op
    //pls nerf
    
    rectMode(CENTER);
      
    drawSpamiteShield(-55-sin(frameCount*3)*10,-190,0.6,0);
    
    noStroke();
    fill(40);
    (rect)(0-sin(frameCount*5)*30, 0, 50, 30, 20, 0, 20, 20);
    (rect)(0+sin(frameCount*5)*30, 0, 50, 30, 20, 0, 20, 20);
    
   
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
        drawSpamiteSword(0+sin(frameCount*3)*3,-125+sin(frameCount*3)*10,0.35,160);
    
    popMatrix();
    
    fill(40);
    ellipse(0+sin(frameCount*3)*10, -110, 35, 35);
    
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
        arc(0,476,85,85,0,180);
        
        
        
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
        (rect)(134 + sin(frameCount * 4) * 1.5, 0, 50, 30, 0, 20, 20, 20);
        (rect)(51 - sin(frameCount * 4) * 1.5, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(frameCount * 4) * 3);
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
        arc(0, -230, 140, 70, 180, 360);
        arc(-10, -231, 120, 40, -1, 180);
        arc(60, -231, 20, 10, -1, 180);
        
        noStroke();
    
    
    popMatrix();
    }
    if(z === 2){
    pushMatrix();
    translate(x,y);
    scale(s);
    translate(-100, 100);
    fill(10);
           (rect)(80 + sin(frameCount * 10) * 25, 0, 50, 30, 20, 0, 20, 20);
        (rect)(80 - sin(frameCount * 10) * 25, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(frameCount * 4) * 3);
        fill(64);
        (rect)(0, 0, 100, 150, 0, 0, 20, 20);
        
        fill(230);
        arc(-50, -10, 70, 100, -90,90);
        
        fill(224, 184, 90);
        rect(0, -142, 140, 140, 20);
        translate(0,30);
        fill(40);
        ellipse(7+sin(frameCount*5)*10, -30, 35, 35);
        
        fill(30);
        ellipse(-45, -165, 30, 30);
        pushMatrix();
        translate(50-75+sin(frameCount*5)*10,25-55);
        rotate(0+sin(frameCount*2)*365);
        fill(255, 255, 0);//pinapul
        ellipse(0,0,72,111);
        fill(123, 255, 0);
        triangle(20,-37,10,-52,41,-76);
        triangle(2,-86,-13,-33,27,-45);
        triangle(-33,-74,-20,-40,0,-47);
        popMatrix();
        fill(64);
        arc(5, -230, 170, 70, 180, 360);
        arc(-30, -232, 100, 40, -1, 180);
        arc(31, -231, 20, 11, -1, 180);
        arc(65, -231, 50, 140, -1, 80);
        arc(67, -232, 50, 140, 80, 180);
        
        noStroke();

    
    popMatrix();
    }
    if(z === 3){
    pushMatrix();
    translate(x,y);
    scale(s); 
    translate(-100, 100);
    pushMatrix();
        translate(175-75+sin(frameCount*5)*10,-60-55);
        rotate(0+sin(frameCount*2)*365);
        fill(255, 255, 0);//pinapul
        ellipse(0,0,72,111);
        fill(123, 255, 0);
        triangle(20,-37,10,-52,41,-76);
        triangle(2,-86,-13,-33,27,-45);
        triangle(-33,-74,-20,-40,0,-47);
        popMatrix();
    fill(10);
        (rect)(90 + sin(frameCount * 10) * 25, 0, 50, 30, 0, 20, 20, 20);
        (rect)(90 - sin(frameCount * 10) * 25, 0, 50, 30, 0, 20, 20, 20);
        translate(85, -110 + sin(frameCount * 4) * 3);
        fill(64);
        (rect)(0, 0, 100, 150, 0, 0, 20, 20);
        
        fill(230);
        arc(50, -10, 70, 100, 90,270);
        
        fill(224, 184, 90);
        rect(0, -142, 140, 140, 20);
        translate(0,30);
        fill(40);
        ellipse(7+sin(frameCount*5)*10, -30, 35, 35);
        
        fill(30);
        ellipse(45, -165, 30, 30);
       
        fill(64);
        pushMatrix();
        scale(-1,1);
        arc(5, -230, 170, 70, 180, 360);
        arc(-30, -232, 100, 40, -1, 180);
        arc(31, -231, 20, 11, -1, 180);
        arc(65, -231, 50, 140, -1, 80);
        arc(67, -232, 50, 140, 80, 180);
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
        (rect)(134 + sin(frameCount * 4) * 1.5, 0, 50, 30, 0, 20, 20, 20);
        (rect)(51 - sin(frameCount * 4) * 1.5, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(frameCount * 4) * 3);
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
        arc(0, -230, 140, 70, 0, 360);

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
    (rect)(134 + sin(frameCount * 2) * 1.5, 0, 50, 30, 0, 20, 20, 20);
    
    fill(222, 56, 56);
    (rect)(51 - sin(frameCount * 2) * 1.5, 0, 50, 30, 20, 0, 20, 20);
    
    pushMatrix();
    
    translate(85, -110 + sin(frameCount * 2) * 2);
    
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
    ellipse(-60-sin(frameCount*10)*15, -10, 35, 35);
    ellipse(60+sin(frameCount*10)*15, -50, 35, 35);
    
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
       (rect)(100 + sin(frameCount * 10.0) * 1.5, 0+ cos(frameCount * 13.0) * 4.0, 50, 30, 20, 0, 20, 20);
        fill(255, 0, 0);
        (rect)(65 - sin(frameCount * 10.0) * 1.5, 0- cos(frameCount * 13.0) * 4.0, 50, 30, 20, 0, 20, 20);
    
    pushMatrix();
    
    translate(85, -110 + sin(frameCount * 30) * 2);
    
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
    ellipse(0+sin(frameCount*20)*40, -40+cos(frameCount*20)*30, 35, 35);
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
       (rect)(100 + sin(frameCount * 10.0) * 1.5, 0+ cos(frameCount * 13.0) * 4.0, 50, 30, 0, 20, 20, 20);
        fill(255, 0, 0);
        (rect)(65 - sin(frameCount * 10.0) * 1.5, 0- cos(frameCount * 13.0) * 4.0, 50, 30, 0, 20, 20, 20);
    
    pushMatrix();
    
    translate(85, -110 + sin(frameCount * 30) * 2);
    
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
    ellipse(0-sin(frameCount*20)*40, -40+cos(frameCount*20)*30, 35, 35);
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
    (rect)(134 + sin(frameCount * 2) * 1.5, 0, 50, 30, 0, 20, 20, 20);
    
    fill(222, 56, 56);
    (rect)(51 - sin(frameCount * 2) * 1.5, 0, 50, 30, 20, 0, 20, 20);
    
    pushMatrix();
    
    translate(85, -110 + sin(frameCount * 2) * 2);
    
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
    ellipse(-60-sin(frameCount*10)*15, -10, 35, 35);
    ellipse(60+sin(frameCount*10)*15, -50, 35, 35);
    
    
    
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
        (rect)(134 + cos(frameCount * 5) * 1.5, 0, 50, 30, 0, 20, 20, 20);
        (rect)(51 - cos(frameCount * 5) * 1.5, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + cos(frameCount * 5) * 2);
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
        ellipse(-60, -20 - sin(frameCount * 2) * 15, 40, 40);
        ellipse(60, -20 + sin(frameCount * 2) * 15, 40, 40);
        
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
       (rect)(80 + sin(frameCount * 10) * 25, 0, 50, 30, 20, 0, 20, 20);
        (rect)(80 - sin(frameCount * 10) * 25, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + cos(frameCount * 5) * 2);
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
        ellipse(0 + sin(frameCount * 2) * 30, -20 + sin(frameCount * 2) * 15, 40, 40);
        
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
        (rect)(80 + sin(frameCount * 10) * 25, 0, 50, 30, 20, 0, 20, 20);
        (rect)(80 - sin(frameCount * 10) * 25, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + cos(frameCount * 5) * 2);
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
        ellipse(0 + sin(frameCount * 2) * 30, -20 + sin(frameCount * 2) * 15, 40, 40);
        
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
        (rect)(134 + cos(frameCount * 5) * 1.5, 0, 50, 30, 0, 20, 20, 20);
        (rect)(51 - cos(frameCount * 5) * 1.5, 0, 50, 30, 20, 0, 20, 20);
        
        translate(85, -110 + cos(frameCount * 5) * 2);
        translate(0,10);
        fill(230, 205, 143);
        ellipse(-60, -20 - sin(frameCount * 2) * 15, 40, 40);
        ellipse(60, -20 + sin(frameCount * 2) * 15, 40, 40);
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
        (rect)(134 + sin(frameCount * 2) * 1.5, 0, 50, 30, 0, 20, 20, 20);
        (rect)(51 - sin(frameCount * 2) * 1.5, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(frameCount * 2) * 2);
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
         (rect)(80 + sin(frameCount * 10) * 25, 0, 50, 30, 20, 0, 20, 20);
        (rect)(80 - sin(frameCount * 10) * 25, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(frameCount * 2) * 2);
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
        ellipse(0+sin(frameCount*2)*40, -20, 40, 40);

        
       
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
         (rect)(80 + sin(frameCount * 10) * 25, 0, 50, 30, 20, 0, 20, 20);
        (rect)(80 - sin(frameCount * 10) * 25, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(frameCount * 2) * 2);
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
        ellipse(0+sin(frameCount*2)*40, -20, 40, 40);

        
       
    popMatrix();
    }
    if(z === 4){
    pushMatrix();
    translate(x,y);
    scale(s);
    translate(-100, 100);
    fill(41, 41, 41);
        (rect)(134 + sin(frameCount * 2) * 1.5, 0, 50, 30, 0, 20, 20, 20);
        (rect)(51 - sin(frameCount * 2) * 1.5, 0, 50, 30, 20, 0, 20, 20);
        translate(85, -110 + sin(frameCount * 2) * 2);
        
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
                
                translate(83, -110 + sin(frameCount * 1.5) * 2);//THANK YOU RP24
                
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
                ellipse(-30, sin(frameCount) * 2, 35, 35);
                ellipse(80, -20 + sin(frameCount) * 2, 35, 35);
                
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
                
                (rect)(85+sin(frameCount*4)*20, 0, 50, 30, 20, 0, 20, 20);
                (rect)(85-sin(frameCount*4)*20, 0, 50, 30, 20, 0, 20, 20);
                
                pushMatrix();
                
                translate(83, -110 + sin(frameCount * 1.5) * 2);
                
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
                ellipse(-0+sin(frameCount*3) * 20, sin(frameCount) * 2, 35, 35);
                
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
                
                (rect)(85+sin(frameCount*4)*20, 0, 50, 30, 20, 0, 20, 20);
                (rect)(85-sin(frameCount*4)*20, 0, 50, 30, 20, 0, 20, 20);
                
                pushMatrix();
                
                translate(83, -110 + sin(frameCount * 1.5) * 2);
                
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
                ellipse(-0+sin(frameCount*3) * 20, sin(frameCount) * 2, 35, 35);
                
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
                
                translate(83, -110 + sin(frameCount * 1.5) * 2);//THANK YOU RP24
                
                fill(247, 201, 108);
                
                ellipse(-82, sin(frameCount) * 2, 35, 35);
                ellipse(80, -20 + sin(frameCount) * 2, 35, 35);
                
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
        arc(1,0,10,10,-90,90);
        fill(224, 206, 90);
        arc(-1,0,10,10,90,270);
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
        arc(14,35,16,10,-180,-90);
        stroke(184, 184, 184);
        arc(-14,35,16,10,-90,0);
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
        arc(-8,35,10,10,-90,0);
        stroke(91, 81, 153);
        arc(8,35,10,10,-180,-90);
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
        arc(0,37,40,20,-90,0);
        stroke(224, 206, 90);
        arc(0,37,40,20,-180,-90);
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
    (rect)(134 + sin(frameCount * 2) * 1.5, 0, 50, 30, 0, 20, 20, 20);
    (rect)(42 - sin(frameCount * 2) * 1.5, 0, 50, 30, 20, 0, 20, 20);
    
    pushMatrix();
    
    translate(87, -110 + sin(frameCount * 2) * 2);
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
        arc(-55,10+i,10,10,-90,90);
        arc(55,10+i,10,10,90,270);
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
    (rect)(90 + sin(frameCount * 10) * 30, 0, 50, 30, 20, 0, 20, 20);
    (rect)(90 - sin(frameCount * 10) * 30, 0, 50, 30, 20, 0, 20, 20);
    
    pushMatrix();
    
    translate(87, -110 + sin(frameCount * 2) * 2);
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
    (rect)(90 + sin(frameCount * 10) * 30, 0, 50, 30, 20, 0, 20, 20);
    (rect)(90 - sin(frameCount * 10) * 30, 0, 50, 30, 20, 0, 20, 20);
    
    pushMatrix();
    
    translate(87, -110 + sin(frameCount * 2) * 2);
    if(!sword){drawSword(-15-sin(frameCount*10)*40,-40,1.9,155);}
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
    ellipse(0+sin(frameCount*10)*40, -10, 35, 35);
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
    (rect)(134 + sin(frameCount * 2) * 1.5, 0, 50, 30, 0, 20, 20, 20);
    (rect)(42 - sin(frameCount * 2) * 1.5, 0, 50, 30, 20, 0, 20, 20);
    
    
    pushMatrix();
    
    translate(87, -110 + sin(frameCount * 2) * 2);
    
  
    
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
    arc(0,-183,60,30,0,180);
    noStroke();
    
    fill(242, 206, 128);
    rect(0, -252, 140, 140, 20);
    ellipse(-55, -110, 35, 35);
    ellipse(55, -110, 35, 35);
    fill(209, 178, 111);
    arc(0,-183,60,30,0,180);
    
 
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
    (rect)(-5-sin(frameCount*3)*26, 0, 50, 30, 20, 0, 20, 20);
    (rect)(-5+sin(frameCount*3)*26, 0, 50, 30, 20, 0, 20, 20);
        
        
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
    ellipse(10+sin(frameCount*5)*15, -110, 35, 35);
    
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
    (rect)(-5-sin(frameCount*3)*26, 0, 50, 30, 20, 0, 20, 20);
    (rect)(-5+sin(frameCount*3)*26, 0, 50, 30, 20, 0, 20, 20);
        
        
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
    ellipse(10+sin(frameCount*5)*15, -110, 35, 35);
    
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
    arc(0,-183,60,30,0,180);
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
    (rect)(0-sin(frameCount*6)*27, 0, 50, 30, 20, 0, 20, 20);
    (rect)(0+sin(frameCount*6)*27, 0, 50, 30, 20, 0, 20, 20);
    
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
    arc(-50,-183,65,35,0,90);
    
    fill(184, 148, 77);
    arc(-50,-183,55,25,0,90);
    
    fill(214, 175, 92);
    rect(0, -252, 140, 140, 20);
    ellipse(5+sin(frameCount*4)*10, -110, 35, 35);
    
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
    (rect)(0-sin(frameCount*6)*27, 0, 50, 30, 20, 0, 20, 20);
    (rect)(0+sin(frameCount*6)*27, 0, 50, 30, 20, 0, 20, 20);
    
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
    arc(-50,-183,65,35,0,90);
    
    fill(184, 148, 77);
    arc(-50,-183,55,25,0,90);
    
    fill(214, 175, 92);
    rect(0, -252, 140, 140, 20);
    ellipse(5+sin(frameCount*4)*10, -110, 35, 35);
    
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
    (rect)(-5+sin(frameCount*8)*27, 0, 50, 30, 20, 0, 20, 20);
    (rect)(-5-sin(frameCount*8)*27, 0, 50, 30, 20, 0, 20, 20);
    
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
    (rect)(-5+sin(frameCount*8)*27, 0, 50, 30, 20, 0, 20, 20);
    (rect)(-5-sin(frameCount*8)*27, 0, 50, 30, 20, 0, 20, 20);
    
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
    translate(x + 5, y); scale(z);
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
    translate(x + 5, y); scale(z);
    translate(-100, 100);
    noStroke();
    
    blue_katana(150, -180, 1, -120);
    
    fill(0, 79, 207);
    (rect)(+40 - sin(frameCount * 10) * 25, -30, 50, 30, 20, 0, 20, 20);
    (rect)(+40 + sin(frameCount * 10) * 25, -30, 50, 30, 20, 0, 20, 20);
    
    fill(140, 144, 255);
    (rect)(20, -200, 100, 150, 0, 0, 20, 20);
    
    fill(83, 120, 242);
    quad(18, -125, 18, -60, 70, -150, 70, -190);
    quad(70, -150, 120, -60, 120, -125, 70, -190);
    

    
    fill(0, 79, 207);
    rect(0, -337, 140, 140, 20);

    ellipse(70 + sin(frameCount * 15) * 25, -140, 35, 35);
    
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
    (rect)(+40 - sin(frameCount * 10) * 25, -30, 50, 30, 20, 0, 20, 20);
    (rect)(+40 + sin(frameCount * 10) * 25, -30, 50, 30, 20, 0, 20, 20);
    
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

    ellipse(70 + sin(frameCount * 15) * 25, -140, 35, 35);
    
    fill(32);
    rect(0, -285, 60, 30);
    
    fill(209, 0, 0);
    rect(5, -270, 30, 10);
    
    popMatrix();
    }
    if(s === 4){
    pushMatrix(); 
    rectMode(CORNER);
    translate(x + 5, y); scale(z);
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
//}Hacked users
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
    arc(-1, 0, 25, 25, 0, 120);
    arc(-1, 0, 25, 25, 180, 300);
    stroke(255, 0, 0);
    arc(1, 0, 25, 25, 0, 120);
    arc(1, 0, 25, 25, 180, 300);
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
    rotate(90);
    text("F", 0, 0);
    popMatrix();
    fill(255, 255, 0);
    text("O", -8, 0);
    pushMatrix();
    translate(10, 2);
    rotate(90);
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
    arc(0, 2, 25, 55, 0, 90);
    arc(0, 2, 25, 55, 90, 180);
    line(-12, 2, 12, 2);
    arc(0, 10, 6, 6, -180, 0);
    line(3, 10, 3, 13);
    fill(255, 255, 105);
    rect(0, 17, 6, 6);
    noFill();
    stroke(0, 255, 0);
    arc(1, 2, 25, 55, 0, 90);
    arc(1, 2, 25, 55, 90, 180);
    line(-12, 2, 12, 2);
    arc(1, 10, 6, 6, -180, 0);
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
    arc(0,-27,105,90,180,360);
    arc(0,-28,106,30,0,180);
    noFill();
    strokeWeight(5);
    stroke(255, 255, 255);
    arc(0,-27,94,80,210,255);
    arc(0,-27,94,80,187,195);
    
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
    arc(50,25,25,35,0,90);
    fill(255, 193, 87);
    arc(50,25,35,35,-90,0);
      fill(0, 115, 255);
    arc(25,23,40,35,90,180);
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
            arc(15, 25, 15, 15, -180, 0);
            arc(15, 25, 15, 7, 0, 180);
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
            arc(25, -54, 20, 13, 180, 360);
            arc(25, -54, 20, 5, 0, 180);
            arc(45, -54, 10, 7, 180, 360);
            arc(45, -54, 10, 2, 0, 180);
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
                arc(20, 10, 10, 3, 0, 180);
                fill(50, 153, 109);
                arc(20, 0, 35, 100, 180, 360);
                arc(20, 0, 35, 10, 0, 180);
                fill(57, 184, 129);
                arc(20, 0, 35, 100, 180, 270);
                arc(20, 0, 35, 10, 90, 180);
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
                arc(20, 20, 10, 3, 0, 180);
                fill(50, 153, 109);
                arc(20, 10, 35, 80, 180, 360);
                arc(20, 10, 35, 10, 0, 180);
                fill(57, 184, 129);
                arc(20, 10, 35, 80, 180, 270);
                arc(20, 10, 35, 10, 90, 180);
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
            arc(15, 25, 15, 15, -180, 0);
            arc(15, 25, 15, 7, 0, 180);
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
            arc(15, 25, 15, 15, -180, 0);
            arc(15, 25, 15, 7, 0, 180);
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
                arc(20, 15, 24, 10, 0, 180);
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
                arc(20, 15, 24, 10, 0, 180);
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
                arc(20, 5, 20, 100, 180, 360);
                arc(20, 5, 20, 15, 0, 180);
                fill(222, 184, 57);
                arc(20, 5, 20, 100, 180, 270);
                arc(20, 5, 20, 15, 90, 180);
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
                arc(20, 5, 20, 60, 180, 360);
                arc(20, 5, 20, 15, 0, 180);
                fill(222, 184, 57);
                arc(20, 5, 20, 60, 180, 270);
                arc(20, 5, 20, 15, 90, 180);
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
            arc(100, -40, 100, 100, 180, 360);
            rect(50, -40, 100, 50);
            fill(230);
            arc(100, 10, 100, 100, 180, 360);
            noFill();
            stroke(150);
            strokeWeight(2);
            arc(100, 10, 100, 100, 180, 360);
            arc(100, -6, 100, 100, 180, 360);
            arc(100, -23, 100, 100, 180, 360);
            arc(100, -40, 100, 100, 180, 360);
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
                var theY = y + 25 + sin(frameCount) * 2;
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
                var theY = y + 25 + sin(frameCount) * 2;
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
                var theY = y + 25 + sin(frameCount) * 2;
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
                var theY = y + 25 + sin(frameCount) * 2;
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
                var theY = y + 25 + sin(frameCount) * 2;
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
            ellipse(x-5,y+25-sin(frameCount)*2,10,10);
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
            rotate(45+sin(frameCount*15)*50);
            rect(0,0,10,15);
            popMatrix();
            pushMatrix();
            translate(x+23,y+42);
            rotate(-45-sin(frameCount*15)*50);
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
            
            rotate(45+sin(frameCount*15)*50);
            
            rect(0,0,10,15);
            
            popMatrix();
            
            
            pushMatrix();
            
            translate(x+23,y+42);
            
            rotate(-45-sin(frameCount*15)*50);
            
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
            
            translate(x+3,y+37+sin(frameCount*15)*5);
            
            rect(0,0,9,15);
            
            popMatrix();
            
            
            pushMatrix();
            
            translate(x+23,y+37);
            
            scale(-1,1);
            
            rect(0,0,9,15-sin(frameCount*15)*5);
            
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
            
            translate(x+3,y+37+sin(frameCount*15)*5);
            
            rect(0,0,9,15);
            
            popMatrix();
            
            
            pushMatrix();
            
            translate(x+23,y+37);
            
            scale(-1,1);
            
            rect(0,0,9,15-sin(frameCount*15)*5);
            
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
//{
var attacks = [
    {name:"Ellipse",/*The name of the attack. Don't make it too long*/ type:"Graphics",/*The category of the attack. Remember to keep things at least vaguely related to the category (something like Bomb.explode definitely wouldn't be syntax), and try to have the effect be something like this:
    Graphics: Brute-force attacks, don't have a bunch of side effects it has.
    Animation: Attacks that effect everything.
    OOP: Attacks that damage with a twist. Combination attacks are good too.
    Transformation: Attacks that affect targets without damage.
    Syntax: Attacks that boost/weaken rather than outright killing.
    Math/miscellaneous: ???
    Hacker: Extremely powerful abilities that should be pretty unique and are KA-related (vote up, spin-off, etc)
    */ damage:"10 damage"/*Explain the general damage it will do. If it heals, you could say healing instead.*/, description:"Summons an ellipse that damages viruses",//Pretty obvious  
        attack:function(person){
            bullets.push(new Bullet(person.x + person.width/2, person.y + person.height/2, atan2((mouseY - (cam.y)) - (person.y + person.height/2), (mouseX - (cam.x)) - (person.x + person.width/2)), "ellipse", person));//person refers to the person using the attack, normally the player. The first parameter in Bullet is the x. person.x + person.width/2 makes it centered in the person using it. The second is y. Use height/2 for it, too. The third parameter is the rotation of it. If you're confused, just copy-paste what's in here. The fourth parameter (the one in quotes) is the name of the attack. The fifth parameter should be person.
        },//What happens when you use the ability. Most abilities make bullets, but some could make several or just directly effect things
        reloadTime:50//This should be obvious.
    },//This explains how to use it.
    {name:"Point", type:"Graphics", damage:"15 damage", description:"Launches a point with high strokeWeight",  
        attack:function(person){
            bullets.push(new Bullet(person.x + person.width/2, person.y + person.height/2, atan2((mouseY - (cam.y)) - (person.y + person.height/2), (mouseX - (cam.x)) - (person.x + person.width/2)), "bullet", person));
        },
        reloadTime:50
    },
    {name:"No Power Available", type:"None", damage:"", description:"Sorry, you have no power active in this slot.",  
        attack:function(person){
            
        },
        reloadTime:0
    },
    {
        name:"Draw = function(){};", type:"Animation", damage:"6-21 damage", description:"Launches a pulse that damages everything on the screen",  
        attack:function(person){
            bullets.push(new Bullet(person.x + person.width/2, person.y + person.height/2, 0, "draw", person));
        },
        reloadTime:100
    },
    {name:"p3D", type:"Graphics", damage:"15-50 damage", description:"Unleash the power of 3D to crush enemies with or even trap enemies inside giant cubes!",  
        attack:function(person){
            bullets.push(new Bullet(person.x + person.width/2, person.y + person.height/2, atan2((mouseY - (cam.y)) - (person.y + person.height/2), (mouseX - (cam.x)) - (person.x + person.width/2)), "p3D", person));
        },
        reloadTime:100
    },
    {name:"this.attack", type:"OOP", damage:"10-50 damage", description:"A special attack that not only does damage but also summons ellipses on impact",  
        attack:function(person){
            bullets.push(new Bullet(person.x + person.width/2, person.y + person.height/2, atan2((mouseY - (cam.y)) - (person.y + person.height/2), (mouseX - (cam.x)) - (person.x + person.width/2)), "this.attack", person));
        },
        reloadTime:60
    },
    {name:"Rect", type:"Graphics", damage:"30 damage", description:"Summons a rectangle that damages viruses", 
        attack:function(person){
            bullets.push(new Bullet(person.x + person.width/2, person.y + person.height/2, atan2((mouseY - (cam.y)) - (person.y + person.height/2), (mouseX - (cam.x)) - (person.x + person.width/2)), "rect", person));
        },
        reloadTime:60
    },
    {name:"frameRate(30)", type:"Animation", damage:"50% slowing", description:"Slows down enemies and can nullify speed boosts they have", 
        attack:function(person){
            bullets.push(new Bullet(person.x + person.width/2, person.y + person.height/2, atan2((mouseY - (cam.y)) - (person.y + person.height/2), (mouseX - (cam.x)) - (person.x + person.width/2)), "frameRate(30)", person));
        },
        reloadTime:1000
    },
    {name:"{x,y,z}", type:"OOP", damage:"5 damage", description:"Shoves enemies away from you",  
        attack:function(person){
            bullets.push(new Bullet(person.x + person.width/2, person.y + person.height/2, atan2((mouseY - (cam.y)) - (person.y + person.height/2), (mouseX - (cam.x)) - (person.x + person.width/2)), "{x,y,z}", person));
        },
        reloadTime:40
    },
    {name:"noLoop()", type:"Animation", damage:"100% slowing", description:"Enemies lose traction and are unable to move", 
        attack:function(person){
            bullets.push(new Bullet(person.x + person.width/2, person.y + person.height/2, atan2((mouseY - (cam.y)) - (person.y + person.height/2), (mouseX - (cam.x)) - (person.x + person.width/2)), "noLoop()", person));
        },
        reloadTime:1000
    },
    {name:"this.cannon()", type:"OOP", damage:"Fires 10 bullets", description:"Makes a cannon that will fire at the viruses",  
        attack:function(person){
            bullets.push(new Bullet(person.x + person.width/2, person.y + person.height/2, 0, "this.cannon", person));
        },
        reloadTime:500
    },
    {name:"Raycast", type:"Graphics", damage:"80 damage", description:"Launches a deadly ray beam",  
        attack:function(person){
            bullets.push(new Bullet(person.x + person.width/2, person.y + person.height/2, atan2((mouseY - (cam.y)) - (person.y + person.height/2), (mouseX - (cam.x)) - (person.x + person.width/2)), "raycast", person));
        },
        reloadTime:50
    },
    {name:"new Ellipse()", type:"OOP", damage:"10-100 damage", description:"Using the power of OOP, generate a minefield of 10 ellipses around you", 
        attack:function(person){
            for(var b = 0; b < 10; b ++){
                bullets.push(new Bullet(person.x + person.width/2 + random(-100, 100), person.y + person.height/2 + random(-100, 100), 0, "ellipse", person));
            }
        },
        reloadTime:150
    },
    {name:"println()", type:"Syntax", damage:"70 damage", description:"Makes a poisonous mist around you that does damage over time and slows down enemies",  
        attack:function(person){
            bullets.push(new Bullet(person.x + person.width/2, person.y + person.height/2, 0, "println()", person));
        },
        reloadTime:400
    },
    {name:"while loop", type:"Syntax", damage:"Fires 100 bullets", description:"Makes a while loop that spews damaging letters for a bit.",  
        attack:function(person){
            bullets.push(new Bullet(person.x + person.width/2, person.y + person.height/2, 0, "while loop", person));
        },
        reloadTime:200
    },
    {name:"key", type:"Syntax", damage:"5 damage", description:"Shoots out a key that can unlock the defense of enemies, making them take double damage.",  
        attack:function(person){
            bullets.push(new Bullet(person.x + person.width/2, person.y + person.height/2, atan2((mouseY - (cam.y)) - (person.y + person.height/2), (mouseX - (cam.x)) - (person.x + person.width/2)), "key", person));
        },
        reloadTime:50
    },
    {name:"random()", type:"Miscellaneous", damage:"1-50 damage", description:"Fires a bullet that does random damage. It can do anything from hardly anything to a pretty hefty hit.",  
        attack:function(person){
            bullets.push(new Bullet(person.x + person.width/2, person.y + person.height/2, atan2((mouseY - (cam.y)) - (person.y + person.height/2), (mouseX - (cam.x)) - (person.x + person.width/2)), "random", person));
        },
        reloadTime:80
    },
    {name:"rotate()", type:"Transform", damage:"No Damage", description:"Launches a projectile that confuses enemies, making them in circles.",  
        attack:function(person){
            bullets.push(new Bullet(person.x + person.width/2, person.y + person.height/2, atan2((mouseY - (cam.y)) - (person.y + person.height/2), (mouseX - (cam.x)) - (person.x + person.width/2)), "rotate", person));
        },
        reloadTime:80
    },
    {name:"noFill()", type:"Syntax", damage:"No Damage", description:"Turns you invisible or (WIP) certain boxes intangible. Does not work against most hacked users. WARNING! If you attack while invisible, you will turn visible.",  
        attack:function(person){
            if(dist(mouseX - cam.x, mouseY - cam.y, person.x, person.y) <= 50){
                person.invisible = 800;
            }
            else{
                //bullets.push(new Bullet(person.x + person.width/2, person.y + person.height/2, atan2((mouseY - (cam.y)) - (person.y + person.height/2), (mouseX - (cam.x)) - (person.x + person.width/2)), "rotate", person));
            }
        },
        reloadTime:1000
    },
];//To add a code attack, go into this array. Make sure attacks[2] is the No Power thingy.
var weaponAttacks = [
    {name:"Punch", type:"Fist", damage:"3 damage", description:"Punch. Not much of an attack, is it? At least it's fast, because you've got two hands.",  
        attack:function(person){
            if(person.fist2){
                bullets.push(new Bullet(person.x + 27, person.y - 10 + sin(frameCount)*2, atan2((mouseY - (cam.y)) - (person.y - 10 + sin(frameCount)*2), (mouseX - (cam.x)) - (person.x + 27)), "fist", person));
            }
            else{
                bullets.push(new Bullet(person.x - 8, person.y - 10 + sin(frameCount)*2, atan2((mouseY - (cam.y)) - (person.y - 10 + sin(frameCount)*2), (mouseX - (cam.x)) - (person.x - 8)), "fist", person));
            }
        },
        reloadTime:8, durability:Infinity
    },
    {name:"Rusty Sword", type:"Sword", damage:"5 damage", description:"Stab with a stabby stick. A rather rusty, useless, stabby stick.",  
        attack:function(person){
            bullets.push(new Bullet(person.x + 27, person.y - 10 + sin(frameCount)*2, atan2((mouseY - (cam.y)) - (person.y - 10 + sin(frameCount)*2), (mouseX - (cam.x)) - (person.x + 27)), "rusty sword", person));
        },
        reloadTime:30, durability:30
    },
    {name:"Rusty Spear", type:"Spear", damage:"8 damage", description:"The new and improved stabby stick! Now a literal stick!",  
        attack:function(person){
            bullets.push(new Bullet(person.x + 27, person.y - 10 + sin(frameCount)*2, atan2((mouseY - (cam.y)) - (person.y - 10 + sin(frameCount)*2), (mouseX - (cam.x)) - (person.x + 27)), "rusty spear", person));
        },
        reloadTime:50, durability:35
    },
    {name:"Steel Sword", type:"Sword", damage:"15 damage", description:"A greatly improved stabby stick! With much more damage and durability!",  
        attack:function(person){
            bullets.push(new Bullet(person.x + 27, person.y - 10 + sin(frameCount)*2, atan2((mouseY - (cam.y)) - (person.y - 10 + sin(frameCount)*2), (mouseX - (cam.x)) - (person.x + 27)), "steel sword", person));
        },
        reloadTime:30, durability:100
    },
    {name:"Steel Spear", type:"Spear", damage:"25 damage", description:"A good, steel spear. Poke your enemies into oblivion.",  
        attack:function(person){
            bullets.push(new Bullet(person.x + 27, person.y - 10 + sin(frameCount)*2, atan2((mouseY - (cam.y)) - (person.y - 10 + sin(frameCount)*2), (mouseX - (cam.x)) - (person.x + 27)), "steel spear", person));
        },
        reloadTime:50, durability:120
    },
];//To add a weapon attack, go into this array. It works the same as code attacks, just that durability is the number of times you can use the weapon before losing it.
//}Possible attacks
//{
var data = {
    storage : /*this.storage  ||*/ {},//Some crash proofing
    globalSteps /*this.globalSteps  ||*/ : {},
    set_value : function(name, value){
        /**How to use;
        Usage: `data.set_value(name, value)`
        Description: creates or sets the variable(name) to the passed value
        
        Functions do work, but why would you want to save a function?
        
        returns the set value
        **/
        if(arguments.length<2){
            throw({message:"\"set_value()\" requires 2 parameters, not "+arguments.length+"!\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"set_value\" is used like this:\"set_value(name, value)"});
        }
        this.storage[name] = value;
        return this.get_value(name);
    },
    get_value : function(name){
        /**How to use:
        Usage: `data.get_value(name);`
        Description: returns the value of a set data set by `set_value`
        
        Support for: Objects, Integers, Booleens, Strings, and arrays 
        **/
        if(arguments.length===0){
            throw({message:"Name required for \"get_value(name)\""});
        }
        var SL = this.storage;
        if(SL[name] || SL[name] === 0){
            return SL[name];
        } else {
            return null;
        }
        
    },
    set_property : function(name, property, value){
        /**How to use:
        Usage: `data.set_property(name,property,value)`
        Description: sets the `property` of an object(`name`) to `value`
        
        Only works for objects and arrays
        
        But when used for arrays the property will be the array index
        **/
        if(arguments.length<3){
            throw({message:"\"set_property()\" requires 3 parameters, not "+arguments.length+"!\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"set_property\" is used like this:\"set_property(name, property, value)"});
        }
        var pP = this.storage;
        if(typeof pP === "object"){
            this.storage[name][property] = value;
            return this.storage[name][property];
        }
        return null;//If returned null then the proccess failed (no idea how that could happen but just in case)
    },
    splice_array : function(name, index, howmany){
        /**How to use:
        Usage: `data.splice_array(name, index, howmany)`
        Description: works the same way as Array.splice() `howmany` will be removed at the index of `index`
        **/
        if(arguments.length<3){
            throw({message:"\"splice_array()\" requires 3 parameters, not "+arguments.length+"!\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"splice_array\" is used like this:\"splice_array(name, index, howmany)"});
        }
        if(this.storage[name].constructor === Array){
            this.storage[name].splice(index,howmany);
            return true;
        } else {
            throw({message:"\"splice_array()\" can only be used on \"Arrays\""});
        }
        
    },
    slice_string : function(name, index, howmany){
        /**How to use:
        Usage: `data.slice_string(name, index, howmany)`
        Description: works the same way as String.slice() `howmany` will be removed at the index of `index`
        **/
        if(arguments.length<3){
            throw({message:"\"slice_string()\" requires 3 parameters, not "+arguments.length+"!\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"slice_string\" is used like this:\"slice_string(name, index, howmany)"});
        }
        if(typeof this.storage[name] === "string" || this.storage[name] instanceof String){
            this.storage[name] = this.storage[name].slice(0,-1);
            
            return true;
        } else {
            throw({message:"\"slice_string()\" can only be used on Strings"});
        }
    },
    dump : function(print){
        /**How to use:
        Usage: `data.dump(print)`
        Description: Prints out the currently registered plot points(if print is true) and returns the same as it would print
        **/
        var o = this.storage;
        var out = "";
        var val = "";
        for (var p in o) {
            if(typeof o[p] === "object"){
                val = "{";
                for (var k in o[p]) {
                    val += k + ": " + o[p][k] + ", ";
                }
                
                var newVal = val.substr(0,val.length-2);
                val = newVal;
                val+="}";
            }
            else {
                val = o[p];
            }
            out += p + ": " + val + "\n";
            
        }
        if(print === undefined){
            print = false;
        }
        if(typeof print !== 'boolean'){
            throw({message:"Boolean expected. Got: "+(typeof print)});
        }
        if(print){
            println(out);
        }
        return out;
        //data value dump
    },
    register_globalstep : function(func){
        /**How to use:
        Usage: `data.register_globalstep(function(){
            //Stuff to be repeated in here
        })`
        Description: Creates a function to be run repeatedly withing the draw function
        **/
        if(typeof func === "function"){
            this.globalSteps[Object.keys(this.globalSteps).length-1]=func;
        }
        // throw({});
    },
    run_globalsteps : function(){
        /**How to use:
        Usage: `data.run_globalsteps()`
        Description: To be put in the draw function. Runs the functions registered in data.register_globalstep
        **/
        
        var g = this.globalSteps;
        for (var k in g) {
            g[k]();
        }
        
    },
};
data.set_value("attacks unlocked", [
    attacks[0],
    attacks[1],
    attacks[3],
    attacks[4],
    attacks[5],
    attacks[6],
    attacks[7],
    attacks[8],
    attacks[9],
    attacks[10],
    attacks[11],
    attacks[12],
    attacks[13],
    attacks[14],
    attacks[15],
    attacks[16],
    attacks[17],
    attacks[18],
]);
data.set_value("weapon inventory", [
    {stats:weaponAttacks[1], number:1, hits:0},
    {stats:weaponAttacks[2], number:1, hits:0},
    {stats:weaponAttacks[3], number:1, hits:0},
    {stats:weaponAttacks[4], number:1, hits:0},
]);
data.set_value("hotkey powers", [
    {stats:attacks[0], reload:attacks[0].reloadTime},
    {stats:attacks[1], reload:attacks[1].reloadTime},
    {stats:attacks[2], reload:attacks[2].reloadTime},
    {stats:weaponAttacks[1], reload:weaponAttacks[1].reloadTime, inv:data.get_value("weapon inventory")[0]},
]);
data.set_value("hotkey selected", 0);
data.set_value("characters spawned", {
    np:false,
    
});
//}Data
//Cutscene functionality (Don't add in yet as it is not essential to the gameplay)
//{
//{
var Collectible = function(x, y, type, extra){
    this.x = x;
    this.y = y;
    this.type = type;
    this.extra = extra || {};
    this.time = 1500;
    switch(this.type){
        case "Energy Point":{
            if(this.extra.amount >= 10000){
                this.width = this.extra.amount/800;
                this.height = this.extra.amount/800;
                this.z = this.extra.amount/800;
            }
            else if(this.extra.amount >= 1000){
                this.width = this.extra.amount/100;
                this.height = this.extra.amount/100;
                this.z = this.extra.amount/100;
            }
            else{
                this.width = this.extra.amount/20;
                this.height = this.extra.amount/20;
                this.z = this.extra.amount/20;
            }
            this.width *= 2;
            this.height *= 2;
            this.z *= 2;
            this.x -= this.width/2;
            this.y -= this.height/2;
        }break;
    }
};
Collectible.prototype.draw = function() {
    this.time -= 1;
    if(this.time <= 0){
        this.dead = true;
    }
    switch(this.type){
        case "Energy Point":{
            colorMode(HSB);
    
            pushMatrix();
            
            translate(this.x + this.width/2, this.y + this.height/2);
            
            var hue = (this.z * 5.1) - 10;
            
            if(hue >= 255){
                
                hue = this.z * 5.1 - 265;
                
            }
            if(hue < 0){
                hue = 0;
            }
            noStroke();
            if(this.extra.amount >= 10000){
                fill(hue, 128, 255, 30);
                for(var g = 0; g < 8; g ++){
                    ellipse(0, 0, this.z * (g/5 + 1) * 1.1 + 4, this.z * (g/5 + 1) * 1.1 + 4);
                }
            }
            else if(this.extra.amount >= 1000){
                fill(hue, 128, 255, 30);
                for(var g = 0; g < 3; g ++){
                    ellipse(0, 0, this.z * (g/3 + 1) * 1.1 + 4, this.z * (g/3 + 1) * 1.1 + 4);
                }
            }
            else{
                fill(hue, 128, 255, 80);
                
                ellipse(0, 0, this.z * 1.1 + 4, this.z * 1.1 + 4);
            }
            fill(hue, 200, 255, 200);
            
            ellipse(0, 0, this.z, this.z);
            
            popMatrix();
            
            colorMode(RGB);
            //stroke(0, 0, 0);
            //noFill();
            //rect(this.x, this.y, this.width, this.height);
            if(player.isColliding(this)){
                player.ep += this.extra.amount;
                this.dead = true;
            }
            
        }break;
    }
};
//}Collectible
//{
var Bullet = function(x, y, angle, type, person, extra){
    this.x = x;
    this.y = y;
    this.time = 1000;
    this.angle = angle;
    this.type = type;
    this.person = person;
    this.extra = extra || {};
    switch(this.type){
        //{
        case "bullet":{
            this.speed = 15;
            this.width = 1;
            this.damage = 15;
            this.height = 1;
            this.knockback = 10;
        }break;
        case "cannonball":{
            this.speed = 12;
            this.width = 10;
            this.damage = 25;
            this.height = 10;
            this.knockback = 15;
        }break;
        case "loop letter":{
            this.speed = 8;
            this.width = 12;
            this.damage = 2;
            this.height = 12;
            this.knockback = 10;
            this.letter = ["i", "j", "k"][floor(random(0, 3))];
        }break;
        case "shuriken":{
            this.speed = 12;
            this.width = 15;
            this.damage = 10;
            this.height = 15;
            this.knockback = 3;
        }break;
        case "smokebomb":{
            this.a = 200;
            this.speed = 10;
            this.width = 20;
            this.damage = 5;
            this.height = 20;
            this.knockback = 0;
        }break;
        case "plasma ray":{
            this.speed = 15;
            this.width = 4;
            this.damage = 0.3;
            this.height = 4;
            this.knockback = 0;
            this.time = 300;
        }break;
        case "laser":{
            this.speed = 12;
            this.width = 1;
            this.damage = 15;
            this.height = 1;
            this.knockback = 5;
            this.enemiesHit = [];
        }break;
        case "pineapple":{
            this.speed = 8;
            this.width = 25;
            this.damage = 20;
            this.height = 25;
            this.knockback = 5;
            this.time = 50;
        }break;
        case "pineapple drone":{
            this.speed = 6;
            this.width = 25;
            this.damage = 50;
            this.height = 25;
            this.knockback = 15;
            this.time = 500;
            this.strafeTimer = 0;
        }break;
        case "mini pineapple":{
            this.speed = 6;
            this.width = 10;
            this.damage = 5;
            this.height = 10;
            this.knockback = 5;
            this.time = 50;
        }break;
        case "emerald spike":{
            this.speed = 0;
            this.width = 40;
            this.damage = 5;
            this.height = 30;
            this.knockback = 5;
            this.o = 10;
            this.s = 0;
            this.time = 0;
        }break;
        case "burger":{
            this.speed = 0;
            this.width = 60;
            this.damage = 25;
            this.height = 50;
            this.knockback = 0;
            this.o = 10;
            this.s = 50;
            this.time = 0;
        }break;
        case "bird":{
            this.speed = 5;
            this.width = 50;
            this.damage = 25;
            this.height = 50;
            this.knockback = 10;
            this.time = 0;
        }break;
        case "sand":{
            this.speed = 10;
            this.width = 15;
            this.damage = 40;
            this.height = 15;
            this.knockback = 10;
        }break;
        //}NPC Attacks
        //{
        case "rusty sword":{
            this.relativeX = 0;
            this.relativeY = 0;
            this.time = 0;
            this.speed = 5;
            this.width = 25;
            this.damage = 5;
            this.height = 25;
            this.knockback = 5;
        }break;
        case "rusty spear":{
            this.relativeX = 0;
            this.relativeY = 0;
            this.drawX = this.x;
            this.drawY = this.y;
            this.relativeDist = 0;
            this.time = 0;
            this.speed = 5;
            this.width = 19;
            this.damage = 8;
            this.height = 10;
            this.knockback = 2;
        }break;
        case "steel sword":{
            this.relativeX = 0;
            this.relativeY = 0;
            this.time = 0;
            this.speed = 5;
            this.width = 25;
            this.damage = 15;
            this.height = 25;
            this.knockback = 10;
        }break;
        case "steel spear":{
            this.relativeX = 0;
            this.relativeY = 0;
            this.drawX = this.x;
            this.drawY = this.y;
            this.relativeDist = 0;
            this.time = 0;
            this.speed = 5;
            this.width = 19;
            this.damage = 25;
            this.height = 10;
            this.knockback = 5;
        }break;
        case "fist":{
            this.relativeX = 0;
            this.relativeY = 0;
            this.time = 0;
            this.speed = 6;
            this.width = 11;
            this.damage = 3;
            this.height = 11;
            this.knockback = 8;
            this.is2 = !this.person.fist2;
        }break;
        //}Weapon attacks
        //{
        case "ellipse":{
            this.maxTime = 200;
            this.speed = 0;
            this.width = 10;
            this.damage = 10;
            this.height = 10;
            this.knockback = 25;
            this.s = 100;
            this.o = 0;
            this.time = 0;
        }break;
        case "frameRate(30)":{
            this.maxTime = 700;
            this.speed = 0;
            this.width = 10;
            this.damage = 10;
            this.height = 10;
            this.knockback = 25;
            this.s = 100;
            this.o = 0;
            this.T = 0;
        }break;
        case "rect":{
            this.maxTime = 250;
            this.speed = 0;
            this.width = 12;
            this.damage = 30;
            this.height = 12;
            this.knockback = 40;
            this.s = 100;
            this.o = 0;
            this.time = 0;
        }break;
        case "draw":{
            this.speed = 0;
            this.damage = 3;
            this.knockback = 3;
            this.s = 0;
            this.o = 255;
            this.time = 0;
        }break;
        case "p3D":{
            this.width = 40;//The width of the collision box.
            this.height = 40;//The height of the collision box.
            this.speed = 0;//Everything else you can use yourself. Just give yourself whatever variables you want for the attack
            this.damage = 0.5;
            this.knockback = 0.5;
            this.s = 0;
            this.o = 0;
            this.time = 0;
        }break;//This explains how to do it. Add a case statement with the name of the attack.
        case "this.attack":{
            this.speed = 0;
            this.width = 50;
            this.damage = 10;
            this.height = 20;
            this.knockback = 5;
            this.s = 0;
            this.o = 0;
            this.time = 0;
            this.speed = 30;
            this.alive = true;
        }break;
        case "{x,y,z}":{
            this.speed = 0;
            this.width = 50;
            this.damage = 5;
            this.height = 50;
            this.knockback = 30;
            this.s = 0;
            this.o = 0;
            this.T = 0;
            this.r = this.angle;
            this.enemiesHit = [];
        }break;
        case "noLoop()":{
            this.maxTime = 450;
            this.speed = 0;
            this.width = 10;
            this.damage = 10;
            this.height = 10;
            this.knockback = 25;
            this.s = 100;
            this.o = 0;
            this.T = 0;
        }break;
        case "this.cannon":{
            this.speed = 0;
            this.width = 10;
            this.damage = 0;
            this.height = 10;
            this.knockback = 0;
            this.s = 5;
            this.sSpeed = 0.05;
            this.time = 0;
            this.shots = 10;
            this.speed = 0;
            this.reload = 30;
            this.cVar = 0;
        }break;
        case "raycast":{
            this.maxTime = 200;
            this.speed = 0;
            this.width = 10;
            this.damage = 2;
            this.height = 10;
            this.knockback = 0;
            this.T = 0;
            this.s = 1;
            this.s2 = 0;
            this.s3 = 0;
            this.o = 0;
            this.time = 0;
            this.r = this.angle;
        }break;
        case "println()":{
            this.speed = 0;
            this.width = 25;
            this.damage = 0.2;
            this.height = 25;
            this.a = 200;
            this.theta = 0.7;//370 * damage = total damage
        }break;
        case "while loop":{
            this.speed = 0;
            this.width = 10;
            this.damage = 0;
            this.height = 10;
            this.knockback = 0;
            this.s = 5;
            this.sSpeed = 0.05;
            this.time = 0;
            this.shots = 100;
            this.speed = 0;
        }break;
        case "key":{
            this.width = 25;
            this.damage = 5;
            this.height = 25;
            this.knockback = 5;
            this.speed = 10;
        }break;
        case "random":{
            this.time = 200;
            this.width = 12;
            this.damage = random(1, 50);
            this.height = 12;
            this.knockback = random(1, 50);
            this.speed = random(2, 25);
        }break;
        case "rotate":{
            this.time = 200;
            this.width = 25;
            this.height = 25;
            this.speed = 5;
        }break;
        //}Code attacks
    }
};//Attacks
Bullet.prototype.draw = function() {
    switch(this.type){
        case "bullet":{
            //stroke(255);
            //strokeWeight(1);
            //noFill();
            //rect(this.x, this.y, this.width, this.height);Copy-past and uncomment this code to see the collision box
            fill(0);
            ellipse(this.x, this.y, 5, 5);//Draw your attack
            this.x += cos(this.angle) * this.speed;//This moves the attack
            this.y += sin(this.angle) * this.speed;
            this.time -= 1;
            if(this.time <= 0){
                this.dead = true;//Set this.dead to true to end the attack
            }
            if(!this.dead){
                for(var p = 0; p < platforms.length; p ++){
                    if(platforms[p].isColliding(this)){
                        this.dead = true;
                        break;
                    }
                }//Use this code to kill the attack when it hits a wall
            }
            if(!this.dead){
                for(var p = 0; p < people.length; p ++){
                    if(people[p].isColliding(this) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){//This code checks if the collision boxes of the attack and enemy are touching, if the enemy is not the one who made the attack, and if the enemy is not on the side of the one who made the attack. For attacks with more complex collisions (like draw), use your own collisions. Remeber that the center of the person is person.x + person.width/2 and person.y + person.height/2.
                        people[p].health -= this.damage/people[p].defenseMult;//Damage
                        people[p].xSpeed += cos(this.angle) * this.knockback;//Knockback
                        people[p].ySpeed += sin(this.angle) * this.knockback;//Knockback
                        this.dead = true;//Have this if the attack dies by hitting an enemy.
                        break;//Have this if the attack dies by hitting an enemy.
                    }
                }
            }
        }break;//This explains how to do it. Add a case statement with the name of the attack.
        //{
        case "sand":{
            /*
            stroke(255);
            strokeWeight(1);
            noFill();
            rect(this.x, this.y, this.width, this.height);*/
            
            fill(255, 210, 133);
            ellipse(this.x + this.width/2, this.y + this.height/2, 15, 15);//Draw your attack
            this.x += cos(this.angle) * this.speed;//This moves the attack
            this.y += sin(this.angle) * this.speed;
            this.time -= 1;
            if(this.time <= 0){
                this.dead = true;//Set this.dead to true to end the attack
            }
            if(!this.dead){
                for(var p = 0; p < platforms.length; p ++){
                    if(platforms[p].isColliding(this)){
                        this.dead = true;
                        break;
                    }
                }//Use this code to kill the attack when it hits a wall
            }
            if(!this.dead){
                for(var p = 0; p < people.length; p ++){
                    if(people[p].isColliding(this) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                        people[p].health -= this.damage/people[p].defenseMult;//Damage
                        people[p].xSpeed += cos(this.angle) * this.knockback;//Knockback
                        people[p].ySpeed += sin(this.angle) * this.knockback;//Knockback
                        this.dead = true;//Have this if the attack dies by hitting an enemy.
                        break;//Have this if the attack dies by hitting an enemy.
                    }
                }
            }
        }break;//This explains how to do it. Add a case statement with the name of the attack.
        case "cannonball":{
            //stroke(255);
            //strokeWeight(1);
            //noFill();
            //rect(this.x, this.y, this.width, this.height);Copy-past and uncomment this code to see the collision box
            fill(0);
            ellipse(this.x + this.width/2, this.y + this.height/2, 20, 20);//Draw your attack
            this.x += cos(this.angle) * this.speed;//This moves the attack
            this.y += sin(this.angle) * this.speed;
            this.time -= 1;
            if(this.time <= 0){
                this.dead = true;//Set this.dead to true to end the attack
            }
            if(!this.dead){
                for(var p = 0; p < platforms.length; p ++){
                    if(platforms[p].isColliding(this)){
                        this.dead = true;
                        break;
                    }
                }//Use this code to kill the attack when it hits a wall
            }
            if(!this.dead){
                for(var p = 0; p < people.length; p ++){
                    if(people[p].isColliding(this) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                        people[p].health -= this.damage/people[p].defenseMult;//Damage
                        people[p].xSpeed += cos(this.angle) * this.knockback;//Knockback
                        people[p].ySpeed += sin(this.angle) * this.knockback;//Knockback
                        this.dead = true;//Have this if the attack dies by hitting an enemy.
                        break;//Have this if the attack dies by hitting an enemy.
                    }
                }
            }
        }break;
        case "loop letter":{
            /*
            stroke(255);
            strokeWeight(1);
            noFill();
            rect(this.x, this.y, this.width, this.height);*/
            fill(50, 100, 255);
            textAlign(CENTER, CENTER);
            textSize(24);
            text(this.letter, this.x + this.width/2, this.y + this.height/2);//Draw your attack
            this.x += cos(this.angle) * this.speed;//This moves the attack
            this.y += sin(this.angle) * this.speed;
            this.time -= 1;
            if(this.time <= 0){
                this.dead = true;//Set this.dead to true to end the attack
            }
            if(!this.dead){
                for(var p = 0; p < platforms.length; p ++){
                    if(platforms[p].isColliding(this)){
                        this.dead = true;
                        break;
                    }
                }//Use this code to kill the attack when it hits a wall
            }
            if(!this.dead){
                for(var p = 0; p < people.length; p ++){
                    if(people[p].isColliding(this) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                        people[p].health -= this.damage/people[p].defenseMult;//Damage
                        people[p].xSpeed += cos(this.angle) * this.knockback;//Knockback
                        people[p].ySpeed += sin(this.angle) * this.knockback;//Knockback
                        this.dead = true;//Have this if the attack dies by hitting an enemy.
                        break;//Have this if the attack dies by hitting an enemy.
                    }
                }
            }
        }break;
        case "shuriken":{
            //stroke(255);
            //strokeWeight(1);
            //noFill();
            //rect(this.x, this.y, this.width, this.height);Copy-past and uncomment this code to see the collision box
            stroke(94, 89, 120);
            fill(201, 201, 201);
            ellipse(this.x + this.width/2,this.y + this.height/2,20,20);
            fill(255, 250, 255);
        
            ellipse(this.x + this.width/2,this.y + this.height/2,10,10);
            this.x += cos(this.angle) * this.speed;//This moves the attack
            this.y += sin(this.angle) * this.speed;
            this.time -= 1;
            if(this.time <= 0){
                this.dead = true;//Set this.dead to true to end the attack
            }
            if(!this.dead){
                for(var p = 0; p < platforms.length; p ++){
                    if(platforms[p].isColliding(this)){
                        this.dead = true;
                        break;
                    }
                }//Use this code to kill the attack when it hits a wall
            }
            if(!this.dead){
                for(var p = 0; p < people.length; p ++){
                    if(people[p].isColliding(this) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                        people[p].health -= this.damage/people[p].defenseMult;//Damage
                        people[p].xSpeed += cos(this.angle) * this.knockback;//Knockback
                        people[p].ySpeed += sin(this.angle) * this.knockback;//Knockback
                        this.dead = true;//Have this if the attack dies by hitting an enemy.
                        break;//Have this if the attack dies by hitting an enemy.
                    }
                }
            }
        }break;
        case "smokebomb":{
            //stroke(255);
            //strokeWeight(1);
            //noFill();
            //rect(this.x, this.y, this.width, this.height);Copy-past and uncomment this code to see the collision box
            if(!this.exploded){
                fill(255, 250, 255);
            
                ellipse(this.x + this.width/2,this.y + this.height/2,40,40);
                this.x += cos(this.angle) * this.speed;
                this.y += sin(this.angle) * this.speed;
                this.time -= 1;
                if(this.time <= 0){
                    this.exploded = true;
                }
                if(!this.dead){
                    for(var p = 0; p < platforms.length; p ++){
                        if(platforms[p].isColliding(this)){
                            this.exploded = true;
                            break;
                        }
                    }
                }
                if(!this.dead){
                    for(var p = 0; p < people.length; p ++){
                        if(people[p].isColliding(this) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                            people[p].health -= this.damage/people[p].defenseMult;//Damage
                            this.exploded = true;
                            this.person.invisible = true;
                        }
                    }
                }
                if(this.exploded){
                    this.x -= 20;
                    this.y -= 20;
                    this.width += 40;
                    this.height += 40;
                }
            }
            else{
                fill(255, this.a);
                for(var b = 0; b < 50; b ++){
                    var angle = random(0, 360);
                    var distance = random(0, this.width - 2);
                    var size = random(5, 20);
                    ellipse(this.x + cos(angle) * distance, this.y + sin(angle) * distance, size, size);
                }
                this.a -= 2;
                if(this.a <= 20){
                    this.dead = true;
                }
            }
        }break;
        case "plasma ray":{
            //stroke(255);
            //strokeWeight(1);
            //noFill();
            //rect(this.x, this.y, this.width, this.height);Copy-past and uncomment this code to see the collision box
            stroke(110, 255, 255);
            strokeWeight(15);
            line(this.x - this.width/2, this.y - this.height/2, this.person.x + this.person.width/2, this.person.y - 12);stroke(163, 255, 255);
            strokeWeight(10);
            line(this.x - this.width/2, this.y - this.height/2, this.person.x + this.person.width/2, this.person.y - 12);
             stroke(255, 255, 255);
            strokeWeight(3);
            line(this.x - this.width/2, this.y - this.height/2, this.person.x + this.person.width/2, this.person.y - 12);
            strokeWeight(1);
            //this.x += cos(this.angle) * this.speed;
            //this.y += sin(this.angle) * this.speed;
            this.time -= 1;
            if(this.time <= 0){
                this.dead = true;
            }
            if(!this.dead){
                var target = {x:999999999999, width:0, height:0, y:999999999};
                for(var p = 0; p < people.length; p ++){
                    if(people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil)) && dist(people[p].x + people[p].width/2, people[p].y + people[p].height/2, this.x + this.width/2, this.y + this.height/2) <= dist(target.x + target.width/2, target.y + target.height/2, this.x + this.width/2, this.y + this.height/2)){
                        target = people[p];
                    }
                    if(dist(people[p].x + people[p].headX, people[p].y + people[p].headY, this.x + this.width/2, this.y + this.height/2) <= 50 && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                        var rot = atan2(people[p].ySpeed, people[p].xSpeed);
                        people[p].x -= cos(rot) * people[p].speed;
                        people[p].y -= sin(rot) * people[p].speed;
                        people[p].health -= this.damage/people[p].defenseMult;
                    }
                }
                if(dist(target.x, target.y, this.x, this.y) <= 999){
                    this.angle = atan2((target.y + target.headY) - (this.y + this.height/2), (target.x + target.headX) - (this.x + this.width/2));
                    this.x += cos(this.angle) * this.speed;
                    this.y += sin(this.angle) * this.speed;
                    
                }
            }
        }break;
        case "laser":{
            //stroke(255);
            //strokeWeight(1);
            //noFill();
            //rect(this.x, this.y, this.width, this.height);Copy-past and uncomment this code to see the collision box
            pushMatrix();
            translate(this.x, this.y);
            rotate(this.angle);
            translate(-200, -200);
            strokeWeight(12);
            stroke(255, 71, 71,150);
            line(195,200,210,200);
            strokeWeight(8);
            stroke(255, 209, 209,150);
            line(195,200,210,200);
            strokeWeight(4);
            stroke(255, 255, 255);
            line(195,200,210,200);
            popMatrix();
            this.x += cos(this.angle) * this.speed;//This moves the attack
            this.y += sin(this.angle) * this.speed;
            this.time -= 1;
            if(this.time <= 0){
                this.dead = true;//Set this.dead to true to end the attack
            }
            if(!this.dead){
                for(var p = 0; p < platforms.length; p ++){
                    if(platforms[p].isColliding(this)){
                        this.dead = true;
                        break;
                    }
                }//Use this code to kill the attack when it hits a wall
            }
            if(!this.dead){
                for(var p = 0; p < people.length; p ++){
                    if(people[p].isColliding(this) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil)) && !this.enemiesHit.includes(people[p])){
                        this.enemiesHit.push(people[p]);
                        people[p].health -= this.damage/people[p].defenseMult;
                    }
                    if(people[p].isColliding(this) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                        this.speed *= 0.85;
                        people[p].xSpeed += random(-2, 2) + cos(this.angle) * this.knockback + random(-1, 1);//Knockback
                        people[p].ySpeed += random(-2, 2) + sin(this.angle) * this.knockback;//Knockback
                    }
                }
            }
            if(this.speed <= 5){
                this.dead = true;
            }
        }break;
        case "pineapple":{
            //stroke(255);
            //strokeWeight(1);
            //noFill();
            //rectMode(CORNER);
            //rect(this.x, this.y, this.width, this.height);
            pushMatrix();
            translate(this.x + this.width/2, this.y + this.height/2);
            rotate(this.angle);
            pinapulammo(0, 0, 0, 1);
            popMatrix();
            this.x += cos(this.angle) * this.speed;
            this.y += sin(this.angle) * this.speed;
            this.time -= 1;
            if(this.time <= 0){
                this.dead = true;
            }
            if(!this.dead){
                for(var p = 0; p < platforms.length; p ++){
                    if(platforms[p].isColliding(this)){
                        this.dead = true;
                        break;
                    }
                }
            }
            if(!this.dead){
                for(var p = 0; p < people.length; p ++){
                    if(people[p].isColliding(this) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                        people[p].health -= this.damage/people[p].defenseMult;
                        people[p].xSpeed += cos(this.angle) * this.knockback + random(-1, 1);
                        people[p].ySpeed += sin(this.angle) * this.knockback;
                        this.dead = true;
                        break;
                    }
                }
            }
            if(this.dead){
                for(var a = 0; a < 8; a ++){
                    bullets.push(new Bullet(this.x + this.width/2, this.y + this.height/2, a * 45, "mini pineapple", this.person));
                }
            }
        }break;
        case "pineapple drone":{
            //stroke(255);
            //strokeWeight(1);
            //noFill();
            //rectMode(CORNER);
            //rect(this.x, this.y, this.width, this.height);
            pushMatrix();
            translate(this.x + this.width/2, this.y + this.height/2);
            rotate(this.angle);
            pinapulammo(0, 0, 0, 1);
            popMatrix();
            this.strafeTimer+= this.speed;
            this.angle = atan2((this.person.y + this.person.height/2)+(sin(this.strafeTimer)*50)-(this.y + this.height/2), (this.person.x + this.person.width/2)+(cos(this.strafeTimer)*50)-(this.x + this.width/2));
            this.x += cos(this.angle) * this.speed;
            this.y += sin(this.angle) * this.speed;
            this.time -= 1;
            if(this.time <= 0){
                this.dead = true;//Set this.dead to true to end the attack
            }
            if(!this.dead){
                for(var p = 0; p < platforms.length; p ++){
                    if(platforms[p].isColliding(this)){
                        this.dead = true;
                        break;
                    }
                }//Use this code to kill the attack when it hits a wall
            }
            if(!this.dead){
                for(var p = 0; p < people.length; p ++){
                    if(people[p].isColliding(this) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                        people[p].health -= this.damage/people[p].defenseMult;
                        people[p].xSpeed += cos(this.angle) * this.knockback + random(-1, 1);
                        people[p].ySpeed += sin(this.angle) * this.knockback;
                        this.dead = true;
                        break;
                    }
                }
            }
            if(this.dead){
                for(var a = 0; a < 8; a ++){
                    bullets.push(new Bullet(this.x + this.width/2, this.y + this.height/2, a * 45, "mini pineapple", this.person));
                    bullets[bullets.length - 1].damage = 25;
                }
            }
        }break;
        case "mini pineapple":{
            //stroke(255);
            //strokeWeight(1);
            //noFill();
            //rectMode(CORNER);
            //rect(this.x, this.y, this.width, this.height);
            pushMatrix();
            translate(this.x + this.width/2, this.y + this.height/2);
            rotate(this.angle);
            pinapulammo(0, 0, 0, 0.4);
            popMatrix();
            this.x += cos(this.angle) * this.speed;//This moves the attack
            this.y += sin(this.angle) * this.speed;
            this.time -= 1;
            if(this.time <= 0){
                this.dead = true;//Set this.dead to true to end the attack
            }
            if(!this.dead){
                for(var p = 0; p < platforms.length; p ++){
                    if(platforms[p].isColliding(this)){
                        this.dead = true;
                        break;
                    }
                }//Use this code to kill the attack when it hits a wall
            }
            if(!this.dead){
                for(var p = 0; p < people.length; p ++){
                    if(people[p].isColliding(this) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                        people[p].health -= this.damage/people[p].defenseMult;//Damage
                        people[p].xSpeed += cos(this.angle) * this.knockback + random(-1, 1);//Knockback
                        people[p].ySpeed += sin(this.angle) * this.knockback;//Knockback
                        this.dead = true;
                        break;
                    }
                }
            }
        }break;
        case "emerald spike":{
            /*
            stroke(255);
            strokeWeight(1);
            noFill();
            rect(this.x, this.y, this.width, this.height);
            */
            if(this.s < 0.1){
                fill(0, this.o);
                ellipse(this.x + this.width/2, this.y + this.height/2, 20, 20);
                if(this.o <= 200){
                    this.o += 15;
                }
                else{
                    this.s = 0.1;
                }
            }
            else{
                emeraldspikes(this.x + 20,this.y + this.height,0.8, this.s);
                this.s += 0.03;
                this.y -= 1;
                this.height += 1;
                this.time += 1;
                if(this.time >= 50){
                    this.s -= 0.2;
                    if(this.s <= 0.15){
                        this.dead = true;
                    }
                }
            }
            if(!this.dead){
                for(var p = 0; p < platforms.length; p ++){
                    if(platforms[p].isColliding(this)){
                        this.dead = true;
                        break;
                    }
                }
            }
            if(!this.dead){
                for(var p = 0; p < people.length; p ++){
                    if(people[p].isColliding(this) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil)) && this.s >= 0.5){
                        people[p].health -= this.damage/people[p].defenseMult;
                        var rot = /*atan2(people[p].ySpeed, people[p].xSpeed)*/90;
                        people[p].xSpeed -= cos(rot) * this.knockback;
                        people[p].ySpeed -= sin(rot) * this.knockback;
                    }
                }
            }
        }break;
        case "burger":{
            /*
            stroke(255);
            strokeWeight(1);
            noFill();
            rect(this.x, this.y, this.width, this.height);
            */
            noStroke();
            if(this.o < 200){
                fill(0, this.o);
                ellipse(this.x + this.width/2, this.y + this.height/2, this.s, this.s);
                this.o += 5;
                this.s -= 1;
            }
            else{
                burger(this.x + this.width/2, this.y + this.height/1.5,0.5-sin(frameCount*30)*0.1,0.5+sin(frameCount*30)*0.05);
                this.time += 1;
                if(this.time >= 25){
                    this.dead = true;
                }
            }
            if(!this.dead && this.o >= 200){
                for(var p = 0; p < people.length; p ++){
                    if(people[p].isColliding(this) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                        people[p].health -= this.damage/people[p].defenseMult;
                        var rot = atan2(this.y + this.height/2 - (people[p].y + people[p].height), this.x + this.width/2 - (people[p].x + people[p].width));
                        this.knockback = dist(this.x + this.width/2, this.y + this.height/2, people[p].x + people[p].width, people[p].y + people[p].height);
                        people[p].xSpeed -= cos(rot) * this.knockback;
                        people[p].ySpeed -= sin(rot) * this.knockback;
                    }
                }
            }
        }break;
        case "bird":{
            /*
            stroke(255);
            strokeWeight(1);
            noFill();
            rect(this.x, this.y, this.width, this.height);
            */
            noStroke();
            bird(this.x, this.y,1,1);
            this.time += 1;
            if(this.time >= 150){
                this.dead = true;
            }
            this.rotSpeed = 2;
            var a1 = atan2((player.y + player.height/2) - (this.y + this.height/2), (player.x + player.width/2) - (this.x + this.width/2));
            var a2 = atan2(sin(this.angle), cos(this.angle));
            if (abs(a2 - a1) <= this.rotSpeed) {
                this.angle = a1;
            } else {
                var a = (a1 - a2);
                a += a < 0? 360 : a >= 360 ? -360 : 0;
                
                this.angle += a < 180? this.rotSpeed : -this.rotSpeed;
                this.angle += this.angle < 0? 360 : this.angle >= 360 ? -360 : 0;
            }
            this.x += cos(this.angle) * this.speed;
            this.y += sin(this.angle) * this.speed;
            if(!this.dead){
                for(var p = 0; p < people.length; p ++){
                    if(people[p].isColliding(this) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                        people[p].health -= this.damage/people[p].defenseMult;//Damage
                        people[p].xSpeed += cos(this.angle) * this.knockback;
                        people[p].ySpeed += sin(this.angle) * this.knockback;
                        this.dead = true;
                        break;
                    }
                }
            }
        }break;//It curves toward the player
        //}NPC attacks
        //{
        case "rusty sword":{
            //stroke(255);
            //strokeWeight(1);
            //noFill();
            //rect(this.x, this.y, this.width, this.height);
            this.person.usingWeapon = true;
            if(this.time < 10){
                this.relativeX += cos(this.angle) * this.speed;
                this.relativeY += sin(this.angle) * this.speed;
            }
            else if(this.time < 20){
                this.relativeX -= cos(this.angle) * this.speed;
                this.relativeY -= sin(this.angle) * this.speed;
            }
            else{
                this.dead = true;
            }
            this.x = this.person.x + 27 + this.relativeX - this.width/2;
            this.y = this.person.y - this.person.height/2 + this.relativeY - this.height/2;
            rustysword(this.x + this.width/3, this.y + this.height/1.5, this.angle + 90, 0.8);
            fill(245, 208, 152);
            stroke(245 * 0.8, 208 * 0.8, 152 * 0.8);
            strokeWeight(3);
            ellipse(this.x + this.width/3 - cos(this.angle) * 5, this.y + this.height/1.5 - sin(this.angle) * 5, 10, 10);
            //stroke(255);
            //strokeWeight(1);
            //noFill();
            //rect(this.x, this.y, this.width, this.height);
            this.time += 1;
            if(!this.dead && this.time <= 10){
                for(var p = 0; p < platforms.length; p ++){
                    if(platforms[p].isColliding(this)){
                        if(this.time < 10){
                            var difference = 10 - this.time;
                            this.time = 10 + difference;
                        }
                    }
                }
            }
            if(!this.dead && this.time <= 10){
                for(var p = 0; p < people.length; p ++){
                    if(people[p].isColliding(this) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                        people[p].health -= this.damage/people[p].defenseMult;
                        people[p].xSpeed += cos(this.angle) * this.knockback;
                        people[p].ySpeed += sin(this.angle) * this.knockback;
                        if(this.time < 10){
                            var difference = 10 - this.time;
                            this.time = 10 + difference;
                        }
                        break;
                    }
                }
            }
        }break;//Weapons are like code attacks. Look in here for (uncommented) code for weapons.
        case "rusty spear":{
            stroke(255);
            strokeWeight(1);
            noFill();
            rect(this.x, this.y, this.width, this.height);
            this.person.usingWeapon = true;
            if(this.time < 15){
                this.relativeX += cos(this.angle) * this.speed;
                this.relativeY += sin(this.angle) * this.speed;
                this.relativeDist += 0.1;
            }
            else if(this.time < 30){
                this.relativeX -= cos(this.angle) * this.speed;
                this.relativeY -= sin(this.angle) * this.speed;
            }
            else{
                this.dead = true;
            }
            this.drawX = this.person.x + 27 + this.relativeX - this.width/2;
            this.drawY = this.person.y - this.person.height/2 + this.relativeY - this.height/2;
            this.x = this.drawX + cos(this.angle) * 30;
            this.y = this.drawY + sin(this.angle) * 30;
            rustyspear(this.drawX + this.width/3, this.drawY + this.height/1.5, this.angle + 90, 0.8);
            fill(245, 208, 152);
            stroke(245 * 0.8, 208 * 0.8, 152 * 0.8);
            strokeWeight(3);
            ellipse(this.drawX + this.width/3 - cos(this.angle) * 5, this.drawY + this.height/1.5 - sin(this.angle) * 5, 10, 10);
            //stroke(255);
            //strokeWeight(1);
            //noFill();
            //rect(this.x, this.y, this.width, this.height);
            this.time += 1;
            if(!this.dead && this.time <= 15){
                for(var p = 0; p < platforms.length; p ++){
                    if(platforms[p].isColliding(this)){
                        if(this.time < 15){
                            var difference = 15 - this.time;
                            this.time = 15 + difference;
                        }
                    }
                }
            }
            if(!this.dead && this.time <= 15){
                for(var p = 0; p < people.length; p ++){
                    if(people[p].isColliding(this) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                        people[p].health -= this.damage/people[p].defenseMult;
                        people[p].xSpeed += cos(this.angle) * this.knockback;
                        people[p].ySpeed += sin(this.angle) * this.knockback;
                        if(this.time < 15){
                            var difference = 15 - this.time;
                            this.time = 15 + difference;
                        }
                        break;
                    }
                }
            }
        }break;
        case "steel sword":{
            //stroke(255);
            //strokeWeight(1);
            //noFill();
            //rect(this.x, this.y, this.width, this.height);
            this.person.usingWeapon = true;
            if(this.time < 10){
                this.relativeX += cos(this.angle) * this.speed;
                this.relativeY += sin(this.angle) * this.speed;
            }
            else if(this.time < 20){
                this.relativeX -= cos(this.angle) * this.speed;
                this.relativeY -= sin(this.angle) * this.speed;
            }
            else{
                this.dead = true;
            }
            this.x = this.person.x + 27 + this.relativeX - this.width/2;
            this.y = this.person.y - this.person.height/2 + this.relativeY - this.height/2;
            steelsword(this.x + this.width/3, this.y + this.height/1.5, this.angle + 90, 0.8);
            fill(245, 208, 152);
            stroke(245 * 0.8, 208 * 0.8, 152 * 0.8);
            strokeWeight(3);
            ellipse(this.x + this.width/3 - cos(this.angle) * 5, this.y + this.height/1.5 - sin(this.angle) * 5, 10, 10);
            //stroke(255);
            //strokeWeight(1);
            //noFill();
            //rect(this.x, this.y, this.width, this.height);
            this.time += 1;
            if(!this.dead && this.time <= 10){
                for(var p = 0; p < platforms.length; p ++){
                    if(platforms[p].isColliding(this)){
                        if(this.time < 10){
                            var difference = 10 - this.time;
                            this.time = 10 + difference;
                        }
                    }
                }
            }
            if(!this.dead && this.time <= 10){
                for(var p = 0; p < people.length; p ++){
                    if(people[p].isColliding(this) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                        people[p].health -= this.damage/people[p].defenseMult;
                        people[p].xSpeed += cos(this.angle) * this.knockback;
                        people[p].ySpeed += sin(this.angle) * this.knockback;
                        if(this.time < 10){
                            var difference = 10 - this.time;
                            this.time = 10 + difference;
                        }
                        break;
                    }
                }
            }
        }break;
        case "steel spear":{
            stroke(255);
            strokeWeight(1);
            noFill();
            rect(this.x, this.y, this.width, this.height);
            this.person.usingWeapon = true;
            if(this.time < 15){
                this.relativeX += cos(this.angle) * this.speed;
                this.relativeY += sin(this.angle) * this.speed;
                this.relativeDist += 0.1;
            }
            else if(this.time < 30){
                this.relativeX -= cos(this.angle) * this.speed;
                this.relativeY -= sin(this.angle) * this.speed;
            }
            else{
                this.dead = true;
            }
            this.drawX = this.person.x + 27 + this.relativeX - this.width/2;
            this.drawY = this.person.y - this.person.height/2 + this.relativeY - this.height/2;
            this.x = this.drawX + cos(this.angle) * 30;
            this.y = this.drawY + sin(this.angle) * 30;
            steelspear(this.drawX + this.width/3, this.drawY + this.height/1.5, this.angle + 90, 0.8);
            fill(245, 208, 152);
            stroke(245 * 0.8, 208 * 0.8, 152 * 0.8);
            strokeWeight(3);
            ellipse(this.drawX + this.width/3 - cos(this.angle) * 5, this.drawY + this.height/1.5 - sin(this.angle) * 5, 10, 10);
            //stroke(255);
            //strokeWeight(1);
            //noFill();
            //rect(this.x, this.y, this.width, this.height);
            this.time += 1;
            if(!this.dead && this.time <= 15){
                for(var p = 0; p < platforms.length; p ++){
                    if(platforms[p].isColliding(this)){
                        if(this.time < 15){
                            var difference = 15 - this.time;
                            this.time = 15 + difference;
                        }
                    }
                }
            }
            if(!this.dead && this.time <= 15){
                for(var p = 0; p < people.length; p ++){
                    if(people[p].isColliding(this) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                        people[p].health -= this.damage/people[p].defenseMult;
                        people[p].xSpeed += cos(this.angle) * this.knockback;
                        people[p].ySpeed += sin(this.angle) * this.knockback;
                        if(this.time < 15){
                            var difference = 15 - this.time;
                            this.time = 15 + difference;
                        }
                        break;
                    }
                }
            }
        }break;
        case "fist":{
            if(this.time <= 0){
                this.person.fist2 = !this.person.fist2;
            }
            this.person.usingWeapon = true;
            if(this.time < 5){
                this.relativeX += cos(this.angle) * this.speed;
                this.relativeY += sin(this.angle) * this.speed;
            }
            else if(this.time < 10){
                this.relativeX -= cos(this.angle) * this.speed;
                this.relativeY -= sin(this.angle) * this.speed;
            }
            else{
                this.dead = true;
            }
            if(this.is2){
                this.x = this.person.x + 27 + this.relativeX - this.width/2;
                this.y = this.person.y - this.person.height/2 + this.relativeY - this.height/2;
            }
            else{
                this.x = this.person.x - 3 + this.relativeX - this.width/2;
                this.y = this.person.y - this.person.height/2 + this.relativeY - this.height/2;
            }
            fill(245, 208, 152);
            stroke(245 * 0.8, 208 * 0.8, 152 * 0.8);
            strokeWeight(3);
            ellipse(this.x + this.width/2, this.y + this.height/2, 10, 10);
            //stroke(255);
            strokeWeight(1);
            //noFill();
            //rect(this.x, this.y, this.width, this.height);
            this.time += 1;
            if(!this.dead && this.time <= 10){
                for(var p = 0; p < platforms.length; p ++){
                    if(platforms[p].isColliding(this)){
                        if(this.time < 5){
                            var difference = 5 - this.time;
                            this.time = 5 + difference;
                        }
                    }
                }
            }
            if(!this.dead && this.time <= 10){
                for(var p = 0; p < people.length; p ++){
                    if(people[p].isColliding(this) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                        people[p].health -= this.damage/people[p].defenseMult;
                        people[p].xSpeed += cos(this.angle) * this.knockback;
                        people[p].ySpeed += sin(this.angle) * this.knockback;
                        if(this.time < 5){
                            var difference = 5 - this.time;
                            this.time = 5 + difference;
                        }
                        break;
                    }
                }
            }
        }break;
        //}Weapon attacks
        //{
        case "ellipse":{
            fill(196, 35, 35,this.o);
            ellipse(this.x - this.width/2,this.y - this.height/2,10+this.s,10+this.s);
            fill(222, 42, 42,this.o);
            ellipse(this.x - this.width/2,this.y - this.height/2,3+this.s,3+this.s);
            if(this.s >= 10){
                
                this.o+=15;
                this.s-=5;
                this.x+=random(-5,5);
                this.y+=random(-5,5);
            }
            else{
                this.hasGrown = true;
            }
            if(this.time > this.maxTime){
                this.o-=10;
                this.s-= 0.5;
                if(this.o <= 30 || this.s <= 1){
                    this.dead = true;
                }
            }
            this.time += 1;
            if(!this.dead){
                for(var p = 0; p < platforms.length; p ++){
                    if(platforms[p].isColliding(this)){
                        this.dead = true;
                        break;
                    }
                }
            }
            if(!this.dead){
                for(var p = 0; p < people.length; p ++){
                    if(people[p].isColliding(this) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                        people[p].health -= this.damage/people[p].defenseMult;
                        var rot = atan2(people[p].ySpeed, people[p].xSpeed);
                        people[p].x -= cos(rot) * this.knockback;
                        people[p].y -= sin(rot) * this.knockback;
                        this.time = this.maxTime;
                        if(this.hasGrown){
                            this.o-=10;
                            this.s-= 0.5;
                        }
                    }
                }
            }
        }break;
        case "rect":{
            rectMode(CENTER);
            pushMatrix();
            translate(this.width/2, this.height/2);
            fill(194, 117, 35,this.o);
            
            rect(this.x,this.y,10+this.s,10+this.s);
            
            fill(222, 156, 42,this.o);
            
            rect(this.x+random(-1,1),this.y+random(-1,1),3+this.s,3+this.s);
            
            
            pushMatrix();
            
            translate(this.x,this.y);
            
            rotate(this.time*5);
            
            translate(-this.x,-this.y);
            
            fill(194, 117, 35,this.o+sin(this.time*20)*255);
            
            rect(this.x+13,this.y+8,1+this.s,1+this.s);
            
            rect(this.x-13,this.y+2,1+this.s,1+this.s);
            
            rect(this.x-2,this.y+14,1+this.s,1+this.s);
            
            rect(this.x+5,this.y-13,1+this.s,1+this.s);
            
            popMatrix();
            popMatrix();
            rectMode(CORNER);
            /*
            stroke(255);
            strokeWeight(1);
            noFill();
            rect(this.x, this.y, this.width, this.height);
            noStroke();
            */
            if(this.s >= 10){
                
                this.o+=15;
                this.s-=5;
                this.x+=random(-5,5);
                this.y+=random(-5,5);
            }
            else{
                this.hasGrown = true;
            }
            if(this.time > this.maxTime){
                this.o-=10;
                this.s-= 0.5;
                if(this.o <= 30 || this.s <= 1){
                    this.dead = true;
                }
            }
            this.time += 1;
            if(!this.dead){
                for(var p = 0; p < platforms.length; p ++){
                    if(platforms[p].isColliding(this)){
                        this.dead = true;
                        break;
                    }
                }
            }
            if(!this.dead){
                for(var p = 0; p < people.length; p ++){
                    if(people[p].isColliding(this) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                        people[p].health -= this.damage/people[p].defenseMult;
                        var rot = atan2(people[p].ySpeed, people[p].xSpeed);
                        people[p].x -= cos(rot) * this.knockback;
                        people[p].y -= sin(rot) * this.knockback;
                        this.time = this.maxTime;
                        if(this.hasGrown){
                            this.o-=10/2;
                            this.s-= 0.5/2;
                        }
                    }
                }
            }
        }break;
        case "draw":{
            strokeWeight(60-this.time);
            stroke(195, 195, 235,this.o);
            noFill();
            ellipse(this.x,this.y,10+this.s,10+this.s);
            if(this.s <= 1000){
                this.o-=4;
                this.s+=10;
            }
            if(this.o <= 10){
                this.dead = true;
            }
            this.time += 1;
            if(!this.dead){
                for(var p = 0; p < people.length; p ++){
                    /*
                    if(people[p].evil){
                        stroke(0);
                        ellipse(this.x, this.y, dist(this.x, this.y, people[p].x + people[p].width/2, people[p].y + people[p].height/2) * 2, dist(this.x, this.y, people[p].x + people[p].width/2, people[p].y + people[p].height/2) * 2);
                    }
                    */
                    if((dist(this.x, this.y, people[p].x + people[p].width/2, people[p].y + people[p].height/2) * 2 > this.s - max(people[p].width, people[p].height)/2 && dist(this.x, this.y, people[p].x + people[p].width/2, people[p].y + people[p].height/2) * 2 < this.s + 20 + max(people[p].width, people[p].height)/2) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                        //fill(255, 0, 0);
                        //ellipse(people[p].x + people[p].width/2, people[p].y + people[p].height/2, 25, 25);
                        people[p].health -= this.damage/people[p].defenseMult;
                        var rot = atan2(this.y - (people[p].y + people[p].height/2), this.x - (people[p].x + people[p].width/2));
                        people[p].x -= cos(rot) * this.knockback;
                        people[p].y -= sin(rot) * this.knockback;
                    }
                }
            }
        }break;
        case "p3D":{
            this.time += 1;
            if(this.time > 1 && this.time < 80){
                
                this.o+=2;
                
                if(this.s < 75){
                    this.s+=4;
                }
                
            }
            this.x = player.x + player.width/2 + cos(this.angle) * 50 - this.width/2;
            this.y = player.y + player.height/2 + sin(this.angle) * 50 - this.height/2;
            pushMatrix();
            translate(this.x + this.width/2, this.y + this.height/2);
            noStroke();
            if(this.time > 40){
                
                rotate((this.time-40)*dist(this.time,0,360,0)/1000);
            }
            if(this.time > 60){
                this.width -= 0.4;
                this.height -= 0.4;
                this.o--;
                
                this.s--;
                
                if(this.s < 0){
                    
                    this.dead = true;
                }
            }
            
            fill(129, 201, 114,this.o);
            
            rectMode(CENTER);
            
            rect(0,0,this.s/2,this.s/2);
            
            rotate(45);
            
            rect(50+sin(this.time*5)*100,0,this.s/4,this.s/4);
            
            rect(-50+sin(this.time*5)*100,0,this.s/4,this.s/4);
            
            rect(0,50+sin(this.time*5)*100,this.s/4,this.s/4);
            
            rect(0,-50+sin(this.time*5)*100,this.s/4,this.s/4);
            
            rect(50+cos(this.time*5)*100,0,this.s/4,this.s/4);
            
            rect(-50+cos(this.time*5)*100,0,this.s/4,this.s/4);
            
            rect(0,50+cos(this.time*5)*100,this.s/4,this.s/4);
            
            rect(0,-50+cos(this.time*5)*100,this.s/4,this.s/4);
            
            rectMode(CORNER);
            
            
            popMatrix();
            if(!this.dead){
                for(var p = 0; p < people.length; p ++){
                    if(people[p].isColliding(this) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                        people[p].health -= this.damage/people[p].defenseMult;
                        var rot = atan2(this.y + this.height/2 - (people[p].y + people[p].height/2), this.x + this.width/2 - (people[p].x + people[p].width/2));
                        people[p].xSpeed += cos(rot) * this.knockback;
                        people[p].ySpeed += sin(rot) * this.knockback;
                    }
                }
            }
        }break;
        case "this.attack":{
            /*
            stroke(255);
            strokeWeight(1);
            noFill();
            rect(this.x, this.y, this.width, this.height);
            */
            this.time++;
            
            if(this.time <= 1){
                
                this.o = 0;
                this.s = 0;
            }
            else if(this.time > 1 && this.time <= 10){
                
                this.o+=15;
                this.s+=5;
            }
            if(this.time > 10 && this.speed >= 5){
            
                this.x+=cos(this.angle)*this.speed;
                this.y+=sin(this.angle)*this.speed;
                this.speed *= 0.9;
                
                
            }
            if(this.speed <= 5){
                this.alive = false;
                this.o-=5;
                this.s--;
            }
            if((this.o < 20 || this.s < 5) && this.time > 10){
                    
                this.dead = true;
                    
            }
            pushMatrix();
            translate(this.x - 10, this.y + 10);
            scale(this.s/20);
            translate(-this.x, -this.y);
            fill(73, 199, 174,this.o);
            
            textSize(10);
            
            text("this",this.x,this.y);
            
            fill(64, 64, 64,this.o);
            
            text("                 .attack",this.x-2,this.y);
            popMatrix();
            if(!this.dead){
                for(var p = 0; p < platforms.length; p ++){
                    if(platforms[p].isColliding(this)){
                        this.speed *= 0.5;
                        break;
                    }
                }//Use this code to kill the attack when it hits a wall
            }
            if(this.alive){
                for(var p = 0; p < people.length; p ++){
                    if(people[p].isColliding(this) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                        people[p].health -= this.damage/people[p].defenseMult;//Damage
                        people[p].xSpeed += cos(this.angle) * this.knockback + random(-1, 1);//Knockback
                        people[p].ySpeed += sin(this.angle) * this.knockback;//Knockback
                        this.hasHit = true;
                        //this.alive = false;
                        this.speed *= 0.8;
                    }
                }
            }
            if(this.hasHit && !this.alive){
                bullets.push(new Bullet(this.x + this.width/2 + random(-50, 50), this.y + this.height/2 + random(-50, 50), 0, "ellipse", this.person));
                bullets[bullets.length - 1].maxTime = 40;
            }
            
        }break;
        case "frameRate(30)":{
            
            this.T++;
            
            if(this.T <= 1){
                
                this.o = 0;
                this.s = 200;
            }
            else if(this.T > 1 && this.T < 50){
                
                this.o+=1;
                this.s-=dist(this.s,0,100,0)/10;
                
            }
            if(this.T >= this.maxTime){
                
                this.o-=2;
                this.s-=5;
                
                if(this.o < 0){
                    
                    this.dead = true;
                }
                
            }
            pushMatrix();
            
            rectMode(CENTER);
            
            translate(this.x,this.y);
            
            fill(133, 0, 145,this.o);
            
            ellipse(0,0,this.s,this.s);
            
            for(var a = 0; a < 360; a+=45){
                
                rotate(a);
                
                rect(35,0,10,2);
                
            }
            rotate(20+this.T*10);
            
            rect(15,0,30,2);
            
            rotate(-20+this.T*10);
            
            rotate((this.T/10));
            
            rect(15,0,30,2);
            
            rectMode(CORNER);
            
            fill(133, 0, 145,this.o-30);
            
            ellipse(0,0,this.s+sin(this.T*5)*25,this.s+sin(this.T*5)*25);
            
            ellipse(0,0,this.s+cos(this.T*5)*25,this.s+cos(this.T*5)*25);
            
            popMatrix();
            for(var p = 0; p < people.length; p ++){
                if(people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                    people[p].speedMult = 0.5;
                    people[p].speedMultChanged = true;
                    /*if(this.dead){
                        people[p].speedMult = 1;
                    }*/
                }
            }
            
            
        }break;
        case "{x,y,z}":{
            /*
            stroke(255);
            strokeWeight(1);
            noFill();
            rect(this.x, this.y, this.width, this.height);
            */
            this.T++;
            
            if(this.T <= 1){
                
                this.o = 100;
                this.s = 0;
            }
            else if(this.T > 1 && this.T < 20){
                
                this.o+=10;
    
                this.s+=1;
               
                
            }
            if(this.T > 5){
                
                this.x+=cos(this.r)*15;
                this.y+=sin(this.r)*15;
                
                if(this.T > 25){
                    
                    this.x-=cos(this.r)*30;
                    this.y-=sin(this.r)*30;
                    
                    if(this.T > 35){
                        
                        this.o-=30;
                        
                        this.s+=5;
                        
                        if(this.o < 0){
                            
                            this.dead = true;
                        }
                        
                    }
                    
                }
            }
            
            
            pushMatrix();
            
            translate(this.x + this.width/2,this.y + this.height/2);
            
            rotate(-this.r + 180);
            
            stroke(113, 150, 199,this.o);
            
            noFill();
            
            triangle(0,-this.s,-this.s,this.s,this.s,this.s);

            popMatrix();
            
            strokeWeight(5);
            
            stroke(113, 150, 199,this.o);
            
            line(this.x + this.width/2-cos(this.r)*25,this.y + this.height/2-sin(this.r)*25,this.person.x+this.person.width/2,this.person.y + this.person.height/2);       
            
            strokeWeight(random(0,5));
            
            stroke(random(0,143), random(50,255), 255,this.o-150);
            
            line(this.x + this.width/2-cos(this.r)*25,this.y + this.height/2-sin(this.r)*25,this.person.x+this.person.width/2,this.person.y + this.person.height/2);
            ellipse(this.x + this.width/2+random(-50,50),this.y + this.height/2+random(-50,50),10,10);
            
            ellipse(this.x + this.width/2+random(-50,50),this.y + this.height/2+random(-50,50),10,10);
            
            ellipse(this.x + this.width/2+random(-50,50),this.y + this.height/2+random(-50,50),10,10);
            
            ellipse(this.x + this.width/2+random(-50,50),this.y + this.height/2+random(-50,50),10,10);
           if(this.T < 25){
                for(var p = 0; p < platforms.length; p ++){
                    if(platforms[p].isColliding(this)){
                        this.T = 25;
                        break;
                    }
                }//Use this code to kill the attack when it hits a wall
            }
            if(!this.dead){
                for(var p = 0; p < people.length; p ++){
                    if(people[p].isColliding(this) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil)) && !this.enemiesHit.includes(people[p])){
                        this.enemiesHit.push(people[p]);
                        people[p].health -= this.damage/people[p].defenseMult;//Damage
                    }
                    if(people[p].isColliding(this) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                        this.speed *= 0.85;
                        people[p].xSpeed += random(-2, 2) + cos(this.angle) * this.knockback + random(-1, 1);//Knockback
                        people[p].ySpeed += random(-2, 2) + sin(this.angle) * this.knockback;//Knockback
                    }
                }
            }
            
        }break;
        case "noLoop()":{
            this.T ++;
            if(this.s < 40 && this.T < 100){
                this.s += 2;
            }
            if(this.T >= this.maxTime){
                this.s -= 2;
                if(this.s <= 0){
                    this.dead = true;
                }
            }
            pushMatrix();
            translate(this.x, this.y);
            rotate((this.T % 540)/1.5);
            translate(-this.x, -this.y);
            strokeWeight(this.s/16.66);//noLoop(); sign
            stroke(0, 0, 0);
            noFill();
            arc(this.x,this.y,this.s/1.5,this.s/1.5,0,270);
            noStroke();
            fill(0, 0, 0);
            triangle(this.x+this.s/4.8,this.y+this.s/-3.1,this.x+this.s/-13.0,this.y+this.s/-7.3,this.x+this.s/-13,this.y+this.s/-2.1);
            fill(255, 0, 0);
            quad(this.x+this.s/-2.3,this.y+this.s/-3.8,this.x+this.s/-1.8,this.y+this.s/-4.9,this.x+this.s/-4.5,this.y+this.s/7.2,this.x+this.s/-8.0,this.y+this.s/9.3);
            quad(this.x+this.s/-5.6,this.y+this.s/-4.6,this.x+this.s/-3.2,this.y+this.s/-4.9,this.x+this.s/-1.8,this.y+this.s/7.2,this.x+this.s/-2.2,this.y+this.s/9.3);
            
            fill(0, 255, 242,150);
            stroke(255, 255, 255);
            ellipse(this.x,this.y,this.s/0.7,this.s/0.7);
            
            noStroke();
            fill(255, 255, 255);
            triangle(this.x+this.s/-1.5,this.y+this.s/-4.6,this.x+this.s/-2.1,this.y+this.s/-9.5,this.x+this.s/-1.4,this.y+this.s/5.3);
            triangle(this.x+this.s/-1.7,this.y+this.s/2.8,this.x+this.s/-2.5,this.y+this.s/4.4,this.x+this.s/-1.4,this.y+this.s/8.1);
            triangle(this.x+this.s/-1.5,this.y+this.s/3.0,this.x+this.s/-2.8,this.y+this.s/2.6,this.x+this.s/-2.6,this.y+this.s/1.6);
            triangle(this.x+this.s/-5.2,this.y+this.s/1.4,this.x+this.s/-7.7,this.y+this.s/2.6,this.x+this.s/-2.6,this.y+this.s/1.7);
            triangle(this.x+this.s/-5.1,this.y+this.s/1.5,this.x+this.s/-19.1,this.y+this.s/2.0,this.x+this.s/4.7,this.y+this.s/1.4);
            triangle(this.x+this.s/2.2,this.y+this.s/1.8,this.x+this.s/4.6,this.y+this.s/2.0,this.x+this.s/7.8,this.y+this.s/1.4);
            triangle(this.x+this.s/2.6,this.y+this.s/1.6,this.x+this.s/2.0,this.y+this.s/3.1,this.x+this.s/1.5,this.y+this.s/3.8);
            triangle(this.x+this.s/1.4,this.y+this.s/19.3,this.x+this.s/1.7,this.y+this.s/8.5,this.x+this.s/1.7,this.y+this.s/2.3);
            triangle(this.x+this.s/1.4,this.y+this.s/8.0,this.x+this.s/2.0,this.y+this.s/-10.2,this.x+this.s/1.5,this.y+this.s/-6.0);
            triangle(this.x+this.s/1.4,this.y+this.s/8.0,this.x+this.s/2.0,this.y+this.s/-10.2,this.x+this.s/1.5,this.y+this.s/-6.0);
            triangle(this.x+this.s/1.6,this.y+this.s/-2.7,this.x+this.s/2.4,this.y+this.s/-4.9,this.x+this.s/1.5,this.y+this.s/-6.0);
            triangle(this.x+this.s/1.5,this.y+this.s/-3.0,this.x+this.s/2.6,this.y+this.s/-2.6,this.x+this.s/3.0,this.y+this.s/-1.6);
            triangle(this.x+this.s/5.7,this.y+this.s/-1.5,this.x+this.s/7.6,this.y+this.s/-1.9,this.x+this.s/2.1,this.y+this.s/-1.8);
            triangle(this.x+this.s/5.0,this.y+this.s/-1.5,this.x+this.s/48.1,this.y+this.s/-1.9,this.x+this.s/-5.5,this.y+this.s/-1.4);
            triangle(this.x+this.s/-2.0,this.y+this.s/-1.9,this.x+this.s/-5.3,this.y+this.s/-1.9,this.x+this.s/-9.3,this.y+this.s/-1.4);
            triangle(this.x+this.s/-2.3,this.y+this.s/-1.8,this.x+this.s/-2.6,this.y+this.s/-2.9,this.x+this.s/-1.7,this.y+this.s/-2.7);
            triangle(this.x+this.s/-1.5,this.y+this.s/-5.5,this.x+this.s/-1.9,this.y+this.s/-3.5,this.x+this.s/-1.7,this.y+this.s/-2.7);
            popMatrix();
            for(var p = 0; p < people.length; p ++){
                if(people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                    people[p].speedMult = 0;
                    people[p].speedMultChanged = true;
                    /*if(this.dead){
                        people[p].speedMult = 1;
                    }*/
                }
            }
        }break;
        case "this.cannon":{
            if(this.s > 1){
                this.s -= this.sSpeed;
                this.sSpeed += 0.01;
            }
            else{
                this.s = 1;
                if(this.reload <= -10){
                    this.cVar -= 10;
                    if(this.cVar <= 0){
                        this.cVar = 0;
                        this.reload = 15;
                        this.shots -= 1;
                        bullets.push(new Bullet(this.x, this.y, this.angle, "cannonball", this.person));
                    }
                }
                else if(this.reload <= 0){
                    this.cVar += 6;
                    if(this.cVar >= 30){
                        this.reload = -10;
                    }
                }
                else{
                    this.reload -= 1;
                    
                }
            }
            if(this.shots <= 0){
                this.dead = true;
            }
            cannon(this.x, this.y, this.angle + 90, this.s, this.cVar);
            if(!this.dead){
                var target = {x:99999, y:999999, width:0, height:0};
                for(var p = 0; p < people.length; p ++){
                    if(people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                        if(dist(people[p].x + people[p].width, people[p].y + people[p].height, this.x, this.y) <= dist(target.x + target.width/2, target.y + target.height/2, this.x, this.y)){
                            target = people[p];
                        }
                    }
                }
                this.angle = atan2((target.y + target.height/2) - this.y, (target.x + target.width/2) - this.x);
            }
        }break;
        case "raycast":{
            /*
            stroke(255);
            strokeWeight(1);
            noFill();
            rect(this.x, this.y, this.width, this.height);
            */
            this.T++;
            
            if(this.T < 1){
                
                this.o = 0;
                this.s = 1;
                this.s2 = 0;
                this.s3 = 0;
            }
            if(this.T > 1 && this.T < 10){
                
                this.o+=35;
                this.s2 += 30 * 2;
    
            }
            if(this.T > 15 && this.T < 30){
                
                this.s+=dist(this.s,0,15,0)/4;
            }
            if(this.T >= 60){
                
                this.o-=40;
                this.s-= 2;
                
                if(this.T >= 70){
                    
                    this.dead = true;
                    
                }
            }
            
            this.x = this.person.x + this.person.width/2;
            this.y = this.person.y + this.person.height/2;
            pushMatrix();
            
            translate(this.x,this.y);
            
            rotate(this.r);
            
            stroke(252, 176, 0,this.o);

            strokeWeight(this.s3);
            
            line(0,0,this.s2,0);
            
            fill(252, 176, 0,this.o);
            
            noStroke();
            
            arc(0,0,1500,900,-this.s,this.s);
            
            ellipse(random(0,500),random(-45,45),10,10);
            
            ellipse(random(0,500),random(-45,45),10,10);
            
            ellipse(random(0,500),random(-45,45),10,10);
            
            popMatrix();
            if(!this.dead){
                for(var p = 0; p < people.length; p ++){
                    var a1 = atan2(people[p].y - this.y, people[p].x - this.x);
                    var a2 = atan2(sin(this.r), cos(this.r));
                    if((abs(a2 - a1) <= 14 && dist(this.x, this.y, people[p].x, people[p].y) <= 800&&this.T>20&&this.T<60) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                        people[p].health -= this.damage/people[p].defenseMult;
                    }
                }
            }
            
        }break;
        case "println()":{
            /*
            stroke(255);
            strokeWeight(1);
            noFill();
            rectMode(CORNER);
            rect(this.x, this.y, this.width, this.height);
            */
            pushMatrix();
            translate(this.x + this.width/2, this.y + this.height/2);
            noStroke();
            rectMode(CENTER);
            fill(0, 255, 0, this.a);
            ellipse(0 + sin(frameCount*5)*10 * this.theta + this.theta, 0 + this.theta, this.width, this.height);
            ellipse(0 + this.theta, 0 + sin(frameCount*5)*10 * this.theta, this.width, this.height);
            ellipse(0 - sin(frameCount*5)*10 * this.theta, 0 - sin(frameCount*5)*10 * this.theta, this.width, this.height);
            
            if(this.a > 15)
            {
                this.a-= 0.5;
                this.theta += 0.02;
                this.x -= 0.5;
                this.y -= 0.5;
                this.width += 1;
                this.height += 1;
            }
            else{
                this.dead = true;
            }
            popMatrix();
            for(var p = 0; p < people.length; p ++){
                if(people[p].isColliding(this) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                    people[p].speedMult = 0.5;
                    people[p].speedMultChanged = true;
                    people[p].health -= this.damage/people[p].defenseMult;
                }
            }
        }break;
        case "while loop":{
            if(this.s > 1){
                this.s -= this.sSpeed;
                this.sSpeed += 0.02;
            }
            else{
                this.s = 1;
                bullets.push(new Bullet(this.x, this.y, this.angle + random(-15, 15), "loop letter", this.person));
                this.shots -= 1;
            }
            if(this.shots <= 0){
                this.dead = true;
            }
            loopTurret(this.x, this.y, this.s);
            if(!this.dead){
                var target = {x:99999, y:999999, width:0, height:0};
                for(var p = 0; p < people.length; p ++){
                    if(people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                        if(dist(people[p].x + people[p].width, people[p].y + people[p].height, this.x, this.y) <= dist(target.x + target.width/2, target.y + target.height/2, this.x, this.y)){
                            target = people[p];
                        }
                    }
                }
                this.angle = atan2((target.y + target.height/2) - this.y, (target.x + target.width/2) - this.x);
            }
        }break;
        case "key":{
            /*
            stroke(255);
            strokeWeight(1);
            noFill();
            rect(this.x, this.y, this.width, this.height);
            */
            this.x+=cos(this.angle)*this.speed;
            this.y+=sin(this.angle)*this.speed;
            this.speed *= 0.95;
            if(this.speed <= 0.2){
                this.dead = true;
            }
            keyGraphic(this.x + this.width/2, this.y + this.height/2, 1, this.angle);
            if(!this.dead){
                for(var p = 0; p < platforms.length; p ++){
                    if(platforms[p].isColliding(this)){
                        //Check for unlocking walls
                        this.dead = true;
                        break;
                    }
                }//Use this code to kill the attack when it hits a wall
            }
            if(!this.dead){
                for(var p = 0; p < people.length; p ++){
                    if(people[p].isColliding(this) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                        people[p].health -= this.damage/people[p].defenseMult;//Damage
                        people[p].xSpeed += cos(this.angle) * this.knockback;//Knockback
                        people[p].ySpeed += sin(this.angle) * this.knockback;//Knockback
                        people[p].defenseMult = 0.5;
                        people[p].defenseMultTime = 250;
                        this.dead = true;
                        break;
                    }
                }
            }
            
        }break;
        case "random":{
            /*
            stroke(255);
            strokeWeight(1);
            noFill();
            rect(this.x, this.y, this.width, this.height);
            */
            this.x+=cos(this.angle)*this.speed;
            this.y+=sin(this.angle)*this.speed;
            this.time -= 1;
            if(this.time <= 0){
                this.dead = true;
            }
            fill(this.damage * 5, this.knockback * 5, this.speed * 10);
            rbull(this.x + this.width/2, this.y + this.height/2.5, 1, this.angle + 90);
            if(!this.dead){
                for(var p = 0; p < platforms.length; p ++){
                    if(platforms[p].isColliding(this)){
                        this.dead = true;
                        break;
                    }
                }
            }
            if(!this.dead){
                for(var p = 0; p < people.length; p ++){
                    if(people[p].isColliding(this) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                        people[p].health -= this.damage/people[p].defenseMult;
                        people[p].xSpeed += cos(this.angle) * this.knockback;
                        people[p].ySpeed += sin(this.angle) * this.knockback;
                        this.dead = true;
                        break;
                    }
                }
            }
            
        }break;
        case "rotate":{
            /*
            stroke(255);
            strokeWeight(1);
            noFill();
            rect(this.x, this.y, this.width, this.height);
            */
            this.x+=cos(this.angle)*this.speed;
            this.y+=sin(this.angle)*this.speed;
            this.time -= 1;
            if(this.time <= 0){
                this.dead = true;
            }
            rotbull(this.x + this.width/2, this.y + this.height/2.5, 1, frameCount * 5);
            if(!this.dead){
                for(var p = 0; p < platforms.length; p ++){
                    if(platforms[p].isColliding(this)){
                        this.dead = true;
                        break;
                    }
                }
            }
            if(!this.dead){
                for(var p = 0; p < people.length; p ++){
                    if(people[p].isColliding(this) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
                        people[p].rotConfuse = 500;
                        this.dead = true;
                        break;
                    }
                }
            }
            
        }break;
        //}Code Attacks
    }
    noStroke();
    strokeWeight(1);
};//Attacks
//}Bullet
//{
var Person = function(x, y, width, height, person, extra){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.person = person;
    this.extra = extra || {};
    this.defenseMult = 1;
    this.defenseMultTime = 0;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.canJump = false;
    this.jumping = 0;
    this.wallJump = false;
    this.weight = 2;
    this.collides = false;
    this.drops = [];
    this.usingWeapon = false;
    this.fist2 = false;
    this.hitEffect = function(){};
    this.deadEffect = function(){};
    this.headX = 12;
    this.headY = -25;
    this.speedMult = 1;
    this.speedChangeTime = 0;
    this.rotConfuse = 0;
    switch(this.person){
        case "player":{
            this.width = 25;
            this.height = 25;
            this.invisible = 0;
            this.inkedTime = 0;
            this.ep = 0;
            this.player = true;
            this.weapon = {name:"Rifle", x:20, y:0, bulletType:"bullet", reload:0, reloadTime:40};
            this.speed = 2;
            this.jumpSpeed = 4;
            this.jumpTime = 3;
            this.health = 100;
            this.wallSpeed = 4;
            this.inventory = [];
            this.objectives = {
                portal1Entered:false,
                madePortalGuyMad:false
            };
            for(var n = 0; n < 8; n ++){
                this.inventory.push({empty:true});
            }
            this.hotkeyPowers = data.get_value("hotkey powers");
            this.inventoryActive = false;
        }break;
        //{
        case "Tobibular":{
            this.width = 25;
            this.height = 25;
            this.speed = 1;
            this.health = 25;
            this.hitEffect = function(person){
                if(person === player){
                    sayingRect = "Hi! I'm Tobibular!";
                }
            };
            //this.wallSpeed = 4;
        }break;
        case "Spamite":{
            this.width = 25;
            this.height = 25;
            this.speed = 1;
            this.health = 25;
            this.hitEffect = function(person){
                if(person === player){
                    sayingRect = "I'm Spamite. I'm too busy to talk to you. Go away.";
                }
            };
        }break;
        case "RP24":{
            this.width = 25;
            this.height = 25;
            this.speed = 1;
            this.health = 25;
            this.hitEffect = function(person){
                if(person === player){
                    sayingRect = "Hi, I'm Random! Don't even mention the afro.";
                }
            };
        }break;
        case "Creeper":{
            //this.weapon = {name:"Rifle", x:20, y:0, bulletType:"bullet", reload:0, reloadTime:40};
            this.speed = 1;
            //this.jumpSpeed = 4;
            //this.jumpTime = 3;
            this.health = 25;
            this.r = 90;
            this.hitEffect = function(person, me){
                if(person === player){
                    sayingRect = "Do you want to buy some-\nwait a second! Where are my beasts?";
                    me.r = (me.r + 10) % 360;
                }
            };
            //this.wallSpeed = 4;
        }break;
        case "Wyatt":{
            //this.weapon = {name:"Rifle", x:20, y:0, bulletType:"bullet", reload:0, reloadTime:40};
            this.speed = 1;
            //this.jumpSpeed = 4;
            //this.jumpTime = 3;
            this.health = 25;
            this.r = 90;
            this.hitEffect = function(person, me){
                if(person === player){
                    sayingRect = "Where am I? What am I doing here? Is this Khan Academy?";
                }
            };
            //this.wallSpeed = 4;
        }break;
        case "Xacer":{
            //this.weapon = {name:"Rifle", x:20, y:0, bulletType:"bullet", reload:0, reloadTime:40};
            this.speed = 1;
            //this.jumpSpeed = 4;
            //this.jumpTime = 3;
            this.health = 25;
            this.r = 90;
            this.hitEffect = function(person, me){
                if(person === player){
                    sayingRect = "Don't you love robots?!";
                }
            };
            //this.wallSpeed = 4;
        }break;
        case "Anthony":{
            //this.weapon = {name:"Rifle", x:20, y:0, bulletType:"bullet", reload:0, reloadTime:40};
            this.speed = 1;
            //this.jumpSpeed = 4;
            //this.jumpTime = 3;
            this.health = 25;
            this.r = 90;
            this.swordOn = false;
            this.hitEffect = function(person, me){
                if(person === player){
                    me.swordOn = true;
                    sayingRect = "I don't think I'm supposed to be here yet!";
                }
            };
            //this.wallSpeed = 4;
        }break;
        case "Legowar":{
            this.width = 25;
            this.height = 25;
            this.speed = 1;
            this.health = 25;
            this.r = 90;
            this.hitEffect = function(person, me){
                if(person === player){
                    sayingRect = "Useless except in videogamems items! Get your useless except in videogames items!";
                }
            };
        }break;
        case "Animation":{
            //this.weapon = {name:"Rifle", x:20, y:0, bulletType:"bullet", reload:0, reloadTime:40};
            this.speed = 1;
            //this.jumpSpeed = 4;
            //this.jumpTime = 3;
            this.health = 25;
            this.r = 90;
            this.hitEffect = function(person, me){
                if(person === player){
                    sayingRect = "No, I'm DEFINITELY NOT the hacker.";
                }
            };
            //this.wallSpeed = 4;
        }break;
        case "Erratic Sheep":{
            this.width = 25;
            this.height = 25;
            this.speed = 1;
            this.health = 25;
            this.r = 90;
            this.hitEffect = function(person, me){
                if(person === player){
                    sayingRect = "Watch out - There's this big, blue ninja who calls himself...well...blue ninja.";
                }
            };
        }break;
        case "The Non-pirate":{
            this.width = 25;
            this.height = 25;
            this.speed = 1;
            this.health = 25;
            this.hitEffect = function(person){
                if(person === player){
                    sayingRect = "Howdy, dowdy! I'm the Non-pirate!";
                }
            };
        }break;
        case "Cyborg Programmer":{
            //this.weapon = {name:"Rifle", x:20, y:0, bulletType:"bullet", reload:0, reloadTime:40};
            this.speed = 1;
            //this.jumpSpeed = 4;
            //this.jumpTime = 3;
            this.health = 25;
            this.hitEffect = function(person){
                if(person === player){
                    if(player.objectives.portal1Entered){
                        scene = "Portal Villager A";
                    }
                    else{
                        sayingRect = "Hello, stranger! My name's Cyborg Programmer! I'm considering going through this portal, but I'm afraid of losing my eye.\n...\nHey! I just thought of something! You don't have a robot eye! You could go through and tell me about it!";
                    }
                }
            };
            //this.wallSpeed = 4;
        }break;
        case "Carbon Penguin":{
            //this.weapon = {name:"Rifle", x:20, y:0, bulletType:"bullet", reload:0, reloadTime:40};
            this.speed = 1;
            this.dirMoved = 0;
            //this.jumpSpeed = 4;
            //this.jumpTime = 3;
            this.health = 25;
            this.hitEffect = function(person){
                if(person === player){
                    sayingRect = "Hello! I'm Carbon Penguin! I'm an explorer! I'm exploring this place! Can't you tell?";
                }
            };
            //this.wallSpeed = 4;
        }break;
        //}Peaceful KC members
        //{
        case "The Non-pirate Fight":{
            //this.weapon = {name:"Rifle", x:20, y:0, bulletType:"bullet", reload:0, reloadTime:40};
            this.speed = 2;
            this.hitEffect = function(person){
                if(person === player){
                    sayingRect = "WOOHOO! Adventure!";
                }
            };
            //this.jumpSpeed = 4;
            //this.jumpTime = 3;
            this.health = 250;
            this.r = 0;
            this.minAttackRange = 200;
            this.maxRunRange = 100;
            this.myAttacks = [];
        this.myAttacks.push({name:"Draw", reload:0, reloadTime:500, range:150,attack:function(person){
            bullets.push(new Bullet(person.x + person.width/2, person.y + person.height/2, 0, "draw", person));
        },});
            this.myAttacks.push({name:"Shoot", reload:0, reloadTime:40, range:500,attack:function(person){
            bullets.push(new Bullet(person.x + person.width/2, person.y + person.height/2, person.r, "laser", person));
        },});
            //this.wallSpeed = 4;
        }break;
        case "Cyborg Programmer Fight":{
            this.hitEffect = function(person){
                if(person === player){
                    sayingRect = "I sure hope my eye doesn't get knocked out in battle.";
                }
            };
            this.lookShoot = true;
            //this.weapon = {name:"Rifle", x:20, y:0, bulletType:"bullet", reload:0, reloadTime:40};
            this.speed = 1;
            //this.jumpSpeed = 4;
            //this.jumpTime = 3;
            this.health = 300;
            this.r = 0;
            this.minAttackRange = 300;
            this.maxRunRange = 150;
            this.myAttacks = [];
            this.myAttacks.push({name:"Plasma Ray", reload:0, reloadTime:500, range:500,attack:function(person){
            bullets.push(new Bullet(person.x + person.width/2, person.y + person.height/2, 0, "plasma ray", person));
        },});
        this.myAttacks.push({name:"Ellipse Rain", reload:0, reloadTime:80, range:150,attack:function(person){
            for(var s = 0; s < 5; s ++){
                bullets.push(new Bullet(person.x + person.width/2 + random(-70, 70), person.y + person.height/2 + random(-100, 100), 0, "ellipse", person));
            }
        },});
            //this.wallSpeed = 4;
        }break;
        case "Carbon Penguin Fight":{
            this.hitEffect = function(person){
                if(person === player){
                    sayingRect = "The Pinapulz empire is superior to those puny viruses!";
                }
            };
            //this.lookShoot = true;
            //this.weapon = {name:"Rifle", x:20, y:0, bulletType:"bullet", reload:0, reloadTime:40};
            this.speed = 1.5;
            //this.jumpSpeed = 4;
            //this.jumpTime = 3;
            this.health = 300;
            this.r = 0;
            this.minAttackRange = 400;
            this.maxRunRange = 100;
            this.myAttacks = [];
            this.myAttacks.push({name:"Pinapul Shoot", reload:0, reloadTime:50, range:500,attack:function(person){
            bullets.push(new Bullet(person.x + person.width/2, person.y + person.height/2, person.r, "pineapple", person));
        },});
        this.myAttacks.push({name:"Pinapul Drone", reload:0, reloadTime:300, range:800,attack:function(person){
            bullets.push(new Bullet(person.x + person.width/2, person.y + person.height/2, 0, "pineapple drone", person));
        },});
            //this.wallSpeed = 4;
        }break;
        //}Warmongering KC members
        //{
        case "Tiny Winston Virus":{
            this.headX = 8;
            this.headY = 8;
            this.width = 15;
            this.height = 15;
            this.drops = [];
            var dropNum = round(random(1, 2));
            for(var d = 0; d < dropNum; d ++){
                this.drops.push({name:"Energy Point", extra:{amount:round(random(4, 6)) * 20}});
            }
            this.evil = true;
            this.collides = function(person){
                if(person.evil){
                    return true;
                }
                else{
                    return false;
                }
            };
            //this.weapon = {name:"Rifle", x:20, y:0, bulletType:"bullet", reload:0, reloadTime:40};
            this.speed = 4;
            //this.jumpSpeed = 4;
            //this.jumpTime = 3;
            this.health = 10;
            this.hitEffect = function(person){
                if(!person.evil){
                    person.health -= 1/person.defenseMult;
                }
            };
            this.r = 0;
            //this.wallSpeed = 4;
        }break;
        case "Winston Virus":{
            this.headX = 15;
            this.headY = -30;
            this.width = 25;
            this.height = 25;
            this.drops = [];//Drops is what it drops. For now, just energy points. 
            var dropNum = round(random(1, 2));//Make this a random number, or not random.
            for(var d = 0; d < dropNum; d ++){
                this.drops.push({name:"Energy Point", extra:{amount:round(random(8, 12)) * 10}});//Make amount also a random number, or not random. Try to make it a multiple of 5 or 10, though. If it's really big, a multiple of 50 or 100.
            }
            this.evil = true;//Make evil true
            this.collides = function(person){
                if(person.evil){
                    return true;
                }
                else{
                    return false;
                }
            };//This has to do with who it can move through.
            //this.weapon = {name:"Rifle", x:20, y:0, bulletType:"bullet", reload:0, reloadTime:40};
            this.speed = 2;//How fast it moves
            //this.jumpSpeed = 4;
            //this.jumpTime = 3;
            this.health = 40;//How much health it has
            this.hitEffect = function(person){
                if(!person.evil){//If the person it's touching is good...
                    person.health -= 3/person.defenseMult;//The 3 is damage.
                }
            };//What it does when it touches someone
            this.deadEffect = function(){
                people.push(new Person(this.x - 5 + random(0, this.width + 10), this.y - 20 + random(0, this.width + 40), 15, 15, "Tiny Winston Virus"));
                people.push(new Person(this.x - 5 + random(0, this.width + 10), this.y - 20 + random(0, this.width + 40), 15, 15, "Tiny Winston Virus"));
                people.push(new Person(this.x - 5 + random(0, this.width + 10), this.y - 20 + random(0, this.width + 40), 15, 15, "Tiny Winston Virus"));
            };//What it does when it dies
            this.r = 0;//Which direction it's facing
            //this.wallSpeed = 4;
        }break;//This is an enemy. Copy-paste the case-break. And change the name.
        case "Big Winston Virus":{
            this.headX = 30;
            this.headY = -50;
            this.width = 55;
            this.height = 40;
            this.drops = [];
            for(var d = 0; d < 1; d ++){
                this.drops.push({name:"Energy Point", extra:{amount:round(random(2, 4)) * 100}});
            }
            this.evil = true;
            this.collides = function(person){
                if(person.evil){
                    return true;
                }
                else{
                    return false;
                }
            };
            this.speed = 1;
            this.health = 100;
            this.hitEffect = function(person){
                if(!person.evil){
                    person.health -= 5/person.defenseMult;
                }
            };
            this.deadEffect = function(){
                people.push(new Person(this.x - 10 + random(0, this.width + 20), this.y - 30 + random(0, this.width + 60), 25, 25, "Winston Virus"));
                people.push(new Person(this.x - 10 + random(0, this.width + 20), this.y - 30 + random(0, this.width + 60), 25, 25, "Winston Virus"));
                people.push(new Person(this.x - 10 + random(0, this.width + 20), this.y - 30 + random(0, this.width + 60), 25, 25, "Winston Virus"));
            };
            this.r = 0;
        }break;
        case "Sand Virus":{
            this.hiding = true;
            this.eyeNoseExpand = 0;
            this.legExpand = 0;
            this.reload = random(10, 20);
            this.reloadTime = 30;
            
            this.headX = 25;
            this.headY = 10;
            this.width = 50;
            this.height = 25;
            this.drops = [];//Drops is what it drops. For now, just energy points. 
            var dropNum = round(random(2, 4));//Make this a random number, or not random.
            for(var d = 0; d < dropNum; d ++){
                this.drops.push({name:"Energy Point", extra:{amount:round(random(10, 15)) * 10}});//Make amount also a random number, or not random. Try to make it a multiple of 5 or 10, though. If it's really big, a multiple of 50 or 100.
            }
            this.evil = true;//Make evil true
            this.collides = function(person){
                if(person.evil){
                    return true;
                }
                else{
                    return false;
                }
            };//This has to do with who it can move through.
            this.speed = 2;//How fast it moves
            //this.jumpSpeed = 4;
            //this.jumpTime = 3;
            this.health = 50;//How much health it has
            this.hitEffect = function(person){
                if(!person.evil){//If the person it's touching is good...
                    person.health -= 3/person.defenseMult;//The 3 is damage.
                }
            };//What it does when it touches someone
            this.deadEffect = function(){
                
            };//What it does when it dies
            this.r = 0;//Which direction it's facing
            //this.wallSpeed = 4;
        }break;
        case "Glitch":{
            this.glitchNumber = random(0, 20);
            
            this.headX = 25;
            this.headY = 10;
            this.width = 40;
            this.height = 40;
            this.drops = [];//Drops is what it drops. For now, just energy points. 
            var dropNum = round(random(2, 4));//Make this a random number, or not random.
            for(var d = 0; d < dropNum; d ++){
                this.drops.push({name:"Energy Point", extra:{amount:round(random(10, 15)) * 10}});//Make amount also a random number, or not random. Try to make it a multiple of 5 or 10, though. If it's really big, a multiple of 50 or 100.
            }
            this.evil = true;//Make evil true
            this.collides = function(person){
                if(person.evil){
                    return true;
                }
                else{
                    return false;
                }
            };//This has to do with who it can move through.
            this.speed = 2;//How fast it moves
            this.health = 150;//How much health it has
            this.hitEffect = function(person){
                if(!person.evil){//If the person it's touching is good...
                    person.health -= 0.5/person.defenseMult;
                    if(person.speedMult > 0.1){
                        person.speedMult *= 0.9;
                    }
                    person.speedMultChanged = true;
                    person.speedChangeTime = 50;
                }
            };//What it does when it touches someone
            this.deadEffect = function(){
                
            };//What it does when it dies
            this.r = 0;//Which direction it's facing
            //this.wallSpeed = 4;
        }break;
        case "Cat Virus":{
            this.headX = 25;
            this.headY = -5;
            this.width = 45;
            this.height = 25;
            this.drops = [];
            this.lives = 9;
            this.ghostY = 0;
            this.ghosting = false;
            this.sneakTimer = random(50, 100);
            this.invisible = false;
            var dropNum = 9;
            for(var d = 0; d < dropNum; d ++){
                this.drops.push({name:"Energy Point", extra:{amount:round(random(8, 12)) * 10}});
            }
            this.evil = true;
            this.collides = function(person){
                if(person.evil){
                    return true;
                }
                else{
                    return false;
                }
            };
            this.speed = 2;
            this.health = 40;
            this.hitEffect = function(person){
                if(!person.evil){
                    person.health -= 2/person.defenseMult;
                }
            };
            this.deadEffect = function(){
                if(this.lives > 0){
                    if (this.ghosting) {
                        this.ghostY = 0;
                    }
                    this.lives--;
                    this.ghosting = true;
                    this.invisible = true;
                    this.health = this.maxHealth;
                }
            };
            this.r = 0;
        }break;
        case "Octo Virus":{
            this.inks = [];
            this.inkTime = 0;
            this.invisible = false;
            this.surfaceTime = 0;
            this.bubbles = [];
            this.headX = 20;
            this.headY = 0;
            this.width = 40;
            this.height = 50;
            this.drops = [];
            var dropNum = round(random(1, 2));
            for(var d = 0; d < dropNum; d ++){
                this.drops.push({name:"Energy Point", extra:{amount:round(random(1, 3)) * 50}});
            }
            this.evil = true;
            this.collides = function(person){
                if(person.evil){
                    return true;
                }
                else{
                    return false;
                }
            };
            this.speed = 2;
            this.health = 80;
            this.hitEffect = function(person){
                if(!person.evil){
                    person.health -= 2/person.defenseMult;
                }
            };
            this.deadEffect = function(){
                
            };
            this.r = 0;
        }break;
        //}Viruses
        //{
        case "Blue Ninja":{
            this.placesToGo = this.extra.placesToGo || [{x:this.x, y:this.y}];
            this.placeToGo = this.placesToGo[0];
            this.strafeTimer = 0;
            //this.headX = 30;
            //this.headY = -50;
            this.drops = [];
            this.fightStage = 0;
            for(var d = 0; d < 1; d ++){
                this.drops.push({name:"Energy Point", extra:{amount:15000}});
            }
            this.evil = true;
            this.reload = 100;
            this.collides = function(person){
                if(person.evil){
                    return true;
                }
                else{
                    return false;
                }
            };
            this.speed = 4;
            this.health = 300;
            this.r = 0;
            this.lastHealth = this.health;
        }break;
        case "Isaac Emerald":{
            this.rotDeviation = random(-30, 30);
            //this.headX = 30;
            //this.headY = -50;
            this.drops = [];
            this.fightStage = 0;
            for(var d = 0; d < 1; d ++){
                this.drops.push({name:"Energy Point", extra:{amount:25000}});
            }
            this.evil = true;
            this.reload = 200;
            this.collides = function(person){
                if(person.evil){
                    return true;
                }
                else{
                    return false;
                }
            };
            this.shots = 5;
            this.speed = 2;
            this.health = 600;
            this.r = 0;
            this.lastHealth = this.health;
        }break;
        //}Hacked users
    }
    this.normalSpeed = this.speed;
    this.maxHealth = this.health;
    this.facing = 1;
};//Enemies in here
Person.prototype.draw = function() {
    pushMatrix();
    if(this.facing === 1){
        translate(this.x, this.y);
        scale(this.facing, 1);
    }
    else{
        translate(this.x + this.width, this.y);
        scale(this.facing, 1);
    }
    switch(this.person){
        case "player":{
            fill(0, 0, 150, 50);
            rectMode(CORNER);
            rect(0, 0, this.width, this.height);
            var motion;
            if(round(this.xSpeed) < 0){
                motion = "left";
            }
            else if(round(this.xSpeed) > 0){
                motion = "right";
            }
            else if(round(this.ySpeed) < 0){
                motion = "up";
            }
            else if(round(this.ySpeed) > 0){
                motion = "down";
            }
            else{
                motion = "none";
            }
            strokeWeight(1);
            var myWeapon = data.get_value("hotkey powers")[3];
            playerG(-3, -35, motion, this.usingWeapon ? (myWeapon.stats.name === "Punch" ? (!this.fist2 ? "Punch" : false) : false) : myWeapon.stats.name, myWeapon.stats.name === "Punch" ? (this.usingWeapon && !this.fist2) : false, this.invisible > 0); 
            fill(0, 255, 0);
            rect(0, -40, (this.health/this.maxHealth) * this.width, 5);
            this.usingWeapon = false;
        }break;
        //{
        case "Tobibular":{
            fill(0, 100);
            rectMode(CORNER);
            rect(0, 0, this.width, this.height);
            Tobibular(this.width/2, 0, 0.2, 1);
            rectMode(CORNER);
            fill(0, 255, 0);
            rect(0, -50, (this.health/this.maxHealth) * this.width, 5);
        }break;
        case "RP24":{
            fill(0, 100);
            rectMode(CORNER);
            rect(0, 0, this.width, this.height);
            RandomProgrammer24(this.width/2, 0, 0.2, 1);
            rectMode(CORNER);
            fill(0, 255, 0);
            rect(0, -50, (this.health/this.maxHealth) * this.width, 5);
        }break;
        case "Wyatt":{
            fill(0, 100);
            rectMode(CORNER);
            rect(0, 0, this.width, this.height);
            WyattMatthews(this.width/2, 0, 0.2, 1);
            rectMode(CORNER);
            fill(0, 255, 0);
            rect(0, -50, (this.health/this.maxHealth) * this.width, 5);
        }break;
        case "Xacer":{
            fill(0, 100);
            rectMode(CORNER);
            rect(0, 0, this.width, this.height);
            Xacer(this.width/2, 0, 0.2, 1);
            rectMode(CORNER);
            fill(0, 255, 0);
            rect(0, -50, (this.health/this.maxHealth) * this.width, 5);
        }break;
        case "Legowar":{
            fill(0, 100);
            rectMode(CORNER);
            rect(0, 0, this.width, this.height);
            Legowar(this.width/2, 0, 0.2, 1);
            rectMode(CORNER);
            fill(0, 255, 0);
            rect(0, -50, (this.health/this.maxHealth) * this.width, 5);
        }break;
        case "Animation":{
            fill(0, 100);
            rectMode(CORNER);
            rect(0, 0, this.width, this.height);
            AnimationStudios(this.width/2, 0, 0.2, 1);
            rectMode(CORNER);
            fill(0, 255, 0);
            rect(0, -50, (this.health/this.maxHealth) * this.width, 5);
        }break;
        case "Erratic Sheep":{
            fill(0, 100);
            rectMode(CORNER);
            rect(0, 0, this.width, this.height);
            ESheep(this.width/2, 0, 0.2, 1);
            rectMode(CORNER);
            fill(0, 255, 0);
            rect(0, -50, (this.health/this.maxHealth) * this.width, 5);
        }break;
        case "Anthony":{
            fill(0, 100);
            rectMode(CORNER);
            rect(0, 0, this.width, this.height);
            AnthonyMullan(this.width/2, 0, 0.2, 1, this.swordOn);
            rectMode(CORNER);
            fill(0, 255, 0);
            rect(0, -50, (this.health/this.maxHealth) * this.width, 5);
        }break;
        case "Creeper":{
            fill(0, 100);
            rectMode(CORNER);
            rect(0, 0, this.width, this.height);
            var facing = 0;
            this.r = atan2(sin(this.r), cos(this.r));
            if(this.r >= 45 && this.r <= 135){
                facing = 1;
            }
            else if(this.r >= 135 || this.r <= -135){
                facing = 2;
            }
            else if(this.r >= -135 && this.r <= -45){
                facing = 4;
            }
            else{
                facing = 3;
            }
            Creeper(this.width/2, 0, 0.2, facing);
            rectMode(CORNER);
            fill(0, 255, 0);
            rect(0, -50, (this.health/this.maxHealth) * this.width, 5);
        }break;
        case "Spamite":{
            fill(0, 100);
            rectMode(CORNER);
            rect(0, 0, this.width, this.height);
            Spamite(this.width/2, 0, 0.2, 1);
            rectMode(CORNER);
            fill(0, 255, 0);
            rect(0, -50, (this.health/this.maxHealth) * this.width, 5);
        }break;
        case "The Non-pirate":{
            fill(0, 100);
            rectMode(CORNER);
            rect(0, 0, this.width, this.height);
            NonPirate(this.width/2, 0, 0.2, 1);
            rectMode(CORNER);
            fill(0, 255, 0);
            rect(0, -50, (this.health/this.maxHealth) * this.width, 5);
        }break;
        case "Carbon Penguin":{
            fill(0, 100);
            rectMode(CORNER);
            rect(0, 0, this.width, this.height);
            this.r = atan2(this.ySpeed, this.xSpeed);
            var facing = 0;
            this.r = atan2(sin(this.r), cos(this.r));
            if(this.r >= 45 && this.r <= 135){
                facing = 1;
            }
            else if(this.r >= 135 || this.r <= -135){
                facing = 2;
            }
            else if(this.r >= -135 && this.r <= -45){
                facing = 4;
            }
            else{
                facing = 3;
            }
            CarbonPenguin(this.width/2, 0, 0.2,  facing);
            rectMode(CORNER);
            fill(0, 255, 0);
            rect(0, -50, (this.health/this.maxHealth) * this.width, 5);
        }break;
        case "Cyborg Programmer":{
            fill(0, 100);
            rectMode(CORNER);
            rect(0, 0, this.width, this.height);
            Cyborg(this.width/2, 0, 0.2, 1);
            rectMode(CORNER);
            fill(0, 255, 0);
            rect(0, -50, (this.health/this.maxHealth) * this.width, 5);
        }break;
        //}Drawin' the peaceful KC folks-
        //{
        case "The Non-pirate Fight":{
            fill(0, 100);
            rectMode(CORNER);
            rect(0, 0, this.width, this.height);
            var facing = 0;
            this.r = atan2(sin(this.r), cos(this.r));
            if(this.r >= 45 && this.r <= 135){
                facing = 1;
            }
            else if(this.r >= 135 || this.r <= -135){
                facing = 2;
            }
            else if(this.r >= -135 && this.r <= -45){
                facing = 4;
            }
            else{
                facing = 3;
            }
            NonPirate(this.width/2, 0, 0.2,  facing);
            rectMode(CORNER);
            fill(0, 255, 0);
            rect(0, -50, (this.health/this.maxHealth) * this.width, 5);
        }break;
        case "Cyborg Programmer Fight":{
            fill(0, 100);
            rectMode(CORNER);
            rect(0, 0, this.width, this.height);
            var facing = 0;
            this.r = atan2(sin(this.r), cos(this.r));
            if(this.r >= 45 && this.r <= 135){
                facing = 1;
            }
            else if(this.r >= 135 || this.r <= -135){
                facing = 2;
            }
            else if(this.r >= -135 && this.r <= -45){
                facing = 4;
            }
            else{
                facing = 3;
            }
            Cyborg(this.width/2, 0, 0.2, facing);
            rectMode(CORNER);
            fill(0, 255, 0);
            rect(0, -50, (this.health/this.maxHealth) * this.width, 5);
        }break;
        case "Carbon Penguin Fight":{
            fill(0, 100);
            rectMode(CORNER);
            rect(0, 0, this.width, this.height);
            //this.r = atan2(this.ySpeed, this.xSpeed);
            var facing = 0;
            this.r = atan2(sin(this.r), cos(this.r));
            if(this.r >= 45 && this.r <= 135){
                facing = 1;
            }
            else if(this.r >= 135 || this.r <= -135){
                facing = 2;
            }
            else if(this.r >= -135 && this.r <= -45){
                facing = 4;
            }
            else{
                facing = 3;
            }
            CarbonPenguin(this.width/2, 0, 0.2,  facing);
            rectMode(CORNER);
            fill(0, 255, 0);
            rect(0, -50, (this.health/this.maxHealth) * this.width, 5);
        }break;
        //}-and the warmongering ones
        //{
        case "Tiny Winston Virus":{
            pushMatrix();
            noFill();
            stroke(0);
            rectMode(CORNER);
            rect(0, 0, this.width, this.height);
            translate(8, 8);
            //scale(2);
            fill(255, 221, 0);
    
            noStroke();
            
            ellipse(0,0,15,15);
            
            fill(245, 208, 0);
            
            noStroke();
            
            ellipse(2.5,-2.5,10,10);
            
            fill(237, 201, 0);
            
            noStroke();
            
            ellipse(5,-5,5,5);
            fill(255, 234, 0);
            ellipse(0 - 1,0-5,1,1);
            ellipse(0+5,0-5,1,1);
            fill(179, 98, 98);
            rect(-8, -13, (this.health/this.maxHealth) * this.width, 5);
            popMatrix();
        }break;
        case "Winston Virus":{
            pushMatrix();
            noFill();
            stroke(0);
            rectMode(CORNER);
            rect(0, 0, this.width, this.height);
            translate(12, -25);
            stroke(125, 125, 125);
    
            strokeWeight(5);
            
            line(0,0,0,0+31);
            
            line(0-10,0+30+floor((frameCount%10)/5)*5,0,0+31);
            
            line(0-10,0+30+floor((frameCount%10)/5)*5,0-10,0+41+floor((frameCount%10)/5)*5);
            
            line(0+10,0+30+floor(((frameCount-5)%10)/5)*5,0,0+31);
            
            line(0+10,0+30+floor(((frameCount-5)%10)/5)*5,0+10,0+41+floor(((frameCount-5)%10)/5)*5);
            
            stroke(166, 166, 166);
            
            strokeWeight(2);
            
            line(0-2,0,0-2,0+31);
            
            fill(255, 221, 0);
            
            noStroke();
            
            ellipse(0,0,30,30);
        
        
            fill(245, 208, 0);
            
            ellipse(0+2.5,0-2.5,20,20);
            
            fill(237, 201, 0);
            
            ellipse(0+3,0 + 2,10,10);
            
            fill(255, 234, 0);
            ellipse(0+-2,0-5,3,3);
            ellipse(0+8,0-5,3,3);
            fill(179, 98, 98);
            rect(-20, -20, (this.health/this.maxHealth) * this.width * 1.5, 5);
            popMatrix();
        }break;//Draw enemies in here. Copy-paste again.
        case "Big Winston Virus":{
            pushMatrix();
            noFill();
            stroke(0);
            strokeWeight(1);
            rectMode(CORNER);
            rect(0, 0, this.width, this.height);
            translate(28, -60);
            stroke(125, 125, 125);
    
            strokeWeight(10);
            
            line(0,0,0,0+62);
            
            pushMatrix();
            
            translate(0,31);
            
            line(0-20,0+30+floor((frameCount%10)/5)*5,0,0+31);
            
            line(0-20,0+30+floor((frameCount%10)/5)*5,0-20,0+55+floor((frameCount%10)/5)*5);
            
            line(0+20,0+30+floor(((frameCount-5)%10)/5)*5,0,0+31);
            
            line(0+20,0+30+floor(((frameCount-5)%10)/5)*5,0+20,0+55+floor(((frameCount-5)%10)/5)*5);
            
            popMatrix();
            
            
            fill(255, 221, 0);
            
            noStroke();
            
            ellipse(0,0,60,60);
            
            fill(245, 204, 0);
            
            noStroke();
            
            ellipse(0+2.5,0-2.5,40,40);
            
            fill(237, 198, 0);
            
            noStroke();
            
            ellipse(0+5,0+6,20,20);
            
            fill(255, 234, 0);
            ellipse(0+17,0-5,3,3);
            ellipse(0+-6,0-5,3,3);
            fill(179, 98, 98);
            rect(-20, -20, (this.health/this.maxHealth) * this.width * 1.5, 5);
            popMatrix();
        }break;
        case "Sand Virus":{
            this.h = this.health;
            pushMatrix();
            noFill();
            stroke(0);
            rectMode(CORNER);
            rect(0, 0, this.width, this.height);
            translate(25, 8);
            stroke(255, 204, 0);

            strokeWeight(0.2);
        
            fill(255, 210, 133);
        
            arc(-0.5, 15, 50, 50 + this.h / 1.8, 180, 360); //body
            triangle(19.5, this.h / -2.3, 7, this.h / -2.1, 17, this.h / -3.3); //the irregularities
            triangle(-10, this.h / -2.4, -21, this.h / -5.6, -21,  this.h / -2.8);
            triangle(2, this.h / -2.1, 0, this.h / -1.8, -16, this.h / -2.8);
            line(-25, 15, 23, 15);
        
            fill(212, 158, 21);
            for (var amount = 0; amount < this.h / 5; amount++) {
                ellipse(random(-36, 36), random(-19, this.h / 3.3), random(this.eyeNoseExpand / 5, this.eyeNoseExpand), random(this.eyeNoseExpand / 5, this.eyeNoseExpand));
            }
            for (var x = -22; x < 26; x += 5) {
                line(x, this.legExpand, x, 15); //super tiny legs
            } //22
        
            noStroke();
            fill(186, 158, 0);
            ellipse(-8, -1, this.eyeNoseExpand, this.eyeNoseExpand); //eyes
            ellipse(10, -1, this.eyeNoseExpand, this.eyeNoseExpand);
            ellipse(2, 5, this.eyeNoseExpand * 2, this.eyeNoseExpand * 3); //nose
        
            if (this.eyeNoseExpand < 5 || this.legExpand < 22) {
                if (dist(player.x, player.y, this.x, this.y) < 100 || this.h < 50) {
                    this.hiding = false;//possibly move this
                }
                if (!this.hiding) {
                    this.eyeNoseExpand += 0.11; //Thanks non-piarte!
                    this.legExpand += 0.4;//the pineapple empire was here (that was a joke)
                }
            }
                
            if (!this.hidden && this.eyeNoseExpand > 5 && this.legExpand > 22) {
                fill(179, 98, 98);
                rect(-30, -20, (this.health/this.maxHealth) * this.width * 1.5, 5);
            }
            popMatrix();
        }break;
        case "Glitch":{
            pushMatrix();
            noFill();
            stroke(0);
            rectMode(CORNER);
            rect(0, 0, this.width, this.height);
            fill(17, 237, 208);
            translate(18, 22);
            noStroke();
        
            ellipse(2.5,  -2.5, 40, 40);
            fill(31, 140, 125);
            ellipse(2.5,  -2.5, 30, 30);
        
            fill(40, 130, 130);
            strokeWeight(4);
            noStroke();
        
            ellipse(5,  -5, 20, 20);
            strokeWeight(2);
            stroke(242, 97, 0);
            noFill();
            line(0, 0, 5, 2);
            stroke(0, 21, 255);
            ellipse(6,  -4, 10, 13);
            ellipse(-2,  -12, 5, 5);
            ellipse(10,  -12, 5, 5);
        
            strokeWeight(2);
            stroke(0, 21, 255);
            line(0, 0,  -15, 7);
            stroke(0, 21, 255);
            line( -2, 0, 5, 7);
            line(5, 7, 3, 13);
            stroke(0, 21, 255);
            line(0,  -10,  -8,  -5);
            line( -14,  -12,  -8,  -5);
            line( -15,  -6,  -8,  -5);
            stroke(0, 21, 255);
            line(0,  -10, 0,  -15);
            line( -5,  -13, 0,  -15);
            line( -5,  -13,  -2,  -20);
            stroke(0, 21, 255);
            line(10,  -5, 14,  -3);
            line(10,  -5, 14,  -13);
            line(10, 10, 14,  -3);
            stroke(0, 21, 255);
            line(10, 10, 17, 11);
            noStroke();
            fill(179, 98, 98);
            rect(-30, -30, (this.health/this.maxHealth) * this.width * 1.5, 5);
            popMatrix();
        }break;
        case "Cat Virus":{
            pushMatrix();
            /*
            noFill();
            stroke(0);
            rectMode(CORNER);
            rect(0, 0, this.width, this.height);
            */
            if (!this.invisible) {
                pushMatrix();
                translate(-this.x + this.width/2, -this.y - 5);
                noStroke();
                rectMode(CORNER);
                strokeWeight(3);
                stroke(6, 35, 153);
                noFill();
                bezier(this.x + -6, this.y + 10, this.x + 59, this.y - sin(frameCount * -8) * 20, this.x + -1, this.y + sin(frameCount * -8) * 20, this.x + 32, this.y + 15 + sin(frameCount * 20) * 1.5); //tail
                fill(7, 104, 222);
                ellipse(this.x, this.y, 30, 30);
        
                triangle(this.x + -14, this.y + -19, this.x + -13, this.y + -8, this.x + -9, this.y + -16); //ear
                triangle(this.x + 17, this.y + -21, this.x + 14, this.y + -8, this.x + 6, this.y + -14); //ear
        
                noStroke();
                fill(6, 35, 153);
                ellipse(this.x + 4, this.y + 9, 10, 20); //nosemouth thing
                ellipse(this.x + -3, this.y + -4, 5, 5);
                ellipse(this.x + 7, this.y + -4, 5, 5);
        
                rect(this.x + -21, this.y + 19 + sin(frameCount * 16) * 3, 20, 7,50, 50, 0, 0); //feet
                rect(this.x + 4, this.y + 19 + sin(frameCount * 16) * -3, 20, 7, 50, 50, 0, 0);
                popMatrix();
                fill(179, 98, 98);
                rect(0, -20, (this.health/this.maxHealth) * this.width * 1.5, 5);
            }
            if (this.ghosting) {
                pushMatrix();
                translate(0, this.ghostY);
                rotate(sin(frameCount * 7) * 60);
                //ghost
                strokeWeight(3);
                stroke(6, 35, 153, 50);
                noFill();
                bezier(-6, 10, 59, -sin(frameCount * -8) * 20, -1, sin(frameCount * -8) * 20, 32, 15 + sin(frameCount * 20) * 1.5); //tail
                fill(7, 104, 222, 50);
                ellipse(0, 0, 30, 30);
        
                triangle(-14, -19, -13, -8, -9, -16); //ear
                triangle(17, -21, 14, -8, 6, -14); //ear
                noStroke();
                fill(6, 35, 153, 50);
                ellipse(4, 9, 10, 20); //nosemouth thing
                ellipse(-3, -4, 5, 5);
                ellipse(7, -4, 5, 5);
        
                rect(-21, 19 + sin(frameCount * 16) * 3, 20, 7,50, 50, 0, 0); //feet
                rect(4, 19 + sin(frameCount * 16) * -3, 20, 7,50, 50, 0, 0);
        
                this.ghostY -= 4;
        
                popMatrix();
            }
            noStroke();
            popMatrix();
        }break;
        case "Octo Virus":{
            pushMatrix();
            /*
            noFill();
            stroke(0);
            rectMode(CORNER);
            rect(0, 0, this.width, this.height);
            */
            if (!this.invisible) {
                pushMatrix();
                translate(-this.x + this.width/2 - 3, -this.y + this.height/2 + 3);
                stroke(0, 98, 255); //0 98 255
                strokeWeight(3);
                noFill();
                //tentacles (now moving, thanks to Non-Piarte)
                bezier(this.x + -12, this.y + -12, this.x + -2 + cos(frameCount * 3) * 2, this.y + 14, this.x + -10 + cos(frameCount * 4) * 6, this + 3, this.x + -17 + cos(frameCount * 3) * 5, this.y + 19);
        
                bezier(this.x + -11, this.y + -10, this.x + -26, this.y + 8, this.x + -5, this.y + 3, this.x + -12, this.y + 32);
                bezier(this.x + -8, this.y + -7, this.x + 1, this.y + 8, this.x + -7, this.y + 3, this.x + -3, this.y + 21);
                bezier(this.x + 1, this.y + -6, this.x + 12, this.y + 8, this.x + -7, this.y + 3, this.x + 7, this.y + 24);
        
                bezier(this.x + 7 + cos(frameCount * 3) * 5, this.y + -6, this.x + 12 + cos(frameCount * 3) * 5, this.y + 8, this.x + 2 + cos(frameCount * 3) * 5, this.y + 2, this.x + 16 + cos(frameCount * 3) * 5, this.y + 15);
                bezier(this.x + 9, this.y + -5 + sin(frameCount * 3) * 4, this.x + 22, this.y + 16 + sin(frameCount * 3) * 4, this.x + 3, this.y + 3 + sin(frameCount * 3) * 4, this.x + 16, this.y + 24 + sin(frameCount * 3) * 4);
                bezier(this.x + 12, this.y + -7 + sin(frameCount * 3) * 4, this.x + 33, this.y + 16 + sin(frameCount * 3) * 4, this.x + 15, this.y + 3 + sin(frameCount * 3) * 4, this.x + 24, this.y + 24 + sin(frameCount * 3) * 4);
                bezier(this.x + 3 + sin(frameCount * 3) * 4, this.y + -7, this.x + -6 + sin(frameCount * 3) * 4, this.y + 16, this.x + 10 + sin(frameCount * 3) * 4, this.y + 3, this.x + 0 + sin(frameCount * 3) * 4, this.y + 24);
                noStroke();
                fill(0, 98, 255);
                ellipse(this.x, this.y - 18, 30, 40); //body of the virus
                fill(98, 255, 0);
                ellipse(this.x + 6, this.y + -7, 15, 22); //nose
                fill(0, 0, 0);
                ellipse(this.x + 8, this.y + -27, 5, 5); //eyes
                ellipse(this.x + -2, this.y + -27, 5, 5);
                popMatrix();
                fill(179, 98, 98);
                rect(0, -20, (this.health/this.maxHealth) * this.width * 1.5, 5);
            }
            noStroke();
            translate(-this.x, -this.y);
            for (var d = 0; d < this.inks.length; d++) {
                fill(0, 0, 0, this.inks[d].life);
                ellipse(this.inks[d].position.x, this.inks[d].position.y, 15, 15);
                this.inks[d].life -= 15;
                this.inks[d].position.add(this.inks[d].velocity);
                if (this.inks[d].life <= 0) {
                    this.inks.splice(d, 1);
                }
            }
            for (var d = 0; d < this.bubbles.length; d++) {
                fill(171, 238, 255, this.bubbles[d].life);
                ellipse(this.bubbles[d].position.x, this.bubbles[d].position.y, 15, 15);
                this.bubbles[d].life -= 15;
                this.bubbles[d].position.add(this.bubbles[d].velocity);
                if (this.bubbles[d].life <= 0) {
                    this.bubbles.splice(d, 1);
                }
            }
            popMatrix();
        }break;
        //}Don't forget the viruses!
        //{
        case "Blue Ninja":{
            //fill(0, 100);
            //rectMode(CORNER);
            //rect(0, 0, this.width, this.height);
            if(!this.invisible){
                var facing = 0;
                this.r = atan2(sin(this.r), cos(this.r));
                if(this.r >= 45 && this.r <= 135){
                    facing = 1;
                }
                else if(this.r >= 135 || this.r <= -135){
                    facing = 2;
                }
                else if(this.r >= -135 && this.r <= -45){
                    facing = 4;
                }
                else{
                    facing = 3;
                }
                BlueNinja(this.width/2, 0, 0.2,  facing);
                rectMode(CORNER);
                fill(0, 255, 0);
                rect(0, -50, (this.health/this.maxHealth) * this.width, 5);
            }
        }break;
        case "Isaac Emerald":{
            fill(0, 100);
            rectMode(CORNER);
            rect(0, 0, this.width, this.height);
            var facing = 0;
            this.r = atan2(sin(this.r), cos(this.r));
            if(this.r >= 45 && this.r <= 135){
                facing = 1;
            }
            else if(this.r >= 135 || this.r <= -135){
                facing = 2;
            }
            else if(this.r >= -135 && this.r <= -45){
                facing = 4;
            }
            else{
                facing = 3;
            }
            IsaacEmerald(this.width/2 + 5, 2, 0.2,  facing);
            rectMode(CORNER);
            fill(0, 255, 0);
            rect(0, -50, (this.health/this.maxHealth) * this.width, 5);
        }break;
        //}And some hacked users, too
    }
    if(this.defenseMult < 0.75 && this.defenseMult > 0.25){
        unlockedGraphic(this.headX, this.headY, 1);
    }
    //fill(255, 0, 0);
    //ellipse(this.headX, this.headY, 10, 10);
    popMatrix();
    if(this.person === "player" && this.inventoryActive){
        strokeWeight(1);
        //Also show current weapon, armor, etc.
        for(var r = 0; r < this.inventory.length; r ++){
            var inv = this.inventory[r];
            fill(100);
            stroke(0);
            rectMode(CORNER);
            rect(0 - cam.x, r * 50 - cam.y + 100, 50, 50);
            if(!inv.empty){
                fill(0);
                textSize(12);
                textAlign(CENTER, CENTER);
                text(inv.name, 25, r * 50 + 25);
            }
        }
    }
};//Enemies also here
Person.prototype.move = function(){
    this.xSpeed *= 0.5;
    this.ySpeed *= 0.5;
    this.rotConfuse -= 1;
    this.defenseMultTime -= 1;
    if(this.defenseMultTime <= 0){
        this.defenseMult = 1;
    }
    this.speedChangeTime -= 1;
    if(!this.speedMultChanged && this.speedChangeTime <= 0){
        this.speedMult = 1;
    }
    this.speed = this.normalSpeed * this.speedMult;
    if(this.person === "player"){
        this.invisible = constrain(this.invisible - 1, 0, 999999);
        this.inkedTime = constrain(this.inkedTime - 1, 0, 999999);
        //this.facing = mouseX < 300? -1: 1;
        player = this;
        if(keys[UP] || keys[87]){
            this.ySpeed -= this.speed;
        }
        //else if(this.canJump > 0){
            //this.canJump -= 1;
        //}
        if(keys[DOWN] || keys[83]){
            this.ySpeed += this.speed;
        }
        if((keys[LEFT] || keys[65]) && this.xSpeed > -8){
            this.xSpeed -= this.speed;
            //this.facing = -1;
        }
        if((keys[RIGHT] || keys[68]) && this.xSpeed < 8){
            this.xSpeed += this.speed;
            //this.facing = 1;
        }
        if(keys[32]){
            scene = "Hotbar Choose";
            keys[32] = false;
        }
        else if(keys[16]){
            scene = "Weapon Choose";
            keys[16] = false;
        }
        var hotkeyPowers = data.get_value("hotkey powers");
        var selected = data.get_value("hotkey selected");
        if(mouseIsPressed && this.hotkeyPowers[selected].reload <= 0 && mouseY > 100){
            if(this.invisible > 0){
                this.invisible = 0;
            }
            this.hotkeyPowers[selected].stats.attack(this);
            this.hotkeyPowers[selected].reload = this.hotkeyPowers[selected].stats.reloadTime;
            if(selected === 3 && this.hotkeyPowers[selected].inv){
                this.hotkeyPowers[selected].inv.hits += 1;
                if(this.hotkeyPowers[selected].inv.hits >= this.hotkeyPowers[selected].stats.durability){
                    this.hotkeyPowers[selected].inv.number -= 1;
                    if(this.hotkeyPowers[selected].inv.number <= 0){
                        var powersUnlocked = data.get_value("weapon inventory");
                        for(var i = 0; i < powersUnlocked.length; i ++){
                            var ent = powersUnlocked[i].stats;
                            if(powersUnlocked[i].number <= 0){
                                if(hotkeyPowers[3].stats === ent){
                                    data.set_property("hotkey powers", 3, {stats:weaponAttacks[0], reload:weaponAttacks[0].reloadTime, inv:{hits:0}});
                                }
                                data.splice_array("weapon inventory", i, 1);
                                continue;
                            }
                        }
                    }
            }
            }
        }
        if(keys[ENTER]){
            this.inventoryActive = !this.inventoryActive;
            keys[ENTER] = false;
        }
    }
    else if(this.person === "Cyborg Programmer"){
        
    }
    else if(this.person === "Carbon Penguin"){
        this.x = constrain(this.x, 100, 900);
        this.y = constrain(this.y, 100, 900);
        if(random(0, 3) <= 1 && frameCount % 10 === 0){
            this.dirMoved = floor(random(0, 6));
        }
        if(dist(this.x + this.width/2, this.y + this.height/2, player.x + player.width/2, player.y + player.height/2) <= 50){
            this.dirMoved = 0;
        }
        if(this.dirMoved === 1){
            this.xSpeed += this.speed;
        }
        else if(this.dirMoved === 2){
            this.xSpeed -= this.speed;
        }
        else if(this.dirMoved === 3){
            this.ySpeed -= this.speed;
        }
        else if(this.dirMoved === 4){
            this.ySpeed += this.speed;
        }
    }
    else if(this.person === "Tiny Winston Virus" || this.person === "Winston Virus"|| this.person === "Big Winston Virus"){
        var target = {x:9999999999999, width:1, y:9999999999, height:1};
        for(var a = 0; a < people.length; a ++){
            var targ = people[a];
            if(!targ.invisible && !targ.evil && dist(targ.x + targ.width/2, targ.y + targ.height/2, this.x + this.width/2, this.y + this.height/2) < dist(target.x + target.width/2, target.y + target.height/2, this.x + this.width/2, this.y + this.height/2)){
                target = targ;
            }//Figuring out which person is closest.
        }
        if(target.x < 9999){
            if(dist(target.x + target.width/2,target.y + target.height/2,this.x + this.width/2,this.y + this.height/2)>50){
                this.r = atan2((target.x + target.width/2) - (this.x + this.width/2), (target.y + target.height/2) - (this.y + this.height/2));
            }
            if(this.rotConfuse > 0){
                this.r = (frameCount * 5) % 360;
            }
            this.xSpeed+=sin(this.r)*this.speed;
            this.ySpeed+=cos(this.r)*this.speed;
        }
    }//If it moves like winston viruses, add an || this.person...
    else if(this.person === "Octo Virus"){
        var target = {x:9999999999999, width:1, y:9999999999, height:1};
        for(var a = 0; a < people.length; a ++){
            var targ = people[a];
            if(!targ.invisible && !targ.evil && dist(targ.x + targ.width/2, targ.y + targ.height/2, this.x + this.width/2, this.y + this.height/2) < dist(target.x + target.width/2, target.y + target.height/2, this.x + this.width/2, this.y + this.height/2)){
                target = targ;
            }//Figuring out which person is closest.
        }
        if(target.x < 9999){
            if(dist(target.x + target.width/2,target.y + target.height/2,this.x + this.width/2,this.y + this.height/2)>50){
                this.r = atan2((target.x + target.width/2) - (this.x + this.width/2), (target.y + target.height/2) - (this.y + this.height/2));
            }
            else{ 
                if (random(0, 100) < (((this.maxHealth + 1) - this.health)/30 + 1)/3 && this.inkTime <= 0 && !this.invisible) {
                    if(target === player){
                        target.inkedTime = 250;
                    }
                    this.inkTime = 100;
                }
            }
            if (dist(target.x + target.width/2,target.y + target.height/2,this.x + this.width/2,this.y + this.height/2) <= 80 && this.invisible && this.surfaceTime <= 0) {
                this.surfaceTime = 5;
            }
            if (this.inkTime > 0) {
                this.r = atan2((target.x + target.width/2) - (this.x + this.width/2), (target.y + target.height/2) - (this.y + this.height/2)) + 180;
                if (this.inkTime <= 2) {
                    this.invisible = true;
                }
                this.inkTime -= 1;
                for (var d = 0; d < 5; d++) {
                    this.inks.push({
                        position: new PVector(this.x + this.width/2 + random(-25, 25), this.y + this.height/2 + random(-25, 25)),
                        velocity: new PVector(random(-0.5, 0.5), random(-3, 3)),
                        life: 255
                    });
                }
            }
            if (this.surfaceTime > 0) {
                this.surfaceTime -= 1;
                for (var d = 0; d < 5; d++) {
                    this.bubbles.push({
                        position: new PVector(this.x + this.width/2 + random(-25, 25), this.y + this.height/2 + random(-25, 25)),
                        velocity: new PVector(random(-0.5, 0.5), random(-3, 3)),
                        life: 255
                    });
                }
                if (this.surfaceTime <= 1) {
                    this.invisible = false;
                }
            }
            if(this.rotConfuse > 0){
                this.r = (frameCount * 5) % 360;
            }
            this.xSpeed+=sin(this.r)*this.speed;
            this.ySpeed+=cos(this.r)*this.speed;
        }
    }
    else if(this.person === "Sand Virus"){
        this.health = constrain(this.health + 0.25, 0, this.maxHealth);
        if(!this.hidden && this.eyeNoseExpand > 5 && this.legExpand > 22){
            this.reload -= 1;
            var target = {x:9999999999999, width:1, y:9999999999, height:1};
            for(var a = 0; a < people.length; a ++){
                var targ = people[a];
                if(!targ.invisible && !targ.evil && dist(targ.x + targ.width/2, targ.y + targ.height/2, this.x + this.width/2, this.y + this.height/2) < dist(target.x + target.width/2, target.y + target.height/2, this.x + this.width/2, this.y + this.height/2)){
                    target = targ;
                }//Figuring out which person is closest.
            }
            if(target.x < 9999){
                if(dist(target.x + target.width/2,target.y + target.height/2,this.x + this.width/2,this.y + this.height/2)>50){
                    this.r = atan2((target.y + target.height/2) - (this.y + this.height/2), (target.x + target.width/2) - (this.x + this.width/2));
                }
                if(this.rotConfuse > 0){
                    this.r = (frameCount * 5) % 360;
                }
                if(this.health <= 10 && dist(target.x + target.width/2,target.y + target.height/2,this.x + this.width/2,this.y + this.height/2) < 250){
                    this.r += sin(frameCount) * 10;
                    this.xSpeed-=cos(this.r)*this.speed * 1.5;
                    this.ySpeed-=sin(this.r)*this.speed * 1.5;
                }
                else{
                    this.xSpeed+=cos(this.r)*this.speed;
                    this.ySpeed+=sin(this.r)*this.speed;
                }
                if(this.reload <= 0 && dist(target.x + target.width/2,target.y + target.height/2,this.x + this.width/2,this.y + this.height/2) > 100 && this.health > 25){
                    this.reload = this.reloadTime + random(-10, 10);
                    if(this.health >= 49){
                        this.health -= 25;
                        this.r = atan2((target.y + target.height/2) - (this.y + this.height/2), (target.x + target.width/2) - (this.x + this.width/2));
                        bullets.push(new Bullet(this.x + this.width/2, this.y + this.height/2, this.r, "sand", this));
                        bullets.push(new Bullet(this.x + this.width/2, this.y + this.height/2, this.r - 15, "sand", this));
                        bullets.push(new Bullet(this.x + this.width/2, this.y + this.height/2, this.r + 15, "sand", this));
                    }
                    else{
                        this.health -= 10;
                        this.r = atan2((target.y + target.height/2) - (this.y + this.height/2), (target.x + target.width/2) - (this.x + this.width/2));
                        if(this.rotConfuse > 0){
                            this.r = (frameCount * 5) % 360;
                        }
                        bullets.push(new Bullet(this.x + this.width/2, this.y + this.height/2, this.r, "sand", this));
                    }
                }
            }
        }
    }//A bit unique
    else if(this.person === "Glitch"){
        var target = {x:9999999999999, width:1, y:9999999999, height:1};
        for(var a = 0; a < people.length; a ++){
            var targ = people[a];
            if(!targ.invisible && !targ.evil && dist(targ.x + targ.width/2, targ.y + targ.height/2, this.x + this.width/2, this.y + this.height/2) < dist(target.x + target.width/2, target.y + target.height/2, this.x + this.width/2, this.y + this.height/2)){
                target = targ;
            }//Figuring out which person is closest.
        }
        if(target.x < 9999){
            if(dist(target.x + target.width/2,target.y + target.height/2,this.x + this.width/2,this.y + this.height/2)>50){
                this.r = atan2((target.x + target.width/2) - (this.x + this.width/2), (target.y + target.height/2) - (this.y + this.height/2));
            }
            if(this.rotConfuse > 0){
                this.r = (frameCount * 5) % 360;
            }
            this.glitchNumber = random(0, 20);
            if(this.glitchNumber <= 1){
                this.xSpeed+=sin(this.r)*this.speed * this.glitchNumber * 50;
                this.ySpeed+=cos(this.r)*this.speed * this.glitchNumber * 50;
            }
        }
    }
    else if(this.person === "Cat Virus"){
        if (!this.invisible) {
            this.sneakTimer--;
        }
        if (this.ghostY < -200) {
            this.ghosting = false;
            this.ghostY = 0;
        }
        var target = {x:9999999999999, width:1, y:9999999999, height:1};
        for(var a = 0; a < people.length; a ++){
            var targ = people[a];
            if(!targ.invisible && !targ.evil && dist(targ.x + targ.width/2, targ.y + targ.height/2, this.x + this.width/2, this.y + this.height/2) < dist(target.x + target.width/2, target.y + target.height/2, this.x + this.width/2, this.y + this.height/2)){
                target = targ;
            }//Figuring out which person is closest.
        }
        if(target.x < 9999){
            if(this.ghosting){
                if(this.sneakTimer <= 0){
                    this.invisible = true;
                    this.sneakTimer = random(50, 100);
                }
                this.r = atan2((target.x + target.width/2) - (this.x + this.width/2), (target.y + target.height/2) - (this.y + this.height/2)) + 180;
            }
            else{
                var targDist = dist(target.x + target.width/2,target.y + target.height/2,this.x + this.width/2,this.y + this.height/2);
                if(targDist>150){
                    if(this.sneakTimer <= 0){
                        this.invisible = true;
                        this.sneakTimer = random(50, 100);
                    }
                    this.r = atan2((target.x + target.width/2) - (this.x + this.width/2), (target.y + target.height/2) - (this.y + this.height/2));
                }
                else if(this.invisible){
                    this.invisible = false;
                }
                if(targDist>50){
                    this.r = atan2((target.x + target.width/2) - (this.x + this.width/2), (target.y + target.height/2) - (this.y + this.height/2));
                }
            }
            if(this.rotConfuse > 0){
                this.r = (frameCount * 5) % 360;
            }
            if(this.invisible){
                this.xSpeed+=sin(this.r)*this.speed/3;
                this.ySpeed+=cos(this.r)*this.speed/3;
            }
            else{
                this.xSpeed+=sin(this.r)*this.speed;
                this.ySpeed+=cos(this.r)*this.speed;
            }
        }
        else{
            this.invisible = false;
        }
    }
    else if(this.person === "The Non-pirate Fight" || this.person === "Cyborg Programmer Fight" || this.person === "Carbon Penguin Fight"){
        var target = {x:9999999999999, width:1, y:9999999999, height:1};
        for(var a = 0; a < people.length; a ++){
            var targ = people[a];
            if(targ.evil && dist(targ.x + targ.width/2, targ.y + targ.height/2, this.x + this.width/2, this.y + this.height/2) < dist(target.x + target.width/2, target.y + target.height/2, this.x + this.width/2, this.y + this.height/2)){
                target = targ;
            }//Figuring out which person is closest.
        }
        if(target.x < 999){
            if(dist(target.x + target.width/2,target.y + target.height/2,this.x + this.width/2,this.y + this.height/2)>this.minAttackRange){
                this.r = atan2((target.y + target.height/2) - (this.y + this.height/2), (target.x + target.width/2) - (this.x + this.width/2));
                if(this.rotConfuse > 0){
                    this.r = (frameCount * 5) % 360;
                }
                this.xSpeed+=cos(this.r)*this.speed;
                this.ySpeed+=sin(this.r)*this.speed;
            }
            if(this.lookShoot){
                if(dist(target.x + target.width/2,target.y + target.height/2,this.x + this.width/2,this.y + this.height/2) <=this.maxRunRange){
                    this.r = atan2((target.y + target.height/2) - (this.y + this.height/2), (target.x + target.width/2) - (this.x + this.width/2)) + 180;
                    if(this.rotConfuse > 0){
                        this.r = (frameCount * 5) % 360;
                    }
                    this.xSpeed+=cos(this.r)*this.speed;
                    this.ySpeed+=sin(this.r)*this.speed;
                }
            }
            for(var a = 0; a < this.myAttacks.length; a ++){
                var att = this.myAttacks[a];
                att.reload -= 1;
                if(att.reload <= 0 && dist(target.x + target.width/2,target.y + target.height/2,this.x + this.width/2,this.y + this.height/2) <= att.range){
                    att.reload = att.reloadTime;
                    this.r = atan2((target.y + target.height/2) - (this.y + this.height/2), (target.x + target.width/2) - (this.x + this.width/2));
                    att.attack(this);
                }
            }
            if(!this.lookShoot){
                if(dist(target.x + target.width/2,target.y + target.height/2,this.x + this.width/2,this.y + this.height/2) <=this.maxRunRange){
                    this.r = atan2((target.y + target.height/2) - (this.y + this.height/2), (target.x + target.width/2) - (this.x + this.width/2)) + 180;
                    if(this.rotConfuse > 0){
                        this.r = (frameCount * 5) % 360;
                    }
                    this.xSpeed+=cos(this.r)*this.speed;
                    this.ySpeed+=sin(this.r)*this.speed;
                }
            }
        }
    }//If it moves like a fighting ally, add an || this.person...
    else if(this.person === "Blue Ninja"){
        this.reload -= 1;
        if(this.reload <= 0 && this.fightStage !== 2){
            this.reload = 30;
            this.r = atan2((player.y + player.height/2) - (this.y + this.height/2), (player.x + player.width/2) - (this.x + this.width/2));
            bullets.push(new Bullet(this.x + this.width/2, this.y + this.height/2, this.r, "shuriken", this));
        }
        if(this.fightStage === 0){
            if(this.health < this.lastHealth - 100){
                this.fightStage = 1;
            }
        }
        else if(this.fightStage === 1){
            this.strafeTimer+= this.speed;
            this.r = atan2((player.y + player.height/2)+(sin(this.strafeTimer)*150)-(this.y + this.height/2), (player.x + player.width/2)+(cos(this.strafeTimer)*150)-(this.x + this.width/2));
            if(this.rotConfuse > 0){
                this.r = (frameCount * 5) % 360;
            }
            this.xSpeed += cos(this.r) * this.speed;
            this.ySpeed += sin(this.r) * this.speed;
            if(random(0, 400) <= 1){
                this.r = atan2((player.y + player.height/2) - (this.y + this.height/2), (player.x + player.width/2) - (this.x + this.width/2));
                bullets.push(new Bullet(this.x + this.width/2, this.y + this.height/2, this.r, "smokebomb", this));
                this.placeToGo = floor(random(0, this.placesToGo.length));
                this.fightStage = 2;
            }
        }
        else if(this.fightStage === 2){
            this.r = atan2((this.placesToGo[this.placeToGo].y) - (this.y + this.height/2), (this.placesToGo[this.placeToGo].x) - (this.x + this.width/2));
            if(this.rotConfuse > 0){
                this.r = (frameCount * 5) % 360;
            }
            this.xSpeed += cos(this.r) * this.speed/2;
            this.ySpeed += sin(this.r) * this.speed/2;
            if((dist(this.placesToGo[this.placeToGo].x, this.placesToGo[this.placeToGo].y, this.x + this.width/2, this.y + this.height/2) <= 15 && (random(0, 60) <= 1 || !this.invisible)) || random(0, 600) <= 1){
                this.invisible = false;
                this.fightStage = 0;
                this.lastHealth = this.health;
                people.push(new Person(this.x + this.width + 50, this.y, 25, 25, "Winston Virus"));
                people.push(new Person(this.x - 50, this.y, 25, 25, "Winston Virus"));
            }
        }
    }//Unique Blue Ninja Boss Fight
    else if(this.person === "Isaac Emerald"){
        this.reload -= 1;
        //this.fightStage = 2;
        if(this.fightStage === 0){
            if(this.reload > 10){
                this.ySpeed += sin(frameCount) * this.speed;
                this.r = atan2(this.ySpeed, this.xSpeed);
            }
            if(this.reload <= 0){
                this.r = atan2((player.y + player.height/2) - (this.y + this.height/2), (player.x + player.width/2) - (this.x + this.width/2));
                if(this.rotConfuse > 0){
                    this.r = (frameCount * 5) % 360;
                }
                if(this.reload % 5 === 0){
                    bullets.push(new Bullet(this.x + this.width/2 + (cos(this.r) * (((-this.reload) * 15) + 15)), this.y + this.height/2 + (sin(this.r) * (((-this.reload) * 15) + 15)), this.r, "emerald spike", this));
                    if(this.reload <= -50){
                        this.reload = 100;
                        this.shots -= 1;
                        if(this.shots <= 0){
                            this.shots = 10;
                            this.fightStage = 1;
                        }
                    }
                    
                }
            }
        }
        if(this.fightStage === 1){
            this.r = /*atan2((player.y + player.height/2) - (this.y + this.height/2), (player.x + player.width/2) - (this.x + this.width/2)) + 180 + */this.rotDeviation;
            if(this.rotConfuse > 0){
                this.r = (frameCount * 5) % 360;
            }
            this.y = constrain(this.y, 0, 900);
            if(frameCount % 50 === 0){
                this.rotDeviation = random(-180, 180);
                //this.rotDeviation = random(-30, 30);
            }
            this.xSpeed += cos(this.r) * this.speed;
            this.ySpeed += sin(this.r) * this.speed;
            if(this.reload <= 0){
                for(var s = 0; s < 2; s ++){
                    var newX = constrain(this.x + this.width/2 + random(-100, 100), 50, 950);
                    var newY = constrain(this.y + this.height/2 + random(-100, 100), 50, 950);
                    if(s === 2){
                        var newX = constrain(player.x + player.width/2 + random(-100, 100), 50, 950);
                    var newY = constrain(player.y + player.height/2 + random(-100, 100), 50, 950);
                    }
                    bullets.push(new Bullet(newX, newY, this.r, "burger", this));
                }
                this.reload = 25;
                this.shots -= 1;
                if(this.shots <= 0){
                    this.shots = 7;
                    this.fightStage = 2;
                }
            }
        }
        if(this.fightStage === 2){
            this.XSpeed += sin(frameCount) * this.speed;
            this.r = atan2(this.ySpeed, this.xSpeed);
            if(this.reload <= 0){
                for(var s = 0; s < 1; s ++){
                    var newX = constrain(this.x + this.width/2 + random(-600, 600), 50, 950);
                    var newY = constrain(this.y + this.height/2 + random(-600, 600), 50, 950);
                    bullets.push(new Bullet(newX, newY, this.r, "bird", this));
                }
                this.reload = 50;
                this.shots -= 1;
                if(this.shots <= 0){
                    this.shots = 5;
                    this.fightStage = 0;
                }
            }
        }
    }//Unique Isaac Emerald Boss Fight
    else{
        
    }//Otherwise, add an else-if.
    this.wallJump = false;
    this.xSpeed = constrain(this.xSpeed, -15, 15);
    this.ySpeed = constrain(this.ySpeed, -15, 15);
    for(var p = 0; p < platforms.length; p ++){
        if(platforms[p].pushable){
            platforms[p].pushCollide(this);
        }
        else{
            platforms[p].collide(this);
        }
    }
    for(var p = 0; p < people.length; p ++){
        people[p].collide(this);
    }
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.x = constrain(this.x, 0, 999999);
    this.y = constrain(this.y, 0, 999999);
    this.speedMultChanged = false;
};//Enemies also also here
Person.prototype.collide = function(other) {
    other.xx = other.x + other.xSpeed;
    other.yy = other.y + other.ySpeed;
    if(other.xx + other.width > this.x && other.xx < this.x + this.width && other.yy + other.height > this.y && other.yy < this.y + this.height){
        if(other.collides && other.collides(this) && other !== this){
            if(other.xx + other.width <= this.x + (other.xSpeed * 2) && other.xSpeed > 0){
                this.xSpeed += other.xSpeed/this.weight;
                other.xSpeed = this.x - (other.x + other.width);
                other.ySpeed *= 0.5;
            }
            if(other.xx >= this.x + this.width + (other.xSpeed * 2) && other.xSpeed < 0){
                this.xSpeed += other.xSpeed/this.weight;
                other.xSpeed = (this.x + this.width) - other.x;
                other.ySpeed *= 0.5;
            }
            if(other.yy >= this.y + this.height + (other.ySpeed * 2) && other.ySpeed < 0){
                this.ySpeed += other.ySpeed/this.weight;
                other.ySpeed = (this.y + this.height) - other.y;
            }
            if(other.yy + other.height <= this.y + (other.ySpeed * 2) && other.ySpeed > 0){
                this.ySpeed += other.ySpeed/this.weight;
                other.canJump = other.jumpTime;
                other.xSpeed *= 0.9;
                other.ySpeed = this.y - (other.y + other.height);
            }
        }
        if(other !== this){
            this.hitEffect(other, this);
        }
    }
};
Person.prototype.isColliding = function(other) {
    other.xx = other.x ;
    other.yy = other.y;
    if(other.xx + other.width > this.x && other.xx < this.x + this.width && other.yy + other.height > this.y && other.yy < this.y + this.height){
        return true;
    }
    else{
        return false;
    }
};
//}Person
//{
var Platform = function(x, y, width, height, look, effect){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.look = look || "Black";
    this.effect = effect || function(){};
    this.overStats = {x:this.x, y:this.y - this.height, width:this.width, height:this.height};
    this.threeD = false;
    if(this.look === "Pushable"){
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.weight = 1;
        this.pushable = true;
        this.collides = function(person){
                return true;
        };
    }
    if(this.look === "Plains Water"){
        this.water = true;
        this.threeD = false;
    }
    if(this.look === "Plains Tall Tree"){
        this.threeD = true;
    }
};
Platform.prototype.draw = function() {
    switch(this.look){
        case "Black":{
            fill(0);
            rectMode(CORNER);
            rect(this.x, this.y, this.width, this.height);
        }break;
        case "Pushable":{
            fill(150);
            rectMode(CORNER);
            rect(this.x, this.y, this.width, this.height);
        }break;
        case "Door":{
            fill(117, 78, 0);
            rectMode(CORNER);
            rect(this.x, this.y, this.width, this.height);
        }break;
        case "Plains Water":{
            imageMode(CORNER);
            if(this.width % 40 === 0 && this.height % 40 === 0){
                for(var a = 0; a < this.height/40; a ++){
                    for(var b = 0; b < this.width/40; b ++){
                        image(textures.plains.water, this.x + b * 40, this.y + a * 40, 41, 41);
                    }
                }
            }
            else{
                image(textures.plains.water, this.x, this.y, this.width, this.height);
            }
        }break;
        case "Plains Tall Tree":{
            imageMode(CORNER);
            if(this.width % 40 === 0 && this.height % 40 === 0){
                for(var a = 0; a < this.height/40; a ++){
                    for(var b = 0; b < this.width/40; b ++){
                        textures.plains.tree.tall(this.x + b * 40, this.y + a * 40);
                        //image(textures.plains.tree.tall, this.x + b * 40, this.y + a * 40, 41, 41);
                    }
                }
            }
            else{
                textures.plains.tree.tall(this.x, this.y);
                //image(textures.plains.tree.tall, this.x, this.y, this.width, this.height);
            }
        }break;
        case "Portal":{
            fill(105 + cos(frameCount) * 150, 55 + sin(frameCount * 2) * 200, 0);
            rectMode(CORNER);
            rect(this.x, this.y, this.width, this.height);
        }break;
    }
};
Platform.prototype.drawOver = function() {
    switch(this.look){
        case "Black":{
            fill(50);
            rectMode(CORNER);
            rect(this.x, this.y - this.height, this.width, this.height);
        }break;
        case "Door":{
            fill(117, 78, 0);
            rectMode(CORNER);
            rect(this.x, this.y, this.width, this.height);
        }break;
        case "Portal":{
            fill(105 + cos(frameCount) * 150, 55 + sin(frameCount * 2) * 200, 0);
            rectMode(CORNER);
            rect(this.x, this.y, this.width, this.height);
        }break;
    }
};
Platform.prototype.collide = function(other) {
    other.xx = other.x + other.xSpeed;
    other.yy = other.y + other.ySpeed;
    if(other.xx + other.width > this.x && other.xx < this.x + this.width && other.yy + other.height > this.y && other.yy < this.y + this.height){
        if(this.effect(other)){
            
        }
        else if(this.water){
            other.xSpeed *= 0.5;
            other.ySpeed *= 0.5;
        }
        else{
            if(other.xx + other.width <= this.x + (other.xSpeed * 2) && other.xSpeed > 0){
                other.xSpeed = this.x - (other.x + other.width);
                other.ySpeed *= 0.5;
                //other.wallJump = "left";
            }
            if(other.xx >= this.x + this.width + (other.xSpeed * 2) && other.xSpeed < 0){
                other.xSpeed = (this.x + this.width) - other.x;
                other.ySpeed *= 0.5;
                //other.wallJump = "right";
            }
            if(other.yy >= this.y + this.height + (other.ySpeed * 2) && other.ySpeed < 0){
                other.ySpeed = (this.y + this.height) - other.y;
            }
            if(other.yy + other.height <= this.y + (other.ySpeed * 2) && other.ySpeed > 0){
                other.canJump = other.jumpTime;
                other.xSpeed *= 0.9;
                other.ySpeed = this.y - (other.y + other.height);
            }
        }
    }
};
Platform.prototype.move = function(){
    this.xSpeed *= 0.5;
    this.ySpeed *= 0.5;
    this.xSpeed = constrain(this.xSpeed, -15, 15);
    this.ySpeed = constrain(this.ySpeed, -15, 15);
    for(var p = 0; p < platforms.length; p ++){
        if(platforms[p].pushable){
            platforms[p].pushCollide(this);
        }
        else{
            platforms[p].collide(this);
        }
    }
    for(var p = 0; p < people.length; p ++){
        people[p].collide(this);
    }
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.x = constrain(this.x, 0, 1000 - this.width);
    this.y = constrain(this.y, 0, 1000 - this.height);
};
Platform.prototype.pushCollide = function(other) {
    other.xx = other.x + other.xSpeed;
    other.yy = other.y + other.ySpeed;
    if(other.xx + other.width > this.x && other.xx < this.x + this.width && other.yy + other.height > this.y && other.yy < this.y + this.height){
        if(other !== this){
            if(other.xx + other.width <= this.x + (other.xSpeed * 2) && other.xSpeed > 0){
                this.xSpeed += other.xSpeed/this.weight;
                other.xSpeed = this.x - (other.x + other.width);
                other.ySpeed *= 0.5;
            }
            if(other.xx >= this.x + this.width + (other.xSpeed * 2) && other.xSpeed < 0){
                this.xSpeed += other.xSpeed/this.weight;
                other.xSpeed = (this.x + this.width) - other.x;
                other.ySpeed *= 0.5;
            }
            if(other.yy >= this.y + this.height + (other.ySpeed * 2) && other.ySpeed < 0){
                this.ySpeed += other.ySpeed/this.weight;
                other.ySpeed = (this.y + this.height) - other.y;
            }
            if(other.yy + other.height <= this.y + (other.ySpeed * 2) && other.ySpeed > 0){
                this.ySpeed += other.ySpeed/this.weight;
                other.canJump = other.jumpTime;
                other.xSpeed *= 0.9;
                other.ySpeed = this.y - (other.y + other.height);
            }
        }
    }
};
Platform.prototype.isColliding = function(other) {
    if(this.water){
        return false;
    }
    other.xx = other.x ;
    other.yy = other.y;
    if(other.xx + other.width > this.x && other.xx < this.x + this.width && other.yy + other.height > this.y && other.yy < this.y + this.height){
        return true;
    }
    else{
        return false;
    }
};
Platform.prototype.isCollidingOver = function(other) {
    other.xx = other.x ;
    other.yy = other.y;
    if(other.xx + other.width > this.x && other.xx < this.x + this.width && other.yy + other.height > this.y && other.yy < this.y + this.height){
        return true;
    }
    else{
        return false;
    }
};//WIP
//}Platform
//}OOP (including attacks, people, and blocks)
var aGUI = function(){
    var selected = data.get_value("hotkey selected");
    fill(69, 69, 69);
    noStroke();
    rectMode(CORNER);
    rect(0, 550, 600, 50);
    rect(0,0,600,80);
    fill(69, 69, 69,120);
    rect(0,0,600,100);
    rect(0,0,600,95);
    rect(0,0,600,90);
    rect(0,0,600,85);
    
    textAlign(LEFT, TOP);
    textSize(12);
    fill(0);
    text("Energy Points: " + player.ep, 0, 550);
    textAlign(CENTER,CENTER);
    textSize(15);
    rectMode(CORNER);
    player.hotkeyPowers = data.get_value("hotkey powers");
    for(var i = 0; i < player.hotkeyPowers.length; i++){
        if(keys[i + 49]){
            data.set_value("hotkey selected", i);     
        }
        var ent = player.hotkeyPowers[i];
        fill(2, 135, 35);
        rect(5+i*120,0,116,28);
        fill(214, 214, 214);
        if(ent.stats.name.length > 15){
            textSize(12);
            text(ent.stats.name,63+i*120,12);
        }
        else{
            textSize(15);
            text(ent.stats.name,63+i*120,12);
        }
        fill(150, 150, 150);
        rect(5+i*120,32,116,50);
        fill(2, 133, 6);
        if(ent.reload > 0){
            ent.reload -= 1;
            rect(5+i*120,80,116 - (ent.reload/ent.stats.reloadTime)*116,9);
        }
        else{
            rect(5+i*120,80,116,9);
        }
        if(mouseX > 5+i*120 && mouseX < (5+i*120)+116 && mouseY < 92){
            stroke(242, 242, 242);
            
            noFill();
            
            strokeWeight(5);
            
            rect(2+i*120,-5,120,95,6);
            
            noStroke();
            if(mouseIsPressed){
                
                data.set_value("hotkey selected", i);
                
            }
            fill(194, 194, 194);
            
            rect(485,0,130,92);
            
            fill(84, 84, 84);
            
            if(ent.stats.name.length > 15){
                textSize(10);
                text(ent.stats.name,540,11);
            }
            else{
                textSize(15);
                text(ent.stats.name,540,11);
                
            }
            
            textSize(14);
            text(ent.stats.damage,540,25);
            if(i === 3){
                textSize(10);
                text("Durability: " + (ent.stats.durability - ent.inv.hits),540,35);
            }
            textSize(9);
            text(ent.stats.description,490,30, 110, 60);
        }
        textSize(15);
        fill(74, 74, 74);
        text(ent.stats.type,63+i*120,45);
        
        
        //if(keyIsPressed){
            
            //typed = true;
            
        //}
        
        //if(keyCode === 49 && typed){
            
            //selected = 0;
            
            //typed = false;
            
            
            
            
        //}
        //if(keyCode === 50 && typed){
            
            //selected = 1;
            
            //typed = false;
            
            
            
            
        //}
        //if(keyCode === 51 && typed){
            
            //selected = 2;
            
            //typed = false;
            
            
            
            
        //}
        //if(keyCode === 52 && typed){
            
            //selected = 3;
            
            //typed = false;
            
            
            
            
        //}
    
    }
        
    fill(255, 255, 255,100);
    rect(5+selected*120,32,115,56);
    rect(5+selected*120,0,116,28);
    
};//The GUI
people.push(new Person(200, 400, 25, 25, "player"));
player = people[0];
var loadI = 0;
var loadJ = 0;
//var player={x:0,y:0,ltilex:0,ltiley:0,stilex:0,stiley:0};
var tileloc=function(){
    player.ltilex=floor(player.x/1200);//assuming maps are 1200 pixel squares, this is which of the large maps the player is in
    player.ltiley=floor(player.y/1200);
    //player.stilex=floor((player.x%1200)/60);//assuming tiles are 60 pixel squares.
    //player.stiley=floor((player.y%1200)/60);
};
var draw = function() {
    randomSeed(millis());
    try{
    switch(scene){
        case "load1":{
            if(loadI < maps.length){
                if(loadJ < maps[loadI].length){
                    if (maps[loadI][loadJ]<1){
                            littlemap=cloneObject(presetmaps[maps[loadI][loadJ]*1000]);
                            littlemap.x = loadJ * 1200;
                            littlemap.y = loadI * 1200;
                    }else if(maps[loadI][loadJ]!==undefined){
                        littlemap=[
                        [,,,,,,,,,,,,,,,,,,,,],    
                        [,,,,,,,,,,,,,,,,,,,,], 
                        [,,,,,,,,,,,,,,,,,,,,], 
                        [,,,,,,,,,,,,,,,,,,,,], 
                        [,,,,,,,,,,,,,,,,,,,,], 
                        [,,,,,,,,,,,,,,,,,,,,], 
                        [,,,,,,,,,,,,,,,,,,,,], 
                        [,,,,,,,,,,,,,,,,,,,,], 
                        [,,,,,,,,,,,,,,,,,,,,], 
                        [,,,,,,,,,,,,,,,,,,,,],
                        [,,,,,,,,,,,,,,,,,,,,],    
                        [,,,,,,,,,,,,,,,,,,,,], 
                        [,,,,,,,,,,,,,,,,,,,,], 
                        [,,,,,,,,,,,,,,,,,,,,], 
                        [,,,,,,,,,,,,,,,,,,,,], 
                        [,,,,,,,,,,,,,,,,,,,,], 
                        [,,,,,,,,,,,,,,,,,,,,], 
                        [,,,,,,,,,,,,,,,,,,,,], 
                        [,,,,,,,,,,,,,,,,,,,,], 
                        [,,,,,,,,,,,,,,,,,,,,]
                        ];//yes I tried making these zeros
                    }//preset map or make blank map or dont
                    for(var k=0;k<littlemap.length;k++){
                        for(var l=0;l<littlemap[k].length;l++){
                            if(littlemap[k][l]===undefined){
                                littlemap[k][l]=floor(random(0,9));
                            }
                        }
                    }
                    maps[loadI][loadJ]=littlemap;
                    loadJ ++;
                }
                else{
                    loadJ = 0;
                    loadI ++;
                }
            }
            else{
                scene = "load2";
                loadI = 0;
                loadJ = 0;
            }
            loadingScreen((loadI/maps.length) * 50);
        }break;
        case "load2":{
            /*
            if(loadI < maps.length){
                map_img.push([,,,,,,,,,,,,,,,,]);
                if(loadJ < maps[loadI].length){
                    if(maps[loadI][loadJ]!==undefined){
                        background(0, 0, 0);
                        for(var k=0;k<maps[loadI][loadJ].length;k++){
                            for(var l=0;l<maps[loadI][loadJ][k].length;l++){
                                if (maps[loadI][loadJ][k][l]>2){
                                    fill(255, 255, 255);
                                    rect(k*30,l*30,30,30);
                                }
//draw everything here once you've put in images with width/height 30 based on maps[i][j][k][l]
                            }  
                        }

                        map_img[loadI][loadJ]=get();
                    }else{
                        background(0,0,0);
                        map_img[loadI][loadJ]=get();
                    }
                    loadJ ++;
                }
                else{
                    loadJ = 0;
                    loadI ++;
                }
            }
            else{
                //println("DONE FOR REAL THIS TIME");
                scene = "Play";
                loadDone = true;
                loadI = 0;
                loadJ = 0;
            }
            */
            switch(loadI){
                case 0:{
                    for(var i = 0; i < 15; i ++){
                        for(var j = 0; j < 15; j ++){
                            var randNum = random(0, 3);
                            if(randNum <= 1.5){
                                image(textures.plains.ground1, i * 40, j * 40, 40, 45);
                            }
                            else if(randNum <= 2){
                                image(textures.plains.ground2, i * 40, j * 40, 40, 45);
                            }
                            else{
                                image(textures.plains.ground3, i * 40, j * 40, 40, 45);
                            }
                        }
                    }
                    backgroundImgs.plains.norm1 = get();
                }break;
                case 1:{
                    //noiseDetail(3, 0.5);
                    for(var i = 0; i < 15; i ++){
                        for(var j = 0; j < 15; j ++){
                            var randNum = noise(i/5, 3 + j/5);
                            if(randNum <= 0.45){
                                image(textures.plains.ground1, i * 40, j * 40, 40, 45);
                            }
                            else if(randNum <= 0.5){
                                image(textures.plains.ground3, i * 40, j * 40, 40, 45);
                            }
                            else{
                                image(textures.plains.ground2, i * 40, j * 40, 40, 45);
                            }
                        }
                    }
                    backgroundImgs.plains.norm2 = get();
                }break;
                
            }
            loadI ++;
            if(loadI >= 2){
                scene = "Play";
                loadDone = true;
                loadI = 0;
                loadJ = 0;
            }
            loadingScreen(50 + (loadI/2) * 50);
        }break;
        case "Play":{
            megaArray = [];
            background(0, 200, 0);
            player.oldMaps = player.newMaps || [];
            tileloc();
            pushMatrix();
            cam = {x:constrain(300 - player.x, -99999, 0), y:constrain(300 - player.y, -99999, 80)};
            //translate(100, 100);
            translate(cam.x/* + 300*/, cam.y/* + 300*/);
            //scale(0.1);
            //translate(-cam.x * 4 - 300, -cam.y * 4 - 300);
            player.newMaps = [];
            for(var i = constrain(player.ltilex - 1, 0, 1000); i <= constrain(player.ltilex + 1, 0, 2); i ++){
                //println(maps[player.ltilex][i]);
                for(var j = constrain(player.ltiley - 1, 0, 1000); j <= constrain(player.ltiley + 1, 0, 2); j ++){
                    player.newMaps.push(maps[j][i]);
                }
            }
            for(var i = 0; i < player.oldMaps.length; i ++){
                if(!player.newMaps.includes(player.oldMaps[i])){
                    killMap(player.oldMaps[i]);
                }
            }
            for(var i = 0; i < player.newMaps.length; i ++){
                player.newMaps[i].background(player.newMaps[i]);
            }
            for(var i = platforms.length - 1; i >= 0; i --){
                var ent = platforms[i];
                //ent.draw();
                if(ent.pushable){
                    ent.move();
                }
                if(dist(ent.x, ent.y, player.x, player.y) >= 4000){
                    ent.dead = true;
                }
                if(ent.dead){
                    platforms.splice(i, 1);
                    continue;
                }
                if(ent.threeD){
                    megaArray.push(ent);
                }
                else{
                    ent.draw();
                }
            }
            for(var i = people.length - 1; i >= 0; i --){
                var ent = people[i];
                //ent.draw();
                ent.move();
                if(ent.health <= 0){
                    if(ent.person !== "player"){
                        ent.deadEffect();
                        if(ent.health <= 0){
                            if(ent.person === "The Non-pirate" || ent.person === "The Non-pirate Fight"){
                                data.set_property("characters spawned", "np", false);
                            }
                            for(var d = 0; d < ent.drops.length; d ++){
                                var col = ent.drops[d];
                                collectibles.push(new Collectible(ent.x + ent.width/2 + random(-ent.width, ent.width), ent.y + ent.height/2 + random(-ent.height, ent.height), col.name, col.extra));
                            }
                            people.splice(i, 1);
                            continue;
                        }
                    }
                }
                megaArray.push(ent);
            }//Put everything that gets drawn in a mega-array in order to sort that array then draw them in that array.
            for(var i = collectibles.length - 1; i >= 0; i --){
                var ent = collectibles[i];
                //ent.draw();
                if(ent.dead){
                    collectibles.splice(i, 1);
                    continue;
                }
                megaArray.push(ent);
            }
            for(var i = bullets.length - 1; i >= 0; i --){
                var ent = bullets[i];
                //ent.draw();
                if(ent.dead){
                    bullets.splice(i, 1);
                    continue;
                }
                megaArray.push(ent);
            }
            megaArray.sort(function(a,b) { return (b.y + (b.height/2 || 0)) - (a.y + (a.height/2 || 0)); });
            for(var i = megaArray.length - 1; i >= 0; i --){
                var ent = megaArray[i];
                ent.draw();
            }
            popMatrix();
            if(player.inkedTime > 0){
                fill(0, player.inkedTime * 2);
                ellipse(300, 300, 50, 50);
                ellipse(150, 200, 80, 60);
                ellipse(144, 447, 74, 87);
                ellipse(480, 368, 83, 38);
                ellipse(357, 27, 53, 70);
                ellipse(136, 231, 46, 64);
                ellipse(499, 107, 94, 32);
                ellipse(69, 472, 80, 32);
                ellipse(359, 39, 89, 81);
                ellipse(491, 58, 88, 73);
                ellipse(360, 380, 49, 83);
                ellipse(142, 76, 57, 79);
                ellipse(223, 268, 57, 37);
                ellipse(33, 482, 74, 86);
                ellipse(81, 458, 86, 61);
                ellipse(128, 570, 48, 79);
                ellipse(67, 468, 54, 32);
                ellipse(78, 161, 40, 70);
                ellipse(289, 195, 64, 77);
                ellipse(366, 550, 85, 77);
                ellipse(316, 479, 49, 71);
                ellipse(88, 50, 61, 70);
                ellipse(522, 558, 55, 96);
                ellipse(207, 88, 78, 40);
                ellipse(563, 466, 92, 40);
                ellipse(369, 104, 79, 91);
                ellipse(204, 351, 59, 97);
                ellipse(100, 153, 49, 36);
                ellipse(236, 571, 30, 38);
                ellipse(153, 497, 89, 60);
                ellipse(29, 498, 86, 32);
                ellipse(231, 339, 47, 71);
                ellipse(220, 120, 95, 53);
                ellipse(297, 444, 57, 36);
                ellipse(553, 518, 37, 97);
                ellipse(171, 461, 37, 70);
                ellipse(331, 138, 82, 70);
                ellipse(360, 254, 80, 66);
                ellipse(310, 547, 61, 55);
                ellipse(187, 558, 56, 60);
                ellipse(529, 231, 72, 31);
                ellipse(228, 81, 55, 69);
                ellipse(44, 339, 37, 63);
                ellipse(545, 483, 76, 67);
                ellipse(224, 99, 65, 84);
                ellipse(312, 542, 70, 46);
                ellipse(384, 454, 56, 87);
                ellipse(510, 406, 38, 37);
                ellipse(498, 215, 57, 93);
                ellipse(474, 533, 42, 58);
                ellipse(413, 72, 95, 67);
                ellipse(519, 503, 87, 80);
            }
            aGUI();
            if(sayingRect){
                rectMode(CENTER);
                fill(150);
                rect(300, 550, 600, 100);
                fill(0);
                textAlign(LEFT, TOP);
                textSize(14);
                text(sayingRect, 0, 500, 600, 100);
            }
            for(var i = 0; i < player.newMaps.length; i ++){
                if(!player.newMaps[i].initialized){
                    player.newMaps[i].make(player.newMaps[i]);
                }
            }
            sayingRect = false;
            if(scene !== "Play"){
                getBackground = get();
            }
        }break;
        case "Hotbar Choose":{
            strokeWeight(1);
            var hotkeyPowers = data.get_value("hotkey powers");
            imageMode(CORNER);
            image(getBackground, 0, 0);
            fill(255, 200);
            rectMode(CORNER);
            rect(-1, -1, 602, 602);
            fill(0);
            textAlign(CENTER, TOP);
            textSize(30);
            text("CHOOSE POWERS", 300, 0);
            textSize(12);
            text("Mouse over a power, then push 1, 2, or 3 to set the power in that hotbar slot.", 300, 50);
            var powersUnlocked = data.get_value("attacks unlocked");
            textAlign(CENTER, TOP);
            textSize(10);
            var boxesOnRow = 5;
            for(var i = 0; i < powersUnlocked.length; i ++){
                var ent = powersUnlocked[i];
                noFill();
                stroke(0);
                if(mouseX > (i % boxesOnRow) * 100 + 50 && mouseX < (i % boxesOnRow) * 100 + 130 && mouseY > floor(i/boxesOnRow) * 50 + 100 && mouseY < floor(i/boxesOnRow) * 50 + 140){
                    fill(0, 50);
                    if(keys[49]){
                        data.set_property("hotkey powers", 0, {stats:ent, reload:ent.reloadTime});
                        if(hotkeyPowers[1].stats === ent){
                            data.set_property("hotkey powers", 1, {stats:attacks[2], reload:0});
                        }
                        if(hotkeyPowers[2].stats === ent){
                            data.set_property("hotkey powers", 2, {stats:attacks[2], reload:0});
                        }
                    }
                    if(keys[50]){
                        data.set_property("hotkey powers", 1, {stats:ent, reload:ent.reloadTime});
                        if(hotkeyPowers[0].stats === ent){
                            data.set_property("hotkey powers", 0, {stats:attacks[2], reload:0});
                        }
                        if(hotkeyPowers[2].stats === ent){
                            data.set_property("hotkey powers", 2, {stats:attacks[2], reload:0});
                        }
                    }
                    if(keys[51]){
                        data.set_property("hotkey powers", 2, {stats:ent, reload:ent.reloadTime});
                        if(hotkeyPowers[1].stats === ent){
                            data.set_property("hotkey powers", 1, {stats:attacks[2], reload:0});
                        }
                        if(hotkeyPowers[0].stats === ent){
                            data.set_property("hotkey powers", 0, {stats:attacks[2], reload:0});
                        }
                    }
                }
                rect((i % boxesOnRow) * 100 + 50, floor(i/boxesOnRow) * 50 + 100, 90, 40);
                fill(0);
                text(ent.name, (i % boxesOnRow) * 100 + 95, floor(i/boxesOnRow) * 50 + 100);
                if(hotkeyPowers[0].stats === ent){
                    text("Hotbar slot 1", (i % boxesOnRow) * 100 + 95, floor(i/boxesOnRow) * 50 + 120);
                }
                else if(hotkeyPowers[1].stats === ent){
                    text("Hotbar slot 2", (i % boxesOnRow) * 100 + 95, floor(i/boxesOnRow) * 50 + 120);
                }
                else if(hotkeyPowers[2].stats === ent){
                    text("Hotbar slot 3", (i % boxesOnRow) * 100 + 95, floor(i/boxesOnRow) * 50 + 120);
                }
                
            }
            if(keys[32]){
                scene = "Play";
                keys[32] = false;
            }
            
        }break;//Power selection
        case "Weapon Choose":{
            strokeWeight(1);
            var hotkeyPowers = data.get_value("hotkey powers");
            imageMode(CORNER);
            image(getBackground, 0, 0);
            fill(255, 200);
            rectMode(CORNER);
            rect(-1, -1, 602, 602);
            fill(0);
            textAlign(CENTER, TOP);
            textSize(30);
            text("SELECT WEAPON", 300, 0);
            textSize(12);
            text("Click on a weapon to equip or de-equip it.", 300, 50);
            var powersUnlocked = data.get_value("weapon inventory");
            textAlign(CENTER, TOP);
            textSize(10);
            var boxesOnRow = 10;
            for(var i = 0; i < powersUnlocked.length; i ++){
                var ent = powersUnlocked[i].stats;
                if(powersUnlocked[i].number <= 0){
                    if(hotkeyPowers[3].stats === ent){
                        data.set_property("hotkey powers", 3, {stats:weaponAttacks[0], reload:weaponAttacks[0].reloadTime, inv:{hits:0}});
                    }
                    data.splice_array("weapon inventory", i, 1);
                    continue;
                }
                noFill();
                stroke(0);
                if(mouseX > (i % boxesOnRow) * 100 + 50 && mouseX < (i % boxesOnRow) * 100 + 140 && mouseY > floor(i/boxesOnRow) * 50 + 100 && mouseY < floor(i/boxesOnRow) * 50 + 140){
                    fill(0, 50);
                    if(mouseIsClicked){
                        if(hotkeyPowers[3].stats === ent){
                            data.set_property("hotkey powers", 3, {stats:weaponAttacks[0], reload:weaponAttacks[0].reloadTime, inv:{hits:0}});
                        }
                        else{
                            data.set_property("hotkey powers", 3, {stats:ent, reload:ent.reloadTime, inv:powersUnlocked[i]});
                        }
                    }
                }
                rect((i % boxesOnRow) * 100 + 50, floor(i/boxesOnRow) * 50 + 100, 90, 40);
                fill(0);
                text(ent.name + "\nAmount: " + powersUnlocked[i].number, (i % boxesOnRow) * 100 + 95, floor(i/boxesOnRow) * 50 + 100);
                if(hotkeyPowers[3].stats === ent){
                    text("Equipped", (i % boxesOnRow) * 100 + 95, floor(i/boxesOnRow) * 50 + 125);
                }
                
                
            }
            if(keys[16]){
                scene = "Play";
                keys[16] = false;
            }
            
        }break;//Weapon selection
    }
    }
    catch(err){
        println(err);
    }
    mouseIsClicked = false;
};
}};

  // Get the canvas that ProcessingJS will use
  var canvas = document.getElementById("mycanvas"); 
  // Pass the function to ProcessingJS constructor
  var processingInstance = new Processing(canvas, programCode);
