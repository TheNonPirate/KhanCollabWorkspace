
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
                bullets.push(new Bullet(person.x + 27, person.y - 10 + sin(radians(frameCount))*2, atan2((mouseY - (cam.y)) - (person.y - 10 + sin(radians(frameCount))*2), (mouseX - (cam.x)) - (person.x + 27)), "fist", person));
            }
            else{
                bullets.push(new Bullet(person.x - 8, person.y - 10 + sin(radians(frameCount))*2, atan2((mouseY - (cam.y)) - (person.y - 10 + sin(radians(frameCount))*2), (mouseX - (cam.x)) - (person.x - 8)), "fist", person));
            }
        },
        reloadTime:8, durability:Infinity
    },
    {name:"Rusty Sword", type:"Sword", damage:"5 damage", description:"Stab with a stabby stick. A rather rusty, useless, stabby stick.",  
        attack:function(person){
            bullets.push(new Bullet(person.x + 27, person.y - 10 + sin(radians(frameCount))*2, atan2((mouseY - (cam.y)) - (person.y - 10 + sin(radians(frameCount))*2), (mouseX - (cam.x)) - (person.x + 27)), "rusty sword", person));
        },
        reloadTime:30, durability:30
    },
    {name:"Rusty Spear", type:"Spear", damage:"8 damage", description:"The new and improved stabby stick! Now a literal stick!",  
        attack:function(person){
            bullets.push(new Bullet(person.x + 27, person.y - 10 + sin(radians(frameCount))*2, atan2((mouseY - (cam.y)) - (person.y - 10 + sin(radians(frameCount))*2), (mouseX - (cam.x)) - (person.x + 27)), "rusty spear", person));
        },
        reloadTime:50, durability:35
    },
    {name:"Steel Sword", type:"Sword", damage:"15 damage", description:"A greatly improved stabby stick! With much more damage and durability!",  
        attack:function(person){
            bullets.push(new Bullet(person.x + 27, person.y - 10 + sin(radians(frameCount))*2, atan2((mouseY - (cam.y)) - (person.y - 10 + sin(radians(frameCount))*2), (mouseX - (cam.x)) - (person.x + 27)), "steel sword", person));
        },
        reloadTime:30, durability:100
    },
    {name:"Steel Spear", type:"Spear", damage:"25 damage", description:"A good, steel spear. Poke your enemies into oblivion.",  
        attack:function(person){
            bullets.push(new Bullet(person.x + 27, person.y - 10 + sin(radians(frameCount))*2, atan2((mouseY - (cam.y)) - (person.y - 10 + sin(radians(frameCount))*2), (mouseX - (cam.x)) - (person.x + 27)), "steel spear", person));
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
            this.speed = 3;
            this.width = 50;
            this.damage = 15;
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
                    var angle = radians(random(0, 360));
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
                    bullets.push(new Bullet(this.x + this.width/2, this.y + this.height/2, radians(a * 45), "mini pineapple", this.person));
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
                    bullets.push(new Bullet(this.x + this.width/2, this.y + this.height/2, radians(a * 45), "mini pineapple", this.person));
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
                        var rot = /*atan2(people[p].ySpeed, people[p].xSpeed)*/radians(90);
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
                burger(this.x + this.width/2, this.y + this.height/1.5,0.5-sin(radians(frameCount*30))*0.1,0.5+sin(radians(frameCount*30))*0.05);
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
            this.rotSpeed = radians(2);
            var a1 = atan2((player.y + player.height/2) - (this.y + this.height/2), (player.x + player.width/2) - (this.x + this.width/2));
            var a2 = atan2(sin(this.angle), cos(this.angle));
            if (abs(a2 - a1) <= this.rotSpeed) {
                this.angle = a1;
            } else {
                var a = (a1 - a2);
                a += a < 0? radians(360) : a >= radians(360) ? -radians(360) : 0;
                
                this.angle += a < radians(180)? this.rotSpeed : -this.rotSpeed;
                this.angle += this.angle < 0? radians(360) : this.angle >= radians(360) ? -radians(360) : 0;
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
            rustysword(this.x + this.width/3, this.y + this.height/1.5, this.angle + radians(90), 0.8);
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
            rustyspear(this.drawX + this.width/3, this.drawY + this.height/1.5, this.angle + radians(90), 0.8);
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
            steelsword(this.x + this.width/3, this.y + this.height/1.5, this.angle + radians(90), 0.8);
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
            steelspear(this.drawX + this.width/3, this.drawY + this.height/1.5, this.angle + radians(90), 0.8);
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
            
            rotate(radians(this.time*5));
            
            translate(-this.x,-this.y);
            
            fill(194, 117, 35,this.o+sin(radians(this.time*20))*255);
            
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
                
                rotate(radians((this.time-40)*dist(this.time,0,360,0)/1000));
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
            
            rect(50+sin(radians(this.time*5))*100,0,this.s/4,this.s/4);
            
            rect(-50+sin(radians(this.time*5))*100,0,this.s/4,this.s/4);
            
            rect(0,50+sin(radians(this.time*5))*100,this.s/4,this.s/4);
            
            rect(0,-50+sin(radians(this.time*5))*100,this.s/4,this.s/4);
            
            rect(50+cos(radians(this.time*5))*100,0,this.s/4,this.s/4);
            
            rect(-50+cos(radians(this.time*5))*100,0,this.s/4,this.s/4);
            
            rect(0,50+cos(radians(this.time*5))*100,this.s/4,this.s/4);
            
            rect(0,-50+cos(radians(this.time*5))*100,this.s/4,this.s/4);
            
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
                
                rotate(radians(a));
                
                rect(35,0,10,2);
                
            }
            rotate(radians(20+this.T*10));
            
            rect(15,0,30,2);
            
            rotate(radians(-20+this.T*10));
            
            rotate(radians(this.T/10));
            
            rect(15,0,30,2);
            
            rectMode(CORNER);
            
            fill(133, 0, 145,this.o-30);
            
            ellipse(0,0,this.s+sin(radians(this.T*5))*25,this.s+sin(radians(this.T*5))*25);
            
            ellipse(0,0,this.s+cos(radians(this.T*5))*25,this.s+cos(radians(this.T*5))*25);
            
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
            
            rotate(this.r);
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
            rotate(radians(this.T % 540)/1.5);
            translate(-this.x, -this.y);
            strokeWeight(this.s/16.66);//noLoop(); sign
            stroke(0, 0, 0);
            noFill();
            arc(this.x,this.y,this.s/1.5,this.s/1.5,0,radians(270));
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
            cannon(this.x, this.y, this.angle + radians(90), this.s, this.cVar);
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
            
            arc(0,0,1500,900,radians(-this.s),radians(this.s));
            
            ellipse(random(0,500),random(-45,45),10,10);
            
            ellipse(random(0,500),random(-45,45),10,10);
            
            ellipse(random(0,500),random(-45,45),10,10);
            
            popMatrix();
            if(!this.dead){
                for(var p = 0; p < people.length; p ++){
                    var a1 = atan2(people[p].y - this.y, people[p].x - this.x);
                    var a2 = atan2(sin(this.r), cos(this.r));
                    if((abs(a2 - a1) <= radians(14) && dist(this.x, this.y, people[p].x, people[p].y) <= 800&&this.T>20&&this.T<60) && people[p] !== this.person && ((!this.person.evil && people[p].evil) || (this.person.evil && !people[p].evil))){
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
            ellipse(0 + sin(radians(frameCount*5))*10 * this.theta + this.theta, 0 + this.theta, this.width, this.height);
            ellipse(0 + this.theta, 0 + sin(radians(frameCount*5))*10 * this.theta, this.width, this.height);
            ellipse(0 - sin(radians(frameCount*5))*10 * this.theta, 0 - sin(radians(frameCount*5))*10 * this.theta, this.width, this.height);
            
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
                bullets.push(new Bullet(this.x, this.y, this.angle + radians(random(-15, 15)), "loop letter", this.person));
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
            rbull(this.x + this.width/2, this.y + this.height/2.5, 1, this.angle + radians(90));
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
            rotbull(this.x + this.width/2, this.y + this.height/2.5, 1, radians(frameCount * 5));
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
            this.width = 25;
            this.height = 25;
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
            this.width = 25;
            this.height = 25;
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
            this.r = degrees(atan2(sin(this.r), cos(this.r)));
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
            this.r = degrees(atan2(sin(this.r), cos(this.r)));
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
            this.r = degrees(atan2(sin(this.r), cos(this.r)));
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
        
            arc(-0.5, 15, 50, 50 + this.h / 1.8, radians(180), radians(360)); //body
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
                bezier(this.x + -6, this.y + 10, this.x + 59, this.y - sin(radians(frameCount * -8)) * 20, this.x + -1, this.y + sin(radians(frameCount * -8)) * 20, this.x + 32, this.y + 15 + sin(radians(frameCount * 20)) * 1.5); //tail
                fill(7, 104, 222);
                ellipse(this.x, this.y, 30, 30);
        
                triangle(this.x + -14, this.y + -19, this.x + -13, this.y + -8, this.x + -9, this.y + -16); //ear
                triangle(this.x + 17, this.y + -21, this.x + 14, this.y + -8, this.x + 6, this.y + -14); //ear
        
                noStroke();
                fill(6, 35, 153);
                ellipse(this.x + 4, this.y + 9, 10, 20); //nosemouth thing
                ellipse(this.x + -3, this.y + -4, 5, 5);
                ellipse(this.x + 7, this.y + -4, 5, 5);
        
                rect(this.x + -21, this.y + 19 + sin(radians(frameCount * 16)) * 3, 20, 7,50, 50, 0, 0); //feet
                rect(this.x + 4, this.y + 19 + sin(radians(frameCount * 16)) * -3, 20, 7, 50, 50, 0, 0);
                popMatrix();
                fill(179, 98, 98);
                rect(0, -20, (this.health/this.maxHealth) * this.width * 1.5, 5);
            }
            if (this.ghosting) {
                pushMatrix();
                translate(0, this.ghostY);
                rotate(sin(radians(frameCount * 7)) * 60);
                //ghost
                strokeWeight(3);
                stroke(6, 35, 153, 50);
                noFill();
                bezier(-6, 10, 59, -sin(radians(frameCount * -8)) * 20, -1, sin(frameCount * -8) * 20, 32, 15 + sin(radians(frameCount * 20)) * 1.5); //tail
                fill(7, 104, 222, 50);
                ellipse(0, 0, 30, 30);
        
                triangle(-14, -19, -13, -8, -9, -16); //ear
                triangle(17, -21, 14, -8, 6, -14); //ear
                noStroke();
                fill(6, 35, 153, 50);
                ellipse(4, 9, 10, 20); //nosemouth thing
                ellipse(-3, -4, 5, 5);
                ellipse(7, -4, 5, 5);
        
                rect(-21, 19 + sin(radians(frameCount * 16)) * 3, 20, 7,50, 50, 0, 0); //feet
                rect(4, 19 + sin(radians(frameCount * 16)) * -3, 20, 7,50, 50, 0, 0);
        
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
                bezier(this.x + -12, this.y + -12, this.x + -2 + cos(radians(frameCount * 3)) * 2, this.y + 14, this.x + -10 + cos(radians(frameCount * 4)) * 6, this + 3, this.x + -17 + cos(radians(frameCount * 3)) * 5, this.y + 19);
        
                bezier(this.x + -11, this.y + -10, this.x + -26, this.y + 8, this.x + -5, this.y + 3, this.x + -12, this.y + 32);
                bezier(this.x + -8, this.y + -7, this.x + 1, this.y + 8, this.x + -7, this.y + 3, this.x + -3, this.y + 21);
                bezier(this.x + 1, this.y + -6, this.x + 12, this.y + 8, this.x + -7, this.y + 3, this.x + 7, this.y + 24);
        
                bezier(this.x + 7 + cos(radians(frameCount * 3)) * 5, this.y + -6, this.x + 12 + cos(radians(frameCount * 3)) * 5, this.y + 8, this.x + 2 + cos(radians(frameCount * 3)) * 5, this.y + 2, this.x + 16 + cos(radians(frameCount * 3)) * 5, this.y + 15);
                bezier(this.x + 9, this.y + -5 + sin(radians(frameCount * 3)) * 4, this.x + 22, this.y + 16 + sin(radians(frameCount * 3)) * 4, this.x + 3, this.y + 3 + sin(radians(frameCount * 3)) * 4, this.x + 16, this.y + 24 + sin(radians(frameCount * 3)) * 4);
                bezier(this.x + 12, this.y + -7 + sin(radians(frameCount * 3)) * 4, this.x + 33, this.y + 16 + sin(radians(frameCount * 3)) * 4, this.x + 15, this.y + 3 + sin(radians(frameCount * 3)) * 4, this.x + 24, this.y + 24 + sin(radians(frameCount * 3)) * 4);
                bezier(this.x + 3 + sin(radians(frameCount * 3)) * 4, this.y + -7, this.x + -6 + sin(radians(frameCount * 3)) * 4, this.y + 16, this.x + 10 + sin(radians(frameCount * 3)) * 4, this.y + 3, this.x + 0 + sin(radians(frameCount * 3)) * 4, this.y + 24);
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
                this.r = degrees(atan2(sin(this.r), cos(this.r)));
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
            this.r = degrees(atan2(sin(this.r), cos(this.r)));
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
                this.r = radians((frameCount * 5) % 360);
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
                this.r = radians((frameCount * 5) % 360);
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
                    this.r = radians((frameCount * 5) % 360);
                }
                if(this.health <= 10 && dist(target.x + target.width/2,target.y + target.height/2,this.x + this.width/2,this.y + this.height/2) < 250){
                    this.r += sin(radians(frameCount)) * 10;
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
                            this.r = radians((frameCount * 5) % 360);
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
                this.r = radians((frameCount * 5) % 360);
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
                this.r = radians((frameCount * 5) % 360);
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
                    this.r = radians((frameCount * 5) % 360);
                }
                this.xSpeed+=cos(this.r)*this.speed;
                this.ySpeed+=sin(this.r)*this.speed;
            }
            if(this.lookShoot){
                if(dist(target.x + target.width/2,target.y + target.height/2,this.x + this.width/2,this.y + this.height/2) <=this.maxRunRange){
                    this.r = atan2((target.y + target.height/2) - (this.y + this.height/2), (target.x + target.width/2) - (this.x + this.width/2)) + 180;
                    if(this.rotConfuse > 0){
                        this.r = radians((frameCount * 5) % 360);
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
                        this.r = radians((frameCount * 5) % 360);
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
                this.r = radians((frameCount * 5) % 360);
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
                this.r = radians((frameCount * 5) % 360);
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
                this.ySpeed += sin(radians(frameCount)) * this.speed;
                this.r = atan2(this.ySpeed, this.xSpeed);
            }
            if(this.reload <= 0){
                this.r = atan2((player.y + player.height/2) - (this.y + this.height/2), (player.x + player.width/2) - (this.x + this.width/2));
                if(this.rotConfuse > 0){
                    this.r = radians((frameCount * 5) % 360);
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
                this.r = radians((frameCount * 5) % 360);
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
            this.XSpeed += sin(radians(frameCount)) * this.speed;
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
            fill(105 + cos(radians(frameCount)) * 150, 55 + sin(frameCount * 2) * 200, 0);
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
            fill(105 + cos(radians(frameCount)) * 150, 55 + sin(radians(frameCount * 2)) * 200, 0);
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
