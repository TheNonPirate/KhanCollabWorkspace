var programCode = function(processingInstance) {
with (processingInstance) {
size(600, 600); 

/**
/-------------------\
|    ESCAPE (v2)    |
|  [Captain Argon]  |
\-------------------/

USING RENEGADE I ENGINE BY CAPTAIN ARGON

Began: 1/6/19, 00:00:00 UTC
Finished:
Released:
Total Time:

Credits
{
(NOTE: Everyone who played a role in developing this game, whether that was in the form of suggestions or major pieces of code, has received credit.)
> Non-Pirate (@nonpirate) for major game play suggestions, grammar corrections in the plotline, and more beyond that -- especially correcting the dumb mistakes I often made. He was the greatest help to this game, and without him, this game would look a lot different.
> Arnakt Fen (@stygiusdarkire) for other plotline suggestions. Although he has gone inactive and the plot was changed since then, the hours we spent commenting back and forth about literature and other such topics weren't wasted. Ti'Vah!
> Quantum Coding (@QuantumCodingSays) for being a beta tester. Thanks!
> Kruxe (@minigenius2) for checking through the code for inneficencies a few times. He offered great advice!
> Owen Foley (@owenpfoley) for some game play suggestions. Though he got in on the action later than Non-Pirate and Arnakt Fen, he still helped a lot.
> Pamela (@pamela) for her work constructing the programming courses here on KA. Without her, this project could never have occurred.
> OOPS! Studios! (@Cristianop1) made the loading algorithm I used in this game. It was far more efficient than the original basic image loading functionality I'd been planning on implementing.
> KWC (@MKaelin368) for the `construct()` function, which helps with some random thing (I think it helps patch memory leaks?) in the program, therefore ... making it more efficient? I'm not totally sure, to be honest. (Plus protection for long loops!)
> The Lightning Programmer (???) for typing in the delete key. He has since gone inactive.
> Sal Khan (@sal) for his awesome work on Khan Academy, and for reminding me I can use matrices to solve systems of linear equations!
> AquA217 (@acer217) for her help with testing the game in early stages.
> JentGent (@JentacularGent) for teaching me how to sort arrays from biggest to smallest and vice versa.
> Guilherme (KA Help Center) for helping me when I had a problem with line collisions. She lead me to a helpful KA article (https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:digital-information/x2d2f703b37b450a3:number-limits-overflow-and-roundoff/a/number-limits-overflow-and-roundoff) about how numbers are stored and how this affects some basic functionality. (For instance, 0.1 + 0.1 + 0.1 doesn't return 0.3; instead, it returns 0.30000000000000004!)
> Maverick (@CataclysmicDestruction) for some timely inspiration at a point when I was getting vaguely exasperated at this game.
> Ski (@thelegendski) for helping make certain array functions more efficient. (In a game of this size, this little things like that can really help performance!)
> Timothy (@ty11ty) for beta testing!
> Coder Guy (@KingCobraVenom) for beta testing!
> CZS (@theMinstrel) for beta testing and a piece of code to accurate find the height of a text box
}
**/

// Make servers a solid block so that you can't go in between them
// Make NPCs continue on path when they've wiped out an enemy

var codes = [
	[
		"Valik Tivian 1","8/26/23 at 11:43",["Valik","Tivian","Male",-336726,-9875401],[["EMPTY","EMPTY","EMPTY"],["EMPTY","EMPTY","EMPTY"],["EMPTY","EMPTY","EMPTY"],["EMPTY","EMPTY","EMPTY"],["EMPTY","EMPTY","EMPTY"],["EMPTY","EMPTY","EMPTY"],["EMPTY","EMPTY","EMPTY"],["EMPTY","EMPTY","EMPTY"],["LOCKED","LOCKED","LOCKED"],["LOCKED","LOCKED","LOCKED"],["LOCKED","LOCKED","LOCKED"],["LOCKED","LOCKED","LOCKED"],["LOCKED","LOCKED","LOCKED"],["LOCKED","LOCKED","LOCKED"]],["NONE","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY",],["NONE","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY",],0, 0,[],["cw",2],[],["Normal","Normal"],["Prisons",1]
	],
	[
		"Valik Tivian 2","8/26/23 at 11:50",["Valik","Tivian","Male",-336726,-9875401],[["Light Rounds","Ammo",60],["Light Rounds","Ammo",60],["Light Rounds","Ammo",60],[0,"Medical",4],["Light Rounds","Ammo",60],["Light Rounds","Ammo",60],[0,"Grenade",2],[1,"Medical",2],[3,"Medical",2],["Heavy Rounds","Ammo",50],["Heavy Rounds","Ammo",45],["EMPTY","EMPTY","EMPTY"],["LOCKED","LOCKED","LOCKED"],["LOCKED","LOCKED","LOCKED"]],[4,[2,1],[10,1],[5,0],[4,2],"EMPTY",],[7,"EMPTY","EMPTY","EMPTY","EMPTY",[0,2],],2, 2,[],["health",235.75710322485145,"stim",41.860067545031434,"armor",2],[],["Normal","Normal"],["Infirmary",0]
	],
	[
		"Valik Tivian 3","8/26/23 at 16:18",["Valik","Tivian","Male",-336726,-9875401],[["Light Rounds","Ammo",60],["Light Rounds","Ammo",60],[0,"Medical",4],[1,"Medical",2],[3,"Medical",1],["Heavy Rounds","Ammo",50],["Heavy Rounds","Ammo",45],[["Stock","Tactical Stock"],"Attachment",2],[["Magazine","Quickdraw Mag"],"Attachment",1],[["Magazine","Extended Mag"],"Attachment",2],["Light Rounds","Ammo",60],[0,"Grenade",2],["LOCKED","LOCKED","LOCKED"],["LOCKED","LOCKED","LOCKED"]],[4,[2,1],[10,1],[5,0],[4,2],"EMPTY",],[7,"EMPTY","EMPTY","EMPTY","EMPTY",[1,0],],2, 2,[],["health",107.31657881274872,"stim",91.09794144153565,"cw",1,"mselect",2],[],["Normal","Normal"],["Defenses",0]
	],
	[
		"Valik Tivian 4","8/27/23 at 11:45",["Valik","Tivian","Male",-336726,-9875401],[["Light Rounds","Ammo",60],["Light Rounds","Ammo",16],[0,"Medical",4],[1,"Medical",1],[3,"Medical",1],["Heavy Rounds","Ammo",50],["Heavy Rounds","Ammo",50],[["Stock","Tactical Stock"],"Attachment",2],[["Magazine","Extended Mag"],"Attachment",2],[0,"Grenade",2],["Heavy Rounds","Ammo",33],["EMPTY","EMPTY","EMPTY"],["LOCKED","LOCKED","LOCKED"],["LOCKED","LOCKED","LOCKED"]],[4,[2,1],[10,1],[8,1],[4,2],"EMPTY",],[7,"EMPTY","EMPTY",[6,2],"EMPTY",[1,0],],2, 2,[],["stim",29.742287094077916,"armor",2,"armorhealth",110],[],["Normal","Normal"],["Hangars",0]
	],
];

// UNCOMMENT THE FOLLOWING "/*" TO PLAY

// "PJS SETUP" {
noStroke();
textAlign(CENTER, CENTER);
rectMode(CENTER);
imageMode(CENTER);
smooth();
var setTimeout = function(time) {
    this[["KAInfiniteLoopSetTimeout"]](time);
    this[["KAInfiniteLoopCount"]] = -Infinity;
};
setTimeout(10000);
(function () { this.$("body").css("overflow", "hidden"); }) ();
//} END "PJS SETUP"

// "MAIN VARIABLES" {
// (1) "BASIC ARRAYS/OBJECTS" {
var fonts = {
    TimesNewRoman8: createFont("Times New Roman", 8),
    TimesNewRoman9: createFont("Times New Roman", 9),
    TimesNewRoman10: createFont("Times New Roman", 10),
    TimesNewRoman11: createFont("Times New Roman", 11),
    TimesNewRoman12: createFont("Times New Roman", 12),
    Calibri10: createFont("Calibri", 10),
    Calibri11: createFont("Calibri", 11),
    Calibri12: createFont("Calibri", 12),
    Calibri14: createFont("Calibri", 14),
    Calibri15: createFont("Calibri", 15),
    Calibri18: createFont("Calibri", 18),
    Calibri20: createFont("Calibri", 20),
    Calibri12Italics: createFont("Calibri Italics", 12),
    Calibri14Italics: createFont("Calibri Italics", 14),
    Calibri18Italics: createFont("Calibri Italics", 18),
    CalibriBold14: createFont("Calibri Bold", 14),
    CalibriBold18: createFont("Calibri Bold", 18),
    EurostileBold22: createFont("Eurostile Bold", 22),
    AgencyFB6: createFont("Agency FB Bold", 6),
    AgencyFB14: createFont("Agency FB Bold", 14),
    AgencyFB20: createFont("Agency FB Bold", 20),
    AgencyFB25: createFont("Agency FB Bold", 25),
    AgencyFB30: createFont("Agency FB Bold", 30),
    AgencyFB36: createFont("Agency FB Bold", 36),
    AgencyFB40: createFont("Agency FB Bold", 40),
    AgencyFB100: createFont("Agency FB Bold", 100),
    AgencyFB20Italics: createFont("Agency FB Italics", 20),
    AgencyFB20Simple: createFont("Agency FB", 20),
    CenturyGothic12: createFont("Century Gothic", 12),
    CenturyGothic30: createFont("Century Gothic", 30),
    CenturyGothic35: createFont("Century Gothic", 35),
    CenturyGothic40: createFont("Century Gothic", 40),
}, commandKeys = {
    up: [87, "W", "Move Up"],
    left: [65, "A", "Move Left"],
    down: [83, "S", "Move Down"],
    right: [68, "D", "Move Right"],
    scope: [SHIFT, "Shift", "Open Scope"],
    reload: [82, "R", "Reload"],
    attack: ["LMB", "Left Mouse Button", "Attack"],
    drop: ["RMB", "Right Mouse Button", "Drop Loot"],
    pickUp: [70, "F", "Pick Up Item"],
    use: [84, "T", "Use"],
    firstWeapon: [81, "Q", "Select Weapon 1"],
    secondWeapon: [69, "E", "Select Weapon 2"],
    melee: [86, "V", "Select Melee"],
    meds: [67, "C", "Medical Supplies"],
    grenade: [71, "G", "Grenades"],
    cancel: [88, "X", "Cancel Action"],
    inventory: [90, "Z", "Open Inventory"],
    datapad: [77, "M", "Open Datapad"],
    menu: [80, "P", "Pause"],
}, keys = [], enemies = [], allies = [], squads = [], walls = [], bullets = [], booms = [], boom, bombs = [], smokeClouds = [], objectives = [], tips = [], allLoot = [], weathers = [], weathers2 = [], UIpieces = [], UIpiecesInventory = [], UIpiecesDatapad = [], UIpiecesPause = [], UIpiecesPause2 = [], boxes = [], levelEnds = [], cliffs = [], debriz = [], debris, datapadOn = 0, gunFocusingOn = 0, doors = [], computers = [], turrets = [], usingConsole = "NOT", canPressT = true, allLetters = "abcdefghijklmnopqrstuvwxyz1234567890-=[];',./~!@#$%^&*()_+{}:\"<>?|\\ ", allLetters2 = "abcdefghijklmnopqrstuvwxyz1234567890-'", backgroundImage, backgroundImage2, datapadOn = 0, seeTarget, rectArc, inBox, checkLock, rectCircle, transition = [false, 0, "", "Fade", 10], playerInfo = ["Valik", "Tivian", "Male"], gameDifficulty = ["Normal", "Normal"], gameMap = ["Prisons", 0], playerData = [], partnerData = [], orders = [], timeOnLevel = 0, makeSave, settingsScroll = -30, settingsSelected = "NONE", fpsOptions = [40, 45, 50, 55, 60, 70, 90, 120, 4], transitionOptions = [5, 10, 15, 20, 1], maps, saveMadeMessage, loadOn = [0, 0], loadScreenTime = 0, images, message2 = ["", 0], MOUSEX = 0, MOUSEY = 0, falseDoors = [], freePlay = false, spawnPoints = [], gameModes = ["Defender", "Warzone", 0], gameMaps = ["Servers", "Hangar Bay", 0], maxEnemies = [1, 2, 3, 4, 5, 6, 7, 8, 3], maxTeammates = [1, 2, 3, 4, 5, 6, 7, 8, 3], crateDelay = [30, 60, 90, 120, 2], gameDescriptions = ["Ward off waves of enemies!", "A violent team battle in the dead of night ... "], mapDescriptions = ["A small map arrayed around a central room. [WIP]", "A large hangar bay and control room. [WIP]"], respawnRate = [0, 0], character;
allLetters.split("");
allLetters2.split("");
textFont(fonts.TimesNewRoman10);
//}
// (2) "DEVELOPER  VARIABLES" {
var version = "1.1.0", devMode = false, godMode = false, undyingMode = false, wallDarkness = true, trueFPS = this.__frameRate, endCinematic = false, subArrays = [], noClip = false;
var capitalize = function(s) {
    if (s.length > 0) {
        s = s.replace(s[0], s[0].toUpperCase());
        for (var i = 0; i < s.length; i++) {
            if ((s[i] === "." || s[i] === "?" || s[i] === "!" || s[i] === ":") && i < s.length - 2) {
                s = s.substring(0, i + 2) + s[i + 2].toUpperCase() + s.substring(i + 3, s.length);
            }
        }
    }
    return s;
},
findInIndex = function(index, searchFor) {
    var want = [];
    for (var i = 0; i < index.length; i++) {
        if (index[i] === searchFor) {
            want.push(i);
        }
    }
    return want;
},
findInIndex2 = function(index, searchFor) {
    var want = [];
    for (var i = 0; i < Object.keys(index).length; i++) {
        if (Object.keys(index)[i] === searchFor) {
            want.push(i);
        }
    }
    return want;
};
Array.prototype.copy = function(){
    return this.concat();
};
Array.prototype.equals = function(arr){
    if (this.length === arr.length) {
        return this.every(function(item, index) {
            if (item instanceof Array && arr[index] instanceof Array) {
                return item.equals(arr[index]);
            }
            return item === arr[index];
        });
    }
    return false;
};
Array.prototype.clear = function() {
    this.length = 0;
};
Array.prototype.remove = function(obj) {
    this.splice(findInIndex(this, obj), 1);
};
var Round = function(num, digit) {
    return floor(num * digit) / digit;
},
printArray = function(arr) {
    var print = "[";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
            print += printArray(arr[i]) + ",";
        } else {
            if (typeof arr[i] === 'string') {
                print += "\"" + arr[i] + "\",";
            } else {
                print += arr[i] + ",";
            }
        }
    }
    if (print[print.length - 1] === ',') {
        print = print.substring(0, print.length - 1);
    }
    return print + "]";
},
copyArray = function(arr) {
    return arr.copy();
},
copyArray2 = function(arr) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length !== undefined && typeof arr[i] !== 'string') {
            arr2.push(copyArray2(arr[i]));
        } else {
            arr2[i] = arr[i];
        }
    }
    return arr2;
},
copyArray3 = function(arr, roundTo) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        arr2[i] = Round(arr[i], roundTo || 100);
    }
    return arr2;
},
copyArray4 = function(obj) {
    var newObj = Object.assign({}, obj);
    for (var i = 0; i < Object.keys(newObj).length; i++) {
        if (typeof newObj[Object.keys(newObj)[i]] === 'object') {
            newObj[Object.keys(newObj)[i]] = copyArray(obj[Object.keys(obj)[i]]);
        }
    }
    return newObj;
},
arrEquals = function(arr, arr2) {
    return arr.equals(arr2);
},
clearArrays = function() {
    allLoot.clear();
    bullets.clear();
    enemies.clear();
    allies.clear();
    bombs.clear();
    booms.clear();
    computers.clear();
    boxes.clear();
    doors.clear();
    walls.clear();
    smokeClouds.clear();
    cliffs.clear();
    allies.clear();
    weathers.clear();
    turrets.clear();
    falseDoors.clear();
    spawnPoints.clear();
},
convertToKey = function(input, kc) {
    if (input === RIGHT) {
        return ["RMB", "Right Mouse Button"];
    } else if (input === LEFT) {
        return ["LMB", "Left Mouse Button"];
    } else if (input === SHIFT || kc === 16) {
        return [SHIFT, "Shift"];
    } else if (kc === 32) {
        return [32, "Spacebar"];
    } else {
        for (var i = 0; i < allLetters.length; i++) {
            if (key.toString().toUpperCase() === allLetters[i].toUpperCase()) {
                return [kc, key.toString().toUpperCase()];
            }
        }
    }
};
for (var i = 0; i < codes.length; i++) {
    var a = codes[i];
    codes[i].name = a[0];
    codes[i].date = a[1];
    codes[i].playerInfo = {
        firstName: a[2][0],
        lastName: a[2][1],
        gender: a[2][2],
        skinColor: a[2][3],
        hairColor: a[2][4],
    };
    codes[i].inventory = copyArray2(a[3]);
    codes[i].firstWeapon = [a[4][0],a[4][1],a[4][2],a[4][3],a[4][4],a[4][5]];
    codes[i].secondWeapon = [a[5][0],a[5][1],a[5][2],a[5][3],a[5][4],a[5][5]];
    codes[i].meleeWeapon = a[6];
    codes[i].backpack = a[7];
    codes[i].objectives = copyArray2(a[8]);
    codes[i].player = copyArray2(a[9]);
    codes[i].partner = copyArray2(a[10]);
    codes[i].difficulty = a[11];
    codes[i].map = {
        which: a[12][0],
        phase: a[12][1],
    };
}
//}
// (3) "UNDEFINED VARIABLES" {
var console, findDamage, objective, tip, unlockDoors, openDoors, levelEnd;
var findTextWidth = function(which) {
    if (which !== "Middle Mouse Button" && which !== "Right Mouse Button" && which !== "Left Mouse Button") {
        return textWidth(which);
    } else {
        return 20;
    }
};
//}
// (4) "APPEARANCE VARIABLES" {
var screenShake = 0, compensateFPS = 1, wantedFPS = 60, timeDilation = 1, lootBoxSize = 0, lootName = "", lootAmmo = "", lootAmmoTextWidth = 0, lootText = "", lootTextWidth = 0, lootBoxHeight = 0, onLoot = "NONE", boxFinalWidth = 0, lootOn = "NONE", lootBoxFinalAlpha = 200, lootTextAlpha = lootBoxFinalAlpha, whichButton = "A", whichButtonWidth = 0, byConsole = [false, 0, textWidth("Use console") + 10, textWidth("Open crate") + 10, textWidth("Access turret") + 10], consoleType = "Use console", mapImages = [], graphicOptions = ["Low", "High", 0], graphicQuality = 0;
var text2 = function(txt, constraint) {
    var m = txt.split(" "), curStart = 0, curWidth = 0, lines = [""];
    for (var i = 0; i < m.length; i++){
        if (curWidth + textWidth(m[i]) > constraint) {
            lines.push("");
            curWidth = 0;
            curStart = i;
        }
        var curLine = lines.length - 1;
        lines[curLine] += m[i] + " ";
        curWidth = textWidth(lines[curLine]);
    }
    return lines; 
};
var text3 = function(txt, x, y, lHeight) {
    for (var i = 0; i < txt.length; i++) {
        text(txt[i], x, y + i * lHeight);
    }
};
//}
// (5) "GAME PLAY VARIABLES" {
var selectedSaveCode = 0, saveCode = codes[selectedSaveCode], scene = "load", lastScene = "game", nextScene = "game", mode = 1, grenadeButtonTime = 0, medButtonTime = 0, draggingLoot = "NONE", releasedLeft = false, cinematic = ["1", 0, [0, 0, 1]], subtitles = "", pDetails = ["he", "him", "his", "Sir"], gOptions = ["Male", "Female", 0], skinOptions = [["Pale 1", color(250, 240, 230)], ["Pale 2", color(250, 220, 170)], ["Dark 1", color(165, 140, 120)], ["Dark 2", color(125, 100, 80)], 1], hairOptions = [["Black", color(0)], ["Brown 1", color(220, 110, 30)], ["Brown 2", color(105, 80, 55)], ["Blond 1", color(250, 240, 190)], ["Blond 2", color(255, 240, 220)], ["Red-Gold", color(185, 115, 50)], 2], widths, difficulty = ["Very Low", "Low", "Normal", "High", "Very High", 2], pHealth = ["Very Low", "Low", "Normal", "High", "Very High", 2];
var pressed = function(w) {
    var which = w[0];
    if (((which === "LMB" && (mouseIsPressed && mouseButton === LEFT)) || (which === "RMB" && (mouseIsPressed && mouseButton === RIGHT)) || (which !== "LMB" && which !== "RMB" && keys[which])) && !console.activated) {
        return true;
    } else {
        return false;
    }
},
absValue = function(num, per) {
    var number = num;
    var percentage = per;
    if (percentage === undefined) {
        if (num < 0) {
            number = -num;
        }
    } else {
        if (num < 0) {
            number = -num;
            number %= per;
            number += percentage - (number * 2);
            number %= per;
        } else {
            number = num % percentage;
        }
    }
    return number;
},
dealDamage = function(Damage, obj, DH, DU) {
    var defenseHealth = obj.armorHealth || DH;
    var defenseUsefulness = (1 - obj.armorHelp) || (1 - DU);
    var totalDamage = 0;
    var afterArmorDamage = 0;
    var damage = Damage / obj.damageReduction;
    if (damage > defenseHealth) {
        totalDamage += damage - defenseHealth;
        damage -= (damage - defenseHealth);
        totalDamage += damage * defenseUsefulness; 
    } else {
        totalDamage += damage * defenseUsefulness;
    }
    if (obj !== undefined) {
        obj.armorHealth = constrain(obj.armorHealth - damage, 0, Infinity);
    }
    return totalDamage;
},
dist2 = function(x1, y1, x2, y2, proximity) {
    if (sq(x2 - x1) + sq(y2 - y1) <= sq(proximity)) {
        return true;
    } else {
        return false;
    }
},
loopDif = function(x, y, z) {
    x = absValue(x, z);
    y = absValue(y, z);
    var a = absValue(min(x, y) - max(x, y), 8), b = absValue(max(x, y) - min(x, y), 8), dir = "l";
    if (absValue(x - y, 8) > absValue(y - x, 8)) {
        dir = "r";
    }
    return [min(a, b), dir];
},
polygon = function() {
    beginShape();
    for (var i = 0; i < arguments.length; i += 2) {
        vertex(arguments[i], arguments[i + 1]);
    }
    endShape();
},
octSquare = function(x, y, w, h, c) {
    polygon(x - w / 2, y - h / 2 + c, x - w / 2 + c, y - h / 2, x + w / 2 - c, y - h / 2, x + w / 2, y - h / 2 + c, x + w / 2, y + h / 2 - c, x + w / 2 - c, y + h / 2, x - w / 2 + c, y + h / 2, x - w / 2, y + h / 2 - c, x - w / 2, y - h / 2 + c);
},
checkAttachment = function(gun) {
    var which = "NONE", ret = false, which2 = "NONE";
    if (draggingLoot === "NONE") {
        if (gun === 0 && allies[0].gun1 !== "NONE" && lootOn[0] !== "First Weapon Inventory") {
            which = allies[0].gun1;
            which2 = lootOn[2] || "NONE";
        } else if (gun === 1 && allies[0].gun2 !== "NONE" && lootOn[0] !== "Second Weapon Inventory") {
            which = allies[0].gun2;
            which2 = lootOn[2] || "NONE";
        }
        if (lootOn[0] === "Inventory Spot") {
            which2 = allies[0].inventory[lootOn[1]];
        }
        if (onLoot && which !== "NONE" && (lootOn[0] === "Inventory Spot" || ((lootOn[0] === "First Weapon Inventory" || lootOn[0] === "Second Weapon Inventory") && lootOn[1] !== "Gun") || typeof lootOn === 'number') && (which2 !== "NONE" || typeof lootOn === 'number')) {
            var b = which2, c, d;
            if (typeof lootOn === 'number') {
                b = allLoot[lootOn];
                c = b.other[0];
                d = b.other[1];
            } else if (lootOn[0] === "Inventory Spot") {
                c = b[0][0];
                d = b[0][1];
            } else {
                c = b.type[0];
                d = b.type[1];
            }
            for (var i = 0; i < which.allAttachments.length; i++) {
                var a = which.allAttachments[i];
                if ((b[1] === "Attachment" || typeof lootOn === 'number' || lootOn[0] !== "Inventory Spot") && c === a.type[0] && d === a.type[1]) {
                    ret = true;
                }
            }
        }
    } else {
        if (gun === 0 && allies[0].gun1 !== "NONE" && draggingLoot[0] !== "First Weapon Inventory") {
            which = allies[0].gun1;
            which2 = allies[0].gun2;
        } else if (gun === 1 && allies[0].gun2 !== "NONE" && draggingLoot[0] !== "Second Weapon Inventory") {
            which = allies[0].gun2;
            which2 = allies[0].gun1;
        }
        if (draggingLoot[0] === "Inventory") {
            which2 = allies[0].inventory[draggingLoot[1]];
        }
        if (draggingLoot !== "NONE" && which !== "NONE" && (draggingLoot[0] === "Inventory" || draggingLoot[0] === "First Weapon Inventory" || draggingLoot[0] === "Second Weapon Inventory") && which2 !== "NONE") {
            var b = which2, c, d;
            if (draggingLoot[0] === "Inventory") {
                c = b[0][0];
                d = b[0][1];
            } else {
                c = draggingLoot[1][0];
                d = draggingLoot[1][1];
            }
            for (var i = 0; i < which.allAttachments.length; i++) {
                var a = which.allAttachments[i];
                if ((b[1] === "Attachment" || lootOn[0] !== "Inventory") && c === a.type[0] && d === a.type[1]) {
                    ret = true;
                }
            }
        }
    }
    return ret;
},
canAct = function() {
    if (allies[0].reloading) {
        message2 = ["Player is reloading", 255];
        return false;
    } else if (allies[0].healing) {
        message2 = ["Player is healing", 255];
        return false;
    } else {
        return true;
    }
};
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//}
// (6) "DE-LAGGING VARIABLES" {
var construct = function(whichObject, definingArguments, newTarget) {
    var obj = Object.create(whichObject.prototype);
    return (newTarget || whichObject).apply(obj, definingArguments), obj;
},
createObj = function(arr, obj, objs) {
    for (var i = 0; i < objs.length; i++) {
        arr.push(construct(obj, objs[i]));
    }
},
setTimeout = function(time) {
    this[["KAInfiniteLoopSetTimeout"]](time);
    this[["KAInfiniteLoopCount"]] = -Infinity;
};
var squareRoot2 = sqrt(2), squareRootGunDistance = sqrt(105), squareRootGunDistance2 = sqrt(233), squareRootGunDistance3 = 12, grenadeDistance = dist(8, 0, 0, 0), grenadeRot = atan2(-8, 0), atan_1 = atan2(13, -8), atan_2 = atan2(10, -8);
//}
//} END "MAIN VARIABLES"

// "GRAPHICS" {
// (1) "DISPLAYING" {
var drawImages = function() {
    //_clearLogs(); 
    // debris?
    for (var i = 0; i < arguments.length; i++) {
        //println(i);
        if (arguments[i] === "lighting") {
            for (var j = walls.length - 1; j >= 0; j--) {
                walls[j].displayLighting();
            }
        } else if (arguments[i] === "drawBox") {
            for (var j = computers.length - 1; j >= 0; j--) {
                computers[j].drawBox();
            }
            for (var j = boxes.length - 1; j >= 0; j--) {
                boxes[j].drawBox();
            }
        } else {
            for (var j = arguments[i].length - 1; j >= 0; j--) {
                arguments[i][j].draw();
            }
        }
    }
};
var renderImage = function(img, x, y, w, h) {
    if (img.length !== undefined) {
        var a = w / img[1], b = h / img[2], c = a < b ? "w" : "h";
        image(img[0], x, y, 400 * (c === "w" ? a : b) / 5, 400 * (c === "h" ? b : a) / 5);
    } else {
        image(img, x, y, w || (400 / 5), h || (400 / 5));
    }
};
var createBackgroundImage = function() {
    filter(GRAY);
    filter(BLUR, 2);
    fill(255, 200);
    rect(width / 2, height / 2, 1000, 1000);
    backgroundImage = get(0, 0, width, height);
};
//}
// (2) "UN-CACHED GRAPHICS" {
var crateGraphic = function(x, y, w, h, u, g, c) {
    pushMatrix();
    translate(x, y);
    strokeWeight(4);
    fill(c[0]);
    stroke(c[1]);
    if (!u) {
        octSquare(0, 0, w - 4, h - 4, 2);
        rotate(-90);
        renderImage(g, x, y, h - 12, w - 12);
        noStroke();
        fill(255);
        stroke(200);
        strokeWeight(1);
        triangle(-h / 2 + 6, w / 2 - 8, -h / 2 + 12, w / 2 - 8, -h / 2 + 9, w / 2 - 5);
        triangle(h / 2 - 6, w / 2 - 8, h / 2 - 12, w / 2 - 8, h / 2 - 9, w / 2 - 5);
    } else {
        octSquare(0, 0, w - 4, h - 4, 2);
        noStroke();
        fill(c[2]);
        rect(-w / 2 + 3, 0, 6, h, 3, 0, 0, 3);
        fill(c[3]);
        rect(-w / 2 + 3, 0, 6, h - 6);
    }
    popMatrix();
};
var outlineText = function(t, b, f, d, d2) {
    fill(b);
    for (var i = 0; i < d; i++) {
        pushMatrix();
        rotate(i / d * 360);
        translate(d2, 0);
        rotate(-i / d * 360);
        text(t, 0, 0);
        popMatrix();
    }
    fill(f);
    text(t, 0, 0);
};
var line2 = function(x, y, rot, length) {
    pushMatrix();
    translate(x, y);
    rotate(rot);
    line(0, 0, 0, length);
    popMatrix();
};
var bulletIcon = function(x, y, size, a, r, c) {
    pushMatrix();
    translate(x, y);
    scale(size);
    rotate(r);
    noStroke();
    fill(c, a);
    arc(30, 0, 60, 14, -90, 90);
    noStroke();
    rect(0, 0, 50, 20, 2);
    rect(-30, 0, 6, 20, 0, 2, 2, 0);
    quad(24, -10, 24, 10, 28, 7, 28, -7);
    popMatrix();
};
var bulletIndicator = function(rot, s, a, c) {
    pushMatrix();
    rotate(rot - 90);
    scale(s);
    stroke(c, a);
    noFill();
    strokeWeight(3);
    arc(0, 0, 300, 300, -15, 15);
    stroke(c, 15 * (a / 175));
    for (var i = 0; i < 20; i += 2) {
        arc(0, 0, 300 + i, 300 + i, -15 + (i / 10), 15 - (i / 10));
    }
    bulletIcon(165, 0, 0.4, a, 90, c);
    popMatrix();
    noStroke();
};
var scopeImg = function(txt) {
            textFont(fonts.AgencyFB6);
            stroke(255);
            strokeWeight(1);
            noFill();
            ellipse(0, 0, 10, 10);
            line(4, 0, 6, 0);
            line(-4, 0, -6, 0);
            line(0, 4, 0, 6);
            line(0, -4, 0, -6);
            if (txt === "rd") {
                strokeWeight(2);
                point(0, 0);
            } else {
                fill(255);
                text(txt, 0, 0);
            }
};
var body = function(x, y, size, str, col) {
    stroke(str);
    strokeWeight(2);
    fill(col);
    rect(x, y, size, size * 14 / 30, 10);
};
var head = function(x, y, size, str, col) {
    stroke(str);
    strokeWeight(2);
    fill(col);
    ellipse(x, y, size, size);
};
var floorImg = function(x, y, x2, y2) {
    noFill();
    stroke(0, 100);
    strokeWeight(1);
    for (var i = x; i < x2; i += 100) {
        line(i, y, i, y2);
    }
    for (var i = y; i < y2; i += 100) {
        line(x, i, x2, i);
    }
};
var argonImagingCompany = function(x, y, size) {
    pushMatrix();
    translate(x, y);
    scale(size);
    noStroke();
    fill(255);
    textFont(fonts.CenturyGothic40);
    text("Argon", 0, 10);
    textFont(fonts.CenturyGothic30);
    text("Imaging", 0, 41);
    ellipse(0, -30, 40, 40);
    stroke(255);
    strokeWeight(5);
    noFill();
    pushMatrix();
    translate(0, -30);
    rotate(20);
    ellipse(0, 0, 100, 20);
    popMatrix();
    noStroke();
    popMatrix();
};
var argonGames = function(x, y, size) {
    pushMatrix();
    translate(x, y);
    scale(size);
    fill(255);
    textFont(fonts.CenturyGothic40);
    text("Argon", 0, 10);
    textFont(fonts.CenturyGothic35);
    text("Games", 0, 45);
    noStroke();
    rect(0, -33, 50, 24);
    ellipse(-22, -30, 30, 30);
    ellipse(22, -30, 30, 30);
    fill(0);
    ellipse(28, -30, 6, 6);
    ellipse(16, -30, 6, 6);
    ellipse(22, -36, 6, 6);
    ellipse(22, -24, 6, 6);
    rect(-22, -30, 6, 18, 8);
    rect(-22, -30, 18, 6, 8);
    popMatrix();
};
var advancedShuttle = function(x, y, r, s, e) {
    pushMatrix();
    translate(x, y);
    rotate(r);
    scale(s);
    noStroke();
    pushMatrix();
    scale(1.2, 1.1);
    translate(0, -5);
    noFill();
    stroke(75);
    strokeWeight(10);
    arc(-55, -60, 88, 256, 0, 85);
    arc(-54, 120, 100, 47, 270, 340);
    arc(54, 120, 100, 47, 200, 270);
    arc(55, -60, 88, 256, 95, 180);
    pushMatrix();
    translate(0, 6);
    scale(0.9);
    noFill();
    stroke(95);
    strokeWeight(11);
    arc(-58, -68, 98, 281, 0, 90);
    arc(-54, 122.5, 101, 52, 270, 340);
    arc(54, 122.5, 101, 52, 200, 270);
    arc(58, -68, 98, 281, 90, 180);
    noStroke();
    fill(95);
    rect(0, 84, 120, 28);
    rect(0, 90, 40, 40);
    triangle(-44, 80, 44, 80, 0, -60);
    popMatrix();
    fill(255, 0, 0, 150);
    arc(-11.5, -60, 8, 10, 180, 270);
    arc(12, -60, 8, 10, 270, 360);
    stroke(60);
    strokeWeight(1);
    line(-40, 70, -40, 84);
    line(40, 70, 40, 84);
    strokeWeight(1.1);
    line(-33, 70, -33, 84);
    line(33, 70, 33, 84);
    strokeWeight(1.3);
    line(-26, 70, -26, 84);
    line(26, 70, 26, 84);
    strokeWeight(1.6);
    line(-19, 70, -19, 84);
    line(19, 70, 19, 84);
    noStroke();
    fill(0, 200, 255, 50);
    for (var i = 0; i < 10; i++) {
        ellipse(random(-55, -53), 106, random(8, 10), random(e * 0.5, e));
        ellipse(random(53, 55), 106, random(8, 10), random(e * 0.5, e));
    }
    fill(50);
    ellipse(54, 59, 12, 26);
    ellipse(-54, 59, 12, 26);
    ellipse(-54, 106, 12, 10);
    ellipse(54, 106, 12, 10);
    rect(54, 82, 12, 46);
    rect(-54, 82, 12, 46);
    fill(65);
    ellipse(54, 58, 8, 20);
    ellipse(-54, 58, 8, 20);
    ellipse(-54, 106, 8, 6);
    ellipse(54, 106, 8, 6);
    rect(54, 83, 8, 46);
    rect(-54, 83, 8, 46);
    popMatrix();
    fill(50);
    rect(0, 6, 30, 216);
    ellipse(0, 116, 30, 20);
    ellipse(0, -100, 30, 60);
    fill(65);
    ellipse(0, -98, 24, 58);
    ellipse(0, 114, 24, 18);
    rect(0, 6, 24, 212);
    fill(0);
    stroke(30);
    strokeWeight(1);
    arc(1, -102, 18, 44, -90, 5);
    arc(-1, -102, 18, 44, 175, 270);
    noStroke();
    fill(65);
    ellipse(0, -100, 10, 10);
    ellipse(0, -124, 6, 6);
    stroke(0);
    strokeWeight(2.5);
    line(-4, 40, -4, 20);
    line(4, 40, 4, 20);
    strokeWeight(2);
    stroke(100);
    fill(75);
    ellipse(0, 40, 16, 16);
    noStroke();
    popMatrix();
};
var blast = function(x, y, s) {
    pushMatrix();
    translate(x, y);
    fill(0);
    noStroke();
    for (var i = 0; i < 360; i += 20) {
        pushMatrix();
        rotate(i);
        triangle(-random(s / 20, s / 15), 0, random(s / 20, s / 15), 0, 0, random(s / 5, s / 2));
        popMatrix();
    }
    popMatrix();
};
var notSoAdvancedShuttle = function(x, y, r, s, flaming) {
    pushMatrix();
    translate(x, y);
    rotate(r);
    scale(s);
    translate(0, 5);
    fill(0);
    rect(34, -40, 8, 80, 4);
    rect(44, -34, 8, 70, 4);
    rect(-34, -40, 8, 80, 4);
    rect(-44, -34, 8, 70, 4);
    rect(0, -115, 52, 30);
    ellipse(26, -115, 4, 30);
    ellipse(-26, -115, 4, 30);
    stroke(0);
    strokeWeight(8);
    line(102, 144, 32, 154);
    line(-102, 144, -32, 154);
    noStroke();
    fill(255);
    polygon(0, -80, 110, -25, 110, 140, 0, 160, -110, 140, -111, -25);
    stroke(220);
    noFill();
    strokeWeight(6);
    arc(50, -80, 60, 50, 120, 180);
    line(37, -57, 100, -30);
    arc(98, -15, 24, 30, -70, 0);
    line(110, -15, 113, 140);
    line(113, 140, 35, 150);
    arc(40, 161, 40, 22, 180, 250);
    arc(-50, -80, 60, 50, 0, 60);
    line(-37, -57, -100, -30);
    arc(-98, -15, 24, 30, 180, 250);
    line(-110, -15, -113, 140);
    line(-113, 140, -35, 150);
    arc(-40, 161, 40, 22, -70, 0);
    noStroke();
    fill(220);
    arc(0, -150, 50, 90, 180, 360);
    rect(0, 11, 50, 322);
    arc(0, 172, 50, 20, 0, 180);
    fill(255);
    arc(0, -150, 40, 80, 180, 360);
    rect(0, 10, 40, 320);
    arc(0, 170, 40, 14, 0, 180);
    fill(0);
    arc(2, -150, 28, 70, -90, 5);
    arc(-2, -150, 28, 70, 175, 270);
    fill(255);
    ellipse(0, -145, 16, 20);
    fill(220);
    ellipse(35, -40, 10, 10);
    ellipse(35, -26, 10, 10);
    stroke(0, 50);
    line(35, 25, 35, 75);
    line(45, 25, 45, 75);
    line(-35, 25, -35, 75);
    line(-45, 25, -45, 75);
    strokeWeight(4);
    for (var i = -102; i < -30; i += 10) {
        line(i, 120 + (i + 102) / 8, i, 132 + (i + 102) / 8);
    }
    for (var i = 102; i > 30; i -= 10) {
        line(i, 120 - (i - 102) / 8, i, 132 - (i - 102) / 8);
    }
    if (flaming) {
        var a = ["blast1", "blast2", "blast3"];
        image(images[a[0]], -62, 0);
        image(images[a[1]], 80, 125);
        image(images[a[2]], 4, 160);
        noStroke();
        for (var i = 0; i < 30; i++) {
            fill(random(200, 255), random(0, 100), 0, 20);
            ellipse(-62 + random(-5, 5), random(-5, 5), random(10, 15), random(10, 15));
        }
        for (var i = 0; i < 30; i++) {
            fill(random(200, 255), random(0, 100), 0, 20);
            ellipse(80 + random(-5, 5), 125 + random(-5, 5), random(10, 15), random(10, 15));
        }
        for (var i = 0; i < 30; i++) {
            fill(random(200, 255), random(0, 100), 0, 20);
            ellipse(4 + random(-5, 5), 160 + random(-5, 5), random(10, 15), random(10, 15));
        }
    }
    popMatrix();
};
var playerGraphic = function(gender, skin, hair) {
    background(0, 0);
    body(200, 100, 30, color(200, 50, 0), color(255, 100, 0));
    head(200, 200, 20, playerInfo[3], constrain(playerInfo[3] - 1315860, -16777216, -1));
    head(200, 300, 6, playerInfo[3], constrain(playerInfo[3] - 1315860, -16777216, -1));
    fill(playerInfo[4]);
    stroke(constrain(playerInfo[4] - 1973790, -16777216, -1));
    ellipse(200, 197, 20, 17);
    if (gender === "Female") {
        ellipse(200, 188, 6, 6);
    }
    return [get(150, 50, 100, 100), get(150, 150, 100, 100), get(150, 250, 100, 100)];
};
var displayMap = function(which) {
    var b = which || gameMap;
    for (var i = 0; i < maps[b[0]].images.length; i++) {
        if (!maps[b[0]].draw[i][0]) {
            noStroke();
            maps[b[0]].draw[i][1](b[1]);
        } else {
            var a = maps[b[0]].images[i], c = maps[b[0]].draw[i];
            for (var j = 0; j < a.length; j++) {
                for (var k = 0; k < a[j].length; k++) {
                    image(a[j][k], c[2][0] + j * 400 + 200, c[2][1] + k * 400 + 200);
                }
            }
        }
    }
};
var nightVision = function() {
    strokeCap(SQUARE);
    noFill();
    stroke(0);
    strokeWeight(2000);
    arc(0, 0, 2100, 2100, -5, 185);
    arc(0, -300, 2190, 2190, 175, 365);
    strokeWeight(30);
    var thing = function(w, a) {
        noFill();
        stroke(0, a);
        arc(0, 0, w, w, 0, 180);
        arc(0, -300, w + 90, w + 90, 180, 360);
        noStroke();
        fill(0, a);
        quad(-w / 2 + 15, 0, -w / 2 - 2000, 0, -w / 2 - 2000, -300, -w / 2 - 30, -300);
        quad(w / 2 + 2000, 0, w / 2 - 15, 0, w / 2 + 30, -300, w / 2 + 2000, -300);
    };
    thing(100, 255);
    thing(90, 75);
    thing(80, 75);
    thing(70, 75);
    thing(60, 75);
    strokeCap(ROUND);
};
//}
// (3) "IMAGES" {
var snow = function() {
    fill(255);
    for (var i = 0; i < 200; i++) {
        rect(random(-200, 200), random(-200, 200), random(1, 2), random(8, 16));
    }
};
var rain = function() {
    fill(0, 200, 255, 5);
    for (var i = 0; i < 200; i++) {
        rect(random(-200, 200), random(-200, 200), random(1, 2), random(75, 100));
    }
};
var splinters = function(x, y, s) {
    var splints = [];
    var splint = function(x, y, r, n) {
        var a = random(s * 0.9, s * 1.2);
        this.x = x + cos(r) * 2;
        this.y = y + sin(r) * 2;
        this.x2 = x + cos(r) * a;
        this.y2 = y + sin(r) * a;
        if (n > 0) {
            if (n >= 1 && random(1) >= 1.5 / n) {
                splints.push(new splint(this.x2, this.y2, r + random(-45, 45), n - 1));
            }
            splints.push(new splint(this.x2, this.y2, r + random(-45, 45), n - 1));
        }
    };
    var a = random(4, 6);
    for (var i = 0; i < a; i++) {
        splints.push(new splint(x, y, 360 * i / a + random(-10, 10), random(2, 4)));
    }
    stroke(0, 50);
    strokeWeight(10);
    for (var i = 0; i < splints.length; i++) {
        line(splints[i].x, splints[i].y, splints[i].x2, splints[i].y2);
    }
};
images = {
    "escape logo": function() {
        scale(1, 1.5);
        textFont(fonts.AgencyFB100);
        translate(-textWidth("2") / 2, 0);
        outlineText("ESCAPE", color(200), color(255), 16, 2);
        fill(255, 0, 0);
        translate(textWidth("ESCAPE") / 2 + textWidth("2") / 2, 0);
        outlineText("2", color(200, 0, 0), color(255, 50, 50), 16, 2);
        return get(0, 0, 400, 400);
    },
    "datapad": function() {
        rotate(30);
        fill(100);
        rect(0, 0, 10, 15);
        fill(150);
        rect(0, -7, 12, 2, 2);
        fill(0);
        rect(0, 0, 6, 10);
        return get(0, 0, 400, 400);
    },
    "snow1": function() {
        snow();
        return get(0, 0, 400, 400);
    },
    "snow2": function() {
        snow();
        return get(0, 0, 400, 400);
    },
    "snow3": function() {
        snow();
        return get(0, 0, 400, 400);
    },
    "snow4": function() {
        snow();
        return get(0, 0, 400, 400);
    },
    "snow5": function() {
        snow();
        return get(0, 0, 400, 400);
    },
    "rain1": function() {
        rain();
        return get(0, 0, 400, 400);
    },
    "rain2": function() {
        rain();
        return get(0, 0, 400, 400);
    },
    "rain3": function() {
        rain();
        return get(0, 0, 400, 400);
    },
    "rain4": function() {
        rain();
        return get(0, 0, 400, 400);
    },
    "rain5": function() {
        rain();
        return get(0, 0, 400, 400);
    },
    "crack1": function() {
        splinters(0, 0, 50);
        return get(0, 0, 400, 400);
    },
    "crack2": function() {
        splinters(0, 0, 50);
        return get(0, 0, 400, 400);
    },
    "turret": function() {
        fill(100);
        ellipse(0, 0, 300, 300);
        stroke(0, 50);
        strokeWeight(10);
        fill(125);
        ellipse(0, 0, 230, 230);
        fill(100);
        stroke(50);
        strokeWeight(25);
        line(20, 0, 20, -190);
        line(-20, 0, -20, -190);
        stroke(100);
        strokeWeight(15);
        line(28, -200, 12, -200);
        line(-28, -200, -12, -200);
        strokeWeight(10);
        stroke(50);
        rect(0, 0, 100, 150, 30, 30, 10, 10);
        fill(255, 10);
        noStroke();
        rect(32, 0, 26, 140, 0, 30, 10, 0);
        fill(0, 10);
        rect(-32, 0, 26, 140, 30, 0, 0, 10);
        stroke(0);
        line(32, 40, 32, -40);
        line(-32, 40, -32, -40);
        return get(0, 0, 400, 400);
    },
    "holotable": function() {
        fill(200);
        ellipse(0, 0, 200, 200);
        fill(20);
        ellipse(0, 0, 180, 180);
        fill(0);
        ellipse(0, 0, 140, 140);
        fill(255, 50);
        for (var i = 0; i < 10; i++) {
            ellipse(80 * cos(i * 36), 80 * sin(i * 36), 5, 5);
        }
        return get(0, 0, 400, 400);
    },
    "hologram": function() {
        fill(0, 200, 255, 100);
        stroke(0, 200, 255, 100);
        strokeWeight(10);
        ellipse(0, 0, 120, 120);
        strokeWeight(5);
        fill(255, 0, 0, 100);
        stroke(255, 0, 0, 100);
        ellipse(0, 0, 5, 5);
        ellipse(20, 30, 5, 5);
        fill(0, 255, 0, 100);
        stroke(0, 255, 0, 100);
        ellipse(10, -15, 5, 5);
        ellipse(-20, 15, 5, 5);
        fill(0, 50, 255, 100);
        stroke(0, 50, 255, 100);
        ellipse(-25, -25, 15, 15);
        return get(0, 0, 400, 400);
    },
    "star background": function() {
        background(0);
        for (var i = 0; i < 1000; i++) {
            var a = random(0.5, 2);
            fill(255, a * 127.5);
            ellipse(random(-200, 200), random(-200, 200), a, a);
        }
        fill(0, 100);
        rect(0, 0, 400, 400);
        return get(0, 0, 400, 400);
    },
    "select background": function() {
        background(175, 200, 200);
        translate(-200, -200);
        fill(255, 15);
        for (var i = 0; i < 450; i++) {
            ellipse(random(-50, 450), random(-50, 250), 120, 60);
        }
        filter(BLUR, 2);
        fill(255);
        triangle(0, 250, 0, 140, 120, 250);
        triangle(0, 250, 100, 150, 200, 250);
        triangle(120, 250, 250, 130, 350, 250);
        triangle(250, 250, 360, 170, 450, 250);
        rect(200, 300, 500, 200);
        filter(BLUR, 2);
        fill(200, 220, 220, 50);
        rect(200, 200, 500, 400);
        fill(255);
        rect(200, 370, 500, 200);
        triangle(-50, 270, 40, 160, 200, 270);
        triangle(20, 270, 160, 170, 300, 270);
        triangle(200, 270, 320, 175, 400, 270);
        triangle(300, 270, 400, 180, 400, 270);
        filter(BLUR, 2);
        fill(200, 220, 220, 50);
        rect(200, 200, 500, 400);
        fill(255);
        rect(200, 390, 500, 200);
        triangle(-50, 290, 30, 220, 150, 290);
        triangle(50, 290, 150, 215, 250, 290);
        triangle(100, 290, 250, 210, 350, 290);
        triangle(200, 290, 340, 210, 450, 290);
        filter(BLUR, 2);
        fill(200, 220, 220, 50);
        rect(200, 200, 500, 400);
        return get(0, 0, 400, 400);
    },
    "blast1": function() {
        blast(0, 0, 40);
        return get(0, 0, 400, 400);
    },
    "blast2": function() {
        blast(0, 0, 35);
        return get(0, 0, 400, 400);
    },
    "blast3": function() {
        blast(0, 0, 45);
        return get(0, 0, 400, 400);
    },
    "prisonMap": function() {
        translate(-200, -200);
        strokeWeight(2);
        strokeCap(SQUARE);
        stroke(255, 150, 150);
        line(292, 97, 292, 112);
        line(200, 127, 200, 142);
        line(241, 127, 241, 142);
        line(125, 127, 125, 142);
        line(213, 179, 213, 194);
        line(152, 178, 167, 178);
        line(152, 194, 167, 194);
        line(108, 178, 123, 178);
        line(213, 236, 213, 251);
        line(277, 236, 292, 236);
        line(277, 251, 292, 251);
        line(182, 330, 182, 236);
        line(139, 236, 139, 330);
        stroke(150, 255, 150);
        line(139, 330, 139, 314);
        line(139, 298, 139, 282);
        line(139, 266, 139, 250);
        line(108, 267, 139, 267);
        line(108, 298, 139, 298);
        line(182, 267, 213, 267);
        line(182, 298, 213, 298);
        line(182, 296, 182, 312);
        line(182, 266, 182, 282);
        line(182, 236, 182, 251);
        line(108, 330, 108, 97);
        line(108, 97, 292, 97);
        line(290, 114, 200, 114);
        line(200, 114, 200, 127);
        line(200, 142, 200, 157);
        line(292, 112, 292, 291);
        line(241, 114, 241, 127);
        line(241, 142, 241, 157);
        line(198, 127, 125, 127);
        line(198, 142, 125, 142);
        line(200, 157, 292, 157);
        line(213, 157, 213, 178);
        line(125, 142, 125, 178);
        line(125, 178, 152, 178);
        line(167, 178, 213, 178);
        line(152, 194, 108, 194);
        line(167, 194, 213, 194);
        line(213, 194, 213, 236);
        line(108, 236, 277, 236);
        line(213, 251, 277, 251);
        line(213, 251, 213, 330);
        line(108, 330, 213, 330);
        line(213, 292, 292, 292);
        fill(255);
        textFont(fonts.AgencyFB14);
        text("Cells", 160, 283);
        text("Armory", 252, 271);
        text("Command Center", 160, 214);
        text("Guard Room", 164, 160);
        text("Cell\nControls", 266, 136);
        return get(0, 0, 400, 400);
    },
    "infirmaryMap": function() {
        translate(-200, -200);
        stroke(255, 100);
        strokeWeight(2);
        strokeCap(SQUARE);
        stroke(255, 150, 150);
        line(40, 215, 40, 226);
        line(186, 173, 199, 173);
        line(220, 173, 233, 173);
        line(244, 187, 250, 187);
        line(360, 147, 360, 158);
        line(302, 268, 291, 268);
        line(244, 202, 250, 202);
        line(273, 216, 279, 216);
        line(233, 186, 233, 200);
        line(180, 228, 180, 240);
        line(219, 228, 219, 240);
        stroke(150, 255, 150);
        line(39, 215, 124, 215);
        line(124, 215, 124, 173);
        line(124, 173, 186, 173);
        line(186, 173, 186, 147);
        line(186, 147, 233, 147);
        line(199, 173, 220, 173);
        line(233, 147, 233, 187);
        line(199, 173, 199, 187);
        line(199, 187, 243, 187);
        line(251, 187, 289, 187);
        line(233, 173, 261, 173);
        line(261, 173, 261, 187);
        line(289, 187, 289, 146);
        line(289, 147, 360, 147);
        line(360, 158, 302, 158);
        line(302, 158, 302, 216);
        line(302, 216, 360, 216);
        line(360, 216, 360, 268);
        line(360, 268, 302, 268);
        line(291, 268, 233, 268);
        line(233, 268, 233, 201);
        line(244, 202, 199, 202);
        line(199, 202, 199, 216);
        line(251, 202, 289, 202);
        line(289, 202, 289, 216);
        line(279, 216, 289, 216);
        line(273, 216, 233, 216);
        line(233, 241, 219, 241);
        line(219, 241, 219, 254);
        line(219, 254, 180, 254);
        line(180, 254, 180, 241);
        line(180, 241, 124, 241);
        line(124, 241, 124, 226);
        line(124, 226, 39, 226);
        line(180, 216, 219, 216);
        line(180, 216, 180, 228);
        line(219, 216, 219, 228);
        line(261, 202, 261, 216);
        line(254, 223, 254, 260);
        line(275, 223, 275, 260);
        line(318, 223, 318, 260);
        line(338, 223, 338, 260);
        fill(255);
        textFont(fonts.AgencyFB14);
        text("Medical\nCenter", 296, 243);
        text("Storage", 261, 194);
        text("Door Controls", 182, 194);
        return get(0, 0, 400, 400);
    },
    "defensesMap": function() {
        translate(-200, -200);
        stroke(255, 100);
        strokeWeight(2);
        strokeCap(SQUARE);
        stroke(255, 150, 150);
        line(197, 340, 203, 340);
        line(197, 305, 203, 305);
        line(197, 291, 203, 291);
        line(197, 261, 203, 261);
        line(197, 253, 203, 253);
        line(197, 239, 203, 239);
        line(144, 272, 150, 272);
        line(250, 272, 256, 272);
        line(95, 272, 95, 278);
        line(305, 272, 305, 278);
        stroke(150, 255, 150);
        line(203, 340, 235, 340);
        line(235, 340, 235, 278);
        line(235, 278, 305, 278);
        line(305, 272, 256, 272);
        line(256, 272, 256, 229);
        line(256, 229, 312, 229);
        line(312, 229, 312, 208);
        line(312, 208, 288, 208);
        line(288, 208, 288, 124);
        line(288, 125, 301, 125);
        line(301, 125, 301, 90);
        line(301, 90, 266, 90);
        line(266, 90, 266, 125);
        line(266, 125, 279, 125);
        line(279, 125, 279, 208);
        line(279, 208, 204, 208);
        line(204, 208, 204, 125);
        line(204, 125, 217, 125);
        line(217, 125, 217, 90);
        line(217, 90, 183, 90);
        line(183, 90, 183, 125);
        line(183, 125, 196, 125);
        line(196, 125, 196, 208);
        line(197, 340, 165, 340);
        line(165, 340, 165, 278);
        line(165, 278, 95, 278);
        line(95, 272, 144, 272);
        line(144, 272, 144, 229);
        line(144, 229, 88, 229);
        line(88, 229, 88, 208);
        line(88, 208, 112, 208);
        line(112, 208, 112, 124);
        line(112, 125, 99, 125);
        line(99, 125, 99, 90);
        line(99, 90, 134, 90);
        line(134, 90, 134, 125);
        line(134, 125, 121, 125);
        line(121, 125, 121, 208);
        line(121, 208, 196, 208);
        line(203, 239, 256, 239);
        line(197, 239, 144, 239);
        line(203, 253, 228, 253);
        line(228, 253, 228, 333);
        line(228, 272, 249, 272);
        line(172, 272, 151, 272);
        line(172, 253, 172, 333);
        line(197, 253, 172, 253);
        line(203, 291, 214, 291);
        line(203, 261, 220, 261);
        line(220, 261, 220, 298);
        line(180, 298, 220, 298);
        line(180, 261, 180, 298);
        line(197, 291, 186, 291);
        line(197, 261, 180, 261);
        line(186, 268, 214, 268);
        line(214, 267, 214, 291);
        line(186, 267, 186, 291);
        line(197, 305, 172, 305);
        line(203, 305, 228, 305);
        line(214, 305, 214, 319);
        line(214, 319, 186, 319);
        line(186, 319, 186, 305);
        line(172, 333, 228, 333);
        strokeWeight(14);
        point(200, 279);
        strokeWeight(20);
        point(200, 108);
        point(284, 108);
        point(116, 108);
        fill(255);
        textFont(fonts.AgencyFB14);
        text("Turrets", 158, 108);
        text("Turrets", 242, 108);
        text("Exterior Platform", 200, 224);
        text("Command", 200, 325);
        return get(0, 0, 400, 400);
    },
    "hangarsMap1": function() {
        translate(-200, -200);
        noFill();
        strokeWeight(2);
        strokeCap(SQUARE);
        stroke(255, 150, 150);
        line(47, 261, 47, 267);
        line(50, 267, 56, 267);
        line(146, 278, 152, 278);
        line(146, 251, 152, 251);
        line(282, 278, 288, 278);
        line(282, 251, 288, 251);
        line(214, 278, 219, 278);
        line(214, 251, 219, 251);
        line(197, 261, 197, 267);
        line(204, 261, 204, 267);
        line(231, 261, 231, 267);
        line(238, 261, 238, 267);
        line(340, 261, 340, 267);
        line(214, 285, 219, 285);
        line(214, 244, 219, 244);
        line(204, 193, 204, 199);
        line(231, 193, 231, 199);
        line(340, 159, 340, 165);
        line(95, 159, 95, 165);
        line(95, 261, 95, 267);
        stroke(150, 255, 150);
        line(47, 267, 50, 267);
        line(56, 267, 95, 267);
        line(95, 267, 95, 278);
        line(95, 278, 146, 278);
        line(152, 278, 213, 278);
        line(220, 278, 282, 278);
        line(288, 278, 340, 278);
        line(340, 278, 340, 267);
        line(204, 267, 204, 285);
        line(231, 267, 231, 285);
        line(197, 267, 197, 278);
        line(238, 267, 238, 278);
        line(204, 285, 213, 285);
        line(220, 285, 231, 285);
        line(197, 261, 197, 251);
        line(238, 261, 238, 251);
        line(204, 261, 204, 199);
        line(231, 261, 231, 199);
        line(152, 251, 213, 251);
        line(220, 251, 282, 251);
        line(204, 244, 213, 244);
        line(220, 244, 231, 244);
        line(288, 251, 340, 251);
        line(146, 251, 95, 251);
        line(47, 261, 95, 261);
        line(95, 261, 95, 225);
        line(95, 165, 95, 169);
        line(340, 261, 340, 225);
        line(340, 165, 340, 169);
        line(340, 258, 352, 258);
        line(352, 258, 352, 270);
        line(352, 270, 340, 270);
        line(340, 159, 340, 141);
        line(340, 141, 334, 141);
        line(334, 141, 334, 138);
        line(334, 138, 236, 138);
        line(236, 138, 236, 141);
        line(236, 141, 199, 141);
        line(231, 193, 231, 141);
        line(204, 193, 204, 141);
        line(199, 141, 199, 138);
        line(199, 138, 101, 138);
        line(101, 138, 101, 141);
        line(101, 141, 95, 141);
        line(95, 141, 95, 159);
        arc(102, 176, 14, 14, -90, 90);
        arc(102, 190, 14, 14, -90, 90);
        arc(102, 204, 14, 14, -90, 90);
        arc(102, 218, 14, 14, -90, 90);
        line(102, 169, 95, 169);
        line(102, 225, 95, 225);
        arc(333, 176, 14, 14, 90, 270);
        arc(333, 190, 14, 14, 90, 270);
        arc(333, 204, 14, 14, 90, 270);
        arc(333, 218, 14, 14, 90, 270);
        line(333, 169, 340, 169);
        line(333, 225, 340, 225);
        line(121, 169, 176, 169);
        line(176, 169, 176, 225);
        line(121, 169, 121, 225);
        line(121, 225, 176, 225);
        line(260, 169, 314, 169);
        line(314, 169, 314, 225);
        line(260, 169, 260, 225);
        line(260, 225, 314, 225);
        fill(255);
        textFont(fonts.AgencyFB14);
        text("Hangar 1", 149, 197);
        text("Hangar 2", 287, 197);
        return get(0, 0, 400, 400);
    },
    "hangarsMap2": function() {
        translate(-200, -200);
        stroke(255, 100);
        strokeWeight(2);
        strokeCap(SQUARE);
        stroke(255, 150, 150);
        line(166, 202, 166, 210);
        line(292, 202, 292, 210);
        line(334, 202, 334, 210);
        stroke(150, 255, 150);
        line(46, 154, 46, 258);
        line(46, 258, 118, 258);
        line(118, 258, 118, 216);
        line(117, 216, 124, 216);
        line(124, 216, 124, 238);
        line(124, 238, 334, 238);
        line(166, 238, 166, 210);
        line(292, 238, 292, 210);
        line(334, 238, 334, 210);
        line(334, 217, 354, 217);
        line(354, 217, 354, 195);
        line(354, 195, 334, 195);
        line(334, 202, 334, 174);
        line(334, 174, 124, 174);
        line(292, 202, 292, 174);
        line(166, 202, 166, 174);
        line(124, 174, 124, 196);
        line(124, 196, 118, 196);
        line(118, 196, 118, 154);
        line(46, 154, 118, 154);
        strokeWeight(20);
        point(82, 206);
        fill(255);
        textFont(fonts.AgencyFB14);
        text("Control\nRoom", 82, 175);
        return get(0, 0, 400, 400);
    },
    "serversMap": function() {
        translate(-200, -200);
        strokeWeight(2);
        strokeCap(SQUARE);
        stroke(255, 150, 150);
        line(120, 111, 140, 111);
        line(190, 111, 210, 111);
        line(282, 111, 302, 111);
        line(281, 125, 281, 145);
        line(281, 182, 281, 302);
        line(293, 203, 313, 203);
        line(293, 249, 313, 249);
        line(190, 341, 210, 341);
        line(190, 306, 210, 306);
        line(190, 144, 210, 144);
        line(258, 215, 258, 235);
        line(142, 215, 142, 235);
        line(109, 249, 129, 249);
        line(109, 157, 129, 157);
        line(119, 279, 119, 299);
        line(73, 279, 73, 299);
        stroke(150, 255, 150);
        line(119, 89, 303, 89);
        line(303, 89, 303, 111);
        line(303, 111, 349, 111);
        line(349, 111, 349, 180);
        line(349, 180, 315, 180);
        line(315, 180, 315, 341);
        line(315, 341, 291, 341);
        line(291, 341, 291, 329);
        line(291, 329, 211, 329);
        line(211, 329, 211, 341);
        line(189, 341, 189, 329);
        line(189, 329, 165, 329);
        line(165, 329, 165, 341);
        line(165, 341, 142, 341);
        line(142, 341, 142, 329);
        line(142, 329, 50, 329);
        line(50, 329, 50, 110);
        line(50, 111, 119, 111);
        line(119, 111, 119, 88);
        line(141, 111, 153, 111);
        line(153, 111, 153, 122);
        line(153, 122, 177, 122);
        line(177, 122, 177, 111);
        line(177, 111, 189, 111);
        line(211, 111, 222, 111);
        line(222, 111, 222, 122);
        line(222, 122, 256, 122);
        line(256, 122, 256, 111);
        line(256, 111, 281, 111);
        line(281, 111, 281, 124);
        line(281, 143, 281, 181);
        line(281, 200, 281, 249);
        line(281, 203, 293, 203);
        line(281, 249, 293, 249);
        line(281, 272, 292, 272);
        line(292, 272, 292, 306);
        line(292, 306, 281, 306);
        line(281, 306, 281, 271);
        line(258, 306, 211, 306);
        line(189, 306, 142, 306);
        line(142, 306, 142, 236);
        line(142, 214, 142, 144);
        line(142, 144, 189, 144);
        line(211, 144, 258, 144);
        line(258, 144, 258, 214);
        line(258, 236, 258, 306);
        line(142, 157, 130, 157);
        line(108, 157, 95, 157);
        line(96, 157, 96, 249);
        line(96, 249, 108, 249);
        line(130, 249, 142, 249);
        line(119, 272, 72, 272);
        line(73, 272, 73, 278);
        line(73, 300, 73, 306);
        line(73, 306, 119, 306);
        line(119, 306, 119, 300);
        line(119, 278, 119, 272);
        fill(255);
        textFont(fonts.AgencyFB14);
        text("Servers", 200, 225);
        text("North Hallway", 200, 100);
        text("South Corridor", 200, 318);
        return get(0, 0, 400, 400);
    },
    "lock": function() {
        translate(0, 5.5);
        noFill();
        stroke(255);
        strokeWeight(7);
        ellipse(0, 0, 14, 14);
        rect(0, 0, 16, 16, 1);
        strokeWeight(5);
        arc(0, -15, 12, 12, 200, 340);
        line(-6, -15, -6, -10);
        line(6, -15, 6, -10);
        return get(0, 0, 400, 400);
    },
};
//}
//} END "GRAPHICS"

// "OBJECTS" {
var guns = [
    // PISTOLS
    [
    "P180 Blaster Pistol", "Pistol", "Light Rounds", "The P180 is a simple handgun with a small magazine and little firepower. Fortunately, it's better than nothing.", "A light handgun.", "Semi-Auto", "Hands", 5, 7, 1, 100, 12, 500, [0, 15], 0, [], 60, "Mag-Fed", 10, 4, 2, 8, 1, [[["Scope", "Red Dot"], [["ScopeAccuracy", 0.5]]], [["Magazine", "Extended Mag"], [["Mag", [9, 12, 15]]]], [["Magazine", "Quickdraw Mag"], [["Reload", [100, 80, 60]], ["Fire", [8, 6, 4]]]], [["Foregrip", "Laser Sight"], [["Accuracy", [0.95, 0.85, 0.75]]]]], "Normal Scope", ["hands", [[-1, 2], [1, 5]]], function() {
        translate(0, -1.25);
        fill(255);
        polygon(-13, -7, 14, -7, 13, -2, -8, -1, -14, -2);
        quad(-11, -2, -6, -2, -9, 10, -14, 9);
        rect(0, -6.5, 6, 2);
        stroke(255);
        strokeWeight(1);
        noFill();
        arc(-7, -2, 14, 10, -45, 110);
        arc(0, -2, 10, 10, 150, 180);
        return [get(0, 0, 400, 400), 28, 18];
    }, function() {
        strokeWeight(4);
        stroke(200);
        line(0, 0, 0, 15);
        return get(0, 0, 400, 400);
    }, "Common"
    ], // (0) P180 Blaster Pistol
    [
    "P834 Assault Pistol", "Pistol", "Light Rounds", "A rapid-fire handgun with a medium-sized magazine and fast reload, the P834 is handy in tight situations. Unfortunately, it has a problem with firing spread.", "A high-powered, full-auto pistol.", "Full-Auto", "Hands", 7, 20, 1, 90, 7, 800, [0, 15], 0, [], 120, "Mag-Fed", 5, 5, 2.5, 11, 1, [[["Scope", "Red Dot"], [["ScopeAccuracy", 0.5], ]], [["Muzzle", "Silencer"], [["Noise", [6, 5, 4]]]], [["Magazine", "Extended Mag"], [["Mag", [23, 26, 30]]]], ], "Normal Scope", ["hands", [[-1, 2], [1, 5]]], function() {
        translate(0.25, -1.7);
        fill(255);
        rect(-1, -4, 26, 4, 4, 4, 0, 0);
        polygon(-14, -2, 12, -2, 11, -1, -12, 1);
        rect(12, -3, 4, 2);
        rect(-5, -5.5, 10, 2, 2);
        quad(-12, 0, -7, 0, -10, 10, -14.5, 9);
        stroke(255);
        strokeWeight(1);
        noFill();
        arc(-1, 0, 10, 10, 150, 180);
        rect(-6, 0, 10, 8, 0, 0, 4, 0);
        return [get(0, 0, 400, 400), 29, 17];
    }, function() {
        strokeWeight(4);
        stroke(0);
        line(0, 0, 0, 15);
        return get(0, 0, 400, 400);
    }, "Uncommon"
    ], // (1) P834 Assault Pistol
    // SHOTGUNS
    [
    "S31 Sawed-Off", "Shotgun", "Shotgun Rounds", "A quick firing but low-damage solution for your problems, the S31 doesn't have a whole lot more to offer than that. Still, it has a rapid reload time.", "A handy two-hit shotgun.", "Semi-Auto", "Hands", 7, 2, 5, 80, 8, 300, [0, 20], 0, [], 120, "Round-by-Round", 5, 15, 5, 20, 1, [[["Muzzle", "Choke"], [["Accuracy", [0.9, 0.8, 0.7]], ]], ], "Shotgun Scope", ["hands", [[-1, 2], [0, 14]]], function() {
        translate(1, 0);
        fill(255);
        rect(5, -4, 30, 2, 2);
        polygon(-16, -3.4, -10, -5, 20, -4.2, -5, -2, -15, 0.7);
        pushMatrix();
        translate(-10, -5);
        rotate(40);
        rect(0, 0, 4, 1.5, 5);
        popMatrix();
        stroke(255);
        strokeWeight(4);
        noFill();
        arc(-10, 6, 20, 18, 190, 235);
        arc(-10, 6, 20, 17, 190, 235);
        strokeWeight(1);
        arc(-15, -5, 70, 6, 25, 90);
        arc(-7, -1, 10, 6, -40, 90);
        line(-7, 2, -10, 2);
        arc(-10, 0, 4, 4, 90, 180);
        arc(-3, -2.5, 10, 10, 150, 180);
        return [get(0, 0, 400, 400), 43, 14];
    }, function() {
        strokeWeight(5);
        stroke(75, 50, 15);
        line(0, 0, 0, 7);
        stroke(50);
        line(0, 7, 0, 20);
        return get(0, 0, 400, 400);
    }, "Common"
    ], // (2) S31 Sawed-Off Shotgun
    [
    "S7891", "Shotgun", "Shotgun Rounds", "An old-fashioned hunting shotgun, the S3531 has low firing speed and a small magazine. However, its spread is decently controlled, and its damage should make you proud.", "A powerful hunting shotgun.", "Semi-Auto", "Shoulder", 6, 6, 7, 90, 9, 500, [0, 35], 0, [], 300, "Round-by-Round", 40, 20, 15, 35, 1, [[["Muzzle", "Choke"], [["Accuracy", [0.9, 0.8, 0.7]]]], [["Stock", "Bullet Loops"], [["Reload", [280, 260, 240]]]], [["Scope", "Red Dot"], [["ScopeAccuracy", 0.5], ]], [["Scope", "2x"], [["Scope", 2], ]], [["Scope", "3x"], [["Scope", 3]]]], "Shotgun Scope", ["animationDelay", 25, "hands", [[-1, 5], [2, 22, 2, 14]]], function() {
        translate(0, -2.4);
        fill(255);
        quad(-35, 0, -35, 8, -20, 4, -20, -1);
        rect(10, -2, 50, 2, 0, 2, 2, 0);
        rect(0, 0, 40, 2, 0, 0, 2, 0);
        rect(10, 1, 12, 2, 2);
        polygon(-22, 0, -15, -3, -12, 0, -17, 3, -19, 5, -21, 1);
        stroke(255);
        noFill();
        strokeWeight(1);
        arc(-7, 4.5, 22, 8.5, 180, 240);
        arc(-20, 4.5, 3, 2, 270, 360);
        arc(-15, 0, 10, 5, 180, 270);
        arc(-5, 0, 10, 10, 155, 180);
        arc(-9, 0, 8, 8, 0, 120);
        line(-11.25, 3.25, -12.5, 0);
        return [get(0, 0, 400, 400), 70, 12];
    }, function() {
        strokeWeight(5);
        stroke(75, 50, 15);
        line(0, 0, 0, 7.5);
        stroke(75);
        line(0, 7.5, 0, 35);
        return get(0, 0, 400, 400);
    }, "Uncommon"
    ], // (3) S7891
    // SUBMACHINE GUNS
    [
    "Karis SMG", "SMG", "Light Rounds", "Offering a balance between fire rate and damage, the Karis SMG can spit out highly-accurate bullets without stop. Plus, its wide range of modification options is quite handy.", "Rapid fire", "Full-Auto", "Shoulder", 4, 30, 1, 100, 11, 1100, [0, 30], 0, [], 180, "Mag-Fed", 5, 5, 1.25, 12, 1, [[["Muzzle", "Silencer"], [["Noise", [4, 3, 2]]]], [["Muzzle", "Compensator"], [["Recoil", [0.95, 0.9, 0.8]]]], [["Muzzle", "Accelerator"], [["Velocity", [115, 130, 150]], ["Damage", [12, 13, 14]]]], [["Magazine", "Extended Mag"], [["Mag", [33, 36, 40]]]], [["Magazine", "Quickdraw Mag"], [["Reload", [160, 140, 120]], ["Fire", [4, 4, 3]]]], [["Scope", "Red Dot"], [["ScopeAccuracy", 0.5], ]], [["Scope", "2x"], [["Scope", 2], ]], [["Scope", "3x"], [["Scope", 3]]], [["Scope", "4x"], [["Scope", 4], ]], [["Foregrip", "Light Grip"], [["Accuracy", [0.97, 0.94, 0.9]], ["Recoil", [0.99, 0.97, 0.95]], ]], [["Foregrip", "Laser Sight"], [["Accuracy", [0.95, 0.9, 0.8]], ]], ], "Second Scope", ["hands", [[-1, 10], [1, 25]]], function() {
        translate(0.5, -2);  
        fill(255);
        rect(10, -3, 40, 2);
        rect(29.5, -3, 1, 3);
        rect(-4, 0, 20, 2);
        rect(4, 2, 10, 2);
        rect(-6.6, -3, 6, 8);
        triangle(-3.6, -7, -3.6, 0, -2, 0);
        rect(10, -4.4, 34, 2);
        polygon(-9, -7, -9, 0, -15, 0, -15, -4);
        polygon(26, -7, 28, -7, 29, -3, 28, 0, 27, 0, 26, -3);
        polygon(10, 1.8, 10, -4, -10, -4, -10, 0, 9, 1.8);
        polygon(28, -2, 23, -1, 13, -1, 10, 0, 0, -2);
        stroke(255);
        strokeWeight(2);
        noFill();
        quad(-30, -4, -29, 3, -15, 1, -15, -4);
        arc(-15, 4, 10, 6, 270, 320);
        quad(-11, 2, -14, 8, -12.5, 8.5, -9, 2);
        arc(-15, -8, 8, 8, 50, 90);
        arc(-9.8, -2, 8, 8, 240, 270);
        arc(23, -8, 8, 8, 30, 90);
        strokeWeight(1);
        line(-9, 3, -7, 4);
        line(-7, 4, -2, 4);
        line(-2, 4, -1, 3);
        arc(0, 0, 10, 10, 150, 180);
        strokeCap(SQUARE);
        strokeWeight(4);
        arc(18, 0, 20, 40, 150, 175);
        strokeCap(ROUND);
        return [get(0, 0, 400, 400), 62, 19];
    }, function() {
        strokeWeight(4);
        stroke(50);
        line(0, 0, 0, 7.5);
        strokeWeight(5);
        stroke(0);
        line(0, 7.5, 0, 30);
        return get(0, 0, 400, 400);
    }, "Common"
    ], // (4) Karis SMG
    // ASSAULT RIFLES
    [
    "K79 Rifle", "AR", "Heavy Rounds", "A decent fire rate combined with high damage helps make the K79 a great choice regardless of the situation.", "A steady AR.", "Burstfire", "Shoulder", 7, 30, 1, 130, 20, 1500, [0, 40], 0, [], 240, "Mag-Fed", 7, 3.5, 5, 11, 1, [[["Stock", "Tactical Stock"], [["Recoil", [0.95, 0.9, 0.8]], ]], [["Muzzle", "Silencer"], [["Noise", [6, 5, 4]]]], [["Muzzle", "Compensator"], [["Recoil", [0.97, 0.94, 0.9]], ]], [["Muzzle", "Accelerator"], [["Velocity", [140, 150, 160]], ["Damage", [21, 23, 25]], ]], [["Magazine", "Extended Mag"], [["Mag", [33, 36, 40]], ]], [["Magazine", "Quickdraw Mag"], [["Reload", [220, 200, 180]], ["Fire", [6, 6, 5]], ]], [["Scope", "Red Dot"], [["ScopeAccuracy", 0.5], ]], [["Scope", "2x"], [["Scope", 2], ]], [["Scope", "3x"], [["Scope", 3], ]], [["Scope", "4x"], [["Scope", 4], ]], [["Foregrip", "Vertical Grip"], [["Accuracy", [0.99, 0.97, 0.95]], ["Recoil", [0.97, 0.94, 0.9]], ]], [["Foregrip", "Laser Sight"], [["Accuracy", [0.95, 0.9, 0.8]]]]], "Normal Scope", ["hands", [[-1, 11], [1, 30]], "Burstfire", "3"], function() {
        translate(0, -3);
        fill(255);
        rect(0, -4, 80, 2);
        rect(39.5, -4, 1, 3);
        polygon(-40, -3, -38, 5, -28, 3, -25, -1, -25, -3);
        polygon(-20, -3, -17, -1, -16, 1, -14, 1, -14, -1, -14, -3);
        quad(-40, -5, -35, -5.5, -28, -5.5, -25, -5);
        quad(-18, 0, -20, 8, -15, 9, -13, 0);
        rect(5, -2, 40, 2, 0, 0, 2, 0);
        quad(-5, -1, -5, 5, 1, 5, 2, -1);
        polygon(-20, -5, -19, -6, -4, -7, 2, -7, 3, -2);
        arc(0, -5, 76, 2, 270, 360);
        arc(0, -3, 76, 2, 0, 90);
        rect(-22, -3, 6, 3, 2);
        for (var i = 0; i < 17; i++) {
            rect(i * 2 + 3, -5.5 + i / 36, 1, 2);
        }
        stroke(255);
        strokeWeight(2);
        noFill();
        arc(-21, 9, 10, 26, 270, 320);
        arc(-23, -1, 6, 6, 200, 250);
        arc(-11, 1, 6, 8, 160, 210);
        arc(-7, 1, 6, 8, -30, 35);
        strokeWeight(1);
        arc(-5, -1, 10, 10, 150, 180);
        line(-14, 3, -10, 4);
        line(-10, 4, -5, 4);
        line(37, -5, 37, -8);
        line(1, -5, 1, -7);
        line(-3, -5, -3, -7);
        arc(21, -2, 4, 8, 0, 30);
        arc(18, -2, 4, 8, 150, 180);
        rect(19, -2, 6, 2);
        strokeCap(SQUARE);
        strokeWeight(5);
        arc(7.5, 0, 20, 40, 140, 170);
        strokeCap(ROUND);
        return [get(0, 0, 400, 400), 80, 24];
    }, function() {
        strokeWeight(2);
        stroke(200);
        line(0, 10, 0, 40);
        strokeWeight(4);
        stroke(50);
        line(0, 0, 0, 10);
        strokeWeight(5);
        stroke(0);
        line(0, 10, 0, 37);
        return get(0, 0, 400, 400);
    }, "Common"
    ], // (5) K79 Rifle
    [
    "LX T7 Rifle", "AR", "Metallic Bolts", "Despite its low fire rate, the LX T7 has a damage worthy of a marksman rifle. Don't underestimate its low modibility, either; it hardly needs any upgrades", "Slow fire rate with great damage.", "Full-Auto", "Shoulder", 10, 20, 1, 150, 35, 1800, [0, 32], 0, [], 180, "Mag-Fed", 20, 4, 5, 13, 1.2, [[["Stock", "Tactical Stock"], [["Recoil", [0.95, 0.9, 0.8]], ]], [["Muzzle", "Compensator"], [["Recoil", [0.97, 0.94, 0.9]], ]], [["Magazine", "Quickdraw Mag"], [["Reload", [160, 140, 120]], ["Fire", [19, 17, 15]], ]], [["Scope", "Red Dot"], [["ScopeAccuracy", 0.5], ]], [["Scope", "2x"], [["Scope", 2], ]], [["Scope", "3x"], [["Scope", 3], ]], [["Scope", "4x"], [["Scope", 4], ]]], "Normal Scope", ["hands", [[-1, 9], [1, 20]]], function() {
        translate(0, -2.5);
        fill(255);
        rect(1, -2, 62, 2);
        rect(7, -2, 30, 3, 4);
        rect(29, -2, 6, 3, 1);
        polygon(-29, -3, -28.2, 5, -26, 5, -24, 2, -22, 1, -22, -2);
        polygon(-13, -3, -13, -4, -11, -5.5, 10, -5.5, 12, -4, 12, -3);
        quad(-16, -2, -16, 1.5, 4, 1.5, 6, -2);
        quad(-16.5, 1, -18, 8, -14.5, 9, -12.5, 1.5);
        quad(-7, 0, -6, 6, 0, 5, 0, 0);
        rect(8, 2, 3, 8, 2);
        rect(8, -1, 8, 2, 2);
        stroke(255);
        strokeWeight(2);
        noFill();
        polygon(-31, -3, -30, 5, -26, 5, -24, 2, -22, 1, -22, -2);
        line(-31, -3, -30, 6);
        arc(-18.5, 1, 6, 4, 190, 350);
        triangle(-22, -2, -13, -3, -10, -2);
        arc(3, 4, 7, 7, 180, 270);
        strokeWeight(1);
        arc(-6, 1, 10, 10, 150, 180);
        line(-13, 4, -11, 5);
        line(-11, 5, -6, 4.5);
        strokeCap(SQUARE);
        strokeWeight(5);
        arc(6.5, -2, 20, 40, 145, 170);
        strokeCap(ROUND);
        return [get(0, 0, 400, 400), 64, 17];
    }, function() {
        strokeWeight(2);
        stroke(0);
        line(0, 0, 0, 32);
        strokeWeight(3);
        stroke(50);
        line(0, 29, 0, 32);
        strokeWeight(4);
        stroke(50);
        line(0, 0, 0, 5);
        strokeWeight(5);
        stroke(75, 0, 0);
        line(0, 5, 0, 22);
        return get(0, 0, 400, 400);
    }, "Rare"
    ], // (6) LX T7 Rifle
    // SNIPER RIFLES
    [
    "Mk 89 SR", "Sniper Rifle", "Heavy Rounds", "A low fire rate might detract from this weapon's appeal, but its high damage more than accounts for that.", "One shot, one kill.", "Semi-Auto", "Shoulder", 10, 5, 1, 200, 70, 2000, [0, 40], 0, [], 240, "Round-by-Round", 90, 20, 10, 30, 1, [[["Stock", "Tactical Stock"], [["Accuracy", [0.97, 0.94, 0.9]], ["Recoil", [0.97, 0.94, 0.9]], ]], [["Stock", "Bullet Loops"], [["Reload", [220, 200, 180]], ]], [["Scope", "Red Dot"], [["ScopeAccuracy", 0.5], ]], [["Scope", "2x"], [["Scope", 2], ]], [["Scope", "3x"], [["Scope", 3], ]], [["Scope", "4x"], [["Scope", 4], ]], [["Scope", "6x"], [["Scope", 6], ]]], "Sniper", ["animationDelay", 66, "hands", [[2, 25], [-1, 10, -2, 2]]], function() {
        translate(0, -1);
        fill(255);
        rect(13, -3, 54, 2, 1, 0, 0, 0);
        triangle(-14, -2, -15, -2, -14, -3);
        rect(-32, -2, 12, 1, 2);
        arc(38, -4, 4, 3, 180, 270);
        polygon(-40, -2, -40, 0, -11, 0, -11, 1, -1, 1, 0, -1, 15, -1, 15, -2);
        polygon(-40, 0, -39, 7, -30, 6, -28, 2, -25, 2, -18, 5, -18, 0);
        rect(15, -2, 2, 2, 2);
        rect(-10, -4, 5, 1, 2);
        rect(-2, -4, 5, 1, 2);
        stroke(255);
        noFill();
        strokeWeight(2);
        arc(-16, -1, 18, 12, 90, 180);
        ellipse(-15, 2, 6, 5);
        line(-15.9, 5.1, -12, 4);
        triangle(-12, 4, -11, 0, -12, 0);
        strokeWeight(1);
        arc(-4, 0, 10, 10, 150, 180);
        arc(-9, 1, 10, 6, -40, 90);
        line(-9, 4, -12, 4);
        return [get(0, 0, 400, 400), 80, 13];
    }, function() {
        strokeWeight(5);
        stroke(110, 60, 15);
        line(0, 0, 0, 13);
        stroke(70, 50, 30);
        line(0, 13, 0, 28);
        strokeWeight(2);
        stroke(0);
        line(0, 13, 0, 40);
        noFill();
        point(-4, 10);
        strokeWeight(1);
        arc(0, 10, 8, 6, 90, 180);
        return get(0, 0, 400, 400);
    }, "Uncommon"
    ], // (7) Mk 89 SR
    // LIGHT MACHINE GUNS
    [
    "M8 SAW", "LMG", "Heavy Rounds", "The low magazine size and high reload times of this weapon are balanced out by good damage, fire rate, and modibility.", "Medium range weapon.", "Full-Auto", "Shoulder", 6, 25, 1, 110, 15, 3000, [0, 30], 0, [], 300, "Mag-Fed", 8, 5, 5, 20, 1.1, [[["Muzzle", "Compensator"], [["Recoil", [0.95, 0.9, 0.8]]]], [["Muzzle", "Accelerator"], [["Velocity", [125, 150, 170]], ["Damage", [16, 18, 20]]]], [["Magazine", "Extended Mag"], [["Mag", [30, 35, 40]]]], [["Magazine", "Quickdraw Mag"], [["Reload", [270, 240, 210]], ["Fire", [6, 5, 4]]]], [["Scope", "Red Dot"], [["ScopeAccuracy", 0.5]]], [["Scope", "2x"], [["Scope", 2]]], [["Scope", "3x"], [["Scope", 3]]], [["Scope", "4x"], [["Scope", 4]]], [["Foregrip", "Light Grip"], [["Accuracy", [0.95, 0.9, 0.8]], ["Recoil", [0.98, 0.95, 0.9]]]], [["Foregrip", "Laser Sight"], [["Accuracy", [0.9, 0.8, 0.7]]]], [["Foregrip", "Vertical Grip"], [["Recoil", [0.9, 0.8, 0.7]]]], [["Stock", "Tactical Stock"], [["Recoil", [0.95, 0.9, 0.8]]]]], "Normal Scope", ["hands", [[-1, 12], [1, 22]]], function() {
        translate(0, -3.5);
        fill(255);
        rect(0, 0, 60, 2);
        quad(-27.5, 7.5, -30, 0, -18, 0, -20, 5);
        rect(-2.5, -1, 20, 4, 0, 1, 0, 0);
        rect(6, 0, 34, 4, 1);
        ellipse(-24, -1, 12, 1);
        rect(1, 2, 13, 2, 1);
        for (var i = 0; i < 10; i++) {
            rect(8 + i * 1.5, 2, 1, 1);
        }
        pushMatrix();
        translate(1, 3);
        rect(0, -1, 10, 3, 2);
        rotate(-15);
        rect(0, 0, 5, 10, 2);
        rect(0, 4, 5.5, 2, 2);
        popMatrix();
        stroke(255);
        strokeWeight(1);
        noFill();
        arc(26, 0, 3, 6, 120, 240);
        arc(26, 0, 1, 6, 120, 240);
        arc(-9, 2, 8, 6, 0, 140);
        arc(-7, 1.5, 2, 4, 120, 180);
        strokeWeight(2);
        arc(-24, 0, 10, 20, 140, 180);
        arc(-18, -1.75, 12, 3, 0, 90);
        arc(-16, 3, 8, 6, -160, 10);
        line(-12, 3, -13, 8);
        line(-13, 8, -11.5, 8.5);
        line(-11.5, 8.5, -10, 0);
        line(-12, 8, -11, 0);
        arc(-8, 3, 5, 4, 180, 270);
        noStroke();
        return [get(0, 0, 400, 400), 60, 13];
    }, function() {
        noStroke();
        fill(145, 130, 100);
        rect(0, 16, 10, 5);
        strokeWeight(1);
        stroke(0);
        line(0, 0, 0, 30);
        line(-2, 18, 2, 18);
        strokeWeight(2);
        stroke(180, 155, 125);
        line(0, 0, 0, 24);
        strokeWeight(4);
        stroke(200, 175, 145);
        line(0, 7, 0, 19);
        return get(0, 0, 400, 400);
    }, "Uncommon"
    ], // (8) M8 SAW
    [
    "RA-L11 Repeater", "LMG", "Metallic Bolts", "The powerful nature of this weapon is certainly unquestionable. A fast fire rate, large magazine size, and mediocre damage all contribute to an amazing weapon.", "An all around great gun.", "Full-Auto", "Shoulder", 7, 100, 1, 70, 10, 2500, [0, 35], 0, [], 300, "Mag-Fed", 7, 8, 4, 22, 1.2, [[["Stock", "Tactical Stock"], [["Recoil", [0.97, 0.94, 0.9]], ]], [["Muzzle", "Compensator"], [["Recoil", [0.97, 0.94, 0.9]], ]], [["Magazine", "Extended Mag"], [["Mag", [125, 150, 200]], ]], [["Magazine", "Quickdraw Mag"], [["Reload", [280, 260, 240]], ["Fire", [6, 5, 4]], ]], [["Scope", "Red Dot"], [["ScopeAccuracy", 0.5], ]], [["Scope", "2x"], [["Scope", 2], ]], [["Scope", "4x"], [["Scope", 4], ]], ], "Circle", ["hands", [[-1, 7], [1, 25]]], function() {
        translate(0, -1.25);
        fill(255);
        rect(2, -3, 66, 2, 1);
        rect(9, -1, 50, 1.5, 1);
        rect(6, -2, 52, 5, 0, 1, 1, 0);
        rect(-20, -4, 20, 1);
        rect(-1, -5, 6, 1);
        rect(-8, 2, 10, 5);
        rect(16, 0, 14, 3, 2);
        rect(16, 2, 3, 10, 1);
        rect(-27, 0, 2, 8);
        polygon(-30, -4, -30, -6, -18, -7, -12, -7, -12, -4);
        rect(0, -6, 8, 2, 0, 1, 1, 0);
        rect(-8, -6.4, 8, 1.2);
        for (var i = -12; i < 3; i++) {
            rect(i * 1.5, -6.8, 1, 1);
        }
        pushMatrix();
        translate(-8, 4.5);
        rotate(85);
        rect(0, 0, 10, 8, 1);
        popMatrix();
        strokeWeight(2);
        noFill();
        stroke(255);
        point(-21, -2);
        line(-34, -5, -34, 5);
        line(-31, 5, -26, 5);
        line(-31, 5, -22, 6);
        arc(-25, 2, 8, 5, 30, 120);
        arc(-24, 1.5, 6, 6, 90, 270);
        arc(-23, 1, 5, 5, 270, 360);
        strokeWeight(3);
        line(-21.3, 5.5, -19, -2);
        strokeWeight(4);
        line(-30, -4, -30, 4);
        arc(7, 3.2, 20, 9.4, 190, 270);
        strokeWeight(1);
        line(-34, -3, -31, -3);
        line(-34, 3, -31, 3);
        line(-20, 3.5, -12, 3.5);
        arc(-12, -0.5, 10, 10, 150, 180);
        return [get(0, 0, 400, 400), 70, 18];
    }, function() {
        noStroke();
        fill(0);
        rect(0, 13.5, 12, 6);
        strokeWeight(1);
        stroke(0);
        line(0, 0, 0, 35);
        strokeWeight(4);
        stroke(200);
        line(0, 10, 0, 30);
        stroke(100);
        line(-1, 0, 1, 0);
        strokeWeight(5);
        line(0, 4, 0, 15);
        return get(0, 0, 400, 400);
    }, "Rare"
    ], // (9) RA-L11 Repeater
    // MISCALLANEOUS WEAPONS
    [
    "RPG-39c", "RPG", "Rockets", "A single explosive shot from this weapon is enough to take out enemies in a large radius. Unfortunately, ammo conservation will be an issue.", "One shot, five kills.", "Semi-Auto", "Shoulder", 6, 1, 1, 70, 60, 600, [0, 17.5], 1.5, [], 180, "Round-by-Round", 180, 10, 15, 25, 1.6, [], "Circle", ["MuzzleFlash", "false", "drawnOnTop", true, "hands", [[-2, 2], [2, 12]]], function() {
        translate(0, -2.5);
        fill(255);
        rect(5, 0, 60, 10, 2);
        rect(-25, 0, 6, 8);
        quad(-28, -4, -28, 4, -35, 5, -35, -5);
        rect(29, 8, 4, 12, 2);
        pushMatrix();
        translate(5, 8);
        rotate(5);
        rect(0, 0, 6, 16, 2);
        popMatrix();
        noFill();
        stroke(255);
        strokeWeight(2);
        arc(9, 5, 10, 8, 0, 140);
        arc(1, 7.2, 4, 6, -90, 0);
        arc(-23, 13, 10, 20, -90, 0);
        line(-15, 13, -14, 0);
        line(-16, 13, -16, 0);
        line(-17, 13, -18.5, 0);
        polygon(-14, -5, -12, -7, 12, -7, 14, -5);
        polygon(34, -4, 34, -7, 24, -7, 22, -5);
        line(0, -7, 0, -10);
        line(29, -7, 29, -10);
        strokeWeight(1);
        arc(14, 4, 10, 10, 150, 180);
        return [get(0, 0, 400, 400), 70, 28];
    }, function() {
        noStroke();
        fill(0);
        rect(0, 1.25, 8, 32.5, 1);
        triangle(0, 0, 4, -20, -4, -20);
        return get(0, 0, 400, 400);
    }, "Rare"
    ], // (10) RPG-39c
    [
    "AMW-19 Flamethrower", "Flamethrower", "Fuel", "A light wrist-mounted flamethrower, the AMW-19 only fires for about a second-and-a-half; despite this, it still does impressive damage to any type of opponent.", "", "Full-Auto", "Shoulder", 1, 100, 1, 20, 4, 250, [0, 6], 0, [], 180, "Mag-Fed", 0.5, 3.5, 0, 3.5, 1, [], "Circle", ["Ground", "false", "Reload", "auto", "MuzzleFlash", "false", "hands", [[0, 3], [0, 0]]], function() {
        translate(0, 1);
        fill(255);
        rect(0, 0, 20, 12, 2);
        rect(0, -6, 12, 7, 2);
        rect(6, -7.5, 4, 2, 1);
        strokeWeight(2);
        stroke(255);
        noFill();
        line(9, -5, -9, -6);
        line(-9, -6, -9, 6);
        line(-9, 6, 9, 5);
        return [get(0, 0, 400, 400), 20, 17];
    }, function() {
        fill(0);
        rect(0, 2, 6, 8, 2);
        fill(200);
        rect(0, 4, 4, 4, 2);
        return get(0, 0, 400, 400);
    }, "Rare"
    ], // (11) AMW-19 Flamethrower
    [
    "HAW-R2 Chain Gun", "AR", "Metallic Bolts", "A powerful weapon with high damage but weak reload time.", "", "Full-Auto", "Hands", 5, 20, 1, 300, 20, 500, [0, 10], 0, [], 240, "Mag-Fed", 1, 10, 7, 30, 5, [], "Circle", ["Ground", "false", "Reload", "auto", "Spool", 80, "hands", [[0, 0], [0, 0]]], function() {
        fill(255);
        rect(9, 0, 2, 7, 1);
        rect(-5, 0, 10, 6);
        stroke(255);
        strokeWeight(1.5);
        noFill();
        line(9, 0, 0, 0);
        line(9, -2, 0, -2);
        line(9, 2, 0, 2);
        strokeWeight(2);
        line(-1, -3, -9, -3.5);
        line(-1, 3, -9, 3.5);
        line(-9, -4, -9, 4);
        return [get(0, 0, 400, 400), 20, 10];
    }, function() {
        fill(100);
        rect(0, 5, 4, 10);
        fill(0);
        rect(0, 9.5, 6, 1);
        strokeWeight(5);
        stroke(0);
        line(0, -1, 0, -3);
        return get(0, 0, 400, 400);
    }, "Rare"
    ], // (12) HAW-R2 Chain Gun
];
var attacks = {
    "Punch": function(obj) {
        obj.rotateImage = false;
        if (obj.meleePull < 10 && !obj.alreadyAttacked[0]) {
            obj.meleePull += compensateFPS * 2.5;
        } else {
            obj.alreadyAttacked[0] = true;
            obj.meleePull -= compensateFPS;
        }
        var simplify = obj.x - (obj.hand2[2] * -sin(obj.hand2[3] + obj.rot));
        var simplify2 = obj.y - (obj.hand2[2] * cos(obj.hand2[3] + obj.rot));
        obj.hand2[0] = simplify - (obj.meleePull * -sin(obj.rot + 180));
        obj.hand2[1] = simplify2 - (obj.meleePull * cos(obj.rot + 180));
        obj.hand1[0] = obj.x - (obj.hand1[2] * -sin(obj.hand1[3] + obj.rot));
        obj.hand1[1] = obj.y - (obj.hand1[2] * cos(obj.hand1[3] + obj.rot));
        for (var i = 0; i < obj.damageWireFrame.length; i++) {
            var simplify = obj.x - (obj.damageWireFrame[i][2] * -sin(obj.damageWireFrame[i][3] + obj.rot));
            var simplify2 = obj.y - (obj.damageWireFrame[i][2] * cos(obj.damageWireFrame[i][3] + obj.rot));
            obj.damageWireFrame[i][0] = simplify - (obj.meleePull * -sin(obj.rot + 180));
            obj.damageWireFrame[i][1] = simplify2 - (obj.meleePull * cos(obj.rot + 180));
        }
        if (obj.meleePull <= 0.1 && obj.alreadyAttacked[0]) {
            obj.attacking = false;
            obj.meleePull = 0;
            obj.currentReload = obj.reload;
        }
    },
    "Punch2": function(obj) {
        obj.rotateImage = false;
        if (obj.meleePull < 10 && !obj.alreadyAttacked[0]) {
            obj.meleePull += compensateFPS * 2.5;
        } else {
            obj.alreadyAttacked[0] = true;
            obj.meleePull -= compensateFPS;
        }
        var simplify = obj.x - (obj.hand1[2] * -sin(obj.hand1[3] + obj.rot));
        var simplify2 = obj.y - (obj.hand1[2] * cos(obj.hand1[3] + obj.rot));
        obj.hand1[0] = simplify - (obj.meleePull * -sin(obj.rot + 180));
        obj.hand1[1] = simplify2 - (obj.meleePull * cos(obj.rot + 180));
        obj.hand2[0] = obj.x - (obj.hand2[2] * -sin(obj.hand2[3] + obj.rot));
        obj.hand2[1] = obj.y - (obj.hand2[2] * cos(obj.hand2[3] + obj.rot));
        for (var i = 0; i < obj.damageWireFrame.length; i++) {
            var simplify = obj.x - (obj.damageWireFrame[i][2] * -sin(obj.damageWireFrame[i][3] + obj.rot));
            var simplify2 = obj.y - (obj.damageWireFrame[i][2] * cos(obj.damageWireFrame[i][3] + obj.rot));
            obj.damageWireFrame[i][0] = simplify - (obj.meleePull * -sin(obj.rot + 180));
            obj.damageWireFrame[i][1] = simplify2 - (obj.meleePull * cos(obj.rot + 180));
        }
        if (obj.meleePull <= 0.1 && obj.alreadyAttacked[0]) {
            obj.attacking = false;
            obj.meleePull = 0;
            obj.currentReload = obj.reload;
        }
    },
    "Stab": function(obj) {
        obj.rotateImage = false;
        if (obj.meleePull < 9 && !obj.alreadyAttacked[0]) {
            obj.meleePull += compensateFPS * 3;
        } else {
            obj.alreadyAttacked[0] = true;
            obj.meleePull -= compensateFPS;
        }
        var simplify = obj.x - (obj.hand1[2] * -sin(obj.hand1[3] + obj.rot));
        var simplify2 = obj.y - (obj.hand1[2] * cos(obj.hand1[3] + obj.rot));
        obj.hand1[0] = simplify - (obj.meleePull * -sin(obj.rot + 180));
        obj.hand1[1] = simplify2 - (obj.meleePull * cos(obj.rot + 180));
        obj.hand2[0] = obj.x - (obj.hand2[2] * -sin(obj.hand2[3] + obj.rot - (obj.meleePull * 1.5)));
        obj.hand2[1] = obj.y - (obj.hand2[2] * cos(obj.hand2[3] + obj.rot - (obj.meleePull * 1.5)));
        for (var i = 0; i < obj.damageWireFrame.length; i++) {
            var simplify = obj.x - (obj.damageWireFrame[i][2] * -sin(obj.damageWireFrame[i][3] + obj.rot));
            var simplify2 = obj.y - (obj.damageWireFrame[i][2] * cos(obj.damageWireFrame[i][3] + obj.rot));
            obj.damageWireFrame[i][0] = simplify - (obj.meleePull * -sin(obj.rot + 180));
            obj.damageWireFrame[i][1] = simplify2 - (obj.meleePull * cos(obj.rot + 180));
        }
        if (obj.meleePull <= 0.1 && obj.alreadyAttacked[0]) {
            obj.attacking = false;
            obj.meleePull = 0;
            obj.currentReload = obj.reload;
        }
    },
    "Stab2": function(obj) {
        obj.rotateImage = false;
        if (obj.meleePull < 9 && !obj.alreadyAttacked[0]) {
            obj.meleePull += compensateFPS * 3;
        } else {
            obj.alreadyAttacked[0] = true;
            obj.meleePull -= compensateFPS;
        }
        var simplify = obj.x - (obj.hand1[2] * -sin(obj.hand1[3] + obj.rot));
        var simplify2 = obj.y - (obj.hand1[2] * cos(obj.hand1[3] + obj.rot));
        obj.hand1[0] = simplify - (obj.meleePull * -sin(obj.rot + 180));
        obj.hand1[1] = simplify2 - (obj.meleePull * cos(obj.rot + 180));
        var simplify = obj.x - (obj.hand2[2] * -sin(obj.hand2[3] + obj.rot));
        var simplify2 = obj.y - (obj.hand2[2] * cos(obj.hand2[3] + obj.rot));
        obj.hand2[0] = simplify - (obj.meleePull * -sin(obj.rot + 180));
        obj.hand2[1] = simplify2 - (obj.meleePull * cos(obj.rot + 180));
        for (var i = 0; i < obj.damageWireFrame.length; i++) {
            var simplify = obj.x - (obj.damageWireFrame[i][2] * -sin(obj.damageWireFrame[i][3] + obj.rot));
            var simplify2 = obj.y - (obj.damageWireFrame[i][2] * cos(obj.damageWireFrame[i][3] + obj.rot));
            obj.damageWireFrame[i][0] = simplify - (obj.meleePull * -sin(obj.rot + 180));
            obj.damageWireFrame[i][1] = simplify2 - (obj.meleePull * cos(obj.rot + 180));
        }
        if (obj.meleePull <= 0.1 && obj.alreadyAttacked[0]) {
            obj.attacking = false;
            obj.meleePull = 0;
            obj.currentReload = obj.reload;
        }
    },
    "Stab3": function(obj) {
        obj.rotateImage = true;
        if (obj.meleePull < 12 && !obj.alreadyAttacked[0]) {
            obj.meleePull += compensateFPS * 4;
        } else {
            obj.alreadyAttacked[0] = true;
            obj.meleePull -= compensateFPS * 1.25;
        }
        var simplify = obj.x - (obj.hand1[2] * -sin(obj.hand1[3] + obj.rot));
        var simplify2 = obj.y - (obj.hand1[2] * cos(obj.hand1[3] + obj.rot));
        obj.hand1[0] = simplify - (obj.meleePull * -sin(obj.rot + 180));
        obj.hand1[1] = simplify2 - (obj.meleePull * cos(obj.rot + 180));
        var simplify = obj.x - (obj.hand2[2] * -sin(obj.hand2[3] + obj.rot));
        var simplify2 = obj.y - (obj.hand2[2] * cos(obj.hand2[3] + obj.rot));
        obj.hand2[0] = simplify - (obj.meleePull * -sin(obj.rot + 180));
        obj.hand2[1] = simplify2 - (obj.meleePull * cos(obj.rot + 180));
        for (var i = 0; i < obj.damageWireFrame.length; i++) {
            var simplify = obj.x - (obj.damageWireFrame[i][2] * -sin(obj.damageWireFrame[i][3] + obj.rot));
            var simplify2 = obj.y - (obj.damageWireFrame[i][2] * cos(obj.damageWireFrame[i][3] + obj.rot));
            obj.damageWireFrame[i][0] = simplify - (obj.meleePull * -sin(obj.rot + 180));
            obj.damageWireFrame[i][1] = simplify2 - (obj.meleePull * cos(obj.rot + 180));
        }
        if (obj.meleePull <= 0.1 && obj.alreadyAttacked[0]) {
            obj.attacking = false;
            obj.meleePull = 0;
            obj.currentReload = obj.reload;
        }
    },
    "Stab4": function(obj) {
        obj.rotateImage = true;
        var maxStab = 90 - ((360 - obj.meleeHandRelative[1]) - 90);
        if (obj.meleePull < maxStab && !obj.alreadyAttacked[0] && !obj.alreadyAttacked[1] && !obj.alreadyAttacked[2]) {
            obj.meleePull += compensateFPS * 5;
            if (obj.meleePull >= maxStab) {
                obj.meleePull = 0;
                obj.alreadyAttacked[0] = true;
            }
        } else if (obj.meleePull < 12 && obj.alreadyAttacked[0] && !obj.alreadyAttacked[1] && !obj.alreadyAttacked[2]) {
            obj.meleePull += compensateFPS * 3;
            if (obj.meleePull >= 12) {
                obj.meleePull = 12;
                obj.alreadyAttacked[1] = true;
            }
        } else if (obj.meleePull > 0 && obj.alreadyAttacked[0] && obj.alreadyAttacked[1] && !obj.alreadyAttacked[2]) {
            obj.meleePull -= compensateFPS;
            if (obj.meleePull <= 0) {
                obj.meleePull = maxStab;
                obj.alreadyAttacked[2] = true;
            }
        } else if (obj.meleePull > 0 && obj.alreadyAttacked[0] && obj.alreadyAttacked[1] && obj.alreadyAttacked[2]) {
            obj.meleePull -= compensateFPS * 5;
            if (obj.meleePull <= 0) {
                obj.meleePull = 0;
            }
        }
        if ((!obj.alreadyAttacked[0] && !obj.alreadyAttacked[1] && !obj.alreadyAttacked[2]) || (obj.alreadyAttacked[0] && obj.alreadyAttacked[1] && obj.alreadyAttacked[2])) {
            var simplify = obj.x - (obj.hand1[2] * -sin(obj.hand1[3] + obj.rot + obj.meleePull));
            var simplify2 = obj.y - (obj.hand1[2] * cos(obj.hand1[3] + obj.rot + obj.meleePull));
            obj.hand1[0] = simplify;
            obj.hand1[1] = simplify2;
            var simplify3 = obj.meleeHandRelative[0];
            var simplify4 = obj.meleeHandRelative[1];
            var simplify5 = obj.rot - simplify4 + obj.meleePull;
            obj.hand2[0] = simplify - (simplify3 * -sin(simplify5));
            obj.hand2[1] = simplify2 - (simplify3 * cos(simplify5));
            for (var i = 0; i < obj.damageWireFrame.length; i++) {
                var simplify = obj.x - (obj.damageWireFrame[i][2] * -sin(obj.damageWireFrame[i][3] + obj.rot + obj.meleePull));
                var simplify2 = obj.y - (obj.damageWireFrame[i][2] * cos(obj.damageWireFrame[i][3] + obj.rot + obj.meleePull));
                obj.damageWireFrame[i][0] = simplify;
                obj.damageWireFrame[i][1] = simplify2;
            }
        } else {
            var simplify = obj.x - (obj.hand1[2] * -sin(obj.rot + maxStab + obj.hand1[3]));
            var simplify2 = obj.y - (obj.hand1[2] * cos(obj.rot + maxStab + obj.hand1[3]));
            obj.hand1[0] = simplify - (obj.meleePull * -sin(obj.rot + 180));
            obj.hand1[1] = simplify2 - (obj.meleePull * cos(obj.rot + 180));
            var simplify3 = obj.hand1[0] - (obj.meleeHandRelative[0] * -sin(obj.rot + 180));
            var simplify4 = obj.hand1[1] - (obj.meleeHandRelative[0] * cos(obj.rot + 180));
            obj.hand2[0] = simplify3;
            obj.hand2[1] = simplify4;
            for (var i = 0; i < obj.damageWireFrame.length; i++) {
                var simplify = obj.x - (obj.damageWireFrame[i][2] * -sin(obj.damageWireFrame[i][3] + obj.rot + maxStab));
                var simplify2 = obj.y - (obj.damageWireFrame[i][2] * cos(obj.damageWireFrame[i][3] + obj.rot + maxStab));
                obj.damageWireFrame[i][0] = simplify - (obj.meleePull * -sin(obj.rot + 180));
                obj.damageWireFrame[i][1] = simplify2 - (obj.meleePull * cos(obj.rot + 180));
            }
        }
        if (obj.meleePull <= 0 && obj.alreadyAttacked[0] && obj.alreadyAttacked[1] && obj.alreadyAttacked[2]) {
            obj.meleePull = 0;
            obj.attacking = false;
            obj.currentReload = obj.reload;
        }
    },
    "Swing": function(obj) {
        obj.rotateImage = true;
        if (!obj.alreadyAttacked[0]) {
            obj.meleePull -= compensateFPS * 5;
            if (obj.meleePull <= -60) {
                obj.meleePull = -60;
                obj.alreadyAttacked[0] = true;
            }
        } else if (!obj.alreadyAttacked[1]) {
            obj.meleePull += compensateFPS * 15;
            if (obj.meleePull >= 120) {
                obj.meleePull = 120;
                obj.alreadyAttacked[1] = true;
            }
        } else {
            obj.meleePull -= compensateFPS * 5;
        }
        var simplify = obj.x - (obj.hand1[2] * -sin(obj.hand1[3] + obj.rot + obj.meleePull));
        var simplify2 = obj.y - (obj.hand1[2] * cos(obj.hand1[3] + obj.rot + obj.meleePull));
        obj.hand1[0] = simplify;
        obj.hand1[1] = simplify2;
        var simplify3 = obj.meleeHandRelative[0];
        var simplify4 = obj.meleeHandRelative[1];
        var simplify5 = obj.rot - simplify4 + obj.meleePull;
        obj.hand2[0] = simplify - (simplify3 * -sin(simplify5));
        obj.hand2[1] = simplify2 - (simplify3 * cos(simplify5));
        for (var i = 0; i < obj.damageWireFrame.length; i++) {
            var simplify = obj.x - (obj.damageWireFrame[i][2] * -sin(obj.damageWireFrame[i][3] + obj.rot + obj.meleePull));
            var simplify2 = obj.y - (obj.damageWireFrame[i][2] * cos(obj.damageWireFrame[i][3] + obj.rot + obj.meleePull));
            obj.damageWireFrame[i][0] = simplify;
            obj.damageWireFrame[i][1] = simplify2;
        }
        if (obj.meleePull <= 0 && obj.alreadyAttacked[0] && obj.alreadyAttacked[1]) {
            obj.meleePull = 0;
            obj.attacking = false;
            obj.currentReload = obj.reload;
        }
    },
    "Swing2": function(obj) {
        obj.rotateImage = true;
        if (obj.meleePull > -30 && !obj.alreadyAttacked[0] && !obj.alreadyAttacked[1]) {
            obj.meleePull -= compensateFPS * 3;
            if (obj.meleePull <= -30) {
                obj.meleePull = -30;
                obj.alreadyAttacked[0] = true;
            }
        } else if (obj.meleePull < 30 && obj.alreadyAttacked[0] && !obj.alreadyAttacked[1]) {
            obj.meleePull += compensateFPS * 15;
            if (obj.meleePull >= 30) {
                obj.meleePull = 30;
                obj.alreadyAttacked[1] = true;
            }
        } else if (obj.meleePull > 0 && obj.alreadyAttacked[0] && obj.alreadyAttacked[1]) {
            obj.meleePull -= compensateFPS * 2;
        }
        var simplify = obj.x - (obj.hand1[2] * -sin(obj.hand1[3] + obj.rot + obj.meleePull));
        var simplify2 = obj.y - (obj.hand1[2] * cos(obj.hand1[3] + obj.rot + obj.meleePull));
        obj.hand1[0] = simplify;
        obj.hand1[1] = simplify2;
        obj.hand2[0] = obj.x - (obj.hand2[2] * -sin(obj.hand2[3] + obj.rot));
        obj.hand2[1] = obj.y - (obj.hand2[2] * cos(obj.hand2[3] + obj.rot));
        for (var i = 0; i < obj.damageWireFrame.length; i++) {
            var simplify = obj.x - (obj.damageWireFrame[i][2] * -sin(obj.damageWireFrame[i][3] + obj.rot + obj.meleePull));
            var simplify2 = obj.y - (obj.damageWireFrame[i][2] * cos(obj.damageWireFrame[i][3] + obj.rot + obj.meleePull));
            obj.damageWireFrame[i][0] = simplify;
            obj.damageWireFrame[i][1] = simplify2;
        }
        if (obj.meleePull <= 0 && obj.alreadyAttacked[1]) {
            obj.meleePull = 0;
            obj.attacking = false;
            obj.currentReload = obj.reload;
            
        }
    },
    "Swing3": function(obj) {
        obj.rotateImage = true;
        if (obj.meleePull > -60 && !obj.alreadyAttacked[0] && !obj.alreadyAttacked[1]) {
            obj.meleePull -= compensateFPS * 5;
            if (obj.meleePull <= -60) {
                obj.meleePull = -60;
                obj.alreadyAttacked[0] = true;
            }
        } else if (obj.meleePull < 50 && obj.alreadyAttacked[0] && !obj.alreadyAttacked[1]) {
            obj.meleePull += compensateFPS * 15;
            if (obj.meleePull >= 50) {
                obj.meleePull = 50;
                obj.alreadyAttacked[1] = true;
            }
        } else if (obj.meleePull > 0 && obj.alreadyAttacked[0] && obj.alreadyAttacked[1]) {
            obj.meleePull -= compensateFPS * 2;
        }
        var simplify = obj.x - (obj.hand1[2] * -sin(obj.hand1[3] + obj.rot + obj.meleePull));
        var simplify2 = obj.y - (obj.hand1[2] * cos(obj.hand1[3] + obj.rot + obj.meleePull));
        obj.hand1[0] = simplify;
        obj.hand1[1] = simplify2;
        var simplify3 = obj.meleeHandRelative[0];
        var simplify4 = obj.meleeHandRelative[1];
        var simplify5 = obj.rot - simplify4 + obj.meleePull;
        obj.hand2[0] = simplify - (simplify3 * -sin(simplify5));
        obj.hand2[1] = simplify2 - (simplify3 * cos(simplify5));
        for (var i = 0; i < obj.damageWireFrame.length; i++) {
            var simplify = obj.x - (obj.damageWireFrame[i][2] * -sin(obj.damageWireFrame[i][3] + obj.rot + obj.meleePull));
            var simplify2 = obj.y - (obj.damageWireFrame[i][2] * cos(obj.damageWireFrame[i][3] + obj.rot + obj.meleePull));
            obj.damageWireFrame[i][0] = simplify;
            obj.damageWireFrame[i][1] = simplify2;
        }
        if (obj.meleePull <= 0 && obj.alreadyAttacked[0] && obj.alreadyAttacked[1]) {
            obj.meleePull = 0;
            obj.attacking = false;
            obj.currentReload = obj.reload;
        }
    },
    "Swing4": function(obj) {
        obj.rotateImage = true;
        if (!obj.alreadyAttacked[0] && !obj.alreadyAttacked[1] && !obj.alreadyAttacked[2]) {
            obj.meleePull -= compensateFPS * 4;
            if (obj.meleePull <= -40) {
                obj.meleePull = -40;
                obj.alreadyAttacked[0] = true;
            }
        } else if (obj.alreadyAttacked[0] && !obj.alreadyAttacked[1] && !obj.alreadyAttacked[2]) {
            obj.meleePull += compensateFPS * 8;
            if (obj.meleePull >= 50) {
                obj.meleePull = 50;
                obj.alreadyAttacked[1] = true;
            }
        } else if (obj.alreadyAttacked[0] && obj.alreadyAttacked[1] && !obj.alreadyAttacked[2]) {
            obj.meleePull -= compensateFPS * 12;
            if (obj.meleePull <= -80) {
                obj.meleePull = -80;
                obj.alreadyAttacked[2] = true;
            }
        } else if (obj.meleePull < 0 && obj.alreadyAttacked[2]) {
            obj.meleePull += compensateFPS * 5;
        }
        var simplify = obj.x - (obj.hand1[2] * -sin(obj.hand1[3] + obj.rot + obj.meleePull));
        var simplify2 = obj.y - (obj.hand1[2] * cos(obj.hand1[3] + obj.rot + obj.meleePull));
        obj.hand1[0] = simplify;
        obj.hand1[1] = simplify2;
        var simplify3 = obj.meleeHandRelative[0];
        var simplify4 = obj.meleeHandRelative[1];
        var simplify5 = obj.rot - simplify4 + obj.meleePull;
        obj.hand2[0] = simplify - (simplify3 * -sin(simplify5));
        obj.hand2[1] = simplify2 - (simplify3 * cos(simplify5));
        for (var i = 0; i < obj.damageWireFrame.length; i++) {
            var simplify = obj.x - (obj.damageWireFrame[i][2] * -sin(obj.damageWireFrame[i][3] + obj.rot + obj.meleePull));
            var simplify2 = obj.y - (obj.damageWireFrame[i][2] * cos(obj.damageWireFrame[i][3] + obj.rot + obj.meleePull));
            obj.damageWireFrame[i][0] = simplify;
            obj.damageWireFrame[i][1] = simplify2;
        }
        if (obj.meleePull >= 0 && obj.alreadyAttacked[2]) {
            obj.meleePull = 0;
            obj.attacking = false;
            obj.currentReload = obj.reload;
        }
    },
};
var melee = [
    [
    "Fists", "Bare hands; only good for close-range attacks against weaker or dying enemies.", 25, 10, ["Punch", "Punch2"], [], [[8, 11], [-8, 11], [8, 11], [-8, 11]], function() {
        return get(0, 0, 400, 400);
    }, function() {
        translate(1.5, -0.25);
        fill(255);
        arc(0, 0.5, 16, 13, 90, 180);
        arc(-0.5, -3, 10, 7.5, 180, 270);
        rect(-5, 0.7, 8, 10);
        ellipse(-9, 0.7, 4, 10);
        stroke(255);
        strokeWeight(4);
        line(-0.5, -4.8, 3.3, -4.5);
        line(-3, -2, -0.5, -4.8);
        line(0, 0, 6.15, 0);
        line(0, -3, 5.5, -3);
        line(0, 3, 5.3, 3);
        strokeWeight(3);
        line(0, 5.5, 4.5, 5.4);
        return [get(0, 0, 400, 400), 20, 15];
        }, [], 0, "Impossible"
    ],
    [
    "Knife", "Great for quick jabs, but its low damage and range aren't great.", 30, 15, ["Stab", "Swing2"], [], [[-8, 11], [-2, 28], [8, 11], [-8, 11]], function() {
        pushMatrix();
        rotate(atan2(28 - 11, -2 + 8) - 90);
        stroke(70, 50, 20);
        noFill();
        strokeWeight(2);
        line(0, 0, 0, 3);
        strokeWeight(1);
        stroke(200);
        arc(0, 4, 8, 2, 50, 130);
        triangle(-0.5, 3, 0.5, 3, 0, 18);
        popMatrix();
        return get(0, 0, 400, 400);
    }, function() {
        fill(255);
        rect(-13, 0, 10, 4, 2, 0, 0, 2);
        triangle(14, -1, 14, 1, 18, 0);
        stroke(255);
        noFill();
        strokeWeight(2);
        arc(-6, 0, 4, 16, 140, 220);
        polygon(-8, -1, 14, 0, -8, 1);
        return [get(0, 0, 400, 400), 36, 14];
    }, [], 1, "Common"
    ],
    [
    "Sword", "A wider range allows for great versatility, but the reload could be shorter.", 50, 50, ["Swing3", "Stab2"], [], [[-8, 11], [-6, 35], [-8, 12], [-8, 10]], function() {
        pushMatrix();
        rotate(atan2(35 - 11, -6 + 8) - 90);
        stroke(75);
        noFill();
        strokeWeight(2);
        line(0, 0, 0, 3);
        stroke(200);
        line(0, 3, 0, 20);
        strokeWeight(1);
        arc(0, 4, 18, 2, 50, 130);
        triangle(-0.5, 20, 0.5, 20, 0, 24);
        popMatrix();
        return get(0, 0, 400, 400);
    }, function() {
        fill(255);
        quad(-23, -1.5, -23, 1.5, -14, 2, -14, -2);
        ellipse(-23, 0, 2, 3);
        rect(2, 0, 32, 4);
        triangle(18, -2, 18, 2, 24, 0);
        stroke(255);
        noFill();
        strokeWeight(2);
        arc(-13, 0, 2, 16, 135, 225);
        return [get(0, 0, 400, 400), 48, 14];
    }, [], 2, "Uncommon"
    ],
    [
    "Shield", "A modernized defensive mechanism featuring light shielding to absorb blasterfire, this is an effective tool for avoiding death.", 30, 40, ["Swing2", "Punch2"], ["Punch", "Stab", "Swing", "Swing2"], [[-16, 9], [0, 15], [8, 11], [-8, 11]], function() {
        pushMatrix();
        rotate(atan2(6, 16) - 90);
        noFill();
        stroke(200);
        strokeWeight(4);
        arc(0, 0, 4, 20, 110, 250);
        popMatrix();
        return get(0, 0, 400, 400);
    }, function() {
        translate(0, -0.25);
        scale(0.5);
        fill(255);
        polygon(-17, -16, 17, -16, 13, 3, 0, 18, -13, 3);
        stroke(255);
        noFill();
        strokeWeight(2);
        arc(-8.5, -17, 18, 3, 20, 160);
        arc(8.5, -17, 18, 3, 20, 160);
        arc(-21.5, -16, 77, 80, 0, 55);
        arc(21.5, -16, 77, 80, 125, 180);
        return [get(0, 0, 400, 400), 19, 19];
    }, ["Shield", true, "ONBACK", 140, "back", [-3, -3]], 3, "Rare"
    ],
    [
    "Needle", "A medical needle -- don't reuse it!", 20, 10, ["Stab", "Punch2"], [], [[-8, 11], [-8, 26], [8, 11], [-8, 11]], function() {
        stroke(0);
        strokeWeight(1);
        line(0, 0, 0, 15);
        strokeWeight(2);
        stroke(0, 255, 255, 100);
        line(0, 0, 0, 10);
        return get(0, 0, 400, 400);
    }, function() {
        fill(255);
        rect(0, 0, 30, 1);
        rect(-12, 0, 6, 3);
        rect(-14.5, 0, 1, 4, 1);
        rect(-9, 0, 1, 8, 1);
        rect(0, 0, 18, 4);
        ellipse(9, 0, 1, 4);
        rect(9, 0, 6, 2);
        ellipse(12, 0, 1, 2);
        return [get(0, 0, 400, 400), 30, 9];
    }, ["Ground", false], 1, "Impossible"
    ],
];
var attachments = {
	"Muzzle":{
		"Silencer":["Muzzle Suppressor","Decreases noise level of weapon.",function(){
	        fill(255);
            rect(0, 0, 20, 4, 1);
            return [get(0, 0, 400, 400), 20, 4];
		}],"Compensator":["Recoil Compensator","Decreases recoil level.",function(){
            fill(255);
            ellipse(8, 0, 1, 4);
            ellipse(-8, 0, 1, 4);
            stroke(255);
            noFill();
            strokeWeight(1);
            for (var i = -2; i <= 2; i++) {
                ellipse(i * 3, 0, 2.5, 2.5);
            }
            for (var i = -1.5; i <= 1.5; i++) {
                arc(i * 3, -2, 3, 2, 30, 150);
                arc(i * 3, 2, 3, 2, 210, 330);
            }
            line(-7.5, -1.5, -6, -1.5);
            line(-7.5, -1.5, -7.5, 1.5);
            line(-7.5, 1.5, -6, 1.5);
            line(7.5, -1.5, 6, -1.5);
            line(7.5, -1.5, 7.5, 1.5);
            line(7.5, 1.5, 6, 1.5);
            return [get(0, 0, 400, 400), 17, 4];
		}],"Accelerator":["Bullet Accelerator","Increases damage and muzzle velocity.",function(){
            fill(255);
            rect(0, 0, 20, 3, 0);
            rect(0, 0, 14, 4, 1);
            return [get(0, 0, 400, 400), 20, 4];
		}],"Choke":["Muzzle Choke","Decreases flechette spread.",function(){
            fill(255);
            rect(-1, 0, 18, 4, 1);
            rect(5, 0, 9, 5);
            ellipse(9.5, 0, 1, 5);
            ellipse(0.5, 0, 2, 5);
            return [get(0, 0, 400, 400), 20, 5];
		}],
	},
	"Foregrip":{
		"Vertical Grip":["Vertical Grip","Substantial decrease to recoil.",function(){
            translate(-1.75, 0.75);
            fill(255);
            polygon(0, -6.5, -2, 5, 1, 5, 3.5, -6.5);
            noFill();
            stroke(255);
            strokeWeight(1);
            for (var i = -1.5; i <= 1.5; i++) {
                arc(-i / 2 + 4, i * 2.5, 4, 4, 150, 210);
            }
            line(0, -5, -2.1, 4.9);
            line(-2, 5, 1.5, 5);
            arc(5.5, -5.3, 4, 2.5, 180, 270);
            arc(-2, -5, 4, 3, 270, 360);
            line(6.3, -6.6, -3, -6.6);
            return [get(0, 0, 400, 400), 11, 13];
		}],"Light Grip":["Light Grip","Improved accuracy and minor loss of recoil.",function(){
            translate(0.5, -0.5);
            fill(255);
            polygon(-10, -3, 10, -3, 9, -1, -10, -1);
            stroke(255);
            noFill();
            strokeWeight(2);
            line(-10, -2, -6, 3);
            line(-6, 3, 2, -2);
            return [get(0, 0, 400, 400), 21, 7];
		}],"Laser Sight":["Laser Sight","Substantial increase in accuracy.",function(){
		    translate(0, -0.25);
            fill(255);
            rect(-3, 0, 12, 3, 2, 0, 0, 2);
            ellipse(3, 0, 1, 3);
            rect(-2, 1, 8, 2, 1);
            fill(255, 150);
            triangle(0, 0, 9, -1, 9, 1);
            return [get(0, 0, 400, 400), 18, 3.5];
		}],
	},
	"Scope":{
		"Red Dot":["Red Dot Scope","Increase to accuracy while ADS.",function(){
            scopeImg("rd");
            return [get(0, 0, 400, 400), 13, 13];
		}],"2x":["2x Scope","Minor increase to ADS range.",function(){
		    scopeImg("2x");
            return [get(0, 0, 400, 400), 13, 13];
		}],"3x":["3x Scope","Mediocre increase to ADS range.",function(){
		    scopeImg("3x");
            return [get(0, 0, 400, 400), 13, 13];
		}],"4x":["4x Scope","Fair increase to ADS range.",function(){
		    scopeImg("4x");
            return [get(0, 0, 400, 400), 13, 13];
		}],"6x":["6x Scope","Significant increase to ADS range.",function(){
		    scopeImg("6x");
            return [get(0, 0, 400, 400), 13, 13];
		}]
	},
	"Magazine":{
		"Extended Mag":["Extended Magazine","Increases magazine size.",function(){
            stroke(255);
            noFill();
            strokeWeight(8);
            strokeCap(SQUARE);
            arc(8.5, -9, 20, 40, 130, 180);
            strokeCap(ROUND);
            return [get(0, 0, 400, 400), 12, 18];
		}],"Quickdraw Mag":["Quickdraw Magazine","Quicker fire rate and reloading.",function(){
		    translate(0, -1);
            stroke(255);
            noFill();
            strokeWeight(8);
            strokeCap(SQUARE);
            arc(9, -9, 20, 50, 140, 180);
            strokeCap(ROUND);
            strokeWeight(1.5);
            arc(1.35, 7, 6.5, 6.5, -20, 160);
            return [get(0, 0, 400, 400), 12, 20];
		}]
	},
	"Stock":{
		"Tactical Stock":["Tactical Stock","Substantial decrease to recoil.",function(){
            fill(255);
            rect(-9, 0, 2, 10, 1, 0, 0, 1);
            rect(-7, -3, 4, 1);
            rect(-7, 3, 4, 1);
            rect(-5.5, 0, 3, 10);
            rect(2, -3, 12, 4, 0, 1, 0, 0);
            rect(8, -2.5, 4, 3);
            strokeWeight(2);
            stroke(255);
            noFill();
            line(-4, 4, 0, 3);
            line(0, 3, 3, 0);
            line(3, 0, 7, -1);
            arc(-1, 2, 8, 8, 180, 270);
            arc(0, 0, 4, 4, 270, 400);
            return [get(0, 0, 400, 400), 20, 10];
		}],"Bullet Loops":["Bullet Loops","Faster reload time.",function(){
		    translate(0, 0.25);
            fill(255);
            rect(0, 0, 20, 4, 1);
            for (var i = -2; i <= 2; i++) {
                rect(i * 3.5, 0, 2.5, 6, 1);
                rect(i * 3.5, -3, 2.8, 1);
            }
            return [get(0, 0, 400, 400), 20, 7];
		}],
	},
};
var scopes = {
	"Red Dot": ["Red Dot",1,1,"Common"],
	"2x": ["2x",sqrt(2),1,"Common"],
	"3x": ["3x",sqrt(3),2,"Uncommon"],
	"4x": ["4x",2,2,"Uncommon"],
	"6x": ["6x",sqrt(6),3,"Rare"],
};
var grenades = [
	[
		"Frag Grenade","Explosion over large area; high damage.",225,90,30,"Frag",2,1,function() {
		    fill(0);
		    rect(0, 5, 6, 6);
		    fill(0, 100, 0);
		    ellipse(0, 0, 10, 10);
		    return get(0, 0, 400, 400);
		},function() {
            translate(-1, 1.5);
            fill(255);
            arc(0, 0.5, 10, 9, 0, 180);
            arc(0, -0.5, 10, 9, 180, 360);
            rect(0, 0, 9, 2);
            rect(0, -4, 6, 6, 1);
            stroke(255);
            strokeWeight(1);
            polygon(3, -6, 5, -5, 6, -2);
            noFill();
            ellipse(4, -5, 5, 5);
            return [get(0, 0, 400, 400), 15, 15];
		},
	],
	[
		"Stun Grenade","Stuns enemies within a large range.",250,90,180,"Stun",3,1,function() {
		    fill(150, 100, 100);
		    rect(0, 5, 4, 6, 1);
		    fill(100);
		    rect(0, 0, 7, 10, 1);
		    return get(0, 0, 400, 400);
		},function() {
		    translate(-1.75, 2);
            fill(255);
            rect(0, 0, 5, 14);
            rect(0, 7, 6, 2, 1);
            rect(0, -7, 6, 2, 1);
            polygon(-1.5, -7, 1.5, -7, 1.5, -9, 3.5, -9, 2.5, -12, -1.5, -12);
            stroke(255);
            strokeWeight(1);
            noFill();
            polygon(2.5, -11.5, 4.5, -8, 4.5, -4);
            ellipse(3.5, -9, 5, 5);
            return [get(0, 0, 400, 400), 10, 20];
		},
	],
	[
		"Smoke Grenade","A cloud of smoke that lasts 20 seconds.",150,90,1200,"Smoke",2,1,function() {
		    fill(200);
		    rect(0, 5, 4, 6, 1);
		    fill(50, 150, 50);
		    rect(0, 0, 7, 10);
		    fill(255);
		    rect(0, 0, 7, 2);
		    return get(0, 0, 400, 400);
		},function() {
		    translate(-0.75, 1);
            fill(255);
            rect(0, 0, 7, 14);
            ellipse(0, -7, 7, 1);
            quad(-2, -7, 2, -7, 1.5, -9, -1.5, -9);
            stroke(255);
            strokeWeight(1);
            noFill();
            ellipse(2, -6, 5, 5);
            return [get(0, 0, 400, 400), 9, 16];
		},
	],
];
var armor = [
	[
		"None","No armor equipped.",0,0,0,"None",function() {return get(0, 0, 400, 400);},function() {return get(0, 0, 400, 400);},false,"Impossible",
	],
	[
		"Light Vest","25% damage reduction, 150 durability",0.25,150,0,1,function() {
		    fill(200);
		    rect(0, 0, 26, 12);
		    ellipse(0, -6, 26, 2);
		    ellipse(0, 6, 26, 4);
		    return get(0, 0, 400, 400);
		},function() {
            translate(0, 0.2);
            scale(1, 0.8);
            fill(255);
            rect(0, 5, 14, 6);
            ellipse(0, 8, 14, 4);
            polygon(-5, 3, 5, 3, 3, 0, 3, -6, -3, -6, -3, 0);
            stroke(255);
            strokeWeight(2);
            noFill();
            line(-6, 2, -3, 0);
            line(6, 2, 3, 0);
            arc(13, -3, 20, 18, 160, 180);
            arc(-13, -3, 20, 18, 0, 20);
            line(3, -3, 3, -6);
            line(-3, -3, -3, -6);
            arc(0, -9, 7, 6, 0, 180);
            strokeWeight(3);
            line(2, -1, 4, -9);
            line(-2, -1, -4, -9);
            return [get(0, 0, 400, 400), 16, 17 * 8 / 7];
		},true,"Common",
	],
	[
	    "Assault Vest","50% damage reduction, 250 durability",0.5,250,0,2,function() {
	        fill(100);
		    rect(0, 0, 26, 12);
		    ellipse(0, -6, 26, 2);
		    ellipse(0, 6, 26, 4);
		    return get(0, 0, 400, 400);
	    }, function() {
            fill(255);
            translate(0, 0.75);
            scale(1, 0.8);
            fill(255);
            rect(0, 3, 14, 10);
            ellipse(0, 8, 14, 4);
            polygon(-6, -11, 0, -9, 6, -11, 4, -4, 6, 0, -6, 0, -4, -4);
            stroke(255);
            strokeWeight(2);
            noFill();
            arc(8.4, -6, 8, 10, 127, 230);
            arc(-8.4, -6, 8, 10, -50, 53);
            arc(4, -9, 6, 4, 270, 320);
            arc(-4, -9, 6, 4, 220, 270);
            line(-4, -11, -3, -11);
            line(4, -11, 3, -11);
            arc(0, -11, 5, 6, 0, 180);
            return [get(0, 0, 400, 400), 17, 18 * 17 / 15];
	    },true,"Uncommon",
	],
	[
	    "Heavy Armor","75% damage reduction, 400 durability",0.75,400,0,3,function() {
	        fill(75, 0, 0);
		    rect(0, 0, 34, 10, 2);
	        fill(100, 0, 0);
		    rect(0, 0, 26, 14);
		    ellipse(0, -7, 26, 5);
		    ellipse(0, 7, 26, 5);
		    return get(0, 0, 400, 400);
	    }, function() {
            scale(0.85, 1);
            fill(255);
            ellipse(0, 7, 14, 2);
            polygon(-7, 7, 7, 7, 7, -1, 5, -8, 2.5, -8, 2.5, -6, -2.5, -6, -2.5, -8, -5, -8, -7, -1);
            triangle(5, -8, 5, -6.5, 9.5, -5);
            triangle(-5, -8, -5, -6.5, -9.5, -5);
            stroke(255);
            strokeWeight(2);
            noFill();
            arc(0, -7.84, 5.4, 4, 25, 155);
            strokeWeight(1);
            arc(-3.75, 2.4, 16, 20.1, 230, 260);
            arc(3.75, 2.4, 16, 20.1, 280, 310);
            return [get(0, 0, 400, 400), 18, 18];
	    },true,"Rare"
	],
];
var backpack = [
	[
		"Bag","No backpack; eight spots.",8,"Bag",function() {return get(0, 0, 400, 400);},function() {return get(0, 0, 400, 400);},"Impossible"
	],
	[
		"Light Pack","2 additional backpack spots.",10,1,function() {
		    fill(200);
		    ellipse(0, -4, 20, 18);
		    return get(0, 0, 400, 400);
		},function() {
            translate(0, -2.5);
            fill(255);
            ellipse(0, 7, 10, 6);
            rect(0, 1, 4, 10);
            arc(-1, 7, 8, 23, 180, 270);
            arc(1, 7, 8, 23, 270, 360);
            ellipse(0, -3.8, 4, 2);
            stroke(255);
            noFill();
            strokeWeight(1);
            arc(-4, -1, 4, 7, 180, 360);
            arc(4, -1, 4, 7, -180, 0);
            arc(-4, -1, 4, 16, 0, 180);
            arc(4, -1, 4, 16, 0, 180);
            return [get(0, 0, 400, 400), 15, 15 * 15 / 13];
		},"Common"
	],
	[
		"Assault Pack","4 additional backpack spots.",12,2,function() {
		    fill(100);
		    ellipse(0, -5, 22, 20);
		    return get(0, 0, 400, 400);
		},function() {
            translate(0, -2);
            fill(255);
            ellipse(0, 7, 12, 7);
            polygon(-6, 3, -6, 7, 6, 7, 6, 3, 4, -4, -4, -4);
            arc(-3, 3, 6, 15, 180, 270);
            arc(3, 3, 6, 15, 270, 360);
            ellipse(0, -4, 7, 2);
            stroke(255);
            noFill();
            strokeWeight(1);
            arc(5, -1, 5, 16, 0, 180);
            arc(-5, -1, 5, 16, 0, 180);
            arc(-4.5, -1, 6, 10, 180, 360);
            arc(4.5, -1, 6, 10, 180, 360);
            arc(5, -1, 5, 10, 180, 360);
            arc(-5, -1, 5, 10, 180, 360);
            arc(4, -1, 7, 14, 0, 180);
            arc(-4, -1, 7, 14, 0, 180);
            return [get(0, 0, 400, 400), 18, 17 * 9 / 8];
		},"Uncommon"
	],
	[
		"Commando Pack","6 additional backpack spots.",14,3,function() {
		    fill(0);
		    rect(0, -5, 24, 22, 2);
		    fill(100);
		    rect(0, -11, 28, 6, 2);
		    return get(0, 0, 400, 400);
		},function() {
            translate(0, 1.5);
            fill(255);
            rect(0, 0, 12, 16, 2);
            rect(0, -5, 13, 6, 2, 2, 0, 0);
            ellipse(0, -2, 13, 4);
            rect(0, 3, 13.5, 4, 1);
            rect(0, 1, 14.1, 2, 1, 1, 0, 0);
            strokeWeight(1.2);
            noFill();
            stroke(255);
            arc(3.5, -6.5, 3, 8.2, 180, 270);
            arc(-3.5, -6.5, 3, 8.2, 270, 360);
            strokeWeight(1.5);
            arc(3.5, -6.5, 2, 8, 270, 360);
            arc(-3.5, -6.5, 2, 8, 180, 270);
            return [get(0, 0, 400, 400), 16, 20 * 8 / 7];
		},"Rare"
	],
];
var ammo = {
	"Light Rounds": ["Light Rounds",2.5,1694484580,-14236,60,30,[],[],function() {
        translate(0, 0.5);
        fill(255);
        rect(0, 1, 4, 5);
        rect(0, 0, 3, 8);
        rect(0, 4.5, 4, 1, 0, 0, 1, 1);
        arc(0, -2, 4, 8, 180, 360);
        return [get(0, 0, 400, 400), 4, 11];
	},"Common"],
	"Heavy Rounds": ["Heavy Rounds",3,1690894280,-3604536,50,25,[],[],function() {
	    translate(0, 1);
        fill(255);
        polygon(-2, -2, -1.5, -3, 1.5, -3, 2, -2, 2, 5, -2, 5);
        rect(0, 6, 4, 1, 0, 0, 1, 1);
        rect(0, 4, 3, 4);
        arc(-0.4, -1, 3.5, 15, 284, 360);
        arc(0.4, -1, 3.5, 15, 180, 256);
        return [get(0, 0, 400, 400), 4, 15];
	}, "Common"],
	"Metallic Bolts": ["Metallic Bolts",3.5,1690880255,-3618561,40,20,[],[],function() {
	    translate(0, 1);
        fill(255);
        polygon(-2, -2, -1.5, -3, 1.5, -3, 2, -2, 2, 1, -2, 1);
        rect(0, 5, 4, 3, 0, 0, 1, 1);
        rect(0, 2, 3.7, 8);
        arc(-0.4, -1, 4, 15, 282, 360);
        arc(0.4, -1, 4, 15, 180, 258);
        return [get(0, 0, 400, 400), 4, 15];
	}, "Uncommon"],
	"Shotgun Rounds": ["Shotgun Rounds",6,1690880200,-65536,15,5,[],[],function() {
        fill(255);
        rect(0, 0, 4, 8, 1);
        rect(0, 3.5, 5, 1, 1, 1, 0, 0);
        return [get(0, 0, 400, 400), 5, 8];
	}, "Uncommon"],
	"Fuel": ["Fuel",2,845440100,-3631616,500,250,["Ground",false,"Fire",true,"b",100,"rd",[10,15],"gd",[5,8],"bd",[30,40],"ad",[50,100],"fd",[13,15]],[],function() {
	    translate(0, 0.75);
        fill(255);
        rect(0, 1, 6, 12);
        ellipse(0, -5, 6, 6);
        ellipse(0, 7, 6, 1);
        rect(0, -5, 3, 8);
        return [get(0, 0, 400, 400), 6, 17];
	},"Impossible"],
	"Rockets": ["Rockets",10,1694498815,-16777216,2,1,["Ground",false,"RPG",true,"smokeTrail",true],[],function() {
	    rotate(45);
        fill(255);
        rect(0, 2, 1, 6, 1);
        polygon(-0.25, -4.5, -0.25, -5, 0.25, -5, 0.25, -4.5, 1, -1, 1, 1, 0.5, 2, -0.5, 2, -1, 1, -1, -1);
        return [get(0, 0, 400, 400), 2, 10];
	},"Impossible"],
	"Debris": ["Debris",3,0,0,0,0,["Ground",false],[],function(){return get(0, 0, 400, 400);},"Impossible"],
	"Debris2": ["Debris",2,-39936,0,0,0,["Ground",false],[],function(){return get(0, 0, 400, 400);},"Impossible"],
	"Debris3": ["Debris",2,-65536,0,0,0,["Ground",false],[],function(){return get(0, 0, 400, 400);},"Impossible"],
	"Debris4": ["Debris",2,-256,0,0,0,["Ground",false],[],function(){return get(0, 0, 400, 400);},"Impossible"]
};
var medical = [
	[
		"Bandage","Returns 25% health; 2 second use time",120,25,4,1,2,"Health",function() {
		    fill(200, 190, 160);
		    rect(0, 0, 10, 4);
		    fill(255);
		    rect(0, 0, 5, 5);
		    return get(0, 0, 400, 400);
		},function() {
            fill(255);
            rect(7, 0, 8, 6, 0, 2, 2, 0);
            rect(-7, 0, 8, 6, 2, 0, 0, 2);
            strokeWeight(1);
            stroke(255);
            noFill();
            for (var i = -1; i <= 1; i++) {
                for (var j = -1; j <= 1; j++) {
                    ellipse(i * 2, j * 2, 2, 2);
                }
            }
            rect(-0.5, -0.5, 6, 6, 1);
		    return [get(0, 0, 400, 400), 22, 7];
		}, "Common"
	],
	[
		"Medkit","Returns 100% health; 5 second use time.",300,100,2,1,1,"Health",function() {
		    fill(255);
		    rect(0, 0, 8, 8);
		    fill(255, 0, 0);
		    rect(0, 0, 1, 6);
		    rect(0, 0, 6, 1);
		    return get(0, 0, 400, 400);
		},function() {
            fill(255);
            strokeWeight(1);
            rect(4, -3, 6, 4, 0, 2, 0, 0);
            rect(-4, -3, 6, 4, 2, 0, 0, 0);
            rect(-4, 3, 6, 4, 0, 0, 0, 2);
            rect(4, 3, 6, 4, 0, 0, 2, 0);
            rect(5.5, 0, 3, 4);
            rect(-5.5, 0, 3, 4);
            rect(0, -4.5, 3, 1);
            rect(0, 4.5, 3, 1);
            noFill();
            stroke(255);
            arc(0, -3, 3, 3, 180, 360);
            arc(0, 3, 3, 3, 0, 180);
            arc(3, 0, 3, 3, -90, 90);
            arc(-3, 0, 3, 3, 90, 270);
            polygon(-1.5, -3, -1.5, -1.5, -3, -1.5);
            polygon(1.5, -3, 1.5, -1.5, 3, -1.5);
            polygon(-1.5, 3, -1.5, 1.5, -3, 1.5);
            polygon(1.5, 3, 1.5, 1.5, 3, 1.5);
            return [get(0, 0, 400, 400), 18, 90 / 7];
		}, "Uncommon"
	],
	[
		"Energy Drink","Grants 25% adrenaline (increases speed and slowly restores health); 2 second use time.",120,25,4,1,2,"Adrenaline",function() {
		    fill(0, 100, 255);
		    ellipse(0, 0, 5, 5);
		    return get(0, 0, 400, 400);
		},function() {
		    translate(0, 0.6);
            fill(255);
            rect(0, 0, 6, 12);
            ellipse(0, 6, 6, 1);
            ellipse(0, -6, 6, 1);
            rect(0, 5.5, 5, 2);
            rect(0, -6.5, 6, 0.5, 1);
            strokeWeight(0.5);
            stroke(255);
            line(1.5, -6, 2, -7.5);
            return [get(0, 0, 400, 400), 6, 15];
		}, "Common"
	],
	[
		"Stim Injector","Grants 100% adrenaline (increases speed and slowly restores health); 5 second use time.",300,100,2,1,1,"Adrenaline",function() {
            stroke(0);
            strokeWeight(1);
            line(0, 0, 0, 15);
            strokeWeight(2);
            stroke(0, 255, 255, 100);
            line(0, 0, 0, 10);
            return get(0, 0, 400, 400);
		},function() {
            fill(255);
            rect(0, 0, 30, 1);
            rect(-12, 0, 6, 3);
            rect(-14.5, 0, 1, 4, 1);
            rect(-9, 0, 1, 8, 1);
            rect(0, 0, 18, 4);
            ellipse(9, 0, 1, 4);
            rect(9, 0, 6, 2);
            ellipse(12, 0, 1, 2);
            return [get(0, 0, 400, 400), 30, 9];
		}, "Uncommon"
	],
];
var npcTypes = {
    // Side (0), Loadout (1), Skill (2), Armor (3), Size (4), Health (5), Speed (6), Graphic (7)
    // Skill (2): [Aim, Reaction, Evasion, Aggression, Intelligence]
    "Player": ["ally", ["NONE", "NONE", 0], [0, 0, 0, 0, 7], 0, 20, 200, 2.5, function() {
        return playerGraphic(playerInfo[2], playerInfo[3], playerInfo[4]);
    }],
    "Guard_0": ["enemy", [0, "NONE", 0], [1, 1, 1, 5, 0], 0, 20, 20, 2, function() {
        body(0, -100, 30, color(0, 50, 0), color(0, 100, 0));
        head(0, 0, 20, color(250, 220, 170), color(230, 200, 150));
        head(0, 100, 6, color(250, 220, 170), color(230, 200, 150));
        return [get(150, 50, 100, 100), get(150, 150, 100, 100), get(150, 250, 100, 100)];
    }],
    "Guard_1": ["enemy", [0, "NONE", 0], [4, 4, 2, 5, 4], 0, 20, 50, 2, function() {
        body(0, -100, 30, color(0, 70, 0), color(0, 120, 0));
        head(0, 0, 20, color(250, 220, 170), color(230, 200, 150));
        head(0, 100, 6, color(50), color(30));
        return [get(150, 50, 100, 100), get(150, 150, 100, 100), get(150, 250, 100, 100)];
    }],
    "Guard_2": ["enemy", [2, "NONE", 0], [5, 5, 2, 6, 5], 0, 20, 60, 2, function() {
        body(0, -100, 30, 0, 150);
        head(0, 0, 20, color(250, 220, 170), color(230, 200, 150));
        head(0, 100, 6, color(250, 220, 170), color(230, 200, 150));
        return [get(150, 50, 100, 100), get(150, 150, 100, 100), get(150, 250, 100, 100)];
    }],
    "Guard_3": ["enemy", [3, "NONE", 0], [4, 6, 4, 8, 5], 1, 20, 40, 2.2, function() {
        body(0, -100, 30, color(70, 50, 50), color(120, 50, 50));
        head(0, 0, 20, color(250, 220, 170), color(230, 200, 150));
        head(0, 100, 6, color(250, 220, 170), color(230, 200, 150));
        return [get(150, 50, 100, 100), get(150, 150, 100, 100), get(150, 250, 100, 100)];
    }],
    "Guard_4": ["enemy", [4, "NONE", 0], [6, 5, 5, 5, 8], 1, 20, 50, 2, function() {
        body(0, -100, 30, 100, 150);
        head(0, 0, 20, color(250, 220, 170), color(230, 200, 150));
        head(0, 100, 6, color(250, 220, 170), color(230, 200, 150));
        return [get(150, 50, 100, 100), get(150, 150, 100, 100), get(150, 250, 100, 100)];
    }],
    "Guard_Sergeant": ["enemy", [5, "NONE", 0], [7, 6, 3, 6, 8], 1, 20, 50, 2, function() {
        body(0, -100, 30, 50, 100);
        head(0, 0, 20, color(250, 220, 170), color(230, 200, 150));
        head(0, 100, 6, color(50), color(70));
        return [get(150, 50, 100, 100), get(150, 150, 100, 100), get(150, 250, 100, 100)];
    }],
    "Guard_Lieutenant": ["enemy", [1, "NONE", 0], [8, 6, 6, 7, 8], 2, 20, 60, 2, function() {
        body(0, -100, 30, 50, 100);
        head(0, 0, 20, color(250, 220, 170), color(230, 200, 150));
        head(0, 100, 6, color(250, 220, 170), color(230, 200, 150));
        fill(105, 80, 55);
        stroke(135, 110, 85);
        ellipse(0, -3, 20, 17);
        ellipse(0, -12, 6, 6);
        return [get(150, 50, 100, 100), get(150, 150, 100, 100), get(150, 250, 100, 100)];
    }],
    "Guard_Captain": ["enemy", [0, "NONE", 0], [9, 7, 5, 5, 9], 3, 20, 50, 2.2, function() {
        head(0, 0, 20, color(250, 220, 170), color(230, 200, 150));
        head(0, 100, 6, color(235), color(255));
        fill(0);
        stroke(50);
        ellipse(0, 2, 15, 12);
        body(0, -100, 30, color(0, 50, 125), color(0, 50, 175));
        ellipse(0, -3, 21, 17);
        return [get(150, 50, 100, 100), get(150, 150, 100, 100), get(150, 250, 100, 100)];
    }],
    "Guard_Colonel": ["enemy", ["NONE", "NONE", 3], [10, 10, 5, 8, 8], 3, 20, 100, 2.5, function(){
        head(0, 0, 20, color(250, 220, 170), color(230, 200, 150));
        head(0, 100, 6, color(235), color(255));
        fill(100, 100, 0);
        stroke(155, 155, 0);
        ellipse(0, 2, 15, 12);
        body(0, -100, 30, color(0, 50, 125), color(0, 50, 175));
        ellipse(0, -3, 21, 17);
        return [get(150, 50, 100, 100), get(150, 150, 100, 100), get(150, 250, 100, 100)];
    }],
    "Guard_Gunner": ["enemy", ["NONE", "NONE", 0], [7, 7, 1, 7, 5], 0, 20, 40, 2, function() {
        body(0, -100, 30, 200, 255);
        head(0, 0, 20, color(125, 100, 80), color(105, 80, 60));
        head(0, 100, 6, color(50), color(30));
        return [get(150, 50, 100, 100), get(150, 150, 100, 100), get(150, 250, 100, 100)];
    }],
    "Guard_Specialist": ["enemy", [9, "NONE", 0], [5, 5, 4, 9, 5], 2, 25, 75, 2, function() {
        head(0, 0, 25, color(250, 220, 170), color(230, 200, 150));
        head(0, 100, 7.5, color(90, 150, 90), color(90, 130, 90));
        body(0, -100, 37.5, color(90, 130, 90), color(90, 150, 90));
        rect(0, 0, 20, 18, 5);
        ellipse(0, -3, 25, 20);
        return [get(150, 50, 100, 100), get(150, 150, 100, 100), get(150, 250, 100, 100)];
    }],
    "Guard_Sniper": ["enemy", [7, "NONE", 0], [8, 4, 6, 6, 5], 1, 20, 50, 2.2, function() {
        head(0, 0, 20, color(250, 220, 170), color(230, 200, 150));
        head(0, 100, 6, color(250, 220, 170), color(230, 200, 150));
        body(0, -100, 30, color(200), color(255));
        ellipse(0, -2, 20, 18);
        return [get(150, 50, 100, 100), get(150, 150, 100, 100), get(150, 250, 100, 100)];
    }],
    "Guard_Rockettrooper": ["enemy", [10, "NONE", 0], [6, 4, 2, 4, 5], 2, 25, 60, 2, function() {
        body(0, -100, 37.5, 0, 50);
        head(0, 0, 25, color(250, 220, 170), color(230, 200, 150));
        head(0, 100, 7.5, color(250, 220, 170), color(230, 200, 150));
        return [get(150, 50, 100, 100), get(150, 150, 100, 100), get(150, 250, 100, 100)];
    }],
    "Tech": ["enemy", ["NONE", "NONE", 0], [10, 5, 4, 8, 8], 0, 20, 30, 2.5, function() {
        body(0, -100, 30, color(0, 200, 0), color(0, 255, 0));
        head(0, 0, 20, color(250, 220, 170), color(230, 200, 150));
        head(0, 100, 6, color(200), color(255));
        return [get(150, 50, 100, 100), get(150, 150, 100, 100), get(150, 250, 100, 100)];
    }],
    "Defense_Bot": ["enemy", [12, "NONE", 0], [6, 8, 1, 8, 5], 0, 30, 100, 2, function() {
        head(0, 0, 30, color(150), color(120));
        stroke(200, 0, 0);
        strokeWeight(5);
        line(-8, -11, -6, 12);
        line(8, -11, 6, 12);
        strokeWeight(2);
        stroke(170);
        fill(140);
        polygon(4, 10, 0, 11, -4, 10, -8, -8, 0, -9, 8, -8, 4, 10);
        strokeWeight(4);
        stroke(0, 200, 255);
        line(-3, 8, 0, 9);
        line(0, 9, 3, 8);
        return [get(150, 50, 100, 100), get(150, 150, 100, 100), get(150, 250, 100, 100)];
    }],
    "Medical_Bot": ["enemy", ["NONE", "NONE", 4], [7, 7, 1, 7, 1], 0, 20, 100, 1.5, function() {
        head(0, 0, 20, color(200), color(180));
        stroke(255, 0, 0);
        line(0, -7, 0, -1);
        line(-3, -4, 3, -4);
        stroke(0, 200, 255);
        noFill();
        arc(0, 0, 16, 15, 60, 120);
        line(4, 6, -4, 6);
        return [get(150, 50, 100, 100), get(150, 150, 100, 100), get(150, 250, 100, 100)];
    }],
    "Elite_Trooper": ["enemy", [6, "NONE", 0], [9, 6, 4, 7, 9], 3, 20, 50, 2.1, function() {
        body(0, -100, 30, 0, 50);
        head(0, 0, 20, color(50), color(70));
        head(0, 100, 6, color(50), color(30));
        stroke(255, 0, 0);
        noFill();
        strokeWeight(3);
        arc(0, 0, 15, 15, 60, 120);
        return [get(150, 50, 100, 100), get(150, 150, 100, 100), get(150, 250, 100, 100)];
    }],
    "Elite_Trooper_Captain": ["enemy", [11, "NONE", 0], [10, 8, 6, 6, 10], 3, 20, 100, 2.1, function() {
        body(0, -100, 30, color(120, 0, 0), color(170, 0, 0));
        head(0, 0, 20, color(120, 0, 0), color(170, 0, 0));
        head(0, 100, 6, color(170, 0, 0), color(120, 0, 0));
        stroke(0);
        noFill();
        strokeWeight(3);
        arc(0, 0, 15, 15, 60, 120);
        return [get(150, 50, 100, 100), get(150, 150, 100, 100), get(150, 250, 100, 100)];
    }],
    "Red_Team": ["enemy", [0, "NONE", 0], [10, 10, 10, 10, 10], 0, 20, 100, 2.5, function() {
        body(0, -100, 30, color(100, 0, 0), color(150, 0, 0));
        head(0, 0, 20, color(250, 220, 170), color(230, 200, 150));
        head(0, 100, 6, color(250, 220, 170), color(230, 200, 150));
        return [get(150, 50, 100, 100), get(150, 150, 100, 100), get(150, 250, 100, 100)];
    }],
    "Blue_Team": ["ally", [0, "NONE", 0], [10, 10, 10, 10, 10], 0, 20, 100, 2.5, function() {
        body(0, -100, 30, color(0, 0, 100), color(0, 0, 150));
        head(0, 0, 20, color(250, 220, 170), color(230, 200, 150));
        head(0, 100, 6, color(250, 220, 170), color(230, 200, 150));
        return [get(150, 50, 100, 100), get(150, 150, 100, 100), get(150, 250, 100, 100)];
    }],
};
var levelColors = [
    0, // Nothing
    -3309774, // Level 1 -- Bronze
    -2894893, // Level 2 -- Silver
    -1652736, // Level 3 -- Gold
];
var doorTypes = {
    "Cell_Door": [70, 8, "Slide", 10, function() {
        fill(100);
        rect(0, 0, 70, 8);
        fill(255, 0, 0, 100);
        rect(0, 0, 34, 4, 3);
        return get(0, 0, 400, 400);
    }, function() {
        fill(100);
        rect(0, 0, 70, 8);
        fill(100, 255, 0, 100);
        rect(0, 0, 34, 4, 3);
        return get(0, 0, 400, 400);
    }, true],
    "Door_1": [40, 8, "Slide", 10, function() {
        fill(100);
        rect(0, 0, 40, 8);
        fill(255, 0, 0, 100);
        rect(0, 0, 24, 4, 3);
        return get(0, 0, 400, 400);
    }, function() {
        fill(100);
        rect(0, 0, 40, 8);
        fill(100, 255, 0, 100);
        rect(0, 0, 24, 4, 3);
        return get(0, 0, 400, 400);
    }, true],
    "Door_2": [50, 8, "Slide", 10, function() {
        fill(100);
        rect(0, 0, 50, 8);
        fill(255, 0, 0, 100);
        rect(0, 0, 29, 4, 3);
        return get(0, 0, 400, 400);
    }, function() {
        fill(100);
        rect(0, 0, 50, 8);
        fill(100, 255, 0, 100);
        rect(0, 0, 29, 4, 3);
        return get(0, 0, 400, 400);
    }, true],
    "Door_3": [100, 14, "Slide", 50, function() {
        fill(100);
        rect(0, 0, 100, 14);
        fill(255, 0, 0, 100);
        rect(0, 3, 79, 8, 10, 10, 0, 0);
    }, function() {
        fill(100);
        rect(0, 0, 100, 14);
        fill(255, 0, 0, 100);
        rect(0, 3, 79, 8, 10, 10, 0, 0);
    }, true],
    "Laser_1": [100, 8, "Disappear", 10, function() {
        return get(0, 0, 400, 400);
    }, function() {
        return get(0, 0, 400, 400);
    }, false],
    "Console_1": [30, 50, "Press", 0, function() {
        fill(200);
        rect(0, 0, 30, 50);
        fill(150);
        rect(0, 5, 24, 29);
        fill(255, 0, 0, 100);
        rect(0, 5, 20, 25);
        fill(50);
        rect(0, -15, 20, 4, 4);
        fill(0);
        ellipse(7, -15, 8, 8);
        return get(0, 0, 400, 400);
    }, function() {
        fill(200);
        rect(0, 0, 30, 50);
        fill(150);
        rect(0, 5, 24, 29);
        fill(0, 255, 0, 100);
        rect(0, 5, 20, 25);
        fill(50);
        rect(0, -15, 20, 4, 4);
        fill(0);
        ellipse(-7, -15, 8, 8);
        return get(0, 0, 400, 400);
    }, true],
    "Console_2": [4, 40, "Press", 0, function() {
        fill(0);
        rect(2, -17, 4, 4);
        rect(2, -12, 4, 4);
        fill(200);
        rect(0, 0, 4, 40);
        fill(255, 0, 0, 100);
        rect(1, 5, 2, 26);
        return get(0, 0, 400, 400);
    }, function() {
        fill(0);
        rect(2, -17, 4, 4);
        rect(2, -12, 4, 4);
        fill(200);
        rect(0, 0, 4, 40);
        fill(0, 255, 0, 100);
        rect(1, 5, 2, 26);
        return get(0, 0, 400, 400);
    }, true],
    "Console_3": [4, 8, "Press", 0, function() {
        fill(255, 0, 0, 100);
        rect(2, 0, 4, 4);
        fill(0);
        rect(0, 0, 4, 8);
        return get(0, 0, 400, 400);
    }, function() {
        fill(0, 255, 0, 100);
        rect(2, 0, 4, 4);
        fill(0);
        rect(0, 0, 4, 8);
        return get(0, 0, 400, 400);
    }, true],
};
var crates = [
    [[["Common", "Ammo", 0.65], ["Uncommon", "Ammo", 0.35]], [["Common", "Ammo", 0.3], ["Uncommon", "Ammo", 0.1]], [30, 50], function() {
        crateGraphic(0, 0, 30, 50, 0, ammo["Heavy Rounds"].graphic, [color(80), color(150)]);
        return get(0, 0, 400, 400);
    }, function() {
        crateGraphic(0, 0, 30, 50, 1, 0, [color(40), color(140), color(165), color(185)]);
        return get(0, 0, 400, 400);
    }], // (0) Ammo Crate
    [[["Common", "Gun", 0.75, ["Shotgun"]], ["Uncommon", "Gun", 0.25, ["Shotgun"]]], [["Uncommon", "Ammo", 0.5, ["Shotgun Rounds"]], ["Common", "Attachment", 0.25], ["Uncommon", "Attachment", 0.1]], [30, 50], function() {
        crateGraphic(0, 0, 30, 50, 0, guns[3].graphic, [color(130, 80, 80), color(180, 150, 150)]);
        return get(0, 0, 400, 400);
    }, function() {
        crateGraphic(0, 0, 30, 50, 1, 0, [color(40), color(140), color(170, 130, 130), color(190, 150, 150)]);
        return get(0, 0, 400, 400);
    }], // (1) Shotgun Crate
    [[["Common", "Medical", 0.9], ["Uncommon", "Medical", 0.1]], [["Common", "Medical", 0.6], ["Common", "Medical", 0.4], ["Uncommon", "Medical", 0.02]], [30, 50], function() {
        crateGraphic(0, 0, 30, 50, 0, medical[1].graphic, [color(80, 130, 130), color(150, 180, 180)]);
        return get(0, 0, 400, 400);
    }, function() {
        crateGraphic(0, 0, 30, 50, 1, 0, [color(40), color(130), color(130, 165, 165), color(150, 185, 185)]);
        return get(0, 0, 400, 400);
    }], // (2) Medical Crate
    [[["Common", "Gun", 0.8, ["Pistol", "SMG", "AR"]], ["Uncommon", "Gun", 0.2]], [["Common", "Ammo", 0.4], ["Uncommon", "Ammo", 0.2], ["Common", "Gun", 0.1], ["Common", "Attachment", 0.5], ["Uncommon", "Attachment", 0.2], ["Rare", "Attachment", 0.05]], [30, 50], function() {
        crateGraphic(0, 0, 30, 50, 0, guns[5].graphic, [color(80, 130, 80), color(150, 180, 150)]);
        return get(0, 0, 400, 400);
    }, function() {
        crateGraphic(0, 0, 30, 50, 1, 0, [color(40), color(125), color(130, 165, 130), color(150, 185, 150)]);
        return get(0, 0, 400, 400);
    }], // (3) Weapons Crate
    [[["Rare", "Gun", 1, ["RPG"]]], [["Impossible", "Ammo", 0.2, ["Rockets"]]], [30, 70], function() {
        crateGraphic(0, 0, 30, 70, 0, guns[9].graphic, [color(50), color(120)]);
        return get(0, 0, 400, 400);
    }, function() {
        crateGraphic(0, 0, 30, 70, 1, 0, [color(40), color(130), color(110), color(140)]);
        return get(0, 0, 400, 400);
    }], // (4) RPG Crate
    [[["Common", "Gun", 0.75, ["Pistol", "LMG", "SMG"]], ["Uncommon", "Gun", 0.2, ["Pistol", "LMG", "SMG"]], ["Rare", "Gun", 0.05, ["LMG"]]], [["Common", "Ammo", 0.5, ["Light Rounds", "Heavy Rounds", "Metallic Bolts"]], ["Common", "Attachment", 0.5], ["Uncommon", "Attachment", 0.25], ["Rare", "Attachment", 0.05]], [30, 50], function() {
        crateGraphic(0, 0, 30, 50, 0, guns[4].graphic, [color(130, 130, 80), color(180, 180, 150)]);
        return get(0, 0, 400, 400);
    }, function() {
        crateGraphic(0, 0, 30, 50, 1, 0, [color(40), color(125), color(165, 165, 130), color(185, 185, 150)]);
        return get(0, 0, 400, 400);
    }], // (5) Pistol / SMG / LMG Crate
    [[["Common", "Attachment", 0.7], ["Uncommon", "Attachment", 0.2], ["Rare", "Attachment", 0.1]], [["Common", "Attachment", 0.5], ["Common", "Attachment", 0.4], ["Uncommon", "Attachment", 0.25], ["Uncommon", "Attachment", 0.15], ["Rare", "Attachment", 0.05]], [30, 50], function() {
        var a = ["Magazine", "Extended Mag"];
        crateGraphic(0, 0, 30, 50, 0, attachments[a[0]][a[1]].graphic, [color(80), color(150)]);
        return get(0, 0, 400, 400);
    }, function() {
        crateGraphic(0, 0, 30, 50, 1, 0, [color(40), color(140), color(165), color(185)]);
        return get(0, 0, 400, 400);
    }], // (6) Attachment Crate
    [[["", "Grenade", 1]], [["", "Grenade", 0.8], ["", "Grenade", 0.5]], [30, 50], function() {
        crateGraphic(0, 0, 30, 50, 0, grenades[0].graphic, [color(50), color(120)]);
        return get(0, 0, 400, 400);
    }, function() {
        crateGraphic(0, 0, 30, 50, 1, 0, [color(40), color(130), color(110), color(140)]);
        return get(0, 0, 400, 400);
    }], // (7) Grenade Crate
    [[["Common", "Armor", 0.65], ["Uncommon", "Armor", 0.25], ["Rare", "Armor", 0.1]], [], [30, 30], function() {
        crateGraphic(0, 0, 30, 30, 0, armor[3].graphic, [color(110, 60, 110), color(160, 130, 160)]);
        return get(0, 0, 400, 400);
    }, function() {
        crateGraphic(0, 0, 30, 30, 1, 0, [color(40), color(125), color(145, 110, 145), color(165, 130, 165)]);
        return get(0, 0, 400, 400);
    }], // (8) Superior Armor Crate
    [[["Uncommon", "Gun", 0.65, ["Sniper Rifle"]], ["Common", "Attachment", 0.2, ["Scope"]], ["Uncommon", "Attachment", 0.1, ["Scope"]], ["Rare", "Attachment", 0.05, ["Scope"]]], [["Common", "Ammo", 0.25, ["Heavy Rounds"]], ["Common", "Attachment", 0.5], ["Uncommon", "Attachment", 0.75, ["Scope"]], ["Uncommon", "Attachment", 0.25]], [30, 50], function() {
        crateGraphic(0, 0, 30, 50, 0, guns[7].graphic, [color(110, 60, 60), color(160, 130, 130)]);
        return get(0, 0, 400, 400);
    }, function() {
        crateGraphic(0, 0, 30, 50, 1, 0, [color(40), color(140), color(150, 110, 110), color(170, 130, 130)]);
        return get(0, 0, 400, 400);
    }], // (9) Sniper Crate
    [[["Common", "Backpack", 0.35], ["Common", "Armor", 0.35], ["Uncommon", "Backpack", 0.1], ["Uncommon", "Armor", 0.1], ["Rare", "Backpack", 0.05], ["Rare", "Armor", 0.05]], [["Common", "Backpack", 0.1], ["Common", "Armor", 0.1], ["Uncommon", "Backpack", 0.05], ["Uncommon", "Armor", 0.05]], [30, 50], function() {
        crateGraphic(0, 0, 30, 50, 0, backpack[3].graphic, [color(130, 80, 130), color(180, 150, 180)]);
        return get(0, 0, 400, 400);
    }, function() {
        crateGraphic(0, 0, 30, 50, 1, 0, [color(40), color(125), color(165, 130, 165), color(185, 150, 185)]);
        return get(0, 0, 400, 400);
    }], // (10) Gear Crate
];
var gameVars = {
    temp: "NONE",
    codeRoom: [],
    haveDatapad: true,
    aaGuns: [0, 0, 0],
    fuel: [0, 120, 0],
    hangar: 0,
    spawn1: [125, -1000],
    spawn2: [1000, -125],
    move1: [300, -1000],
    move2: [1000, -300],
    wallType: color(200),
    dMult: 5,
    transport1: [-1000, -1000, 180, 2.5, 0],
    transport2: [1000, -1000, 180, 1.75, false],
    orders: [],
    commonGuns: [],
};
for (var i = 0; i < guns.length; i++) {
    if (guns[i][28] === "Common") {
        gameVars.commonGuns.push(i);
    }
}
var gameVarsDefault = copyArray4(gameVars);
var environment = {
    night: false,
};
var environmentDefault = copyArray4(environment);
var objectiveList = [
    ["Escape the Cell Block", function() {
        if (allies[0].x > 400) {
            objectives.push(construct(objective, [1, false]));
            return [true, false];
        }
    }], // 0
    ["Find a Way to Enter the Armory", function() {
        if (allies[0].y > 120 && allies[0].x > 400) {
            objectives.push(construct(objective, [2, false]));
           return [true, false];
        }
    }], // 1
    ["Find a Datapad", function() {
        if (sq(allies[0].x - 550) + sq(allies[0].y - 220) < sq(50)) {
            objectives.push(construct(objective, [3, false]));
            cinematic = ["Datapad", 0, [550, 220, 1 / 1.5]];
            scene = "cinematic";
            unlockDoors(13);
            return [true, false];
        }
    }], // 2
    ["Exit the Floor", function() {
        if (gameMap[0] === "Defenses") {
            return [true, true];
        }
    }], // 3
    ["Find the Medical Bay", function() {
        if (gameMap[0] === "Infirmary" && inBox(allies[0].x, allies[0].y, 1330, 10, 100, 100)) {
            gameMap[1] = 2;
            cinematic = ["Med Bay", 0, [1330, 60, 1]];
            scene = "cinematic";
            return [true, false];
        }
    }], // 4
    ["Find the Master Switch", function() {
        if (gameMap[0] === "Defenses" && inBox(allies[0].x, allies[0].y, 0, -470, 400, 200)) {
            objectives.push(construct(objective, [6, false]));
            return [true, false];
        }
    }], // 5
    ["Deactivate the AA Guns", function() {
        if (gameMap[0] === "Defenses" && gameVars.aaGuns[0] === 1 && gameVars.aaGuns[1] === 1 && gameVars.aaGuns[2] === 1) {
            objectives.push(construct(objective, [7, false]));
            unlockDoors(4);
            return [true, false];
        }
    }], // 6
    ["Open the Hangar Bay", function() {
        if (gameMap[0] === "Hangars" && gameVars.hangar === 1) {
            objectives.push(construct(objective, [8, false]));
            return [true, false];
        }
    }], // 7
    ["Start Fueling the Shuttle", function() {
        if (gameMap[0] === "Hangars" && gameVars.fuel[2] === 1) {
            return [true, false];
        }}], // 8
    ["Defend the Shuttle", function() {
        if (gameVars.fuel[0] >= gameVars.fuel[1]) {
            return [true, true];
        }
    }], // 9
    ["Defeat the Troopers", function() {
        if (enemies.length === 0) {
            objectives.push(construct(objective, [11, false]));
            gameMap[1] = 7;
            return [true, false];
        }
    }], // 10
    ["Board the Transport", function() {
        if (gameMap[0] === "Hangars" && gameMap[1] === 8) {
            objectives.clear();
            return [true, false];
        }
    }], // 11
];
var attachChances = ["Common", "Uncommon", "Rare"]; 
var attachChoices = [];
var scopeChances = [];
var scopeChoices = [];
var ammoNames = [];
for (var i = 0; i < guns.length; i++) {
    var a = guns[i];
    guns[i].name = a[0];
    guns[i].type = a[1];
    guns[i].ammo = a[2];
    if (i <= 34) {
        ammo[a[2]][7].push(i);
    }
    guns[i].description = a[3];
    guns[i].basic = a[4];
    guns[i].firingMode = a[5];
    guns[i].holdingType = a[6];
    guns[i].noise = a[7];
    guns[i].mag = a[8];
    guns[i].bullet = {
        flechettes: a[9],
        velocity: a[10],
        damage: a[11],
        range: a[12],
        spawn: a[13],
        explosive: a[14],
        special: a[15],
    };
    guns[i].reload = a[16];
    guns[i].reloadType = a[17];
    guns[i].fireSpeed = a[18];
    guns[i].accuracy = a[19];
    guns[i].recoil = a[20];
    guns[i].maxRecoil = a[21];
    guns[i].weight = a[22];
    guns[i].attachments = [];
    for (var j = 0; j < a[23].length; j++) {
        var b = a[23], effects = [];
        for (var k = 0; k < b[j][1].length; k++) {
            effects.push(b[j][1][k][0], b[j][1][k][1]);
        }
        guns[i].attachments.push({
            type: a[23][j][0],
            effect: effects,
        });
    }
    guns[i].mouseGraphic = a[24];
    guns[i].special = a[25];
    guns[i].graphic = a[26];
    guns[i].game = a[27];
    guns[i].chance = a[28];
}
for (var i = 0; i < melee.length; i++) {
    var a = melee[i];
    melee[i].name = a[0];
    melee[i].description = a[1];
    melee[i].damage = a[2];
    melee[i].reload = a[3];
    melee[i].type = a[4];
    melee[i].parry = a[5];
    melee[i].points = a[6];
    melee[i].game = a[7];
    melee[i].graphic = a[8];
    melee[i].special = a[9];
    melee[i].level = a[10];
    melee[i].chance = a[11];
}
for (var i = 0; i < crates.length; i++) {
    var a = crates[i];
    crates[i].guaranteed = a[0];
    crates[i].rand = a[1];
    crates[i].width = a[2][0];
    crates[i].height = a[2][1];
    crates[i].locked = a[3];
    crates[i].unlocked = a[4];
}
for (var i = 0; i < grenades.length; i++) {
    var a = grenades[i];
    a.name = a[0];
    a.description = a[1];
    a.range = a[2];
    a.time = a[3];
    a.stun = a[4];
    a.type = a[5];
    a.stack = a[6];
    a.drop = a[7];
    a.game = a[8];
    a.graphic = a[9];
}
for (var i = 0; i < armor.length; i++) {
    var a = armor[i];
    a.name = a[0];
    a.description = a[1];
    a.damage = a[2];
    a.health = a[3];
    a.move = a[4];
    a.level = a[5];
    a.game = a[6];
    a.graphic = a[7];
    a.equip = a[8];
    a.chance = a[9];
}
for (var i = 0; i < backpack.length; i++) {
    var a = backpack[i];
    a.name = a[0];
    a.description = a[1];
    a.spaces = a[2];
    a.level = a[3];
    a.game = a[4];
    a.graphic = a[5];
    a.chance = a[6];
}
for (var i = 0; i < objectiveList.length; i++) {
    objectiveList[i].push(i);
}
for (var i = 0; i < medical.length; i++) {
    var a = medical[i];
    a.name = a[0];
    a.description = a[1];
    a.time = a[2];
    a.give = a[3];
    a.stack = a[4];
    a.drop = a[5];
    a.lootDrop = a[6];
    a.type = a[7];
    a.game = a[8];
    a.graphic = a[9];
    a.chance = a[10];
}
for (var i = 0; i < Object.keys(attachments).length; i++) {
    var a = Object.keys(attachments)[i];
    for (var j = 0; j < Object.keys(attachments[a]).length; j++) {
        var b = attachments[a][Object.keys(attachments[a])[j]];
        b.name = b[0];
        b.description = b[1];
        b.graphic = b[2];
    }
    attachChoices.push(Object.keys(attachments)[i]);
}
for (var i = 0; i < Object.keys(scopes).length; i++) {
    var a = scopes[Object.keys(scopes)[i]];
    a.name = a[0];
    a.scope = a[1];
    a.level = a[2];
    a.chance = a[3];
    scopeChoices.push(Object.keys(scopes)[i]);
    scopeChances.push(a.chance);
}
for (var i = 0; i < Object.keys(ammo).length; i++) {
    var a = ammo[Object.keys(ammo)[i]];
    a.name = a[0];
    a.size = a[1];
    a.fill = a[2];
    a.lootFill = a[3];
    a.stack = a[4];
    a.drop = a[5];
    a.special = copyArray(a[6]);
    a.usedFor = a[7];
    a.graphic = a[8];
    a.chance = a[9];
    ammoNames.push(Object.keys(ammo)[i]);
}
for (var i = 0; i < Object.keys(doorTypes).length; i++) {
    var a = doorTypes[Object.keys(doorTypes)[i]];
    a.width = a[0];
    a.height = a[1];
    a.type = a[2];
    a.moveSpeed = a[3];
    a.locked = a[4];
    a.unlocked = a[5];
    a.opaque = a[6];
}
var defAmmo = "Rockets";
//} END "OBJECTS"

// "COLLISIONS" {
// (1) "SEGMENTS" {
var findIntersect = function(c1, c2, pad) {
    var x1 = c1[0];
    var y1 = c1[1];
    var x2 = c1[2];
    var y2 = c1[3];
    var x3 = c2[0];
    var y3 = c2[1];
    var x4 = c2[2];
    var y4 = c2[3];
    var Return = [0, 0];
    if (x1 === x3 && y1 === y3) {
        Return = [x1, y1];
    } else if (x2 === x3 && y2 === y3) {
        Return = [x2, y2];
    } else if (x1 === x4 && y1 === y4) {
        Return = [x1, y1];
    } else if (x2 === x4 && y2 === y4) {
        Return = [x2, y2];
    } else {
        var m1 = (y2 - y1) / (x2 - x1);
        var co2 = 1;
        var m2 = (y4 - y3) / (x4 - x3);
        var co4 = 1;
        var determinentOfA = (-m1 * co4) - (co2 * -m2);
        var matrix1 = co4;
        var matrix2 = -co2;
        var matrix3 = m2;
        var matrix4 = -m1;
        var M1 = matrix1 * (1 / determinentOfA);
        var M2 = matrix2 * (1 / determinentOfA);
        var M3 = matrix3 * (1 / determinentOfA);
        var M4 = matrix4 * (1 / determinentOfA);
        var b1 = y1 - (m1 * x1);
        var b2 = y3 - (m2 * x3);
        var final1 = M1 * b1;
        var final2 = M2 * b2;
        var final3 = M3 * b1;
        var final4 = M4 * b2;
        var x = final1 + final2;
        var y = final3 + final4;
        Return = [x, y];
        if (m1 === Infinity || m1 === -Infinity) {
            m1 = "MALFUNCTION";
        }
        if (m2 === Infinity || m2 === -Infinity) {
            m2 = "MALFUNCTION";
        }
        if (m1 === "MALFUNCTION" && m2 === "MALFUNCTION" && x1 !== x3) {
            Return = ["NO", "NO"];
        }
        if (m1 === "MALFUNCTION") {
            x = x1;
            y = (m2 * x) + b2; 
        }
        if (m2 === "MALFUNCTION") {
            x = x3;
            y = (m1 * x) + b1;
        }
        var padding = pad || 0.1;
        if ((x >= x1 - padding && x <= x2 + padding && y >= y1 - padding && y <= y2 + padding && x2 >= x1 && y2 >= y1) || (x >= x1 - padding && x <= x2 + padding && y >= y1 - padding && y <= y2 + padding && x2 === x1 && y2 >= y1) || (x <= x1 + padding && x >= x2 - padding && y >= y1 - padding && y <= y2 + padding && x2 <= x1 && y2 >= y1) || (x <= x1 + padding && x >= x2 - padding && y >= y1 - padding && y <= y2 + padding && x2 <= x1 && y2 === y1) || (x <= x1 + padding && x >= x2 - padding && y <= y1 + padding && y >= y2 - padding && x2 <= x1 && y2 <= y1) || (x >= x1 - padding && x <= x2 + padding && y <= y1 + padding && y >= y2 - padding && x2 === x1 && y2 <= y1) || (x >= x1 - padding && x <= x2 + padding && y <= y1 + padding && y >= y2 - padding && x2 >= x1 && y2 <= y1) || (x >= x1 - padding && x <= x2 + padding && y >= y1 - padding && y <= y2 + padding && x2 >= x1 && y2 === y1)) {
            if ((x >= x3 - padding && x <= x4 + padding && y >= y3 - padding && y <= y4 + padding && x4 >= x3 && y4 >= y3) || (x >= x3 - padding && x <= x4 + padding && y >= y3 - padding && y <= y4 + padding && x4 === x3 && y4 >= y3) || (x <= x3 + padding && x >= x4 - padding && y >= y3 - padding && y <= y4 + padding && x4 <= x3 && y4 >= y3) || (x <= x3 + padding && x >= x4 - padding && y >= y3 - padding && y <= y4 + padding && x4 <= x3 && y4 === y3) || (x <= x3 + padding && x >= x4 - padding && y <= y3 + padding && y >= y4 - padding && x4 <= x3 && y4 <= y3) || (x >= x3 - padding && x <= x4 + padding && y <= y3 + padding && y >= y4 - padding && x4 === x3 && y4 <= y3) || (x >= x3 - padding && x <= x4 + padding && y <= y3 + padding && y >= y4 - padding && x4 >= x3 && y4 <= y3) || (x >= x3 - padding && x <= x4 + padding && y >= y3 - padding && y <= y4 + padding && x4 >= x3 && y4 === y3)) {
                Return = [x, y];
            } else {
                Return = ["NO", "NO"];
            }
        } else {
            Return = ["NO", "NO"];
        }
    }
    return Return;
};
var circleLine = function(c1, c2, closer) {
    var h = c1[0];
    var k = c1[1];
    var r = c1[2] / 2;
    var x1 = c2[0];
    var y1 = c2[1];
    var x2 = c2[2];
    var y2 = c2[3];
    var closer = closer || false;
    var Result = [["NO", "NO"], ["NO", "NO"], 0];
    var m = (y2 - y1) / (x2 - x1);
    var b = y1 - (m * x1);
    var N1, N2, N3, N4, N5, N6, N7, N8, N9, N10, A, B, C, Q1, Q2, Q3, connected1 = false, connected2 = false, connected3 = false, connected4 = false;
    if (m === Infinity || m === -Infinity) {
        m = "MALFUNCTION";
    }
    if (m !== "MALFUNCTION") {
        N1 = 1;
        N2 = -h * 2;
        N3 = sq(h);
        N4 = m;
        N5 = b - k;
        N6 = sq(m);
        N7 = (N5 * N4) * 2;
        N8 = sq(N5);
        N9 = sq(r);
        A = N1 + N6;
        B = N2 + N7;
        C = (N3 + N8) - N9;
        Q1 = -B;
        Q2 = sqrt(sq(B) - (4 * A * C));
        Q3 = 2 * A;
        if (!isNaN(Q2)) {
            Result[0][0] = (Q1 + Q2) / Q3;
            Result[1][0] = (Q1 - Q2) / Q3;
            Result[0][1] = (m * Result[0][0]) + b;
            Result[1][1] = (m * Result[1][0]) + b;
        } else {
            Result = [["NO", "NO"], ["NO", "NO"]];
        }
    } else {
        Result[0][0] = Result[1][0] = x1;
        N1 = sq(x1 - h);
        N2 = 2 * k;
        N3 = sq(k);
        N4 = sq(r);
        A = 1;
        B = -N2;
        C = (N1 + N3) - N4;
        Q1 = -B;
        Q2 = sqrt(sq(B) - (4 * A * C));
        Q3 = 2 * A;
        if (!isNaN(B)) {
            Result[0][1] = (Q1 - Q2) / Q3;
            Result[1][1] = (Q1 + Q2) / Q3;
        } else {
            Result = [["NO", "NO"], ["NO", "NO"]];
        }
    }
    if (Result[0][0] !== "NO" || Result[1][0] !== "NO") {
        var X1 = Result[0][0];
        var Y1 = Result[0][1];
        var X2 = Result[1][0];
        var Y2 = Result[1][1];
        var DA_NUMBER = sq(r), MORE_NUMBER, MORE_NUMBER2;
        if (X1 !== "NO") {
            MORE_NUMBER = sq(X1 - h) + sq(Y1 - k);
            if (!(DA_NUMBER - 0.1 < MORE_NUMBER && DA_NUMBER + 0.1 > MORE_NUMBER)) {
                X1 = "NO";
                Y1 = "NO";
            } else {
                if (!(((X1 >= x1 - 0.1 && X1 <= x2 + 0.1 && Y1 >= y1 - 0.1 && Y1 <= y2 + 0.1 && x2 >= x1 && y2 >= y1) || (X1 >= x1 - 0.1 && X1 <= x2 + 0.1 && Y1 >= y1 - 0.1 && Y1 <= y2 - 0.1 && x2 === x1 && y2 >= y1) || (X1 <= x1 + 0.1 && X1 >= x2 - 0.1 && Y1 >= y1 - 0.1 && Y1 <= y2 - 0.1 && x2 <= x1 && y2 >= y1) || (X1 <= x1 + 0.1 && X1 >= x2 - 0.1 && Y1 >= y1 - 0.1 && Y1 <= y2 + 0.1 && x2 <= x1 && y2 === y1) || (X1 <= x1 + 0.1 && X1 >= x2 - 0.1 && Y1 <= y1 + 0.1 && Y1 >= y2 - 0.1 && x2 <= x1 && y2 <= y1) || (X1 >= x1 - 0.1 && X1 <= x2 + 0.1 && Y1 <= y1 + 0.1 && Y1 >= y2 - 0.1 && x2 === x1 && y2 <= y1) || (X1 >= x1 - 0.1 && X1 <= x2 + 0.1 && Y1 <= y1 + 0.1 && Y1 >= y2 - 0.1 && x2 >= x1 && y2 <= y1) || (X1 >= x1 - 0.1 && X1 <= x2 + 0.1 && Y1 >= y1 - 0.1 && Y1 <= y2 + 0.1 && x2 >= x1 && y2 === y1)))) {
                    X1 = "NO";
                    Y1 = "NO";
                }
            }
        }
        if (X2 !== "NO") {
            MORE_NUMBER2 = sq(X2 - h) + sq(Y2 - k);
            if (!(DA_NUMBER - 0.1 < MORE_NUMBER2 && DA_NUMBER + 0.1 > MORE_NUMBER2)) {
                X2 = "NO";
                Y2 = "NO";
            } else {
                if (!(((X2 >= x1 - 0.1 && X2 <= x2 + 0.1 && Y2 >= y1 - 0.1 && Y2 <= y2 + 0.1 && x2 >= x1 && y2 >= y1) || (X2 >= x1 - 0.1 && X2 <= x2 + 0.1 && Y2 >= y1 - 0.1 && Y2 <= y2 - 0.1 && x2 === x1 && y2 >= y1) || (X2 <= x1 + 0.1 && X2 >= x2 - 0.1 && Y2 >= y1 - 0.1 && Y2 <= y2 - 0.1 && x2 <= x1 && y2 >= y1) || (X2 <= x1 + 0.1 && X2 >= x2 - 0.1 && Y2 >= y1 - 0.1 && Y2 <= y2 + 0.1 && x2 <= x1 && y2 === y1) || (X2 <= x1 + 0.1 && X2 >= x2 - 0.1 && Y2 <= y1 + 0.1 && Y2 >= y2 - 0.1 && x2 <= x1 && y2 <= y1) || (X2 >= x1 - 0.1 && X2 <= x2 + 0.1 && Y2 <= y1 + 0.1 && Y2 >= y2 - 0.1 && x2 === x1 && y2 <= y1) || (X2 >= x1 - 0.1 && X2 <= x2 + 0.1 && Y2 <= y1 + 0.1 && Y2 >= y2 - 0.1 && x2 >= x1 && y2 <= y1) || (X2 >= x1 - 0.1 && X2 <= x2 + 0.1 && Y2 >= y1 - 0.1 && Y2 <= y2 + 0.1 && x2 >= x1 && y2 === y1)))) {
                    X2 = "NO";
                    Y2 = "NO";
                }
            }
        }
        if (closer) {
            if (X1 === "NO" && X2 !== "NO") {
                Result[2] = 1;
            } else if (X1 !== "NO" && X2 === "NO") {
                Result[2] = 0;
            } else if (X1 !== "NO" && X2 !== "NO") {
                if ((Y1 === Y2 && X1 > X2 && y1 === Y1 && x1 >= X1 - 0.1) || (Y1 > Y2 && X1 > X2 && y1 >= Y1 - 0.1 && x1 >= X1 - 0.1) || (X1 === X2 && Y1 > Y2 && x1 === X1 && y1 >= Y1 - 0.1) || (Y1 > Y2 && X1 < X2 && y1 >= Y1 - 0.1 && x1 <= X1 + 0.1) || (Y1 === Y2 && X1 < X2 && y1 === Y1 && x1 <= X1 + 0.1) || (Y1 < Y2 && X1 < X2 && y1 <= Y1 + 0.1 && x1 <= X1 + 0.1) || (X1 === X2 && Y1 < Y2 && x1 === X1 && y1 <= Y1 + 0.1) || (Y1 < Y2 && X1 > X2 && y1 <= Y1 + 0.1 && x1 >= X1 - 0.1)) {
                    Result[2] = 0;
                } else {
                    Result[2] = 1;
                }
            }
        } 
        Result = [[X1, Y1], [X2, Y2], Result[2]];
    }
    return Result;
};
var rectSegment = function(RECT, LINE, Closer) {
    var x1 = LINE[0];
    var y1 = LINE[1];
    var x2 = LINE[2];
    var y2 = LINE[3];
    var w = RECT[2];
    var h = RECT[3];
    var point1 = [RECT[0] - (w / 2), RECT[1] - (h / 2)];
    var point2 = [RECT[0] + (w / 2), RECT[1] - (h / 2)];
    var point3 = [RECT[0] + (w / 2), RECT[1] + (h / 2)];
    var point4 = [RECT[0] - (w / 2), RECT[1] + (h / 2)];
    var closer = Closer || false;
    var Return = [["NO", "NO"], ["NO", "NO"], "NO"];
    var i1 = ["NO", "NO"];
    var i2 = ["NO", "NO"];
    var i1 = findIntersect([point1[0] + 0.1, point1[1], point2[0] - 0.1, point2[1]], LINE);
    var i2 = findIntersect([point2[0], point2[1] + 0.1, point3[0], point3[1] - 0.1], LINE, 0.09);
    if (i1[0] !== "NO") {
        Return[0] = i1;
    }
    if (i2[0] !== "NO") {
        Return[1] = i2;
    }
    if (Return[0][0] === "NO" || Return[1][0] === "NO") {
        var i3 = findIntersect([point3[0] + 0.1, point3[1], point4[0] - 0.1, point4[1]], LINE); 
        if (i3[0] !== "NO") {
            if (Return[0][0] === "NO") {
                Return[0] = i3;
            } else {
                Return[1] = i3;
            }
        }
    }
    if (Return[0][0] === "NO" || Return[1][0] === "NO") {
        var i4 = findIntersect([point4[0], point4[1] + 0.1, point1[0], point1[1] - 0.1], LINE, 0.09); 
        if (i4[0] !== "NO") {
            if (Return[0][0] === "NO") {
                Return[0] = i4;
            } else {
                Return[1] = i4;
            }
        }
    }
    var X1 = Return[0][0];
    var Y1 = Return[0][1];
    var X2 = Return[1][0];
    var Y2 = Return[1][1];
    if (closer) {
        if (X1 === "NO" && X2 !== "NO") {
            Return[2] = 1;
        } else if (X1 !== "NO" && X2 === "NO") {
            Return[2] = 0;
        } else if (X1 !== "NO" && X2 !== "NO") {
            if ((Y1 === Y2 && X1 > X2 && y1 === Y1 && x1 >= X1 - 0.1) || (Y1 > Y2 && X1 > X2 && y1 >= Y1 - 0.1 && x1 >= X1 - 0.1) || (X1 === X2 && Y1 > Y2 && x1 === X1 && y1 >= Y1 - 0.1) || (Y1 > Y2 && X1 < X2 && y1 >= Y1 - 0.1 && x1 <= X1 + 0.1) || (Y1 === Y2 && X1 < X2 && y1 === Y1 && x1 <= X1 + 0.1) || (Y1 < Y2 && X1 < X2 && y1 <= Y1 + 0.1 && x1 <= X1 + 0.1) || (X1 === X2 && Y1 < Y2 && x1 === X1 && y1 <= Y1 + 0.1) || (Y1 < Y2 && X1 > X2 && y1 <= Y1 + 0.1 && x1 >= X1 - 0.1)) {
                Return[2] = 0;
            } else {
                Return[2] = 1;
            }
        }
    }
    return Return;
};
rectArc = function(RECT, ARC) {
    ARC[3] = absValue(ARC[3], 360);
    ARC[4] = absValue(ARC[4], 360);
    if (ARC[3] > ARC[4]) {
        var a = ARC[3];
        ARC[3] = ARC[4];
        ARC[4] = a;
    }
    var x = ARC[0], y = ARC[1], w = ARC[2] / 2, start = ARC[3], end = ARC[4], between = (start + end) / 2, avg = (end - start) / 2, actualRot = atan2(y - RECT[1], x - RECT[0]) + 180, betweenRot = constrain(actualRot, start, end), x3 = x + w * sin(-start + 90), y3 = y + w * cos(-start + 90), x4 = x + w * sin(-end + 90), y4 = y + w * cos(-end + 90), x2 = x + w * sin(-betweenRot + 90), y2 = y + w * cos(-betweenRot + 90), closestPoint = [constrain((x + x2) / 2, RECT[0] - RECT[2] / 2, RECT[0] + RECT[2] / 2), constrain((y + y2) / 2, RECT[1] - RECT[3] / 2, RECT[1] + RECT[3] / 2)], rot = absValue(atan2(y - closestPoint[1], x - closestPoint[0]), 360), rot2 = absValue(absValue((start + end) / 2 + 180, 360) - rot, 360);
    if (inBox(x, y, RECT[0], RECT[1], RECT[2], RECT[3]) || (sq(x - closestPoint[0]) + sq(y - closestPoint[1]) < sq(w) && (rot2 <= avg || rot2 >= 360 - avg))) {
        return true;
    } else {
        var a = rectSegment(RECT, [x, y, x3, y3], true);
        if (a[0][0] === "NO" && a[1][0] === "NO") {
            a = rectSegment(RECT, [x, y, x4, y4], true);
            if (a[0][0] === "NO" && a[1][0] === "NO") {
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }
};
rectCircle = function(RECT, CIRCLE) {
    var x = RECT[0], y = RECT[1], width = RECT[2], height = RECT[3], x2 = CIRCLE[0], y2 = CIRCLE[1], w = CIRCLE[2] / 2;
    if (x2 >= x - (width / 2) && x2 <= x + (width / 2) && y2 > (y - w) - (height / 2) && y2 < y - (height / 2) || y2 >= y - (height / 2) && y2 <= y + (height / 2) && x2 < (x + w) + (width / 2) && x2 > x + (width / 2) || x2 >= x - (width / 2) && x2 <= x + (width / 2) && y2 < (y + w) + (height / 2) && y2 > y + (height / 2) || y2 >= y - (height / 2) && y2 <= y + (height / 2) && x2 > (x - w) - (width / 2) && x2 < x - (width / 2) || sq(x2 - (x + (width / 2))) + sq(y2 - (y - (height / 2))) < sq(w) || sq(x2 - (x + (width / 2))) + sq(y2 - (y + (height / 2))) < sq(w) || sq(x2 - (x - (width / 2))) + sq(y2 - (y + (height / 2))) < sq(w) || sq(x2 - (x - (width / 2))) + sq(y2 - (y - (height / 2))) < sq(w)) {
        return true;
    } else {
        return false;
    }
};
//}
// (2) "BASIC COLLISION" {
var collide = function(type, x, y, width, height, obj) {
    var w = (obj.width / 2) + 2;
    var result = [0, 0, false];
    if (type === "Rectangle") {
        if (obj.x >= x - (width / 2) && obj.x <= x + (width / 2) && obj.y > (y - w) - (height / 2) && obj.y < y - (height / 2) && !result[2]) {
            result = [obj.x, (y - w) - (height / 2), true];
        }
        if (obj.y >= y - (height / 2) && obj.y <= y + (height / 2) && obj.x < (x + w) + (width / 2) && obj.x > x + (width / 2) && !result[2]) {
            result = [(x + w) + (width / 2), obj.y, true];
        }
        if (obj.x >= x - (width / 2) && obj.x <= x + (width / 2) && obj.y < (y + w) + (height / 2) && obj.y > y + (height / 2) && !result[2]) {
            result = [obj.x, (y + w) + (height / 2), true];
        }
        if (obj.y >= y - (height / 2) && obj.y <= y + (height / 2) && obj.x > (x - w) - (width / 2) && obj.x < x - (width / 2) && !result[2]) {
            result = [(x - w) - (width / 2), obj.y, true];
        }
        if (sq(obj.x - (x + (width / 2))) + sq(obj.y - (y - (height / 2))) < sq(w) && !result[2]) {
            result = [((x + (width / 2)) - (w * sin(atan2(obj.y - (y - (height / 2)), obj.x - (x + (width / 2))) - 90))), ((y - (height / 2)) - w * (cos(atan2(obj.y - (y - (height / 2)), obj.x - (x + (width / 2))) + 90))), true];
        }
        if (sq(obj.x - (x + (width / 2))) + sq(obj.y - (y + (height / 2))) < sq(w) && !result[2]) {
            result = [((x + (width / 2)) - (w * sin(atan2(obj.y - (y + (height / 2)), obj.x - (x + (width / 2))) - 90))), ((y + (height / 2)) - w * (cos(atan2(obj.y - (y + (height / 2)), obj.x - (x + (width / 2))) + 90))), true];
        }
        if (sq(obj.x - (x - (width / 2))) + sq(obj.y - (y + (height / 2))) < sq(w) && !result[2]) {
            result = [((x - (width / 2)) - (w * sin(atan2(obj.y - (y + (height / 2)), obj.x - (x - (width / 2))) - 90))), ((y + (height / 2)) - w * (cos(atan2(obj.y - (y + (height / 2)), obj.x - (x - (width / 2))) + 90))), true];
        }
        if (sq(obj.x - (x - (width / 2))) + sq(obj.y - (y - (height / 2))) < sq(w) && !result[2]) {
            result = [((x - (width / 2)) - (w * sin(atan2(obj.y - (y - (height / 2)), obj.x - (x - (width / 2))) - 90))), ((y - (height / 2)) - w * (cos(atan2(obj.y - (y - (height / 2)), obj.x - (x - (width / 2))) + 90))), true];
        }
    } else if (type === "Circle") {
        if (sq(obj.x - x) + sq(obj.y - y) < sq((width / 2) + w)) {
            result = [x - ((width / 2) + w) * (sin(atan2(obj.y - y, obj.x - x) - 90)), y - ((width / 2) + w) * (cos(atan2(obj.y - y, obj.x - x) + 90)), true];
        }
    }
    if (result[2]) {
        obj.x = result[0];
        obj.y = result[1];
    }
};
inBox = function(x1, y1, x2, y2, width, height) {
    if (x1 >= x2 - (width / 2) && x1 <= x2 + (width / 2) && y1 >= y2 - (height / 2) && y1 <= y2 + (height / 2)) {
        return true;
    }
};
//}
// (3) "WALLS" {
var block = function(type, x, y, w, h, special) {
    this.type = type || "Rectangle|Metal";
    this.x = x || 0;
    this.y = y || 0;
    this.width = w || 100;
    this.height = h || 100;
    this.type = this.type.split("|");
    if (this.type[0] === "Rectangle") {
        this.point1 = [(this.x - (this.width / 2)), (this.y - (this.height / 2))];
        this.point2 = [(this.x + (this.width / 2)), (this.y - (this.height / 2))];
        this.point3 = [(this.x + (this.width / 2)), (this.y + (this.height / 2))];
        this.point4 = [(this.x - (this.width / 2)), (this.y + (this.height / 2))];
    } else if (this.type[0] === "Circle") {
        this.point1 = [(this.x - (this.width / 2)), this.y];
        this.point2 = [this.x, (this.y - (this.width / 2))];
        this.point3 = [(this.x + (this.width / 2)), this.y];
        this.point4 = [this.x, (this.y + (this.width / 2))];
    }
    this.health = Infinity;
    this.partOfDoor = false;
    this.opaque = true;
    this.barrier = true;
    this.special = special || [];
    this.color = gameVars.wallType;
    this.wd = true;
    this.img = "NONE";
    for (var i = 0; i < this.special.length; i++) {
        var a = this.special[i];
        if (a[0] === "health") {
            this.health = a[1];
        } else if (a[0] === "partOfDoor") {
            this.partOfDoor = a[1];
        } else if (a[0] === "opaque") {
            this.opaque = a[1];
            this.wd = a[1];
        } else if (a[0] === "shootThrough") {
            this.barrier = !a[1];
            this.partOfDoor = a[1];
            this.opaque = !a[1];
        } else if (a[0] === "color") {
            this.color = a[1];
        } else if (a[0] === "wd") {
            this.wd = a[1];
        } else if (a[0] === "img") {
            this.img = a[1];
        }
    }
};
block.prototype.draw = function() {
    noStroke();
    if ((this.opaque && this.wd) || this.type[1] === "Visible") {
        fill(this.color);
        if (this.type[0] === "Rectangle") {
            rect(this.x, this.y, this.width, this.height);
            if (this.img !== "NONE") {
                image(images[this.img], this.x, this.y, this.width, this.height);
            }
        } else if (this.type[0] === "Circle") {
            ellipse(this.x, this.y, this.width, this.width);
            if (this.img !== "NONE") {
                image(images[this.img], this.x, this.y, this.width, this.height);
            }
        }
    }
};
block.prototype.displayLighting = function() {
    if ((this.opaque !== false || this.wd) && wallDarkness) {
        fill(0);
        noStroke();
        if (this.type[0] === "Rectangle") {
            if (!inBox(allies[0].x, allies[0].y, this.x, this.y, this.width, this.height)) {
                var correction = 0.1;
                var corner1 = [(this.x - (this.width / 2)) - correction, (this.y - (this.height / 2)) - correction];
                var corner2 = [(this.x + (this.width / 2)) + correction, (this.y - (this.height / 2)) - correction];
                var corner3 = [(this.x + (this.width / 2)) + correction, (this.y + (this.height / 2)) + correction];
                var corner4 = [(this.x - (this.width / 2)) - correction, (this.y + (this.height / 2)) + correction];
                if (allies[0].y >= corner1[1]) {
                    quad(corner1[0], corner1[1], corner2[0], corner2[1], corner2[0] + ((allies[0].x - corner2[0]) * -1000), corner2[1] + ((allies[0].y - corner2[1]) * -1000), corner1[0] + ((allies[0].x - corner1[0]) * -1000), corner1[1] + ((allies[0].y - corner1[1]) * -1000));
                }
                if (allies[0].x <= corner2[0]) {
                    quad(corner2[0], corner2[1], corner3[0], corner3[1], corner3[0] + ((allies[0].x - corner3[0]) * -1000), corner3[1] + ((allies[0].y - corner3[1]) * -1000), corner2[0] + ((allies[0].x - corner2[0]) * -1000), corner2[1] + ((allies[0].y - corner2[1]) * -1000));
                }
                if (allies[0].y <= corner3[1]) {
                    quad(corner3[0], corner3[1], corner4[0], corner4[1], corner4[0] + ((allies[0].x - corner4[0]) * -1000), corner4[1] + ((allies[0].y - corner4[1]) * -1000), corner3[0] + ((allies[0].x - corner3[0]) * -1000), corner3[1] + ((allies[0].y - corner3[1]) * -1000));
                }
                if (allies[0].x >= corner4[0]) {
                    quad(corner4[0], corner4[1], corner1[0], corner1[1], corner1[0] + ((allies[0].x - corner1[0]) * -1000), corner1[1] + ((allies[0].y - corner1[1]) * -1000), corner4[0] + ((allies[0].x - corner4[0]) * -1000), corner4[1] + ((allies[0].y - corner4[1]) * -1000));
                }
            }
        } else {
            var rot = -atan2(allies[0].y - this.y, allies[0].x - this.x);
            var BCA = acos(this.width / 2 / dist(allies[0].x, allies[0].y, this.x, this.y));
            var p1 = [this.x - this.width / 2 * sin(rot + BCA - 90), this.y - this.width / 2 * cos(rot + BCA - 90)];
            var p2 = [this.x - this.width / 2 * sin(rot - BCA - 90), this.y - this.width / 2 * cos(rot - BCA - 90)];
            quad(p1[0], p1[1], p2[0], p2[1], p2[0] + -1000 * (allies[0].x - p2[0]), p2[1] + -1000 * (allies[0].y - p2[1]), p1[0] + -1000 * (allies[0].x - p1[0]), p1[1] + -1000 * (allies[0].y - p1[1]));
        }
    }
};
//}
// (4) "DOORS" {
var door = function(x, y, rot, locked, type, boundNumber, boundNumber2) {
    this.x = x;
    this.y = y;
    this.moveX = x;
    this.moveY = y;
    this.rot = rot;
    this.locked = locked;
    this.boundNumber = boundNumber;
    this.type = doorTypes[type];
    if (this.rot === 0 || this.rot === 2) {
        walls.push(construct(block, ["Rectangle", this.x, this.y, this.type.width, this.type.height, [["partOfDoor", !this.locked], ["wd", false]]]));
    } else {
        walls.push(construct(block, ["Rectangle", this.x, this.y, this.type.height, this.type.width, [["partOfDoor", !this.locked], ["wd", false]]]));
    }
    this.boundTo = walls[walls.length - 1];
    this.alwaysOpen = false;
    this.boundNumber2 = boundNumber2;
    this.doorSet = false;
    if (this.boundNumber2 !== undefined) {
        for (var i = 0; i < doors.length; i++) {
            if (doors[i].boundNumber2 === this.boundNumber2) {
                doors[i].doorSet = this;
                this.doorSet = doors[i];
                i = doors.length;
                if (this.doorSet.type !== this.type) {
                    println(this.boundNumber2 + " -- Error 005: Door Set Incompatible");
                }
            }
        }
    }
};
door.prototype.draw = function() {
    pushMatrix();
    translate(this.moveX, this.moveY);
    rotate(this.rot * 90);
    if (this.locked) {
        renderImage(this.type.locked, 0, 0);
    } else {
        renderImage(this.type.unlocked, 0, 0);
    }
    popMatrix();
};
door.prototype.open = function() {
    var shouldOpen = false, theWidth = this.type.width + 30, theHeight = this.type.height + 150, goalX = this.x, goalY = this.y;
    if (this.alwaysOpen) {
        shouldOpen = true;
    } else {
        if (!this.locked) {
            if (this.rot === 1 || this.rot === 3) {
                theWidth = this.type.height + 150;
                theHeight = this.type.width + 30;
            }
            for (var i = 0; i < allies.length; i++) {
                if (inBox(allies[i].x, allies[i].y, this.x, this.y, theWidth, theHeight) || (this.doorSet !== false && inBox(allies[i].x, allies[i].y, this.doorSet.x, this.doorSet.y, theWidth, theHeight))) {
                    shouldOpen = true;
                    i = allies.length;
                }
            }
            if (!shouldOpen) {
                for (var i = 0; i < enemies.length; i++) {
                    if (inBox(enemies[i].x, enemies[i].y, this.x, this.y, theWidth, theHeight) || (this.doorSet !== false && inBox(enemies[i].x, enemies[i].y, this.doorSet.x, this.doorSet.y, theWidth, theHeight))) {
                        shouldOpen = true;
                        i = enemies.length;
                    }
                }
            }
        }
    }
    if (shouldOpen) {
        if (this.type.type === "Slide") {
            if (this.rot === 0) {
                goalX = this.x + this.type.width;
                goalY = this.y;
            } else if (this.rot === 1) {
                goalX = this.x;
                goalY = this.y + this.type.width;
            } else if (this.rot === 2) {
                goalX = this.x - this.type.width;
            } else if (this.rot === 3) {
                goalX = this.x;
                goalY = this.y - this.type.width;
            }
        } else if (this.type.type === "Disappear") {
            this.moveX = -10000000000;
            this.moveY = -10000000000;
        }
    } else {
        if (this.type.type === "Disappear") {
            this.moveX = this.x;
            this.moveY = this.y;
        }
    }
    if (this.type.type === "Slide") {
        this.moveX += ((goalX - this.moveX) / this.type.moveSpeed) * compensateFPS;
        this.moveY += ((goalY - this.moveY) / this.type.moveSpeed) * compensateFPS;
    }
    if (this.boundTo !== "NONE") {
        this.boundTo.x = this.moveX;
        this.boundTo.y = this.moveY;
    }
    this.boundTo.partOfDoor = !this.locked;
};
var falseDoor = function(x, y, rot, locked, type) {
    this.x = x;
    this.y = y;
    this.rot = rot;
    this.type = doorTypes[type];
    this.locked = locked;
    if (this.rot === 0 || this.rot === 2) {
        walls.push(construct(block, ["Rectangle", this.x, this.y, this.type.width, this.type.height, [["wd",false]]]));
    } else {
        walls.push(construct(block, ["Rectangle", this.x, this.y, this.type.height, this.type.width, [["wd",false]]]));
    }
    //this.boundTo = walls[walls.length - 1]
};
falseDoor.prototype.draw = function() {
    pushMatrix();
    translate(this.x, this.y);
    rotate(this.rot * 90);
    if (this.locked) {
        renderImage(this.type.locked, 0, 0);
    } else {
        renderImage(this.type.unlocked, 0, 0);
    }
    popMatrix();
};
//}
// (5) "CONSOLES" {
var computer = function(x, y, rot, type, result, useTwice) {
    this.x = x;
    this.y = y;
    this.rot = rot;
    this.type = doorTypes[type];
    this.result = result;
    this.standingBy = false;
    if (this.rot === 0 || this.rot === 2) {
        walls.push(construct(block, ["Rectangle|Invisible", this.x, this.y, this.type.width, this.type.height, [["opaque",false],["shootThrough",true]]]));
    } else {
        walls.push(construct(block, ["Rectangle|Invisible", this.x, this.y, this.type.height, this.type.width, [["opaque",false],["shootThrough",true]]]));
    }
    this.used = [false, useTwice, false];
};
computer.prototype.draw = function() {
    fill(0, 255, 0);
    pushMatrix();
    translate(this.x, this.y);
    rotate(this.rot * 90);
    if (!this.used[2]) {
        renderImage(this.type.locked, 0, 0);
    } else {
        renderImage(this.type.unlocked, 0, 0);
    }
    popMatrix();
};
computer.prototype.nextTo = function() {
    if (!this.used[0] || this.used[1] !== false) {
        var w = constrain(this.type.width, 10, this.type.width) + 10, h = constrain(this.type.height, 10, this.type.height) + 10, x = this.x + w / 2, y = this.y, theWidth = w, theHeight = h, theRot = allies[0].rot;
        if (this.rot === 1) {
            x = this.x;
            y = this.y + w / 2;
            theWidth = h;
            theHeight = w;
        } else if (this.rot === 2) {
            x = this.x - w / 2;
        } else if (this.rot === 3) {
            x = this.x;
            y = this.y - w / 2;
            theWidth = h;
            theHeight = w;
        }
        if (theRot <= 45) {
            theRot += 360;
        }
        if (inBox(allies[0].x, allies[0].y, x, y, theWidth, theHeight) && theRot >= (this.rot * 90) + 45 && theRot < (this.rot * 90) + 135) {
            this.standingBy = true;
            byConsole[0] = true;
            consoleType = "Use console";
        } else {
            this.standingBy = false;
        }
    } else {
        this.standBy = false;
    }
};
computer.prototype.drawBox = function() {
    var w = constrain(this.type.width, 10, this.type.width) + 10, h = constrain(this.type.height, 10, this.type.height) + 10, x = this.x + w / 2, y = this.y, theWidth = w, theHeight = h, theRot = allies[0].rot;
    if (this.rot === 1) {
        x = this.x;
        y = this.y + w / 2;
        theWidth = h;
        theHeight = w;
    } else if (this.rot === 2) {
        x = this.x - w / 2;
    } else if (this.rot === 3) {
        x = this.x;
        y = this.y - w / 2;
        theWidth = h;
        theHeight = w;
    }
    if (theRot <= 45) {
        theRot += 360;
    }
    noFill();
    stroke(0, 0, 255, 100);
    strokeWeight(2);
    rect(x, y, theWidth, theHeight);
    noStroke();
};
computer.prototype.use = function(a) {
    if ((canPressT && usingConsole === "NOT" && this.standingBy && (!this.used[0] || this.used[1] !== false)) || a) {
        this.result();
        usingConsole = this;
        this.used[0] = true;
        this.used[2] = !this.used[2];
    }
};
checkLock = function(bound) {
    for (var i = 0; i < doors.length; i++) {
        if (doors[i].boundNumber === bound) {
            return doors[i].locked;
        }
    }
};
unlockDoors = function(bound, to) {
    for (var i = 0; i < doors.length; i++) {
        if (doors[i].boundNumber === bound) {
            if (to === undefined) {
                doors[i].locked = !doors[i].locked;
            } else {
                doors[i].locked = to;
            }
        }
    }
};
openDoors = function(bound) {
    for (var i = 0; i < doors.length; i++) {
        if (doors[i].boundNumber === bound) {
            doors[i].alwaysOpen = !doors[i].alwaysOpen;
        }
    }
};
//}
// (6) "OTHER" {
var noScopeZone = function(obj, type, bounds) {
    //obj.inSmoke = false;
    if (type === "Circle" && sq(obj.x - bounds[0]) + sq(obj.y - bounds[1]) < sq(bounds[2])) {
        obj.canScope = false;
        obj.stunTime = 24;
        obj.stunType = "smoke";
        obj.inSmoke = true;
    } else if (type === "Rectangle" && obj.x > bounds[0] - (bounds[2] / 2) && obj.x < bounds[0] + (bounds[2] / 2) && obj.y > bounds[1] - (bounds[3] / 2) && obj.y < bounds[1] + (bounds[3] / 2)) {
        obj.canScope = false;
        obj.stunTime = 24;
        obj.stunType = "smoke";
        obj.inSmoke = true;
    }
};
//}
//} END "COLLISIONS"

// "LOOT" {
// (1) "LOOT" {
var loot = function(x, y, element, number, type, other, startVelocity) {
    this.x = x;
    this.y = y;
    this.element = element;
    this.type = type;
    this.other = other;
    this.number = number;
    if (this.element === "a") {
        if (this.type === "Gun") {
            this.element = guns[this.other];
        } else if (this.type === "Armor") {
            this.element = armor[this.other];
        } else if (this.type === "Melee") {
            this.element = melee[this.other];
        } else if (this.type === "Backpack") {
            this.element = backpack[this.other];
        } else if (this.type === "Grenade") {
            this.element = grenades[this.other];
        } else if (this.type === "Medical") {
            this.element = medical[this.other];
        } else if (this.type === "Ammo") {
            this.element = ammo[this.other];
        } else if (this.type === "Attachment") {
            this.element = attachments[this.other[0]][this.other[1]];
        }
    }
    this.graphic = this.element.graphic;
    this.color = ammo[(this.element.ammo || defAmmo)].lootFill;
    this.description = this.element.basic || this.element.description || "Error 001: Description Unavailable";
    this.name = this.element.name || "Error 002: Name Unavailable";
    this.ammo = this.element.ammo || "Error 003: Ammo Type Unavailable";
    this.width = 40;
    if (this.type === "Gun" || this.type === "Armor" || this.type === "Melee" || this.type === "Backpack") {
        this.width = 40;
    } else if (this.type === "Grenade" || this.type === "Medical" || this.type === "Ammo" || this.type === "Attachment") {
        this.width = 30;
    }
    if (this.type === "Ammo") {
        this.description = "Used by ";
        var f = this.element;
        for (var i = 0; i < f.usedFor.length; i++) {
            if (i < f.usedFor.length - 1) {
                if (f.usedFor.length > 2) {
                    this.description += guns[f.usedFor[i]].name + ", ";
                } else {
                    this.description += guns[f.usedFor[i]].name + " ";
                }
            } else {
            this.description += "and " + guns[f.usedFor[i]].name + ".";
            }
        }
        this.color = this.element.lootFill;
    }
    if (this.type === "Attachment") {
        this.color = levelColors[this.number + 1];
        if (this.other[0] === "Scope") {
            this.color = levelColors[scopes[this.other[1]][2]];
        }
    }
    if (this.type === "Backpack" || this.type === "Armor" || this.type === "Melee") {
        this.color = levelColors[this.element.level || 0];
    }
    if (this.type === "Medical") {
        this.color = (this.element.type === "Health") ? color(150, 0, 0) : color(0, 150, 150);
    }
    if (this.type === "Grenade") {
        this.color = color(150);
    }
    if (startVelocity === undefined) {
        this.allForces = [random(360), 1];
    } else {
        this.allForces = [0, 0];
    }
    this.timeAlive = 0;
};
loot.prototype.draw = function() {
    if (!freePlay || (this.timeAlive <= 1200 || (this.timeAlive > 1200 && this.timeAlive <= 1500 && (this.timeAlive - 1200) % 40 <= 20) || (this.timeAlive > 1500 && this.timeAlive < 1680 && (this.timeAlive - 1500) % 30 <= 15) || (this.timeAlive >= 1680 && this.timeAlive < 1740 && (this.timeAlive - 1680) % 20 <= 10) || (this.timeAlive >= 1740 && (this.timeAlive - 1740) % 10 <= 5))) {
        noFill();
        stroke(this.color);
        strokeWeight(2);
        arc(this.x, this.y, this.width, this.width, 200, 340);
        arc(this.x, this.y, this.width, this.width, 20, 160);
        noStroke();
        ellipse(this.x, this.y, this.width, this.width);
        noStroke();
        fill(0, 50);
        ellipse(this.x, this.y, this.width - 1, this.width - 1);
        var a = [this.width - 5, this.width - 5];
        if (this.type === "Gun") {
            a = [this.width + 5, this.width - 20];
        } else if (this.type === "Ammo") {
            a = [this.width - 20, this.width - 10];
        }
        pushMatrix();
        translate(this.x, this.y);
        renderImage(this.element.graphic, 0, 0, a[0], a[1]);
        popMatrix();
    }
};
loot.prototype.move = function() {
    for (var i = 0; i < walls.length; i++) {
        collide(walls[i].type[0], walls[i].x, walls[i].y, walls[i].width, walls[i].height, this);
    }
    var allForces = [];
    allForces.push(this.allForces);
    for (var i = 0; i < allLoot.length; i++) {
        if (allLoot[i] !== this) {
            if (this.x === allLoot[i].x && this.y === allLoot[i].y) {
                this.x += random(-0.1, 0.1);
                this.y += random(-0.1, 0.1);
            }
            var a = (this.width / 2) + (allLoot[i].width / 2) + 5, b = this.x - allLoot[i].x, c = this.y - allLoot[i].y;
            if (sq(b) + sq(c) <= sq(a)) {
                var d = atan2(this.y - allLoot[i].y, this.x - allLoot[i].x), e = dist(allLoot[i].x, allLoot[i].y, this.x, this.y), f = 1 - (e / a);
                allForces.push([d, 0.05 + 0.05 * f]);
            }
        }
    }
    var max = 1.25;
    if (allForces.length > 1) {
        var x = this.x, y = this.y;
        for (var i = 0; i < allForces.length; i++) {
            x += cos(allForces[i][0]) * allForces[i][1];
            y += sin(allForces[i][0]) * allForces[i][1];
        }
        var a = dist(x, y, this.x, this.y), b = atan2(this.y - y, this.x - x) + 180;
        this.allForces = [b, (a > max) ? max : a];
    }
    this.x += compensateFPS * cos(this.allForces[0]) * this.allForces[1];
    this.y += compensateFPS * sin(this.allForces[0]) * this.allForces[1];
    this.allForces[1] = constrain(this.allForces[1] - 0.05, 0, max);
    this.timeAlive += compensateFPS;
};
//}
// (2) "CRATES" {
var compileLoot = function(type, chance, special, special2) {
    var list = [];
    if (type === "Gun") {
        for (var i = 0; i < guns.length; i++) {
            if (special === undefined) {
                if (guns[i].chance === chance) {
                    list.push(i);
                }
            } else {
                for (var j = 0; j < special.length; j++) {
                    if (guns[i].type === special[j] && guns[i].chance === chance) {
                        list.push(i);
                    }
                }
            }
        }
    } else if (type === "Ammo") {
        for (var i = 0; i < ammoNames.length; i++) {
            if (special === undefined) {
                if (ammo[ammoNames[i]].chance === chance) {
                    list.push(ammoNames[i]);
                }
            } else {
                if (ammo[ammoNames[i]].chance === chance) {
                    for (var j = 0; j < special.length; j++) {
                        if (ammo[ammoNames[i]].name === special[j]) {
                            list.push(ammoNames[i]);
                        }
                    }
                }
            }
        }
    } else if (type === "Attachment") {
        for (var i = 0; i < attachChoices.length; i++) {
            var allowed = false;
            if (special !== undefined) {
                for (var j = 0; j < special.length; j++) {
                    if (special[j] === attachChoices[i]) {
                        allowed = true;
                    }
                }
            } else {
                allowed = true;
            }
            if (allowed) {
                if (attachChoices[i] !== "Scope") {
                    if (special2 === undefined) {
                        for (var j = 0; j < Object.keys(attachments[attachChoices[i]]).length; j++) {
                            list.push([attachChoices[i], Object.keys(attachments[attachChoices[i]])[j], chance]);
                        }
                    } else {
                        for (var j = 0; j < Object.keys(attachments[attachChoices[i]]).length; j++) {
                            for (var k = 0; k < special2.length; k++) {
                                if (special2[k] === Object.keys(attachments[attachChoices[i]])[j]) {
                                    list.push([attachChoices[i], Object.keys(attachments[attachChoices[i]])[j], chance]);
                                }
                            }
                        }
                    }
                } else {
                    if (special2 === undefined) {
                        for (var j = 0; j < Object.keys(scopes).length; j++) {
                            if (scopeChances[j] === chance) {
                                list.push(["Scope", Object.keys(scopes)[j], ""]);
                            }
                        }
                    } else {
                        for (var j = 0; j < Object.keys(scopes).length; j++) {
                            for (var k = 0; k < special2.length; k++) {
                                if (scopeChances[j] === chance && scopeChoices[j] === special2[k]) {
                                    list.push(["Scope", Object.keys(scopes)[j], ""]);
                                }
                            }
                        }
                    }
                }
            }
        }
    } else if (type === "Medical") {
        for (var i = 0; i < medical.length; i++) {
            if (medical[i].chance === chance) {
                list.push(i);
            }
        }
    } else if (type === "Armor") {
        for (var i = 0; i < armor.length; i++) {
            if (armor[i].chance === chance) {
                list.push(i);
            }
        }
    } else if (type === "Backpack") {
        for (var i = 0; i < backpack.length; i++) {
            if (backpack[i].chance === chance) {
                list.push(i);
            }
        }
    } else if (type === "Melee") {
        for (var i = 0; i < melee.length; i++) {
            if (melee[i].chance === chance) {
                list.push(i);
            }
        }
    } else if (type === "Grenade") {
        for (var i = 0; i < grenades.length; i++) {
            list.push(i);
        }
    }
    return list;
};
var spawnLoot = function(whichList, type, box) {
    var a = random(box[0] - box[2] / 2, box[0] + box[2] / 2), b = random(box[1] - box[3] / 2, box[1] + box[3] / 2), choice = whichList[round(random(0, whichList.length - 1))];
    if (type === "Gun") {
        allLoot.push(construct(loot, [a, b, guns[choice], 1, "Gun", choice]));
        a = random(box[0] - box[2] / 2, box[0] + box[2] / 2);
        b = random(box[1] - box[3] / 2, box[1] + box[3] / 2);
        var left = guns[choice].mag - ammo[guns[choice].ammo].stack;
        allLoot.push(construct(loot, [a, b, ammo[guns[choice].ammo], ammo[guns[choice].ammo].stack, "Ammo", guns[choice].ammo]));
        while (left > 0) {
            a = random(box[0] - box[2] / 2, box[0] + box[2] / 2);
            b = random(box[1] - box[3] / 2, box[1] + box[3] / 2);
            if (left >= ammo[guns[choice].ammo].stack) {
                allLoot.push(construct(loot, [a, b, ammo[guns[choice].ammo], ammo[guns[choice].ammo].stack, "Ammo", guns[choice].ammo]));
                left -= ammo[guns[choice].ammo].stack;
            } else {
                allLoot.push(construct(loot, [a, b, ammo[guns[choice].ammo], left, "Ammo", guns[choice].ammo]));
                left = 0;
            }
        }
    } else if (type === "Ammo") {
        allLoot.push(construct(loot, [a, b, ammo[choice], ammo[choice].stack, "Ammo", choice]));
    } else if (type === "Attachment") {
        var c = attachments[choice[0]][choice[1]], d;
        if (choice[0] !== "Scope") {
            var foundInIndex = findInIndex(attachChances, choice[2]);
            d = foundInIndex[round(random(0, foundInIndex.length - 1))];
        } else {
            var foundInIndex = findInIndex(attachChances, scopeChances[findInIndex(scopeChoices, choice[1])]);
            d = foundInIndex[round(random(0, foundInIndex.length - 1))];
        }
        allLoot.push(construct(loot, [a, b, c, d, "Attachment", [choice[0], choice[1]]]));
    } else if (type === "Medical") {
        allLoot.push(construct(loot, [a, b, medical[choice], medical[choice].lootDrop, "Medical", choice]));
    } else if (type === "Armor") {
        allLoot.push(construct(loot, [a, b, armor[choice], armor[choice].health, "Armor", choice]));
    } else if (type === "Backpack") {
        allLoot.push(construct(loot, [a, b, backpack[choice], backpack[choice].level, "Backpack", choice]));
    } else if (type === "Melee") {
        allLoot.push(construct(loot, [a, b, melee[choice], melee[choice].level, "Melee", choice]));
    } else if (type === "Grenade") {
        allLoot.push(construct(loot, [a, b, grenades[choice], grenades[choice].stack, "Grenade", choice]));
    }
};
var crate = function(x, y, rot, type) {
    this.x = x;
    this.y = y;
    this.rot = rot;
    this.type = crates[type];
    this.opened = false;
    var a = this.type.width, b = this.type.height;
    if (this.rot === 0 || this.rot === 2) {
        walls.push(construct(block, ["Rectangle|Invisible", this.x, this.y, this.type.width, this.type.height, [["opaque", false],["shootThrough",true]]]));
    } else {
        walls.push(construct(block, ["Rectangle|Invisible", this.x, this.y, this.type.height, this.type.width, [["opaque", false],["shootThrough",true]]]));
        a = b;
        b = this.type.width;
    }
    this.spawnBox = [this.x + cos(this.rot * 90) * (a / 2 + 5), this.y + sin(this.rot * 90) * (b / 2 + 5), 2, 2];
    this.timeAlive = 0;
};
crate.prototype.draw = function() {
    this.timeAlive += compensateFPS;
    if (freePlay && this.timeAlive >= crateDelay[crateDelay[crateDelay.length - 1]] * 60) {
        this.opened = false;
    }
    fill(0, 255, 0);
    pushMatrix();
    translate(this.x, this.y);
    rotate(this.rot * 90);
    if (!this.opened) {
        renderImage(this.type.locked, 0, 0);
    } else {
        renderImage(this.type.unlocked, 0, 0);
    }
    popMatrix();
};
crate.prototype.nextTo = function() {
    var x = this.x + (this.type.width / 2) + 20, y = this.y, theWidth = 40, theHeight = this.type.height + 10, theRot = allies[0].rot;
    if (this.rot === 1) {
        x = this.x;
        y = this.y + (this.type.width / 2) + 20;
        theWidth = this.type.height + 10;
        theHeight = 40;
    } else if (this.rot === 2) {
        x = this.x - ((this.type.width / 2) + 20);
    } else if (this.rot === 3) {
        x = this.x;
        y = this.y - ((this.type.width / 2) + 20);
        theWidth = this.type.height + 10;
        theHeight = 40;
    }
    if (theRot <= 45) {
        theRot += 360;
    }
    if (!this.opened && inBox(allies[0].x, allies[0].y, x, y, theWidth, theHeight) && theRot >= (this.rot * 90) + 45 && theRot < (this.rot * 90) + 135) {
        this.standingBy = true;
        byConsole[0] = true;
        consoleType = "Open crate";
    } else {
        this.standingBy = false;
    }
};
crate.prototype.drawBox = function() {
    var x = this.x + (this.type.width / 2) + 20, y = this.y, theWidth = 40, theHeight = this.type.height + 10, theRot = allies[0].rot;
    if (this.rot === 1) {
        x = this.x;
        y = this.y + (this.type.width / 2) + 20;
        theWidth = this.type.height + 10;
        theHeight = 40;
    } else if (this.rot === 2) {
        x = this.x - ((this.type.width / 2) + 20);
    } else if (this.rot === 3) {
        x = this.x;
        y = this.y - ((this.type.width / 2) + 20);
        theWidth = this.type.height + 10;
        theHeight = 40;
    }
    noFill();
    stroke(255, 0, 255, 100);
    strokeWeight(2);
    rect(x, y, theWidth, theHeight);
    noStroke();
};
crate.prototype.use = function() {
    if (canPressT && usingConsole === "NOT" && this.standingBy && !this.opened) {
        var randomNumber = random(), current = 0;
        for (var i = 0; i < this.type.guaranteed.length; i++) {
            if (randomNumber >= current && randomNumber < current + this.type.guaranteed[i][2]) {
                spawnLoot(compileLoot(this.type.guaranteed[i][1], this.type.guaranteed[i][0], this.type.guaranteed[i][3], this.type.guaranteed[i][4]), this.type.guaranteed[i][1], this.spawnBox);
                i = this.type.guaranteed.length;
            } else {
                current += this.type.guaranteed[i][2];
            }
        }
        for (var i = 0; i < this.type.rand.length; i++) {
            var randomNumber = random();
            if (randomNumber <= this.type.rand[i][2]) {
                spawnLoot(compileLoot(this.type.rand[i][1], this.type.rand[i][0], this.type.rand[i][3], this.type.rand[i][4]), this.type.rand[i][1], this.spawnBox);
            }
        }
        usingConsole = this;
        this.opened = true;
        this.timeAlive = 0;
    }
};
//}
//} END "LOOT"

// "BULLETS" {
var bullet = function(x, y, rot, info, other) {
    this.x = x || 0;
    this.y = y || 0;
    this.rot = rot || 0;
    this.info = info;
    this.speed = (this.info[0] || 50) * compensateFPS;
    this.type = ammo[this.info[1]] || ammo["5mm"];
    this.x2 = this.x - (this.speed * sin(-this.rot)) || 0;
    this.y2 = this.y - (this.speed * cos(-this.rot)) || 0;
    this.trail = 0;
    this.time = 0;
    this.range = this.info[2] || 500;
    this.damage = this.info[3] || 10;
    this.trailOn = this.info[4];
    this.explosive = this.info[5] || 0;
    this.side = this.info[6] || "enemy";
    this.stun = this.info[7] || 0;
    this.dead = false;
    this.deathTime = 0;
    this.trueSpeed = this.info[0];
    this.damageWho = ["none", 0];
    this.grenade = false;
    this.fire = false;
    this.RPG = false;
    this.color = this.type.fill;
    this.flameSize = this.type.size;
    this.flameColor = [0, 0, 0, 1];
    this.change = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]];
    this.other = other || [];
    this.smokeTrail = [];
    this.smokes = false;
    this.smokeAmount = [1, 3];
    for (var i = 0; i < this.type.special.length; i += 2) {
        var piece1 = this.type.special[i].toLowerCase();
        var piece2 = this.type.special[i + 1];
        if (piece1 === "grenade" && piece2) {
            this.grenade = true;
        } else if (piece1 === "fire" && piece2) {
            this.fire = true;
        } else if (piece1 === "rpg" && piece2) {
            this.RPG = true;
            this.smokeAmount = [10, 20];
        } else if (piece1 === "smoketrail" && piece2) {
            this.smokes = true;
        } else if (piece1 === "r") {
            this.flameColor[0] = piece2;
        } else if (piece1 === "g") {
            this.flameColor[1] = piece2;
        } else if (piece1 === "b") {
            this.flameColor[2] = piece2;
        } else if (piece1 === "a") {
            this.flameColor[3] = piece2;
        } else if (piece1 === "rd") {
            this.change[0] = piece2;
        } else if (piece1 === "gd") {
            this.change[1] = piece2;
        } else if (piece1 === "bd") {
            this.change[2] = piece2;
        } else if (piece1 === "ad") {
            this.change[3] = piece2;
        } else if (piece1 === "fd") {
            this.change[4] = piece2;
        }
    }
    for (var i = 0; i < this.other.length; i += 2) {
        var piece1 = this.other[i].toLowerCase();
        var piece2 = this.other[i + 1];
        if (piece1 === "dead") {
            this.dead = piece2;
        } else if (piece1 === "dtime") {
            this.deathTime = Round(piece2, 100);
        } else if (piece1 === "time") {
            this.time = Round(piece2, 100);
        } else if (piece1 === "dwho") {
            this.damageWho = copyArray(piece2);
        } else if (piece1 === "fsize") {
            this.flameSize = piece2;
        } else if (piece1 === "fcolor") {
            this.flameColor = copyArray(piece2);
        } else if (piece1 === "trail") {
            this.trail = Round(piece2, 100);
        }
    }
    this.og = [this.x, this.y];
};
bullet.prototype.draw = function() {
    if (!this.dead) {
        this.speed = this.trueSpeed * compensateFPS;
    }
    if (this.trail < (this.speed / compensateFPS) * 8 && this.deathTime < 1 && this.time >= this.speed && this.trailOn) {
        this.trail += this.speed;
    }
    if (this.dead && this.deathTime > 2) {
        this.trail -= this.trueSpeed * compensateFPS;
    }
    pushMatrix();
    translate(this.x, this.y);
    rotate(this.rot);
    if (this.trail > 0 && this.trailOn) {
        noStroke();
        fill(this.color);
        var trailWidth = (this.trail / this.speed);
        if (trailWidth > this.type.size) {
            trailWidth = this.type.size;
        }
        arc(0, 0, trailWidth * 2, trailWidth * 2, 180, 360);
        triangle(-trailWidth, 0, trailWidth, 0, 0, this.trail - 2);
        noStroke();
        if (this.grenade) {
            fill(0, 100, 0);
            ellipse(0, 0, 4, 4);
        } else if (this.fire) {
            fill(this.flameColor[0] || 1, this.flameColor[1], this.flameColor[2], this.flameColor[3]);
            var addWidth = this.flameSize / 2;
            triangle(-trailWidth - addWidth, 0, trailWidth + addWidth, 0, 0, (this.trail - 2) + (this.flameSize * 2));
            arc(0, 0, (trailWidth * 2) + (addWidth * 2), (trailWidth * 2) + (addWidth * 2), 180, 360);
            this.flameColor[0] += random(this.change[0][0], this.change[0][1]) * compensateFPS;
            this.flameColor[1] += random(this.change[1][0], this.change[1][1]) * compensateFPS;
            this.flameColor[2] += ((random(this.change[2][0], this.change[2][1]) - this.flameColor[2]) / 5) * compensateFPS;
            this.flameColor[3] += ((random(this.change[3][0], this.change[3][1]) - this.flameColor[3]) / 5) * compensateFPS;
            this.flameSize += ((random(this.change[4][0], this.change[4][1]) - this.flameSize) / 5) * compensateFPS;
            if (this.flameColor[0] > 255) {
                this.flameColor[0] = 255;
            }
            if (this.flameColor[1] > 255) {
                this.flameColor[1] = 255;
            }
            if (this.flameColor[2] > 255) {
                this.flameColor[2] = 255;
            }
            if (this.flameColor[3] > 255) {
                this.flameColor[3] = 255;
            }
        }
    }
    popMatrix();
    if (this.smokes) {
        noStroke();
        for (var i = this.smokeTrail.length - 1; i >= 0; i--) {
            var a = this.smokeTrail[i];
            fill(255, a[3]);
            ellipse(a[0], a[1], a[2], a[2]);
            a[4] += compensateFPS;
            if (a[4] > 30) {
                a[3] -= compensateFPS * 1.5;
                if (a[3] <= 0) {
                    this.smokeTrail.remove(a);
                }
            }
        }
    }
};
bullet.prototype.hitCharacter = function() {
    if (this.deathTime === 0 && this.trailOn && this.side !== "ally") {
        for (var i = 0; i < allies.length; i++) {
            if (allies[i].meleeCanShield && (allies[i].currentWeapon === 2 || allies[i].storeWeapon !== "NONE")) {
                for (var j = 0; j < allies[i].damageWireFrame.length - 1; j++) {
                    var a = allies[i].damageWireFrame;
                    var collide = findIntersect([a[j][0], a[j][1], a[j + 1][0], a[j + 1][1]], [this.x, this.y, this.x2, this.y2]);
                    var x = collide[0], y = collide[1];
                    if (x !== "NO" && y !== "NO" && this.deathTime === 0) {
                        this.speed = dist(x, y, this.x, this.y);
                        this.x2 = this.x - (this.speed * sin(-this.rot));
                        this.y2 = this.y - (this.speed * cos(-this.rot));
                        this.dead = true;
                    }
                }
            }
            var collide = circleLine([allies[i].x, allies[i].y, allies[i].width], [this.x, this.y, this.x2, this.y2], true);
            var BOB_IS_MY_HERO = collide[2];
            var NO_ROB_IS = collide[BOB_IS_MY_HERO] || ["NO", "NO"];
            var x = NO_ROB_IS[0];
            var y = NO_ROB_IS[1], woundAngle;
            if (x !== "NO") {
                woundAngle = atan2(allies[i].y - y, allies[i].x - x) + 180;
                this.speed = dist(x, y, this.x, this.y);
                this.x2 = this.x - (this.speed * sin(-this.rot));
                this.y2 = this.y - (this.speed * cos(-this.rot));
                this.damageWho = ["ally", i];
                this.dead = true;
            }
            if (x !== "NO" && this.dead) {
                allies[i].wounds.push([woundAngle, 30]);
                allies[i].gettingShot = allies[i].GSmax;
            }
        }
    }
    if (this.deathTime === 0 && this.trailOn && this.side !== "enemy") {
        for (var i = 0; i < enemies.length; i++) {
            if (enemies[i].meleeCanShield && (enemies[i].currentWeapon === 2 || enemies[i].storeWeapon !== "NONE")) {
                for (var j = 0; j < enemies[i].damageWireFrame.length - 1; j++) {
                    var a = enemies[i].damageWireFrame;
                    var collide = findIntersect([a[j][0], a[j][1], a[j + 1][0], a[j + 1][1]], [this.x, this.y, this.x2, this.y2]);
                    var x = collide[0], y = collide[1];
                    if (x !== "NO" && y !== "NO" && this.deathTime === 0) {
                        this.speed = dist(x, y, this.x, this.y);
                        this.x2 = this.x - (this.speed * sin(-this.rot));
                        this.y2 = this.y - (this.speed * cos(-this.rot));
                        this.dead = true;
                    }
                }
            }
            var collide = circleLine([enemies[i].x, enemies[i].y, enemies[i].width], [this.x, this.y, this.x2, this.y2], true);
            var BOB_IS_MY_HERO = collide[2];
            var NO_ROB_IS = collide[BOB_IS_MY_HERO] || ["NO", "NO"];
            var x = NO_ROB_IS[0];
            var y = NO_ROB_IS[1], woundAngle;
            if (x !== "NO") {
                woundAngle = atan2(enemies[i].y - y, enemies[i].x - x) + 180;
                this.speed = dist(x, y, this.x, this.y);
                this.x2 = this.x - (this.speed * sin(-this.rot));
                this.y2 = this.y - (this.speed * cos(-this.rot));
                this.damageWho = ["enemy", i];
                this.dead = true;
            }
            if (x !== "NO" && this.dead) {
                enemies[i].wounds.push([woundAngle, 30]);
                enemies[i].gettingShot = enemies[i].GSmax;
            }
        }
    }
};
bullet.prototype.collide = function() {
    if (this.trailOn && this.deathTime === 0) {
        for (var i = 0; i < walls.length; i++) {
            if (walls[i].barrier) {
                var x, y;
                if (walls[i].type[0] === "Rectangle") {
                    var collide = rectSegment([walls[i].x, walls[i].y, walls[i].width, walls[i].height], [this.x, this.y, this.x2, this.y2], true);
                    var BOB_IS_MY_HERO = collide[2];
                    var NO_ROB_IS = collide[BOB_IS_MY_HERO] || ["NO", "NO"];
                    x = NO_ROB_IS[0];
                    y = NO_ROB_IS[1];
                } else if (walls[i].type[0] !== "Rectangle") {
                    var collide = circleLine([walls[i].x, walls[i].y, walls[i].width], [this.x, this.y, this.x2, this.y2], true);
                    var BOB_IS_MY_HERO = collide[2];
                    var NO_ROB_IS = collide[BOB_IS_MY_HERO] || ["NO", "NO"];
                    x = NO_ROB_IS[0];
                    y = NO_ROB_IS[1];
                }
                if (x !== "NO") {
                    walls[i].health -= this.damage;
                    debriz.push(construct(debris, [x, y, 40, walls[i].color]));
                    this.speed = dist(x, y, this.x, this.y);
                    this.x2 = this.x - (this.speed * sin(-this.rot));
                    this.y2 = this.y - (this.speed * cos(-this.rot));
                    if (this.explosive > 1) {
                        this.speed -= 0.2;
                    }
                    this.dead = true;
                    this.damageWho = ["NONE", 0];
                }
            }
        }
    }
};
bullet.prototype.move = function() {
    if (this.deathTime < 1) {
        this.time += this.speed;
        this.y += cos(this.rot + 180) * this.speed;
        this.x -= sin(this.rot + 180) * this.speed;
        this.x2 = this.x - (this.speed * sin(-this.rot));
        this.y2 = this.y - (this.speed * cos(-this.rot));
        if (this.smokes) {
            var b = (this.smokeAmount[1] - this.smokeAmount[0]) / 2;
            for (var i = 0; i < this.speed; i += b) {
                var a = random(this.smokeAmount[0], this.smokeAmount[1]);
                this.smokeTrail.push([this.x + cos(this.rot + 90) * i + random(-b, b), this.y + sin(this.rot + 90) * i + random(-b, b), a, a * 3, 0]);
            }
        }
    }
    if (this.dead || !this.trailOn) {
        this.dead = true;
        this.deathTime++;
        if (this.trail < 0) {
            this.trail = 0;
        }
        if (this.explosive > 0 && this.deathTime === 1) {
            booms.push(construct(boom, [this.x, this.y, this.explosive, [this.explosive / 10, true, "NOT", "Frag"]]));
        }
    }
};
//} END "BULLETS"

// "GRENADES" {
var bomb = function(x, y, rot, speed, type, other) {
    this.x = x;
    this.y = y;
    this.rot = rot;
    this.rot2 = 0;
    this.speed = speed;
    this.thrown = false;
    this.type = grenades[type];
    this.t2 = type;
    this.range = this.type.range;
    this.time = this.type.time;
    this.stun = this.type.stun;
    this.explosionType = this.type.type;
    this.trueSpeed = this.speed;
    this.x2 = this.x - (this.speed * sin(-this.rot)) || 0;
    this.y2 = this.y - (this.speed * cos(-this.rot)) || 0;
    this.other = other || [];
    for (var i = 0; i < this.other.length; i += 2) {
        var piece1 = this.other[i].toLowerCase();
        var piece2 = this.other[i + 1];
        if (piece1 === "tspeed") {
            this.trueSpeed = piece2;
        } else if (piece1 === "thrown") {
            this.thrown = piece2;
        } else if (piece1 === "t2") {
            this.t2 = piece2;
        }
    }
};
bomb.prototype.draw = function() {
    pushMatrix();
    translate(this.x, this.y);
    rotate(this.rot2);
    renderImage(this.type.game, 0, 0);
    popMatrix();
};
bomb.prototype.move = function() {
    this.speed = this.trueSpeed * compensateFPS;
    this.time -= compensateFPS;
    this.y += cos(this.rot + 180) * this.speed;
    this.x -= sin(this.rot + 180) * this.speed;
    this.x2 = this.x - (this.speed * sin(-this.rot));
    this.y2 = this.y - (this.speed * cos(-this.rot));
    this.speed += -this.speed / 10;
    this.trueSpeed += (-this.trueSpeed * compensateFPS) / 10;
    this.rot2 += this.trueSpeed * 4;
};
bomb.prototype.collide = function() {
    for (var i = 0; i < walls.length; i++) {
        var x, y;
        if (walls[i].type[0] === "Rectangle") {
            var collide = rectSegment([walls[i].x, walls[i].y, walls[i].width, walls[i].height], [this.x, this.y, this.x2, this.y2], true);
            var BOB_IS_MY_HERO = collide[2];
            var NO_ROB_IS = collide[BOB_IS_MY_HERO] || ["NO", "NO"];
            x = NO_ROB_IS[0];
            y = NO_ROB_IS[1];
        } else if (walls[i].type[0] !== "Rectangle") {
            var collide = circleLine([walls[i].x, walls[i].y, walls[i].width], [this.x, this.y, this.x2, this.y2], true);
            var BOB_IS_MY_HERO = collide[2];
            var NO_ROB_IS = collide[BOB_IS_MY_HERO] || ["NO", "NO"];
            x = NO_ROB_IS[0];
            y = NO_ROB_IS[1];
        }
        if (x !== "NO") {
            var wanted = ((this.speed - dist(x, y, this.x, this.y)) / 2);
            this.trueSpeed /= 2;
            if (walls[i].type[0] === "Rectangle") {
                if (x < walls[i].x - ((walls[i].width / 2) - 1) && y < walls[i].point4[1] && y > walls[i].point1[1]) {
                    this.rot = -this.rot;
                } else if (y < walls[i].y - ((walls[i].height / 2) - 1) && x > walls[i].point1[0] && x < walls[i].point2[0]) {
                    this.rot = 90 + (90 - this.rot);
                } else if (x > walls[i].x + ((walls[i].width / 2) - 1) && y > walls[i].point2[1] && y < walls[i].point3[1]) {
                    this.rot = 180 + (180 - this.rot);
                } else if (y > walls[i].y + ((walls[i].height / 2) - 1) && x < walls[i].point3[0] && x > walls[i].point4[0]) {
                    this.rot = 270 + (270 - this.rot);
                }
            } else if (walls[i].type[0] === "Circle") {
                var Rot = atan2(walls[i].y - y, walls[i].x - x) + 180;
                this.rot = Rot + (Rot - this.rot);
            }
            this.x = x - (wanted * sin(-this.rot));
            this.y = y - (wanted * cos(-this.rot));
            this.x2 = this.x - (this.speed * sin(-this.rot));
            this.y2 = this.y - (this.speed * cos(-this.rot));
        }
    }
};
//} END "GRENADES"

// "EXPLOSIONS" {
// (1) NORMAL {
boom = function(x, y, size, type, other) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.stun = type[0];
    this.damage = type[1];
    this.harm = type[2] || "NOT";
    this.exploType = type[3] || "Normal";
    this.side = type[5] || "";
    this.time = 0;
    this.initialized = false;
    this.other = other || [];
    for (var i = 0; i < this.other.length; i += 2) {
        var piece1 = this.other[i].toLowerCase();
        var piece2 = this.other[i + 1];
        if (piece1 === "init") {
            this.initialized = piece2;
        } else if (piece1 === "time") {
            this.time = piece2;
        }
    }
    if (this.exploType === "Frag") {
        var a = 9;
        for (var i = 0; i < this.size / 20; i++) {
            bullets.push(construct(bullet, [this.x, this.y, 360 * 20 * i / this.size + random(-a, a), [random(4, 8), "Debris", this.size / 2 * random(0.75, 1.25), random(5, 10), true, 0, this.side, false]]));
        }
        for (var i = 0; i < this.size / 20; i++) {
            bullets.push(construct(bullet, [this.x, this.y, 360 * 20 * i / this.size + random(-a, a), [random(8, 15), "Debris2", this.size / 2 * random(0.9, 1.4), random(5, 10), true, 0, this.side, false]]));
        }
        for (var i = 0; i < this.size / 20; i++) {
            bullets.push(construct(bullet, [this.x, this.y, 360 * 20 * i / this.size + random(-a, a), [random(8, 15), "Debris3", this.size / 2 * random(0.9, 1.4), random(5, 10), true, 0, this.side, false]]));
        }
        for (var i = 0; i < this.size / 20; i++) {
            bullets.push(construct(bullet, [this.x, this.y, 360 * 20 * i / this.size + random(-a, a), [random(8, 15), "Debris4", this.size / 2 * random(0.9, 1.4), random(5, 10), true, 0, this.side, false]]));
        }
    }
    if (!this.initialized) {
        var theNumber;
        if (scene !== "cinematic") {
            theNumber = (1 - ((dist(allies[0].x, allies[0].y, this.x, this.y) / 4) / this.size)) * 2;
        } else {
            theNumber = 5;
        }
        screenShake += (theNumber > 0) ? (theNumber && this.damage > 0) : 0;
    }
};
boom.prototype.draw = function() {
    this.time += ((this.size - this.time) / 4) * compensateFPS;
    stroke(255, 50);
    noFill();
    strokeWeight(this.size / 10);
    ellipse(this.x, this.y, this.time, this.time);
};
boom.prototype.findTargets = function() {
    var allyTargets = [], enemyTargets = [];
    // PHASE 1 -- FIND NEARBY CHARACTERS {
    if (this.side !== "ally") {
        for (var i = 0; i < allies.length; i++) {
            var theDistance = dist(allies[i].x, allies[i].y, this.x, this.y);
            if (theDistance <= this.size / 2) {
                allyTargets.push([i, theDistance]);
            }
        }
    }
    if (this.side !== "enemy") {
        for (var i = 0; i < enemies.length; i++) {
            var theDistance = dist(enemies[i].x, enemies[i].y, this.x, this.y);
            if (theDistance <= this.size / 2) {
                enemyTargets.push([i, theDistance]);
            }
        }
    }
    //}
    // PHASE 2 -- SEE IF THEY'RE VISIBLE {
    for (var j = 0; j < allyTargets.length; j++) {
        if (!seeTarget([this.x, this.y], [allies[allyTargets[j][0]].x, allies[allyTargets[j][0]].y], true)) {
            allyTargets.splice(j, 1);
        }
    }
    for (var j = 0; j < enemyTargets.length; j++) {
        if (!seeTarget([this.x, this.y], [enemies[enemyTargets[j][0]].x, enemies[enemyTargets[j][0]].y], true)) {
            enemyTargets.splice(j, 1);
        }
    }
    //}
    // PHASE 3 -- WOUND THEM {
    for (var i = 0; i < allyTargets.length; i++) {
        var a = allyTargets[i][0];
        if (this.damage) {
            if (i !== 0 || (i === 0 && !godMode)) {
                if (this.harm === "NOT") {
                    var hurt = (this.size / 2 - allyTargets[i][1]) * 5;
                    allies[a].health -= dealDamage(hurt, allies[a]);
                }
            }
        }
        allies[a].stunTime = constrain(allies[a].stunTime, 0, Infinity) + this.stun;
        allies[a].stunType = "Normal";
        allies[a].warned = true;
    }
    for (var i = 0; i < enemyTargets.length; i++) {
        var a = enemyTargets[i][0];
        if (this.damage) {
            if (this.harm === "NOT") {
                var hurt = (this.size / 2 - enemyTargets[i][1]) * 5;
                //println(round(dealDamage(hurt, enemies[a])) + ", " + round(enemyTargets[i][1]) + ", " + this.size);
                enemies[a].health -= dealDamage(hurt, enemies[a]);
            }
        }
        enemies[a].stunTime = constrain(enemies[a].stunTime, 0, Infinity) + this.stun;
        enemies[a].stunType = "Normal";
        enemies[a].warned = true;
    }
    //}
    // PHASE 4 -- HURT WALLS {
    for (var i = 0; i < walls.length; i++) {
        if (walls[i].health !== Infinity) {
            if (walls[i].type[0] === "Rectangle") {
                var where = rectSegment([walls[i].x, walls[i].y, walls[i].width, walls[i].height], [this.x, this.y, walls[i].x, walls[i].y])[0];
                if (where[0] !== "NO") {
                    var theDist = dist(where[0], where[1], this.x, this.y);
                    if (sq(where[0] - this.x) + sq(where[1] - this.y) < sq(this.size / 2)) {
                        walls[i].health -= (this.size / 2 - theDist) * 2;   
                    }
                }
            } else {
                if (sq(walls[i].x - this.x) + sq(walls[i].y - this.y) < sq(this.size / 2 + walls[i].width / 2)) {
                    walls[i].health -= (this.size / 2 - walls[i].width) * 2;
                }
            }
        }
    }
    //}
    // PHASE 5 -- FINISH {
    this.initialized = true;
    //}
};
//}
// (2) SMOKE {
var smoke = function(x, y, range, rot, time, size, other) {
    this.x = x;
    this.y = y;
    this.range = range;
    this.rot = rot;
    this.time = time;
    this.size = size;
    this.currentSize = 0;
    this.opacity = random(200, 255);
    this.color = random(200, 255);
    this.speed = (range - (this.size / 2)) / 2;
    this.trueSpeed = this.speed;
    this.other = other || [];
    for (var i = 0; i < this.other.length; i += 2) {
        var piece1 = this.other[i].toLowerCase();
        var piece2 = this.other[i + 1];
        if (piece1 === "opac") {
            this.opacity = piece2;
        } else if (piece1 === "color") {
            this.color = piece2;
        } else if (piece1 === "csize") {
            this.currentSize = piece2;
        }
    }
};
smoke.prototype.draw = function() {
    fill(this.color, this.opacity);
    noStroke();
    ellipse(this.x, this.y, this.currentSize, this.currentSize);
};
smoke.prototype.update = function() {
    this.speed = this.trueSpeed * compensateFPS;
    this.y += cos(this.rot + 180) * this.speed;
    this.x -= sin(this.rot + 180) * this.speed;
    this.time -= compensateFPS;
    this.currentSize += ((this.size - this.currentSize) / 10) * compensateFPS;
    if (this.speed > 0.02 * compensateFPS) {
        this.speed += -this.speed / 1.01;
        this.trueSpeed += (-this.trueSpeed * compensateFPS) / 1.01;
    } else {
        this.speed = 0.02 * compensateFPS;
    }
    if (this.time < 10) {
        this.opacity += (-this.opacity / 10) * compensateFPS;
    }
};
//}
// (3) SMOKE CLOUDS {
var smokeCloud = function(x, y, type, other) {
    this.x = x;
    this.y = y;
    this.t2 = 0;
    this.spawned = false;
    this.smokes = [];
    this.other = other || [];
    this.type = type;
    for (var i = 0; i < this.other.length; i += 2) {
        var piece1 = this.other[i].toLowerCase();
        var piece2 = this.other[i + 1];
        if (piece1 === "t2") {
            this.t2 = piece2;
            this.type = grenades[this.t2];
        } else if (piece1 === "spawn") {
            this.spawned = true;
        } else if (piece1 === "smokes") {
            for (var j = 0; j < piece2.length; j++) {
                this.smokes.push(construct(smoke, copyArray2(piece2[j])));
            }
        }
    }
    this.range = this.type.range;
    this.stun = this.type.stun;
};
smokeCloud.prototype.spawn = function() {
    if (!this.spawned) {
        for (var i = 0; i < this.range / 10; i++) {
            this.smokes.push(construct(smoke, [this.x, this.y, this.range, random(0, 360), this.stun + random(240), this.range * (4 / 3)]));
        }
        this.spawned = true;
    }
};
smokeCloud.prototype.draw = function() {
    for (var i = this.smokes.length - 1; i >= 0; i--) {
        this.smokes[i].draw();
        this.smokes[i].update();
        if (this.smokes[i].time <= 0) {
            this.smokes.splice(i, 1);
        }
    }
    if (frameCount % 3 === 1) {
        for (var i = 0; i < allies.length; i++) {
            noScopeZone(allies[i], "Circle", [this.x, this.y, this.range]);
        }
        for (var i = 0; i < enemies.length; i++) {
            noScopeZone(enemies[i], "Circle", [this.x, this.y, this.range]);
        }
    }
};
//}
//} END "EXPLOSIONS"

// "TURRETS" {
var turret = function(x, y, rot, type, scope) {
    this.x = x;
    this.y = y;
    this.rot = rot || 0;
    this.t = type;
    this.type = guns[type];
    this.occupied = false;
    this.occupiedBy = "NONE";
    this.inMag = this.type.mag;
    this.scope = scope;
    this.summoned = [false, false];
};
turret.prototype.draw = function() {
    pushMatrix();
    translate(this.x, this.y);
    rotate(this.rot);
    noFill();
    stroke(255);
    ellipse(0, 0, 30, 30);
    stroke(255, 255, 0);
    ellipse(0, 0, 100, 100);
    popMatrix();
};
turret.prototype.occupy = function() {
    if (!this.occupied) {
        var closestAlly = [undefined, Infinity], closestEnemy = [undefined, Infinity];
        for (var i = 0; i < allies.length; i++) {
            var a = allies[i], b = false, c = sq(a.x - this.x) + sq(a.y - this.y);
            if (!a.dead && c < 2500) {
                if (i === 0) {
                    byConsole[0] = true;
                    consoleType = "Access turret";
                    if (pressed(commandKeys.use) && canPressT && !allies[0].reloading && usingConsole === "NOT") {
                        b = true;
                        canPressT = false;
                        usingConsole = this;
                    }
                } else {
                    b = true;
                }
            }
            if (b) {
                this.occupied = true;
                this.occupiedBy = allies[i];
                allies[i].onTurret = true;
                allies[i].whichTurret = this;
                allies[i].spool = "NONE";
            }
            if (!this.summoned[0] && i !== 0 && c < closestAlly[1] && seeTarget([this.x, this.y], [a.x, a.y])) {
                closestAlly = [i, c];
            }
        }
        for (var i = 0; i < enemies.length; i++) {
            var a = enemies[i], c = sq(a.x - this.x) + sq(a.y - this.y);
            if (!a.dead && c < 2500) {
                this.occupied = true;
                this.occupiedBy = a;
                a.onTurret = true;
                a.whichTurret = this;
                a.spool = "NONE";
            }
            if (!this.summoned[1] && c < closestEnemy[1] && seeTarget([this.x, this.y], [a.x, a.y])) {
                closestEnemy = [i, c];
            }
        }
        if (closestAlly[0] !== undefined) {
            var a = allies[closestAlly[0]];
            a.stage = "Move to Turret";
            a.moveLoc = [this.x, this.y];
            this.summoned[0] = true;
            a.reloading = false;
            a.healing = false;
        }
        if (closestEnemy[0] !== undefined) {
            var a = enemies[closestEnemy[0]];
            a.stage = "Move to Turret";
            a.moveLoc = [this.x, this.y];
            this.summoned[1] = true;
            a.reloading = false;
            a.healing = false;
        }
    }
};
turret.prototype.update = function() {
    this.occupiedBy.x = this.x;
    this.occupiedBy.y = this.y;
    this.rot = this.occupiedBy.rot;
    this.occupiedBy.maxSpeed = 0;
    this.inMag = this.occupiedBy.inMag;
};
turret.prototype.leave = function(obj, a) {
    if (this.occupiedBy === obj && obj.currentWeapon === 2 && (((!obj.NPC && canPressT && pressed(commandKeys.use) && !obj.reloading) || (obj.NPC && obj.warned && !obj.targetVisible && obj.zoom > obj.scope * 0.95 && obj.positionInSquad !== "Bruiser")) || a || obj.dead)) {
        this.occupied = false;
        this.occupiedBy = "NONE";
        obj.onTurret = false;
        obj.whichTurret = "NONE";
        obj.switchWeapon();
        return true;
    } else {
        return false;
    }
};
//} END "TURRETS"

// "ENVIRONMENT" {
// (1) "WEATHER" {
var weather = function(t, x, y, r, s, v) {
    this.type = t.split(" ");
    this.x = x;
    this.y = y;
    this.r = r;
    this.s = s;
    this.v = v;
    this.t = 0;
    this.imgs = [];
    this.img = "";
    if (this.type[0] === "snow") {
        var a = ["snow1","snow2","snow3","snow4","snow5"];
        this.img = [images[a[0]],images[a[1]],images[a[2]],images[a[3]],images[a[4]]];
    } else if (this.type[0] === "rain") {
        var a = ["rain1","rain2","rain3","rain4","rain5"];
        this.img = [images[a[0]],images[a[1]],images[a[2]],images[a[3]],images[a[4]]];
    }
    for (var i = -this.s[0] / 2; i < this.s[0] / 2; i += 400) {
        for (var j = -this.s[1] / 2; j < this.s[1] / 2; j += 400) {
            for (var k = 0; k < this.type[1]; k++) {
                this.imgs.push([this.img[floor(random(this.img.length))], i, j]);
            }
        }
    }
};
weather.prototype.draw = function() {
    pushMatrix();
    translate(this.x, this.y);
    rotate(this.r);
    this.t += this.v * compensateFPS;
    for (var i = 0; i < this.imgs.length; i++) {
        image(this.imgs[i][0], this.imgs[i][1], absValue(this.imgs[i][2] + this.t, this.s[1]) - this.s[1] / 2);
    }
    popMatrix();
};
//}
// (2) "CLIFFS" {
var cliff = function(vertices, data) {
    this.vertices = vertices;
    this.vertices2 = [];
    this.data = data || [];
    this.m = 20;
    this.c = color(125);
    this.s = color(155);
    this.d = 10;
    this.s2 = 4;
    for (var i = 0; i < this.data.length; i++) {
        var a = this.data[i];
        if (a[0] === "m") {
            this.m = a[1];
        } else if (a[0] === "c") {
            this.c = a[1];
        } else if (a[0] === "s") {
            this.s = a[1];
        } else if (a[0] === "d") {
            this.d = a[1];
        } else if (a[0] === "s2") {
            this.s2 = a[1];
        }
    }
    for (var i = 0; i < this.vertices.length - 2; i += 2) {
        var a = dist(this.vertices[i], this.vertices[i + 1], this.vertices[i + 2], this.vertices[i + 3]), b = random(this.m / 2, this.m);
        this.vertices2.push([]);
        this.vertices2[i / 2].push(0, 0);
        for (var j = 0; j < a; j += random(this.d - 1, this.d + 1)) {
            b = constrain(b + random(-this.m / 2, this.m / 2), this.m / 3, this.m);
            this.vertices2[i / 2].push(j, b);
        }
        this.vertices2[i / 2].push(a, 0);
    }
};
cliff.prototype.draw = function() {
    fill(this.c);
    stroke(this.s);
    strokeWeight(this.s2);
    for (var i = 0; i < this.vertices.length - 2; i += 2) {
        pushMatrix();
        translate(this.vertices[i], this.vertices[i + 1]);
        rotate(atan2(this.vertices[i + 3] - this.vertices[i + 1], this.vertices[i + 2] - this.vertices[i]));
        beginShape();
        for (var j = 0; j < this.vertices2[i / 2].length; j += 2) {
            vertex(this.vertices2[i / 2][j], -this.vertices2[i / 2][j + 1]);
        }
        endShape();
        popMatrix();
    }
};
//}
// (3) "DEBRIS" {
debris = function(x, y, s, t) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.t = t;
    this.debriz = [];
    for (var i = 0; i < this.s / 5; i++) {
        this.debriz.push([this.x, this.y, 360 * 5 * i / this.s + random(-15, 15), random(1, 3), 0, 255]);
    }
};
debris.prototype.draw = function() {
    noStroke();
    for (var i = 0; i < this.debriz.length; i++) {
        fill(this.t, this.debriz[i][5]);
        this.debriz[i][4] = this.debriz[i][3] * compensateFPS;
        this.debriz[i][3] += -this.debriz[i][4] / 20;
        this.debriz[i][4] += -this.debriz[i][4] * compensateFPS / 20;
        this.debriz[i][0] += cos(this.debriz[i][2]) * this.debriz[i][3] * compensateFPS;
        this.debriz[i][1] += sin(this.debriz[i][2]) * this.debriz[i][3] * compensateFPS;
        ellipse(this.debriz[i][0], this.debriz[i][1], 3, 3);
        this.debriz[i][5] -= 25 * compensateFPS;
        if (this.debriz[i][5] <= 5) {
            this.debriz.remove(this.debriz[i]);
        }
    }
    if (this.debriz.length === 0) {
        debriz.remove(this);
    }
};
//}
//} END "ENVIRONMENT"

// "NPC/PLAYER" {
// (1) "WALKING ALGORITHM" {
var walkAlgorithm = function(obj, direction) {
    var max = obj.maxSpeed;
    var max2 = obj.maxSpeed / squareRoot2;
    var blocked1 = obj.blockedOff[absValue(direction - 2, 8)];
    var blocked2 = obj.blockedOff[absValue(direction - 1, 8)];
    var blocked3 = obj.blockedOff[absValue(direction, 8)];
    var blocked4 = obj.blockedOff[absValue(direction + 1, 8)];
    var blocked5 = obj.blockedOff[absValue(direction + 2, 8)];
    var dir = direction;
    var dir2 = "NONE";
    var Return = [max, max];
    var which = [0, 0];
    if (!blocked3) {
        if (!blocked2 && blocked4) {
            dir2 = absValue(dir - 1, 8);
        } else if (blocked2 && !blocked4) {
            dir2 = absValue(dir + 1, 8);
        } else if (!blocked2 && !blocked4) {
            dir2 = dir;
        } else {
            dir2 = dir;
        }
    } else {
        which[0] += blocked1 ? 1 : 0;
        which[0] += blocked2 ? 1.5 : 0;
        which[1] += blocked4 ? 1.5 : 0;
        which[1] += blocked5 ? 1 : 0;
        if (which[0] < which[1]) {
            if ((blocked1 && !blocked2) || (!blocked1 && !blocked2)) {
                dir2 = absValue(dir - 1, 8);
            } else if ((!blocked1 && blocked2)) {
                dir2 = absValue(dir - 2, 8);
            } else if (blocked1 && blocked2) {
                if ((!blocked4 && !blocked5) || (!blocked4 && blocked5)) {
                    dir2 = absValue(dir + 1, 8);
                } else if (blocked4 && !blocked5) {
                    dir2 = absValue(dir + 2, 8);
                } else {
                    dir2 = absValue(dir + 3, 8);
                }
            }
        } else if (which[0] > which[1]) {
            if ((!blocked4 && blocked5) || (!blocked4 && !blocked5)) {
                dir2 = absValue(dir + 1, 8);
            } else if ((blocked4 && !blocked5)) {
                dir2 = absValue(dir + 2, 8);
            } else if (blocked4 && blocked5) {
                if ((!blocked1 && !blocked2) || (blocked1 && !blocked2)) {
                    dir2 = absValue(dir - 1, 8);
                } else if (!blocked1 && blocked2) {
                    dir2 = absValue(dir - 2, 8);
                } else {
                    dir2 = absValue(dir - 3, 8);
                }
            }
        } else {
            if (obj.stage !== "Flee" && obj.stage !== "Flee 2" && obj.stage !== "Evade" && obj.stage !== "Evade 2" && sq(obj.x - obj.moveLoc[0]) + sq(obj.y - obj.moveLoc[1]) > 4) {
                obj.contingency = true;
            }
        }
    }
    switch (absValue(dir2, 8)) {
        case 0:
            Return = [max, 0, dir2];
        break;
        case 1:
            Return = [max2, max2, dir2];
        break;
        case 2:
            Return = [0, max, dir2];
        break;
        case 3:
            Return = [-max2, max2, dir2];
        break;
        case 4:
            Return = [-max, 0, dir2];
        break;
        case 5:
            Return = [-max2, -max2, dir2];
        break;
        case 6:
            Return = [0, -max, dir2];
        break;
        case 7:
            Return = [max2, -max2, dir2];
        break;
        default:
            Return = [0, 0, dir2];
        break;
    }
    return Return;
};
var findContingencyDirection = function(obj, dir) {
    var Return = [0, 0];
    if (!obj.blockedOff[absValue(dir - 1, 8)]) {
        Return[0] = absValue(dir - 1, 8);
    } else if (!obj.blockedOff[absValue(dir - 2, 8)]) {
        Return[0] = absValue(dir - 2, 8);
    } else if (!obj.blockedOff[absValue(dir - 3, 8)]) {
        Return[0] = absValue(dir - 3, 8);
    } else if (!obj.blockedOff[absValue(dir - 4, 8)]) {
        Return[0] = absValue(dir - 4, 8);
    }
    if (!obj.blockedOff[absValue(dir + 1, 8)]) {
        Return[1] = absValue(dir + 1, 8);
    } else if (!obj.blockedOff[absValue(dir + 2, 8)]) {
        Return[1] = absValue(dir + 2, 8);
    } else if (!obj.blockedOff[absValue(dir + 3, 8)]) {
        Return[1] = absValue(dir + 3, 8);
    } else if (!obj.blockedOff[absValue(dir + 4, 8)]) {
        Return[1] = absValue(dir + 4, 8);
    }
    return Return;
};
var endContingency = function(obj, direction) {
    var blocked = obj.blockedOff[direction];
    if (blocked) {
        return true;
    } else {
        return false;
    }
};
seeTarget = function(obj, coordinates, doorsBlock, addOn) {
    var x = coordinates[0];
    var y = coordinates[1];
    var X = obj[0];
    var Y = obj[1];
    var Return = true;
    var add = addOn || 0;
    for (var i = 0; i < walls.length; i++) {
        var collision;
        if (walls[i].type[1] !== "Invisible" && ((walls[i].opaque && (!walls[i].partOfDoor || doorsBlock)) || (!walls[i].barrier && walls[i].partOfDoor && !walls[i].opaque) || walls[i].type[1] === "Visible")) {
            if (walls[i].type[0] === "Rectangle") {
                collision = rectSegment([walls[i].x, walls[i].y, walls[i].width + add, walls[i].height + add], [X, Y, x, y], false);
            } else {
                collision = circleLine([walls[i].x, walls[i].y, walls[i].width + add], [X, Y, x, y], false);
            }
            if (collision[0][0] !== "NO" || collision[1][0] !== "NO") {
                i = walls.length;
                Return = false;
            }
        }
    }
    return Return;
};
var endMovement = function(obj) {
    var direction = obj.targetDir;
    var blocked1 = obj.blockedOff[absValue(direction - 2, 8)];
    var blocked2 = obj.blockedOff[absValue(direction - 1, 8)];
    var blocked3 = obj.blockedOff[absValue(direction, 8)];
    var blocked4 = obj.blockedOff[absValue(direction + 1, 8)];
    var blocked5 = obj.blockedOff[absValue(direction + 2, 8)];
    var x = obj.x, y = obj.y, X = obj.targetLoc[0], Y = obj.targetLoc[1], close = (obj.maxSpeed * 12) + (obj.width / 2);
    close = obj.maxSpeed * 2;
    if (x >= X - close && x <= X + close && y >= Y - close && y <= Y + close && (blocked1 || blocked2 || blocked3 || blocked4 || blocked5)) {
        return true;
    } else {
        return false;
    }
};
var findFleeingDirection = function(obj, direction) {
    if (!obj.blockedOff[direction]) {
        return direction;
    } else if (!obj.blockedOff[absValue(direction - 1, 8)]) {
        return absValue(direction - 1, 8);
    } else if (!obj.blockedOff[absValue(direction + 1, 8)]) {
        return absValue(direction + 1, 8);
    } else if (!obj.blockedOff[absValue(direction - 2, 8)]) {
        return absValue(direction - 2, 8);
    } else if (!obj.blockedOff[absValue(direction + 2, 8)]) {
        return absValue(direction + 2, 8);
    } else if (!obj.blockedOff[absValue(direction - 3, 8)]) {
        obj.stage = "Last-Ditch";
        return absValue(direction - 3, 8);
    } else if (!obj.blockedOff[absValue(direction + 3, 8)]) {
        obj.stage = "Last-Ditch";
        return absValue(direction + 3, 8);
    } else if (!obj.blockedOff[absValue(direction - 4, 8)]) {
        obj.stage = "Last-Ditch";
        return absValue(direction - 4, 8);
    }
};
var findDirection = function(obj1, obj2, closeInRange) {
    var x = obj1[0], y = obj1[1];
    var x2 = obj2[0], y2 = obj2[1];
    if (x2 <= x - closeInRange && y2 >= y - closeInRange && y2 <= y + closeInRange) {
        return 0;
    } else if (x2 <= x - closeInRange && y2 <= y - closeInRange) {
        return 1;
    } else if (x2 >= x - closeInRange && x2 <= x + closeInRange && y2 <= y - closeInRange) {
        return 2;
    } else if (x2 >= x + closeInRange && y2 <= y - closeInRange) {
        return 3;
    } else if (x2 >= x + closeInRange && y2 >= y - closeInRange && y2 <= y + closeInRange) {
        return 4;
    } else if (x2 >= x + closeInRange && y2 >= y + closeInRange) {
        return 5;
    } else if (x2 >= x - closeInRange && x2 <= x + closeInRange && y2 >= y + closeInRange) {
        return 6;
    } else if (x2 <= x - closeInRange && y2 >= y + closeInRange) {
        return 7;
    } else {
        if (closeInRange > 0.01) {
            return findDirection(obj1, obj2, 0.01);
        } else {
            return 0;
        }
    }
};
var dodge = function(obj, closeInRange) {
    var x = obj.x, y = obj.y;
    var x2 = obj.targetLoc[0], y2 = obj.targetLoc[1];
    var simple = obj.maxSpeed / squareRoot2;
    if ((x2 <= x - closeInRange && y2 >= y - closeInRange && y2 <= y + closeInRange) || (x2 >= x + closeInRange && y2 >= y - closeInRange && y2 <= y + closeInRange)) {
        return [[0, obj.maxSpeed], [0, -obj.maxSpeed]];
    }
    else if ((x2 <= x - closeInRange && y2 <= y - closeInRange) || (x2 >= x + closeInRange && y2 >= y + closeInRange)) {
        return [[-simple, simple], [simple, -simple]];
    }
    else if ((x2 >= x - closeInRange && x2 <= x + closeInRange && y2 <= y - closeInRange) || (x2 >= x - closeInRange && x2 <= x + closeInRange && y2 >= y + closeInRange)) {
        return [[-obj.maxSpeed, 0], [obj.maxSpeed, 0]];
    }
    else if ((x2 >= x + closeInRange && y2 <= y - closeInRange) || (x2 <= x - closeInRange && y2 >= y + closeInRange)) {
        return [[-simple, -simple], [simple, simple]];
    }
};
var findCover = function(obj) {
    var x = obj.target.x, y = obj.target.y, comp = 10 + (obj.width / 2);
    for (var i = 0; i < walls.length; i++) {
        if(inBox(walls[i].x, walls[i].y, x, y, obj.sight * obj.zoom, obj.sight * obj.zoom)) {
            if (walls[i].type[0] === "Rectangle") {
                if (x <= walls[i].x - (walls[i].width / 2) && y > walls[i].y - (walls[i].height / 2) && y <= walls[i].y + (walls[i].height / 2)) {
                    obj.moveLoc = [walls[i].x + (walls[i].width / 2) + comp, walls[i].y + (walls[i].width / 2) + comp];
                } else if (x < walls[i].x - (walls[i].width / 2) && y <= walls[i].y - (walls[i].height / 2)) {
                    obj.moveLoc = [walls[i].x + (walls[i].width / 2) + comp, walls[i].y + (walls[i].width / 2) + comp];
                } else if (y <= walls[i].y - (walls[i].height / 2) && x >= walls[i].x - (walls[i].width / 2) && x < walls[i].x + (walls[i].width / 2)) {
                    obj.moveLoc = [walls[i].x + (walls[i].width / 2) + comp, walls[i].y + (walls[i].width / 2) + comp];
                } else if (x >= walls[i].x + (walls[i].width / 2) && y < walls[i].y - (walls[i].height / 2)) {
                    obj.moveLoc = [walls[i].x - (walls[i].width / 2) - comp, walls[i].y + (walls[i].width / 2) + comp];
                } else if (x >= walls[i].x + (walls[i].width / 2) && y >= walls[i].y - (walls[i].height / 2) && y < walls[i].y + (walls[i].height / 2)) {
                    obj.moveLoc = [walls[i].x - (walls[i].width / 2) - comp, walls[i].y - (walls[i].width / 2) - comp];
                } else if (x > walls[i].x - (walls[i].width / 2) && y >= walls[i].y - (walls[i].height / 2)) {
                    obj.moveLoc = [walls[i].x - (walls[i].width / 2) - comp, walls[i].y - (walls[i].width / 2) - comp];
                } else if (y >= walls[i].y + (walls[i].height / 2) && x > walls[i].x - (walls[i].width / 2) && x <= walls[i].x + (walls[i].width / 2)) {
                    obj.moveLoc = [walls[i].x - (walls[i].width / 2) - comp, walls[i].y - (walls[i].width / 2) - comp];
                } else if (x <= walls[i].x - (walls[i].width / 2) && y > walls[i].y + (walls[i].height / 2)) {
                    obj.moveLoc = [walls[i].x + (walls[i].width / 2) + comp, walls[i].y - (walls[i].width / 2) - comp];
                }
            }
        }
    }
};
var moveToward = function(obj, theDistance, outerEdge, innerEdge, moveOut) {
    var theStage = obj.stage, shouldMove = false, moveLoc = obj.moveLoc;
    if (theDistance >= outerEdge || (theDistance >= innerEdge && obj.stage !== "Wait")) {
        theStage = "Move In";
    }
    if (theDistance <= innerEdge && theDistance > sq(moveOut)) {
        theStage = "Wait";
    }
    if (theDistance <= sq(moveOut)) {
        theStage = "Retreat";
    }
    if (theStage === "Move In") {
        shouldMove = true;
    }
    if (theStage === "Retreat") {
        shouldMove = true;
        var theRot = atan2(obj.target.y - obj.y, obj.target.x - obj.x);
        moveLoc = [obj.x - (moveOut * sin(-theRot + 90)), obj.y - (moveOut * cos(-theRot + 90))];
    }
    return [theStage, shouldMove, moveLoc];
};
var checkAround = function(c, dist) {
    switch (c % 8) {
        case 0:
            return [dist, 0];
        case 1:
            return [dist, dist];
        case 2:
            return [0, dist];
        case 3:
            return [-dist, dist];
        case 4:
            return [-dist, 0];
        case 5:
            return [-dist, -dist];
        case 6:
            return [0, -dist];
        case 7:
            return [dist, -dist];
    }
};
//}
// (2) "TARGETING" {
var getTarget = function(obj) {
    var side = (obj.side === "enemy") ? allies : enemies;
    var visible = [];
    for (var i = 0; i < side.length; i++) {
        if (side[i].health > 0 && side[i].stealthTime <= 0 && !side[i].dead && !side[i].inSmoke && inBox(side[i].x, side[i].y, obj.x, obj.y, (obj.sight * obj.zoom) + side[i].width, (obj.sight * obj.zoom) + side[i].width) && seeTarget([obj.x, obj.y], [side[i].x, side[i].y], true)) {
            visible.push([i, 0]);
        }
    }
    if (visible.length > 0) {
        obj.targetVisible = true;
        var currentClosest = 0, currentClosest2 = 0;
        if (visible.length > 1) {
            for (var i = 0; i < visible.length; i++) {
                var a = visible[i][0];
                var b = side[a];
                if (i === 0) {
                    currentClosest = sq(b.x - obj.x) + sq(b.y - obj.y);
                } else {
                    var distance = sq(b.x - obj.x) + sq(b.y - obj.y);
                    if (distance < currentClosest) {
                        currentClosest = distance;
                        currentClosest2 = i;
                    }
                }
            }
        }
        var a = side[visible[currentClosest2][0]];
        obj.targetLoc = [a.x, a.y];
        if (obj.stage !== "Flee" && obj.stage !== "Flee 2" && obj.stage !== "Evade" && obj.stage !== "Evade 2" && obj.stage !== "Attack 3" && (obj.whichSquad.commanderOrders !== "Recall" || obj.skillAggression > 8)) {
            obj.moveLoc = obj.targetLoc;
        }
        if ((obj.stage === "Flee" || obj.stage === "Flee 2") && obj.skillAggression < 5) {
            obj.targetLoc = obj.moveLoc;
        }
        if (obj.target !== a) {
            obj.fledTimes = 0;
        }
        obj.target = a;
        obj.contingency = false;
        if (obj.warnTime < 0) {
            obj.warnTime = 0;
        }
        obj.warned = true;
    } else {
        obj.targetVisible = false;
    }
};
findDamage = function(obj) {
    if (obj.side === "ally") {
        for (var i = 0; i < enemies.length; i++) {
            var able = true;
            for (var k = 0; k < obj.meleeDamages.length; k++) {
                if (obj.meleeDamages[k][0] === "enemy" && obj.meleeDamages[k][1] === enemies[i]) {
                    able = false;
                }
            }
            if (able) {
                for (var j = 0; j < obj.damageWireFrame.length - 1; j++) {
                    var collide;
                    var a = obj.damageWireFrame;
                    collide = circleLine([enemies[i].x, enemies[i].y, enemies[i].width], [a[j][0], a[j][1], a[j + 1][0], a[j + 1][1]], false);
                    if (collide[0][0] !== "NO" || collide[1][0] !== "NO") {
                        obj.meleeDamages.push(["enemy", enemies[i]]);
                        enemies[i].health -= dealDamage(obj.meleeDamage, enemies[i]);
                        j = obj.damageWireFrame.length;
                    }
                }
            }
        }
    } else if (obj.side === "enemy") {
        for (var i = 0; i < allies.length; i++) {
            var able = true;
            for (var k = 0; k < obj.meleeDamages.length; k++) {
                if (obj.meleeDamages[k][0] === "ally" && obj.meleeDamages[k][1] === allies[i]) {
                    able = false;
                }
            }
            if (able) {
                for (var j = 0; j < obj.damageWireFrame.length - 1; j++) {
                    var collide;
                    var a = obj.damageWireFrame;
                    collide = circleLine([allies[i].x, allies[i].y, allies[i].width], [a[j][0], a[j][1], a[j + 1][0], a[j + 1][1]], false);
                    if (collide[0][0] !== "NO" || collide[1][0] !== "NO") {
                        obj.meleeDamages.push(["ally", allies[i]]);
                        if (i !== 0 || (i === 0 && !godMode)) {
                            allies[i].health -= dealDamage(obj.meleeDamage, allies[i]);
                        }
                        j = obj.damageWireFrame.length;
                    }
                }
            }
        }
    }
    if (obj === allies[0] && scene !== "cinematic") {
        for (var i = 0; i < walls.length; i++) {
            var able = true;
            for (var k = 0; k < obj.meleeDamages.length; k++) {
                if (obj.meleeDamages[k][0] === "wall" && obj.meleeDamages[k][1] === walls[i]) {
                    able = false;
                }
            }
            if (able && walls[i].health < Infinity) {
                var collided = false, a = obj.damageWireFrame;
                if (walls[i].type[0] === "Rectangle") {
                    for (var k = 0; k < obj.damageWireFrame.length - 1; k++) {
                        var b = rectSegment([walls[i].x, walls[i].y, walls[i].width, walls[i].height], [a[k][0], a[k][1], a[k + 1][0], a[k + 1][1]], true);
                        if (b[0][0] !== "NO" || b[1][0] !== "NO" || inBox(a[k][0], a[k][1], walls[i].x, walls[i].y, walls[i].width, walls[i].height)) {
                            obj.meleeDamages.push(["wall", walls[i]]);
                            walls[i].health -= obj.meleeDamage;
                            if (b[0][0] !== "NO") {
                                debriz.push(construct(debris, [b[0][0], b[0][1], 40, walls[i].color]));
                            }
                            if (b[0][0] !== "NO") {
                                debriz.push(construct(debris, [b[1][0], b[1][1], 40, walls[i].color]));
                            }
                            k = obj.damageWireFrame.length;
                        }
                    }
                } else if (walls[i].type[0] === "Circle") {
                    for (var k = 0; k < obj.damageWireFrame.length - 1; k++) {
                        var b = circleLine([walls[i].x, walls[i].y, walls[i].width], [a[k][0], a[k][1], a[k + 1][0], a[k + 1][1]], true);
                        if (b[0][0] !== "NO" || b[1][0] !== "NO" || sq(a[k][0] - walls[i].x) + sq(a[k][1] - walls[i].y) < sq(walls[i].width / 2)) {
                            obj.meleeDamages.push(["wall", walls[i]]);
                            if (b[0][0] !== "NO") {
                                debriz.push(construct(debris, [b[0][0], b[0][1], 40, walls[i].color]));
                            }
                            if (b[0][0] !== "NO") {
                                debriz.push(construct(debris, [b[1][0], b[1][1], 40, walls[i].color]));
                            }
                            walls[i].health -= obj.meleeDamage;
                            k = obj.damageWireFrame.length;
                        }
                    }
                }
            }
        }
    }
};
var crawler = function(x, y, rot, allNodes) {
    this.x = x;
    this.y = y;
    this.rot = rot;
    this.allNodes = allNodes;
};
var searchCharacters = function(side, num) {
    var arr = enemies;
    if (side === "ally") {
        arr = allies;
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].num === num) {
            return arr[i];
        }
    }
};
//}
// (3) "SQUADS" {
var squad = function(members) {
    this.members = members;
    this.commanderOrders = "NONE";
    this.commanderPosition = [];
    this.helpRequests = [];
    this.enemySightings = [];
    this.num = squads.length === 0 ? 0 : squads[squads.length - 1].num;
};
squad.prototype.assignPositions = function() {
    var highestRanking = 0, b = this.members[0];
    this.members[0].positionInSquad = "Commander";
    for (var i = 1; i < this.members.length; i++) {
        var a = this.members[i];
        this.members[i].positionInSquad = "";
        if (a.rank > this.members[highestRanking].rank) {
            this.members[highestRanking].positionInSquad = "nobody";
            this.members[i].positionInSquad = "Commander";
            highestRanking = i;
            b = this.members[i];
        }
    }
    for (var i = 0; i < this.members.length; i++) {
        var a = this.members[i];
        if (a.positionInSquad !== "Commander" && a.weapons[0] !== "NONE") {
            if (guns[a.weapons[0]].type === "Pistol" || guns[a.weapons[0]].type === "SMG" || guns[a.weapons[0]].type === "RPG" || guns[a.weapons[0]].type === "AR") {
                this.members[i].positionInSquad = "Suppressor";
            } else if (guns[a.weapons[0]].type === "LMG" || guns[a.weapons[0]].type === "Shotgun" || guns[a.weapons[0]].type === "Grenade Launcher" || guns[a.weapons[0]].type === "Flamethrower") {
                this.members[i].positionInSquad = "Gunner";
            } else if (guns[a.weapons[0]].type === "Sniper Rifle" || guns[a.weapons[0]].type === "Marksman Rifle") {
                this.members[i].positionInSquad = "Sniper";
            }
        } else if (a.positionInSquad !== "Commander" && a.weapons[0] === "NONE") {
            this.members[i].positionInSquad = "Bruiser";
        }
    }
};
squad.prototype.merge = function(mergingTo) {
    this.members = this.members.concat(mergingTo.members);
    squads.splice(findInIndex(squads, mergingTo), 1);
    for (var i = 0; i < this.members.length; i++) {
        var a = this.members[i];
        this.members[i].whichSquad = this;
        for (var j = 0; j < this.members.length; j++) {
            var b = this.members[j];
            if (i !== j && a === b) {
                this.members.splice(j, 1);
                j = this.members.length;
                i--;
            }
        }
    }
    this.assignPositions();
};
squad.prototype.die = function() {
    for (var i = 0; i < this.members.length; i++) {
        this.members[i].whichSquad = "NONE";
    }
    squads.splice(findInIndex(squads, this), 1);
};
var searchSquads = function(num) {
    for (var i = 0; i < squads.length; i++) {
        if (squads[i].num === num) {
            return squads[i];
        }
    }
};
//}
// (4) "LEVELS" {
levelEnd = function(func, tele) {
    this.func = func;
    transition[0] = true;
    this.tele = tele || false;
};
levelEnd.prototype.work = function() {
    this.func();
    if (!this.tele) {
        if (lastScene !== "cinematic") {
            playerData = allies[0].returnData();
        }
        grenadeButtonTime = 0;
        medButtonTime = 0;
        makeSave();
        selectedSaveCode = codes.length - 1;
        saveCode = codes[selectedSaveCode];
        saveMadeMessage("Save Created: [" + codes[selectedSaveCode].name + "]");

    }
    levelEnds.splice(findInIndex(levelEnds, this), 1);
};
//}
// (5) "FREE PLAY" {
var spawnCharacter = function(side) {
    var optimalSpawn, oppTeam = enemies, maxDist = 0;
    if (side === "enemy") {
        oppTeam = allies;
    }
    for (var i = 0; i < spawnPoints.length; i++) {
        for (var j = 0; j < oppTeam.length; j++) {
            var a = sq(oppTeam[j].x - spawnPoints[i][0]) + sq(oppTeam[j].y - spawnPoints[i][1]);
            if (a > maxDist) {
                optimalSpawn = i;
                maxDist = a;
            }
        }
    }
    return optimalSpawn;
};
var createCharacters = function() {
    //println(maxEnemies[maxEnemies[maxEnemies.length - 1]]);
    if (enemies.length < maxEnemies[maxEnemies[maxEnemies.length - 1]] && respawnRate[0] % 600 >= 300) {
        var a = spawnPoints[spawnCharacter("enemy")];
        enemies.push(construct(character, [a[0], a[1], 0, true, "Red_Team", 0, ["wep1", gameVars.commonGuns[round(random(gameVars.commonGuns.length - 1))]]]));
        respawnRate[0] = 0;
    }
    if (allies.length < maxTeammates[maxTeammates[maxTeammates.length - 1]] - 1 && respawnRate[1] % 600 >= 300) {
        var a = spawnPoints[spawnCharacter("ally")];
        allies.push(construct(character, [a[0], a[1], 0, true, "Blue_Team", 0, ["wep1", gameVars.commonGuns[round(random(gameVars.commonGuns.length - 1))]]]));
        respawnRate[1] = 0;
    }
};
var freePlayPlayer = function(obj) {
    var a = spawnPoints[round(random(spawnPoints.length - 1))];
    allies.unshift(construct(character, [a[0], a[1], 0, false, "Player", 0, ["wep1", gameVars.commonGuns[round(random(gameVars.commonGuns.length - 1))]]]));
};
var checkMoveOpps = function(obj) {
    var opps = [];
    for (var i = 0; i < spawnPoints.length; i++) {
        var works = true;
        for (var j = 0; j < obj.movePath.length; j++) {
            if (i === obj.movePath[j]) {
                works = false;
            }
        }
        if (works && seeTarget([obj.x, obj.y], [spawnPoints[i][0], spawnPoints[i][1]], false)) {
            opps.push(i);
        }
    }
    //println("opps: " + opps);
    return opps;
};
var findMove = function(obj) {
    var opportunities = checkMoveOpps(obj);
    if (opportunities.length === 0) {
        obj.movePath.clear();
        opportunities = checkMoveOpps(obj);
    }
    var closest = 0, closestDist = Infinity;
    for (var i = 0; i < opportunities.length; i++) {
        var a = spawnPoints[opportunities[i]], b = sq(obj.x - a[0]) + sq(obj.y - a[1]);
        if (b < closestDist) {
            closest = i;
            closestDist = b;
        }
    }
    var decide = spawnPoints[opportunities[closest]];
    obj.moveLoc = [decide[0], decide[1]];
    obj.stage = "Move In";
    obj.warned = true;
    obj.movePath.push(opportunities[closest]);
    //println("chose: " + opportunities[closest] + " -- " + obj.moveLoc + " -- " + obj.x + "," + obj.y);
};
var runMove = function(obj) {
    if (inBox(obj.x, obj.y, obj.moveLoc[0], obj.moveLoc[1], 20, 20) || obj.moveLoc[0] === "NO") {
        if (obj.movePath.length >= 3) {
            obj.movePath.splice(0, 1);
        }
        findMove(obj);
    }
};
//}
// (6) "CAMPAIGN" {
character = function(x, y, rot, NPC, type, rank, other) {
    // "MAIN ATTRIBUTES" {
    this.x = x;
    this.y = y;
    this.rot = rot;
    this.NPC = NPC;
    this.type = npcTypes[type];
    this.printOutType = type;
    this.health = this.type[5];
    this.stim = 0;
    this.weapons = [this.type[1][0], this.type[1][1], this.type[1][2]];
    if (!this.NPC) {
        this.weapons = [saveCode.firstWeapon[0], saveCode.secondWeapon[0], saveCode.meleeWeapon];
    }
    this.armor = this.type[3];
    this.armorHealth = armor[this.armor].health;
    this.armorHelp = armor[this.armor].damage;
    this.rank = rank;
    this.other = other;
    this.skill = this.type[2];
    this.skillAim = this.skill[0];
    this.skillReaction = this.skill[1];
    this.skillEvasion = this.skill[2];
    this.skillAggression = this.skill[3];
    //} END "MAIN ATTRIBUTES"
    // "SECONDARY ATTRIBUTES" {
    this.stealthTime = 0;
    this.drawX = 200;
    this.drawY = 200;
    this.speed = 0;
    this.speed2 = 0;
    this.maxSpeed = this.type[6];
    this.maxSpeed2 = 1;
    this.graphic = this.type[7];
    this.currentWeapon = 0;
    if (this.weapons[0] === "NONE") {
        this.currentWeapon = 1;
        if (this.weapons[1] === "NONE") {
            this.currentWeapon = 2;
        }
    }
    if (this.currentWeapon < 2) {
        this.weapon = guns[this.weapons[this.currentWeapon]];
    } else {
        this.weapon = melee[this.weapons[2]];
    }
    this.side = this.type[0];
    if (this.side === "ally") {
        if (allies.length > 0) {
            this.num = allies[allies.length - 1].num + 1;
        } else {
            this.num = 0;
        }
    } else if (this.side === "enemy") {
        if (enemies.length > 0) {
            this.num = enemies[enemies.length - 1].num + 1;
        } else {
            this.num = 0;
        }
    }
    this.dead = false;
    this.deadTime = 0;
    this.maxHealth = this.health;
    this.zoom = 1;
    this.scope = 1;
    this.gettingShot = 0;
    this.GSmax = 50;
    this.pushMomentum = [];
    this.damageReduction = 1;
    this.onlyReduce = true;
    this.healing = false;
    this.hearShotsFrom = [];
    this.stunTime = 0;
    this.gunStun = 0;
    this.onTurret = false;
    this.whichTurret = "NONE";
    //} END "SECONDARY ATTRIBUTES"
    // "MELEE" {
    this.meleeWeapon = melee[this.weapons[2]] || melee[0];
    this.meleeDamage = 1;
    this.attacking = false;
    this.canAttack = true;
    this.damageWireFrame = [];
    this.meleeShield = false;
    this.meleeAttack = 0;
    this.hand1 = [0, 0, 0];
    this.hand2 = [0, 0, 0];
    this.returnHand1 = [0, 0];
    this.returnHand2 = [0, 0];
    this.meleePull = 0;
    this.alreadyAttacked = [false, false, false];
    this.meleeHandRelative = [0, 0];
    this.meleeDamages = [];
    this.meleeCanShield = true;
    this.storeWeapon = "NONE";
    this.storePt = [0, 0];
    this.rotateImage = false;
    //} END "MELEE"
    // "GUN ATTRIBUTES" {
    this.mag = 30;
    this.fireDelay = 5;
    this.veer = 1;
    this.maxRecoil = 1;
    this.bulletVelocity = 50;
    this.bulletDamage = 20;
    this.bulletExplode = 0;
    this.reload = 60;
    this.reloadType = "Mag-Fed";
    this.weaponSpecial = [];
    this.fireMode = "Full-Auto";
    this.gunCarrying = "Shoulder";
    this.weight = 1;
    this.recoil = 0.1;
    this.dropGun = true;
    this.gun1 = "NONE";
    this.gun2 = "NONE";
    //} END "GUN ATTRIBUTES"
    // "FIRING" {
    this.currentFire = "N";
    this.inMag = "N";
    this.reloading = false;
    this.shooting = false;
    this.currentReload = 0;
    this.currentRecoil = this.veer;
    this.canFire = true;
    this.firingBurst = false;
    this.burstsLeft = "NONE";
    this.muzzleFlashTime = -1;
    this.gunShowFlash = true;
    this.spool = "NONE";
    this.nextRecoil = this.veer;
    this.gunX = 0;
    this.gunY = 0;
    this.distToGun = 0;
    this.angleToGun = 0;
    this.gunPlayerAngle = 0;
    this.gunPlayerDistance = 0;
    this.muzzle = 0;
    this.burst = 3;
    this.Gun2 = [0, 0, 0];
    this.angleToGun2 = 0;
    this.autoReloading = false;
    this.accuracyMultiplier = 1;
    this.spoolMax = "NONE";
    this.drawnOnTop = false;
    this.animationDelay = 0;
    //} END "FIRING"
    // "RENDERING" {
    this.gunRotation = 0;
    this.running = false;
    this.runningTime = 0;
    this.slowTime = 0;
    this.wounds = [];
    this.gunDrawRecoil = 0;
    this.gunDrawRecoilNext = 0;
    this.grenadePull = 0;
    this.grenadePulled = false;
    //} END "RENDERING"
    // "OTHER" {
    this.width = this.type[4];
    this.initialized = false;
    this.grenadeSwitch = true;
    this.canScope = true;
    this.seeAll = false;
    this.seeHealth = false;
    //} END "OTHER"
    // "PLAYER-ONLY" {
    this.backpack = saveCode.backpack;
    this.allGrenades = [];
    this.bombSelect = 0;
    this.allMeds = [];
    this.medSelect = 0;
    this.usingMed = 0;
    this.inventory = copyArray2(saveCode.inventory);
    //} END "PLAYER-ONLY"
    // "NPC-ONLY" {
    this.currentDodgeTime = 0;
    this.targetDir = 0;
    this.circleDirection = 2;
    this.circleTime = 0;
    this.target = "none";
    this.warnTime = 100 / this.skillReaction;
    this.fullWarn = this.warnTime;
    this.warned = false;
    this.targetLoc = ["none", "none"];
    this.stage = "Attack";
    this.blockedOff = [false, false, false, false, false, false, false, false];
    this.stunType = "Normal";
    this.contingency = false;
    this.moveLoc = ["NO", "NO"];
    this.positionInSquad = "Commander";
    this.whichSquad = "NONE";
    this.targetVisible = false;
    this.crawlers = [];
    this.contingencyPathToFollow = "NONE";
    this.fledTimes = 0;
    this.timeAlive = 0;
    this.changeInterval = 60;
    this.messUp = [0, 0];
    this.messUp2 = [0, 0];
    this.moveRanges = [0, 0, 0];
    this.arrayIn = allies;
    this.sight = 400 + 10 * this.skillAim + 5 * this.skillReaction;
    //} END "NPC-ONLY"
    // "FREE PLAY" {
    this.movePath = [];
    //}
};
character.prototype.initialize = function() {
    var g1 = ["N", "N", "N", "NONE"], g2 = ["N", "N", "N", "NONE"];
    if (this.other !== undefined) {
        var other = this.other;
        for (var i = 0; i < other.length; i += 2) {
            var piece1 = other[i].toLowerCase();
            var piece2 = other[i + 1];
            if (piece1 === "health") {
                this.health = piece2;
            } else if (piece1 === "stim") {
                this.stim = piece2;
            } else if (piece1 === "wep1") {
                this.weapons[0] = piece2;
            } else if (piece1 === "wep2") {
                this.weapons[1] = piece2;
            } else if (piece1 === "wep3") {
                this.weapons[2] = piece2;
                this.meleeWeapon = melee[piece2];
            } else if (piece1 === "armor") {
                this.armor = piece2;
                this.armorHelp = armor[this.armor].damage;
            } else if (piece1 === "armorhealth") {
                this.armorHealth = piece2;
            } else if (piece1 === "s") {
                this.speed = piece2;
            } else if (piece1 === "s2") {
                this.speed2 = piece2;
            } else if (piece1 === "ms2") {
                this.maxSpeed2 = piece2;
            } else if (piece1 === "cw") {
                this.currentWeapon = piece2;
            } else if (piece1 === "dead") {
                this.dead = true;
            } else if (piece1 === "dTime") {
                this.deadTime = piece2;
            } else if (piece1 === "zoom") {
                this.zoom = piece2;
            } else if (piece1 === "scope") {
                this.scope = piece2;
            } else if (piece1 === "gettingshot") {
                this.gettingShot = piece2;
            } else if (piece1 === "pmomentum") {
                this.pushMomentum = copyArray2(piece2);
            } else if (piece1 === "dreduce") {
                this.damageReduction = piece2;
            } else if (piece1 === "ereduce") {
                this.energyReduction = piece2;
            } else if (piece1 === "eregain") {
                this.energyRegain = piece2;
            } else if (piece1 === "oreduce") {
                this.onlyReduce = piece2;
            } else if (piece1 === "heal") {
                this.healing = piece2;
            } else if (piece1 === "hsf") {
                this.hearShotsFrom = copyArray2(piece2);
            } else if (piece1 === "stun") {
                this.stunTime = piece2;
            } else if (piece1 === "epool") {
                this.energyPool = piece2;
            } else if (piece1 === "attacking") {
                this.attacking = piece2;
            } else if (piece1 === "meleeattack") {
                this.meleeAttack = piece2;
            } else if (piece1 === "h1") {
                this.hand1 = copyArray(piece2);
            } else if (piece1 === "h2") {
                this.hand2 = copyArray(piece2);
            } else if (piece1 === "mpull") {
                this.meleePull = piece2;
            } else if (piece1 === "aattacked") {
                this.alreadyAttacked = copyArray(piece2);
            } else if (piece1 === "mhr") {
                this.meleeHandRelative = copyArray(piece2);
            } else if (piece1 === "mdam") {
                for (var j = 0; j < piece2.length; j++) {
                    this.meleeDamages.push([piece2[j][0], searchCharacters(piece2[j][0], piece2[j][1])]);
                }
            } else if (piece1 === "canattack") {
                this.canAttack = piece2;
            } else if (piece1 === "creload") {
                this.currentReload = piece2;
            } else if (piece1 === "reloading") {
                this.reloading = piece2;
            } else if (piece1 === "cfire") {
                this.currentFire = piece2;
            } else if (piece1 === "inmag") {
                this.inMag = piece2;
            } else if (piece1 === "crecoil") {
                this.currentRecoil = piece2;
            } else if (piece1 === "nrecoil") {
                this.nextRecoil = piece2;
            } else if (piece1 === "shooting") {
                this.shooting = true;
            } else if (piece1 === "canfire") {
                this.canFire = false;
            } else if (piece1 === "fburst") {
                this.firingBurst = true;
            } else if (piece1 === "bleft") {
                this.burstsLeft = piece2;
            } else if (piece1 === "mft") {
                this.muzzleFlashTime = piece2;
            } else if (piece1 === "spool") {
                this.spool = piece2;
            } else if (piece1 === "amultiply") {
                this.accuracyMultiplier = piece2;
            } else if (piece1 === "grot") {
                this.gunRotation = piece2;
            } else if (piece1 === "run") {
                this.running = true;
            } else if (piece1 === "rtime") {
                this.runningTime = piece2;
            } else if (piece1 === "sTime") {
                this.slowTime = piece2;
            } else if (piece1 === "wounds") {
                this.wounds = copyArray(piece2);
            } else if (piece1 === "gdr") {
                this.gunDrawRecoil = piece2;
            } else if (piece1 === "gdrn") {
                this.gunDrawRecoilNext = piece2;
            } else if (piece1 === "gpull") {
                this.grenadePull = piece2;
            } else if (piece1 === "gpulled") {
                this.grenadePulled = true;
            } else if (piece1 === "gswitch") {
                this.grenadeSwitch = false;
            } else if (piece1 === "cscope") {
                this.canScope = false;
            } else if (piece1 === "sall") {
                this.seeAll = true;
            } else if (piece1 === "shealth") {
                this.seeHealth = true;
            } else if (piece1 === "boomies") {
                this.allGrenades = copyArray2(piece2);
            } else if (piece1 === "bselect") {
                this.bombSelect = piece2;
            } else if (piece1 === "meds") {
                this.allMeds = copyArray2(piece2);
            } else if (piece1 === "mselect") {
                this.medSelect = piece2;
            } else if (piece1 === "umed") {
                this.usingMed = piece2;
            } else if (piece1 === "cdt") {
                this.currentDodgeTime = piece2;
            } else if (piece1 === "tdir") {
                this.targetDir = piece2;
            } else if (piece1 === "ctime") {
                this.circleTime = piece2;
            } else if (piece1 === "target") {
                this.target = searchCharacters(this.side === "ally" ? "enemy" : "ally", piece2);
            } else if (piece1 === "wtime") {
                this.warnTime = piece2;
            } else if (piece1 === "warned") {
                this.warned = true;
            } else if (piece1 === "stage") {
                this.stage = piece2;
            } else if (piece1 === "blocked") {
                this.blockedOff = copyArray(piece2);
            } else if (piece1 === "stype") {
                this.stunType = piece2;
            } else if (piece1 === "stime") {
                this.stealthTime = piece2;
            } else if (piece1 === "contingency") {
                this.contingency = true;
            } else if (piece1 === "crawlers") {
                for (var j = 0; j < piece2.length; j++) {
                    this.crawlers.push(construct(crawler, copyArray2(piece2)));
                }
            } else if (piece1 === "cptf") {
                this.contingencyPathToFollow = copyArray2(piece2);
            } else if (piece1 === "tloc") {
                this.targetLoc = copyArray(piece2);
            } else if (piece1 === "mloc") {
                this.moveLoc = copyArray(piece2);
            } else if (piece1 === "pis") {
                this.positionInSquad = piece2;
            } else if (piece1 === "wsquad") {
                this.whichSquad = searchSquads(piece2);
            } else if (piece1 === "tvisible") {
                this.targetVisible = true;
            } else if (piece1 === "ftimes") {
                this.fledTimes = piece2;
            } else if (piece1 === "talive") {
                this.timeAlive = piece2;
            } else if (piece1 === "cinterval") {
                this.changeInterval = piece2;
            } else if (piece1 === "mup") {
                this.messUp = copyArray(piece2);
            } else if (piece1 === "mup2") {
                this.messUp2 = copyArray(piece2);
            } else if (piece1 === "mranges") {
                this.moveRanges = copyArray(piece2);
            } else if (piece1 === "g1m") {
                g1[0] = piece2;
            } else if (piece1 === "g1r") {
                g1[1] = piece2;
            } else if (piece1 === "g1f") {
                g1[2] = piece2;
            } else if (piece1 === "g1b") {
                g1[3] = piece2;
            } else if (piece1 === "g2m") {
                g2[0] = piece2;
            } else if (piece1 === "g2r") {
                g2[1] = piece2;
            } else if (piece1 === "g2f") {
                g2[2] = piece2;
            } else if (piece1 === "g2b") {
                g2[3] = piece2;
            }
        }
    }
    var weapon = guns[this.weapons[0]] || "NONE";
    if (this.weapons[0] === "NONE" || this.weapons[0] === undefined) {
        weapon = "NONE";
    }
    if (weapon !== "NONE") {
        this.gun1 = {
            number: weapon,
            name: weapon.name,
            description: weapon.description,
            ammo: weapon.ammo,
            fireMode: weapon.firingMode,
            holdingType: weapon.holdingType,
            mag: weapon.mag,
            fireDelay: weapon.fireSpeed,
            veer: weapon.accuracy,
            recoil: weapon.recoil, 
            maxRecoil: weapon.maxRecoil,
            noise: weapon.noise,
            scope: 1,
            scopeAccuracy: 1,
            bulletVelocity: weapon.bullet.velocity,
            bulletDamage: weapon.bullet.damage,
            bulletExplode: weapon.bullet.explosive * 100,
            spawn: weapon.bullet.spawn,
            reload: weapon.reload,
            allAttachments: weapon.attachments,
            attachments: {
                muzzle: "EMPTY",
                grip: "EMPTY",
                scope: "EMPTY",
                mag: "EMPTY",
                stock: "EMPTY",
            },
            burst: 3,
            autoReload: false,
            inMag: (g1[0] === "N" ? weapon.mag : g1[0]),
            currentRecoil: (g1[1] === "N" ? weapon.accuracy : g1[1]),
            currentFire: (g1[2] === "N" ? weapon.fireSpeed : g1[2]),
            burstsLeft: g1[3],
        };
    } else {
        this.gun1 = "NONE";
    }
    weapon = guns[this.weapons[1]] || "NONE";
    if (this.weapons[1] === "NONE" || this.weapons[1] === undefined) {
        weapon = "NONE";
    }
    if (weapon !== "NONE") {
        this.gun2 = {
            number: weapon,
            name: weapon.name,
            description: weapon.description,
            ammo: weapon.ammo,
            fireMode: weapon.firingMode,
            holdingType: weapon.holdingType,
            mag: weapon.mag,
            fireDelay: weapon.fireSpeed,
            veer: weapon.accuracy,
            recoil: weapon.recoil,    
            maxRecoil: weapon.maxRecoil,
            noise: weapon.noise,
            scope: 1,
            scopeAccuracy: 1,
            bulletVelocity: weapon.bullet.velocity,
            bulletDamage: weapon.bullet.damage,
            bulletExplode: weapon.bullet.explosive * 100,
            spawn: weapon.bullet.spawn,
            reload: weapon.reload,
            allAttachments: weapon.attachments,
            attachments: {
                muzzle: "EMPTY",
                grip: "EMPTY",
                scope: "EMPTY",
                mag: "EMPTY",
                stock: "EMPTY",
            },
            burst: 3,
            autoReload: false,
            inMag: (g2[0] === "N" ? weapon.mag : g2[0]),
            currentRecoil: (g2[1] === "N" ? weapon.accuracy : g2[1]),
            currentFire: (g2[2] === "N" ? weapon.fireSpeed : g2[2]),
            burstsLeft: g2[3],
        };
    } else {
        this.gun2 = "NONE";
    }
    if (this === allies[0] && scene !== "cinematic") {
        if (this.gun1 !== "NONE") {
            var a = saveCode.firstWeapon;
            this.gun1.attachments.muzzle = a[1];
            this.gun1.attachments.grip = a[2];
            this.gun1.attachments.scope = a[3];
            this.gun1.attachments.mag = a[4];
            this.gun1.attachments.stock = a[5];
        }
        if (this.gun2 !== "NONE") {
            var a = saveCode.secondWeapon;
            this.gun2.attachments.muzzle = a[1];
            this.gun2.attachments.grip = a[2];
            this.gun2.attachments.scope = a[3];
            this.gun2.attachments.mag = a[4];
            this.gun2.attachments.stock = a[5];
        }
        this.backpack = saveCode.backpack;
    }
    if (this.side === "enemy") {
        this.arrayIn = enemies;
    }
    var muzzleAttach = false, gripAttach = false, scopeAttach = false, magAttach = false, stockAttach = false;
    if (this.gun1 !== "NONE") {
        for (var i = 0; i < this.gun1.allAttachments.length; i++) {
            var a = this.gun1.allAttachments[i];
            if (a.type[0] === "Muzzle") {
                muzzleAttach = true;
            } else if (a.type[0] === "Foregrip") {
                gripAttach = true;
            } else if (a.type[0] === "Scope") {
                scopeAttach = true;
            } else if (a.type[0] === "Magazine") {
                magAttach = true;
            } else if (a.type[0] === "Stock") {
                stockAttach = true;
            }
        }
        if (!muzzleAttach) {
            this.gun1.attachments.muzzle = "NONE";
        }
        if (!gripAttach) {
            this.gun1.attachments.grip = "NONE";
        }
        if (!scopeAttach) {
            this.gun1.attachments.scope = "NONE";
        }
        if (!magAttach) {
            this.gun1.attachments.mag = "NONE";
        }
        if (!stockAttach) {
            this.gun1.attachments.stock = "NONE";
        }
        this.readyAttachments(0);
    }
    if (this.gun2 !== "NONE") {
        muzzleAttach = false;
        gripAttach = false;
        scopeAttach = false;
        magAttach = false;
        stockAttach = false;
        for (var i = 0; i < this.gun2.allAttachments.length; i++) {
            var a = this.gun2.allAttachments[i];
            if (a.type[0] === "Muzzle") {
                muzzleAttach = true;
            } else if (a.type[0] === "Foregrip") {
                gripAttach = true;
            } else if (a.type[0] === "Scope") {
                scopeAttach = true;
            } else if (a.type[0] === "Magazine") {
                magAttach = true;
            } else if (a.type[0] === "Stock") {
                stockAttach = true;
            }
        }
        if (!muzzleAttach) {
            this.gun2.attachments.muzzle = "NONE";
        }
        if (!gripAttach) {
            this.gun2.attachments.grip = "NONE";
        }
        if (!scopeAttach) {
            this.gun2.attachments.scope = "NONE";
        }
        if (!magAttach) {
            this.gun2.attachments.mag = "NONE";
        }
        if (!stockAttach) {
            this.gun2.attachments.stock = "NONE";
        }
        this.readyAttachments(1);
    }
    if (this.NPC) {
        if (this.gun1 !== "NONE" || this.gun2 !== "NONE") {
            if (guns[this.weapons[0]].type === "Pistol" || guns[this.weapons[0]].type === "SMG" || guns[this.weapons[0]].type === "RPG" || guns[this.weapons[0]].type === "AR" || guns[this.weapons[0]].type === "Blaster") {
                this.positionInSquad = "Suppressor";
                this.moveRanges = [sq((175 - (this.skillAggression * 3.5)) * this.scope), sq(125 - (this.skillAggression * 2.5)), 50];
            } else if (guns[this.weapons[0]].type === "LMG" || guns[this.weapons[0]].type === "Shotgun" || guns[this.weapons[0]].type === "Grenade Launcher" || guns[this.weapons[0]].type === "Flamethrower") {
                this.positionInSquad = "Gunner";
                this.moveRanges = [sq((150 - (this.skillAggression * 2.5)) * this.scope), sq(100 - (this.skillAggression * 2.5)), 50];
            } else if (guns[this.weapons[0]].type === "Sniper Rifle" || guns[this.weapons[0]].type === "Marksman Rifle") {
                this.positionInSquad = "Sniper";
                this.moveRanges = [sq((190 - (this.skillAggression * 4)) * this.scope), sq((175 - (this.skillAggression * 2.5)) * this.scope), (100 - (this.skillAggression * 2.5)) * this.scope];
            }
        } else {
            this.positionInSquad = "Bruiser";
            this.moveRanges = [sq(50), sq(this.width / 2 + 10), 10];
        }
    }
};
character.prototype.bombInitialize = function() {
    if (!this.NPC && (this.initialized || (!this.initialized && this.allGrenades.length === 0))) {
        this.allGrenades.clear();
        for (var i = 0; i < this.inventory.length; i++) {
            if (this.inventory[i][1] === "Grenade") {
                var none = true;
                var wanted = 0;
                for (var j = 0; j < this.allGrenades.length; j++) {
                    if (this.allGrenades[j][0] === this.inventory[i][0]) {
                        wanted = j;
                        j = this.allGrenades.length;
                        none = false;
                    }
                }
                if (none) {
                    this.allGrenades.push([this.inventory[i][0], this.inventory[i][2]]);
                } else {
                    this.allGrenades[wanted][1] += this.inventory[i][2];
                }
            }
        }
    }
};
character.prototype.medInitialize = function() {
    if (!this.NPC && (this.initialized || (!this.initialized && this.allMeds.length === 0))) {
        this.allMeds.clear();
        for (var i = 0; i < this.inventory.length; i++) {
            if (this.inventory[i][1] === "Medical") {
                var none = true;
                var wanted = 0;
                for (var j = 0; j < this.allMeds.length; j++) {
                    if (this.allMeds[j][0] === this.inventory[i][0]) {
                        wanted = j;
                        j = this.allMeds.length;
                        none = false;
                    }
                }
                if (none) {
                    this.allMeds.push([this.inventory[i][0], this.inventory[i][2]]);
                } else {
                    this.allMeds[wanted][1] += this.inventory[i][2];
                }
            }
        }
    }
};
character.prototype.die = function() {
    if (this.health <= 0) {
        this.dead = true;
        if (this.NPC) {
            if (this.weapons[0] !== "NONE" && this.dropGun) {
                var a = guns[this.weapons[0]];
                allLoot.push(construct(loot, [this.x, this.y, a, 1, "Gun", this.weapons[0]]));
                var left = a.mag - ammo[a.ammo].stack;
                allLoot.push(construct(loot, [this.x, this.y, ammo[a.ammo], ammo[a.ammo].stack, "Ammo", a.ammo]));
                while (left > 0) {
                    if (left >= ammo[a.ammo].stack) {
                        allLoot.push(construct(loot, [this.x, this.y, ammo[a.ammo], ammo[a.ammo].stack, "Ammo", a.ammo]));
                        left -= ammo[a.ammo].stack;
                    } else {
                        allLoot.push(construct(loot, [this.x, this.y, ammo[a.ammo], left, "Ammo", a.ammo]));
                        left = 0;
                    }
                }
                a = this.gun1;
                var b = this.gun1.attachments;
                if (b.muzzle !== "EMPTY" && b.muzzle !== "NONE") {
                    allLoot.push(construct(loot, [this.x, this.y, attachments[a.allAttachments[b.muzzle[0]].type[0]][a.allAttachments[b.muzzle[0]].type[1]], b.muzzle[1], "Attachment", a.allAttachments[b.muzzle[0]].type]));
                }
                if (b.grip !== "EMPTY" && b.grip !== "NONE") {
                    allLoot.push(construct(loot, [this.x, this.y, attachments[a.allAttachments[b.grip[0]].type[0]][a.allAttachments[b.grip[0]].type[1]], b.grip[1], "Attachment", a.allAttachments[b.grip[0]].type]));
                }
                if (b.scope !== "EMPTY" && b.scope !== "NONE") {
                    allLoot.push(construct(loot, [this.x, this.y, attachments[a.allAttachments[b.scope[0]].type[0]][a.allAttachments[b.scope[0]].type[1]], b.scope[1], "Attachment", a.allAttachments[b.scope[0]].type]));
                }
                if (b.mag !== "EMPTY" && b.mag !== "NONE") {
                    allLoot.push(construct(loot, [this.x, this.y, attachments[a.allAttachments[b.mag[0]].type[0]][a.allAttachments[b.mag[0]].type[1]], b.mag[1], "Attachment", a.allAttachments[b.mag[0]].type]));
                }
                if (b.stock !== "EMPTY" && b.stock !== "NONE") {
                    allLoot.push(construct(loot, [this.x, this.y, attachments[a.allAttachments[b.stock[0]].type[0]][a.allAttachments[b.stock[0]].type[1]], b.stock[1], "Attachment", a.allAttachments[b.stock[0]].type]));
                }
            }
            if (this.weapons[2] !== 0 && this.dropGun) {
                allLoot.push(construct(loot, [this.x, this.y, this.meleeWeapon, 1, "Melee", this.weapons[2]]));
            }
            if (this.armor !== 0) {
                allLoot.push(construct(loot, [this.x, this.y, armor[this.armor], this.armorHealth, "Armor", this.armor]));
            }
            var a = random(1);
            if (a <= 0.01) {
                spawnLoot(compileLoot("Attachment", "Rare"), "Attachment", [this.x, this.y, 5, 5]);
            } else if (a <= 0.1) {
                spawnLoot(compileLoot("Attachment", "Uncommon"), "Attachment", [this.x, this.y, 5, 5]);
            } else if (a <= 0.2) {
                spawnLoot(compileLoot("Attachment", "Common"), "Attachment", [this.x, this.y, 5, 5]);
            }
            a = random(1);
            if (a <= 0.2) {
                spawnLoot(compileLoot("Medical", "Common"), "Medical", [this.x, this.y, 5, 5]);
            }
            a = random(1);
            if (a <= 0.1) {
                spawnLoot(compileLoot("Grenade", "Common"), "Grenade", [this.x, this.y, 5, 5]);
            }
        }
        if (this.onTurret) {
            this.whichTurret.occupied = false;
            this.whichTurret.occupiedBy = "NONE";
            if (this.side === "ally") {
                this.whichTurret.summoned[0] = false;
            } else {
                this.whichTurret.summoned[1] = false;
            }
        }
    }
};
character.prototype.readyGun = function() {
    if (this.initialized) {
        this.spool = "NONE";
    }
    if (this.onTurret) {
        this.autoReloading = true;
        this.gunCarrying = "Hands";
    }
    this.reloading = false;
    //this.inMag = 0;
    this.drawnOnTop = false;
    this.spoolMax = "NONE";
    this.gunShowFlash = true;
    this.hand1 = [-1, 2];
    this.hand2 = [2, 12];
    this.animationDelay = 0;
    this.dropGun = true;
    if (this.weaponSpecial[0] !== undefined) {
        for (var i = 0; i < this.weaponSpecial.length; i += 2) {
            if (this.weaponSpecial[i] === "Burstfire") {
                this.burst = this.weaponSpecial[i + 1];
                this.burstsLeft = (this.burstsLeft === "NONE" ? this.burst : this.burstsLeft);
            } else if (this.weaponSpecial[i] === "Reload") {
                this.autoReloading = true;
            } else if (this.weaponSpecial[i] === "Spool") {
                this.spoolMax = this.weaponSpecial[i + 1];
                this.spool = (this.spool === "NONE" ? this.spoolMax : this.spool);
            } else if (this.weaponSpecial[i] === "MuzzleFlash") {
                this.gunShowFlash = this.weaponSpecial[i + 1];
            } else if (this.weaponSpecial[i] === "StunTime") {
                this.gunStun = this.weaponSpecial[i + 1];
            } else if (this.weaponSpecial[i] === "drawnOnTop") {
                this.drawnOnTop = this.weaponSpecial[i + 1];
            } else if (this.weaponSpecial[i] === "hands") {
                this.hand1 = copyArray(this.weaponSpecial[i + 1][0]);
                this.hand2 = copyArray(this.weaponSpecial[i + 1][1]);
            } else if (this.weaponSpecial[i] === "animationDelay") {
                this.animationDelay = this.weaponSpecial[i + 1];
            } else if (this.weaponSpecial[i] === "Ground") {
                this.dropGun = false;
            }
        }
    }
    if (this.fireMode === "Semi-Auto") {
        this.burst = 1;
        this.burstsLeft = 1;
    } else if (this.fireMode === "Burstfire") {
        this.burstsLeft = this.burst;
    }
    var compensateWidth = this.width / 20;
    if (this.gunCarrying === "Shoulder") {
        this.gunX = -8 * compensateWidth;
        this.gunY = 13 * compensateWidth;
        this.distToGun = squareRootGunDistance2;
        this.Gun2 = [-8 * compensateWidth, 0, 8 * compensateWidth];
    } else {
        this.gunX = 0;
        this.gunY = 13 * compensateWidth;
        this.distToGun = 13 * compensateWidth;
        this.Gun2 = [0, 10 * compensateWidth, 10 * compensateWidth];
    }
    this.angleToGun = atan2(this.gunY, this.gunX) + 90;
    this.angleToGun2 = atan2(this.Gun2[1], this.Gun2[0]) + 90;
    var spawnX = this.weapon.bullet.spawn[0];
    var spawnY = this.weapon.bullet.spawn[1];
    this.gunPlayerAngle = atan2(spawnY, spawnX) + 90;
    this.gunPlayerDistance = dist(spawnX, spawnY, 0, 0);
    this.muzzle = dist(0, 0, spawnX, spawnY);
    if (this.burstsLeft !== "NONE" && this.inMag <= this.burstsLeft) {
        this.burstsLeft = this.inMag;
    }
    if (!this.onTurret) {
        this.maxSpeed = ((this.type[6] / this.weight) + (this.stim / 100)) * (1 + armor[this.armor].move);
        var muzzleAttach = false, gripAttach = false, scopeAttach = false, magAttach = false, stockAttach = false, hello = this.gun2;
        if (this.currentWeapon === 0) {
            hello = this.gun1;
        }
        for (var i = 0; i < this.allAttachments.length; i++) {
            var a = this.allAttachments[i];
            if (a.type[0] === "Muzzle") {
                muzzleAttach = true;
            } else if (a.type[0] === "Foregrip") {
                gripAttach = true;
            } else if (a.type[0] === "Scope") {
                scopeAttach = true;
            } else if (a.type[0] === "Magazine") {
                magAttach = true;
            } else if (a.type[0] === "Stock") {
                stockAttach = true;
            }
        }
        if (!muzzleAttach) {
            this.muzzleAttach = "NONE";
            if (this.currentWeapon === 0) {
                this.gun1.attachments.muzzle = "NONE";
            } else {
                this.gun2.attachments.muzzle = "NONE";
            }
        }
        if (!gripAttach) {
            this.gripAttach = "NONE";
            if (this.currentWeapon === 0) {
                this.gun1.attachments.grip = "NONE";
            } else {
                this.gun2.attachments.grip = "NONE";
            }
        }
        if (!scopeAttach) {
            this.scopeAttach = "NONE";
            if (this.currentWeapon === 0) {
                this.gun1.attachments.scope = "NONE";
            } else {
                this.gun2.attachments.scope = "NONE";
            }
        }
        if (!magAttach) {
            this.magAttach = "NONE";
            if (this.currentWeapon === 0) {
                this.gun1.attachments.mag = "NONE";
            } else {
                this.gun2.attachments.mag = "NONE";
            }
        }
        if (!stockAttach) {
            this.stockAttach = "NONE";
            if (this.currentWeapon === 0) {
                this.gun1.attachments.stock = "NONE";
            } else {
                this.gun2.attachments.stock = "NONE";
            }
        }
        this.readyAttachments(this.currentWeapon);
    }
};
character.prototype.readyMelee = function() {
    this.meleeWeapon = melee[this.weapons[2]] || melee[0];
    this.weight = 1;
    if (this.currentWeapon === 2 && (this.initialized || (!this.initialized && !this.attacking))) {
        this.reload = this.meleeWeapon.reload;
        if (!this.healing) {
            this.currentReload = this.reload;
        }
        this.attacking = false;
        this.canAttack = true;
    }
    this.meleeDamage = this.meleeWeapon.damage;
    this.meleeShield = (this.meleeWeapon.special !== "") ? false : true;
    this.damageWireFrame.clear();
    var simple = this.meleeWeapon.points;
    var compensateWidth = this.width / 20;
    if (this.currentWeapon === 2 || !this.initialized) {
        this.hand1 = [0, 0, dist(0, 0, simple[simple.length - 1][0], simple[simple.length - 1][1]) * compensateWidth, atan2(simple[simple.length - 1][1], simple[simple.length - 1][0]) + 90];
        this.hand2 = [0, 0, dist(0, 0, simple[simple.length - 2][0], simple[simple.length - 2][1]) * compensateWidth, atan2(simple[simple.length - 2][1], simple[simple.length - 2][0]) + 90];
        this.hand1[0] = -(this.hand1[2] * sin(this.hand1[3]));
        this.hand1[1] = -(this.hand1[2] * cos(this.hand1[3]));
        this.hand2[0] = -(this.hand2[2] * sin(this.hand2[3]));
        this.hand2[1] = -(this.hand2[2] * cos(this.hand2[3]));
    }
    this.returnHand1 = this.hand1;
    this.returnHand2 = this.hand2;
    this.meleeHandRelative = [dist(this.hand1[0], this.hand1[1], this.hand2[0], this.hand2[1]), atan2(this.hand2[1] - this.hand1[1], this.hand2[0] - this.hand1[0]) + 90];
    this.meleeCanShield = false;
    this.storeWeapon = "NONE";
    this.storePt = [0, 0];
    this.dropGun = true;
    for (var i = 0; i < this.meleeWeapon.special.length; i += 2) {
        var a = this.meleeWeapon.special;
        if (a[i] === "Shield" && a[i + 1]) {
            this.meleeCanShield = true;
        } else if (a[i] === "ONBACK") {
            this.storeWeapon = a[i + 1];
        } else if (a[i] === "back") {
            var x = a[i + 1][0], y = a[i + 1][1];
            this.storePt = [x, y, dist(0, 0, x, y), atan2(y, x)];
        } else if (a[i] === "Ground") {
            this.dropGun = false;
        }
    }
    for (var i = 0; i < this.meleeWeapon.points.length - 2; i++) {
        var a = this.meleeWeapon.points[i];
        this.damageWireFrame.push([a[0], a[1], dist(0, 0, a[0], a[1]) * compensateWidth, atan2(a[1], a[0]) + 90]);
    }
};
character.prototype.readyAttachments = function(which) {
    var whichGun = this.gun1, whichGun2 = guns[this.weapons[0]], whichGun3 = this.weapons[0];
    if (which === 1) {
        whichGun = this.gun2;
        whichGun2 = guns[this.weapons[1]];
        whichGun3 = this.weapons[1];
    }
    var scopeAccuracy = 1, mag = whichGun2.mag, reloadTime = whichGun2.reload, fireTime = whichGun2.fireSpeed, accuracy = whichGun2.accuracy, recoil = whichGun2.recoil, Noise = whichGun2.noise, scopeEffect = 1, velocity = whichGun2.bullet.velocity, damage = whichGun2.bullet.damage;
    for (var i = 0; i < 5; i++) {
        var a;
        if (i === 0) {
            a = whichGun.attachments.muzzle;
        } else if (i === 1) {
            a = whichGun.attachments.grip;
        } else if (i === 2) {
            a = whichGun.attachments.scope;
        } else if (i === 3) {
            a = whichGun.attachments.mag;
        } else if (i === 4) {
            a = whichGun.attachments.stock;
        }
        if (a !== "NONE" && a !== "EMPTY") {
            for (var j = 0; j < whichGun.allAttachments[a[0]].effect.length; j += 2) {
                var b = whichGun.allAttachments[a[0]].effect[j], c = whichGun.allAttachments[a[0]].effect[j + 1], d = c[a[1]], e = whichGun.allAttachments[a[0]].type;
                if (c !== "NONE" && d !== "NONE") {
                    if (b === "ScopeAccuracy") {
                        scopeAccuracy = c;
                    } else if (b === "Mag") {
                        mag = d;
                    } else if (b === "Reload") {
                        reloadTime = d;
                    } else if (b === "Fire") {
                        fireTime = d;
                    } else if (b === "Accuracy") {
                        accuracy *= d;
                    } else if (b === "Recoil") {
                        recoil *= d;
                    } else if (b === "Noise") {
                        Noise = d;
                    } else if (b === "Scope") {
                        scopeEffect = scopes[e[1]].scope;
                    } else if (b === "Velocity") {
                        velocity = d;
                    } else if (b === "Damage") {
                        damage = d;
                    } else {
                        println("Error 004: Unknown Attachment Effect");
                    }
                }
            }
        }
    }
    if (whichGun.mag !== mag || whichGun.reload !== reloadTime) {
        this.reloading = false;
    }
    if (which === this.currentWeapon) {
        this.scopeAccuracy = scopeAccuracy;
        this.mag = mag;
        if (!this.initialized) {
            this.inMag = mag;
        }
        this.reload = reloadTime;
        this.fireDelay = fireTime;
        this.veer = accuracy;
        this.recoil = recoil;
        this.noise = Noise;
        if (!this.NPC) {
            this.scope = scopeEffect;
        }
        this.bulletVelocity = velocity;
        this.bulletDamage = damage;
        this.muzzleAttach = whichGun.attachments.muzzle;
        this.gripAttach = whichGun.attachments.grip;
        this.scopeAttach = whichGun.attachments.scope;
        this.magAttach = whichGun.attachments.mag;
        this.stockAttach = whichGun.attachments.stock;
    }
    if (which === 0) {
        this.gun1.scopeAccuracy = scopeAccuracy;
        this.gun1.mag = mag;
        this.gun1.reload = reloadTime;
        this.gun1.fireDelay = fireTime;
        this.gun1.veer = accuracy;
        this.gun1.recoil = recoil;
        this.gun1.noise = Noise;
        this.gun1.scope = scopeEffect;
        this.gun1.bulletVelocity = velocity;
        this.gun1.bulletDamage = damage;
        whichGun = this.gun1;
    } else {
        this.gun2.scopeAccuracy = scopeAccuracy;
        this.gun2.mag = mag;
        this.gun2.reload = reloadTime;
        this.gun2.fireDelay = fireTime;
        this.gun2.veer = accuracy;
        this.gun2.recoil = recoil;
        this.gun2.noise = Noise;
        this.gun2.scope = scopeEffect;
        this.gun2.bulletVelocity = velocity;
        this.gun2.bulletDamage = damage;
        whichGun = this.gun2;
    }
    if ((this.inMag > whichGun.mag && which === this.currentWeapon) || whichGun.inMag > whichGun.mag) {
        var magType = whichGun.ammo, magLeft = this.inMag - whichGun.mag;
        if (whichGun3 !== this.currentWeapon) {
            magLeft = whichGun.inMag - whichGun2.mag;
        }
        if (magLeft > 0) {
            for (var i = 0; i < this.inventory.length; i++) {
                var a = this.inventory[i], b = ammo[magType].stack; 
                if (a[1] === "EMPTY") {
                    this.inventory[i][0] = magType;
                    this.inventory[i][1] = "Ammo";
                    this.inventory[i][2] = 0;
                }
                if (a[1] === "Ammo" && a[0] === magType && a[2] < b) {    
                    if (a[2] + magLeft <= b) {
                        this.inventory[i][2] += magLeft;
                        magLeft = 0;
                    } else {
                        magLeft -= (b - a[2]);
                        this.inventory[i][2] = b;
                    }
                }
                if (i === this.inventory.length - 1 && magLeft >= 0) {
                    allLoot.push(construct(loot, [this.x, this.y, ammo[magType], magLeft, "Ammo", magType]));
                    magLeft = 0;
                }
                if (magLeft <= 0) {
                    i = this.inventory.length;
                }
            }
            if (which === this.currentWeapon) {
                this.inMag = whichGun.mag;
            } else {
                if (which === 0) {
                    this.gun1.inMag = whichGun.mag;
                } else {
                    this.gun2.inMag = whichGun.mag;
                }
            }
        }
    }
    if (whichGun.attachments.scope !== "NONE" && whichGun.attachments.scope !== "EMPTY") {
        if (which === 0) {
            this.gun1.attachments.scope[1] = scopes[this.gun1.allAttachments[this.gun1.attachments.scope[0]].type[1]].level - 1;
        } else {
            this.gun2.attachments.scope[1] = scopes[this.gun2.allAttachments[this.gun2.attachments.scope[0]].type[1]].level - 1;
        }
        if (which === this.currentWeapon) {
            if (which === 0) {
                this.scopeAttach[1] = this.gun1.attachments.scope[1];
            } else {
                this.scopeAttach[1] = this.gun2.attachments.scope[1];
            }
        }
    }
}; 
character.prototype.switchWeapon = function(which) {
    var switchTo = "NO", switchTo2 = "NO", suddenSwitch = "NOT";
    if (this.currentWeapon === 0 && this.gun1 === "NONE") {
        this.currentWeapon = 1;
        suddenSwitch = 1;
    }
    if (this.currentWeapon === 1 && this.gun2 === "NONE") {
        this.currentWeapon = 0;
        suddenSwitch = 0;
    }
    if (this.onTurret && this.whichTurret.leave(this)) {
        suddenSwitch = 2;
    }
    if (this.currentWeapon === 3 && this.allGrenades.length === 0) {
        this.currentWeapon = 2;
        suddenSwitch = 2;
    }
    if (this.gun1 === "NONE" && this.gun2 === "NONE" && (this.currentWeapon === 0 || this.currentWeapon === 1)) {
        this.currentWeapon = 2;
        suddenSwitch = 2;
    }
    if (!this.NPC && !this.onTurret) {
        if (pressed(commandKeys.grenade)) {
            grenadeButtonTime += compensateFPS;
        } else {
            grenadeButtonTime = 0;
        }
        if (pressed(commandKeys.meds)) {
            medButtonTime += compensateFPS;
        } else if (!pressed(commandKeys.meds) && this.allMeds.length > 0) {
            var a = medical[this.allMeds[this.medSelect][0]];
            if (!this.healing && !this.attacking && this.currentFire <= 0 && (this.currentWeapon !== 2 || (this.currentWeapon === 2 && this.currentReload <= 0)) && (this.currentWeapon !== 3 || (this.currentWeapon === 3 && this.reload <= 0)) && medButtonTime > 0 && medButtonTime < 30 && (a.type === "Adrenaline" || (a.type === "Health" && this.health < this.maxHealth))) {
                    if (this.currentWeapon === 0) {
                        this.gun1.inMag = this.inMag;
                    } else if (this.currentWeapon === 1) {
                        this.gun2.inMag = this.inMag;
                    }
                    this.reloading = false;
                    this.healing = true;
                    this.usingMed = this.medSelect;
                    this.currentReload = a.time;
                    this.currentWeapon = 2;
                    this.maxSpeed = (this.type[6] + (this.stim / 100)) * (1 + armor[this.armor].move);
                    this.slowTime = -1;
                    this.readyMelee();
            }
            medButtonTime = 0;
        } else {
            medButtonTime = 0;
        }
    } else if (!this.NPC) {
        medButtonTime = 0;
        grenadeButtonTime = 0;
    }
    if ((((!this.NPC && !this.onTurret && (pressed(commandKeys.firstWeapon) || pressed(commandKeys.secondWeapon) || pressed(commandKeys.melee) || pressed(commandKeys.grenade) || !this.initialized)) || (this.NPC && !this.onTurret && ((this.mag <= 0 && this.target !== "none") || !this.initialized))) || suddenSwitch !== "NOT") || which === "Turret") {
        if (which === "Turret") {
            if (this.currentWeapon === 0) {
                this.gun1.inMag = this.inMag;
            } else if (this.currentWeapon === 1) {
                this.gun2.inMag = this.inMag;
            }
            this.currentWeapon = 2;
            this.onTurret = true;
            switchTo = this.whichTurret.type;
            switchTo2 = this.whichTurret.t;
        } else {
            if ((((!this.NPC && ((pressed(commandKeys.firstWeapon) && ((this.currentWeapon === 1 && this.currentFire <= 0 && (this.burstsLeft === this.burst || this.burstsLeft === "NONE" || this.inMag <= 0)) || this.currentWeapon === 2 || (this.currentWeapon === 3 && this.reload <= 0))) || (!this.initialized && this.currentWeapon === 0))) || (this.NPC && ((!this.initialized && this.currentWeapon === 0) || (this.mag <= 0 && this.target !== "none" && this.burstsLeft === this.burst && this.currentFire <= 0 && (!this.reloading || (this.reloading && this.reloadType === "Round-by-Round")) && this.currentWeapon === 1)))) && this.gun1 !== "NONE" && !this.grenadePulled) || suddenSwitch === 0) {
                    if (this.initialized && this.currentWeapon === 1) {
                        this.gun2.inMag = this.inMag;
                    }
                    switchTo = this.gun1;
                    switchTo2 = this.weapons[0];
                    this.currentWeapon = 0;
                    this.healing = false;
                    this.reloading = false;
            }
            if ((((!this.NPC && ((pressed(commandKeys.secondWeapon) && ((this.currentWeapon === 0 && this.currentFire <= 0 && (this.burstsLeft === this.burst || this.burstsLeft === "NONE" || this.inMag <= 0)) || this.currentWeapon === 2 || (this.currentWeapon === 3 && this.reload <= 0))) || (!this.initialized && this.currentWeapon === 1))) || (this.NPC && ((!this.initialized && this.currentWeapon === 1) || (this.mag <= 0 && this.target !== "none" && this.burstsLeft === this.burst && this.currentFire <= 0 && (!this.reloading || (this.reloading && this.reloadType === "Round-by-Round")) && this.currentWeapon === 0)))) && this.gun2 !== "NONE" && !this.grenadePulled) || suddenSwitch === 1) {
                    if (this.initialized && this.currentWeapon === 0) {
                        this.gun1.inMag = this.inMag;
                    }
                    switchTo = this.gun2;
                    switchTo2 = this.weapons[1];
                    this.currentWeapon = 1;
                    this.healing = false;
                    this.reloading = false;
            }
            if (((!this.NPC && ((((this.currentFire <= 0 && (this.burstsLeft === this.burst || this.burstsLeft === "NONE" || this.inMag <= 0) && (this.currentWeapon === 0 || this.currentWeapon === 1)) || (this.currentWeapon === 3 && this.currentReload <= 0 && !this.grenadePulled)) && pressed(commandKeys.melee)) || (this.currentWeapon === 2 && !this.initialized)))) || suddenSwitch === 2) {
                    if (this.initialized) {
                        if (this.currentWeapon === 0) {
                            this.gun1.inMag = this.inMag;
                        } else if (this.currentWeapon === 1) {
                            this.gun2.inMag = this.inMag;
                        }
                    }
                    this.currentWeapon = 2;
                    this.reload = this.meleeWeapon.reload;
                    this.maxSpeed = (this.type[6] + (this.stim / 100)) * (1 + armor[this.armor].move);
                    this.slowTime = -1;
                    this.reloading = false;
                    this.healing = false;
                    this.readyMelee();
            }
            if ((!this.NPC && this.allGrenades.length > 0 && medButtonTime === 0 && !this.NPC && (((this.currentFire <= 0 && (this.burstsLeft === this.burst || this.burstsLeft === "NONE" || this.inMag <= 0) && (this.currentWeapon === 0 || this.currentWeapon === 1)) || this.currentWeapon === 2) && this.initialized && pressed(commandKeys.grenade) && this.grenadeSwitch) || (!this.initialized && this.currentWeapon === 3))) {
                    if (this.initialized) {
                        if (this.currentWeapon === 0) {
                            this.gun1.inMag = this.inMag;
                        } else if (this.currentWeapon === 1) {
                            this.gun2.inMag = this.inMag;
                        }
                        if (this.currentWeapon === 3) {
                            this.bombSelect = (this.bombSelect + 1) % this.allGrenades.length;
                        }
                    }
                    this.healing = false;
                    this.reloading = false;
                    this.currentWeapon = 3;
                    this.reload = 30;
                    this.maxSpeed = (this.type[6] + (this.stim / 100)) * (1 + armor[this.armor].move);
                    this.slowTime = -1;
                    this.grenadeSwitch = false;
            }
        }
        if (switchTo !== "NO") {
            this.autoReloading = false;
            this.weapon = guns[switchTo2];
            this.ammo = switchTo.ammo;
            this.fireMode = switchTo.fireMode;
            this.gunCarrying = switchTo.holdingType;
            this.mag = switchTo.mag;
            this.fireDelay = switchTo.fireDelay;
            this.veer = switchTo.veer;
            this.recoil = switchTo.recoil;
            this.maxRecoil = switchTo.maxRecoil;
            this.noise = switchTo.noise;
            if (!this.NPC) {
                this.scope = switchTo.scope;
            }
            this.scopeAccuracy = switchTo.scopeAccuracy;
            this.bulletVelocity = switchTo.bulletVelocity;
            this.bulletDamage = switchTo.bulletDamage;
            this.bulletExplode = switchTo.bulletExplode;
            this.reload = switchTo.reload;
            this.allAttachments = switchTo.allAttachments;
            this.muzzleAttach = switchTo.attachments.muzzle;
            this.gripAttach = switchTo.attachments.grip;
            this.scopeAttach = switchTo.attachments.scope;
            this.magAttach = switchTo.attachments.mag;
            this.stockAttach = switchTo.attachments.stock;
            this.weight = this.weapon.weight;
            this.burst = 3;
            this.weaponSpecial = this.weapon.special;
            this.reloadType = this.weapon.reloadType;
            var a = switchTo.inMag, b = switchTo.currentRecoil, c = switchTo.currentFire, d = switchTo.burst, e = false, f = true;
            if (!this.initialized) {
                if (this.inMag !== "N") {
                    a = this.inMag;
                }
                if (this.currentRecoil !== "N") {
                    b = this.currentRecoil;
                }
                if (this.currentFire !== "N") {
                    c = this.currentFire;
                }
                if (this.burstsLeft !== "N") {
                    d = this.burstsLeft;
                }
                if (this.reloading) {
                    e = true;
                }
                if (!this.canFire) {
                    f = false;
                }
            } else {
                this.runningTime = 0;
                this.running = false;
                if (this.onTurret) {
                    a = this.whichTurret.inMag;
                    b = this.recoil;
                    c = switchTo.fireSpeed;
                    this.fireDelay = c;
                    d = this.burst;
                    e = false;
                    f = true;
                    this.bulletVelocity = switchTo.bullet.velocity;
                    this.bulletDamage = switchTo.bullet.damage;
                    this.bulletExplode = switchTo.bullet.explosive;
                    this.scopeAccuracy = 1;
                    this.veer = switchTo.accuracy;
                    this.fireMode = switchTo.firingMode;
                }
            }
            this.inMag = a;
            this.currentRecoil = b;
            this.currentFire = c;
            this.burstsLeft = d;
            this.reloading = e;
            this.canFire = f;
            this.readyGun();
        }
    }
    if (!pressed(commandKeys.grenade) && !this.NPC) {
        this.grenadeSwitch = true;
    }
}; 
character.prototype.grabLoot = function() {
    if (!this.NPC && medButtonTime <= 0 && grenadeButtonTime <= 0 && lootOn !== "NONE" && !this.onTurret) {
        var hasPlace = false;
        if (allLoot[lootOn].type === "Ammo" || allLoot[lootOn].type === "Grenade" || allLoot[lootOn].type === "Medical" || allLoot[lootOn].type === "Attachment") {
            var goToInventory = true, anythingChanged = "NOT";
            if (allLoot[lootOn].type === "Attachment") {
                var whichGun = this.gun1, notGun = this.gun2, canEquipAttachment = false, whichAttachment, originalAttachment, whichGun2 = 0, onWhichGun;
                if (this.currentWeapon === 1) {
                    whichGun = this.gun2;
                    notGun = this.gun1;
                    whichGun2 = 1;
                }
                for (var i = 0; i < 2; i++) {
                    var a = whichGun, b = notGun, c, d, e = whichGun2, f = "EMPTY";
                    if (i === 1) {
                        a = notGun;
                        b = whichGun;
                        e = (whichGun2 + 1) % 2;
                    }
                    if (a !== "NONE") {
                        if (allLoot[lootOn].other[0] === "Muzzle") {
                            c = a.attachments.muzzle;
                            if (b !== "NONE") {
                                f = b.attachments.muzzle;
                            }
                        } else if (allLoot[lootOn].other[0] === "Foregrip") {
                            c = a.attachments.grip;
                            if (b !== "NONE") {
                                f = b.attachments.grip;
                            }
                        } else if (allLoot[lootOn].other[0] === "Scope") {
                            c = a.attachments.scope;
                            if (b !== "NONE") {
                                f = b.attachments.scope;
                            }
                        } else if (allLoot[lootOn].other[0] === "Magazine") {
                            c = a.attachments.mag;
                            if (b !== "NONE") {
                                f = b.attachments.mag;
                            }
                        } else if (allLoot[lootOn].other[0] === "Stock") {
                            c = a.attachments.stock;
                            if (b !== "NONE") {
                                f = b.attachments.stock;
                            }
                        }
                        var inventorySpotsOpen = false;
                        for (var j = 0; j < this.inventory.length; j++) {
                            if (this.inventory[j][0] === "EMPTY") {
                                inventorySpotsOpen = true;
                            }
                        }
                        if (c !== "NONE" && (c === "EMPTY" || (f !== "EMPTY" && !inventorySpotsOpen && c !== "EMPTY" && (allLoot[lootOn].other[0] !== a.allAttachments[c[0]].type[0] || allLoot[lootOn].other[1] !== a.allAttachments[c[0]].type[1] || allLoot[lootOn].number !== c[1])))) {
                            for (var j = 0; j < a.allAttachments.length; j++) {
                                if (a.allAttachments[j].type[0] === allLoot[lootOn].other[0] && a.allAttachments[j].type[1] === allLoot[lootOn].other[1]) {
                                    if (isNaN(a.allAttachments[j].effect[1])) {
                                        if (a.allAttachments[j].effect[1][allLoot[lootOn].number] !== "NONE") {
                                            canEquipAttachment = true;
                                            whichAttachment = j;
                                            if (c !== "EMPTY") {
                                                var simple = a.allAttachments[c[0]];
                                                allLoot.push(construct(loot, [this.x, this.y, attachments[simple.type[0]][simple.type[1]], c[1], "Attachment", [simple.type[0], simple.type[1]]]));
                                            }
                                            onWhichGun = e;
                                            i = 2;
                                            goToInventory = false;
                                            anythingChanged = onWhichGun;
                                            j = a.allAttachments.length;
                                        }
                                    } else {
                                        whichAttachment = j;
                                        canEquipAttachment = true;
                                        if (c !== "EMPTY") {
                                            var simple = a.allAttachments[c[0]];
                                            allLoot.push(construct(loot, [this.x, this.y, attachments[simple.type[0]][simple.type[1]], c[1], "Attachment", [simple.type[0], simple.type[1]]]));
                                        }
                                        onWhichGun = e;
                                        i = 2;
                                        goToInventory = false;
                                        anythingChanged = onWhichGun;
                                        j = a.allAttachments.length;
                                    }
                                }
                            }
                        }
                    }
                }
                if (canEquipAttachment) {
                    hasPlace = true;
                    if (onWhichGun === 0) {
                        switch (allLoot[lootOn].other[0]) {
                            case "Muzzle": 
                                this.gun1.attachments.muzzle = [whichAttachment, allLoot[lootOn].number];
                            break;
                            case "Foregrip": 
                                this.gun1.attachments.grip = [whichAttachment, allLoot[lootOn].number];
                            break;
                            case "Scope": 
                                this.gun1.attachments.scope = [whichAttachment, allLoot[lootOn].number];
                            break;
                            case "Magazine": 
                                this.gun1.attachments.mag = [whichAttachment, allLoot[lootOn].number];
                            break;
                            case "Stock": 
                                this.gun1.attachments.stock = [whichAttachment, allLoot[lootOn].number];
                            break;
                        }
                    } else {
                        switch (allLoot[lootOn].other[0]) {
                            case "Muzzle": 
                                this.gun2.attachments.muzzle = [whichAttachment, allLoot[lootOn].number];
                            break;
                            case "Foregrip": 
                                this.gun2.attachments.grip = [whichAttachment, allLoot[lootOn].number];
                            break;
                            case "Scope": 
                                this.gun2.attachments.scope = [whichAttachment, allLoot[lootOn].number];
                            break;
                            case "Magazine": 
                                this.gun2.attachments.mag = [whichAttachment, allLoot[lootOn].number];
                            break;
                            case "Stock": 
                                this.gun2.attachments.stock = [whichAttachment, allLoot[lootOn].number];
                            break;
                        }
                    }
                    allLoot.splice(lootOn, 1);
                    onLoot = "NONE";
                    lootOn = "NONE";
                }
            }
            if (goToInventory) {
                for (var i = 0; i < this.inventory.length; i++) {
                    var a = this.inventory[i], b = allLoot[lootOn], c = 1;
                    if (b.type !== "Attachment") {
                        if (b.type === a[1] && a[1] !== "EMPTY" && a[1] !== "LOCKED" && b.other === a[0]) {
                            if (a[1] === "Ammo") {
                                c = ammo[a[0]].stack;
                            } else if (a[1] === "Grenade") {
                                c = grenades[a[0]].stack;
                            } else if (a[1] === "Medical") {
                                c = medical[a[0]].stack;
                            }
                            if (a[2] < c) {
                                hasPlace = true;
                                if (c - a[2] >= b.number) {
                                    this.inventory[i][2] += b.number;
                                    allLoot[lootOn].number = 0;
                                } else {
                                    allLoot[lootOn].number -= (c - a[2]);
                                    this.inventory[i][2] = c;
                                }
                            }
                        } else if (a[1] === "EMPTY") {
                            hasPlace = true;
                            if (b.type === "Ammo" || b.type === "Grenade" || b.type === "Medical") {
                                c = b.element.stack;
                            }
                            this.inventory[i][0] = b.other;
                            this.inventory[i][1] = b.type;
                            if (b.number <= c) {
                                this.inventory[i][2] = b.number;
                                allLoot[lootOn].number = 0;
                            } else {
                                this.inventory[i][2] = c;
                                allLoot[lootOn].number -= c;
                            }
                        }
                        if (b.type === "Grenade") {
                            this.bombInitialize();
                        } else if (b.type === "Medical") {
                            this.medInitialize();
                        }
                    if (allLoot[lootOn].number <= 0) {
                            allLoot.splice(lootOn, 1);
                            onLoot = "NONE";
                            lootOn = "NONE";
                            i = this.inventory.length;
                        }
                    } else {
                        if (a[1] === "EMPTY") {
                            a[0] = b.other;
                            a[1] = "Attachment";
                            a[2] = b.number;
                            allLoot.splice(lootOn, 1);
                            onLoot = "NONE";
                            lootOn = "NONE";
                            i = this.inventory.length;
                            hasPlace = true;
                        }
                    }
                }
            }
            if (anythingChanged !== "NOT") {
                this.readyAttachments(anythingChanged);
            }
        } else if (allLoot[lootOn].type === "Armor") {
            hasPlace = true;
            if (this.armor > 0) {
                allLoot.push(construct(loot, [this.x, this.y, armor[this.armor], this.armorHealth, "Armor", this.armor]));
            }
            this.armor = allLoot[lootOn].other;
            this.armorHealth = allLoot[lootOn].number;
            allLoot.splice(lootOn, 1);
            onLoot = "NONE";
            lootOn = "NONE";
        } else if (allLoot[lootOn].type === "Backpack") {
            hasPlace = true;
            if (this.backpack > 0) {
                allLoot.push(construct(loot, [this.x, this.y, backpack[this.backpack], this.backpack, "Backpack", this.backpack]));
            }
            this.backpack = allLoot[lootOn].other;
            allLoot.splice(lootOn, 1);
            onLoot = "NONE";
            lootOn = "NONE";
        } else if (allLoot[lootOn].type === "Melee") {
            hasPlace = true;
            if (this.weapons[2] > 0) {
                allLoot.push(construct(loot, [this.x, this.y, this.meleeWeapon, 1, "Melee", this.weapons[2]]));
            }
            this.weapons[2] = allLoot[lootOn].other;
            this.meleeWeapon = allLoot[lootOn].element;
            this.readyMelee();
            for (var i = 0; i < this.meleeWeapon.special.length; i += 2) {
                var a = this.meleeWeapon.special;
                if (a[i] === "Shield") {
                    this.meleeCanShield = a[i + 1];
                } else if (a[i] === "ONBACK") {
                    this.storeWeapon = a[i + 1];
                }
            }
            allLoot.splice(lootOn, 1);
            onLoot = "NONE";
            lootOn = "NONE";
        } else if (allLoot[lootOn].type === "Gun" && (this.gun1 === "NONE" || this.gun2 === "NONE" || (allLoot[lootOn].other !== this.weapons[this.currentWeapon] && this.currentWeapon < 2))) {
            hasPlace = true;
            var switchTo, switchTo2, drop, switched, magLeft, magType, dropGun = false, Attachments, theLootInfo = [];
            if (this.gun1 !== "NONE" && this.gun2 !== "NONE" && this.currentWeapon === 0) {
                Attachments = this.gun1.attachments;
                if (Attachments.muzzle !== "NONE" && Attachments.muzzle !== "EMPTY") {
                    theLootInfo.push([this.x, this.y, attachments[this.gun1.allAttachments[Attachments.muzzle[0]].type[0]][this.gun1.allAttachments[Attachments.muzzle[0]].type[1]], Attachments.muzzle[1], "Attachment", this.gun1.allAttachments[Attachments.muzzle[0]].type]);
                }
                if (Attachments.grip !== "NONE" && Attachments.grip !== "EMPTY") {
                    theLootInfo.push([this.x, this.y, attachments[this.gun1.allAttachments[Attachments.grip[0]].type[0]][this.gun1.allAttachments[Attachments.grip[0]].type[1]], Attachments.grip[1], "Attachment", this.gun1.allAttachments[Attachments.grip[0]].type]);
                }
                if (Attachments.scope !== "NONE" && Attachments.scope !== "EMPTY") {
                    theLootInfo.push([this.x, this.y, attachments[this.gun1.allAttachments[Attachments.scope[0]].type[0]][this.gun1.allAttachments[Attachments.scope[0]].type[1]], Attachments.scope[1], "Attachment", this.gun1.allAttachments[Attachments.scope[0]].type]);
                }
                if (Attachments.mag !== "NONE" && Attachments.mag !== "EMPTY") {
                    theLootInfo.push([this.x, this.y, attachments[this.gun1.allAttachments[Attachments.mag[0]].type[0]][this.gun1.allAttachments[Attachments.mag[0]].type[1]], Attachments.mag[1], "Attachment", this.gun1.allAttachments[Attachments.mag[0]].type]);
                }
                if (Attachments.stock !== "NONE" && Attachments.stock !== "EMPTY") {
                    theLootInfo.push([this.x, this.y, attachments[this.gun1.allAttachments[Attachments.stock[0]].type[0]][this.gun1.allAttachments[Attachments.stock[0]].type[1]], Attachments.stock[1], "Attachment", this.gun1.allAttachments[Attachments.stock[0]].type]);
                }
            } else if (this.gun1 !== "NONE" && this.gun2 !== "NONE" && this.currentWeapon === 1) {
                Attachments = this.gun2.attachments;
                if (Attachments.muzzle !== "NONE" && Attachments.muzzle !== "EMPTY") {
                    theLootInfo.push([this.x, this.y, attachments[this.gun2.allAttachments[Attachments.muzzle[0]].type[0]][this.gun2.allAttachments[Attachments.muzzle[0]].type[1]], Attachments.muzzle[1], "Attachment", this.gun2.allAttachments[Attachments.muzzle[0]].type]);
                }
                if (Attachments.grip !== "NONE" && Attachments.grip !== "EMPTY") {
                    theLootInfo.push([this.x, this.y, attachments[this.gun2.allAttachments[Attachments.grip[0]].type[0]][this.gun2.allAttachments[Attachments.grip[0]].type[1]], Attachments.grip[1], "Attachment", this.gun2.allAttachments[Attachments.grip[0]].type]);
                }
                if (Attachments.scope !== "NONE" && Attachments.scope !== "EMPTY") {
                    theLootInfo.push([this.x, this.y, attachments[this.gun2.allAttachments[Attachments.scope[0]].type[0]][this.gun2.allAttachments[Attachments.scope[0]].type[1]], Attachments.scope[1], "Attachment", this.gun2.allAttachments[Attachments.scope[0]].type]);
                }
                if (Attachments.mag !== "NONE" && Attachments.mag !== "EMPTY") {
                    theLootInfo.push([this.x, this.y, attachments[this.gun2.allAttachments[Attachments.mag[0]].type[0]][this.gun2.allAttachments[Attachments.mag[0]].type[1]], Attachments.mag[1], "Attachment", this.gun2.allAttachments[Attachments.mag[0]].type]);
                }
                if (Attachments.stock !== "NONE" && Attachments.stock !== "EMPTY") {
                    theLootInfo.push([this.x, this.y, attachments[this.gun2.allAttachments[Attachments.stock[0]].type[0]][this.gun2.allAttachments[Attachments.stock[0]].type[1]], Attachments.stock[1], "Attachment", this.gun2.allAttachments[Attachments.stock[0]].type]);
                }
            }
            if (theLootInfo.length > 0) {
                var done = [];
                for (var j = 0; j < theLootInfo.length; j++) {
                    done[j] = false;
                    for (var i = 0; i < this.inventory.length; i++) {
                        if (this.inventory[i][1] === "EMPTY") {
                            this.inventory[i][0] = theLootInfo[j][5];
                            this.inventory[i][1] = "Attachment";
                            this.inventory[i][2] = theLootInfo[j][3];
                            i = this.inventory.length;
                            done[j] = true;
                        }
                    }
                    if (!done[j]) {
                        allLoot.push(construct(loot, theLootInfo[j]));
                    }
                }
            }
            var muzzleAttach, gripAttach, scopeAttach, magAttach, stockAttach;
            if (this.gun1 === "NONE") {
                magLeft = this.gun1.inMag;
                magType = this.gun1.ammo;
                drop = this.weapons[0];
                this.weapons[0] = allLoot[lootOn].other;
                this.gun1 = guns[this.weapons[0]];
                switched = 0;
                if (this.currentWeapon === 0) {
                    switchTo2 = this.weapons[0];
                }
                var weapon = this.gun1;
            } else if (this.gun2 === "NONE") {
                magLeft = this.gun2.inMag;
                magType = this.gun2.ammo;
                drop = this.weapons[1];
                this.weapons[1] = allLoot[lootOn].other;
                this.gun2 = guns[this.weapons[1]];
                switched = 1;
                if (this.currentWeapon === 1) {
                    switchTo2 = this.weapons[1];
                }
                var weapon = this.gun2;
            } else if (this.gun1 !== "NONE" && this.gun2 !== "NONE") {
                dropGun = true;
                if (this.currentWeapon !== 1) {
                    magLeft = this.gun1.inMag;
                    magType = this.gun1.ammo;
                    drop = this.weapons[0];
                    this.weapons[0] = allLoot[lootOn].other;
                    this.gun1 = guns[this.weapons[0]];
                    switched = 0;
                    switchTo2 = this.weapons[0];
                } else {
                    magLeft = this.gun2.inMag;
                    magType = this.gun2.ammo;
                    drop = this.weapons[1];
                    this.weapons[1] = allLoot[lootOn].other;
                    this.gun2 = guns[this.weapons[1]];
                    switched = 1;
                    switchTo2 = this.weapons[1];
                }
            }
            var weapon = allLoot[lootOn].element;
            var info = {
                number: weapon,
                description: weapon.description,
                ammo: weapon.ammo,
                fireMode: weapon.firingMode,
                holdingType: weapon.holdingType,
                noise: weapon.noise,
                mag: weapon.mag,
                fireDelay: weapon.fireSpeed,
                scopeAccuracy: 1,
                veer: weapon.accuracy,
                recoil: weapon.recoil,   
                maxRecoil: weapon.maxRecoil,
                bulletVelocity: weapon.bullet.velocity,
                bulletDamage: weapon.bullet.damage,
                bulletExplode: weapon.bullet.explosive * 100, 
                spawn: weapon.bullet.spawn,
                reload: weapon.reload,
                allAttachments: weapon.attachments,
                attachments: {
                    muzzle: "EMPTY",
                    grip: "EMPTY",
                    scope: "EMPTY",
                    mag: "EMPTY",
                    stock: "EMPTY",
                },
                burst: 3,
                autoReload: false,
                inMag: 0,
                currentRecoil: weapon.accuracy,
                currentFire: weapon.fireSpeed,
                burstsLeft: 3,
            };
            if (switched === 0) {
                this.gun1 = info;
                switchTo = this.gun1;
                this.gun1.allAttachments = weapon.attachments;
                this.gun1.attachments = {
                    muzzle: "EMPTY",
                    grip: "EMPTY",
                    scope: "EMPTY",
                    mag: "EMPTY",
                    stock: "EMPTY",
                };
                for (var i = 0; i < this.gun1.allAttachments.length; i++) {
                    var a = this.gun1.allAttachments[i];
                    if (a.type[0] === "Muzzle") {
                        muzzleAttach = true;
                    } else if (a.type[0] === "Foregrip") {
                        gripAttach = true;
                    } else if (a.type[0] === "Scope") {
                        scopeAttach = true;
                    } else if (a.type[0] === "Magazine") {
                        magAttach = true;
                    } else if (a.type[0] === "Stock") {
                        stockAttach = true;
                    }
                }
                if (!muzzleAttach) {
                    this.gun1.attachments.muzzle = "NONE";
                }
                if (!gripAttach) {
                    this.gun1.attachments.grip = "NONE";
                }
                if (!scopeAttach) {
                    this.gun1.attachments.scope = "NONE";
                }
                if (!magAttach) {
                    this.gun1.attachments.mag = "NONE";
                }
                if (!stockAttach) {
                    this.gun1.attachments.stock = "NONE";
                }
            } else {
                this.gun2 = info;
                switchTo = this.gun2;
                this.gun2.allAttachments = weapon.attachments;
                this.gun2.attachments = {
                    muzzle: "EMPTY",
                    grip: "EMPTY",
                    scope: "EMPTY",
                    mag: "EMPTY",
                    stock: "EMPTY",
                };
                for (var i = 0; i < this.gun2.allAttachments.length; i++) {
                    var a = this.gun2.allAttachments[i];
                    if (a.type[0] === "Muzzle") {
                        muzzleAttach = true;
                    } else if (a.type[0] === "Foregrip") {
                        gripAttach = true;
                    } else if (a.type[0] === "Scope") {
                        scopeAttach = true;
                    } else if (a.type[0] === "Magazine") {
                        magAttach = true;
                    } else if (a.type[0] === "Stock") {
                        stockAttach = true;
                    }
                }
                if (!muzzleAttach) {
                    this.gun2.attachments.muzzle = "NONE";
                }
                if (!gripAttach) {
                    this.gun2.attachments.grip = "NONE";
                }
                if (!scopeAttach) {
                    this.gun2.attachments.scope = "NONE";
                }
                if (!magAttach) {
                    this.gun2.attachments.mag = "NONE";
                }
                if (!stockAttach) {
                    this.gun2.attachments.stock = "NONE";
                }
            }
            if (switched === this.currentWeapon) {
                this.canFire = true;
                this.autoReloading = false;
                this.weapon = guns[switchTo2];
                this.ammo = switchTo.ammo;
                this.fireMode = switchTo.fireMode;
                this.gunCarrying = switchTo.holdingType;
                this.mag = switchTo.mag;
                this.fireDelay = switchTo.fireDelay;
                this.veer = switchTo.veer;
                this.recoil = switchTo.recoil;
                this.maxRecoil = switchTo.maxRecoil;
                this.noise = switchTo.noise;
                if (!this.NPC) {
                    this.scope = switchTo.scope;
                }
                this.scopeAccuracy = switchTo.scopeAccuracy;
                this.bulletVelocity = switchTo.bulletVelocity;
                this.bulletDamage = switchTo.bulletDamage;
                this.bulletExplode = switchTo.bulletExplode;
                this.reload = switchTo.reload;
                this.allAttachments = switchTo.allAttachments;
                this.muzzleAttach = switchTo.attachments.muzzle;
                this.gripAttach = switchTo.attachments.grip;
                this.scopeAttach = switchTo.attachments.scope;
                this.magAttach = switchTo.attachments.mag;
                this.stockAttach = switchTo.attachments.stock;
                this.weaponSpecial = this.weapon.special;
                this.runningTime = 0;
                this.reloadType = this.weapon.reloadType;
                this.inMag = switchTo.inMag;
                this.currentRecoil = switchTo.currentRecoil;
                this.currentFire = switchTo.currentFire;
                this.burstsLeft = switchTo.burst;
                this.weight = this.weapon.weight;
                this.readyGun();
            }
            allLoot.splice(lootOn, 1);
            onLoot = "NONE";
            lootOn = "NONE";
            if (dropGun) {
                allLoot.push(construct(loot, [this.x, this.y, guns[drop], 1, "Gun", drop]));
            }
            if (magLeft > 0) {
                for (var i = 0; i < this.inventory.length; i++) {
                    var a = this.inventory[i], b = ammo[magType].stack;
                    if (a[1] === "EMPTY") {
                        this.inventory[i][0] = magType;
                        this.inventory[i][1] = "Ammo";
                        this.inventory[i][2] = 0;
                    }
                    if (a[1] === "Ammo" && a[0] === magType && a[2] < b) {
                        if (a[2] + magLeft <= b) {
                            this.inventory[i][2] += magLeft;
                            magLeft = 0;
                        } else {
                            magLeft -= (b - a[2]);
                            this.inventory[i][2] = b;
                        }
                    }
                    if (i === this.inventory.length - 1 && magLeft >= 0) {
                        allLoot.push(construct(loot, [this.x, this.y, ammo[magType], magLeft, "Ammo", magType]));
                        magLeft = 0;
                    }
                    if (magLeft <= 0) {
                        i = this.inventory.length;
                    }
                }
            }
        }
        if (!hasPlace) {
            message2 = ["Inventory full", 255];
        }
    }
}; 
character.prototype.updateInventory = function() {
    if (!this.NPC) {
        var inventory = this.inventory;
        for (var i = 0; i < inventory.length; i++) {
            var a = inventory[i];
            if (a[1] === "Ammo") {
                if (a[2] < ammo[a[0]].stack && i < inventory.length - 1) {
                    for (var j = i + 1; j < inventory.length; j++) {
                        var b = inventory[j];
                        if (a[0] === b[0] && b[1] === "Ammo") {
                            if (ammo[b[0]].stack - a[2] < b[2]) {
                                if (b[2] > ammo[b[0]].stack - a[2]) {
                                    b[2] -= (ammo[b[0]].stack - a[2]);
                                } else {
                                    b[2] = 0;
                                }
                                a[2] = ammo[a[0]].stack;
                            } else {
                                a[2] += b[2];
                                inventory[j] = ["EMPTY", "EMPTY", "EMPTY"];
                            }
                        }
                    }
                }
            } else if (a[1] === "Grenade") {
                if (a[2] < grenades[a[0]].stack && i < inventory.length - 1) {
                    for (var j = i + 1; j < inventory.length; j++) {
                        var b = inventory[j];
                        if (a[0] === b[0] && b[1] === "Grenade") {
                            if (grenades[b[0]].stack - a[2] < b[2]) {
                                if (b[2] > grenades[b[0]].stack - a[2]) {
                                    b[2] -= (grenades[b[0]].stack - a[2]);
                                } else {
                                    b[2] = 0;
                                }
                                a[2] = grenades[a[0]].stack;
                            } else {
                                a[2] += b[2];
                                inventory[j] = ["EMPTY", "EMPTY", "EMPTY"];
                            }
                        }
                    }
                }
            } else if (a[1] === "Medical") {
                if (a[2] < medical[a[0]].stack && i < inventory.length - 1) {
                    for (var j = i + 1; j < inventory.length; j++) {
                        var b = inventory[j];
                        if (a[0] === b[0] && b[1] === "Medical") {
                            if (medical[b[0]].stack - a[2] < b[2]) {
                                if (b[2] > medical[b[0]].stack - a[2]) {
                                    b[2] -= (medical[b[0]].stack - a[2]);
                                } else {
                                    b[2] = 0;
                                }
                                a[2] = medical[a[0]].stack;
                            } else {
                                a[2] += b[2];
                                inventory[j] = ["EMPTY", "EMPTY", "EMPTY"];
                            }
                        }
                    }
                }
            }
        }
        for (var i = 0; i < inventory.length; i++) {
            if (inventory[i][2] === "EMPTY" && inventory[i][2] !== "LOCKED") {
                for (var j = i + 1; j < inventory.length; j++) {
                    if (inventory[j][2] !== "LOCKED" && inventory[j][2] !== "EMPTY") {
                        inventory[i] = inventory[j];
                        inventory[j] = ["EMPTY", "EMPTY", "EMPTY"];
                        j = inventory.length;
                    }
                }
            }
        }
        for (var i = 0; i < inventory.length; i++) {
            var a = inventory[i];
            if (i > backpack[this.backpack].spaces - 1 && a[1] !== "LOCKED") {
                if (a[1] === "Ammo") {
                    allLoot.push(construct(loot, [this.x, this.y, ammo[a[0]], a[2], "Ammo", a[0]]));
                } else if (a[1] === "Grenade") {
                    allLoot.push(construct(loot, [this.x, this.y, grenades[a[0]], a[2], "Grenade", a[0]]));
                } else if (a[1] === "Medical") {
                    allLoot.push(construct(loot, [this.x, this.y, medical[a[0]], a[2], "Medical", a[0]]));
                } else if (a[1] === "Attachment") {
                    allLoot.push(construct(loot, [this.x, this.y, attachments[a[0][0]][a[0][1]], a[2], "Attachment", a[0]]));
                }
                inventory[i] = ["LOCKED", "LOCKED", "LOCKED"];
            } else if (i <= backpack[this.backpack].spaces - 1 && a[1] === "LOCKED") {
                inventory[i] = ["EMPTY", "EMPTY", "EMPTY"];
            }
        }
        this.inventory = inventory;
    }
};
character.prototype.draw = function() {
    var drawPlayer = function(obj) {
        stroke(0);
        strokeWeight(2);
        renderImage(obj.type[7][0], 0, 0, 100, 100);
        scale(obj.width / 20);
        renderImage(armor[obj.armor].game, 0, 0);
        renderImage(backpack[obj.backpack || 0].game, 0, 0);
        scale(20 / obj.width);
        renderImage(obj.type[7][1], 0, 0, 100, 100);
        noStroke();
    };
    if ((this.currentWeapon === 2 && !this.onTurret) || this.storeWeapon !== "NONE") {
        if (this.currentWeapon === 2 && !this.onTurret) {
            pushMatrix();
            translate(this.hand1[0], this.hand1[1]);
            rotate(this.rot + (this.rotateImage ? this.meleePull : 0));
            renderImage(melee[this.weapons[2]].game, 0, 0);
            popMatrix();
            strokeWeight(2);
            var simple = this.meleeWeapon.points;
            var compensateWidth = 6 * (this.width / 20);
            renderImage(this.type[7][2], this.hand1[0], this.hand1[1], 100, 100);
            renderImage(this.type[7][2], this.hand2[0], this.hand2[1], 100, 100);
        }
        if (this.currentWeapon !== 2 && this.storeWeapon !== "NONE") {
            pushMatrix();
            var a = [0, 0], b = this.damageWireFrame;
            for (var i = 0; i < b.length; i++) {
                a[0] += b[i][0];
                a[1] += b[i][1];
            }
            a[0] /= b.length;
            a[1] /= b.length;
            translate(a[0], a[1]);
            rotate(this.storeWeapon + this.rot);
            renderImage(melee[this.weapons[2]].game, 0, 0);
            popMatrix();
        }
    }
    pushMatrix();
    translate(this.x, this.y);
    rotate(this.rot);
    if (this.drawnOnTop) {
        drawPlayer(this);
    }
    pushMatrix();
    //if (this.stunTime <= 0) {
        if (this.currentWeapon === 0 || this.currentWeapon === 1 || this.onTurret) {
            if (this.gunCarrying === "Shoulder") {
                if (this.gunDrawRecoil > 4) {
                    this.gunDrawRecoilNext = 4;
                    this.gunDrawRecoil = 3;
                }
                translate(-8, 11 - this.gunDrawRecoil);
            } else {
                if (this.gunDrawRecoil > 2) {
                    this.gunDrawRecoilNext = 2;
                    this.gunDrawRecoil = 1;
                }
                translate(0, 13 - this.gunDrawRecoil);
            }
            rotate(this.gunRotation);
            var handy = function(hand, obj) {
                var b = obj.fireDelay - obj.animationDelay;
                if (hand.length === 2 || obj.currentFire <= 0 || obj.currentFire >= b) {
                    renderImage(obj.type[7][2], hand[0], hand[1], 100, 100);
                } else {
                    var a = 0;
                    if (obj.currentFire >= b / 2) {
                        a = 1 - (obj.currentFire - b / 2) * 2 / b;
                    } else {
                        a = obj.currentFire * 2 / b;
                    }
                    renderImage(obj.type[7][2], hand[0] + (hand[2] - hand[0]) * a, hand[1] + (hand[3] - hand[1]) * a, 100, 100);
                }
            };
            handy(this.hand1, this);
            handy(this.hand2, this);
            noStroke();
            pushMatrix();
            translate(0, this.muzzle);
            if (this.muzzleFlashTime >= 0 && this.gunShowFlash) {
                fill(random(200, 255), random(150, 255));
                beginShape();
                vertex(0, 0);
                vertex(random(6, 7), 5);
                vertex(random(1, 3), random(2, 4));
                vertex(random(-2, 2), 10);
                vertex(-random(1, 3), random(2, 4));
                vertex(-random(6, 7), 5);
                endShape();
            }
            this.muzzleFlashTime -= compensateFPS;
            popMatrix();
            if (!this.onTurret) {
                renderImage(guns[this.weapons[this.currentWeapon]].game, 0, 0);
            } else {
                renderImage(this.whichTurret.type.game, 0, 0);
            }
        } else if (this.currentWeapon === 3) {
            pushMatrix();
            rotate(this.grenadePull * 0.75);
            renderImage(this.type[7][2], 6, 10 + (this.grenadePull / 15), 100, 100);
            popMatrix();
            if (this.grenadePull <= 5) {
                pushMatrix();
                translate(-6 - (this.grenadePull / 15), 10 - (this.grenadePull / 3));
                renderImage(this.type[7][2], 0, 0, 100, 100);
                if ((!this.grenadePulled && this.grenadePull <= 1) || (this.grenadePulled)) {
                    renderImage(grenades[this.allGrenades[this.bombSelect][0]].game, -2, 2);
                }
                popMatrix();
            }
            noStroke();
        }
    //}
    popMatrix();
    if (!this.drawnOnTop) {
        drawPlayer(this);
    }
    for (var i = 0; i < this.wounds.length; i++) {
        fill(255, 0, 0, 50 * (this.wounds[i][1] / 30));
        arc(0, 0, 20, 20, (this.wounds[i][0] - 20) - this.rot, (this.wounds[i][0] + 20) - this.rot);
        this.wounds[i][1] -= compensateFPS;
        if (this.wounds[i][1] <= 0) {
            this.wounds.splice(i, 1);
        }
    }
    if (!this.NPC && this.currentWeapon === 3 && this.grenadePull > 5) {
        strokeWeight(2);
        stroke(250, 220, 170);
        fill(230, 200, 150);
        pushMatrix();
        translate(-6 - (this.grenadePull / 15), 10 - (this.grenadePull / 3));
        renderImage(this.type[7][2], 0, 0, 100, 100);
        if ((!this.grenadePulled && this.grenadePull <= 1) || (this.grenadePulled)) {
            renderImage(grenades[this.allGrenades[this.bombSelect][0]].game, -2, 2);
        }
        popMatrix();
        noStroke();
    }
    for (var i = 0; i < this.hearShotsFrom.length; i++) {
        this.hearShotsFrom[i][1] -= compensateFPS;
        if (this.hearShotsFrom[i][1] <= 0) {
            this.hearShotsFrom.splice(i);
        }
    }
    popMatrix();
    if (this.NPC) {
        this.timeAlive += compensateFPS;
    }
    if (devMode && this.NPC) {
        for (var i = 0; i < this.contingencyPathToFollow.length; i++) {
            var a = this.contingencyPathToFollow;
            if (i < this.contingencyPathToFollow.length - 1) {
                line(a[i][0], a[i][1], a[i + 1][0], a[i + 1][1]);
            }
        }
    }
    noStroke();
};
character.prototype.move = function() {
    this.stim = constrain(this.stim - (0.0075 * compensateFPS), 0, 100);
    this.health = constrain(this.health + ((this.stim / 3000) * compensateFPS) * this.maxHealth / 100, 0, this.maxHealth);
    if (freePlay && this.target === "none") {
        runMove(this);
    } else if (freePlay && this.target !== "none" && !this.contingency) {
        this.moveLoc = [this.target.x, this.target.y];
    }
    if (!this.onTurret) {
        if (!this.NPC) {
            if (!this.dead && !this.NPC && !console.activated) {
                var adjust = this.maxSpeed * this.maxSpeed2;
                if (pressed(commandKeys.up) && pressed(commandKeys.left) && !(pressed(commandKeys.right) || pressed(commandKeys.down))) {
                    this.speed = -adjust / squareRoot2;
                    this.speed2 = -adjust / squareRoot2;
                }
                else if (pressed(commandKeys.down) && pressed(commandKeys.left) && !(pressed(commandKeys.up) || pressed(commandKeys.right))) {
                    this.speed = adjust / squareRoot2;
                    this.speed2 = -adjust / squareRoot2;
                }
                else if (pressed(commandKeys.down) && pressed(commandKeys.right) && !(pressed(commandKeys.up) || pressed(commandKeys.left))) {
                    this.speed = adjust / squareRoot2;
                    this.speed2 = adjust / squareRoot2;
                }
                else if (pressed(commandKeys.up) && pressed(commandKeys.right) && !(pressed(commandKeys.down) || pressed(commandKeys.left))) {
                    this.speed = -adjust / squareRoot2;
                    this.speed2 = adjust / squareRoot2;
                }
                else if (pressed(commandKeys.up) && !pressed(commandKeys.down)) {
                    this.speed = -adjust;
                }
                else if (pressed(commandKeys.left) && !pressed(commandKeys.right)) {
                    this.speed2 = -adjust;
                }
                else if (pressed(commandKeys.down) && !pressed(commandKeys.up)) {
                    this.speed = adjust;
                }
                else if (pressed(commandKeys.right) && !pressed(commandKeys.left)) {
                    this.speed2 = adjust;
                }
                if (pressed(commandKeys.scope) && !pressed(192) && this.canScope && this.currentWeapon < 2) {
                    this.speed *= 0.5;
                    this.speed2 *= 0.5;
                    if (this.speed !== 0 || this.speed2 !== 0) {
                        this.accuracyMultiplier -= ((this.accuracyMultiplier - this.scopeAccuracy * 2 / 3) / 5) * compensateFPS;
                    } else {
                        this.accuracyMultiplier -= ((this.accuracyMultiplier - this.scopeAccuracy / 3) / 5) * compensateFPS;
                    }
                } else if (this.speed === 0 && this.speed2 === 0 && this.currentWeapon < 2) {
                    this.accuracyMultiplier -= ((this.accuracyMultiplier - this.scopeAccuracy * 2 / 3) / 5) * compensateFPS;
                } else {
                    this.accuracyMultiplier -= ((this.accuracyMultiplier - 1) / 5) * compensateFPS;
                }
                this.speed *= compensateFPS;
                this.speed2 *= compensateFPS;
                if (this.slowTime > 0) {
                    this.speed *= 0.5;
                    this.speed2 *= 0.5;
                }
                var currentRecoil;
                if (this.stunTime <= 0 || this.stunType === "smoke") {
                    this.x += this.speed2;
                    this.y += this.speed;
                }
                if ((!pressed(commandKeys.up) && !pressed(commandKeys.down)) || (pressed(commandKeys.up) && pressed(commandKeys.down))) {
                    this.speed = 0;
                }
                if ((!pressed(commandKeys.left) && !pressed(commandKeys.right)) || (pressed(commandKeys.left) && pressed(commandKeys.right))) {
                    this.speed2 = 0;
                }
                if (pressed(commandKeys.up) || pressed(commandKeys.left) || pressed(commandKeys.down) || pressed(commandKeys.right)) {
                    this.runningTime += compensateFPS;
                }
                if ((this.speed === 0 && this.speed2 === 0) || (pressed(commandKeys.scope) && this.currentWeapon < 2 && this.canScope) || this.healing) {
                    this.runningTime = 0;
                }
            } else {
                this.speed = 0;
                this.speed2 = 0;
            }
        } else {
            var shouldMove = false, speed, x = this.moveLoc[0], y = this.moveLoc[1], canChange = true;
//println(this.targetLoc);
            if (((this.gettingShot > 0 && this.moveLoc[0] !== "NO") || (this.warned && this.moveLoc[0] !== "NO" && this.warnTime <= 0)) && (!this.contingency || (this.contingencyPathToFollow !== "NONE" && this.crawlers.length === 0))) {
                if (this.stage !== "Move to Turret") {
                    if (this.target !== "none") {
                        x = this.targetLoc[0];
                        y = this.targetLoc[1];
                    }
                    var theDistance = sq(this.x - x) + sq(this.y - y), theDistance2 = sq((this.width / 2) + (this.target.width / 2) + 10), a = moveToward(this, theDistance, this.moveRanges[0], this.moveRanges[1], this.moveRanges[2]);
                    if (canChange && this.whichSquad === "NONE") {
                        if (this.gettingShot <= 0 || this.skillEvasion <= 3) {
                            if (!this.targetVisible && this.stage !== "Flee" && this.stage !== "Flee 2" && this.stage !== "Evade" && this.stage !== "Evade 2") {
                                if (theDistance > 4) {
                                    shouldMove = true;
                                }
                            } else {
                                if (this.health <= this.maxHealth * ((11 - this.skillAggression) * 0.05) && this.skillAggression < 8 && this.stage !== "Flee" && this.stage !== "Flee 2" && ((this.skillAggression < 3 && this.fledTimes < 3) || (this.skillAggression >= 3 && this.skillAggression < 5 && this.fledTimes < 2) || (this.skillAggression >= 3 && this.skillAggression < 8 && this.fledTimes === 0))) {
                                    this.stage = "Flee";
                                    this.fledTimes++;
                                    this.circleTime = 0;
                                    this.circleDirection = 0;
                                }
                                if (this.stage !== "Flee" && this.stage !== "Flee 2" && this.stage !== "Evade" && this.stage !== "Evade 2" && this.stage !== "Retreat") {
                                    this.stage = "Move In";
                                }
                            }
                        } else if (this.gettingShot > 0 && this.skillEvasion > 3 && this.stage !== "Flee" && this.stage !== "Flee 2") {
                            this.stage = "Evade";
                        }
                    } else if (canChange && this.whichSquad !== "NONE") {
                        if (this.positionInSquad === "Commander") {
                            if (this.speed === 0 && this.speed2 === 0 && this.stage !== "Send In" && this.stage !== "Send In 2" && this.stage !== "Send In 3" && !this.targetVisible && sq(this.x - x) + sq(this.y - y) > sq(this.moveRanges[2]) && this.stage !== "Flee" && this.stage !== "Flee 2" && this.stage !== "Recall" && this.stage !== "Retreat" && this.warnTime <= -(12 - this.skillAggression) * 10 && theDistance > 2500) {
                                this.stage = "Recall";
                                this.whichSquad.commanderOrders = ["Recall", [this.x, this.y]];
                                for (var i = 0; i < this.whichSquad.members.length; i++) {
                                    var a = this.whichSquad.members[i];
                                    if (inBox(a.x, a.y, this.x, this.y, this.sight * this.zoom, this.sight * this.zoom) && !a.seeTarget && this.whichSquad.members[i].skillAggression <= 8 && a !== this) {
                                        if (seeTarget([a.x, a.y], [this.x, this.y])) {
                                            this.whichSquad.members[i].stage = "Recalling";
                                            this.whichSquad.members[i].moveLoc = [this.x, this.y];
                                        }
                                    }
                                }
                            }
                            if (canChange && this.health <= this.maxHealth * ((11 - this.skillAggression) * 0.05) && this.skillAggression < 8 && this.stage !== "Flee" && this.stage !== "Flee 2" && this.stage !== "Send In" && this.stage !== "Send In 2" && this.stage !== "Send In 3" && ((this.skillAggression < 3 && this.fledTimes < 3) || (this.skillAggression >= 3 && this.skillAggression < 5 && this.fledTimes < 2) || (this.skillAggression >= 3 && this.skillAggression < 8 && this.fledTimes === 0))) {
                                this.stage = "Flee";
                                this.fledTimes++;
                                this.circleTime = 0;
                                this.circleDirection = 0;
                                this.whichSquad.commanderOrders = ["Recall", [this.x, this.y]];
                                for (var i = 0; i < this.whichSquad.members.length; i++) {
                                    var a = this.whichSquad.members[i];
                                    if (inBox(a.x, a.y, this.x, this.y, this.sight * this.zoom, this.sight * this.zoom) && !a.seeTarget && this.whichSquad.members[i].skillAggression <= 8 && a !== this) {
                                        if (seeTarget([a.x, a.y], [this.x, this.y])) {
                                            this.whichSquad.members[i].stage = "Recalling";
                                            this.whichSquad.members[i].moveLoc = [this.x, this.y];
                                        }
                                    }
                                }
                            }
                            if (this.stage === "Recall" || this.stage === "Flee" || this.stage === "Flee 2") {
                                var ready = true;
                                for (var i = 0; i < this.whichSquad.members.length; i++) {
                                    if (this.whichSquad.members[i].stage === "Recalling") {
                                        ready = false;
                                        i = this.whichSquad.members.length;
                                    }
                                }
                                if (ready) {
                                    this.stage = "Send In";
                                    this.warnTime = 0;
                                    this.whichSquad.commanderOrders = "NONE";
                                }
                            }
                            if (this.stage === "Send In") {
                                var any = false;
                                if (this.warnTime === 0) {
                                    for (var i = 0; i < this.whichSquad.members.length; i++) {   
                                        if (this.whichSquad.members[i].stage === "Recalled" && this.whichSquad.members[i].positionInSquad === "Gunner") {
                                            this.whichSquad.members[i].stage = "Move In";
                                            this.whichSquad.members[i].moveLoc = this.moveLoc;
                                            any = true;
                                        }
                                    }
                                }
                                if (!any || this.warnTime <= -100 + (10 * (11 - this.skillAggression))) {
                                    this.stage = "Send In 2";
                                    this.warnTime = 0;
                                }
                            }
                            if (this.stage === "Send In 2") {
                                var any = false;
                                if (this.warnTime === 0) {
                                    for (var i = 0; i < this.whichSquad.members.length; i++) {   
                                        if (this.whichSquad.members[i].stage === "Recalled" && this.whichSquad.members[i].positionInSquad === "Suppressor") {
                                            this.whichSquad.members[i].stage = "Move In";
                                            this.whichSquad.members[i].moveLoc = this.moveLoc;
                                            any = true;
                                        }
                                    }
                                }
                                if (!any || this.warnTime <= -100 + (10 * (11 - this.skillAggression))) {
                                    this.stage = "Send In 3";
                                    this.warnTime = 0;
                                }
                            }
                            if (this.stage === "Send In 3") {
                                var any = false;
                                if (this.warnTime === 0) {
                                    for (var i = 0; i < this.whichSquad.members.length; i++) {   
                                        if (this.whichSquad.members[i].stage === "Recalled" && this.whichSquad.members[i].positionInSquad === "Sniper") {
                                            this.whichSquad.members[i].stage = "Move In";
                                            this.whichSquad.members[i].moveLoc = this.moveLoc;
                                            any = true;
                                        }
                                    }
                                }
                                if (!any || this.warnTime <= -100 + (10 * (11 - this.skillAggression))) {
                                    this.stage = "Final Wait";
                                    this.warnTime = 0;
                                }
                            }
                            if (this.stage === "Final Wait") {
                                if (this.warnTime <= -100 + (10 * (11 - this.skillAggression))) {
                                    this.stage = "Move In";
                                    this.whichSquad.commanderOrders = "NONE";
                                    this.warnTime = 0;
                                }
                            }
                            if (canChange && this.gettingShot > 0 && this.skillEvasion > 3 && this.stage !== "Flee" && this.stage !== "Flee 2") {
                                this.stage = "Evade";
                            }
                        } else if (this.positionInSquad === "Bruiser") {
                            if (theDistance > 4) {
                                shouldMove = true;
                            }
                        } else {
                            if (this.stage !== "Recalling" && this.stage !== "Recalled") {
                                if (this.gettingShot <= 0 || this.skillEvasion <= 3) {
                                    if (!this.targetVisible) {
                                        if (canChange && theDistance > 4) {
                                            shouldMove = true;
                                        }
                                    } else {
                                        if (canChange && this.health <= this.maxHealth * (this.skillAggression * 0.05) && this.skillAggression < 8 && this.stage !== "Flee" && this.stage !== "Flee 2" && ((this.skillAggression < 3 && this.fledTimes < 3) || (this.skillAggression >= 3 && this.skillAggression < 5 && this.fledTimes < 2) || (this.skillAggression >= 3 && this.skillAggression < 8 && this.fledTimes === 0))) {
                                            this.stage = "Flee";
                                            this.fledTimes++;
                                            this.circleTime = 0;
                                            this.circleDirection = 0;
                                        }
                                    }
                                } else if (canChange && this.gettingShot > 0 && this.skillEvasion > 3 && this.stage !== "Flee" && this.stage !== "Flee 2") {
                                    this.stage = "Evade";
                                }
                            }
                        }
                    } else if (!canChange) {
                        if (this.targetVisible) {
                            if (a[0] === "Move In" && this.stage !== "Flee 2" && this.stage !== "Attack 2" && this.stage !== "Evade 2" && this.stage !== "Attack 3") {
                                this.stage = "Move In";
                            } else if (a[0] === "Retreat" && this.stage !== "Flee 2" && this.stage !== "Attack 2" && this.stage !== "Evade 2" && this.stage !== "Attack 3") {
                                this.stage = "Retreat";
                            } else if (theDistance >= sq(this.moveRanges[2]) && theDistance <= this.moveRanges[0] && random(0, 10) >= 5 && round(this.timeAlive) % (this.changeInterval / (11 - this.skillReaction)) === 0) {
                                var theRand = random(0, 15), f1 = 1.5 - this.skillAggression / 10, f2 = 5 - this.skillAggression / 10, f3 = 8 - this.skillAggression / 10, f4 = 11.5;
                                if (theRand < f1) {
                                    this.stage = "Wait";
                                    this.changeInterval = round(random(0.5, 1) * (21 - this.skillAggression));
                                } else if (theRand < f2) {
                                    this.stage = "Evade 2";
                                    this.circleTime = 0;
                                    this.circleDirection = 0;   
                                    this.changeInterval = round(random(60, 120));
                                } else if (theRand < f3) {
                                    this.stage = "Flee 2";
                                    this.circleTime = 0;
                                    this.circleDirection = 0;   
                                    this.changeInterval = round(random(1, 2) * (11 - this.skillAggression) + random(75, 100));
                                } else if (theRand < f4) {
                                    this.stage = "Attack 2";
                                    this.moveRanges[2] = 20;
                                    this.changeInterval = round(random(0.5, 1) * (30 + this.skillAggression));
                                } else {
                                    this.stage = "Attack 3";
                                    this.changeInterval = round(random(0.5, 1) * (60 + this.skillAggression * 2));
                                    var rand = 100 - this.skillAggression * 2 + random(-10, 10), rand2 = random(360);
                                    this.moveLoc = [this.targetLoc[0] + rand * sin(rand2), this.targetLoc[1] + rand * cos(rand2)];
                                }
                                if (theRand < f3) {
                                    this.moveRanges[2] = 50;
                                }
                            }
                        } else {
                            this.stage = "Move In";
                        }
                    }
                    if (this.stage === "Attack" || this.stage === "Retreat" || this.stage === "Attack 2") {
                        if (this.stage !== "Attack 2") {
                            this.stage = a[0];
                            shouldMove = a[1];
                        } else {
                            shouldMove = true;
                        }
                        this.moveLoc = a[2];
                    } else if (this.stage === "Attack 3") {
                        shouldMove = true;
                    } else if (this.stage === "Flee" || this.stage === "Flee 2") {
                        this.circleTime += compensateFPS;
                        var targetDir = findDirection(this.targetLoc, [this.x, this.y], 5) || 0, a = absValue(-targetDir * 45 - 90, 360);
                        this.moveLoc = [this.x + this.width * sin(a), this.y + this.width * cos(a)];
                        if (!this.targetVisible) {
                            this.circleDirection += compensateFPS;
                        } else {
                            this.circleDirection = 0;
                        }
                        if (this.blockedOff[targetDir % 8] || (this.targetVisible && this.circleTime >= 100 * (11 - this.skillAggression) && this.stage === "Flee") || (!this.targetVisible && this.circleDirection > 10 * (11 - this.skillAggression) && this.stage === "Flee")) {
                            this.stage = "Move In";
                            this.circleDirection = 0;
                            this.circleTime = 0;
                        }
                        shouldMove = true;
                        if (theDistance > sq(this.sight * this.zoom / 2 - 50) && this.stage === "Flee 2") {
                            this.stage = "Evade 2";
                            this.circleDirection = 0;
                            this.circleTime = 0;
                            this.changeInterval = round(random(60, 120));
                        }
                    } else if (this.stage === "Evade" || this.stage === "Evade 2") {
                        var targetDir = findDirection(this.targetLoc, [this.x, this.y], 10), moveDir = this.targetDir; //// PROBLEM HERE!!! IT MUST SET THE TARGET DIRECTION TO ITS OWN COORDINATES
                        if (this.circleTime === 0) {
                            this.circleDirection = 2;
                            if (this.stage === "Evade 2" && random(0, 1) <= 0.5) {
                                this.circleDirection = 6;
                            }
                        }
                        if (this.blockedOff[moveDir] || (this.circleTime >= 10 * (11 - this.skillEvasion) && this.stage === "Evade") || (this.stage === "Evade" && !this.targetVisible && this.circleTime >= 10)) {
                            this.circleDirection = (this.circleDirection + 4) % 8;
                            this.circleTime = 0;
                            if (random(0, 10) < this.skillAggression / 2) {
                                this.stage = "Move In";
                                this.moveLoc = copyArray(this.targetLoc);
                            }
                        }
                        this.circleTime += compensateFPS;
                        shouldMove = true;
                        var a = absValue(-((targetDir + this.circleDirection) * 45) - 90, 360), b = this.width * 2;
                        if (this.stage !== "Move In") {
                            this.moveLoc = [this.x - (b * sin(a)), this.y - (b * cos(a))];
                        }
                    } else if (this.stage === "Recalling") {
                        if (theDistance > 2500) {
                            shouldMove = true;
                        } else {
                            this.stage = "Recalled";
                        }
                    } else if (this.stage === "Move In" || this.stage === "Pedestrian") {
                        if (this.stage === "Pedestrian") {
                            this.slowTime = 1;
                        }
                        if (!this.targetVisible) {
                            if (theDistance > 4) {
                                shouldMove = true;
                            }
                        } else {
                            this.stage = a[0];
                            shouldMove = a[1];
                            this.moveLoc = a[2];
                        }
                    }
                } else {
                    shouldMove = true;
                }
            }
            if (!shouldMove) {
                this.speed = 0;
                this.speed2 = 0;
            } else {
                var speed = walkAlgorithm(this, findDirection(this.moveLoc, [this.x, this.y], this.width / 2));
                this.speed2 = speed[0] * compensateFPS;
                this.speed = speed[1] * compensateFPS;
                if (this.slowTime > 0) {
                    this.speed *= 0.5;
                    this.speed2 *= 0.5;
                }
                this.x += this.speed2;
                this.y += this.speed;
            }
        }
    } else if (!this.dead) {
        var a = this.whichTurret;
        if (sq(this.x - a.x) + sq(this.y - a.y) > 9) {
            var b = -atan2(this.y - a.y, this.x - a.x) - 90;
            this.x += this.maxSpeed * sin(b);
            this.y += this.maxSpeed * cos(b);
        } else {
            if (this.maxSpeed !== 0) {
                this.switchWeapon("Turret");
                this.scope = this.whichTurret.scope;
            }
            this.whichTurret.update(this);
            if (this.NPC || (!this.NPC && pressed(commandKeys.scope) && !pressed(192) && this.canScope)) {
                this.accuracyMultiplier -= ((this.accuracyMultiplier - (0.5 * this.scopeAccuracy)) / 5) * compensateFPS;
            } else {
                this.accuracyMultiplier -= ((this.accuracyMultiplier - 1) / 5) * compensateFPS;
            }
        }
    }
    for (var i = 0; i < this.pushMomentum.length; i++) {
        if (this.onTurret) {
            this.whichTurret.leave(this, true);
        }
        this.stunTime = 1;
        var momentum = (this.pushMomentum[i][2] - this.pushMomentum[i][1]) * 0.1;
        if ((momentum <= 0.1 && momentum >= -0.1)) {
            this.pushMomentum.splice(i, 1);
        } else {
            var x = this.x + cos(this.pushMomentum[i][0]) * momentum, y = this.y + sin(this.pushMomentum[i][0]) * momentum;
            for (var j = 0; j < walls.length; j++) {
                if (walls[j].type[0] === "Rectangle") {
                    var a = rectSegment([walls[j].x, walls[j].y, walls[j].width + this.width, walls[j].height + this.width], [this.x, this.y, x, y], true);
                    if (a[2] !== "NO") {
                        x = a[a[2]][0];
                        y = a[a[2]][1];
                    }
                } else if (walls[j].type[0] === "Circle") {
                    var a = circleLine([walls[j].x, walls[j].y, walls[j].width + this.width], [this.x, this.y, x, y], true);
                    if (a[2] !== "NO") {
                        x = a[a[2]][0];
                        y = a[a[2]][1];
                    }
                }
            }
            this.x = x;
            this.y = y;
            this.pushMomentum[i][1] += momentum;
        }
    }
    if (this !== allies[0] || !noClip) {
        for (var i = 0; i < walls.length; i++) {
            collide(walls[i].type[0], walls[i].x, walls[i].y, walls[i].width, walls[i].height, this);
        }
    }
};
character.prototype.squadFormation = function() {
    if (this.NPC && this.arrayIn.length > 1) {
        for (var i = 0; i < this.arrayIn.length; i++) {
            if (this.arrayIn[i] !== this) {
                if (inBox(this.arrayIn[i].x, this.arrayIn[i].y, this.x, this.y, 400, 400) && seeTarget([this.x, this.y], [this.arrayIn[i].x, this.arrayIn[i].y]) && (this.arrayIn[i].whichSquad !== this.whichSquad || this.whichSquad === "NONE")) {
                    if (this.whichSquad !== "NONE" && this.arrayIn[i].whichSquad === "NONE") {
                        this.arrayIn[i].whichSquad = this.whichSquad;
                        this.whichSquad.members.push(this.arrayIn[i]);
                        this.arrayIn[i].whichSquad.assignPositions();
                    } else if (this.whichSquad === "NONE" && this.arrayIn[i].whichSquad !== "NONE") {
                        this.whichSquad = this.arrayIn[i].whichSquad;
                        this.whichSquad.members.push(this);
                        this.whichSquad.assignPositions();
                    } else if (this.whichSquad === "NONE" && this.arrayIn[i].whichSquad === "NONE") {
                        squads.push(construct(squad, [[this, this.arrayIn[i]]]));
                        this.whichSquad = squads[squads.length - 1];
                        this.arrayIn[i].whichSquad = this.whichSquad;
                        this.whichSquad.assignPositions();
                    } else {
                        this.whichSquad.merge(this.arrayIn[i].whichSquad);
                    }
                }
            }
        }
    }
};
character.prototype.rotate = function() {
    if (this.NPC || (!this.NPC && medButtonTime < 30 && grenadeButtonTime < 30)) {
        var current = this.rot, target, additionFactor = (8 / this.weight) * compensateFPS;
        if (!this.NPC) {
            target = atan2(MOUSEY - this.drawY, MOUSEX - this.drawX) - 90;
        } else {
            if ((this.warnTime <= 0 && this.warned) || this.stage === "Return") {
                if (this.target === "none") {
                    if (this.targetLoc[0] !== "none") {
                        target = atan2(this.targetLoc[1] - this.y, this.targetLoc[0] - this.x) - 90;
                    } else {
                        if (this.moveLoc[0] !== "NO") {
                            target = atan2(this.moveLoc[1] - this.y, this.moveLoc[0] - this.x) - 90;
                        }
                    }
                } else {
                    target = atan2(this.messUp2[1] + this.messUp[1] - this.y, this.messUp2[0] + this.messUp[0] - this.x) - 90;
                }
            }
        }
        if (this.slowTime > 0 || (pressed(commandKeys.scope) && (this.currentWeapon < 2 || this.onTurret) && !pressed(192) && !this.NPC && this.canScope)) {
            additionFactor = (4 / this.weight) * compensateFPS;
        } else {
            additionFactor = (8 / this.weight) * compensateFPS;
        }
        if (target !== undefined) {
            if (current - target >= 180) {
                target += 360;
            }
            if (current - target <= -180) {
                target -= 360;
            }
            if (this.rot > 360) {
                this.rot -= 360;
                current -= 360;
            }
            if (this.rot < -360) {
                this.rot += 360;
                current += 360;
            }
            if (current - target <= -additionFactor || current - target >= additionFactor) {
                if (current - target >= 0) {
                    this.rot -= additionFactor;
                } else {
                    this.rot += additionFactor;
                }
            } else {
                this.rot = target;
            }
        }
        if (this.gunCarrying === "Shoulder") {
            var playerToGunAngle = atan_1, gunX, gunY, targetGunRotation;
            if (!this.NPC) {
                gunX = this.drawX - ((squareRootGunDistance / this.zoom) * sin(playerToGunAngle - this.rot));
                gunY = this.drawY - ((squareRootGunDistance / this.zoom) * cos(playerToGunAngle - this.rot));
                targetGunRotation = ((atan2(MOUSEY - gunY, MOUSEX - gunX)) - this.rot) - 90;
            } else {
                if ((this.warnTime <= 0 && this.warned && this.targetLoc[0] !== "none" && this.target !== "none") || this.stage === "Pedestrian") {
                    gunX = this.x - (squareRootGunDistance * sin(playerToGunAngle - this.rot));
                    gunY = this.y - (squareRootGunDistance * cos(playerToGunAngle - this.rot));
                    targetGunRotation = (atan2((this.messUp[1] + this.messUp2[1]) - gunY, (this.messUp[0] + this.messUp2[0]) - gunX) - this.rot) - 90;
                } else {
                    targetGunRotation = -65;
                }
            }
            if (targetGunRotation !== undefined) {
                if (this.gunRotation - targetGunRotation >= 180) {
                    targetGunRotation += 360;
                }
                if (this.gunRotation - targetGunRotation <= -180) {
                    targetGunRotation -= 360;
                }
                if (this.gunRotation > 360) {
                    this.gunRotation -= 360;
                }
                if (this.gunRotation < -360) {
                    this.gunRotation += 360;
                }
                if (this.gunRotation >= -70) {
                    if ((this.reloading && this.currentReload > 0) || this.stage === "Pedestrian" || this.inMag === 0 || this.runTime >= 360 || (this.NPC && this.target === "none")) {
                        this.gunRotation += ((-65 - this.gunRotation) / 5) * compensateFPS;    
                    } else {
                        this.gunRotation -= ((this.gunRotation - targetGunRotation) / 5) * compensateFPS;
                    }
                }
                if (this.gunRotation < -70) {
                    this.gunRotation = -70;
                }
                if (this.gunRotation > 0) {
                    this.gunRotation = 0;
                }
            }
        } else {
            this.gunRotation += (-this.gunRotation / 5) * compensateFPS;
        }
    }
};
character.prototype.findTarget = function() {
    if (this.NPC) {
        if (this.target.dead) {
            this.stage = "Attack";
            this.target = "none";
            this.circleTime = 0;
            this.circleDirection = 0;
            this.targetLoc = ["none", "none"];
            if (freePlay) {
                this.movePath.clear();
                this.moveLoc = ["NO", "NO"];
                findMove(this);
            }
        }
        if (this.side !== "neutral" && ((this.skillReaction < 10 && round(this.timeAlive) % ceil((10 - this.skillReaction) * compensateFPS) === 0) || this.skillReaction === 10)) {
            getTarget(this);
        }
    }
};
character.prototype.findTargetDirection = function() {
    if (this.NPC && this.moveLoc[0] !== "NO" && this.targetVisible) {
        var closeInRange = 0;
        if (!(this.target.side === "ally" || this.target.side === "enemy")) {
            closeInRange = 20;
        }
        var x = this.moveLoc[0];
        var y = this.moveLoc[1];
        this.targetDir = findDirection([x, y], [this.x, this.y], 10 + (this.width / 2));
    }
};
character.prototype.runContingency = function() {
    if (this.NPC && this.contingency && !this.onTurret) {
        var addition = this.width * compensateFPS, done = false, x2, y2, add2 = this.width;
        if (this.crawlers.length <= 0 && this.contingencyPathToFollow === "NONE") {
            var targetDir = findDirection(this.targetLoc, [this.x, this.y], addition), f = checkAround(targetDir, addition);
            if (seeTarget([this.x, this.y], f, undefined, add2)) {
                this.crawlers.push(construct(crawler, [this.x, this.y, this.targetDir, [[this.x, this.y]]]));
            } else {
                var checkingRot, checkingRot2, theRot = targetDir;
                for (var j = 1; j < 4; j++) {
                    checkingRot = absValue(theRot + j, 8);
                    f = checkAround(checkingRot, addition);
                    x2 = f[0] + a.x;
                    y2 = f[1] + a.y;
                    if (seeTarget([a.x, a.y], [x2, y2], undefined, add2)) {
                        j = 4;
                        this.crawlers.push(construct(crawler, [this.x, this.y, checkingRot, [[this.x, this.y]]]));
                    }
                }
                for (var j = 1; j < 4; j++) {
                    checkingRot2 = absValue(theRot - j, 8);
                    f = checkAround(checkingRot2, addition);
                    x2 = f[0] + a.x;
                    y2 = f[1] + a.y;
                    if (seeTarget([a.x, a.y], [x2, y2], undefined, add2)) {
                        j = 4;
                        this.crawlers.push(construct(crawler, [this.x, this.y, checkingRot2, [[this.x, this.y]]]));
                    }
                }
            }
        }
        for (var i = 0; i < this.crawlers.length; i++) {
            var deleted = false, a = this.crawlers[i];
            if (sq(a.x - this.moveLoc[0]) + sq(a.y - this.moveLoc[1]) >= sq(addition + 1)) {
                var theRot = findDirection(this.moveLoc, [a.x, a.y], addition);
                if (!isNaN(theRot)) {
                    var f = checkAround(theRot, addition), x2 = f[0] + a.x, y2 = f[1] + a.y;
                    if (!seeTarget([a.x, a.y], [x2, y2], undefined, add2)) {
                        if (theRot === a.rot) {
                            var checkingRot, checkingRot2, aDone = false, bDone = false;
                            for (var j = 1; j < 4; j++) {
                                checkingRot = absValue(theRot + j, 8);
                                f = checkAround(checkingRot, addition);
                                x2 = f[0] + a.x;
                                y2 = f[1] + a.y;
                                if (seeTarget([a.x, a.y], [x2, y2], undefined, add2)) {
                                    j = 4;
                                    aDone = true;
                                }
                            }
                            for (var j = 1; j < 4; j++) {
                                checkingRot2 = absValue(theRot - j, 8);
                                f = checkAround(checkingRot2, addition);
                                x2 = f[0] + a.x;
                                y2 = f[1] + a.y;
                                if (seeTarget([a.x, a.y], [x2, y2], undefined, add2)) {
                                    j = 4;
                                    bDone = true;
                                }
                            }
                            this.crawlers[i].allNodes.push([a.x, a.y]);
                            if (aDone) {
                                this.crawlers.push(construct(crawler, [a.x, a.y, checkingRot, copyArray(this.crawlers[i].allNodes)]));
                            }
                            if (bDone) {
                                this.crawlers.push(construct(crawler, [a.x, a.y, checkingRot2, copyArray(this.crawlers[i].allNodes)]));
                            }
                            this.crawlers.splice(i, 1);
                            i--;
                            deleted = true;
                        } else {
                            var checkingRot, multiplier = (loopDif(theRot, a.rot, 8)[1] === "r" ? 1 : -1), atLeastOne = false;
                            for (var j = 1; j < 4; j++) {
                                checkingRot = absValue(theRot + j * multiplier, 8);
                                f = checkAround(checkingRot, addition);
                                x2 = f[0] + a.x;
                                y2 = f[1] + a.y;
                                if (seeTarget([a.x, a.y], [x2, y2], undefined, add2)) {
                                    j = 4;
                                    if (checkingRot !== a.rot) {
                                        this.crawlers[i].rot = checkingRot;
                                        this.crawlers[i].allNodes.push([a.x, a.y]);
                                    }
                                    this.crawlers[i].x = x2;
                                    this.crawlers[i].y = y2;
                                    atLeastOne = true;
                                }
                            }
                            if (!atLeastOne) {
                                this.crawlers.splice(i, 1);
                                i--;
                                deleted = true;
                            }
                        }
                    } else {
                        if (a.rot !== theRot) {
                            this.crawlers[i].allNodes.push([a.x, a.y]);
                            this.crawlers[i].rot = theRot;
                        }
                        this.crawlers[i].x = x2;
                        this.crawlers[i].y = y2;
                    }
                } else {
                    done = true;
                }
            }
            if (!deleted) {
                if (a.allNodes.length > 100) {
                    this.crawlers.splice(i, 1);
                    i--;
                } else {
                    if (sq(a.x - this.moveLoc[0]) + sq(a.y - this.moveLoc[1]) < sq(addition * 2) || done) {
                        this.contingencyPathToFollow = copyArray(this.crawlers[i].allNodes);
                        this.contingencyPathToFollow.push([this.crawlers[i].x, this.crawlers[i].y]);
                        this.crawlers.clear();
                    }
                }
            }
        }
        if (this.contingencyPathToFollow !== "NONE" && this.crawlers.length <= 0 && this.contingency) {
            var x = this.contingencyPathToFollow[0][0], y = this.contingencyPathToFollow[0][1], addition = this.width + 10;
            if (inBox(this.x, this.y, x, y, addition, addition)) {
                this.contingencyPathToFollow.splice(0, 1);
                if (this.contingencyPathToFollow.length <= 0) {
                    x = this.moveLoc[0];
                    y = this.moveLoc[1];
                    this.contingencyPathToFollow = "NONE";
                    this.contingency = false;
                } else {
                    x = this.contingencyPathToFollow[0][0];
                    y = this.contingencyPathToFollow[0][1];
                }
            }
            this.moveLoc = [x, y];
            this.targetLoc = [x, y];
        }
        if (devMode) {
            stroke(255, 0, 0);
            for (var i = 0; i < this.crawlers.length; i++) {
                for (var j = 0; j < this.crawlers[i].allNodes.length; j++) {
                    if (j === this.crawlers[i].allNodes.length - 1) {
                        line(this.crawlers[i].allNodes[j][0], this.crawlers[i].allNodes[j][1], this.crawlers[i].x, this.crawlers[i].y);
                    } else {
                        line(this.crawlers[i].allNodes[j][0], this.crawlers[i].allNodes[j][1], this.crawlers[i].allNodes[j + 1][0], this.crawlers[i].allNodes[j + 1][1]);
                    }
                }
            }
            stroke(0, 255, 0);
            if (this.contingencyPathToFollow !== "NONE" && this.contingency) {
                for (var j = 0; j < this.contingencyPathToFollow.length - 1; j++) {
                    var a = copyArray(this.contingencyPathToFollow);
                    line(a[j][0], a[j][1], a[j + 1][0], a[j + 1][1]);
                }
            }
        }
    } else if (this.NPC && !this.contingency) {
        this.crawlers.clear();
        this.contingencyPathToFollow = "NONE";
    }
};
character.prototype.getAlerted = function() {
    if (this.NPC) {
        if (this.warnTime > this.fullWarn) {
            this.warnTime = this.fullWarn;
        }
        if (this.warned && this.stage !== "Return") {
            this.warnTime -= compensateFPS;
        }
        this.stunTime -= compensateFPS;
        if (this.stunType === "Confused" && this.gettingShot > 0) {
            this.stunTime = 0;
        }
        if (this.stunTime > 0) {
            this.warnTime = compensateFPS;
        }
        if (this.stage === "Return") {
            this.warnTime = this.fullWarn / 2;
        }
        if (this.gettingShot > 0) {
            this.warned = true;
            this.warnTime = 0;
            this.stage = "Evade";
        }
    } else {
        this.stunTime -= compensateFPS;
        if (this.stunTime <= 20) {
            this.inSmoke = false;
        }
    }
};
character.prototype.detectWall = function() {
    if (this.NPC && !this.onTurret) {
        var addition = (this.maxSpeed * 12) + (this.width / 2);
        if (this.contingency) {
            addition = (this.maxSpeed * 6) + (this.width / 2);
        }
        var inside = false, f = checkAround(frameCount, addition), x = this.x + f[0], y = this.y + f[1];
        var Line = [this.x, this.y, x, y];
        if (!seeTarget([this.x, this.y], [x, y])) {
            inside = true;
        }
        if (!inside) {
            this.blockedOff[frameCount % 8] = false;
        } else {
            this.blockedOff[frameCount % 8] = true;
        }
    }
};
character.prototype.targetPoint = function() {
    if (this.NPC) {
        var x = this.targetLoc[0], y = this.targetLoc[1], reac = 120 + (12 * (11 - (this.skillReaction >= 2 ? this.skillReaction : 2))), messed = 2 / this.skillAim, distFromEnemy = dist(this.x, this.y, x, y);
        if (x !== "none" && this.target !== "none" && this.targetVisible && this.NPC) {
            if ((this.speed !== 0 || this.speed2 !== 0) || (this.target.speed !== 0 || this.target.speed2 !== 0)) {
                if (round(this.timeAlive) % reac === 0 || ((this.messUp[0] - x > 10 || this.messUp[0] - x < - 10 || this.messUp[1] - y > 10 || this.messUp[1] - y < -10) && round(reac / 4) % 60 === 0)) {
                    var a = 5 + 30 / this.skillAim, rand = -atan2(y - this.y, x - this.x) + 90 + random(-a, a);
                    this.messUp = [(this.x + distFromEnemy * sin(rand)) - x, (this.y + distFromEnemy * cos(rand)) - y];
                }
            } else {
                if (round(this.timeAlive) % reac === 0 || ((this.messUp[0] - x > 10 || this.messUp[0] - x < - 10 || this.messUp[1] - y > 10 || this.messUp[1] - y < -10) && round(reac / 4) % 60 === 0)) {
                    var a = 3 + 20 / this.skillAim, rand = -atan2(y - this.y, x - this.x) + 90 + random(-a, a);
                    this.messUp = [(this.x + distFromEnemy * sin(rand)) - x, (this.y + distFromEnemy * cos(rand)) - y];
                }
            }
            if (round(this.timeAlive) % round(30 / this.skillReaction) === 0) {
                this.messUp2 = [this.target.x, this.target.y];
            }
        }
    }
};
character.prototype.shoot = function() {
    this.slowTime -= compensateFPS;
    if (this.currentWeapon === 0 || this.currentWeapon === 1 || this.onTurret) {
        // (1) PRE-SHOOTING CALCULATIONS {
        this.gunX = this.x - (this.distToGun * sin(-(this.angleToGun + this.rot)));
        this.gunY = this.y - (this.distToGun * cos(-(this.angleToGun + this.rot)));
        this.currentFire -= compensateFPS;
        var theAngleToTarget;
        var plannedAngle;
        var ANGLEZ;
        var ROTASEAN;
        if (this.NPC && this.targetLoc[0] !== "none") {
            var x = (this.messUp[0] + this.messUp2[0]), y = (this.messUp[1] + this.messUp2[1]);
            theAngleToTarget = absValue(atan2(y - this.y, x - this.x) - 90, 360);
            plannedAngle = absValue(((atan2(this.gunY - y, this.gunX - x) - this.rot) % 360) + 90, 360);
            ROTASEAN = absValue(this.gunRotation, 360);
            ANGLEZ = absValue(plannedAngle - ROTASEAN, 360);
        }
        //}
        // (2) FIRING {
        if (((this.NPC || (!this.NPC && scene !== "cinematic" && !this.healing)) && this.currentFire <= 0 && this.inMag > 0 && this.canFire && (((pressed(commandKeys.attack) || this.firingBurst) && !this.NPC) || ((this.target !== "none" || this.firingBurst) && this.NPC && theAngleToTarget > absValue(this.rot, 360) - 30 && theAngleToTarget < absValue(this.rot, 360) + 30 && (ANGLEZ > 350 || ANGLEZ < 10) && (this.stunTime <= 0 || this.stunType !== "Confused") && this.stage !== "Flee" && this.stage !== "Flee 2" && this.warnTime <= 0 && this.targetVisible)))) {
            if (!this.reloading) {
                if (this.spool === "NONE" || this.spool <= 0) {
                    this.inMag--;
                    this.runningTime = 0;
                    this.shooting = true;
                    if ((this.fireMode === "Burstfire" || this.fireMode === "Semi-Auto")) {
                        this.firingBurst = true;
                    }
                    // Checking whether the gun is in a wall {
                    var baseX, baseY, compensateWidth = this.width / 20;
                    if (this.gunCarrying === "Shoulder") {
                        baseX = this.x - ((compensateWidth * 8) * sin(-(270 + this.rot)));
                        baseY = this.y - ((compensateWidth * 8) * cos(-(270 + this.rot)));
                    } else {
                        baseX = this.x - ((compensateWidth * 2) * sin(-(180 + this.rot)));
                        baseY = this.y - ((compensateWidth * 2) * cos(-(180 + this.rot)));
                    }
                    var addNumber = (this.gunCarrying === "Shoulder") ? 11 : 13;
                    var recoilEffect = -this.gunDrawRecoil + addNumber;
                    var gunX = baseX - (recoilEffect * sin(-(180 + this.rot)));
                    var gunY = baseY - (recoilEffect * cos(-(180 + this.rot)));
                    var gun_X = this.x - (this.Gun2[2] * sin(-(this.angleToGun2 + this.rot)));    
                    var gun_Y = this.y - (this.Gun2[2] * cos(-(this.angleToGun2 + this.rot)));
                    var spawnX = gunX - (this.gunPlayerDistance * sin(-(this.gunPlayerAngle + this.rot + this.gunRotation)));
                    var spawnY = gunY - (this.gunPlayerDistance * cos(-(this.gunPlayerAngle + this.rot + this.gunRotation)));
                    var recoil = this.currentRecoil;
                    var trailOn = true;
                    var damageWho = ["NONE", 0];
                    if (trailOn) {
                        if (this.side !== "enemy") {
                            for (var i = 0; i < enemies.length; i++) {
                                if (enemies[i] !== this && trailOn) {
                                    if (enemies[i].meleeCanShield && (enemies[i].currentWeapon === 2 || enemies[i].storeWeapon !== "NONE")) {
                                        for (var j = 0; j < enemies[i].damageWireFrame.length - 1; j++) {
                                            var a = enemies[i].damageWireFrame;
                                            var collide = findIntersect([a[j][0], a[j][1], a[j + 1][0], a[j + 1][1]], [gunX, gunY, spawnX, spawnY]);
                                            var x = collide[0], y = collide[1];
                                            if (x !== "NO" && y !== "NO") {
                                                trailOn = false;
                                            }
                                        }
                                    }
                                }
                                if (enemies[i] !== this && trailOn) {
                                    var collide = circleLine([enemies[i].x, enemies[i].y, enemies[i].width], [gunX, gunY, spawnX, spawnY], true);
                                    var BOB_IS_MY_HERO = collide[2];
                                    var NO_ROB_IS = collide[BOB_IS_MY_HERO] || ["NO", "NO"];
                                    var x = NO_ROB_IS[0];
                                    var y = NO_ROB_IS[1], woundAngle;
                                    if (x !== "NO") {
                                        spawnX = x;
                                        spawnY = y;
                                        recoil = 0;
                                        trailOn = false;
                                        damageWho = ["enemy", i];
                                        woundAngle = atan2(enemies[i].y - y, enemies[i].x - x) + 180;
                                        enemies[i].wounds.push([woundAngle, 30]);
                                        enemies[i].gettingShot = enemies[i].GSmax;
                                        i = enemies.length;
                                    }
                                }
                            }
                        }
                        if (trailOn && this.side !== "ally") {
                            for (var i = 0; i < allies.length; i++) {
                                if (allies[i] !== this && trailOn) {
                                    if (allies[i].meleeCanShield && (allies[i].currentWeapon === 2 || allies[i].storeWeapon !== "NONE")) {
                                        for (var j = 0; j < allies[i].damageWireFrame.length - 1; j++) {   
                                            var a = allies[i].damageWireFrame;
                                            var collide = findIntersect([a[j][0], a[j][1], a[j + 1][0], a[j + 1][1]], [gunX, gunY, spawnX, spawnY]);
                                            var x = collide[0], y = collide[1];
                                            if (x !== "NO" && y !== "NO") {
                                                trailOn = false;
                                            }
                                        }
                                    }
                                }
                                if (enemies[i] !== this && trailOn) {
                                    var collide = circleLine([allies[i].x, allies[i].y, allies[i].width], [gunX, gunY, spawnX, spawnY], true);
                                    var BOB_IS_MY_HERO = collide[2];
                                    var NO_ROB_IS = collide[BOB_IS_MY_HERO] || ["NO", "NO"];  
                                    var x = NO_ROB_IS[0];
                                    var y = NO_ROB_IS[1], woundAngle;
                                    if (x !== "NO") {
                                        spawnX = x;
                                        spawnY = y;
                                        recoil = 0;
                                        trailOn = false;
                                        damageWho = ["ally", i];
                                        woundAngle = atan2(allies[i].y - y, allies[i].x - x) + 180;
                                        allies[i].wounds.push([woundAngle, 30]);
                                        allies[i].gettingShot = allies[i].GSmax;
                                        i = enemies.length;
                                    }
                                }
                            }
                        }
                    }
                    for (var i = 0; i < walls.length; i++) {
                        if (walls[i].barrier) {
                            if (walls[i].type[0] === "Rectangle") {
                                var collide = rectSegment([walls[i].x, walls[i].y, walls[i].width, walls[i].height], [gun_X, gun_Y, spawnX, spawnY])[0];
                                if (collide[0] !== "NO") {
                                    spawnX = gun_X;
                                    spawnY = gun_Y;
                                    recoil = 0;
                                    trailOn = false;
                                    damageWho[0] = "NONE";
                                    walls[i].health -= this.bulletDamage * this.weapon.bullet.flechettes;
                                    debriz.push(construct(debris, [collide[0], collide[1], 40, walls[i].color]));
                                }
                            } else {
                                if (sq(walls[i].x - spawnX) + sq(walls[i].y - spawnY) <= sq(walls[i].width / 2)) {
                                    spawnX = gun_X;
                                    spawnY = gun_Y;
                                    recoil = 0;
                                    trailOn = false;
                                    damageWho[0] = "NONE";
                                    walls[i].health -= this.bulletDamage * this.weapon.bullet.flechettes;
                                    var a = atan2(spawnY - walls[i].y, spawnX - walls[i].x);
                                    debriz.push(construct(debris, [cos(a) * walls[i].width / 2, sin(a) * walls[i].width / 2, 40, walls[i].color]));
                                }
                                if (trailOn) {
                                    if (sq(walls[i].x - gun_X) + sq(walls[i].y - gun_Y) <= sq(walls[i].width / 2)) {
                                        spawnX = gun_X;
                                        spawnY = gun_Y;
                                        recoil = 0;
                                        trailOn = false;
                                        damageWho[0] = "NONE";
                                        walls[i].health -= this.bulletDamage * this.weapon.bullet.flechettes;
                                        var a = atan2(gun_X - walls[i].y, gun_Y - walls[i].x);
                                        debriz.push(construct(debris, [cos(a) * walls[i].width / 2, sin(a) * walls[i].width / 2, 40, walls[i].color]));
                                    }
                                }
                                if (trailOn) {
                                    if (sq(walls[i].x - gunX) + sq(walls[i].y - gunY) <= sq(walls[i].width / 2)) {
                                        spawnX = gun_X;
                                        spawnY = gun_Y;
                                        recoil = 0;
                                        trailOn = false;
                                        damageWho[0] = "NONE";
                                        walls[i].health -= this.bulletDamage * this.weapon.bullet.flechettes;
                                        var a = atan2(gunY - walls[i].y, gunX - walls[i].x);
                                        debriz.push(construct(debris, [cos(a) * walls[i].width / 2, sin(a) * walls[i].width / 2, 40, walls[i].color]));
                                    }
                                }
                            }
                        }
                    }
                    if (damageWho[0] !== "NONE") {
                        spawnX = gun_X;
                        spawnY = gun_Y;
                        if (damageWho[0] === "enemy") {
                            enemies[damageWho[1]].health -= dealDamage(this.bulletDamage * this.weapon.bullet.flechettes, enemies[damageWho[1]]);
                            enemies[damageWho[1]].stunTime += this.gunStun;
                            if (enemies[damageWho[1]].target === "none") {
                                enemies[damageWho[1]].targetLoc = copyArray(this.og);
                            }
                        } else if (damageWho[0] === "ally" && (damageWho[1] !== 0 || (damageWho[1] === 0 && !godMode))) {
                            allies[damageWho[1]].health -= dealDamage(this.bulletDamage * this.weapon.bullet.flechettes, allies[damageWho[1]]);
                            allies[damageWho[1]].stunTime += this.gunStun;
                            if (allies[damageWho[1]].NPC && allies[damageWho[1]].target === "none") {
                                allies[damageWho[1]].targetLoc = copyArray(this.og);
                            }
                        }
                    }
                    //}
                    var explosionOn = trailOn ? 1 : 0;
                    if (this.NPC) {
                        if (guns[this.weapons[this.currentWeapon]].type === "Shotgun") {
                            recoil *= gameVars.dMult / 3;
                        } else {
                            recoil *= gameVars.dMult;
                        }
                    }
                    for (var i = 0; i < this.weapon.bullet.flechettes; i++) {
                        bullets.push(construct(bullet, [spawnX, spawnY, (this.gunRotation + (this.rot + 180)) + random(-(recoil / 2) * this.accuracyMultiplier, (recoil / 2) * this.accuracyMultiplier), [this.bulletVelocity, this.weapon.ammo, this.weapon.bullet.range, this.bulletDamage, trailOn, this.bulletExplode * explosionOn, this.side, this.gunStun]]));
                    }
                    if (this.side !== "enemy") {
                        for (var i = 0; i < enemies.length; i++) {
                            if (sq(enemies[i].x - this.x) + sq(enemies[i].y - this.y) < sq(this.noise * 100)) {
                                var moveToRot = atan2(enemies[i].y - this.y, enemies[i].x - this.x);
                                if (enemies[i].NPC && enemies[i].target === "none") {
                                    enemies[i].warned = true;
                                    //enemies[i].targetLoc = [enemies[i].x + 30 * cos(moveToRot + 180), enemies[i].y + 30 * sin(moveToRot + 180)];
                                    enemies[i].targetLoc = [this.x, this.y];
                                    if (seeTarget([enemies[i].x, enemies[i].y], [this.x, this.y])) {
                                        enemies[i].moveLoc = [this.x, this.y];
                                        enemies[i].stage = "Move In";
                                    }
                                } else {
                                    enemies[i].hearShotsFrom.push([moveToRot - 90, 30]);
                                }
                            }
                        }
                    } else {
                        for (var i = 0; i < allies.length; i++) {
                            if (sq(allies[i].x - this.x) + sq(allies[i].y - this.y) < sq(this.noise * 100)) {
                                var moveToRot = atan2(allies[i].y - this.y, allies[i].x - this.x);
                                if (allies[i].NPC && allies[i].target === "none") {
                                    allies[i].warned = true;
                                    //allies[i].targetLoc = [allies[i].x + 30 * cos(moveToRot + 180), allies[i].y + 30 * sin(moveToRot + 180)];
                                    allies[i].targetLoc = [this.x, this.y];
                                    if (seeTarget([allies[i].x, allies[i].y], [this.x, this.y])) {
                                        allies[i].moveLoc = [this.x, this.y];
                                        allies[i].stage = "Move In";
                                    }
                                } else {
                                    allies[i].hearShotsFrom.push([moveToRot - 90, 30]);
                                }
                            }
                        }
                    }
                    this.muzzleFlashTime = 1;
                    this.currentFire = this.fireDelay;
                    this.slowTime = this.currentFire + 1;
                    this.nextRecoil += this.recoil;
                    this.gunDrawRecoilNext += this.recoil;
                    var knockback = constrain(this.recoil * 5, 1, 10);
                    this.gunRotation += random(-knockback, knockback);
                    if (this.fireMode === "Burstfire" || this.fireMode === "Semi-Auto") {
                        this.burstsLeft--;
                    }
                    if (this.fireMode === "Semi-Auto" && this.NPC) {
                        if (this.inMag > 0) {
                            this.currentFire = this.fireDelay + random(0, 5) + (random(0, 10) / this.skillAim);
                        } else {
                            this.currentFire = this.fireDelay;
                        }
                    }
                } else if (this.spool !== "NONE" && (!this.onTurret || (this.onTurret && this.maxSpeed === 0))) {
                    this.spool -= compensateFPS;
                }
            } else {
                if (this.reloading && this.reloadType === "Round-by-Round") {
                    this.reloading = false;
                    if (this.gunCarrying === "Shoulder") {
                        this.currentFire = 10;
                    } else {
                        this.currentFire = 1;
                    }
                }
            }
        } else {
            if (this.spool < this.spoolMax && this.spool !== "NONE" && this.currentFire <= 0) {    
                this.spool = constrain(this.spool + compensateFPS, 0, this.spoolMax);
            }
        }
        //}
        // (3) RECOIL/MISC. {
        if (this.nextRecoil > this.currentRecoil) {
            this.currentRecoil += ((this.nextRecoil - this.currentRecoil) / 2) * compensateFPS;
        } else {
            this.currentRecoil += ((this.nextRecoil - this.currentRecoil) / 5) * compensateFPS;
        }
        if (this.gunDrawRecoilNext > this.gunDrawRecoil) {
            this.gunDrawRecoil += ((this.gunDrawRecoilNext - this.gunDrawRecoil) / 2) * compensateFPS;
        } else {
            this.gunDrawRecoil += ((this.gunDrawRecoilNext - this.gunDrawRecoil) / 5) * compensateFPS;
        }
        if (this.reloading || this.inMag <= 0) {
            this.firingBurst = false;
            this.canFire = true;
        }
        if ((this.fireMode === "Burstfire" || this.fireMode === "Semi-Auto") && this.burstsLeft === 0) {
            this.canFire = false;
            this.shooting = false;
            this.firingBurst = false;
        }
        if (((!pressed(commandKeys.attack) && !this.NPC) || this.NPC) && (this.burstsLeft > 0 || this.fireMode === "Full-Auto") && this.currentFire <= 0) {
            this.canFire = true;
        }
        if ((this.fireMode === "Burstfire" || this.fireMode === "Semi-Auto") && this.burstsLeft <= 0 && this.currentFire <= 0 && this.inMag > 0) {
            this.burstsLeft = this.burst;
            if (this.fireMode === "Burstfire") {
                this.currentFire = this.fireDelay * this.burst;
                if (this.NPC) {
                    this.currentFire = (this.fireDelay * this.burst) + random(0, 15);
                }
            }
        }
        var timeAfterShot = 10;
        if (this.currentFire <= 0 || (this.currentFire <= this.fireDelay - timeAfterShot && (this.fireMode === "Full-Auto" || this.fireMode === "Semi-Auto" || (this.fireMode === "Burstfire" && this.burstsLeft !== this.burst))) || (this.currentFire <= (this.fireDelay * this.burst) - timeAfterShot && this.fireMode === "Burstfire" && this.burstsLeft === this.burst)) {
            if (this.nextRecoil > this.veer) {
                this.nextRecoil /= 1.1;
            }
            if (this.gunDrawRecoilNext > 0) {
                this.gunDrawRecoilNext /= 1.1;
            }
        }
        if (this.currentRecoil > this.maxRecoil) {
            this.currentRecoil = this.maxRecoil;
        }
        if (this.nextRecoil > this.maxRecoil) {
            this.nextRecoil = this.maxRecoil;
        }
        if (this.currentRecoil < this.veer) {
            this.currentRecoil = this.veer;
        }
        if (this.nextRecoil < this.veer) {
            this.nextRecoil = this.veer;
        }
        if (this.gunDrawRecoilNext < 0) {
            this.gunDrawRecoilNext = 0;
        }
        if (this.spool > this.spoolMax) {
            this.spool = this.spoolMax;
        }
        //}
    }
};
character.prototype.checkRounds = function() {
    var haveRounds = 0;
    if (this.NPC) {
        haveRounds = this.mag;
    } else {
        for (var i = 0; i < this.inventory.length; i++) {
            var a = this.inventory[i];
            if (a[1] === "Ammo" && a[0] === this.ammo) {
                haveRounds += a[2];
            }
        }
    }
    return constrain(haveRounds, 0, this.mag);
};
character.prototype.reloadGun = function() {
    if (!this.NPC) {
        this.currentReload -= compensateFPS;
        if ((pressed(commandKeys.reload) || this.inMag <= 0) && !this.reloading && !this.healing && this.inMag !== this.mag && this.currentFire <= 0) {
            var canReload = false;
            if (!this.autoReloading) {
                for (var i = 0; i < this.inventory.length; i++) {
                    var a = this.inventory[i];
                    if (a[1] === "Ammo" && a[0] === this.ammo) {
                        canReload = true;
                    }
                }
            }
            if (canReload || this.autoReloading) {
                if (this.reloadType !== "Round-by-Round") {
                    this.currentReload = this.reload;
                } else {
                    var a = this.checkRounds();
                    this.currentReload = this.reload * constrain(this.mag - this.inMag, 0, a) / this.mag;
                }
                this.reloading = true;
                this.firingBurst = false;
                this.burstsLeft = this.burst;
            }
        }
        if (this.currentReload <= 0 && this.reloading && this.reloadType !== "Round-by-Round") {
            this.reloading = false;
            var b = 0;
            if (this.autoReloading) {
                b = this.mag;
            } else {
                for (var i = this.inventory.length - 1; i >= 0; i--) {
                    var a = this.inventory[i];
                    if (a[1] === "Ammo" && a[0] === this.ammo) {
                        if (a[2] >= (this.mag - this.inMag) - b) {
                            this.inventory[i][2] -= (this.mag - this.inMag) - b;
                            if (this.inventory[i][2] === 0) {
                                this.inventory[i][0] = "EMPTY";
                                this.inventory[i][1] = "EMPTY";
                                this.inventory[i][2] = "EMPTY";
                            }
                            b = this.mag;
                            i = -1;
                        } else {
                            b += a[2];
                            this.inventory[i][0] = "EMPTY";
                            this.inventory[i][1] = "EMPTY";
                            this.inventory[i][2] = "EMPTY";
                        }
                    }
                }
            }
            this.inMag = b;
            if (this.fireMode !== "Full-Auto") {
                this.burstsLeft = this.burst;
            }
        }
        if (this.reloadType === "Round-by-Round" && this.reloading) {
            var a = this.reload - this.currentReload;
            for (var i = 0; i < this.reload; i += (this.reload / this.mag)) {
                if (a >= i && this.inMag <= (this.mag * (a / this.reload)) - 1) {
                    if (this.autoReloading) {
                        this.inMag++;
                    } else {
                        for (var i = this.inventory.length - 1; i >= 0; i--) {
                            var a = this.inventory[i];
                            if (a[1] === "Ammo" && a[0] === this.ammo) {
                                this.inventory[i][2]--;
                                this.inMag++;
                                if (a[2] <= 0) {
                                    this.inventory[i][0] = "EMPTY";
                                    this.inventory[i][1] = "EMPTY";
                                    this.inventory[i][2] = "EMPTY";
                                }
                                i = -1;
                            }
                        }
                    }
                }
            }
            if (this.currentReload <= 0) {
                this.reloading = false;
            }
            if (this.fireMode !== "Full-Auto") {
                this.burstsLeft = this.burst;
            }
        }
    } else {
        this.currentReload -= compensateFPS;
        if (this.inMag <= 0 && !this.reloading && this.inMag !== this.mag && this.currentFire <= 0) {
            if (this.reloadType === "Round-by-Round") {
                var a = this.checkRounds();
                this.currentReload = this.reload * a / this.mag;
            } else {
                this.currentReload = this.reload;
            }
            this.reloading = true;
            this.firingBurst = false;
            this.burstsLeft = this.burst;
        }
        if (this.currentReload <= 0 && this.reloading) {
            this.reloading = false;
            this.inMag = this.mag;
            if (this.fireMode !== "Full-Auto") {
                this.burstsLeft = this.burst;
            }
        }
    }
};
character.prototype.throwGrenade = function() {
    if (this.currentWeapon === 3 && !this.healing) {
        this.reload -= compensateFPS;
        if (pressed(commandKeys.attack) && this.reload <= 0) {
            this.grenadePulled = true;
        }
        if (!pressed(commandKeys.attack) && this.grenadePull >= 29.9 && this.grenadePulled) {
            this.reload = 30;
            this.grenadePulled = false;
            this.allGrenades[this.bombSelect][1]--;
            for (var i = this.inventory.length - 1; i >= 0; i--) {
                var b = this.inventory[i];
                if (b[1] === "Grenade" && b[0] === this.allGrenades[this.bombSelect][0]) {
                    this.inventory[i][2]--;
                    if (this.inventory[i][2] === 0) {
                        this.inventory[i][0] = "EMPTY";
                        this.inventory[i][1] = "EMPTY";
                        this.inventory[i][2] = "EMPTY";
                    }
                }
            }
            var compensateWidth = this.width / 20;
            var x = (grenadeDistance * compensateWidth * sin(-(grenadeRot + this.rot))), y = (grenadeDistance * compensateWidth * cos(-(grenadeRot + this.rot))), throwDistance = (dist(MOUSEX, MOUSEY, this.drawX - x, this.drawY - y) * this.zoom) * 0.1;
            if (throwDistance >= 50) {
                throwDistance = 50;
            }
            bombs.push(construct(bomb, [this.x - x, this.y - y, (this.rot + 180) + random(-5, 5), throwDistance, this.allGrenades[this.bombSelect][0]]));
            if (this.allGrenades[this.bombSelect][1] <= 0) {
                this.allGrenades.splice(this.bombSelect, 1);
            }
            if (this.allGrenades[this.bombSelect] === undefined && this.allGrenades.length > 0) {
                this.bombSelect = 0;
            }
        }
        if (this.grenadePulled) {
            this.grenadePull += ((30 - this.grenadePull) / 5) * compensateFPS;
        } else {
            this.grenadePull += (-this.grenadePull / 5) * compensateFPS;
        }
        if (this.allGrenades.length <= 0) {
            this.currentWeapon = 2;
            this.reload = 0;
            this.readyMelee();
        }
    } else {
        this.grenadePull = 0;
    }
};
character.prototype.useMeds = function() {
    if (this.healing && !this.onTurret) {
        this.slowTime = 1;
        if (this.currentReload <= 0) {
            var a = medical[this.allMeds[this.usingMed][0]];
            if (a.type === "Adrenaline") {
                this.stim = constrain(this.stim + a.give, 0, 100);
            } else if (a.type === "Health") {
                this.health = constrain(this.health + this.maxHealth * (a.give / 100), 0, this.maxHealth);
            }
            this.allMeds[this.usingMed][1]--;
            for (var i = this.inventory.length - 1; i >= 0; i--) {
                var b = this.inventory[i];
                if (b[1] === "Medical" && medical[b[0]] === a) {
                    this.inventory[i][2]--;
                    if (this.inventory[i][2] === 0) {
                        this.inventory[i][0] = "EMPTY";
                        this.inventory[i][1] = "EMPTY";
                        this.inventory[i][2] = "EMPTY";
                    }
                }
            }
            if (this.allMeds[this.usingMed][1] <= 0) {
                this.allMeds.splice(this.usingMed, 1);
            }
            if (this.allMeds[this.usingMed] === undefined && this.allMeds.length > 0 && this.usingMed === this.medSelect) {
                this.medSelect = 0;
            }
            this.healing = false;
        }
    }
};
character.prototype.punchAttack = function() {
    if (!this.attacking && this.currentWeapon === 2 && !this.onTurret && !this.healing) {
        this.currentReload -= compensateFPS;
        this.currentFire = 0;
    }
    if (((!this.NPC && scene !== "cinematic" && pressed(commandKeys.attack)) || (this.NPC && this.targetVisible && this.warnTime <= 0 && sq(this.x - this.targetLoc[0]) + sq(this.y - this.targetLoc[1]) < sq((this.width / 2) + (this.target.width / 2) + 20))) && !this.attacking && this.currentWeapon === 2 && (this.currentReload <= 0 && this.canAttack || this.healing) && !this.onTurret) {
        if (!this.NPC) {
            this.currentReload = this.reload;
        } else {
            this.currentReload = this.reload + random(20, 30);
        }
        this.attacking = true;
        this.canAttack = false;
        this.meleeAttack = this.meleeWeapon.type[round(random(-0.49, this.meleeWeapon.type.length - 0.51))];
        this.alreadyAttacked = [false, false, false];
        this.meleePull = 0;
        this.meleeDamages.clear();
        this.healing = false;
    }
    if (this.currentWeapon === 2 && !this.onTurret) {
        if (this.attacking) {
            findDamage(this);
            attacks[this.meleeAttack](this);
        } else {
            if ((scene !== "cinematic" && !pressed(commandKeys.attack)) || this.NPC) {
                this.canAttack = true;
            }
            this.hand1 = [this.x - (this.hand1[2] * -sin(this.hand1[3] + this.rot)), this.y - (this.hand1[2] * cos(this.hand1[3] + this.rot)), this.hand1[2], this.hand1[3]];
            this.hand2 = [this.x - (this.hand2[2] * -sin(this.hand2[3] + this.rot)), this.y - (this.hand2[2] * cos(this.hand2[3] + this.rot)), this.hand2[2], this.hand2[3]];
            for (var i = 0; i < this.damageWireFrame.length; i++) {
                this.damageWireFrame[i][0] = this.x - (this.damageWireFrame[i][2] * -sin(this.damageWireFrame[i][3] + this.rot));
                this.damageWireFrame[i][1] = this.y - (this.damageWireFrame[i][2] * cos(this.damageWireFrame[i][3] + this.rot));
            }
        }
    } else if (this.currentWeapon !== 2 && this.storeWeapon !== "NONE") {
        for (var i = 0; i < this.damageWireFrame.length; i++) {
            var x = this.storePt[2] * -sin(this.storePt[3] + this.rot), y = this.storePt[2] * cos(this.storePt[3] + this.rot);
            this.damageWireFrame[i][0] = this.x - x - (this.damageWireFrame[i][2] * -sin(this.damageWireFrame[i][3] + this.rot + this.storeWeapon));
            this.damageWireFrame[i][1] = this.y - y - (this.damageWireFrame[i][2] * cos(this.damageWireFrame[i][3] + this.rot + this.storeWeapon));
        }
    }
};
character.prototype.update = function() {
    if (!this.NPC) {
        if (pressed(commandKeys.scope) && !pressed(192) && this.canScope && (this.currentWeapon < 2 || this.onTurret)) {
            this.zoom += ((this.scope - this.zoom) / 25) * compensateFPS;
        } else {
            this.zoom += ((1 - this.zoom) / 25) * compensateFPS;
        }
    } else {
        if ((this.target === "none" || ((!this.blockedOff[this.targetDir] && this.blockedOff[absValue(this.targetDir - 1, 8)] && this.blockedOff[absValue(this.targetDir - 2, 8)] && this.blockedOff[absValue(this.targetDir + 1, 8)] && this.blockedOff[absValue(this.targetDir + 2, 8)]) || !inBox(this.target.x, this.target.y, this.x, this.y, 380 + (this.target.width / 2), 380 + (this.target.width / 2)))) && this.canScope) {
            this.zoom += ((this.scope - this.zoom) / 25) * compensateFPS;
        } else {
            this.zoom += ((1 - this.zoom) / 25) * compensateFPS;
        }
        this.zoom += ((this.scope - this.zoom) / 25) * compensateFPS;
    }
    if (this.dead) {
        this.deadTime++;
    }
    this.gettingShot--;
    if (this.armorHealth <= 0) {
        if (!this.NPC && this.armor !== 0) {
            message2 = ["Armor broken!", 255];
        }
        this.armor = 0;
        this.armorHealth = 0;
        this.armorHelp = 0;
    }
};
character.prototype.returnData = function() {
    var ret = [];
    if (this.health < this.maxHealth) {
        ret.push("health", this.health);
    }
    if (this.stim > 0) {
        ret.push("stim", this.stim);
    }
    if (this.NPC) {
        if (this.weapons[0] !== this.type[1][0]) {
            ret.push("wep1", this.weapons[0]);
        }
        if (this.weapons[1] !== this.type[1][1]) {
            ret.push("wep2", this.weapons[1]);
        }
    }
    if (this.armor !== this.type[3]) {
        ret.push("armor", this.armor);
    }
    if (this.armorHealth > 0) {
        ret.push("armorhealth", this.armorHealth);
    }
    if (this.currentWeapon !== 0) {
        ret.push("cw", this.currentWeapon);
    }
    if (this.inMag < this.mag) {
        ret.push("inmag", this.inMag);
    }
    if (!this.NPC) {
        if (this.bombSelect !== 0) {
            ret.push("bselect", this.bombSelect);
        }
        if (this.medSelect !== 0) {
            ret.push("mselect", this.medSelect);
        }
        if (this.gun1 !== "NONE") {
            if (this.gun1.inMag < this.gun1.mag) {
                ret.push("G1M", this.gun1.inMag);
            }
        }
        if (this.gun2 !== "NONE") {
            if (this.gun2.inMag < this.gun2.mag) {
                ret.push("G2M", this.gun2.inMag);
            }
        }
    }
    return ret;
};
//}
//} END "NPC/PLAYER, SINGLEPLAYER"

// "USER INTERFACE" {
// (1) "BASIC GAMEPLAY" {
var Camera = function() {
    var weight = allies[0].weapon.weight;
    if (allies[0].currentWeapon >= 2) {
        weight = 1;
    }
    if (grenadeButtonTime < 30 && medButtonTime < 30) {
        allies[0].drawX += ((200 - ((MOUSEX - 200) / 3) - allies[0].drawX) / (30 * weight)) * compensateFPS;
        allies[0].drawY += ((200 - ((MOUSEY - 200) / 3) - allies[0].drawY) / (30 * weight)) * compensateFPS;
    }
};
var mouseReticle = function(which, color, outline, recoil) {
    noFill();
    stroke(color);
    strokeWeight(outline);
    if (which === "Circle") {
        ellipse(0, 0, (recoil / 2) + 5, (recoil / 2) + 5);
    } else if (which === "Shotgun Scope") {
        point(0, 0);
        arc(0, 0, (recoil / 2) + 5, (recoil / 2) + 5, -20, 20);
        arc(0, 0, (recoil / 2) + 5, (recoil / 2) + 5, 70, 110);
        arc(0, 0, (recoil / 2) + 5, (recoil / 2) + 5, 160, 200);
        arc(0, 0, (recoil / 2) + 5, (recoil / 2) + 5, 250, 290);
    } else if (which === "Normal Scope") {
        point(0, 0);
        line(recoil / 2, 0, (recoil / 2) + 6, 0);
        line(-recoil / 2, 0, -((recoil / 2) + 6), 0);
        line(0, recoil / 2, 0, (recoil / 2) + 6);
        line(0, -recoil / 2, 0, -((recoil / 2) + 6));
    } else if (which === "Sniper") {
        point(0, 0);
        line(0, recoil / 2, 0, (recoil / 2) + 6);
        pushMatrix();
        rotate(120);
        line(0, recoil / 2, 0, (recoil / 2) + 6);
        popMatrix();
        pushMatrix();
        rotate(-120);
        line(0, recoil / 2, 0, (recoil / 2) + 6);
        popMatrix();
    } else if (which === "Second Scope") {
        line(recoil / 2, 0, (recoil / 2) + 6, 0);
        line(-recoil / 2, 0, -((recoil / 2) + 6), 0);
        line(0, recoil / 2, 0, (recoil / 2) + 6);
        line(0, -recoil / 2, 0, -((recoil / 2) + 6));
    } else {
        line(-6, 0, 6, 0);
        line(0, -6, 0, 6);
    }
};
var showButtonToClick = function(x, y, size, which, buttonLength, buttonHeight, textAlpha) {
    pushMatrix();
    translate(x, y);
    scale(size);
    fill(50, textAlpha * 0.75);
    if (which !== "Left Mouse Button" && which !== "Right Mouse Button" && which !== "Middle Mouse Button") {
        stroke(255, textAlpha);
        strokeWeight(1);
        if (buttonLength < 20) {
            rect(0, 0, 20, buttonHeight, 5);
        } else {
            rect(0, 0, buttonLength, buttonHeight, 5);
        }
        fill(220);
        text(which, 0, 0);
    } else {
        stroke(255, textAlpha);
        strokeWeight(1);
        scale(10 / 7);
        rect(0, 0, 14, buttonHeight * 0.7, 5);
        noStroke();
        translate(0, -1/3);
        noFill();
        strokeWeight(0.5);
        if (which === "Left Mouse Button") {
            stroke(220, 150, 0);
        } else {
            stroke(220);
        }
        arc(-0.5, -2.5, 2, 2, 180, 269);
        arc(-0.5, 2.5, 2, 2, 90, 180);
        arc(-0.5, 5.5, 9, 2, 210, 270);
        arc(-0.5, -2, 8, 6, 180, 269);
        pushMatrix();
        translate(-4.5, 0);
        line(0, -2, 0, 5);
        popMatrix();
        pushMatrix();
        translate(-0.5, 0);
        scale(1, 1.1);
        line(-1, -2.5, -1, 2);
        popMatrix();
        pushMatrix();
        translate(-0.5, -0.75);
        line(0, -3.5, 0, -4.5);
        translate(0, 4.5);
        scale(1, 0.75);
        line(0, 0, 0, 1);
        popMatrix();
        noStroke();
        if (which === "Left Mouse Button") {
            fill(220, 150, 0);
        } else {
            fill(220);
        }
        ellipse(-1.45, -4.25, 1.8, 1.8);
        ellipse(-2.5, -3.5, 2.5, 2);
        ellipse(-2.8, -2.8, 3, 2);
        ellipse(-3.5, 4.4, 2, 1);
        ellipse(-2.1, 3.76, 3.2, 2);
        pushMatrix();
        translate(-3, 0.8);
        scale(2.7, 6.7);
        rect(0, 0, 1, 1);
        popMatrix();
        noFill();
        if (which === "Right Mouse Button") {
            stroke(220, 150, 0);
        } else {
            stroke(220);
        }
        arc(0.5, -2.5, 2, 2, 271, 360);
        arc(0.5, 2.5, 2, 2, 0, 90);
        arc(0.5, -2, 8, 6, 271, 360);
        arc(0.5, 5.5, 9, 2, 271, 330);
        pushMatrix();
        translate(4.5, 0);
        line(0, -2, 0, 5);
        popMatrix();
        pushMatrix();
        translate(0.5, 0);
        scale(1, 1.1);
        line(1, -2.5, 1, 2);
        popMatrix();
        pushMatrix();
        translate(0.5, -0.75);
        line(0, -3.5, 0, -4.5);
        translate(0, 4.5);
        scale(1, 0.75);
        line(0, 0, 0, 1);
        popMatrix();
        noStroke();
        if (which === "Right Mouse Button") {
            fill(220, 150, 0);
        } else {
            fill(220);
        }
        ellipse(1.45, -4.25, 1.8, 1.8);
        ellipse(2.5, -3.5, 2.5, 2);
        ellipse(2.8, -2.8, 3, 2);
        ellipse(3.5, 4.4, 2, 1);
        ellipse(2.1, 3.76, 3.2, 2);
        pushMatrix();
        translate(3, 0.8);
        scale(2.7, 6.7);
        rect(0, 0, 1, 1);
        popMatrix();
        if (which === "Middle Mouse Button") {
            stroke(220, 150, 0);
        } else {
            stroke(220);
        }
        strokeWeight(1.5);
        line(0, -2, 0, 2);
        noStroke();
        rectMode(CENTER);
    }
    popMatrix();
};
var lootInfo = function(x, y, firstButton, secondButton, Name, Second, Info, moreInfo) {
    //textFont(fonts.TimesNewRoman10);
    textFont(fonts.Calibri10);
    var whichButton1, whichButton2;
    if (scene === "game") {
        //println(lootOn + ", " + allLoot.length);
        if (lootOn === "NONE" || (lootOn !== "NONE" && lootOn < allLoot.length && sq(allies[0].x - allLoot[lootOn].x) + sq(allies[0].y - allLoot[lootOn].y) > sq(allLoot[lootOn].width / 2)) || (lootOn !== "NONE" && lootOn >= allLoot.length)) {
            onLoot = false;
            for (var i = 0; i < allLoot.length; i++) {
                if (sq(allies[0].x - allLoot[i].x) + sq(allies[0].y - allLoot[i].y) <= sq(allLoot[i].width / 2)) {
                    if (i !== lootOn) {
                        onLoot = "NONE";
                        lootOn = "NONE";
                        lootBoxSize += (-lootBoxSize / 5) * compensateFPS;
                        lootName = "";
                        lootAmmo = "";
                        lootText = "";
                        lootTextAlpha = 255;
                    }
                    lootOn = i;
                    onLoot = true;
                    lootName = allLoot[i].name;
                    lootAmmo = allLoot[i].number;
                    if (allLoot[i].type === "Gun") {
                        lootAmmo = allLoot[i].ammo;
                    } else if (allLoot[i].type === "Armor") {
                        lootAmmo = round(allLoot[i].number) + " HP left";
                    } else if (allLoot[i].type === "Attachment") {
                        if (allLoot[i].other[0] === "Scope") {
                            lootAmmo = "";
                        } else {
                            lootAmmo = "Level " + (allLoot[i].number + 1);
                        }
                    } else if (allLoot[i].type === "Backpack") {
                        lootAmmo = "Level " + allLoot[i].number;
                    } else if (allLoot[i].type === "Melee") {
                        lootAmmo = "";
                    }
                    lootAmmoTextWidth = textWidth(lootName) + textWidth(lootAmmo) + 10;
                    lootText = allLoot[i].description;
                    if (lootAmmoTextWidth <= 150) {
                        lootTextWidth = constrain(textWidth(lootText), lootAmmoTextWidth, 150);   
                    } else {
                        lootTextWidth = constrain(textWidth(lootText), 150, lootAmmoTextWidth);
                    }
                    boxFinalWidth = 20 + lootTextWidth;
                    lootText = text2(lootText, 150);
                    lootBoxHeight = 35 + lootText.length * 15;
                    i = allLoot.length;
                }
            }
        }
    } else if (scene === "inventory") {
        if (((lootOn[0] !== moreInfo[0] || lootOn[1] !== moreInfo[1]) && onLoot)) {
            lootBoxSize = 0;
            lootTextAlpha = lootBoxFinalAlpha;
        } else if (lootOn[0] === moreInfo[0] && lootOn[1] === moreInfo[1]) {
            lootName = Name;
            lootAmmo = Second;
            lootAmmoTextWidth = textWidth(lootName) + textWidth(lootAmmo) + 10;
            lootText = Info;
            if (lootAmmoTextWidth <= 150) {
                lootTextWidth = constrain(textWidth(lootText), lootAmmoTextWidth, 150);   
            } else {
                lootTextWidth = constrain(textWidth(lootText), 150, lootAmmoTextWidth);
            }
            boxFinalWidth = 20 + lootTextWidth;
            lootText = text2(lootText, 150);
            lootBoxHeight = 35 + lootText.length * 15;
        }
    }
    if ((((onLoot !== "NONE" && onLoot) || lootBoxSize > 2) && scene === "game") || (scene === "inventory" && ((onLoot && onLoot !== "NONE" && lootOn[0] === moreInfo[0] && lootOn[1] === moreInfo[1]) || lootBoxSize > 2))) {
        if (lootOn !== "NONE" && scene === "game" && allLoot[lootOn].type === "Ammo") {
            lootAmmo = allLoot[lootOn].number;
        }
        textFont(fonts.Calibri18);
        if (firstButton === "Right Mouse Button" || firstButton === "Left Mouse Button" || firstButton === "Middle Mouse Button") {
            whichButton1 = 20;
        } else {
            whichButton1 = constrain(textWidth(firstButton), 20, textWidth(firstButton));
        }
        if (secondButton === "Right Mouse Button" || secondButton === "Left Mouse Button" || secondButton === "Middle Mouse Button") {
            whichButton2 = 20;
        } else {
            whichButton2 = constrain(textWidth(secondButton), 20, textWidth(secondButton));
        }
        lootBoxSize += ((boxFinalWidth - lootBoxSize) / 5) * compensateFPS;
        if (lootBoxSize >= boxFinalWidth - 2) {
            lootTextAlpha += (-lootTextAlpha / 3) * compensateFPS;
        }
        pushMatrix();
        var X = x, Y = y, addOn = 0;
        if (secondButton !== "NONE") {
            addOn = 3 + whichButton2;
        }
        if (x === "LOOTx") {
            X = allies[0].drawX;
            Y = allies[0].drawY;
        }
        translate(X, Y);
        if (X + boxFinalWidth + addOn > 400) {
            translate(-lootBoxSize, 0);
        }
        if (Y + lootBoxHeight > 400) {
            translate(0, -lootBoxHeight);
        }
        textFont(fonts.Calibri18);
        if (firstButton !== "NONE" && onLoot !== "NONE") {
            showButtonToClick(-3 - (whichButton1 / 2), lootBoxHeight / 2, 1, firstButton, whichButton1, lootBoxHeight + 1, lootBoxFinalAlpha);
        }
        if (secondButton !== "NONE" && onLoot !== "NONE") {
            showButtonToClick(lootBoxSize + 3 + (whichButton2 / 2), lootBoxHeight / 2, 1, secondButton, whichButton2, lootBoxHeight + 1, lootBoxFinalAlpha);
        }
        //textFont(fonts.TimesNewRoman10);
        textFont(fonts.Calibri10);
        rectMode(CORNER);
        stroke(255, lootBoxFinalAlpha);
        strokeWeight(1);
        fill(50, lootBoxFinalAlpha);
        rect(0, 0, lootBoxSize, lootBoxHeight, 5);
        fill(255, lootBoxFinalAlpha);
        rect(0, 0, lootBoxSize, 20, 5, 5, 0, 0);
        rectMode(CENTER);
        fill(50, lootBoxFinalAlpha - lootTextAlpha);
        textAlign(LEFT, CENTER);
        text(lootName, 10, 10);
        textAlign(RIGHT, CENTER);
        text(lootAmmo, lootBoxSize - 10, 10);
        fill(255, lootBoxFinalAlpha - lootTextAlpha);
        textAlign(LEFT, TOP);
        //text(lootText, 10, 30, boxFinalWidth - 19, 100);
        text3(lootText, 10, 30, 15);
        textAlign(CENTER, CENTER);
        rectMode(CORNER);
        if (scene === "game" && lootOn !== "NONE" && (allLoot[lootOn].type === "Attachment" || allLoot[lootOn].type === "Ammo") && lootBoxSize > boxFinalWidth - 2) {
            var w = boxFinalWidth / 2 - 5.5, h = 16;
            if (allies[0].gun1 !== "NONE") {
                if ((allLoot[lootOn].type === "Attachment" && checkAttachment(0)) || (allLoot[lootOn].type === "Ammo" && allLoot[lootOn].other === allies[0].gun1.ammo)) {
                    fill(0, 255, 0, lootBoxFinalAlpha / 4);
                } else {
                    fill(255, 0, 0, lootBoxFinalAlpha / 4);
                }
                rect(0, lootBoxHeight + 3, boxFinalWidth / 2 - 1.5, 20, 5);
                renderImage(guns[allies[0].weapons[0]].graphic, (boxFinalWidth / 2 - 1.5) / 2, lootBoxHeight + 13, w, h);
            }
            if ((allLoot[lootOn].type === "Attachment" && checkAttachment(1)) || (allLoot[lootOn].type === "Ammo" && allLoot[lootOn].other === allies[0].gun2.ammo)) {
                fill(0, 255, 0, lootBoxFinalAlpha / 4);
            } else {
                fill(255, 0, 0, lootBoxFinalAlpha / 4);
            }
            if (allies[0].gun1 !== "NONE" && allies[0].gun2 !== "NONE") {
                rect(boxFinalWidth / 2 + 1.5, lootBoxHeight + 3, boxFinalWidth / 2 - 1.5, 20, 5);
                renderImage(guns[allies[0].weapons[1]].graphic, boxFinalWidth / 2 + 1.5 + (boxFinalWidth / 2 - 1.5) / 2, lootBoxHeight + 13, w, h);
            } else if (allies[0].gun1 === "NONE" && allies[0].gun2 !== "NONE") {
                rect(0, lootBoxHeight + 3, boxFinalWidth / 2 - 1.5, 20, 5);
                renderImage(guns[allies[0].weapons[1]].graphic, (boxFinalWidth / 2 - 1.5) / 2, lootBoxHeight + 13, w, h);
            }
                
        }
        rectMode(CENTER);
        popMatrix();
    }
};
var gunModState = function(x, y, which, original) {
    if (which !== original) {
        stroke(30, 255, 20);
        strokeWeight(2);
        line(x + 3, y, x, y - 3);
        line(x + 3, y, x, y + 3);
        fill(30, 255, 20);
        text(which, x + 10, y);
    }
};
//}
// (2) "GAMEPLAY OVERLAY" {
var UIpiece = function(x, y, size, which, type) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.which = which;
    this.type = type || "Rectangle";
    this.graphic = "";
    this.width = 0;
    this.height = 0;
    this.amount = 0;
    this.max = 0;
    this.level = 1;
    this.showButtonWidth = 0;
    this.optionSelected = "NONE";
    this.selected = false;
    this.subAmount = [];
    this.subLevel = [];
    this.subMax = [];
    textFont(fonts.Calibri10);
    switch (this.which) {
        case "Health Bar":
            this.x = 200;
            this.y = 390;
            this.width = 100;
            this.height = 10;
            this.amount = 100;
            this.max = 100;
        break;
        case "Stim Bar":
            this.x = 200;
            this.y = 382;
            this.width = 100;
            this.height = 4;
            this.amount = 0;
            this.max = 100;
        break;
        case "Ammo":
            this.x = 200 + (50.5 / 2);
            this.y = 372;
            this.width = 49.5;
            this.height = 14;
            this.amount = 30;
            this.max = 30;
        break;
        case "Gun Picture":
            this.x = 200 - (50.5 / 2);
            this.y = 372;
            this.width = 49.5;
            this.height = 14;
            this.amount = 0;
            this.max = 100;
        break;
        case "Backpack":
            this.x = 138;
            this.y = 380;
            this.width = 20;
            this.height = 30;
            this.amount = 0;
            this.max = 12;
            this.level = 1;
        break;
        case "Armor":
            this.x = 262;
            this.y = 380;
            this.width = 20;
            this.height = 30;
            this.amount = 100;
            this.max = 100;
            this.level = 1;
        break;
        case "First Weapon":
            this.x = 365;
            this.y = 331;
            this.width = 60;
            this.height = 24;
            this.amount = 10;
            this.max = 30;
            this.showButtonWidth = findTextWidth(commandKeys.firstWeapon[1]);
        break;
        case "Second Weapon":
            this.x = 365;
            this.y = 357;
            this.width = 60;
            this.height = 24;
            this.amount = 20;
            this.max = 30;
            this.showButtonWidth = findTextWidth(commandKeys.secondWeapon[1]);
        break;
        case "Melee Weapon":
            this.x = 365;
            this.y = 383;
            this.width = 60;
            this.height = 24;
            this.amount = 0;
            this.max = 0;
            this.showButtonWidth = findTextWidth(commandKeys.melee[1]);
        break;
        case "Grenade":
            this.x = 114;
            this.y = 380;
            this.width = 24;
            this.height = 24;
            this.amount = 0;
            this.max = 0;
        break;
        case "Meds":
            this.x = 286;
            this.y = 380;
            this.width = 24;
            this.height = 24;
            this.amount = 0;
            this.max = 0;
        break;
        case "Energy Meter":
            this.x = 17;
            this.y = 357;
            this.width = 24;
            this.height = 76;
            this.amount = 100;
            this.max = 100;
        break;
        case "Energy Used":
            this.x = 56;
            this.y = 357;
            this.width = 52;
            this.height = 76;
            this.subAmount = [];
            this.subMax = [];
            this.subLevel = [];
        break;
        case "First Weapon Inventory":
            this.x = 120;
            this.y = 115;
            this.width = 155;
            this.height = 110;
            this.amount = 0;
            this.max = 0;
            this.subAmount = [0, 0, 0, 0, 0];
            this.subLevel = [0, 0, 0, 0, 0];
            this.subMax = [0, 0, 0, 0, 0];
        break;
        case "Second Weapon Inventory":
            this.x = 280;
            this.y = 115;
            this.width = 155;
            this.height = 110;
            this.amount = 0;
            this.max = 0;
            this.subAmount = [0, 0, 0, 0, 0];
            this.subLevel = [0, 0, 0, 0, 0];
            this.subMax = [0, 0, 0, 0, 0];
        break;
        case "Armor Inventory":
            this.x = 155;
            this.y = 320;
            this.width = 40;
            this.height = 40;
        break;
        case "Melee Inventory":
            this.x = 245;
            this.y = 320;
            this.width = 40;
            this.height = 40;
        break;
        case "Backpack Inventory":
            this.x = 200.5;
            this.y = 320;
            this.width = 40;
            this.height = 40;
        break;
        case "Inventory Spots":
            this.max = 14;
            this.x = 200;
            this.y = 235;
            this.width = 300;
            this.height = ((2 * (this.width - 40)) / (this.max / 2)) + 15;
            this.amount = 8;
        break;
        case "Inventory Back":
            this.x = 30;
            this.y = 385;
            this.width = 50;
            this.height = 20;
        break;
        case "Inventory Map":
            this.x = 30;
            this.y = 15;
            this.width = 50;
            this.height = 20;
        break;
        case "Datapad Map Info":
            this.x = 200;
            this.y = 193.25;
            this.width = 350;
            this.height = 326.5;
        break;
        case "Datapad Tyon Info":
            this.x = 200;
            this.y = 193.25;
            this.width = 350;
            this.height = 326.5;
        break;
        case "Datapad Gun Info":
            this.x = 200;
            this.y = 193.25;
            this.width = 350;
            this.height = 326.5;
        break;
        case "Datapad Objective Info":
            this.x = 200;
            this.y = 193.25;
            this.width = 350;
            this.height = 326.5;
        break;
        case "Datapad Back":
            this.x = 30;
            this.y = 15;
            this.width = 50;
            this.height = 20;
        break;
        case "Datapad Map Button":
            this.x = 192.5 - (83.75 * 1.5);
            this.y = 395 - (33.5 / 2);
            this.width = 83.75;
            this.height = 33.5;
        break;
        case "Datapad Tyon Button":
            this.x = 207.5 + (83.75 * 1.5);
            this.y = 395 - (33.5 / 2);
            this.width = 83.75;
            this.height = 33.5;
        break;
        case "Datapad Gun Button":
            this.x = 202.5 + (83.75 / 2);
            this.y = 395 - (33.5 / 2);
            this.width = 83.75;
            this.height = 33.5;
        break;
        case "Datapad Objective Button":
            this.x = 197.5 - (83.75 / 2);
            this.y = 395 - (33.5 / 2);
            this.width = 83.75;
            this.height = 33.5;
        break;
        case "Pause Return":
            this.x = 200;
            this.y = 110;
            this.width = 80;
            this.height = 30;
        break;
        case "Pause Settings":
            this.x = 200;
            this.y = 170;
            this.width = 80;
            this.height = 30;
        break;
        case "Pause Help":
            this.x = 200;
            this.y = 230;
            this.width = 80;
            this.height = 30;
        break;
        case "Pause Menu":
            this.x = 200;
            this.y = 290;
            this.width = 80;
            this.height = 30;
        break;
        case "Pause2 Yes":
            this.x = 165;
            this.y = 217.5;
            this.width = 65;
            this.height = 20;
        break;
        case "Pause2 No":
            this.x = 235;
            this.y = 217.5;
            this.width = 65;
            this.height = 20;
        break;
        case "Pause2 Back":
            this.x = 200;
            this.y = 200;
            this.width = 145;
            this.height = 65;
        break;
    }
    if (!isNaN(x)) {
        this.x = x;
    }
    if (!isNaN(y)) {
        this.y = y;
    }
    this.current = this.max;
};
UIpiece.prototype.draw = function() {
    if (this.which !== "Energy Meter") {
        this.current = constrain(this.current + (((this.amount - this.current) / 15) * compensateFPS), 0, this.max);
    } else {
        this.current = constrain(this.current + (((this.amount - this.current) / 20) * compensateFPS), 0, this.max);
    }
    if (isNaN(this.current)) {
        this.current = 0;
    }
    strokeWeight(1);
    pushMatrix();
    translate(this.x, this.y);
    scale(this.size);
    noStroke();
    if (this.which === "Health Bar") {
        fill(0, 50);
        rect(0, 0, this.width, this.height, 3);
        var b = color(255), c = map(this.amount, 0, this.max, 0, 100);
        if (this.amount === this.max) {
            b = color(200);
        } else if (this.amount < this.max && this.amount > this.max * 0.75) {
            b = color(255);
        } else if (this.amount <= this.max * 0.75 && this.amount > this.max * 0.25) {
            var healthMap = map(this.amount, 0, 
            b = color(255, 125 + ((c - 25) * 2), 125 + ((c - 25) * 2)));
        } else if (this.amount <= this.max * 0.25) {
            b = color((sin(frameCount * 6 * compensateFPS) * 25) + 200, 0, 0);
        }
        fill(b);
        var a = map(this.amount, 0, this.max, 0, 98);
        rect(-49 + (a / 2), 0, a, this.height - 2, 2);
        if (this.current > this.amount) {
            fill(b, 150);
            var c = map(this.current * 0.98, 0, this.max, 0, 100);
            rect(-49 + (c / 2), 0, c, this.height - 2, 2);
        }
    } else if (this.which === "Stim Bar") {
        fill(0, 50);
        rect(0, 0, this.width, this.height, 3);
        fill(255, 150, 0);
        var b = this.max * 0.25;
        for (var i = 0; i < 4; i++) {
            if (this.amount > i * b) {
                var a = this.amount - (i * b);
                if (this.amount > b + (i * b)) {
                    a = b;
                }
                rect(-50 + (i * b) + (a / 2), 0, a * 0.94, this.height - 1);
            }
        }
    } else if (this.which === "Backpack") {
        fill(255, 100);
        rect(0, (this.height / 2) - (this.height * ((this.amount / this.max) / 2)), this.width, this.height * (this.amount / this.max));
        fill(0, 50);
        rect(0, 0, this.width, this.height, 2);
        fill(255);
        textFont(fonts.TimesNewRoman8);
        textAlign(CENTER, BOTTOM);
        if (this.level > 0) {
            text("Lvl " + this.level, 0, (this.height / 2) - 1);
        } else {
            text("Bag", 0, (this.height / 2) - 1);
        }
        textAlign(CENTER, CENTER);
        renderImage(backpack[allies[0].backpack].graphic, 0, -4, this.width, this.height - 10);
        if (allies[0].backpack === 0) {
            fill(255);
            textFont(fonts.Calibri14);
            text("-", 0, -4);
        }
    } else if (this.which === "Armor") {
        fill(0, 50);
        rect(0, 0, this.width, this.height, 2);
        fill(255, 0, 0, 100);
        rect(0, (this.height / 2) - (this.height * ((this.amount / this.max) / 2)), this.width, this.height * (this.amount / this.max));
        fill(255);
        textFont(fonts.TimesNewRoman8);
        textAlign(CENTER, BOTTOM);
        if (this.level > 0) {
            text("Lvl " + this.level, 0, (this.height / 2) - 1);
        } else {
            text("None", 0, (this.height / 2) - 1);
        }
        textAlign(CENTER, CENTER);
        renderImage(armor[allies[0].armor].graphic, 0, -4, this.width, this.height - 10);
        if (allies[0].armor === 0) {
            fill(255);
            textFont(fonts.Calibri14);
            text("-", 0, -4);
        }
    } else if (this.which === "Ammo") {
        if (allies[0].currentWeapon !== 3 && !allies[0].healing) {
            fill(255, 100);
            rect((-this.width / 2) + (this.width * ((this.amount / this.max) / 2)), 0, this.width * (this.amount / this.max), this.height);
        }
        if (this.current > this.amount && allies[0].currentWeapon !== 3 && !allies[0].healing) {
            fill(100, 150);
            rect((-this.width / 2) + (this.width * ((this.current / this.max) / 2)), 0, this.width * (this.current / this.max), this.height);
        }
        fill(0, 50);
        rect(0, 0, this.width, this.height, 3);
        fill(255);
        textFont(fonts.Calibri10);
        if (allies[0].currentWeapon !== 3 && !allies[0].healing) {
            text(" / ", 0, 0);
            textAlign(CENTER, CENTER);
            if (this.amount === 0) {
                fill(200);
            }
            if ((allies[0].currentWeapon === 0 || allies[0].currentWeapon === 1 || allies[0].onTurret) && ((!allies[0].reloading && allies[0].fireDelay === allies[0].currentFire) || (allies[0].reloading && allies[0].currentReload <= compensateFPS))) {
                textFont(fonts.Calibri11);
            }
            text(this.amount, -4 - textWidth(this.amount) / 2, 0);
            textFont(fonts.Calibri10);
            fill(255);
            textAlign(LEFT, CENTER);
            text(this.max, 4, 0);
            textAlign(CENTER, CENTER);
        } else {
            text(this.amount, 0, 0);
        }
    } else if (this.which === "Gun Picture") {
        fill(255, 100);
        rect((-this.width / 2) + (this.width * ((this.amount / this.max) / 2)), 0, this.width * (this.amount / this.max), this.height);
        fill(0, 50);
        rect(0, 0, this.width, this.height, 3);
        if (allies[0].currentWeapon < 2 || allies[0].onTurret) {
            if (allies[0].fireMode === "Full-Auto") {
                bulletIcon(-5, 1, 0.15, 255, -45, color(220));
                bulletIcon(5, 1, 0.15, 255, -45, color(220));
                bulletIcon(0, 1, 0.18, 255, -45, color(255));
            } else {
                for (var i = 0; i < allies[0].burst; i++) {
                    bulletIcon(-2.5 * allies[0].burst + 5 * i, 1, 0.15, 255, -45, i < allies[0].burstsLeft ? color(255) : color(200));
                }
            }
        } else if (allies[0].healing) {
            renderImage(medical[allies[0].allMeds[allies[0].usingMed][0]].graphic, 0, 0, this.width - 4, this.height - 4);
        }
    } else if (this.which === "First Weapon") {
        fill(255, 100);
        rect((this.width / 2) - (this.width * ((this.amount / this.max) / 2)), 0, this.width * (this.amount / this.max), this.height);
        if (allies[0].currentWeapon === 0) {
            stroke(255);
            strokeWeight(1);
        }
        fill(0, 50);
        rect(0, 0, this.width, this.height, 3);
        noStroke();
        if (this.current > this.amount && allies[0].currentWeapon !== 3 && !allies[0].healing) {
            fill(100, 150);
            rect((this.width / 2) - (this.width * ((this.current / this.max) / 2)), 0, this.width * (this.current / this.max), this.height - 2);
        }
        showButtonToClick(-((this.width / 2) + (this.showButtonWidth / 2) + (8 * (this.width / 60)) + 2), 0, 1, commandKeys.firstWeapon[1], 8 * (this.width / 60), this.height, 200);
        if (allies[0].gun1 !== "NONE") {
            renderImage(guns[allies[0].weapons[0]].graphic, 0, 0, this.width - 5, this.height - 5);
        }
    } else if (this.which === "Second Weapon") {
        fill(255, 100);
        rect((this.width / 2) - (this.width * ((this.amount / this.max) / 2)), 0, this.width * (this.amount / this.max), this.height);
        if (allies[0].currentWeapon === 1) {
            stroke(255);
            strokeWeight(1);
        }
        fill(0, 50);
        rect(0, 0, this.width, this.height, 3);
        noStroke();
        fill(100, 150);
        if (this.current > this.amount && allies[0].currentWeapon !== 3 && !allies[0].healing) {
            fill(100, 150);
            rect((this.width / 2) - (this.width * ((this.current / this.max) / 2)), 0, this.width * (this.current / this.max), this.height - 2);
        }
        showButtonToClick(-((this.width / 2) + (this.showButtonWidth / 2) + (8 * (this.width / 60)) + 2), 0, 1, commandKeys.secondWeapon[1], 8 * (this.width / 60), this.height, 200);
        if (allies[0].gun2 !== "NONE") {
            renderImage(guns[allies[0].weapons[1]].graphic, 0, 0, this.width - 5, this.height - 5);
        }
    } else if (this.which === "Melee Weapon") {
        fill(255, 100);
        rect((this.width / 2) - (this.width * ((this.amount / this.max) / 2)), 0, this.width * (this.amount / this.max), this.height);
        if (allies[0].currentWeapon === 2) {
            stroke(255);
            strokeWeight(1);
        }
        fill(0, 50);
        rect(0, 0, this.width, this.height, 3);
        noStroke();
        fill(100, 150);
        if (this.current > this.amount && allies[0].currentWeapon !== 3 && !allies[0].healing) {
            fill(100, 150);
            rect((this.width / 2) - (this.width * ((this.current / this.max) / 2)), 0, this.width * (this.current / this.max), this.height - 2);
        }
        showButtonToClick(-((this.width / 2) + (this.showButtonWidth / 2) + (8 * (this.width / 60)) + 2), 0, 1, commandKeys.melee[1], 8 * (this.width / 60), this.height, 200);
        renderImage(melee[allies[0].weapons[2]].graphic, 0, 0, this.width - 5, this.height - 2);
    } else if (this.which === "Grenade" || this.which === "Meds") {
        fill(0, 50);
        ellipse(0, 0, this.width, this.height);
        stroke(255, 50);
        strokeWeight(3);
        noFill();
        if (this.which === "Grenade") {
            arc(0, 0, this.width, this.height, 0, (grenadeButtonTime * 12));
            if (allies[0].allGrenades.length > 0) {
                renderImage(grenades[allies[0].allGrenades[allies[0].bombSelect][0]].graphic, 0, 0, this.width - 4, this.height - 4);
            } else {
                renderImage(armor[0].graphic, 0, 0, this.width - 10, this.height - 10);
                fill(255);
                textFont(fonts.Calibri14);
                text("-", 0, 0);
            }
        }
        if (this.which === "Meds") {
            arc(0, 0, this.width, this.height, 0, (medButtonTime * 12));
            if (allies[0].allMeds.length > 0) {
                renderImage(medical[allies[0].allMeds[allies[0].medSelect][0]].graphic, 0, 0, this.width - 4, this.height - 4);
            } else {
                renderImage(armor[0].graphic, 0, 0, this.width - 10, this.height - 10);
                fill(255);
                textFont(fonts.Calibri14);
                text("-", 0, 0);
            }
        }
        noStroke();
        if (this.selected) {
            var a = 360 / grenades.length, b = atan2(MOUSEY - 200, MOUSEX - 200), c = sq(MOUSEX - 200) + sq(MOUSEY - 200), d = "", e = grenades;
            if (this.which === "Meds") {
                a = 360 / medical.length;
                e = medical;
            }
            popMatrix();
            pushMatrix();
            translate(200, 200);
            scale(size);
            if (c < sq(27)) {
                fill(255, 50);
                this.optionSelected = "NONE";
            } else {
                fill(0, 50);
            }
            ellipse(0, 0, 48, 48);
            strokeWeight(3);
            stroke(255);
            line(-10, -10, 10, 10);
            line(-10, 10, 10, -10);
            stroke(0, 50);
            strokeWeight(2);
            noFill();
            strokeWeight(50);
            strokeCap(SQUARE);
            textFont(fonts.Calibri18);
            for (var i = 0; i < 360; i += a) {
                var x = -(3 * sin(-(i + 90))), y = -(3 * cos(-(i + 90))), rot1 = i - (a / 2), rot2 = i + (a / 2), x2 = -(50 * sin(-(i + 90))), y2 = -(50 * cos(-(i + 90))), x3 = -(90 * sin(-(i + 90))), y3 = -(90 * cos(-(i + 90)));
                var number = 0, img;
                if (this.which === "Grenade") {
                    for (var j = 0; j < allies[0].allGrenades.length; j++) {
                        if (round(i / a) === allies[0].allGrenades[j][0]) {
                            number = allies[0].allGrenades[j][1];
                        }
                    }
                    img = grenades[round(i / a)].graphic;
                } else if (this.which === "Meds") {
                    for (var j = 0; j < allies[0].allMeds.length; j++) {
                        if (round(i / a) === allies[0].allMeds[j][0]) {
                            number = allies[0].allMeds[j][1];
                        }
                    }
                    img = medical[round(i / a)].graphic;
                }
                if (((b > rot1 && b <= rot2) || (b > rot1 + 360 && b <= rot2 + 360) || (b > rot1 - 360 && b <= rot2 - 360)) && c >= sq(27)) {
                    if (number > 0) {
                        stroke(255, 50);
                        if (this.which === "Meds") {
                            for (var j = 0; j < allies[0].allMeds.length; j++) {
                                var hi = allies[0].allMeds[j][0];
                                if (round(i / a) === hi && medical[hi].type === "Health" && allies[0].health >= 100) {
                                    stroke(0, 200, 255, 50);
                                }
                            }
                        } else {
                            stroke(255, 50);
                        }
                    } else {
                        stroke(255, 0, 0, 50);
                    }
                    this.optionSelected = round(i / a);
                    d = e[this.optionSelected].name;
                } else {
                    stroke(0, 50);
                }
                arc(x, y, 100, 100, rot1, rot2);
                fill(255);
                text(number, x3, y3);
                if (img !== undefined) {
                    renderImage(img, x2, y2, 40, 40);
                }
                noFill();
            }
            strokeCap(ROUND);
            strokeWeight(1);
            noStroke();
            pushMatrix();
            translate(0, -115);
            outlineText(d, 0, 255, 8, 1);
            popMatrix();
            popMatrix();
            pushMatrix();
            translate(this.x, this.y);
            scale(this.size);
        }
    } else if (this.which === "First Weapon Inventory" || this.which === "Second Weapon Inventory" || this.which === "Armor Inventory" || this.which === "Melee Inventory" || this.which === "Backpack Inventory") {
        strokeWeight(2);
        if (this.level > 0 && this.level < levelColors.length && this.which !== "First Weapon Inventory" && this.which !== "Second Weapon Inventory") {
            stroke(levelColors[this.level]);
        } else {
            stroke(0);
            if (this.which === "First Weapon Inventory" && allies[0].gun1 !== "NONE") {
                stroke(ammo[allies[0].gun1.ammo].lootFill);
            } else if (this.which === "Second Weapon Inventory" && allies[0].gun2 !== "NONE") {
                stroke(ammo[allies[0].gun2.ammo].lootFill);
            }
        }
        fill(0, 50);
        if (this.which === "First Weapon Inventory" && checkAttachment(0)) {
            fill(255, 200, 0, 25);
        } else if (this.which === "Second Weapon Inventory" && checkAttachment(1)) {
            fill(255, 200, 0, 25);
        }
        rect(0, 0, this.width, this.height, 3);
        noStroke();
        if (this.which === "Backpack Inventory" && this.amount > 0) {
            fill(255, 100);
            rect(0, (this.height / 2) - (this.height * ((this.amount / this.max) / 2)), this.width - 2, (this.height * (this.amount / this.max)) - 2);
        }
        if (this.which === "Armor Inventory" && this.amount > 0) {
            fill(255, 0, 0, 100);
            rect(0, ((this.height / 2) - (this.height * ((this.amount / this.max) / 2))) - 1, this.width - 2, (this.height * (this.amount / this.max)) - 1);
        }
        var mouseOnTheAttachment = false;
        if ((this.which === "First Weapon Inventory" && allies[0].gun1 !== "NONE") || (this.which === "Second Weapon Inventory" && allies[0].gun2 !== "NONE")) {
            fill(0, 50);
            var possibleAttach = [];
            for (var i = 4; i >= 0; i--) {
                if (this.subAmount[i] > 0) {
                    possibleAttach.push(i);
                }
            }
            for (var i = possibleAttach.length - 1; i >= 0; i--) {
                var a = possibleAttach[i];
                if (this.subAmount[a] !== 0) {
                    if (this.subLevel[a] < levelColors.length && this.subAmount[a] === 2) {
                        stroke(levelColors[this.subLevel[a] + 1]);
                    } else {
                        stroke(0);
                    }
                    strokeWeight(1);
                    fill(0, 50);
                    var x = ((this.x + (this.width / 2)) - 15) - (25 * i), y = (this.y + (this.height / 2)) - 15;
                    rect(x - this.x, y - this.y, 20, 20, 3);
                    if (MOUSEX >= x - 10 && MOUSEX <= x + 10 && MOUSEY >= y - 10 && MOUSEY <= y + 10) {
                        mouseOnTheAttachment = true;
                        fill(255, 50);
                        rect(x - this.x, y - this.y, 20, 20, 3);
                    }
                    if (!isNaN(this.subMax[a])) {
                        var c;
                        if (this.which === "First Weapon Inventory") {
                            c = allies[0].gun1.allAttachments[this.subMax[a]];
                        } else if (this.which === "Second Weapon Inventory") {
                            c = allies[0].gun2.allAttachments[this.subMax[a]];
                        }
                        renderImage(attachments[c.type[0]][c.type[1]].graphic, x - this.x, y - this.y, 18, 18);
                    }
                }
            }
            stroke(0);
            fill(0, 50);
            var x = (this.x - (this.width / 2)) + 15, y = (this.y + (this.height / 2)) - 15, x2 = x - this.x, y2 = y - this.y;
            rect(x2, y2, 20, 20, 3);
            if (MOUSEX >= x - 10 && MOUSEX <= x + 10 && MOUSEY >= y - 10 && MOUSEY <= y + 10) {
                mouseOnTheAttachment = true;
                fill(255, 50);
                rect(x2, y2, 20, 20, 3);
            }
            fill(255);
            textFont(fonts.Calibri18);
            text("?", x2 + 1, y2);
            fill(230);
            textFont(fonts.CalibriBold14);
            textAlign(LEFT, TOP);
            if (this.which === "First Weapon Inventory") {
                text(guns[allies[0].weapons[0]].name, -this.width / 2 + 3, -this.height / 2 + 3);
            } else if (this.which === "Second Weapon Inventory") {
                text(guns[allies[0].weapons[1]].name, -this.width / 2 + 3, -this.height / 2 + 3);
            }
            textFont(fonts.Calibri14);
            textAlign(RIGHT, TOP);
            if (this.which === "First Weapon Inventory") {
                text((allies[0].currentWeapon === 0 ? allies[0].inMag : allies[0].gun1.inMag) + "/" + allies[0].gun1.mag, this.width / 2 - 3, -this.height / 2 + 3);
            } else if (this.which === "Second Weapon Inventory") {
                text((allies[0].currentWeapon === 1 ? allies[0].inMag : allies[0].gun2.inMag) + "/" + allies[0].gun2.mag, this.width / 2 - 3, -this.height / 2 + 3);
            }
            textAlign(CENTER, CENTER);
        }
        if (this.which === "First Weapon Inventory" && allies[0].gun1 !== "NONE") {
            renderImage(guns[allies[0].weapons[0]].graphic, 0, -7, this.width - 10, this.height - 50);
        } else if (this.which === "Second Weapon Inventory" && allies[0].gun2 !== "NONE") {
            renderImage(guns[allies[0].weapons[1]].graphic, 0, -7, this.width - 10, this.height - 50);
        } else if (this.which === "Melee Inventory") {
            renderImage(melee[allies[0].weapons[2]].graphic, 0, 0, this.width - 6, this.height - 6);
        } else if (this.which === "Armor Inventory") {
            renderImage(armor[allies[0].armor].graphic, 0, 0, this.width - 6, this.height - 6);
            if (allies[0].armor === 0) {
                fill(255);
                textFont(fonts.Calibri18);
                text("-", 0, 0);
            }
        } else if (this.which === "Backpack Inventory") {
            renderImage(backpack[allies[0].backpack].graphic, 0, 0, this.width - 6, this.height - 6);
            if (allies[0].armor === 0) {
                fill(255);
                textFont(fonts.Calibri18);
                text("-", 0, 0);
            }
        }
        noStroke();
        if (MOUSEX >= this.x - (this.width / 2) && MOUSEX <= this.x + (this.width / 2) && MOUSEY >= this.y - (this.height / 2) && MOUSEY <= this.y + (this.height / 2) && (this.which === "Armor Inventory" || this.which === "Melee Inventory" || this.which === "Backpack Inventory" || ((this.which === "First Weapon Inventory" && allies[0].gun1 !== "NONE") || (this.which === "Second Weapon Inventory" && allies[0].gun2 !== "NONE")))) {
            cursor(HAND);
            if (!mouseOnTheAttachment) {
                fill(255, 50);
                rect(0, 0, this.width - 2, this.height - 2, 3);
            }
        }
    } else if (this.which === "Inventory Spots") {
        fill(0, 50);
        var a = (this.width - 40) / (this.max / 2);
        for (var i = 0; i < this.max / 2; i++) {
            for (var j = 0; j < 2; j++) {
                var x = (-this.width / 2) + ((a / 2) + 5) + (i * (a + 5)), y = -2.5 - (a / 2) + (j * (a + 5)), b, c, d;
                fill(255, 150);
                if (j === 0) {
                    b = i;
                } else {
                    b = 7 + i;
                }
                if (this.subAmount[b] !== "LOCKED") {
                    c = this.subAmount[b]; 
                    d = this.subMax[b];
                    rect(x, ((y + (a / 2)) - ((a * (c / d)) / 2)) - 1, a, (a * (c / d)) - 1);
                }
                fill(0, 50);
                strokeWeight(2);
                if (this.subLevel[b] > 0 && this.subLevel[b] < levelColors.length) {
                    stroke(levelColors[this.subLevel[b]]);
                } else if (this.subAmount[b] === "LOCKED") {
                    stroke(255, 50, 50);
                } else {
                    stroke(0);
                    if (allies[0].inventory[b][1] === "Ammo") {
                        stroke(ammo[allies[0].inventory[b][0]].lootFill);
                    } else if (allies[0].inventory[b][1] === "Medical") {
                        stroke(medical[allies[0].inventory[b][0]].type === "Health" ? color(150, 0, 0) : color(0, 150, 150));
                    }
                }
                rect(x, y, a, a);
                noStroke();
                if (MOUSEX >= (x - (a / 2)) + this.x && MOUSEX <= (x + (a / 2)) + this.x && MOUSEY >= this.y + (y - (a / 2)) && MOUSEY <= this.y + (y + (a / 2))) {
                    if (this.subAmount[b] === "LOCKED") {
                        cursor('no-drop');
                        fill(0, 50);
                    } else {
                        cursor('grab');
                        fill(255, 50);
                    }
                    rect(x, y, a - 2, a - 2);
                }
                fill(255);
                textFont(fonts.Calibri10);
                textAlign(CENTER, BOTTOM);
                if (this.subAmount[b] !== "LOCKED") {
                    if (this.subAmount[b] !== "EMPTY") {
                        if (allies[0].inventory[b][1] !== "Attachment") {
                            text(" / ", x, (y + (a / 2)) - 2);
                            textAlign(RIGHT, BOTTOM);
                            text(this.subAmount[b], x - 3, (y + (a / 2)) - 2);
                            textAlign(LEFT, BOTTOM);
                            text(this.subMax[b], x + 3, (y + (a / 2)) - 2);
                        } else {
                            text("Level " + this.subLevel[b], x, (y + (a / 2)) - 2);
                            renderImage(attachments[allies[0].inventory[b][0][0]][allies[0].inventory[b][0][1]].graphic, x, y - 5, a - 6, a - 14);
                        }
                        if (allies[0].inventory[b][1] === "Grenade") {
                            renderImage(grenades[allies[0].inventory[b][0]].graphic, x, y - 5, a - 6, a - 14);
                        } else if (allies[0].inventory[b][1] === "Ammo") {
                            renderImage(ammo[allies[0].inventory[b][0]].graphic, x, y - 5, a - 6, a - 14);
                        } else if (allies[0].inventory[b][1] === "Medical") {
                            renderImage(medical[allies[0].inventory[b][0]].graphic, x, y - 5, a - 6, a - 14);
                        }
                    } else {
                        text("-", x, (y + (a / 2)) - 2);
                    }
                } else {
                    text("LOCKED", x, (y + (a / 2)) - 1);
                    var img = "lock";
                    image(images[img], x, y - 4, 250, 250);
                }
                textAlign(CENTER, CENTER);
            }
        }
    } else if (this.which === "Inventory Back" || this.which === "Inventory Map" || this.which === "Datapad Back" || this.which === "Pause Return" || this.which === "Pause Settings" || this.which === "Pause Help" || this.which === "Pause Menu" || this.which === "Pause2 Yes" || this.which === "Pause2 No" || this.which === "Pause2 Back") {
        stroke(255);
        strokeWeight(2);
        fill(0, 50);
        rect(0, 0, this.width, this.height, 3);
        if (MOUSEX >= this.x - (this.width / 2) && MOUSEX <= this.x + (this.width / 2) && MOUSEY >= this.y - (this.height / 2) && MOUSEY <= this.y + (this.height / 2) && this.which !== "Pause2 Back") {
            if (this.which === "Inventory Map" && !gameVars.haveDatapad) {
                cursor('no-drop');
            } else {
                cursor(HAND);
                fill(255, 50);
                rect(0, 0, this.width, this.height, 3);
            }
        }
        if (this.which === "Inventory Map" && !gameVars.haveDatapad) {
            stroke(200);
        }
        if (this.which === "Inventory Back" || this.which === "Inventory Map" || this.which === "Datapad Back") {
            line(-15, 0, -13, -2);
            line(-15, 0, -13, 2);
        }
        noStroke();
        fill(255);
        textAlign(LEFT, CENTER);
        textFont(fonts.Calibri12);
        if (this.which === "Inventory Back" || this.which === "Datapad Back") {
            text("Back", -7, 0);
        } else if (this.which === "Inventory Map") {
            if (!gameVars.haveDatapad) {
                fill(200);
            }
            text("Map", -7, 0);
        } else if (this.which === "Pause Return") {
            textFont(fonts.Calibri18);
            textAlign(CENTER, CENTER);
            text("Return", 0, 0);
        } else if (this.which === "Pause Help") {
            textFont(fonts.Calibri18);
            textAlign(CENTER, CENTER);
            text("Help", 0, 0);
        } else if (this.which === "Pause Settings") {
            textFont(fonts.Calibri18);
            textAlign(CENTER, CENTER);
            text("Settings", 0, 0);
        } else if (this.which === "Pause Menu") {
            textFont(fonts.Calibri18);
            textAlign(CENTER, CENTER);
            text("Menu", 0, 0);
        } else if (this.which === "Pause2 Yes") {
            textAlign(CENTER, CENTER);
            text("Yes", 0, 0);
        } else if (this.which === "Pause2 No") {
            textAlign(CENTER, CENTER);
            text("No", 0, 0);
        } else if (this.which === "Pause2 Back") {
            textAlign(CENTER, TOP);
            textFont(fonts.Calibri14);
            fill(255, 0, 0);
            text("WARNING", 0, -30);
            fill(255);
            text("-                       -", 0, -30);
            textFont(fonts.Calibri12Italics);
            textAlign(CENTER, BOTTOM);
            fill(255);
            text("This will delete ALL progress", 0, -4.5);
            text("since your last save", 0, 5);
        }
        textAlign(CENTER, CENTER);
    } else if ((this.which === "Datapad Map Info" && datapadOn === 0) || (this.which === "Datapad Tyon Info" && datapadOn === 3) || (this.which === "Datapad Gun Info" && datapadOn === 2) || (this.which === "Datapad Objective Info" && datapadOn === 1)) {
        strokeWeight(2);
        fill(0, 50);
        if (this.which === "Datapad Map Info" && datapadOn === 0) {
            noStroke();
            rect(0, 0, this.width, this.height, 3);
            stroke(255);
            line(-((this.width / 2) - 3), -(this.height / 2), (this.width / 2) - 3, -(this.height / 2));
            arc(-((this.width / 2) - 3), -((this.height / 2) - 3), 6, 6, 180, 270);
            arc(((this.width / 2) - 3), -((this.height / 2) - 3), 6, 6, 270, 360);
            arc(((this.width / 2) - 3), ((this.height / 2) - 3), 6, 6, 0, 90);
            line(-(this.width / 2), -((this.height / 2) - 3), -(this.width / 2), (this.height / 2));
            line((this.width / 2), -((this.height / 2) - 3), (this.width / 2), (this.height / 2) - 3);
            line((this.width / 2) - 3, (this.height / 2), -88, (this.height / 2));
        } else if (this.which === "Datapad Objective Info" && datapadOn === 1) {
            noStroke();
            rect(0, 0, this.width, this.height, 3);
            stroke(255);
            line(-((this.width / 2) - 3), -(this.height / 2), (this.width / 2) - 3, -(this.height / 2));
            arc(-((this.width / 2) - 3), -((this.height / 2) - 3), 6, 6, 180, 270);
            arc(((this.width / 2) - 3), -((this.height / 2) - 3), 6, 6, 270, 360);
            arc(((this.width / 2) - 3), ((this.height / 2) - 3), 6, 6, 0, 90);
            arc(-((this.width / 2) - 3), ((this.height / 2) - 3), 6, 6, 90, 180);
            line((this.width / 2), -((this.height / 2) - 3), (this.width / 2), (this.height / 2) - 3);
            line((this.width / 2) - 3, (this.height / 2), 2, (this.height / 2));
            line(-((this.width / 2) - 3), (this.height / 2), -90, (this.height / 2));
            line(-(this.width / 2), -((this.height / 2) - 3), -(this.width / 2), (this.height / 2) - 3);
        } else if (this.which === "Datapad Gun Info" && datapadOn === 2) {
            noStroke();
            rect(0, 0, this.width, this.height, 3);
            stroke(255);
            line(-((this.width / 2) - 3), -(this.height / 2), (this.width / 2) - 3, -(this.height / 2));
            arc(-((this.width / 2) - 3), -((this.height / 2) - 3), 6, 6, 180, 270);
            arc(((this.width / 2) - 3), -((this.height / 2) - 3), 6, 6, 270, 360);
            arc(((this.width / 2) - 3), ((this.height / 2) - 3), 6, 6, 0, 90);
            arc(-((this.width / 2) - 3), ((this.height / 2) - 3), 6, 6, 90, 180);
            line((this.width / 2), -((this.height / 2) - 3), (this.width / 2), (this.height / 2) - 3);
            line((this.width / 2) - 3, (this.height / 2), 91, (this.height / 2));
            line(-((this.width / 2) - 3), (this.height / 2), -1, (this.height / 2));
            line(-(this.width / 2), -((this.height / 2) - 3), -(this.width / 2), (this.height / 2) - 3);
        } else if (this.which === "Datapad Tyon Info" && datapadOn === 3) {
            noStroke();
            rect(0, 0, this.width, this.height, 3);
            stroke(255);
            line(((this.width / 2) - 3), -(this.height / 2), -((this.width / 2) - 3), -(this.height / 2));
            arc(((this.width / 2) - 3), -((this.height / 2) - 3), 6, 6, 270, 360);
            arc(-((this.width / 2) - 3), -((this.height / 2) - 3), 6, 6, 180, 270);
            arc(-((this.width / 2) - 3), ((this.height / 2) - 3), 6, 6, 90, 180);
            line((this.width / 2), -((this.height / 2) - 3), (this.width / 2), (this.height / 2));
            line(-(this.width / 2), -((this.height / 2) - 3), -(this.width / 2), (this.height / 2) - 3);
            line(-(this.width / 2) + 3, (this.height / 2), 88, (this.height / 2));
        }
        fill(255);
        textFont(fonts.AgencyFB25);
        if (this.which === "Datapad Map Info" && datapadOn === 0) {
            var theLength = textWidth("MAP");
            text("MAP", 0, -140);
            stroke(255);
            strokeWeight(2);
            line(-theLength / 2, -125, theLength / 2, -125);
            line(-theLength / 2, -154, theLength / 2, -154);
            var a = maps[gameMap[0]].map();
            image(images[a[0]], 0, 0);
            noStroke();
            fill(0, 255, 0);
            ellipse((allies[0].x - a[1]) * a[3], (allies[0].y - a[2]) * a[3], 5, 5);
        } else if (this.which === "Datapad Objective Info" && datapadOn === 1) {
            var theLength = textWidth("OBJECTIVES");
            text("OBJECTIVES", 0, -140);
            stroke(255);
            strokeWeight(2);
            line(-theLength / 2, -125, theLength / 2, -125);
            line(-theLength / 2, -154, theLength / 2, -154);
            textFont(fonts.CalibriBold18);
            textAlign(LEFT, TOP);
            stroke(255);
            strokeWeight(2);
            if (objectives.length <= 0) {
                fill(220);
                text("No Objectives", -160, -110);
            } else {
                var missionList = "", totalHeight = 0;
                for (var i = 0; i < objectives.length; i++) {
                    var objectiveWidth = textWidth(objectives[i].name), objectiveHeight = ceil(objectiveWidth / 280) * 22;
                    text(objectives[i].name, -140, -110 + totalHeight, 280, 1000);
                    noFill();
                    ellipse(-150, -100 + totalHeight, 10, 10);
                    fill(255);
                    if (objectives[i].completed) {
                        ellipse(-150, -100 + totalHeight, 3.5, 3.5);
                    }
                    totalHeight += objectiveHeight;
                }
            }
            noStroke();
            textAlign(CENTER, CENTER);
        } else if (this.which === "Datapad Gun Info" && datapadOn === 2) {
            if (gunFocusingOn < 2) {
                if (allies[0].weapons[gunFocusingOn] !== "NONE") {
                    var whichGun = guns[allies[0].weapons[gunFocusingOn]], theLength = textWidth(whichGun.name.toUpperCase()), whichGun2 = allies[0].gun1;
                    if (gunFocusingOn === 1) {
                        whichGun2 = allies[0].gun2;
                    }
                    text(whichGun.name.toUpperCase(), 0, -140);
                    stroke(255);
                    strokeWeight(2);
                    line(-theLength / 2, -125, theLength / 2, -125);
                    line(-theLength / 2, -154, theLength / 2, -154);
                    textFont(fonts.Calibri12);
                    var a = text2(whichGun.description, 280);
                    noStroke();
                    fill(0, 50);
                    rectMode(CORNER);
                    rect(-145, -25, 290, a.length * 15 + 10);
                    rectMode(CENTER);
                    fill(255);
                    textAlign(CENTER, TOP);
                    //text(a, -140, -20, 280, 200);
                    text3(a, 0, -20, 15);
                    noStroke();
                    textFont(fonts.Calibri15);
                    textAlign(LEFT, BOTTOM);
                    text("Mag\nReload\nFire Delay\nDamage\nBullet Speed", -160, 150);
                    text("Accuracy\nRecoil\nADS Accuracy\nRange\nNoise", 10, 150);
                    fill(255, 255, 0);
                    text(((whichGun2.mag === whichGun.mag) ? "" : whichGun2.mag) + "\n" + ((whichGun2.reload === whichGun.reload) ? "" : whichGun2.reload) + "\n" + ((whichGun2.fireDelay === whichGun.fireSpeed) ? "" : whichGun2.fireDelay) + "\n" + ((whichGun2.bulletDamage === whichGun.bullet.damage) ? "" : (whichGun2.bulletDamage + " x " + whichGun.bullet.flechettes)) + "\n" + ((whichGun2.bulletVelocity === whichGun.bullet.velocity) ? "" : whichGun2.bulletVelocity), -35, 150);
                    text(((whichGun2.veer === whichGun.accuracy) ? "" : Round(whichGun2.veer, 1000)) + "\n" + ((whichGun2.recoil === whichGun.recoil) ? "" : Round(whichGun2.recoil, 1000)) + "\n" + ((whichGun2.scopeAccuracy === 1) ? "" : Round(whichGun2.scopeAccuracy * (whichGun.accuracy / 3), 1000)) + "\n" + ((whichGun2.range === whichGun.range) ? "" : whichGun2.range) + "\n" + ((whichGun2.noise === whichGun.noise) ? "" : whichGun2.noise), 135, 150);
                    fill(255);
                    textAlign(RIGHT, BOTTOM);
                    text(whichGun.mag + "\n" + whichGun.reload + "\n" + whichGun.fireSpeed + "\n" + whichGun.bullet.damage + " x " + whichGun.bullet.flechettes + "\n" + whichGun.bullet.velocity, -45, 150);
                    text(whichGun.accuracy + "\n" + whichGun.recoil + "\n" + Round(whichGun.accuracy / 3, 100) + "\n" + whichGun.bullet.range + "\n" + whichGun.noise, 125, 150);
                    stroke(255);
                    line(130, 150, 130, 52);
                    line(-40, 150, -40, 52);
                    textAlign(CENTER, CENTER);
                    if (gunFocusingOn === 0 && allies[0].gun1 !== "NONE") {
                        renderImage(guns[allies[0].weapons[0]].graphic, 0, -80, this.width - 80, this.height - 260);
                    } else if (gunFocusingOn === 1 && allies[0].gun2 !== "NONE") {
                        renderImage(guns[allies[0].weapons[1]].graphic, 0, -80, this.width - 80, this.height - 260);
                    }
                } else {
                    var theLength = textWidth("NO WEAPON");
                    text("NO WEAPON", 0, -140);
                    stroke(255);
                    strokeWeight(2);
                    line(-theLength / 2, -125, theLength / 2, -125);
                    line(-theLength / 2, -154, theLength / 2, -154);
                    textFont(fonts.Calibri12);
                    noStroke();
                    fill(0, 50);
                    rectMode(CORNER);
                    rect(-145, -25, 290, 22);
                    rectMode(CENTER);
                    fill(255);
                    textAlign(CENTER, TOP);
                    text("No weapon is equipped in slot " + (gunFocusingOn + 1) + ".", -140, -20, 280, 200);
                    textAlign(CENTER, CENTER);
                }
            } else {
                var whichMelee = melee[allies[0].weapons[2]], theLength = textWidth(whichMelee.name.toUpperCase());
                text(whichMelee.name.toUpperCase(), 0, -140);
                stroke(255);
                strokeWeight(2);
                line(-theLength / 2, -125, theLength / 2, -125);
                line(-theLength / 2, -154, theLength / 2, -154);
                textFont(fonts.Calibri12);
                var a = text2(whichMelee.description, 280);
                noStroke();
                fill(0, 50);
                rectMode(CORNER);
                rect(-145, -25, 290, a.length * 15 + 10);
                rectMode(CENTER);
                fill(255);
                textAlign(CENTER, TOP);
                //text(whichMelee.description, -140, -20, 280, 200);
                text3(a, 0, -20, 15);
                noStroke();
                textFont(fonts.Calibri15);
                textAlign(LEFT, BOTTOM);
                text("Reload  " + whichMelee.reload, -160, 150);
                fill(255);
                textAlign(RIGHT, BOTTOM);
                text("Damage  " + whichMelee.damage, 160, 150);
                textAlign(CENTER, CENTER);
                renderImage(melee[allies[0].weapons[2]].graphic, 0, -80, this.width - 150, this.height - 260);
            }
            noStroke();
            if (MOUSEX >= this.x + 145 && MOUSEX <= this.x + 165 && MOUSEY >= this.y - 95 && MOUSEY <= this.y - 65) {
                cursor(HAND);
                fill(255, 50);
                rect(155, -80, 20, 30);
            }
            if (MOUSEX <= this.x - 145 && MOUSEX >= this.x - 165 && MOUSEY >= this.y - 95 && MOUSEY <= this.y - 65) {
                cursor(HAND);
                fill(255, 50);
                rect(-155, -80, 20, 30);
            }
            stroke(255);
            strokeWeight(2);
            line(160, -80, 150, -90);
            line(160, -80, 150, -70);
            line(-160, -80, -150, -90);
            line(-160, -80, -150, -70);
            noStroke();
        } else if (this.which === "Datapad Tyon Info" && datapadOn === 3) {
            var theLength = textWidth("INFO");
            text("INFO", 0, -140);
            stroke(255);
            strokeWeight(2);
            line(-theLength / 2, -125, theLength / 2, -125);
            line(-theLength / 2, -154, theLength / 2, -154);
            textFont(fonts.CalibriBold18);
            textAlign(LEFT, TOP);
            text("Name:\nHealth:\nLevel:", -160, -110);
            textAlign(RIGHT, TOP);
            text(playerInfo[0] + " " + playerInfo[1] + "\n" + round(allies[0].health) + "\n" + gameMap[0], 160, -110);
            noStroke();
            textAlign(CENTER, CENTER);
        }
    } else if (this.which === "Datapad Map Button" || this.which === "Datapad Tyon Button" || this.which === "Datapad Gun Button" || this.which === "Datapad Objective Button") {
        strokeWeight(2);
        fill(0, 50);
        noStroke();
        if (!((this.which === "Datapad Map Button" && datapadOn === 0) || (this.which === "Datapad Tyon Button" && datapadOn === 3) || (this.which === "Datapad Gun Button" && datapadOn === 2) || (this.which === "Datapad Objective Button" && datapadOn === 1))) {
            stroke(255);
            rect(0, 0, this.width, this.height, 3);
        } else {
            rect(0, -3, this.width, this.height + 4, 3);
        }
        noFill();
        stroke(255);
        strokeWeight(2);
        if (this.which === "Datapad Map Button" && datapadOn === 0) {
            line(-(this.width / 2), ((this.height / 2) - 3), -(this.width / 2), -100);
            arc(-((this.width / 2) - 3), (this.height / 2) - 3, 6, 6, 90, 180);
            line(-((this.width / 2) - 3), this.height / 2, (this.width / 2) - 3, this.height / 2);
            arc(((this.width / 2) - 3), (this.height / 2) - 3, 6, 6, 0, 90);
            line((this.width / 2), ((this.height / 2) - 3), (this.width / 2), -((this.height / 2) + 1));
            arc(((this.width / 2) + 3), -((this.height / 2) + 2.2), 6, 6, 180, 270);
        } else if ((this.which === "Datapad Objective Button" && datapadOn === 1) || (this.which === "Datapad Gun Button" && datapadOn === 2)) {
            arc((this.width / 2) - 3, (this.height / 2) - 3, 6, 6, 0, 90);
            line((this.width / 2) - 3, this.height / 2, -(this.width / 2) + 3, this.height / 2);
            arc(-(this.width / 2) + 3, (this.height / 2) - 3, 6, 6, 90, 180);
            line(-(this.width / 2), ((this.height / 2) - 3), -(this.width / 2), -((this.height / 2) + 3));
            arc(-(this.width / 2) - 3, -((this.height / 2) + 2.2), 6, 6, 270, 360);
            line((this.width / 2), ((this.height / 2) - 3), (this.width / 2), -((this.height / 2) + 3));
            arc((this.width / 2) + 3, -((this.height / 2) + 2.2), 6, 6, 180, 270);
        } else if (this.which === "Datapad Tyon Button" && datapadOn === 3) {
            line((this.width / 2), ((this.height / 2) - 3), (this.width / 2), -100);
            arc((this.width / 2) - 3, (this.height / 2) - 3, 6, 6, 0, 90);
            line((this.width / 2) - 3, this.height / 2, -(this.width / 2) + 3, this.height / 2);
            arc(-(this.width / 2) + 3, (this.height / 2) - 3, 6, 6, 90, 180);
            line(-(this.width / 2), ((this.height / 2) - 3), -(this.width / 2), -((this.height / 2) + 3));
            arc(-(this.width / 2) - 3, -((this.height / 2) + 2.2), 6, 6, 270, 360);
        }
        if (MOUSEX >= this.x - (this.width / 2) && MOUSEX <= this.x + (this.width / 2) && MOUSEY >= this.y - (this.height / 2) && MOUSEY <= this.y + (this.height / 2) && !((this.which === "Datapad Map Button" && datapadOn === 0) || (this.which === "Datapad Tyon Button" && datapadOn === 3) || (this.which === "Datapad Gun Button" && datapadOn === 2) || (this.which === "Datapad Objective Button" && datapadOn === 1))) {
            fill(255, 50);
            rect(0, 0, this.width, this.height, 3);
            cursor(HAND);
        }
        textFont(fonts.Calibri15);
        if ((this.which === "Datapad Map Button" && datapadOn === 0) || (this.which === "Datapad Tyon Button" && datapadOn === 3) || (this.which === "Datapad Gun Button" && datapadOn === 2) || (this.which === "Datapad Objective Button" && datapadOn === 1)) {
            fill(255, 255, 0);
        } else {
            fill(255);
        }
        if (this.which === "Datapad Map Button") {
            text("Map", 0, 0);
        } else if (this.which === "Datapad Tyon Button") {
            text("Info", 0, 0);
        } else if (this.which === "Datapad Gun Button") {
            text("Weapons", 0, 0);
        } else if (this.which === "Datapad Objective Button") {
            text("Mission", 0, 0);
        }
    }
    popMatrix();
    if (scene === "inventory" && draggingLoot !== "NONE") {
        cursor('grabbing');
        if (draggingLoot[0] === "First Weapon Inventory" || draggingLoot[0] === "Second Weapon Inventory") {
            renderImage(attachments[draggingLoot[1][0]][draggingLoot[1][1]].graphic, MOUSEX, MOUSEY, 30, 30);
        } else if (draggingLoot[0] === "Inventory") {
            var a = allies[0].inventory[draggingLoot[1]];
            renderImage(attachments[a[0][0]][a[0][1]].graphic, MOUSEX, MOUSEY, 30, 30);
        }
    }
};
UIpiece.prototype.showLootInfo = function() {
    if ((this.which === "First Weapon Inventory" && allies[0].gun1 !== "NONE") || (this.which === "Second Weapon Inventory" && allies[0].gun2 !== "NONE")) {
        var whichGun;
        if (this.which === "First Weapon Inventory") {
            whichGun = allies[0].gun1;
        } else {
            whichGun = allies[0].gun2;
        }
        var mouseOnTheAttachment = false;
        var possibleAttach = [];
        for (var i = 0; i < 5; i++) {
            if (this.subAmount[i] > 0) {
                possibleAttach.push(i);
            }
        }
        for (var i = possibleAttach.length - 1; i >= 0; i--) {
            var a = possibleAttach[i];
            if (this.subAmount[a] !== 0) {
                var x = ((this.x + (this.width / 2)) - 15) - (25 * ((possibleAttach.length - 1) - i)), y = (this.y + (this.height / 2)) - 15;
                if (MOUSEX >= x - 10 && MOUSEX <= x + 10 && MOUSEY >= y - 10 && MOUSEY <= y + 10) {
                    if (mouseIsPressed && mouseButton === LEFT && this.subAmount[a] === 2 && draggingLoot === "NONE") {
                        var b = this.subMax[a];
                        var c = whichGun.allAttachments[b];
                        draggingLoot = [this.which, [c.type[0], c.type[1], this.subLevel[a]]];
                    }
                    if (draggingLoot === "NONE") {
                        mouseOnTheAttachment = true;
                        onLoot = true;
                        var c = "NONE";
                        if (this.subAmount[a] === 1) {
                            var canFit = "Possible attachment(s): ", allCanFit = [];
                            for (var j = 0; j < whichGun.allAttachments.length; j++) {
                                var Simple = whichGun.allAttachments[j], simple = attachments[Simple.type[0]][Simple.type[1]];
                                if (Simple.type[0] === this.subMax[a]) {
                                    allCanFit.push(j);
                                }
                            }
                            for (var j = 0; j < allCanFit.length; j++) {
                                var Simple = whichGun.allAttachments[allCanFit[j]], simple = attachments[Simple.type[0]][Simple.type[1]];
                                if (Simple.type[0] === this.subMax[a]) {
                                    if (j === allCanFit.length - 1) {
                                        if (allCanFit.length === 1) {
                                            canFit += simple.name + ".";
                                        } else {
                                            canFit += "and " + simple.name + ".";
                                        }
                                    } else {
                                        if (allCanFit.length === 2) {
                                            canFit += simple.name + " ";
                                        } else {
                                            canFit += simple.name + ", ";
                                        }
                                    }
                                }
                            }
                            lootInfo(MOUSEX, MOUSEY, "NONE", "NONE", this.subMax[a], "Not Equipped", canFit, [this.which, i]);
                        } else {
                            var b = this.subMax[a];
                            c = whichGun.allAttachments[b];
                            var d = attachments[c.type[0]][c.type[1]];
                            lootInfo(MOUSEX, MOUSEY, "NONE", commandKeys.drop[1], d.name, c.type[0], d.description, [this.which, i]);
                        }
                        lootOn = [this.which, i, c];
                    }
                }
            }
        }
        var x = (this.x - (this.width / 2)) + 15, y = (this.y + (this.height / 2)) - 15;
        if (MOUSEX >= x - 10 && MOUSEX <= x + 10 && MOUSEY >= y - 10 && MOUSEY <= y + 10) {
            mouseOnTheAttachment = true;
        }
        if (MOUSEX >= this.x - (this.width / 2) && MOUSEX <= this.x + (this.width / 2) && MOUSEY >= this.y - (this.height / 2) && MOUSEY <= this.y + (this.height / 2) && !mouseOnTheAttachment) {
            if (draggingLoot === "NONE") {
                onLoot = true;
                if (this.which === "First Weapon Inventory") {
                    lootInfo(MOUSEX, MOUSEY, commandKeys.firstWeapon[1], commandKeys.drop[1], allies[0].gun1.number.name, allies[0].gun1.ammo, allies[0].gun1.description, ["First Weapon Inventory", "Gun"]);
                } else {
                    lootInfo(MOUSEX, MOUSEY, commandKeys.secondWeapon[1], commandKeys.drop[1], allies[0].gun2.number.name, allies[0].gun2.ammo, allies[0].gun2.description, ["Second Weapon Inventory", "Gun"]);
                }
                lootOn = [this.which, "Gun"];
            }
        }
    } else if (this.which === "Armor Inventory") {
        if (MOUSEX >= this.x - (this.width / 2) && MOUSEX <= this.x + (this.width / 2) && MOUSEY >= this.y - (this.width / 2) && MOUSEY <= this.y + (this.width / 2)) {
            onLoot = true;
            if (armor[allies[0].armor].level !== "None") {
                lootInfo(MOUSEX, MOUSEY, "NONE", commandKeys.drop[1], armor[allies[0].armor].name, "Level " + armor[allies[0].armor].level, armor[allies[0].armor].description, ["Armor Inventory", 0]);
            } else {
                lootInfo(MOUSEX, MOUSEY, "NONE", "NONE", armor[allies[0].armor].name, "", armor[allies[0].armor].description, ["Armor Inventory", 0]);
            }
            lootOn = ["Armor Inventory", 0];
        }
    } else if (this.which === "Melee Inventory") {
        if (MOUSEX >= this.x - (this.width / 2) && MOUSEX <= this.x + (this.width / 2) && MOUSEY >= this.y - (this.width / 2) && MOUSEY <= this.y + (this.width / 2)) {
            onLoot = true;
            var dropLoot = commandKeys.drop[1], theLevel = "Level " + allies[0].meleeWeapon.level;
            if (allies[0].weapons[2] === 0) {
                dropLoot = "NONE";
                theLevel = "";
            }
            lootInfo(MOUSEX, MOUSEY, commandKeys.melee[1], dropLoot, allies[0].meleeWeapon.name, theLevel, allies[0].meleeWeapon.description, ["Melee Inventory", 0]);
            lootOn = ["Melee Inventory", 0];
        }
    } else if (this.which === "Backpack Inventory") {
        if (MOUSEX >= this.x - (this.width / 2) && MOUSEX <= this.x + (this.width / 2) && MOUSEY >= this.y - (this.width / 2) && MOUSEY <= this.y + (this.width / 2)) {
            onLoot = true;
            var theLevel = "Level " + allies[0].backpack, dropLoot = commandKeys.drop[1];
            if (allies[0].backpack === 0) {
                theLevel = "";
                dropLoot = "NONE";
            }
            lootInfo(MOUSEX, MOUSEY, "NONE", dropLoot, backpack[allies[0].backpack].name, theLevel, backpack[allies[0].backpack].description, ["Backpack Inventory", 0]);
            lootOn = ["Backpack Inventory", 0];
        }
    } else if (this.which === "Inventory Spots") {
        var a = (this.width - 40) / (this.max / 2);
        for (var i = 0; i < this.max / 2; i++) {
            for (var j = 0; j < 2; j++) {
                var x = (-this.width / 2) + ((a / 2) + 5) + (i * (a + 5)), y = -2.5 - (a / 2) + (j * (a + 5)), b, c, d;
                if (j === 0) {
                    b = i;
                } else {
                    b = 7 + i;
                }
                c = this.subAmount[b];
                d = this.subMax[b];
                if (MOUSEX >= (x - (a / 2)) + this.x && MOUSEX <= (x + (a / 2)) + this.x && MOUSEY >= this.y + (y - (a / 2)) && MOUSEY <= this.y + (y + (a / 2))) {
                    var e = allies[0].inventory[b], f, g, h = "", i, k = "NONE", l = commandKeys.drop[1];
                    if (e[1] === "Ammo") {
                        f = ammo[e[0]];
                        g = f.name;
                        h = "";
                        j = "Used by ";
                        for (var m = 0; m < f.usedFor.length; m++) {
                            if (m < f.usedFor.length - 1) {
                                if (f.usedFor.length > 2) {
                                    j += guns[f.usedFor[m]].name + ", ";
                                } else {
                                    j += guns[f.usedFor[m]].name + " ";
                                }
                            } else {
                                j += "and " + guns[f.usedFor[m]].name + ".";
                            }
                        }
                    } else if (e[1] === "Medical") {
                        f = medical[e[0]];
                        g = f.name;
                        h = f.type;
                        j = f.description;
                        k = commandKeys.meds[1];
                    } else if (e[1] === "Grenade") {
                        f = grenades[e[0]];
                        g = f.name;
                        j = f.description;
                        k = commandKeys.grenade[1];
                    } else if (e[1] === "Attachment") {
                        f = attachments[e[0][0]][e[0][1]];
                        g = f.name;
                        h = "Level " + (e[2] + 1);
                        j = f.description;
                        if (mouseIsPressed && mouseButton === LEFT && draggingLoot === "NONE") {
                            draggingLoot = ["Inventory", b];
                        }
                    } else if (e[1] === "EMPTY") {
                        g = "Empty";
                        j = "This inventory spot is empty. Pick up some loot to fill it!";
                        l = "NONE";
                    } else if (e[1] === "LOCKED") {
                        g = "Locked";
                        j = "This inventory spot is locked. Pick up a better backpack to open it up!";
                        l = "NONE";
                    }
                    onLoot = true;
                    lootInfo(MOUSEX, MOUSEY, k, l, g, h, j, ["Inventory Spot", b]);
                    lootOn = ["Inventory Spot", b];
                }
            }
        }
    }
};
UIpiece.prototype.update = function() {
    if (this.which === "Health Bar") {
        this.amount = allies[0].health;
        this.max = allies[0].maxHealth;
    } else if (this.which === "Stim Bar") {
        this.amount = allies[0].stim;
    } else if (this.which === "Backpack" || this.which === "Backpack Inventory") {
        this.amount = 0;
        for (var i = 0; i < allies[0].inventory.length; i++) {
            if (allies[0].inventory[i][1] !== "EMPTY" && allies[0].inventory[i][1] !== "LOCKED") {
                this.amount++;
            }
        }
        this.max = backpack[allies[0].backpack].spaces;
        this.level = backpack[allies[0].backpack].level;
    } else if (this.which === "Armor") {
        this.max = armor[allies[0].armor].health;
        this.amount = this.max - allies[0].armorHealth;
        this.level = armor[allies[0].armor].level;
    } else if (this.which === "Ammo") {
        if (allies[0].healing) {
            if (allies[0].allMeds.length > 0) {
                this.amount = allies[0].allMeds[allies[0].usingMed][1];
            }
            this.max = 100;
        } else {
            if (allies[0].currentWeapon < 2 || allies[0].onTurret) {
                this.amount = allies[0].inMag;
                this.max = allies[0].mag;
            } else if (allies[0].currentWeapon === 2) {
                this.amount = "-";
                this.max = "-";
            } else if (allies[0].currentWeapon === 3) {
                if (allies[0].allGrenades.length > 0) {
                    this.amount = allies[0].allGrenades[allies[0].bombSelect][1];
                } else {
                    this.amount = 0;
                }
                this.max = 100;
            }
        }
    } else if (this.which === "Gun Picture") {
        if (allies[0].healing) {
            this.amount = allies[0].currentReload;
            this.max = medical[allies[0].allMeds[allies[0].usingMed][0]].time;
        } else {
            if (allies[0].currentWeapon < 2 || allies[0].onTurret) {
                if (allies[0].reloading) {
                    this.amount = allies[0].currentReload;
                    this.max = allies[0].reload;
                } else {
                    if (allies[0].spool <= 0 || allies[0].spool === "NONE") {
                        if (allies[0].fireMode === "Burstfire" && !allies[0].canFire) {
                            this.amount = allies[0].currentFire;
                            this.max = allies[0].fireDelay * allies[0].burst;
                        } else {
                            this.amount = allies[0].currentFire;
                            this.max = allies[0].fireDelay;
                        }
                    } else {
                        this.amount = allies[0].spool;
                        this.max = allies[0].spoolMax;
                    }
                }
            } else if (allies[0].currentWeapon === 2) {
                if (!allies[0].attacking) {
                    this.amount = allies[0].currentReload;
                } else {
                    this.amount = allies[0].reload;
                }
                this.max = allies[0].reload;
            } else if (allies[0].currentWeapon === 3) {
                if (allies[0].allGrenades.length > 0) {
                    this.amount = allies[0].reload;
                } else {
                    this.amount = 30;
                }
                this.max = 30;
            }
        }
    } else if (this.which === "First Weapon") {
        if (allies[0].currentWeapon === 0) {
            if (allies[0].reloading) {
                this.amount = allies[0].reload - allies[0].currentReload;
                this.max = allies[0].reload;
            } else {
                this.amount = allies[0].inMag;
                this.max = allies[0].mag;
            }
        } else {
            this.amount = allies[0].gun1.inMag;
            this.max = allies[0].gun1.mag;
        }
    } else if (this.which === "Second Weapon") {
        if (allies[0].currentWeapon === 1) {
            if (allies[0].reloading) {
                this.amount = allies[0].reload - allies[0].currentReload;
                this.max = allies[0].reload;
            } else {
                this.amount = allies[0].inMag;
                this.max = allies[0].mag;
            }
        } else {
            this.amount = allies[0].gun2.inMag;
            this.max = allies[0].gun2.mag;
        }
    } else if (this.which === "Melee Weapon") {
        if (allies[0].onTurret && allies[0].reloading) {
            this.amount = allies[0].reload - allies[0].currentReload;
            this.max = allies[0].reload;
        } else if (allies[0].onTurret) {
            this.amount = allies[0].inMag;
            this.max = allies[0].mag;
        } else {
            this.amount = 0;
            this.max = 1;
        }
    } else if (this.which === "Grenade") {
        if (!this.selected && pressed(commandKeys.grenade) && grenadeButtonTime >= 30) {
            this.selected = true;
        } else if (!pressed(commandKeys.grenade) || grenadeButtonTime < 30) {
            if (this.selected && this.optionSelected !== "NONE" && allies[0].allGrenades.length > 0) {
                for (var i = 0; i < allies[0].allGrenades.length; i++) {
                    if (this.optionSelected === allies[0].allGrenades[i][0]) {
                        allies[0].bombSelect = i;
                    }
                }
            }
            this.selected = false;
        }
    } else if (this.which === "Meds") {
        if (!this.selected && pressed(commandKeys.meds) && medButtonTime >= 30) {
            this.selected = true;
        } else if (!pressed(commandKeys.meds) || medButtonTime < 30) {
            if (this.selected && this.optionSelected !== "NONE" && allies[0].allMeds.length > 0) {
                for (var i = 0; i < allies[0].allMeds.length; i++) {
                    if (this.optionSelected === allies[0].allMeds[i][0]) {
                        allies[0].medSelect = i;
                    }
                }
            }
            this.selected = false;
        }
    } else if (this.which === "First Weapon Inventory" && allies[0].gun1 !== "NONE") {
        if (allies[0].gun1.attachments.muzzle === "NONE") {
            this.subAmount[0] = 0;
        } else {
            if (allies[0].gun1.attachments.muzzle === "EMPTY") {
                this.subAmount[0] = 1;
                this.subMax[0] = "Muzzle";
            } else {
                this.subAmount[0] = 2;
                this.subLevel[0] = allies[0].gun1.attachments.muzzle[1];
                this.subMax[0] = allies[0].gun1.attachments.muzzle[0];
            }
        }
        if (allies[0].gun1.attachments.grip === "NONE") {
            this.subAmount[1] = 0;
        } else {
            if (allies[0].gun1.attachments.grip === "EMPTY") {
                this.subAmount[1] = 1;
                this.subMax[1] = "Foregrip";
            } else {
                this.subAmount[1] = 2;
                this.subLevel[1] = allies[0].gun1.attachments.grip[1];
                this.subMax[1] = allies[0].gun1.attachments.grip[0];
            }
        }
        if (allies[0].gun1.attachments.scope === "NONE") {
            this.subAmount[2] = 0;
        } else {
            if (allies[0].gun1.attachments.scope === "EMPTY") {
                this.subAmount[2] = 1;
                this.subMax[2] = "Scope";
            } else {
                this.subAmount[2] = 2;
                this.subLevel[2] = allies[0].gun1.attachments.scope[1];
                this.subMax[2] = allies[0].gun1.attachments.scope[0];
            }
        }
        if (allies[0].gun1.attachments.mag === "NONE") {
            this.subAmount[3] = 0;
        } else {
            if (allies[0].gun1.attachments.mag === "EMPTY") {
                this.subAmount[3] = 1;
                this.subMax[3] = "Magazine";
            } else {
                this.subAmount[3] = 2;
                this.subLevel[3] = allies[0].gun1.attachments.mag[1];
                this.subMax[3] = allies[0].gun1.attachments.mag[0];
            }
        }
        if (allies[0].gun1.attachments.stock === "NONE") {
            this.subAmount[4] = 0;
        } else {
            if (allies[0].gun1.attachments.stock === "EMPTY") {
                this.subAmount[4] = 1;
                this.subMax[4] = "Stock";
            } else {
                this.subAmount[4] = 2;
                this.subLevel[4] = allies[0].gun1.attachments.stock[1];
                this.subMax[4] = allies[0].gun1.attachments.stock[0];
            }
        }
    } else if (this.which === "Second Weapon Inventory" && allies[0].gun2 !== "NONE") {
        if (allies[0].gun2.attachments.muzzle === "NONE") {
            this.subAmount[0] = 0;
        } else {
            if (allies[0].gun2.attachments.muzzle === "EMPTY") {
                this.subAmount[0] = 1;
                this.subMax[0] = "Muzzle";
            } else {
                this.subAmount[0] = 2;
                this.subLevel[0] = allies[0].gun2.attachments.muzzle[1];
                this.subMax[0] = allies[0].gun2.attachments.muzzle[0];
            }
        }
        if (allies[0].gun2.attachments.grip === "NONE") {
            this.subAmount[1] = 0;
        } else {
            if (allies[0].gun2.attachments.grip === "EMPTY") {
                this.subAmount[1] = 1;
                this.subMax[1] = "Foregrip";
            } else {
                this.subAmount[1] = 2;
                this.subLevel[1] = allies[0].gun2.attachments.grip[1];
                this.subMax[1] = allies[0].gun2.attachments.grip[0];
            }
        }
        if (allies[0].gun2.attachments.scope === "NONE") {
            this.subAmount[2] = 0;
        } else {
            if (allies[0].gun2.attachments.scope === "EMPTY") {
                this.subAmount[2] = 1;
                this.subMax[2] = "Scope";
            } else {
                this.subAmount[2] = 2;
                this.subLevel[2] = allies[0].gun2.attachments.scope[1];
                this.subMax[2] = allies[0].gun2.attachments.scope[0];
            }
        }
        if (allies[0].gun2.attachments.mag === "NONE") {
            this.subAmount[3] = 0;
        } else {
            if (allies[0].gun2.attachments.mag === "EMPTY") {
                this.subAmount[3] = 1;
                this.subMax[3] = "Magazine";
            } else {
                this.subAmount[3] = 2;
                this.subLevel[3] = allies[0].gun2.attachments.mag[1];
                this.subMax[3] = allies[0].gun2.attachments.mag[0];
            }
        }
        if (allies[0].gun2.attachments.stock === "NONE") {
            this.subAmount[4] = 0;
        } else {
            if (allies[0].gun2.attachments.stock === "EMPTY") {
                this.subAmount[4] = 1;
                this.subMax[4] = "Stock";
            } else {
                this.subAmount[4] = 2;
                this.subLevel[4] = allies[0].gun2.attachments.stock[1];
                this.subMax[4] = allies[0].gun2.attachments.stock[0];
            }
        }
    } else if (this.which === "Armor Inventory") {
        this.max = armor[allies[0].armor].health;
        this.amount = this.max - allies[0].armorHealth;
        this.level = armor[allies[0].armor].level;
    } else if (this.which === "Melee Inventory") {
        this.level = allies[0].meleeWeapon.level;
    } else if (this.which === "Inventory Spots") {
        this.amount = backpack[allies[0].backpack].spaces;
        for (var i = 0; i < allies[0].inventory.length; i++) {
            var a = allies[0].inventory[i];
            if (i < this.amount && a[1] === "LOCKED") {
                allies[0].inventory[i][0] = "EMPTY";
                allies[0].inventory[i][1] = "EMPTY";
                allies[0].inventory[i][2] = "EMPTY";
            }
            if (a[1] === "Ammo") {
                this.subLevel[i] = 7;
                this.subAmount[i] = a[2];
                this.subMax[i] = ammo[a[0]].stack;
            } else if (a[1] === "Grenade") {
                this.subLevel[i] = 7;
                this.subAmount[i] = a[2];
                this.subMax[i] = grenades[a[0]].stack;
            } else if (a[1] === "Medical") {
                this.subLevel[i] = 7;
                this.subAmount[i] = a[2];
                this.subMax[i] = medical[a[0]].stack;
            } else if (a[1] === "Attachment") {
                this.subLevel[i] = a[2] + 1;
                this.subAmount[i] = 1;
                this.subMax[i] = 1;
            } else if (a[1] === "EMPTY") {
                this.subLevel[i] = 7;
                this.subAmount[i] = "EMPTY";
                this.subMax[i] = 0;
            } else if (a[1] === "LOCKED") {
                this.subAmount[i] = "LOCKED";
                this.subMax[i] = "LOCKED";
                this.subLevel[i] = "LOCKED";
            }
        }
    }
    this.amount = constrain(this.amount, 0, this.max);
};
UIpiece.prototype.dropAttachment = function(a, Attachments, whichGun, whichGun2, whichGun3, whichGun4, which) {
    var theLootInfo;
    if (a === 0 && Attachments.muzzle !== "NONE" && Attachments.muzzle !== "EMPTY") {
        theLootInfo = [allies[0].x + random(-1, 1), allies[0].y + random(-1, 1), attachments[whichGun.allAttachments[Attachments.muzzle[0]].type[0]][whichGun.allAttachments[Attachments.muzzle[0]].type[1]], Attachments.muzzle[1], "Attachment", whichGun.allAttachments[Attachments.muzzle[0]].type];
        if (which === "First Weapon Inventory") {
            allies[0].gun1.attachments.muzzle = "EMPTY";
        } else {
            allies[0].gun2.attachments.muzzle = "EMPTY";
        }
        allies[0].readyAttachments(whichGun2);
        if (whichGun3 !== "NONE") {
            allies[0].readyAttachments(whichGun4);
        }
    } else if (a === 1 && Attachments.grip !== "NONE" && Attachments.grip !== "EMPTY") {
        theLootInfo = [allies[0].x + random(-1, 1), allies[0].y + random(-1, 1), attachments[whichGun.allAttachments[Attachments.grip[0]].type[0]][whichGun.allAttachments[Attachments.grip[0]].type[1]], Attachments.grip[1], "Attachment", whichGun.allAttachments[Attachments.grip[0]].type];
        if (which === "First Weapon Inventory") {
            allies[0].gun1.attachments.grip = "EMPTY";
        } else {
            allies[0].gun2.attachments.grip = "EMPTY";
        }
        allies[0].readyAttachments(whichGun2);
        if (whichGun3 !== "NONE") {
            allies[0].readyAttachments(whichGun4);
        }
    } else if (a === 2 && Attachments.scope !== "NONE" && Attachments.scope !== "EMPTY") {
        theLootInfo = [allies[0].x + random(-1, 1), allies[0].y + random(-1, 1), attachments[whichGun.allAttachments[Attachments.scope[0]].type[0]][whichGun.allAttachments[Attachments.scope[0]].type[1]], Attachments.scope[1], "Attachment", whichGun.allAttachments[Attachments.scope[0]].type];
        if (which === "First Weapon Inventory") {
            allies[0].gun1.attachments.scope = "EMPTY";
        } else {
            allies[0].gun2.attachments.scope = "EMPTY";
        }
        allies[0].readyAttachments(whichGun2);
        if (whichGun3 !== "NONE") {
            allies[0].readyAttachments(whichGun4);
        }
    } else if (a === 3 && Attachments.mag !== "NONE" && Attachments.mag !== "EMPTY") {
        theLootInfo = [allies[0].x + random(-1, 1), allies[0].y + random(-1, 1), attachments[whichGun.allAttachments[Attachments.mag[0]].type[0]][whichGun.allAttachments[Attachments.mag[0]].type[1]], Attachments.mag[1], "Attachment", whichGun.allAttachments[Attachments.mag[0]].type];
        if (which === "First Weapon Inventory") {
            allies[0].gun1.attachments.mag = "EMPTY";
        } else {
            allies[0].gun2.attachments.mag = "EMPTY";
        }
        allies[0].readyAttachments(whichGun2);
        if (whichGun3 !== "NONE") {
            allies[0].readyAttachments(whichGun4);
        }
    } else if (a === 4 && Attachments.stock !== "NONE" && Attachments.stock !== "EMPTY") {
        theLootInfo = [allies[0].x + random(-1, 1), allies[0].y + random(-1, 1), attachments[whichGun.allAttachments[Attachments.stock[0]].type[0]][whichGun.allAttachments[Attachments.stock[0]].type[1]], Attachments.stock[1], "Attachment", whichGun.allAttachments[Attachments.stock[0]].type];
        if (which === "First Weapon Inventory") {
            allies[0].gun1.attachments.stock = "EMPTY";
        } else {
            allies[0].gun2.attachments.stock = "EMPTY";
        }
        allies[0].readyAttachments(whichGun2);
        if (whichGun3 !== "NONE") {
            allies[0].readyAttachments(whichGun4);
        }
    }
    return theLootInfo;
};
UIpiece.prototype.dropLoot = function() {
    if (scene === "inventory") {
        if (this.which === "Inventory Spots") {
            var a = (this.width - 40) / (this.max / 2);
            for (var i = 0; i < this.max / 2; i++) {
                for (var j = 0; j < 2; j++) {
                    var x = (-this.width / 2) + ((a / 2) + 5) + (i * (a + 5)) + this.x, y = -2.5 - (a / 2) + (j * (a + 5))  + this.y, b, c, d;
                    if (j === 0) {
                        b = i;
                    } else {
                        b = 7 + i;
                    }
                    c = this.subAmount[b];
                    d = this.subMax[b];
                    if (MOUSEX >= (x - (a / 2)) && MOUSEX <= (x + (a / 2)) && MOUSEY >= (y - (a / 2)) && MOUSEY <= (y + (a / 2)) && this.subAmount[b] !== "LOCKED" && this.subAmount[b] !== "EMPTY") {
                        var e = allies[0].inventory[b], f, g, h = e[2], j, k, l = e[0], canDrop = true;
                        if (e[1] === "Ammo") {
                            j = ammo[e[0]];
                            f = j.drop;
                            if (allies[0].reloading && e[0] === allies[0].ammo) {
                                canDrop = false;
                            }
                        } else if (e[1] === "Medical") {
                            j = medical[e[0]];
                            f = j.drop;
                            if (allies[0].healing && e[0] === allies[0].allMeds[allies[0].usingMed][0]) {
                                canDrop = false;
                            }
                        } else if (e[1] === "Grenade") {
                            j = grenades[e[0]];
                            f = j.drop;
                        } else if (e[1] === "Attachment") {
                            f = 1;
                            j = attachments[e[0][0]][e[0][1]];
                            l = e[0];
                        }
                        var g = e[2];
                        if (e[1] !== "Attachment") {
                            if (f >= g) {
                                h = g;
                            } else {
                                h = f;
                            }
                        } else {
                            h = e[2];
                        }
                        if (canDrop) {
                            allLoot.push(construct(loot, [allies[0].x + random(-1, 1), allies[0].y + random(-1, 1), j, h, e[1], l]));
                            if (f >= g || e[1] === "Attachment") {
                                allies[0].inventory[b] = ["EMPTY", "EMPTY", "EMPTY"];
                            } else {
                                allies[0].inventory[b][2] -= f;
                            }
                            if (e[1] === "Grenade") {
                                allies[0].bombInitialize();
                            } else if (e[1] === "Medical") {
                                allies[0].medInitialize();
                            }
                        } else {
                            if (allies[0].reloading) {
                                message2 = ["Ammo in Use", 255];
                            } else {
                                message2 = ["Medical in Use", 255];
                            }
                        }
                    }
                }
            }
        } else if (this.which === "Armor Inventory") {
            if (MOUSEX >= this.x - (this.width / 2) && MOUSEX <= this.x + (this.width / 2) && MOUSEY >= this.y - (this.width / 2) && MOUSEY <= this.y + (this.width / 2)) {
                if (armor[allies[0].armor].level !== "None") {
                    allLoot.push(construct(loot, [allies[0].x + random(-1, 1), allies[0].y + random(-1, 1), armor[allies[0].armor], allies[0].armorHealth, "Armor", allies[0].armor]));
                    allies[0].armor = 0;
                }
            }
        } else if (this.which === "Melee Inventory") {
            if (MOUSEX >= this.x - (this.width / 2) && MOUSEX <= this.x + (this.width / 2) && MOUSEY >= this.y - (this.width / 2) && MOUSEY <= this.y + (this.width / 2)) {
                if (allies[0].weapons[2] !== 0) {
                    allLoot.push(construct(loot, [allies[0].x + random(-1, 1), allies[0].y + random(-1, 1), allies[0].meleeWeapon, 1, "Melee", allies[0].weapons[2]]));
                    allies[0].meleeWeapon = melee[0];
                    allies[0].weapons[2] = 0;
                    allies[0].readyMelee();
                }
            }
        } else if (this.which === "Backpack Inventory") {
            if (MOUSEX >= this.x - (this.width / 2) && MOUSEX <= this.x + (this.width / 2) && MOUSEY >= this.y - (this.width / 2) && MOUSEY <= this.y + (this.width / 2)) {
                if (backpack[allies[0].backpack].level !== "Bag") {
                    allLoot.push(construct(loot, [allies[0].x + random(-1, 1), allies[0].y + random(-1, 1), backpack[allies[0].backpack], allies[0].backpack, "Backpack", allies[0].backpack]));
                    allies[0].backpack = 0;
                }
            }
        } else if (this.which === "First Weapon Inventory" || this.which === "Second Weapon Inventory") {
            var whichGun, Attachments, whichGun2, whichGun3, whichGun4, theLootInfo, gunDropped = false;
            if (this.which === "First Weapon Inventory") {
                whichGun = allies[0].gun1;
                whichGun2 = 0;
                whichGun3 = allies[0].gun2;
                whichGun4 = 1;
            } else {
                whichGun = allies[0].gun2;
                whichGun2 = 1;
                whichGun3 = allies[0].gun1;
                whichGun4 = 0;
            }
            Attachments = whichGun.attachments;
            var mouseOnTheAttachment = false;
            var possibleAttach = [];
            for (var i = 0; i < 5; i++) {
                if (this.subAmount[i] > 0) {
                    possibleAttach.push(i);
                }
            }
            for (var i = possibleAttach.length - 1; i >= 0; i--) {
                var a = possibleAttach[i];
                if (this.subAmount[a] !== 0) {
                    var x = ((this.x + (this.width / 2)) - 15) - (25 * ((possibleAttach.length - 1) - i)), y = (this.y + (this.height / 2)) - 15;
                    if (MOUSEX >= x - 10 && MOUSEX <= x + 10 && MOUSEY >= y - 10 && MOUSEY <= y + 10) {
                        mouseOnTheAttachment = true;
                        theLootInfo = this.dropAttachment(a, Attachments, whichGun, whichGun2, whichGun3, whichGun4, this.which);
                    }
                }
            }
            if (theLootInfo !== undefined) {
                var done = false;
                for (var i = 0; i < allies[0].inventory.length; i++) {
                    if (allies[0].inventory[i][1] === "EMPTY") {
                        allies[0].inventory[i][0] = theLootInfo[5];
                        allies[0].inventory[i][1] = "Attachment";
                        allies[0].inventory[i][2] = theLootInfo[3];
                        i = allies[0].inventory.length;
                        done = true;
                    }
                }
                if (!done) {
                    allLoot.push(construct(loot, theLootInfo));
                }
            }
            theLootInfo = [];
            if (MOUSEX >= this.x - (this.width / 2) && MOUSEX <= this.x + (this.width / 2) && MOUSEY >= this.y - (this.height / 2) && MOUSEY <= this.y + (this.height / 2) && !mouseOnTheAttachment) {
                var magType = whichGun.ammo, magLeft = allies[0].inMag;
                if (this.which === "First Weapon Inventory" && allies[0].currentWeapon !== 0) {
                    magLeft = allies[0].gun1.inMag;
                } else if (this.which === "Second Weapon Inventory" && allies[0].currentWeapon !== 1) {
                    magLeft = allies[0].gun2.inMag;
                }
                if (magLeft > 0) {
                    for (var i = 0; i < allies[0].inventory.length; i++) {
                        var a = allies[0].inventory[i], b = ammo[magType].stack;
                        if (a[1] === "EMPTY") {
                            allies[0].inventory[i][0] = magType;
                            allies[0].inventory[i][1] = "Ammo";
                            allies[0].inventory[i][2] = 0;
                        }
                        if (a[1] === "Ammo" && a[0] === magType && a[2] < b) {
                            if (a[2] + magLeft <= b) {
                                allies[0].inventory[i][2] += magLeft;
                                magLeft = 0;
                            } else {
                                magLeft -= (b - a[2]);
                                allies[0].inventory[i][2] = b;
                            }
                        }
                        if (i === allies[0].inventory.length - 1 && magLeft >= 0) {
                            allLoot.push(construct(loot, [allies[0].x + random(-1, 1), allies[0].y + random(-1, 1), ammo[magType], magLeft, "Ammo", magType]));
                            magLeft = 0;
                        }
                        if (magLeft <= 0) {
                            i = allies[0].inventory.length;
                        }
                    }
                }
                if (this.which === "First Weapon Inventory") {
                    allLoot.push(construct(loot, [allies[0].x + random(-1, 1), allies[0].y + random(-1, 1), guns[allies[0].weapons[0]], 1, "Gun", allies[0].weapons[0]]));
                    if (Attachments.muzzle !== "NONE" && Attachments.muzzle !== "EMPTY") {
                        theLootInfo.push([allies[0].x + random(-1, 1), allies[0].y + random(-1, 1), attachments[whichGun.allAttachments[Attachments.muzzle[0]].type[0]][whichGun.allAttachments[Attachments.muzzle[0]].type[1]], Attachments.muzzle[1], "Attachment", whichGun.allAttachments[Attachments.muzzle[0]].type]);
                    }
                    if (Attachments.grip !== "NONE" && Attachments.grip !== "EMPTY") {
                        theLootInfo.push([allies[0].x + random(-1, 1), allies[0].y + random(-1, 1), attachments[whichGun.allAttachments[Attachments.grip[0]].type[0]][whichGun.allAttachments[Attachments.grip[0]].type[1]], Attachments.grip[1], "Attachment", whichGun.allAttachments[Attachments.grip[0]].type]);
                    }
                    if (Attachments.scope !== "NONE" && Attachments.scope !== "EMPTY") {
                        theLootInfo.push([allies[0].x + random(-1, 1), allies[0].y + random(-1, 1), attachments[whichGun.allAttachments[Attachments.scope[0]].type[0]][whichGun.allAttachments[Attachments.scope[0]].type[1]], Attachments.scope[1], "Attachment", whichGun.allAttachments[Attachments.scope[0]].type]);
                    }
                    if (Attachments.mag !== "NONE" && Attachments.mag !== "EMPTY") {
                        theLootInfo.push([allies[0].x + random(-1, 1), allies[0].y + random(-1, 1), attachments[whichGun.allAttachments[Attachments.mag[0]].type[0]][whichGun.allAttachments[Attachments.mag[0]].type[1]], Attachments.mag[1], "Attachment", whichGun.allAttachments[Attachments.mag[0]].type]);
                    }
                    if (Attachments.stock !== "NONE" && Attachments.stock !== "EMPTY") {
                        theLootInfo.push([allies[0].x + random(-1, 1), allies[0].y + random(-1, 1), attachments[whichGun.allAttachments[Attachments.stock[0]].type[0]][whichGun.allAttachments[Attachments.stock[0]].type[1]], Attachments.stock[1], "Attachment", whichGun.allAttachments[Attachments.stock[0]].type]);
                    }
                    allies[0].gun1 = "NONE";
                    allies[0].weapons[0] = "NONE";
                } else {
                    allLoot.push(construct(loot, [allies[0].x + random(-1, 1), allies[0].y + random(-1, 1), guns[allies[0].weapons[1]], 1, "Gun", allies[0].weapons[1]]));
                    if (Attachments.muzzle !== "NONE" && Attachments.muzzle !== "EMPTY") {
                        theLootInfo.push([allies[0].x + random(-1, 1), allies[0].y + random(-1, 1), attachments[whichGun.allAttachments[Attachments.muzzle[0]].type[0]][whichGun.allAttachments[Attachments.muzzle[0]].type[1]], Attachments.muzzle[1], "Attachment", whichGun.allAttachments[Attachments.muzzle[0]].type]);
                    }
                    if (Attachments.grip !== "NONE" && Attachments.grip !== "EMPTY") {
                        theLootInfo.push([allies[0].x + random(-1, 1), allies[0].y + random(-1, 1), attachments[whichGun.allAttachments[Attachments.grip[0]].type[0]][whichGun.allAttachments[Attachments.grip[0]].type[1]], Attachments.grip[1], "Attachment", whichGun.allAttachments[Attachments.grip[0]].type]);
                    }
                    if (Attachments.scope !== "NONE" && Attachments.scope !== "EMPTY") {
                        theLootInfo.push([allies[0].x + random(-1, 1), allies[0].y + random(-1, 1), attachments[whichGun.allAttachments[Attachments.scope[0]].type[0]][whichGun.allAttachments[Attachments.scope[0]].type[1]], Attachments.scope[1], "Attachment", whichGun.allAttachments[Attachments.scope[0]].type]);
                    }
                    if (Attachments.mag !== "NONE" && Attachments.mag !== "EMPTY") {
                        theLootInfo.push([allies[0].x + random(-1, 1), allies[0].y + random(-1, 1), attachments[whichGun.allAttachments[Attachments.mag[0]].type[0]][whichGun.allAttachments[Attachments.mag[0]].type[1]], Attachments.mag[1], "Attachment", whichGun.allAttachments[Attachments.mag[0]].type]);
                    }
                    if (Attachments.stock !== "NONE" && Attachments.stock !== "EMPTY") {
                        theLootInfo.push([allies[0].x + random(-1, 1), allies[0].y + random(-1, 1), attachments[whichGun.allAttachments[Attachments.stock[0]].type[0]][whichGun.allAttachments[Attachments.stock[0]].type[1]], Attachments.stock[1], "Attachment", whichGun.allAttachments[Attachments.stock[0]].type]);
                    }
                    allies[0].gun2 = "NONE";
                    allies[0].weapons[1] = "NONE";
                }
                if (theLootInfo.length > 0) {
                    var done = [];
                    for (var j = 0; j < theLootInfo.length; j++) {
                        done[j] = false;
                        for (var i = 0; i < allies[0].inventory.length; i++) {
                            if (allies[0].inventory[i][1] === "EMPTY") {
                                allies[0].inventory[i][0] = theLootInfo[j][5];
                                allies[0].inventory[i][1] = "Attachment";
                                allies[0].inventory[i][2] = theLootInfo[j][3];
                                i = allies[0].inventory.length;
                                done[j] = true;
                            }
                        }
                        if (!done[j]) {
                            allLoot.push(construct(loot, theLootInfo[j]));
                        }
                    }
                }
            }
        }
    }
};
UIpiece.prototype.transferLoot = function() {
    if (scene === "inventory" && draggingLoot !== "NONE") {
        if (this.which === "First Weapon Inventory" || this.which === "Second Weapon Inventory") {
            var whichGun = allies[0].gun1, whichGun2 = allies[0].weapons[0], whichGun3 = 0, whichAttachment, anythingChanged = "NOT", b = draggingLoot[1], whichDropped, c;
            if (this.which === "Second Weapon Inventory") {
                whichGun = allies[0].gun2;
                whichGun2 = allies[0].weapons[1];
                whichGun3 = 1;
            }
            if (MOUSEX >= this.x - (this.width / 2) && MOUSEX <= this.x + (this.width / 2) && MOUSEY >= this.y - (this.height / 2) && MOUSEY <= this.y + (this.height / 2)) {
                if ((draggingLoot[0] === "First Weapon Inventory" || draggingLoot[0] === "Second Weapon Inventory") && draggingLoot[0] !== this.which) {
                    if (whichGun !== "NONE") {
                        var a = whichGun;
                        if (b[0] === "Muzzle") {
                            c = a.attachments.muzzle;
                        } else if (b[0] === "Foregrip") {
                            c = a.attachments.grip;
                        } else if (b[0] === "Scope") {
                            c = a.attachments.scope;
                        } else if (b[0] === "Magazine") {
                            c = a.attachments.mag;
                        } else if (b[0] === "Stock") {
                            c = a.attachments.stock;
                        }
                        if (c !== "NONE" && c !== "EMPTY") {
                            whichDropped = [[a.allAttachments[c[0]].type[0], a.allAttachments[c[0]].type[1]], "Attachment", c[1]];
                        }
                        if (c !== "NONE" && (c === "EMPTY" || (c !== "EMPTY" && (b[1] !== a.allAttachments[c[0]].type[1] || b[2] !== c[1])))) {
                            for (var j = 0; j < a.allAttachments.length; j++) {
                                if (a.allAttachments[j].type[0] === b[0] && a.allAttachments[j].type[1] === b[1]) {
                                    if ((isNaN(a.allAttachments[j].effect[1]) && a.allAttachments[j].effect[1][b[2]] !== "NONE") || !isNaN(a.allAttachments[j].effect[1])) {
                                        whichAttachment = [j, b[2]];
                                        anythingChanged = [whichGun3, b[2]];
                                        j = a.allAttachments.length;
                                    }
                                }
                            }
                        }
                    }
                    if (anythingChanged !== "NOT") {
                        if (c !== "EMPTY") {
                            for (var j = 0; j < allies[0].inventory.length; j++) {
                                if (allies[0].inventory[j][0] === "EMPTY") {
                                    allies[0].inventory[j] = whichDropped;
                                    j = allies[0].inventory.length;
                                }
                                if (j === allies[0].inventory.length - 1) {
                                    allLoot.push(construct(loot, [allies[0].x + random(-1, 1), allies[0].y + random(-1, 1), attachments[whichDropped[0][0]][whichDropped[0][1]], whichDropped[2], "Attachment", whichDropped[0]]));
                                }
                            }
                        }
                    }
                    if (whichGun3 === 0 && anythingChanged !== "NOT") {
                        switch (b[0]) {
                            case "Muzzle": 
                                allies[0].gun1.attachments.muzzle = whichAttachment;
                                allies[0].gun2.attachments.muzzle = "EMPTY";
                            break;
                            case "Foregrip": 
                                allies[0].gun1.attachments.grip = whichAttachment;
                                allies[0].gun2.attachments.grip = "EMPTY";
                            break;
                            case "Scope": 
                                allies[0].gun1.attachments.scope = whichAttachment;
                                allies[0].gun2.attachments.scope = "EMPTY";
                            break;
                            case "Magazine": 
                                allies[0].gun1.attachments.mag = whichAttachment;
                                allies[0].gun2.attachments.mag = "EMPTY";
                            break;
                            case "Stock": 
                                allies[0].gun1.attachments.stock = whichAttachment;
                                allies[0].gun2.attachments.stock = "EMPTY";
                            break;
                        }
                    } else if (whichGun3 === 1 && anythingChanged !== "NOT") {
                        switch (b[0]) {
                            case "Muzzle": 
                                allies[0].gun2.attachments.muzzle = whichAttachment;
                                allies[0].gun1.attachments.muzzle = "EMPTY";
                            break;
                            case "Foregrip": 
                                allies[0].gun2.attachments.grip = whichAttachment;
                                allies[0].gun1.attachments.grip = "EMPTY";
                            break;
                            case "Scope": 
                                allies[0].gun2.attachments.scope = whichAttachment;
                                allies[0].gun1.attachments.scope = "EMPTY";
                            break;
                            case "Magazine": 
                                allies[0].gun2.attachments.mag = whichAttachment;
                                allies[0].gun1.attachments.mag = "EMPTY";
                            break;
                            case "Stock": 
                                allies[0].gun2.attachments.stock = whichAttachment;
                                allies[0].gun1.attachments.stock = "EMPTY";
                            break;
                        }
                    }
                    if (anythingChanged !== "NOT") {
                        allies[0].readyAttachments(0);
                        allies[0].readyAttachments(1);
                    }
                } else if (draggingLoot[0] === "Inventory") {
                    b = allies[0].inventory[draggingLoot[1]];
                    if (whichGun !== "NONE") {
                        var a = whichGun;
                        if (b[0][0] === "Muzzle") {
                            c = a.attachments.muzzle;
                        } else if (b[0][0] === "Foregrip") {
                            c = a.attachments.grip;
                        } else if (b[0][0] === "Scope") {
                            c = a.attachments.scope;
                        } else if (b[0][0] === "Magazine") {
                            c = a.attachments.mag;
                        } else if (b[0][0] === "Stock") {
                            c = a.attachments.stock;
                        }
                        if (c !== "NONE" && (c === "EMPTY" || (c !== "EMPTY" && (b[0][1] !== a.allAttachments[c[0]].type[1] || b[2] !== c[1])))) {
                            for (var j = 0; j < a.allAttachments.length; j++) {
                                if (a.allAttachments[j].type[0] === b[0][0] && a.allAttachments[j].type[1] === b[0][1]) {
                                    if ((isNaN(a.allAttachments[j].effect[1]) && a.allAttachments[j].effect[1][b[2]] !== "NONE") || !isNaN(a.allAttachments[j].effect[1])) {
                                        whichAttachment = [j, b[2]];
                                        anythingChanged = [whichGun3, b[2]];
                                        if (c !== "EMPTY") {
                                            allies[0].inventory[draggingLoot[1]] = [[a.allAttachments[c[0]].type[0], a.allAttachments[c[0]].type[1]], "Attachment", c[1]];
                                        } else {
                                            allies[0].inventory[draggingLoot[1]] = ["EMPTY", "EMPTY", "EMPTY"];
                                        }
                                        j = a.allAttachments.length;
                                    }
                                }
                            }
                        }
                    }
                    if (whichGun3 === 0 && anythingChanged !== "NOT") {
                        switch (b[0][0]) {
                            case "Muzzle": 
                                allies[0].gun1.attachments.muzzle = whichAttachment;
                            break;
                            case "Foregrip": 
                                allies[0].gun1.attachments.grip = whichAttachment;
                            break;
                            case "Scope": 
                                allies[0].gun1.attachments.scope = whichAttachment;
                            break;
                            case "Magazine": 
                                allies[0].gun1.attachments.mag = whichAttachment;
                            break;
                            case "Stock": 
                                allies[0].gun1.attachments.stock = whichAttachment;
                            break;
                        }
                    } else if (whichGun3 === 1 && anythingChanged !== "NOT") {
                        switch (b[0][0]) {
                            case "Muzzle": 
                                allies[0].gun2.attachments.muzzle = whichAttachment;
                            break;
                            case "Foregrip": 
                                allies[0].gun2.attachments.grip = whichAttachment;
                            break;
                            case "Scope": 
                                allies[0].gun2.attachments.scope = whichAttachment;
                            break;
                            case "Magazine": 
                                allies[0].gun2.attachments.mag = whichAttachment;
                            break;
                            case "Stock": 
                                allies[0].gun2.attachments.stock = whichAttachment;
                            break;
                        }
                    }
                    if (anythingChanged !== "NOT") {
                        allies[0].readyAttachments(whichGun3);
                    }
                }
            }
        } else if (this.which === "Inventory Spots" && (draggingLoot[0] === "First Weapon Inventory" || draggingLoot[0] === "Second Weapon Inventory")) {
            if (inBox(MOUSEX, MOUSEY, this.x, this.y, this.width, this.height)) {
                var whichGun, a, Attachments, whichGun2;
                if (draggingLoot[0] === "First Weapon Inventory") {
                    whichGun = allies[0].gun1;
                    whichGun2 = 0;
                } else {
                    whichGun = allies[0].gun2;
                    whichGun2 = 1;
                }
                a = findInIndex2(attachments, draggingLoot[1][0])[0];
                Attachments = whichGun.attachments;
                var theLootInfo = this.dropAttachment(a, Attachments, whichGun, whichGun2, "NONE", "NONE", draggingLoot[0]);
                if (theLootInfo !== undefined) {
                    var done = false;
                    for (var i = 0; i < allies[0].inventory.length; i++) {
                        if (allies[0].inventory[i][1] === "EMPTY") {
                            allies[0].inventory[i][0] = theLootInfo[5];
                            allies[0].inventory[i][1] = "Attachment";
                            allies[0].inventory[i][2] = theLootInfo[3];
                            i = allies[0].inventory.length;
                            done = true;
                        }
                    }
                    if (!done) {
                        allLoot.push(construct(loot, theLootInfo));
                    }
                }
            }
        }
    }
};
UIpiece.prototype.clickOn = function() {
    if (this.which === "Datapad Map Button" || this.which === "Datapad Tyon Button" || this.which === "Datapad Gun Button" || this.which === "Datapad Objective Button") {
        if (MOUSEX >= this.x - (this.width / 2) && MOUSEX <= this.x + (this.width / 2) && MOUSEY >= this.y - (this.height / 2) && MOUSEY <= this.y + (this.height / 2) && !((this.which === "Datapad Map Button" && datapadOn === 0) || (this.which === "Datapad Tyon Button" && datapadOn === 3) || (this.which === "Datapad Gun Button" && datapadOn === 2) || (this.which === "Datapad Objective Button" && datapadOn === 1))) {
            if (this.which === "Datapad Map Button") {
                datapadOn = 0;
            } else if (this.which === "Datapad Objective Button") {
                datapadOn = 1;
            } else if (this.which === "Datapad Gun Button") {
                datapadOn = 2;
            } else if (this.which === "Datapad Tyon Button") {
                datapadOn = 3;
            }
        }
    } else if (this.which === "Datapad Gun Info") {
        if (MOUSEX >= this.x + 145 && MOUSEX <= this.x + 165 && MOUSEY >= this.y - 95 && MOUSEY <= this.y - 65) {
            gunFocusingOn = (gunFocusingOn + 1) % 3;
        }
        if (MOUSEX <= this.x - 145 && MOUSEX >= this.x - 165 && MOUSEY >= this.y - 95 && MOUSEY <= this.y - 65) {
            gunFocusingOn = absValue(gunFocusingOn - 1, 3);
        }
    } else if (this.which === "First Weapon Inventory" || this.which === "Second Weapon Inventory") {
        var x = (this.x - (this.width / 2)) + 15, y = (this.y + (this.height / 2)) - 15;
        if (MOUSEX >= x - 10 && MOUSEX <= x + 10 && MOUSEY >= y - 10 && MOUSEY <= y + 10) {
            lastScene = "inventory";
            scene = "datapad";
            datapadOn = 2;
            gunFocusingOn = (this.which === "First Weapon Inventory") ? 0 : 1;
        }
    } else if (this.which === "Inventory Back" || (this.which === "Inventory Map" && gameVars.haveDatapad) || this.which === "Datapad Back" || this.which === "Pause Return" || this.which === "Pause Settings" || this.which === "Pause Help" || this.which === "Pause Menu" || this.which === "Pause2 Yes" || this.which === "Pause2 No") {
        if (MOUSEX >= this.x - (this.width / 2) && MOUSEX <= this.x + (this.width / 2) && MOUSEY >= this.y - (this.height / 2) && MOUSEY <= this.y + (this.height / 2)) {
            if (this.which === "Inventory Back") {
                scene = "game";
                allies[0].canFire = false;
            } else if (this.which === "Inventory Map") {
                lastScene = "inventory";
                scene = "datapad";
                datapadOn = 0;
            } else if (this.which === "Datapad Back") {
                scene = lastScene;
                allies[0].canFire = false;
            } else if (this.which === "Pause Return") {
                scene = "game";
                allies[0].canFire = false;
            } else if (this.which === "Pause Help") {
                levelEnds.push(construct(levelEnd, [function() {
                    scene = "help";
                    lastScene = "pause";
                    settingsScroll = 0;
                }, true]));
            } else if (this.which === "Pause Settings") {
                levelEnds.push(construct(levelEnd, [function() {
                    scene = "settings";
                    lastScene = "pause";
                    settingsScroll = -30;
                    datapadOn = 0;
                }, true]));
            } else if (this.which === "Pause Menu") {
                scene = "pause2";
            } else if (this.which === "Pause2 Yes") {
                levelEnds.push(construct(levelEnd, [function() {
                    if (freePlay) {
                        codes.splice(codes.length - 1, 1);
                    }
                    scene = "selectGame";
                    weathers2.clear();
                    weathers2.push(construct(weather, ["snow 2", 400, 400, 20, [800, 1600], 50]));
                    clearArrays();
                }, true]));
            } else if (this.which === "Pause2 No") {
                scene = "pause";
            }
        }
    }
};
//}
// (3) "GAMEPLAY OVERLAY CREATION" {
UIpieces.push(
    construct(UIpiece, ["normal", "normal", 1, "Health Bar"]),
    construct(UIpiece, ["normal", "normal", 1, "Stim Bar"]),
    construct(UIpiece, ["normal", "normal", 1, "Backpack"]),
    construct(UIpiece, ["normal", "normal", 1, "Armor"]),
    construct(UIpiece, ["normal", "normal", 1, "Ammo"]),
    construct(UIpiece, ["normal", "normal", 1, "Gun Picture"]),
    construct(UIpiece, ["normal", "normal", 1, "First Weapon"]),
    construct(UIpiece, ["normal", "normal", 1, "Second Weapon"]),
    construct(UIpiece, ["normal", "normal", 1, "Melee Weapon"]),
    construct(UIpiece, ["normal", "normal", 1, "Grenade"]),
    construct(UIpiece, ["normal", "normal", 1, "Meds"])
);
UIpiecesInventory.push(
    construct(UIpiece, ["normal", "normal", 1, "First Weapon Inventory"]),
    construct(UIpiece, ["normal", "normal", 1, "Second Weapon Inventory"]),
    construct(UIpiece, ["normal", "normal", 1, "Armor Inventory"]),
    construct(UIpiece, ["normal", "normal", 1, "Melee Inventory"]),
    construct(UIpiece, ["normal", "normal", 1, "Backpack Inventory"]),
    construct(UIpiece, ["normal", "normal", 1, "Inventory Spots"]),
    construct(UIpiece, ["normal", "normal", 1, "Inventory Back"]),
    construct(UIpiece, ["normal", "normal", 1, "Inventory Map"])
);
UIpiecesDatapad.push(
    construct(UIpiece, ["normal", "normal", 1, "Datapad Map Info"]),
    construct(UIpiece, ["normal", "normal", 1, "Datapad Map Button"]),
    construct(UIpiece, ["normal", "normal", 1, "Datapad Tyon Info"]),
    construct(UIpiece, ["normal", "normal", 1, "Datapad Tyon Button"]),
    construct(UIpiece, ["normal", "normal", 1, "Datapad Gun Info"]),
    construct(UIpiece, ["normal", "normal", 1, "Datapad Gun Button"]),
    construct(UIpiece, ["normal", "normal", 1, "Datapad Objective Info"]),
    construct(UIpiece, ["normal", "normal", 1, "Datapad Objective Button"]),
    construct(UIpiece, ["normal", "normal", 1, "Datapad Back"])
);
UIpiecesPause.push(
    construct(UIpiece, ["normal", "normal", 1, "Pause Return"]),
    construct(UIpiece, ["normal", "normal", 1, "Pause Settings"]),
    construct(UIpiece, ["normal", "normal", 1, "Pause Help"]),
    construct(UIpiece, ["normal", "normal", 1, "Pause Menu"])
);
UIpiecesPause2.push(
    construct(UIpiece, ["normal", "normal", 1, "Pause2 Back"]),
    construct(UIpiece, ["normal", "normal", 1, "Pause2 Yes"]),
    construct(UIpiece, ["normal", "normal", 1, "Pause2 No"])
);
//}
// (4) "OBJECTIVES" {
objective = function(which, complete) {
    var a = objectiveList[which];
    this.name = a[0];
    this.toComplete = a[1];
    this.num = a[2];
    this.completed = complete || false;
    this.time = 0;
    if (!this.completed) {
        for (var i = 0; i < objectives.length; i++) {
            if (objectives[i].time > 0 && objectives[i].time < 300) {
                this.time = -1;
            }
        }
    } else {
        this.time = 301;
    }
};
objective.prototype.work = function() {
    if (!this.completed) {
        var theResult = this.toComplete() || [false, false];
        this.completed = theResult[0];
        if (this.completed) {
            if (theResult[1]) {
                objectives.splice(findInIndex(objectives, this), 1);
            }
        }
    }
    var canCount = true;
    for (var i = 0; i < objectives.length; i++) {
        if (objectives[i] !== this && objectives[i].time > 0 && objectives[i].time < 300) {
            canCount = false;
            i = objectives.length;
        }
    }
    if (canCount) {
        this.time += compensateFPS;
    }
    if (this.time > 0 && this.time <= 300) {
        textFont(fonts.AgencyFB20);
        fill(0);
        for (var i = 0; i < 8; i++) {
            text("NEW OBJECTIVE:", 200 + cos(i * 45) * 2, 85 + sin(i * 45) * 2);
        }
        fill(255);
        text("NEW OBJECTIVE:", 200, 85);
        textFont(fonts.AgencyFB25);
        textAlign(CENTER, TOP);
        fill(0);
        for (var i = 0; i < 8; i++) {
            text(this.name, 50 + cos(i * 45) * 2, 100 + sin(i * 45) * 2, 300, 200);
        }
        fill(255);
        text(this.name, 50, 100, 300, 200);
        textAlign(CENTER, CENTER);
    }
};
//}
// (5) "TIPS" {
tip = function(says, tip) {
    this.says = says;
    this.onTop = true;
    for (var i = 0; i < tips.length; i++) {
        if (tips[i].onTop && tips[i] !== this) {
            this.onTop = false;
            i = tips.length;
        }
    }
    createBackgroundImage();
    lastScene = scene;
    scene = "tips";
    textFont(fonts.Calibri12);
    this.tWidth = textWidth(this.says);
    this.hoverAlpha = 50;
    this.tip = tip || "TIP";
};
tip.prototype.work = function() {
    if (this.onTop) {
        noStroke();
        textAlign(CENTER, TOP);
        pushMatrix();
        translate(200, 200);  
        fill(0, 0, 150);
        rect(0, 0, this.tWidth + 35, 60);  
        fill(0, 50);
        noFill();
        strokeWeight(2);
        stroke(0);
        rect(0, 0, this.tWidth + 35, 60);
        fill(0, 0, 200);
        rect(0, 0, this.tWidth + 15, 40);
        fill(255);
        textFont(fonts.AgencyFB20);
        text("- " + this.tip + " -", 0, -18);
        textFont(fonts.Calibri12);
        text(this.says, 0, 3);
        fill(0, this.hoverAlpha);
        noStroke();
        ellipse(0, 50, 30, 30);
        stroke(255);
        strokeWeight(3);
        line(-7, 43, 7, 57);
        line(-7, 57, 7, 43);
        popMatrix();
        if (sq(MOUSEX - 200) + sq(MOUSEY - 250) <= 225) {
            this.hoverAlpha += (100 - this.hoverAlpha) / 5;
            cursor(HAND);
        } else {
            this.hoverAlpha += (50 - this.hoverAlpha) / 5;
        }
    }
};
tip.prototype.exit = function() {
    if (this.onTop && sq(MOUSEX - 200) + sq(MOUSEY - 250) <= 225) {
        if (tips.length > 1) {
            for (var i = 0; i < tips.length; i++) {
                if (tips[i] !== this) {
                    tips[i].onTop = true;
                    i = tips.length;
                }
            }
        } else {
            scene = lastScene;
        }
        allies[0].canFire = false;
        tips.splice(findInIndex(tips, this), 1);
    }
};
//}
// (6) "DE-BUGGING CONSOLE" {
var commands = [
    {
        name: "devmode",
        second: [
            {
                name: "",
                command: function() {
                    devMode = !devMode;
                    if (devMode) {
                        console.text.push("Developer mode activated. Welcome!"); 
                    } else {
                        console.text.push("Developer mode deactivated. Good luck!");
                    }
                },
            },
        ],
    },
    {
        name: "invincible",
        second: [
            {
                name: "",
                command: function() {
                    godMode = !godMode;
                    if (godMode) {
                        console.text.push("Invincibility mode activated; player is now invincible.");
                    } else {
                        console.text.push("Invincibility mode deactivated; player can now die");
                    }
                }
            }
        ],
    },
    {
        name: "playerdata",
        second: [
            {
                name: "all",
                command: function() {
                    console.text.push(playerInfo[0] + " " + playerInfo[1] + " is " + (allies[0].dead ? "dead" : "alive, with " + allies[0].health + " health and " + allies[0].armor + " shields"));
                    console.text.push(playerInfo[0] + "'s coordinates: (" + round(allies[0].x) + ", " + round(allies[0].y) + ")");
                    console.text.push(playerInfo[0] + "'s rotation: " + round(allies[0].rot));
                    var nameOutput;
                    if (allies[0].currentWeapon === 0 || allies[0].currentWeapon === 1) {
                        nameOutput = allies[0].weapon.name;
                    } else if (allies[0].currentWeapon === 2) {
                        nameOutput = allies[0].meleeWeapon.name;
                    } else if (allies[0].currentWeapon === 3) {
                        nameOutput = grenades[allies[0].allGrenades[allies[0].bombSelect][0]].name;
                    }
                    console.text.push(playerInfo[0] + "'s weapon: " + nameOutput);
                    console.text.push(playerInfo[0] + " can travel up to " + (allies[0].maxSpeed * allies[0].maxSpeed2 * 60) + " pixel(s) per second.");
                },
            },
        ],
    },
    {
        name: "console",
        second: [
            {
                name: "clear",
                command: function() {
                    console.text.clear();
                    console.text = [("DEVELOPER CONSOLE -- ESCAPE 2 -- VERSION " + version)];
                },
            },
        ],
    },
    {
        name: "walldarkness",
        second: [
            {
                name: "",
                command: function() {
                    wallDarkness = !wallDarkness;
                    if (wallDarkness) {
                        console.text.push("It is now impossible to see beyond walls.");
                    } else {
                        console.text.push("It is now possible to see beyond walls.");
                    }
                },
            }, 
        ],
    },
    {
        name: "setfps",
        second: [
            {
                name: "verylow",
                command: function() {
                    wantedFPS = 30;
                    frameRate(wantedFPS);
                    console.text.push("FPS set to very low (30).");
                }
            },
            {
                name: "low",
                command: function() {
                    wantedFPS = 40;
                    frameRate(wantedFPS);
                    console.text.push("FPS set to low (40).");
                }
            },
            {
                name: "smooth",
                command: function() {
                    wantedFPS = 50;
                    frameRate(wantedFPS);
                    console.text.push("FPS set to smooth (50).");
                }
            },
            {
                name: "normal",
                command: function() {
                    wantedFPS = 60;
                    frameRate(wantedFPS);
                    console.text.push("FPS set to normal (60).");
                }
            },
            {
                name: "high",
                command: function() {
                    wantedFPS = 90;
                    frameRate(wantedFPS);
                    console.text.push("FPS set to high (90).");
                }
            },
            {
                name: "extreme",
                command: function() {
                    wantedFPS = 120;
                    frameRate(wantedFPS);
                    console.text.push("FPS set to extreme (120).");
                }
            },
            {
                name: "insane",
                command: function() {
                    wantedFPS = 144;
                    frameRate(wantedFPS);
                    console.text.push("FPS set to insane (144).");
                }
            },
            {
                name: "max",
                command: function() {
                    wantedFPS = 240;
                    frameRate(wantedFPS);
                    console.text.push("FPS set to maximum (240).");
                }
            },
        ],
    },
    {
        name: "kill",
        second: [
            {
                name: "all",
                command: function() {
                    console.text.push(enemies.length + " enemies removed.");
                    for (var i = 0; i < enemies.length; i++) {
                        enemies[i].health = 0;
                    }
                }
            }
        ]
    },
    {
        name: "noclip",
        second: [
            {
                name: "",
                command: function() {
                    noClip = !noClip;
                    if (devMode) {
                        console.text.push("Noclip on.");
                    } else {
                        console.text.push("Noclip on.");
                    }
                },
            },
        ],
    },
]; // All commands
var Console = function() {
    this.activated = false;
    this.text = [("DEVELOPER CONSOLE -- ESCAPE 2 -- VERSION " + version), ("| ")];
    this.y = -6;
    this.currentTextLength = 0;
    this.typingTime = 0;
};
Console.prototype.draw = function() {
    if (this.text.length > 12) {
        this.text.splice(this.text[0], 1);
    }
    this.currentTextLength = (textWidth(this.text[this.text.length - 1] + "_"));
    pushMatrix();
    translate(0, this.y - 102);
    fill(0);
    image(images["star background"], 200, 4, 400, 200);
    image(images["escape logo"], 200, 25, 400, 200);
    strokeWeight(4);
    stroke(0, 0, 200);
    fill(0, 150);
    rect(200, 0, 410, 210);
    fill(255);
    textFont(fonts.TimesNewRoman10);
    textAlign(LEFT, TOP);
    for (var i = 0; i < this.text.length; i++) {
        if (i < 12) {
            fill(255);
            if (this.text[i] === "Unknown command." && this.text[i][0] !== "|" && this.text[i] !== ("DEVELOPER CONSOLE -- ESCAPE 2 -- VERSION " + version)) {
                fill(255, 0, 0);
            } else if (this.text[i] !== "Unknown command." && this.text[i][0] !== "|" && this.text[i] !== ("DEVELOPER CONSOLE -- ESCAPE 2 -- VERSION " + version)) {
                fill(0, 255, 0);
            }
            if (i !== this.text.length - 1) {
                text(this.text[i], 5, -45 + (i * 12));
            }
            if (i === this.text.length - 1) {
                if (this.currentTextLength < 390) {
                    if (frameCount % 70 / compensateFPS <= 35 / compensateFPS) {
                        text((this.text[this.text.length - 1] + "_"), 5, -45 + (i * 12));
                    } else {
                        text(this.text[this.text.length - 1], 5, -45 + (i * 12));
                    }
                } else {
                    if (frameCount % 70 / compensateFPS <= 35 / compensateFPS) {
                        text((this.text[this.text.length - 1] + "_"), 5 - (this.currentTextLength - 390), -45 + (i * 12));
                    } else {
                        text(this.text[this.text.length - 1], 5 - (this.currentTextLength - 390), -45 + (i * 12));
                    }
                }
            }
        }
    }
    textAlign(CENTER, CENTER);
    noStroke();
    fill(0);
    rect(2.5, -2, 5, 210);
    rect(397.5, -2, 5, 210);
    popMatrix();
    if (this.activated) {
        this.y += ((150 - this.y) / 5) * compensateFPS;
    } else {
        this.y += ((-6 - this.y) / 5) * compensateFPS;
    }
    this.typingTime--;
    if (MOUSEY >= (this.y - 147) + ((i * 12) - 15) && MOUSEY <= (this.y - 147) + ((i * 12) + 3)) {
        cursor(TEXT);
    }
};
Console.prototype.pressEnter = function() {
    if (keyCode === ENTER) {
        var TEXT = this.text[this.text.length - 1].toLowerCase();
        var splitText = TEXT.split(" ");
        var failure = false;
        var success = false;
        var failureText;
        if (splitText.length > 1 && !devMode && !(TEXT === "| devmode true" || TEXT === "| devmode" || TEXT === "| devmode ")) {
            failure = true;
        }
        if (TEXT.length > 2 && !failure && splitText.length === 3 && (devMode || TEXT === "| devmode true")) {
            for (var i = 0; i < commands.length; i++) { 
                if (splitText[1] === commands[i].name) {
                    if (commands[i].second.length > 0) {
                        for (var j = 0; j < commands[i].second.length; j++) {
                            if (commands[i].second[j].name !== "CHOSEN") {
                                if (splitText[2] === commands[i].second[j].name) {
                                    commands[i].second[j].command();
                                    success = true;
                                }
                            } else {
                                commands[i].second[j].command(splitText[2]);
                                success = true;
                            }
                        }
                    }
                }
            }
        }
        if (TEXT.length > 2 && !failure && splitText.length === 2 && (devMode || TEXT === "| devmode")) {
            for (var i = 0; i < commands.length; i++) { 
                if (splitText[1] === commands[i].name) {
                    for (var j = 0; j < commands[i].second.length; j++) {
                        if (commands[i].second[j].name === "") {
                            commands[i].second[j].command();
                            success = true;
                        }
                    }
                }
            }
        }
        if (TEXT === "| " || TEXT === "| _") {
            failure = false;
            success = true;
        }
        if (failure || !success) {
            this.text.push("Unknown command.");
        }
        if (this.text.length > 12) {
            this.text.splice(this.text[0], this.text.length - 12);
        }
        this.text.push("| ");
    }
};
Console.prototype.deleteChain = function() {
    if ((keyCode === BACKSPACE || keyCode === DELETE) && this.text[this.text.length - 1].length > 2 && this.activated) {
        this.text[this.text.length - 1] = this.text[this.text.length - 1].substring(this.text[this.text.length - 1], this.text[this.text.length - 1].length - 1);
    }
};
Console.prototype.typeChain = function() {
    if (this.activated && this.typingTime <= 0) {
        for (var i = 0; i < allLetters.length; i++) {
            if (key.toString().toLowerCase() === allLetters[i].toLowerCase()) {
                this.text[this.text.length - 1] += key.toString();
            }
        }
    }
};
console = construct(Console, []);
//}
// (7) "SAVE CODES" {
makeSave = function() {
    codes.push({
    });
    var a = codes[codes.length - 1];
    a.name = playerInfo[0] + " " + playerInfo[1];
    var num = 1;
    for (var i = 0; i < codes.length - 1; i++) {
        if (codes[i].playerInfo.firstName === playerInfo[0] && codes[i].playerInfo.lastName === playerInfo[1]) {
            num = codes[i].name[codes[i].name.length - 1] * 1 + 1;
        }
    }
    a.name += " " + num.toString();
    a.date = month() + "/" + day() + "/" + (year() % 100) + " at " + hour() + ":" + (minute().toString().length === 1 ? "0" + minute() : minute());
    a.playerInfo = {
        firstName: playerInfo[0],
        lastName: playerInfo[1],
        gender: playerInfo[2],
        skinColor: playerInfo[3],
        hairColor: playerInfo[4],
    };
    if (allies.length > 0) {
        a.inventory = copyArray2(allies[0].inventory);
        if (allies[0].gun1 !== "NONE") {
            a.firstWeapon = [allies[0].weapons[0],allies[0].gun1.attachments.muzzle,allies[0].gun1.attachments.grip,allies[0].gun1.attachments.scope,allies[0].gun1.attachments.mag,allies[0].gun1.attachments.stock];
        } else {
            a.firstWeapon = ["NONE","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY"];
        }
        if (allies[0].gun2 !== "NONE") {
            a.secondWeapon = [allies[0].weapons[1],allies[0].gun2.attachments.muzzle,allies[0].gun2.attachments.grip,allies[0].gun2.attachments.scope,allies[0].gun2.attachments.mag,allies[0].gun2.attachments.stock];
        } else {
            a.secondWeapon = ["NONE","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY"];
        }
        a.backpack = allies[0].backpack;
        a.meleeWeapon = allies[0].weapons[2];
        a.player = allies[0].returnData();
    } else {
        a.inventory = [["EMPTY","EMPTY","EMPTY"],["EMPTY","EMPTY","EMPTY"],["EMPTY","EMPTY","EMPTY"],["EMPTY","EMPTY","EMPTY"],["EMPTY","EMPTY","EMPTY"],["EMPTY","EMPTY","EMPTY"],["EMPTY","EMPTY","EMPTY"],["EMPTY","EMPTY","EMPTY"],["LOCKED","LOCKED","LOCKED"],["LOCKED","LOCKED","LOCKED"],["LOCKED","LOCKED","LOCKED"],["LOCKED","LOCKED","LOCKED"],["LOCKED","LOCKED","LOCKED"],["LOCKED","LOCKED","LOCKED"]];
        a.firstWeapon = ["NONE","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY"];
        a.secondWeapon = ["NONE","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY"];
        a.backpack = 0;
        a.meleeWeapon = 0;
        a.player = [];
    }
    a.objectives = [];
    if (allies.length > 1 && allies[1].printOutType === "Partner") {
        a.partner = allies[1].returnData();
    } else {
        a.partner = [];
    }
    a.difficulty = copyArray(gameDifficulty);
    a.map = {
        which: gameMap[0],
        phase: gameMap[1],
    };
};
var printSave = function() {
    var theRet = "var codes = [\n";
    for (var i = 0; i < codes.length; i++) {
        var a = codes[i];
        theRet += "\t[\n\t\t\"" + a.name + "\",\"" + a.date + "\",[\"" + a.playerInfo.firstName + "\",\"" + a.playerInfo.lastName + "\",\"" + a.playerInfo.gender + "\"," + a.playerInfo.skinColor + "," + a.playerInfo.hairColor + "],";
        theRet += printArray(a.inventory);
        theRet += ",[";
        for (var j = 0; j < a.firstWeapon.length; j++) {
            var b = a.firstWeapon[j];
            if (typeof b === 'string') {
                if (j === 0) {
                    theRet += "\"NONE\",";
                } else {
                    theRet += "\"EMPTY\",";
                }
            } else if (b instanceof Array) {
                theRet += "[" + copyArray(b) + "],";
            } else {
                theRet += b + ",";
            }
        }
        theRet += "],[";
        for (var j = 0; j < a.secondWeapon.length; j++) {
            var b = a.secondWeapon[j];
            if (typeof b === 'string') {
                if (j === 0) {
                    theRet += "\"NONE\",";
                } else {
                    theRet += "\"EMPTY\",";
                }
            } else if (b instanceof Array) {
                theRet += "[" + copyArray(b) + "],";
            } else {
                theRet += b + ",";
            }
        }
        theRet += "]," + a.meleeWeapon + ", " + a.backpack + ",[";
        for (var j = 0; j < a.objectives.length; j++) {
            theRet += "[" + a.objectives[j][0] + "," + a.objectives[j][1] + "],";
        }
        theRet += "]," + printArray(a.player) + "," + printArray(a.partner) + ",[\"" + gameDifficulty[0] + "\",\"" + gameDifficulty[1] + "\"],[\"" + a.map.which + "\"," + a.map.phase + "]\n\t],\n";
    }
    theRet += "];";
    return theRet;
};
saveMadeMessage = function(message) {
    tips.push(construct(tip, [message, "WARNING"]));
};
//}
//} END "USER INTERFACE"

// "CINEMATICS" {
// (1) "ORDERS" {
var order = function(time, func) {
    this.cond = time;
    this.func = func;
};
order.prototype.run = function(v) {
    if (v >= this.cond) {
        if (this.func() !== false) {
            orders.splice(findInIndex(orders, this), 1);
        }
    }
};
//}
// (2) "CINEMATIC VARIABLES" {
var cinVars = {
    intro: [0, true, 0, ["                    Civil War!                    ", "The peoples of Mov Gaalidran\nare in the midst of a planetary conflict.", "The vast Rathanian Empire has moved\n against the rebellious Independence Front\nin a stunning move.", "Victim to this assault are\nhundreds of Independence Front bases.", "One such location, Outpost Delta 32,\nhas been taken by Rathanian special forces.", "Though most of its valiant defenders fell\nprotecting it, some survived\nand were captured.", "However, Independence Front commandos\nhave located them and now seek\nto free these soldiers.", "                    But will they succeed?                    "]],
    credits: [["","Credits",""],[],["Chief Producer","","Captain Argon"],[],["Game Engine", "", "Captain Argon"],["Help Provided By","","Non-Pirate"],["","","KWC"],["","","Ski"],["","","Kruxe"],["","","Guilherme"],["","","JentGent"],[],["Graphics","","Captain Argon"],["Help Provided By","","OOPS! Studios!"],[],["Level Design","","Captain Argon"],["Help Provided By","","Non-Pirate"],[],["Beta Testers","","Non-Pirate"],["","","Quantom Coding"],["","","AquA217"],["","","Owen Foley"],["","","Timothy"],["","","CZS"],["","","Coder Guy"],[],["User Interface","","Captain Argon"],["Help Provided By","","Non-Pirate"],["","","The Lightning Programmer"]],
    creditsLoc: 0,
};
//}
// (3) "ALL CINEMAICS" {
var cinematics = {
    "Intro": {
        run: function(time) {
            background(0);
            image(images["star background"], 0, 0);
            if (time > 420) {
                textFont(fonts.AgencyFB25);
                if (cinVars.intro[1]) {
                    if (cinVars.intro[2] === 0) {
                        cinVars.intro[0] += compensateFPS * 40;
                    } else {
                        cinVars.intro[0] += compensateFPS * 5;
                    }
                } else {
                    if (cinVars.intro[2] === cinVars.intro[3].length - 1 || cinVars.intro[2] === 0) {
                        cinVars.intro[0] -= compensateFPS * 2;
                    } else {
                        cinVars.intro[0] -= compensateFPS * 5;
                    }
                }
                if (cinVars.intro[0] >= 255 + textWidth(cinVars.intro[3][cinVars.intro[2]])) {
                    cinVars.intro[1] = false;
                } else if (cinVars.intro[0] <= -70 && !cinVars.intro[1]) {
                    cinVars.intro[1] = true;
                    cinVars.intro[2]++;
                }
                fill(255, constrain(cinVars.intro[0], 0, 255));
                text(cinVars.intro[3][cinVars.intro[2]], 0, 0);
            }
            if (cinVars.intro[2] === cinVars.intro[3].length || endCinematic) {
                cinematic = ["Prison Unlocked", -1, [-70, 470, 0.75]];
            }
        },
        subtitleList: [
            ["", 0],
        ],
    },
    "Prison Unlocked": {
        run: function(time) {
            background(255);
            if (time === 0) {
                allies.clear();
                allies.push(construct(character, [-70, 470, 45, true, "Player", 0, []]));
                orders.push(construct(order, [135, function() {
                    allies[0].targetLoc = [0, 400];
                    allies[0].warned = true;
                    allies[0].warnTime = 0;
                }]));
                orders.push(construct(order, [570, function() {
                    allies[0].targetLoc = [50, 385];
                    allies[0].moveLoc = [50, 385];
                }]));
            }
            displayMap();
            if (time >= 510) {
                cinematic[2][0] = allies[0].x;
                cinematic[2][1] = allies[0].y;
                if (inBox(allies[0].x, allies[0].y, 50, 385, 10, 10)) {
                    allies[0].targetLoc = [200, 385];
                    allies[0].moveLoc = [150, 385];
                }
            }
            if (levelEnds.length === 0 && (time >= 570 || endCinematic)) {
                levelEnds.push(construct(levelEnd, [function() {
                    scene = "game";
                    gameMap = ["Prisons", 1];
                    allies.clear();
                    allies.push(construct(character, [150, 385, 180, false, "Player", 0, []]));
                    codes.splice(selectedSaveCode, 1);
                    makeSave();
                    selectedSaveCode = codes.length - 1;
                    saveMadeMessage("Save Created: [" + codes[selectedSaveCode].name + "]");

                }, true]));
            }
        },
        subtitleList: [
            ["", 0],
            ["[Alarm blares]", 120],
            ["", 240],
            ["Announcement: Warning. Independence Front troops have breached the facility. Warning.", 300],
            ["", 480],
            ["Player: This might be my only opportunity for escape ... I have to take it!", 510],
            ["", 750],
        ],
    },
    "Datapad": {
        run: function(time) {
            if (time === 0) {
                allies[0].NPC = true;
                godMode = true;
                allies[0].moveLoc = [550, 220];
                allies[0].targetLoc = [550, 220];
                allies[0].warned = true;
                allies[0].warnTime = 0;
            }
            displayMap();
            if (time >= 180 || endCinematic) {
                godMode = false;
                allies[0].NPC = false;
                scene = "game";
                gameVars.haveDatapad = true;
                tips.push(construct(tip, ["You can now use your datapad! [" + commandKeys.datapad[1] + "]"]));
            }
        },
        subtitleList: [
            ["", 0],
            ["Player: This datapad should work quite well!", 120],
            ["", 180]
        ],
    },
    "Med Bay": {
        run: function(time) {
            if (time === 0) {
                allies[0].NPC = true;
                godMode = true;
                allies[0].moveLoc = [1425, 60];
                allies[0].targetLoc = [1425, 60];
                allies[0].warned = true;
                allies[0].warnTime = 0;
                orders.push(construct(order, [290, function() {
                    allies[0].targetLoc = [1365, 0];
                }]));
            }
            if (inBox(allies[0].x, allies[0].y, 1425, 60, 10, 10) && time < 290) {
                allies[0].targetLoc = [1450, 60];
            }
            displayMap();
            if (time >= 570 || endCinematic) {
                godMode = false;
                allies[0].NPC = false;
                scene = "game";
            }
        },
        subtitleList: [
            ["", 0],
            ["Player: These crates look promising!", 60],
            ["", 210],
            ["Announcement: Warning. Primary reactor unstable. Warning.", 270],
            ["", 420],
            ["Player: Hmm ... Seems like I need to move quickly.", 450],
        ],
    },
    "Thinking": {
        run: function(time) {
            if (time === 0) {
                allies[0].NPC = true;
                godMode = true;
                allies[0].moveLoc = [0, 535];
                allies[0].targetLoc = [0, 535];
                allies[0].warned = true;
                allies[0].warnTime = 0;
            }
            displayMap();
            if (inBox(allies[0].x, allies[0].y, 0, 535, 20, 20)) {
                allies[0].targetLoc = [0, 400];
            }
            if (time >= 210) {
                if (!computers[3].used[0]) {
                    computers[3].use(true);
                }
                allies[0].targetLoc = [0, 400];
            }
            if (time >= 320 || endCinematic) {
                if (!computers[3].used[0]) {
                    computers[3].use(true);
                }
                godMode = false;
                allies[0].NPC = false;
                scene = "game";
            }
        },
        subtitleList: [
            ["", 0],
            ["Player: I can't fly out of here with these defensive guns online ... ", 60],
            ["", 180],
            ["Player: This should turn them off.", 210],
        ],
    },
    "Success": {
        run: function(time) {
            if (time === 0) {
                allies[0].NPC = true;
                godMode = true;
                allies[0].moveLoc = [0, -670];
                allies[0].targetLoc = [0, -670];
                allies[0].warned = true;
                allies[0].warnTime = 0;
            }
            displayMap();
            if (inBox(allies[0].x, allies[0].y, 0, -670, 10, 10)) {
                allies[0].targetLoc = [0, 0];
            }
            if (levelEnds.length === 0 && (time >= 180 || endCinematic)) {
                levelEnds.push(construct(levelEnd, [function() {
                    godMode = false;
                    allies[0].NPC = false;
                    scene = "game";
                    allies[0].x = 0;
                    allies[0].y = -470;
                    gameMap[1] = 4;
                    unlockDoors(4, true);
                    falseDoors[0].locked = false;
                    falseDoors[1].locked = false;
                }, true]));
            }
        },
        subtitleList: [
            ["", 0],
            ["Player: Now I should be safe -- if only I can find a shuttle!", 60],
        ],
    },
    "Transport": {
        run: function(time) {
            if (time === 0) {
                allies[0].NPC = true;
                godMode = true;
                allies[0].moveLoc = [1560, -1300];
                allies[0].targetLoc = [1560, -1300];
                allies[0].warned = true;
                allies[0].warnTime = 0;
            }
            displayMap();
            if (time >= 210) {
                if (!computers[1].used[0]) {
                    computers[1].use(true);
                }
                allies[0].targetLoc = [1700, -1300];
            }
            if (time >= 320 || endCinematic) {
                if (!computers[1].used[0]) {
                    computers[1].use(true);
                }
                godMode = false;
                allies[0].NPC = false;
                scene = "game";
            }
        },
        subtitleList: [
            ["", 0],
            ["Player: The transport doesn't have any fuel! I'll fix that.", 120],
            ["", 240],
        ],
    },
    "Destruction": {
        run: function(time) {
            if (time === 0) {
                allies[0].NPC = true;
                godMode = true;
                allies[0].x = 1000;
                allies[0].y = -1600;
                allies[0].moveLoc = [allies[0].x, allies[0].y];
                allies[0].targetLoc = [1000, -2000];
                allies[0].warned = true;
                allies[0].warnTime = 0;
                gameVars.transport1 = [3000, -2200, -90, 2.5, 0];
            }
            displayMap();
            if (time <= 120) {
                gameVars.transport1[0] += (1000 - gameVars.transport1[0]) / 60 * compensateFPS;
            } else if (time <= 140) {
                stroke(255, 0, 0, 50);
                for (var i = 0; i < 10; i++) {
                    strokeWeight(random(4, 5));
                    line(gameVars.transport1[0], gameVars.transport1[1], 1000, -1000);
                }
            } else if (time <= 150) {
                allies[0].stunTime = 60;
                gameVars.transport2[4] = true;
            } else {
                cinematic[2][0] = allies[0].x;
                cinematic[2][1] = allies[0].y;
                cinematic[2][2] += (1 - cinematic[2][2]) / 60 * compensateFPS;
                gameVars.transport2[2] = 200;
                gameVars.transport1 = [-1000, -1000, 180, 2.5];
            }
            if (time >= 470) {
                allies[0].targetLoc = [200, -1000];
                allies[0].moveLoc = [200, -1000];
            }
            if (levelEnds.length === 0 && (time >= 560 || endCinematic)) {
                levelEnds.push(construct(levelEnd, [function() {
                    scene = "game";
                    godMode = false;
                    allies[0].NPC = false;
                    allies[0].x = -300;
                    allies[0].y = -1000;
                    allLoot.clear();
                    gameVars.transport1 = [-1000, -1000, 180, 2.5];
                }, true]));
            }
        },
        subtitleList: [
            ["", 0],
            ["Player: [Grunts]", 140],
            ["", 260],
            ["Player: I have to escape!", 290],
            ["", 410],
            ["Player: Their ship is my only escape. It should be in the next hangar.", 440],
        ],
    },
    "Flight": {
        run: function(time) {
            if (time === 0) {
                allies[0].NPC = true;
                godMode = true;
                allies[0].x = -1000;
                allies[0].y = -1000;
                allies[0].moveLoc = [-1000, -1000];
            }
            displayMap();
            if (time >= 150 && time <= 330) {
                gameVars.transport1[2] = constrain(gameVars.transport1[2] - 1 * compensateFPS, 0, 180);
                gameVars.transport1[3] = constrain(gameVars.transport1[3] + 0.5 / 180 * compensateFPS, 0, 3);
            } else if (time > 330 && time <= 390) {
                gameVars.transport1[4] = constrain(gameVars.transport1[4] + 100 / 60 * compensateFPS, 0, 100);
            } else if (time > 390 && time <= 510) {
                gameVars.transport1[1] -= 50 * compensateFPS;
            } else if (levelEnds.length === 0 && (time > 510 || endCinematic)) {
                levelEnds.push(construct(levelEnd, [function() {
                    cinematic = ["Credits", 0, [0, 0, 1]];
                    scene = "cinematic";
                }, true]));
            }
        },
        subtitleList: [
            ["", 0],
        ],
    },
    "Credits": {
        run: function(time) {
            image(images["star background"], 0, 0);
            if (time > 90) {
                var a = -time * 2 / 3 + 320;
                fill(255);
                cinVars.loc = 0;
                for (var i = 0; i < cinVars.credits.length; i++) {
                    textFont(fonts.AgencyFB20Simple);
                    if (cinVars.credits[i][0] === "Help Provided By") {
                        fill(200);
                        textFont(fonts.AgencyFB20Italics);
                    }
                    textAlign(LEFT, TOP);
                    text(cinVars.credits[i][0], -180, a + cinVars.loc);
                    fill(255);
                    textFont(fonts.AgencyFB20Simple);
                    textAlign(RIGHT, TOP);
                    text(cinVars.credits[i][2], 180, a + cinVars.loc);
                    textFont(fonts.AgencyFB30);
                    textAlign(CENTER, TOP);
                    text(cinVars.credits[i][1], 0, a + cinVars.loc);
                    if (cinVars.credits[i][1] === "") {
                        cinVars.loc += 30;
                    } else {
                        cinVars.loc += 40;
                    }
                }
                textAlign(CENTER, CENTER);
                if (levelEnds.length === 0 && (a <= -cinVars.credits.length * 30 - 200 || endCinematic)) {
                    levelEnds.push(construct(levelEnd, [function() {
                        scene = "selectGame";
                        weathers2.clear();
                        weathers2.push(construct(weather, ["snow 2", 400, 400, 20, [800, 1600], 50]));
                    }, true]));
                }
            }
        },
        subtitleList: [
            ["", 0],
        ],
    },
};
//}
//} END "CINEMATICS"

// "MAPS" {
var defensesBack = function() {
    background(30, 70, 110);
    for (var i = 0; i < cliffs.length; i++) {
        if (cliffs[i].s2 === 6) {
            cliffs[i].draw();
        }
    }
    filter(BLUR, 1);
    noStroke();
    fill(125);
    rect(0, -1000, 5000, 200);
    rect(0, -1600, 320, 1000);
    rect(1200, -1600, 320, 1000);
    rect(-1200, -1600, 320, 1000);
    rect(0, -2450, 700, 700);
    rect(1200, -2450, 700, 700);
    rect(-1200, -2450, 700, 700);
    rect(-600, -1600, 300, 300);
    rect(600, -1600, 300, 300);
    fill(30, 70, 110, 125);
    rect(0, -2270, 5000, 3400);
    for (var i = 0; i < cliffs.length; i++) {
        if (cliffs[i].s2 === 5) {
            cliffs[i].draw();
        }
    }
    filter(BLUR, 1);
    noStroke();
    fill(125);
    rect(0, -1000, 5000, 100);
    rect(0, -1600, 220, 1100);
    rect(1200, -1600, 220, 1100);
    rect(-1200, -1600, 220, 1100);
    rect(0, -2450, 600, 600);
    rect(1200, -2450, 600, 600);
    rect(-1200, -2450, 600, 600);
    rect(-600, -1600, 250, 250);
    rect(600, -1600, 250, 250);
    fill(30, 70, 110, 125);
    rect(0, -2270, 5000, 3400);
    for (var i = 0; i < cliffs.length; i++) {
        if (cliffs[i].s2 === 4) {
            cliffs[i].draw();
        }
    }
};
var hangarsBack = function() {
    background(30, 70, 110);
    for (var i = 0; i < cliffs.length; i++) {
        if (cliffs[i].s2 === 6) {
            cliffs[i].draw();
        }
    }
    filter(BLUR, 1);
    noStroke();
    fill(125);
    rect(0, -1850, 5000, 104);
    fill(30, 70, 110, 125);
    rect(0, -1850, 5000, 200);
    for (var i = 0; i < cliffs.length; i++) {
        if (cliffs[i].s2 === 5) {
            cliffs[i].draw();
        }
    }
    filter(BLUR, 1);
    noStroke();
    fill(125);
    rect(0, -1850, 5000, 54);
    fill(30, 70, 110, 125);
    rect(0, -1850, 5000, 200);
    for (var i = 0; i < cliffs.length; i++) {
        if (cliffs[i].s2 === 4) {
            cliffs[i].draw();
        }
    }
};
var spawn = function(place, spec, type) {
    for (var i = 0; i < type.length; i++) {
        enemies.push(construct(character, [random(place[0] - 50, place[0] + 50), random(place[1] - 50, place[1] + 50), 0, true, type[i], 0, spec]));
    }
};
maps = {
    // Campaign
    "Prisons": {
        run: function(stage) {
            switch (stage) {
                case 0:
                    gameVars.haveDatapad = false;
                    gameVars.wallType = color(150);
                    createObj(allies, character, [
						[150, 385, 180, false, "Player", 0, []],
					]);
					createObj(walls, block, [
					    ["Rectangle", -100, -55, 10, 1120],
                        ["Rectangle", 150, 500, 510, 10],
                        ["Rectangle", 200, 50, 610, 10],
                        ["Rectangle", 550, 50, 100, 10, [["health",100],["img","crack1"]]],
                        ["Rectangle", 655, 50, 110, 10],
                        ["Rectangle", 400, 307, 10, 384],
                        ["Rectangle", -25, 350, 160, 10],
                        ["Rectangle", 50, 460, 10, 90],
                        ["Rectangle", -25, 200, 160, 10],
                        ["Rectangle", 50, 310, 10, 90],
                        ["Rectangle", 50, 160, 10, 90],
                        ["Rectangle", 250, 390, 10, 90],
                        ["Rectangle", 325, 350, 160, 10],
                        ["Rectangle", 250, 240, 10, 90],
                        ["Rectangle", 325, 200, 160, 10],
                        ["Rectangle", 250, 90, 10, 90],
                        ["Rectangle", 555, 120, 310, 10],
                        ["Rectangle", 590, 320, 380, 10],
                        ["Rectangle", 400, -50, 10, 200],
                        ["Rectangle", 400, -270, 10, 100],
                        ["Rectangle", 585, -320, 380, 10],
                        ["Rectangle", 290, -225, 210, 10],
                        ["Rectangle", 370, -317.5, 70, 15],
                        ["Rectangle", 335, -350, 10, 80],
                        ["Rectangle", 160, -385, 350, 10],
                        ["Rectangle", -20, -305, 10, 170],
                        ["Rectangle", 45, -225, 140, 10],
                        ["Rectangle", 290, -145, 210, 10],
                        ["Rectangle", 65, -145, 100, 10],
                        ["Rectangle", -5, -145, 50, 10, [["health", 100],["img","crack2"]]],
                        ["Rectangle", -65, -145, 80, 10],
                        ["Rectangle", 155, -465, 360, 10],
                        ["Rectangle", 335, -497.5, 10, 75],
                        ["Rectangle", 555, -530, 450, 10],
                        ["Rectangle", 530, -355, 10, 70],
                        ["Rectangle", 530, -495, 10, 70],
                        ["Rectangle", 340, -610, 880, 10],
                        ["Rectangle", 432.5, -425, 80, 30],
                        ["Rectangle", 775, -105, 10, 850],
                    ]);
					gameVars.wallType = color(100);
                    createObj(doors, door, [
                        [400, 85, 1, false, "Cell_Door", 0],
                        [50, 385, 1, false, "Cell_Door", 0],
                        [250, 165, 3, false, "Cell_Door", 0],
                        [50, 85, 1, true, "Cell_Door", 1],
                        [50, 235, 1, true, "Cell_Door", 2],
                        [250, 465, 3, true, "Cell_Door", 3],
                        [250, 315, 3, true, "Cell_Door", 4],
                        [740, 50, 0, true, "Cell_Door", 5],
                        [740, 120, 0, true, "Cell_Door", 6],
                        [150, -225, 0, true, "Cell_Door", 7],
                        [-60, -225, 0, true, "Cell_Door", 9],
                        [150, -145, 2, true, "Cell_Door", 8],
                        [-20, -425, 1, true, "Cell_Door", 10],
                        [530, -425, 1, true, "Cell_Door", 11],
                        [335, -425, 1, true, "Cell_Door", 12],
                        [400, -185, 1, true, "Cell_Door", 13],
                        //[775, -570, 1, true, "Cell_Door"],
                    ]);
                    falseDoors.push(construct(falseDoor, [775, -570, 1, false, "Cell_Door"]));
                    createObj(boxes, crate, [
                        [420, 160, 0, 1],
                        [420, 220, 0, 3],
                        [420, 280, 0, 5],
                        [755, 220, 2, 2],
                        [755, 280, 2, 3],
                        [755, -270, 2, 2],
                        [755, -210, 2, 6],
                        [-50, -125, 1, 2],
                        [350, -125, 1, 10],
                        [-60, -590, 1, 3],
                        [0, -590, 1, 2],
                        [0, -270, 0, 0]
                    ]);
                    createObj(computers, computer, [
                        [670, 30, 3, "Console_1", function() {
                            unlockDoors(5);
                        }],
                        [450, 30, 3, "Console_1", function() {
                            unlockDoors(6);
                        }],
                        [350, 30, 3, "Console_1", function() {
                            unlockDoors(7);
                        }],
                        [-50, 30, 3, "Console_1", function() {
                            unlockDoors(10);
                        }],
                        [150, 30, 3, "Console_1", function() {
                            unlockDoors(8);
                        }],
                        [380, -270, 2, "Console_1", function() {
                            unlockDoors(9);
                        }],
                        [550, -355, 0, "Console_1", function() {
                        }],
                        [550, -495, 0, "Console_1", function() {
                            unlockDoors(1);
                        }],
                        [755, -355, 2, "Console_1", function() {
                            unlockDoors(2);
                        }],
                        [755, -425, 2, "Console_1", function() {
                            unlockDoors(3);
                        }],
                        [755, -495, 2, "Console_1", function() {
                            unlockDoors(4);
                        }],
                        [355, -495, 0, "Console_1", function() {
                            gameVars.codeRoom.push("RED");
                        }],
                        [355, -355, 0, "Console_1", function() {
                            gameVars.codeRoom.push("GREEN");
                        }],
                        [510, -355, 2, "Console_1", function() {
                            gameVars.codeRoom.push("BLUE");
                        }],
                        [510, -495, 2, "Console_1", function() {
                            if (gameVars.codeRoom[0] === "RED" && gameVars.codeRoom[1] === "GREEN" && gameVars.codeRoom[2] === "BLUE") {
                                unlockDoors(11);
                            }
                            gameVars.codeRoom = [];
                        }],
                        [315, -500, 2, "Console_1", function() {
                            unlockDoors(12);
                        }],
                    ]);
                    createObj(enemies, character, [
                        [650, 220, 0, true, "Guard_4", 1, []],
                        [325, 120, 0, true, "Guard_0", 1, []],
                        //[500, -185, 0, true, "Guard_3", 1, ["scope", 2]],
                        [180, -75, 0, true, "Guard_3", 1, []],
                        [150, -40, 0, true, "Guard_Sergeant", 1, []],
                        [150, -185, 0, true, "Guard_Sergeant", 1, ["scope", 1.5]],
                        [450, 0, 180, true, "Guard_2", 1, []],
                        [650, 85, 0, true, "Guard_1", 1, ["scope", 1.5]],
                        [160, -425, 0, true, "Guard_4", 1, ["scope", 1.5]],
                        [432.5, -460, 0, true, "Guard_Sergeant", 1, []],
                        [432.5, -390, 0, true, "Guard_Lieutenant", 1, []],
                        [200, -550, 0, true, "Guard_3", 1, ["scope", 1.5]],
                        [350, -270, 0, true, "Guard_3", 1, []],
                        [150, -350, 0, true, "Guard_2", 1, []]
                    ]);
                    createObj(allLoot, loot, [
                        [-25, 275, medical[1], 2, "Medical", 1, false],
                        [-25, 125, medical[3], 2, "Medical", 3, false],
                        [325, 275, grenades[0], 2, "Grenade", 0, false],
                        [325 + cos(-90) * 30, 425 + sin(-90) * 30, armor[2], 250, "Armor", 2, false],
                        [325 + cos(30) * 30, 425 + sin(30) * 30, melee[2], 1, "Melee", 2, false],
                        [325 + cos(150) * 30, 425 + sin(150) * 30, backpack[2], 1, "Backpack", 2, false],
                    ]);
                    createObj(objectives, objective, [
                        [0, false],
                    ]);
                    if (gameMap[1] === 0) {
                        nextScene = "cinematic";
                        cinematic = ["Intro", 0, [0, 0, 1]];
                    }
                break;
                case 1:
                    if (inBox(allies[0].x, allies[0].y, 700, -570, 150, 80)) {
                        levelEnds.push(construct(levelEnd, [function() {
                            gameMap = ["Infirmary", 0];
                            scene = "loadmap";
                            loadOn = 0;
                        }]));
                        gameMap[1] = 2;
                    }
                break;
                default:
                break;
            }
        },
        draw: [
            [true, function(stage) {
                background(50);
                floorImg(-100, -610, 775, 500);
            }, [-100, -610, 775, 500]],
            [false, function(stage) {
                if ((objectives.length <= 2) || (objectives.length > 2 && !objectives[2].completed) || scene === "cinematic") {
                    var a = "datapad";
                    image(images[a], 550, 220);
                }
            }],
            [false, function() {
                drawImages("drawBox", turrets, allLoot, computers, boxes, debriz, bullets, enemies, allies, bombs, booms, smokeClouds, "lighting", doors, falseDoors, walls, weathers);
                stroke(0);
                strokeWeight(3);
                for (var i = 0; i < 3; i++) {
                    if (gameVars.codeRoom[i] === "RED") {
                        fill(200, 0, 0, 200);
                    } else if (gameVars.codeRoom[i] === "GREEN") {
                        fill(0, 200, 0, 200);
                    } else if (gameVars.codeRoom[i] === "BLUE") {
                        fill(0, 0, 200, 200);
                    } else {
                        noFill();   
                    }   
                    rect(407.5 + (i * 25), -425, 20, 20, 2);
                }
                noStroke();
                fill(0);
                rect(830, 0, 100, 10000);
            }],
        ],
        map: function() {
            return ["prisonMap", 337.5, -120, 0.21];
        },
        images: [],
    },
    "Infirmary": {
        run: function(stage) {
            switch (stage) {
                case 0:
                    gameVars.wallType = color(150);
					createObj(allies, character, [
						[-400, 0, 270, false, "Player", 0, playerData],
					]);
					createObj(walls, block, [
						["Rectangle", -200, -40, 610, 10],
						["Rectangle", -200, 40, 610, 10],
						["Rectangle", 100, 95, 10, 110],
						["Rectangle", 300, 150, 410, 10],
						["Rectangle", 500, 190, 10, 100],
						["Rectangle", 500, 10, 10, 100],
						["Rectangle", 640, -40, 290, 10],
						["Rectangle", 640, 240, 290, 10],
						["Rectangle", 780, 10, 10, 100],
						["Rectangle", 780, 190, 10, 100],
						["Rectangle", 640, -90, 10, 100],
						["Rectangle", 830, 150, 100, 10],
						["Rectangle", 880, 95, 10, 490],
						["Rectangle", 655, -140, 40, 10],
						["Rectangle", 900, -140, 110, 10],
						["Rectangle|Visible", 760, -140, 170, 8, [["opaque",false],["color",color(255,100)]]],
						["Rectangle|Visible", 760, -240, 170, 8, [["opaque",false],["color",color(255,100)]]],
						["Rectangle", 900, -240, 110, 10],
						["Rectangle", 880, -380, 10, 300],
						["Rectangle", 710, -530, 350, 10],
						["Rectangle", 655, -240, 40, 10],
						["Rectangle", 640, -290, 10, 100],
						["Rectangle", 975, -340, 210, 10],
						["Rectangle", 710, -340, 160, 10],
						["Rectangle", 100, -190, 10, 310],
						["Rectangle", 325, -340, 450, 10],
						["Rectangle", 540, -435, 10, 190],
						["Rectangle", 1080, -290, 10, 110],
						["Rectangle", 1080, -90, 10, 100],
						["Rectangle", 1020, -40, 270, 10],
						["Rectangle", 1280, -90, 10, 100],
						["Rectangle", 1145, -140, 280, 10],
						["Rectangle", 1145, -240, 280, 10],
						["Rectangle", 1245, -40, 80, 10],
						["Rectangle", 1280, -390, 10, 300],
						["Rectangle", 1580, -240, 410, 410],
						["Rectangle", 1530, -540, 510, 10],
						["Rectangle", 1082.5, 340, 415, 10],
						["Rectangle", 1030, 150, 10, 270],
						["Rectangle", 1180, 150, 10, 270],
						["Rectangle", 1480, 150, 10, 270],
						["Rectangle", 1630, 150, 10, 270],
						["Rectangle", 1575, 340, 410, 10],
						["Rectangle", 1780, -52.5, 10, 795],
						["Rectangle", 1780, -535, 10, 10],
					]);
					createObj(enemies, character, [
						[500, -190, 45, true, "Guard_3", 1, ["scope",1.5]],
						[540, -195, 45, true, "Guard_4", 0, ["scope",1.7]],
						[675, -290, 90, true, "Guard_Sergeant", 2, []],
						[675, -90, 90, true, "Guard_Sergeant", 3, []],
						[860, -260, 160, true, "Guard_Sergeant", 1, []],
						[750, -400, 70, true, "Guard_4", 0, []],
						[830, -20, 0, true, "Guard_Sergeant", 2, []],
						[750, 30, 90, true, "Guard_2", 1, ["scope",1.3]],
						[750, 170, 90, true, "Guard_3", 0, ["scope",1.3]],
						[1240, -190, 90, true, "Guard_Sergeant", 1, ["scope",1.3]],
						[1265, -165, 90, true, "Guard_4", 0, ["scope",1.3]],
						[1140, 50, 50, true, "Medical_Bot", 0, []],
						[1520, 200, 180, true, "Medical_Bot", 1, ["scope",1.3]],
						[1260, -70, 90, true, "Medical_Bot", 0, []],
						[1225, -70, 90, true, "Medical_Bot", 1, []],
					]);
					createObj(computers, computer, [
						[645, -90, 0, "Console_2", function() {
							openDoors(2);
						}],
						[645, -290, 0, "Console_2", function() {
							unlockDoors(1);
						}],
					]);
					gameVars.wallType = color(100);
					createObj(doors, door, [
						[500, 120, 1, false, "Door_1", Infinity, 1],
						[500, 80, 3, false, "Door_1", Infinity, 1],
						[780, 80, 3, false, "Door_1", Infinity, 2],
						[780, 120, 1, false, "Door_1", Infinity, 2],
						[880, -170, 1, true, "Door_1", 1, 3],
						[880, -210, 3, true, "Door_1", 1, 3],
						[850, -340, 0, false, "Door_1", Infinity, 4],
						[810, -340, 2, false, "Door_1", Infinity, 4],
						[610, -340, 0, false, "Door_1", Infinity, 5],
						[570, -340, 2, false, "Door_1", Infinity, 5],
						[980, -240, 0, false, "Door_2"],
						[980, -140, 2, false, "Door_2"],
						[1180, -40, 0, false, "Door_2"],
						[1350, 340, 0, true, "Door_1"],
						[1310, 340, 2, true, "Door_1"],
					]);
					createObj(falseDoors, falseDoor, [
						[-500, 0, 1, true, "Cell_Door"],
						[1780, -510, 1, false, "Door_1"],
						[1780, -470, 3, false, "Door_1"],
				    ]);
					gameVars.wallType = color(255, 100, 0);
					createObj(doors, door, [
						[870, -190, 1, true, "Laser_1", 2],
					]);
					createObj(boxes, crate, [
						[1460, 150, 2, 2],
						[1460, 60, 2, 2],
						[1460, 240, 2, 2],
						[1200, 150, 0, 2],
						[1200, 60, 0, 2],
						[1200, 240, 0, 2],
						[1180, -120, 1, 2],
						[1120, -120, 1, 2],
						[1240, -120, 1, 2],
						[920, -320, 1, 0],
						[980, -320, 1, 1],
						[1040, -320, 1, 3],
						[920, -60, 3, 5],
						[980, -60, 3, 6],
						[1040, -60, 3, 10],
					]);
                    gameVars.wallType = color(230);
                    var beds = function(x) {
                        createObj(walls, block, [
                            ["Rectangle", x, 30, 70, 35, [["shootThrough", true],["opaque",false]]],
                            ["Rectangle", x, 90, 70, 35, [["shootThrough", true],["opaque",false]]],
                            ["Rectangle", x, 150, 70, 35, [["shootThrough", true],["opaque",false]]],
                            ["Rectangle", x, 210, 70, 35, [["shootThrough", true],["opaque",false]]],
                            ["Rectangle", x, 270, 70, 35, [["shootThrough", true],["opaque",false]]],
						]);
                    };
					beds(925);
					beds(1075);
					beds(1585);
					beds(1735);
					objectives.clear();
                    objectives.push(construct(objective, [4, false]));
                break;
                case 2:
					createObj(enemies, character, [
						[1330, -350, 0, true, "Guard_Lieutenant", 4, ["scope",4]],
						[1355, -380, 0, true, "Guard_Sergeant", 3, ["scope",4]],
						[1305, -380, 0, true, "Guard_4", 2, ["scope",4]],
						[1355, -420, 0, true, "Guard_3", 1, ["scope",4]],
						[1305, -420, 0, true, "Guard_3", 0, ["scope",4]],
					]);
					gameMap[1] = 3;
                break;
                case 3:
                    if (inBox(allies[0].x, allies[0].y, 1730, -490, 200, 100)) {
                        levelEnds.push(construct(levelEnd, [function() {
                            gameMap = ["Defenses", 0];
                            scene = "loadmap";
                            loadOn = 0;
                        }]));
                        gameMap[1] = 1;
                    }
                break;
                default:
                break;
            }
        },
        draw: [
            [true, function(stage) {
                background(50);
                floorImg(-500, -540, 1780, 340);
                var beds = function(x) {
                    fill(255);
                    rect(x, 30, 70, 35);
                    rect(x, 90, 70, 35);
                    rect(x, 150, 70, 35);
                    rect(x, 210, 70, 35);
                    rect(x, 270, 70, 35);
                    fill(50);
                    if (x < 1500) {
                        rect(x - 20, 30, 20, 30);
                        rect(x - 20, 90, 20, 30);
                        rect(x - 20, 150, 20, 30);
                        rect(x - 20, 210, 20, 30);
                        rect(x - 20, 270, 20, 30);
                    } else {
                        rect(x + 20, 30, 20, 30);
                        rect(x + 20, 90, 20, 30);
                        rect(x + 20, 150, 20, 30);
                        rect(x + 20, 210, 20, 30);
                        rect(x + 20, 270, 20, 30);
                    }
                };
				beds(925);
				beds(1075);
				beds(1585);
				beds(1735);
            }, [-500, -540, 1780, 340]],
            [false, function() {
                drawImages("drawBox", turrets, allLoot, computers, boxes, debriz, bullets, enemies, allies, bombs, booms, smokeClouds, "lighting");  
                if (!doors[doors.length - 1].alwaysOpen) {
                    fill(random(200, 255), random(20, 50), 0, 10);
                    noStroke();
                    for (var i = 0; i < 10; i++) {
                        rect(random(869, 871), -190, random(6, 10), 100);
                    }
                }
                drawImages(doors, falseDoors, walls, weathers);
            }],
        ],
        map: function() {
            return ["infirmaryMap", 640, -150, 0.14];
        },
        images: [],
    },
    "Defenses": {
        run: function(stage) {
            switch (stage) {
                case 0:
					var a = [["shootThrough",true],["opaque",false],["color",color(150)]];
					gameVars.wallType = color(200);
                    objectives.push(construct(objective, [5, false]));
					createObj(walls, block, [
						["Circle|Metal", 0, 0, 200, 200],
						["Rectangle", 0, -170, 400, 10],
						["Rectangle", 200, 0, 10, 350],
						["Rectangle", -200, 0, 10, 350],
						["Rectangle", -120, 170, 160, 10],
						["Rectangle", 120, 170, 160, 10],
						["Rectangle", 0, 270, 600, 10],
						["Rectangle", 300, 0, 10, 550],
						["Rectangle", -300, 0, 10, 550],
						["Rectangle", -170, -270, 260, 10],
						["Rectangle", 170, -270, 260, 10],
						["Rectangle", -220, -370, 360, 10],
						["Rectangle", 220, -370, 360, 10],
						["Rectangle", 400, 0, 10, 750],
						["Rectangle", -400, 0, 10, 750],
						["Rectangle", 395, -370, 10, 10],
						["Rectangle", -395, -370, 10, 10],
						["Rectangle", -220, 370, 360, 10],
						["Rectangle", 220, 370, 360, 10],
						["Rectangle|Invisible", 0, 470, 210, 70, [["shootThrough",true],["opaque",false]]],
						["Rectangle", -300, 570, 210, 400],
						["Rectangle", 300, 570, 210, 400],
						["Rectangle", -270, 870, 460, 10],
						["Rectangle", 270, 870, 460, 10],
						["Rectangle", -1000, 0, 1000, 10],
						["Rectangle", -500, 435, 10, 880],
						["Rectangle", 1000, 0, 1000, 10],
						["Rectangle", 500, 435, 10, 880],
						["Rectangle", 0, 667.5, 400, 205],
						["Rectangle", -420, -570, 760, 10],
						["Rectangle", 420, -570, 760, 10],
						["Rectangle", -1145, -100, 710, 10],
						["Rectangle", -555, -100, 310, 10],
						["Rectangle", 1145, -100, 710, 10],
						["Rectangle", 555, -100, 310, 10],
						["Rectangle", 1495, -95, 10, 10],
						["Rectangle", 1495, -5, 10, 10],
						["Rectangle", -1495, -95, 10, 10],
						["Rectangle", -1495, -5, 10, 10],
						["Rectangle", -800, -400, 10, 600],
						["Rectangle", 800, -400, 10, 600],
						["Rectangle", -1200, -700, 810, 10],
						["Rectangle", 1200, -700, 810, 10],
						["Rectangle", -1600, -850, 10, 310],
						["Rectangle", -2000, -1000, 800, 10],
						["Rectangle", 1600, -850, 10, 310],
						["Rectangle", 2000, -1000, 800, 10],
						["Rectangle|Invisible", -1430, -1000, 350, 10, a],
						["Rectangle|Invisible", 1430, -1000, 350, 10, a],
						["Rectangle|Invisible", -600, -1000, 1090, 10, a],
						["Rectangle|Invisible", 600, -1000, 1090, 10, a],
						["Circle|Invisible", 0, 505, 20, 20, [["shootThrough",true],["opaque",false]]],
						["Rectangle", 0, -90, 50, 20],
						["Rectangle|Invisible", 0, -570, 200, 8, [["shootThrough",true],["opaque",false]]],
					]);
					createObj(allies, character, [
					    [-1450, -50, 270, false, "Player", 1, playerData]
					]);
					createObj(enemies, character, [
					    [-625, -325, 30, true, "Guard_4", 1, ["scope",1.5]],
					    [-600, -300, 30, true, "Guard_Sergeant", 2, ["scope",1.5]],
					    [-600, -1600, 0, true, "Guard_Gunner", 0, []],
					    [600, -1600, 0, true, "Guard_Gunner", 0, []],
					    [0, 525, 180, true, "Guard_Captain", 4, ["scope",1.5]],
					    [150, 470, 135, true, "Guard_Specialist", 3, []],
					    [0, 340, 180, true, "Guard_Sergeant", 2, ["scope",2]],
					    [350, 0, 180, true, "Guard_4", 0, ["scope",2]],
					    [-350, 0, 180, true, "Guard_4", 1, ["scope",2]],
					    [150, 0, 45, true, "Guard_3", 0, ["scope",1.5]],
					    [0, -140, 0, true, "Guard_Lieutenant", 2, []],
					    [0, 200, 0, true, "Guard_4", 1, ["scope",1.5]],
					    [430, 800, 315, true, "Guard_3", 0, []],
					    [460, 830, 135, true, "Guard_4", 1, []],
					    [-60, -540, 0, true, "Guard_3", 0, ["scope",1.3]],
					    [60, -540, 0, true, "Guard_3", 1, ["scope",1.3]],
					    [-1100, -840, 270, true, "Defense_Bot", 0, ["scope",1.3]],
					    [-200, -780, 315, true, "Defense_Bot", 1, ["scope",1.3]],
					    [200, -780, 45, true, "Defense_Bot", 2, ["scope",1.3]],
					    [1100, -840, 90, true, "Defense_Bot", 3, ["scope",1.3]],
					]);
					createObj(computers, computer, [
						[0, -115, 3, "Console_1", function() {
							unlockDoors(3);
						}],
						[0, -175, 3, "Console_3", function() {
							unlockDoors(1);
						}],
						[0, 275, 1, "Console_3", function() {
							unlockDoors(2);
						}],
						[0, 490, 1, "Console_1", function() {
						    unlockDoors(4);
						    gameMap[1] = 2;
						}]
					]);
					gameVars.wallType = color(100);
					createObj(doors, door, [
						[-20, 170, 2, true, "Door_1", 1, 1],
						[20, 170, 0, true, "Door_1", 1, 1],
						[-20, -270, 2, true, "Door_1", 2, 2],
						[20, -270, 0, true, "Door_1", 2, 2],
						[-20, 370, 2, true, "Door_1", 3, 3],
						[20, 370, 0, true, "Door_1", 3, 3],
						[-20, -570, 2, true, "Door_1", 4, 4],
						[20, -570, 0, true, "Door_1", 4, 4],
						[-20, -370, 2, false, "Door_1", Infinity, 5],
						[20, -370, 0, false, "Door_1", Infinity, 5],
						[770, -100, 0, false, "Door_1", Infinity, 7],
						[730, -100, 2, false, "Door_1", Infinity, 7],
						[-770, -100, 2, false, "Door_1", Infinity, 8],
						[-730, -100, 0, false, "Door_1", Infinity, 8],
					]);
					createObj(falseDoors, falseDoor, [
						[1495, -30, 1, true, "Door_1"],
						[1495, -70, 3, true, "Door_1"],
						[-1495, -30, 1, true, "Door_1"],
						[-1495, -70, 3, true, "Door_1"],
						[20, 870, 0, true, "Door_1", Infinity, 6],
						[-20, 870, 2, true, "Door_1", Infinity, 6],
					]);
					createObj(turrets, turret, [
					    [-600, -1600, 0, 6, 4],
					    [600, -1600, 0, 6, 4],
					]);
					createObj(weathers, weather, [
					    ["snow 3", 0, -2070, 0, [4200, 3000], 50],
					]);
					var aaGun = function(x) {
					    createObj(walls, block, [
						["Rectangle|Invisible", x+60, -1600, 10, 1200, a],
						["Rectangle|Invisible", x-60, -1600, 10, 1200, a],
						["Rectangle|Invisible", x-155, -2200, 200, 10, a],
						["Rectangle|Invisible", x+155, -2200, 200, 10, a],
						["Rectangle|Invisible", x, -2700, 500, 10, a],
						["Rectangle|Invisible", x+250, -2450, 10, 500, a],
						["Rectangle|Invisible", x-250, -2450, 10, 500, a],
						["Circle", x, -2450, 300, 300],
						["Rectangle", x, -2450, 50, 300],
						]);
						createObj(cliffs, cliff, [
						    [[x-60,-1000,x-60,-2200,x-250,-2200,x-250,-2700,x+250,-2700,x+250,-2200,x+60,-2200,x+60,-1000]],
						    [[x-110,-1050,x-110,-2150,x-300,-2150,x-300,-2750,x+300,-2750,x+300,-2150,x+110,-2150,x+110,-1050],[["s2",5]]],
						    [[x-160,-1100,x-160,-2100,x-350,-2100,x-350,-2800,x+350,-2800,x+350,-2100,x+160,-2100,x+160,-1100],[["s2",6]]],
						]);
						computers.push(construct(computer, [x, -2285, 1, "Console_1", function() {
						    gameVars.aaGuns[(x + 1200) / 1200] = 1;
						}]));
						boxes.push(construct(crate, [x, -2615, 3, 9]));
						if (x === 0) {
						    enemies.push(construct(character, [x, -2200, 0, true, "Guard_Rockettrooper", 0, ["scope",1.3]]));
						} else {
					        enemies.push(construct(character, [x, -2200, 0, true, "Guard_Sniper", 0, ["scope",2]]));
						}
					};
					aaGun(0);
					aaGun(1200);
					aaGun(-1200);
                break;
                case 1:
                    if (inBox(allies[0].x, allies[0].y, 0, 530, 120, 80)) {
                        gameMap[1] = 5;
                        scene = "cinematic";
                        cinematic = ["Thinking", 0, [0, 530, 0.5]];
                    }
                break;
                case 2:
                    if (inBox(allies[0].x, allies[0].y, 0, -470, 200, 200)) {
                        levelEnds.push(construct(levelEnd, [function() {
                            unlockDoors(4, true);
                            allies[0].x = 0;
                            allies[0].y = -670;
                            transition[1] = 0;
                        }, true]));
                        gameMap[1] = 3;
                    }
                break;
                case 3:
                    if (levelEnds.length === 0 && inBox(allies[0].x, allies[0].y, 0, -670, 200, 200) && gameVars.aaGuns[0] === 1 && gameVars.aaGuns[1] === 1 && gameVars.aaGuns[2] === 1) {
                        levelEnds.push(construct(levelEnd, [function() {
                            scene = "cinematic";
                            cinematic = ["Success", 0, [0, -670, 0.75]];
                            transition[1] = 0;
                        }, true]));
                    }
                break;
                case 4:
                    if (inBox(allies[0].x, allies[0].y, 1445, -50, 100, 100)) {
                        levelEnds.push(construct(levelEnd, [function() {
                            gameMap = ["Hangars", 0];
                            scene = "loadmap";
                            loadOn = 0;
                        }]));
                        gameMap[1] = 2;
                    }
                break;
                default:
                break;
            }
        },
        draw: [
            [true, function() {
                background(0, 0);
                cliffs.clear();
                createObj(cliffs, cliff, [
                    [[-2300, -1000, -1260, -1000]],
                    [[-1140, -1000, -60, -1000]],
                    [[60, -1000, 1140, -1000]],
                    [[1260, -1000, 2300, -1000]],
                    [[-2300, -1050, -1310, -1050], [["s2", 5]]],
                    [[-1090, -1050, -110, -1050], [["s2", 5]]],
                    [[110, -1050, 1090, -1050], [["s2", 5]]],
                    [[1310, -1050, 2300, -1050], [["s2", 5]]],
                    [[-2300, -1100, -1360, -1100], [["s2", 6]]],
                    [[-1040, -1100, -160, -1100], [["s2", 6]]],
                    [[160, -1100, 1040, -1100], [["s2", 6]]],
                    [[1360, -1100, 2300, -1100], [["s2", 6]]],
                    [[-700,-1700,-500,-1700,-500,-1500,-700,-1500,-700,-1700]],
                    [[500,-1700,700,-1700,700,-1500,500,-1500,500,-1700]],
                    [[-725,-1725,-475,-1725,-475,-1475,-725,-1475,-725,-1725],[["s2",5]]],
                    [[475,-1725,725,-1725,725,-1475,475,-1475,475,-1725],[["s2",5]]],
                    [[-750,-1750,-450,-1750,-450,-1450,-750,-1450,-750,-1750],[["s2",6]]],
                    [[450,-1750,750,-1750,750,-1450,450,-1450,450,-1750],[["s2",6]]],
                ]);
                var aaGun = function(x) {
					createObj(cliffs, cliff, [
					    [[x-60,-1000,x-60,-2200,x-250,-2200,x-250,-2700,x+250,-2700,x+250,-2200,x+60,-2200,x+60,-1000]],
					    [[x-110,-1050,x-110,-2150,x-300,-2150,x-300,-2750,x+300,-2750,x+300,-2150,x+110,-2150,x+110,-1050],[["s2",5]]],
					    [[x-160,-1100,x-160,-2100,x-350,-2100,x-350,-2800,x+350,-2800,x+350,-2100,x+160,-2100,x+160,-1100],[["s2",6]]],
					]);
				};
				aaGun(0);
				aaGun(1200);
				aaGun(-1200);
            }, [0, 0, 1, 1]],
            [true, function(stage) {
                background(50);
                floorImg(-1550, -570, 1550, 870);
                fill(0);
                ellipse(0, 505, 20, 20);
                fill(100, 50, 15);
                rect(0, 470, 210, 70);
                var a = "datapad";
                image(images[a], 40, 485);
            }, [-1550, -570, 1550, 870]],
            [true, function(stage) {
                defensesBack();
            }, [-2300, -3400, 0, -1000]],
            [true, function(stage) {
                defensesBack();
            }, [0, -3400, 2300, -1000]],
            [true, function() {
                var aaGun = function(x) {
                    fill(110);
                    rect(x, -1600, 120, 1200);
                    rect(x, -2450, 500, 500);
                    fill(100);
					rect(x+60, -1600, 10, 1200);
					rect(x-60, -1600, 10, 1200);
					rect(x-155, -2200, 200, 10);
					rect(x+155, -2200, 200, 10);
					rect(x, -2700, 510, 10);
					rect(x+250, -2450, 10, 500);
					rect(x-250, -2450, 10, 500);
                };
                noStroke();
                fill(125);
                rect(-600,-1600,200,200);
                rect(600,-1600,200,200);
			    aaGun(0);
				aaGun(1200);
				aaGun(-1200);
                fill(110);
                rect(0, -785, 3200, 430);
                fill(100);
                rect(-1430, -1000, 350, 10);
				rect(1430, -1000, 350, 10);
				rect(-600, -1000, 1090, 10);
				rect(600, -1000, 1090, 10);
            }, [-2300, -3400, 2300, -570]],
            [false, function() {
                drawImages("drawBox", turrets, allLoot, computers, boxes, debriz, bullets, enemies, allies, bombs, booms, smokeClouds, "lighting", doors, falseDoors, walls);
                var a = "turret";
				image(images[a], -1200, -2450);
				image(images[a], 0, -2450);
				image(images[a], 1200, -2450);
				if (gameMap[1] === 3) {
				    drawImages(weathers);
                    fill(0);
                    rect(0, -70, 5000, 990);
                    rect(0, -560, 80, 12);
                    rect(1800, -600, 1990, 190);
                    rect(-1800, -600, 1990, 190);
                    rect(2100, -845, 990, 300);
                    rect(-2100, -845, 990, 300);
				}
            }],
        ],
        map: function() {
            return ["defensesMap", 0, -1130, 0.07];
        },
        images: [],
    },
    "Hangars": {
        run: function(stage) {
            switch (stage) {
                case 0:
                    objectives.push(construct(objective, [7, false]));
					gameVars.wallType = color(200);
					createObj(walls, block, [
					    ["Rectangle", -122.5, -300, 165, 10],
					    ["Rectangle", 122.5, -300, 165, 10],
					    ["Rectangle", -120, 300, 160, 10],
					    ["Rectangle", 120, 300, 160, 10],
					    ["Rectangle", 200, 170, 10, 260],
					    ["Rectangle", -200, 170, 10, 260],
					    ["Rectangle", -300, 120, 10, 160],
					    ["Rectangle", -300, -120, 10, 160],
					    ["Rectangle", 300, 120, 10, 160],
					    ["Rectangle", 300, -120, 10, 160],
					    ["Rectangle", 495, 200, 910, 10],
					    ["Rectangle", -495, 200, 910, 10],
					    ["Rectangle", 495, -200, 910, 10],
					    ["Rectangle", -495, -200, 910, 10],
					    ["Rectangle", 200, -495, 10, 910],
					    ["Rectangle", -200, -495, 10, 910],
					    ["Rectangle", -1425, -200, 750, 10],
					    ["Rectangle", -1425, 200, 750, 10],
					    ["Rectangle", 1425, -200, 750, 10],
					    ["Rectangle", 1425, 200, 750, 10],
					    ["Rectangle", -200, -1425, 10, 750],
					    ["Rectangle", 200, -1425, 10, 750],
					    ["Rectangle", -1800, 122.5, 10, 165],
					    ["Rectangle", -2150, -50, 710, 10],
					    ["Rectangle", -2080, 50, 560, 10],
					    ["Rectangle", -2472.5, 50, 65, 10],
					    ["Rectangle", -2500, 45, 10, 10],
					    ["Rectangle", -2500, -45, 10, 10],
					    ["Rectangle", 1800, 122.5, 10, 165],
					    ["Rectangle", 1800, -750, 10, 1420],
					    ["Rectangle", 1800, -1670, 10, 260],
					    ["Rectangle", -1800, -750, 10, 1420],
					    ["Rectangle", -1800, -1670, 10, 260],
					    ["Rectangle", 2000, 0, 10, 210],
					    ["Rectangle", 1900, -100, 200, 10],
					    ["Rectangle", 1900, 100, 200, 10],
					    ["Rectangle", 240, -1840, 90, 90],
					    ["Rectangle", -240, -1840, 90, 90],
					    ["Rectangle", 1760, -1840, 90, 90],
					    ["Rectangle", -1760, -1840, 90, 90],
					    ["Rectangle", -1000, -1840, 1600, 10, [["opaque",false],["color",color(0, 200, 255)]]],
					    ["Rectangle", 1000, -1840, 1600, 10, [["opaque",false],["color",color(0, 200, 255)]]],
					    ["Rectangle", 2000, -3500, 10, 210],
					    ["Rectangle", 1900, -3600, 200, 10],
					    ["Rectangle", 1900, -3400, 200, 10],
					    ["Rectangle", 1800, -3670, 10, 260],
					    ["Rectangle", 1800, -3330, 10, 260],
					    ["Rectangle", 200, -3670, 10, 260],
					    ["Rectangle", 200, -3330, 10, 260],
					    ["Rectangle", -220, -3200, 50, 410],
					    ["Rectangle", -220, -3800, 50, 410],
					    ["Rectangle", 800, -3800, 2000, 10],
					    ["Rectangle", 800, -3200, 2000, 10],
					    ["Rectangle", -940, -3500, 10, 1000],
					    ["Rectangle", -590, -4000, 710, 10],
					    ["Rectangle", -590, -3000, 710, 10],
					    ["Circle|Invisible", -590, -3500, 200, 200, [["shootThrough",true],["opaque",false]]],
					    ["Rectangle", 1000, -1000, 800, 800, [["color",color(255,0)],["opaque",false]]],
					    ["Rectangle", -1000, -1000, 800, 800, [["color",color(255,0)],["opaque",false]]],
					    ["Circle", 1700, -700, 200, 200,[["color",color(150,0,0)]]],
					    ["Circle", 1700, -900, 200, 200,[["color",color(150,0,0)]]],
					    ["Circle", 1700, -1100, 200, 200,[["color",color(150,0,0)]]],
					    ["Circle", 1700, -1300, 200, 200,[["color",color(150,0,0)]]],
					    ["Circle", -1700, -700, 200, 200,[["color",color(150,0,0)]]],
					    ["Circle", -1700, -900, 200, 200,[["color",color(150,0,0)]]],
					    ["Circle", -1700, -1100, 200, 200,[["color",color(150,0,0)]]],
					    ["Circle", -1700, -1300, 200, 200,[["color",color(150,0,0)]]],
					    ["Rectangle", 1700, -1300, 200, 50],
					    ["Rectangle", 1400, -3670, 10, 260],
					    ["Rectangle", 1400, -3330, 10, 260],
					    ["Rectangle", 0, -1800, 400, 10],
					    ["Rectangle", 0, -1880, 400, 10],
					    ["Rectangle", 1750, -1000, 100, 800,[["color",color(50,0,0)]]],
					    ["Rectangle", -1750, -1000, 100, 800,[["color",color(50,0,0)]]],
					]);
					createObj(allies, character, [
					    [-2400, 0, 270, false, "Player", 0, playerData],
					]);
					createObj(enemies, character, [
					    [-1770, -70, 270, true, "Guard_3", 0, []],
					    [-1770, 70, 270, true, "Guard_4", 1, []],
					    [-1000, -170, 0, true, "Guard_Sergeant", 2, ["scope",1.3]],
					    [-250, -70, 0, true, "Guard_3", 0, []],
					    [-250, 70, 180, true, "Guard_4", 1, []],
					    [0, 0, 90, true, "Guard_Gunner", 0, ["scope",1.3]],
					    [1000, 0, 90, true, "Guard_Lieutenant", 2, ["scope",1.3]],
					    [1030, 30, 90, true, "Guard_Sergeant", 1, ["scope",1.4]],
					    [1770, -70, 0, true, "Guard_4", 0, ["scope",1.3]],
					    [900, -440, 270, true, "Tech", 0, []],
					    [935, -440, 90, true, "Tech", 1, []],
					    [1200, -3500, 270, true, "Guard_Lieutenant", 2, ["scope",1.4]],
					    [1180, -3400, 250, true, "Guard_Specialist", 1, ["scope",1.4]],
					    [1180, -3600, 290, true, "Guard_Sergeant", 0, ["scope",1.4]],
					    [230, -3570, 270, true, "Guard_Sergeant", 0, ["scope",1.3]],
					    [230, -3430, 270, true, "Guard_Sniper", 1, ["scope",1.3]],
					    [-720, -3500, 270, true, "Guard_Colonel", 5, []],
					    [-720, -3450, 180, true, "Guard_Captain", 4, ["scope",1.3]],
					    [-220, -3575, 0, true, "Guard_Specialist", 2, ["scope",1.3]],
					    [-220, -3425, 180, true, "Guard_Sergeant", 3, ["scope",1.3]],
					    [-390, -3975, 180, true, "Guard_Lieutenant", 1, ["scope",1.2]],
					]);
					createObj(computers, computer, [
					    [-920, -3500, 0, "Console_1", function() {
					        unlockDoors(1);
					        gameVars.hangar = 1;
                            objectives.push(construct(objective, [8, false]));
					    }],
					    [1585, -1300, 2, "Console_1", function() {
                            gameVars.fuel[2] = 1;
                            objectives.push(construct(objective, [9, false]));
					        createObj(walls, block, [
					            ["Rectangle", 125, -1055, 150, 10, [["shootThrough", true],["opaque",false]]],
					            ["Rectangle", 125, -945, 150, 10, [["shootThrough", true],["opaque",false]]],
					            ["Rectangle", 50, -1000, 10, 100, [["shootThrough", true],["opaque",false]]],
					            ["Rectangle", 1055, -125, 10, 150, [["shootThrough", true],["opaque",false]]],
					            ["Rectangle", 945, -125, 10, 150, [["shootThrough", true],["opaque",false]]],
					            ["Rectangle", 1000, -50, 100, 10, [["shootThrough", true],["opaque",false]]],
			                ]);
					        unlockDoors(1, false);
					        unlockDoors(2, false);
					        allLoot.clear();
					        enemies.clear();
					        var c = ["mLoc", gameVars.move1, "tLoc", gameVars.move1, "stage", "Move In", "warned", true, "scope", 1.2], d = ["mLoc", gameVars.move2, "tLoc", gameVars.move2, "stage", "Move In", "warned", true, "scope", 1.2];
					        gameVars.orders.push(
                                [0, function() {
                                    spawn(gameVars.spawn1, c, ["Guard_Sergeant", "Guard_3"]);
                                    spawn(gameVars.spawn2, d, ["Guard_4", "Guard_Specialist"]);
                                }],
                                [20, function() {
                                    spawn(gameVars.spawn1, c, ["Guard_3", "Guard_Lieutenant"]);
                                    spawn(gameVars.spawn2, d, ["Guard_2"]);
                                }],
                                [30, function() {
                                    spawn(gameVars.spawn1, c, ["Guard_2", "Guard_2"]);
                                    spawn(gameVars.spawn2, d, ["Guard_1"]);
                                }],
                                [40, function() {
                                    spawn(gameVars.spawn1, c, ["Guard_Lieutenant"]);
                                    spawn(gameVars.spawn2, d, ["Guard_Sergeant"]);
                                }],
                                [50, function() {
                                    spawn(gameVars.spawn1, c, ["Guard_2"]);
                                }],
                                [60, function() {
                                    spawn(gameVars.spawn2, d, ["Guard_3"]);
                                }],
                                [70, function() {
                                    spawn(gameVars.spawn1, c, ["Guard_Sniper"]);
                                }],
                                [80, function() {
                                    spawn(gameVars.spawn1, c, ["Guard_Rockettrooper"]);
                                    spawn(gameVars.spawn2, d, ["Guard_Specialist"]);
                                }],
                                [90, function() {
                                    spawn(gameVars.spawn2, d, ["Guard_Sniper"]);
                                }],
                                [100, function() {
                                    spawn(gameVars.spawn1, c, ["Guard_Captain"]);
                                    spawn(gameVars.spawn2, d, ["Guard_4"]);
                                }]
                            );
					    }, false],
					]);
					gameVars.wallType = color(100);
					createObj(doors, door, [
					    [-20, -200, 2, false, "Door_1", Infinity, 1],
					    [20, -200, 0, false, "Door_1", Infinity, 1],
					    [-20, 200, 2, false, "Door_1", Infinity, 2],
					    [20, 200, 0, false, "Door_1", Infinity, 2],
					    [-200, -20, 3, false, "Door_1", Infinity, 3],
					    [-200, 20, 1, false, "Door_1", Infinity, 3],
					    [200, -20, 3, false, "Door_1", Infinity, 4],
					    [200, 20, 1, false, "Door_1", Infinity, 4],
					    [-300, -20, 3, false, "Door_1", Infinity, 6],
					    [-300, 20, 1, false, "Door_1", Infinity, 6],
					    [300, -20, 3, false, "Door_1", Infinity, 7],
					    [300, 20, 1, false, "Door_1", Infinity, 7],
					    [200, -975, 1, true, "Door_2", 2, 8],
					    [200, -1025, 3, true, "Door_2", 2, 8],
					    [975, -200, 2, true, "Door_2", 1, 10],
					    [1025, -200, 0, true, "Door_2", 1, 10],
					    [-1800, -20, 3, false, "Door_1", Infinity, 12],
					    [-1800, 20, 1, false, "Door_1", Infinity, 12],
					    [1800, -20, 3, false, "Door_1", Infinity, 13],
					    [1800, 20, 1, false, "Door_1", Infinity, 13],
					    [1800, -3520, 3, false, "Door_1", Infinity, 15],
					    [1800, -3480, 1, false, "Door_1", Infinity, 15],
					    [200, -3520, 3, false, "Door_1", Infinity, 16],
					    [200, -3480, 1, false, "Door_1", Infinity, 16],
					    [1400, -3520, 3, false, "Door_1", Infinity, 17],
					    [1400, -3480, 1, false, "Door_1", Infinity, 17],
					]);
					createObj(falseDoors, falseDoor, [
					    [-2500, -20, 3, true, "Door_1"],
					    [-2500, 20, 1, true, "Door_1"],
					    [-2420, 50, 2, true, "Door_1"],
					    [-2380, 50, 0, true, "Door_1"],
					    [975, 200, 2, true, "Door_2"],
					    [1025, 200, 0, true, "Door_2"],
					    [-1025, 200, 2, true, "Door_2"],
					    [-975, 200, 0, true, "Door_2"],
					    [-1025, -200, 2, true, "Door_2"],
					    [-975, -200, 0, true, "Door_2"],
					    [-20, 300, 2, true, "Door_1"],
					    [20, 300, 0, true, "Door_1"],
					    [-20, -300, 2, true, "Door_1"],
					    [20, -300, 0, true, "Door_1"],
					    [-200, -975, 1, true, "Door_2"],
					    [-200, -1025, 3, true, "Door_2"],
					    [1800, -1520, 3, true, "Door_1"],
					    [1800, -1480, 1, true, "Door_1"],
					    [-1800, -1520, 3, true, "Door_1"],
					    [-1800, -1480, 1, true, "Door_1"],
					]);
					createObj(boxes, crate, [
					    [1600, -3780, 1, 3],
					    [1520, -3780, 1, 5],
					    [1680, -3780, 1, 7],
					    [1600, -3220, 3, 6],
					    [1520, -3220, 3, 8],
					    [1680, -3220, 3, 10],
					]);
					createObj(turrets, turret, [
					    [0, 0, 90, 4, 1],
					]);
					createObj(weathers, weather, [
					    ["snow 3", 0, -2840, 5, [5000, 2800], 50],
					]);
                break;
                case 1:
                    if (inBox(allies[0].x, allies[0].y, 1900, 0, 200, 200)) {
                        levelEnds.push(construct(levelEnd, [function() {
                            allies[0].x = 1900;
                            allies[0].y = -3500;
                        }, true]));
                        gameMap[1] = 2;
                    }
                    if (inBox(allies[0].x, allies[0].y, 1585, -1300, 200, 200)) {
                        scene = "cinematic";
                        cinematic = ["Transport", 0, [1585, -1300, 0.75]];
                        gameMap[1] = 5;
                    }
                break;
                case 2:
                    if (allies[0].x < 1750) {
                        gameMap[1] = 3;
                    }
                break;
                case 3:
                    if (inBox(allies[0].x, allies[0].y, 1900, -3500, 200, 200)) {
                        levelEnds.push(construct(levelEnd, [function() {
                            allies[0].x = 1900;
                            allies[0].y = 0;
                        }, true]));
                        gameMap[1] = 4;
                    }
                break;
                case 4:
                    if (allies[0].x < 1750) {
                        gameMap[1] = 1;
                    }
                break;
                case 5:
                    squads.clear();
                    for (var i = 0; i < gameVars.orders.length; i++) {
                        if (gameVars.fuel[0] >= gameVars.orders[i][0]) {
                            gameVars.orders[i][1]();
                            gameVars.orders.splice(i, 1);
                            i--;
                        }
                    }
                    for (var i = 0; i < enemies.length; i++) {
                        if ((enemies[i].moveLoc.equals(gameVars.spawn1) && inBox(enemies[i].x, enemies[i].y, gameVars.spawn1[0], gameVars.spawn1[1], enemies[i].width, enemies[i].width)) || (enemies[i].moveLoc.equals(gameVars.spawn2) && inBox(enemies[i].x, enemies[i].y, gameVars.spawn2[0], gameVars.spawn2[1], enemies[i].width, enemies[i].width)) || (!enemies[i].moveLoc.equals(gameVars.spawn1) && !enemies[i].moveLoc.equals(gameVars.spawn2))) {
                            enemies[i].moveLoc = enemies[i].targetLoc = [allies[0].x, allies[0].y];
                        }
                    }
                    if (gameVars.fuel[0] >= gameVars.fuel[1]) {
                        levelEnds.push(construct(levelEnd, [function() {
                            enemies.clear();
                            createObj(enemies, character, [
                                [-1000, -500, 0, true, "Elite_Trooper_Captain", 5, []],
                                [-435, -385, 180, true, "Elite_Trooper", 4, []],
                                [-440, -1422, 180, true, "Elite_Trooper", 3, []],
                                [-1496, -1015, 180, true, "Elite_Trooper", 2, []],
                                [-1532, -394, 180, true, "Elite_Trooper", 1, []],
                                [-1000, -450, 180, true, "Elite_Trooper", 0, []]
                            ]);
                            walls.length -= 6;
                            objectives.push(construct(objective, [10, false]));
                            scene = "cinematic";
                            cinematic = ["Destruction", 0, [1000, -1600, 5]];
                        }, true]));
                        gameMap[1] = 6;
                    }
                    gameVars.fuel[0] += compensateFPS / 60;
                break;
                case 7:
                    if (inBox(allies[0].x, allies[0].y, -1000, -550, 100, 100)) {
                        gameMap[1] = 8;
                        levelEnds.push(construct(levelEnd, [function() {
                            scene = "cinematic";
                            cinematic = ["Flight", 0, [-1000, -1000, 5]];
                        }, true]));
                    }
                break;
                default:
                break;
            }
        },
        draw: [
            [true, function() {
                cliffs.clear();
				createObj(cliffs, cliff, [
				    [[250, -1850, 1750, -1850]],
				    [[-2000, -1875, 2000, -1875], [["s2",5]]],
				    [[-2100, -1900, 2100, -1900], [["s2",6]]],
				]);
            }, [0, 0, 1, 1]],
            [true, function(stage) {
                background(30, 70, 110);
            }, [-2200, -3000, 2200, -2240]],
            [true, function(stage) {
                background(30, 70, 110);
                hangarsBack();
            }, [-2200, -2240, 2200, -1840]],
            [false, function() {
                if (gameMap[1] === 1 || gameMap[1] === 5 || gameMap[1] === 6) {
                    drawImages(weathers);
                }
            }],
            [true, function(stage) {
                background(50);
                noStroke();
                fill(60);
                stroke(0);
                strokeWeight(4);
                rect(1900, 0, 194, 194);
                stroke(0, 100);
                strokeWeight(1);
                for (var i = -2500; i < 1800; i += 100) {
                    line(i, 300, i, -1850);
                }
                for (var i = -1850; i < 300; i += 100) {
                    line(-2500, i, 1800, i);
                }
                noStroke();
                fill(150, 0, 0);
                triangle(-1000, -580, -980, -560, -1020, -560);
                triangle(-950, -580, -930, -560, -970, -560);
                triangle(-1050, -580, -1030, -560, -1070, -560);
            }, [-2500, -1850, 2000, 300]],
            [true, function() {
                background(50);
                fill(60);
                stroke(0);
                strokeWeight(4);
                rect(1900, -3500, 194, 194);
            }, [1800,-3600,2000,-3400]],
            [true, function(stage) {
                stroke(0, 100);
                strokeWeight(1);
                for (var i = 1800; i > -940; i -= 100) {
                    line(i, -3000, i, -4000);
                }
                for (var i = -4000; i < -3000; i += 100) {
                    line(-940, i, 1800, i);
                }
            }, [-940, -4000, 2000, -3000]],
            [false, function() {
                fill(30);
                rect(1000, -1842, 1440, 30);
                rect(-1000, -1842, 1440, 30);
                fill(100);
                rect(1000, -1842, 1440, 6);
                rect(-1000, -1842, 1440, 6);
                var img = ["holotable", "hologram"];
                image(images[img[0]], -590, -3500);
                if (timeOnLevel % 120 >= random(0, 1)) {
                    pushMatrix();
                    translate(-590, -3500);
                    rotate(timeOnLevel / 10);
                    fill(255, 5);
                    for (var i = 0; i < 360; i += 2) {
                        var a = random(i - 1, i + 1), b = 3, c = random(55, 65);
                        triangle(0, 0, c * cos(a - b), c * sin(a - b), c * cos(a + b), c / 1.5 * sin(a + b));
                    }
                    popMatrix();
                }
                drawImages("drawBox", turrets, allLoot, computers, boxes, debriz, bullets, enemies, allies, bombs, booms, smokeClouds);
                noStroke();
                fill(0, 200, 255, 20);
                for (var i = 0; i < 10; i++) {
                    rect(1000, random(-1841, -1843), 1440, random(13, 15));
                }
                for (var i = 0; i < 10; i++) {
                    rect(-1000, random(-1841, -1843), 1440, random(13, 15));
                }
                if (timeOnLevel % 120 >= random(0, 1)) {
                    pushMatrix();
                    translate(-590, -3500);
                    rotate(timeOnLevel / 10);
                    image(images[img[1]], 0, 0);
                    popMatrix();
                }
                drawImages("lighting", doors, falseDoors, walls);
            }],
            [true, function(stage) {
                background(0, 0);
                noStroke();
                fill(55);
                rect(-1000, -1000, 800, 800);
                fill(65);
                quad(-1400, -1400, -600, -1400, -650, -1350, -1350, -1350);
                quad(-1400, -600, -600, -600, -650, -650, -1350, -650);
                fill(0);
                rect(-1000, -1000, 708, 708);
                fill(60);
                rect(-1000, -1000, 700, 700);
                fill(255, 255, 0, 100);
                for (var i = -1325; i < -650; i += 25) {
                    rect(-1160, i, 40, 10);
                    rect(-1000, i, 40, 10);
                    rect(-840, i, 40, 10);
                }
                fill(200, 0, 0);
                ellipse(-1700, -1300, 190, 190);
                ellipse(-1700, -1100, 190, 190);
                ellipse(-1700, -900, 190, 190);
                ellipse(-1700, -700, 190, 190);
            }, [-1800, -1800, -200, -200]],
            [true, function(stage) {
                background(0, 0);
                noStroke();
                fill(55);
                rect(1000, -1000, 800, 800);
                fill(65);
                quad(1400, -1400, 600, -1400, 650, -1350, 1350, -1350);
                quad(1400, -600, 600, -600, 650, -650, 1350, -650);
                fill(0);
                rect(1000, -1000, 708, 708);
                fill(60);
                rect(1000, -1000, 700, 700);
                fill(255, 255, 0, 100);
                for (var i = -1325; i < -650; i += 25) {
                    rect(1160, i, 40, 10);
                    rect(1000, i, 40, 10);
                    rect(840, i, 40, 10);
                }
                fill(200, 0, 0);
                ellipse(1700, -1300, 190, 190);
                ellipse(1700, -1100, 190, 190);
                ellipse(1700, -900, 190, 190);
                ellipse(1700, -700, 190, 190);
            }, [200, -1800, 1800, -200]],
            [false, function() {
                advancedShuttle(gameVars.transport1[0], gameVars.transport1[1], gameVars.transport1[2], gameVars.transport1[3], gameVars.transport1[4]);
                notSoAdvancedShuttle(gameVars.transport2[0], gameVars.transport2[1], gameVars.transport2[2], gameVars.transport2[3], gameVars.transport2[4]);
            }],
        ],
        map: function() {
            if (allies[0].y > -2000) {
                return ["hangarsMap1", -250, -950, 0.068];
            } else {
                return ["hangarsMap2", 530, -3560, 0.105];
            }
        },
        images: [],
    },
    // Free Play
    "Servers": {
        run: function(stage) {  
            switch (stage) {
                case 0:
                    gameVars.wallType = color(165);
                    createObj(walls, block, [
                        ["Rectangle", 145, -350, 210, 10],
                        ["Rectangle", -145, -350, 210, 10],
                        ["Rectangle", 145, 350, 210, 10],
                        ["Rectangle", -145, 350, 210, 10],
                        ["Rectangle", 250, -197.5, 10, 315],
                        ["Rectangle", -250, -197.5, 10, 315],
                        ["Rectangle", 250, 197.5, 10, 315],
                        ["Rectangle", -250, 197.5, 10, 315],
                        ["Rectangle", 70, -500, 60, 10],
                        ["Rectangle", -70, -500, 60, 10],
                        ["Rectangle", 45, 500, 10, 10],
                        ["Rectangle", -45, 500, 10, 10],
                        ["Rectangle", 100, -475, 10, 60],
                        ["Rectangle", -100, -475, 10, 60],
                        ["Rectangle", 50, 475, 10, 60],
                        ["Rectangle", -50, 475, 10, 60],
                        ["Rectangle", 350, -2.5, 10, 215],
                        ["Rectangle", 380, -100, 60, 10],
                        ["Rectangle", 380, 100, 60, 10],
                        ["Rectangle", 495, -100, 10, 10],
                        ["Rectangle", 495, 100, 10, 10],
                        ["Rectangle", 500, 150, 10, 710],
                        ["Rectangle", 175, -450, 160, 10],
                        ["Rectangle", 250, -475, 10, 60],
                        ["Rectangle", 650, -350, 10, 310],
                        ["Rectangle", 575, -200, 160, 10],
                        ["Rectangle", 350, -275, 10, 170],
                        ["Rectangle", 350, -472.5, 10, 65],
                        ["Rectangle", 350, 275, 10, 160],
                        ["Rectangle", 400, 275, 10, 160],
                        ["Rectangle", 375, 200, 60, 10],
                        ["Rectangle", 375, 350, 60, 10],
                        ["Rectangle", 450, 500, 110, 10],
                        ["Rectangle", 400, 475, 10, 60],
                        ["Rectangle", 225, 450, 360, 10],
                        ["Rectangle", -100, 450, 110, 10],
                        ["Rectangle", -150, 475, 10, 60],
                        ["Rectangle", -200, 500, 110, 10],
                        ["Rectangle", -250, 475, 10, 60],
                        ["Rectangle", -200, -475, 10, 60],
                        ["Rectangle", -150, -450, 110, 10],
                        ["Rectangle", -230, -500, 60, 10],
                        ["Rectangle", -350, -550, 10, 110],
                        ["Rectangle", 302.5, -500, 115, 10],
                        ["Rectangle", 547.5, -500, 215, 10],
                        ["Rectangle", 450, -550, 10, 110],
                        ["Rectangle", 50, -600, 810, 10],
                        ["Rectangle", -650, -25, 10, 960],
                        ["Rectangle", -497.5, -500, 315, 10],
                        ["Rectangle", -450, 450, 410, 10],
                        ["Rectangle", -450, -100, 10, 410],
                        ["Rectangle", -280, -300, 60, 10],
                        ["Rectangle", -422.5, -300, 65, 10],
                        ["Rectangle", -280, 100, 60, 10],
                        ["Rectangle", -422.5, 100, 65, 10],
                        ["Rectangle", -450, 200, 210, 10],
                        ["Rectangle", -450, 350, 210, 10],
                        ["Rectangle", -350, 215, 10, 40],
                        ["Rectangle", -350, 335, 10, 40],
                        ["Rectangle", -550, 215, 10, 40],
                        ["Rectangle", -550, 335, 10, 40],
                        ["Rectangle", 150, -200, 200, 300, [["opaque",false],["shootThrough",true]]],
                        ["Rectangle", -150, -200, 200, 300, [["opaque",false],["shootThrough",true]]],
                        ["Rectangle", 150, 200, 200, 300, [["opaque",false],["shootThrough",true]]],
                        ["Rectangle", -150, 200, 200, 300, [["opaque",false],["shootThrough",true]]],
                    ]);
                    gameVars.wallType = color(0);
                    for (var i = -200; i <= 200; i += 100) {
                        for (var j = -300; j <= 300; j += 100) {
                            if (i !== 0 && j !== 0) {
                                walls.push(construct(block, ["Rectangle", i, j, 60, 60, [["opaque",false]]]));
                            }
                        }
                    }
                    gameVars.wallType = color(100);
                    createObj(doors, door, [
                        [-20, -350, 2, false, "Door_1", Infinity, 0],
                        [20, -350, 0, false, "Door_1", Infinity, 0],
                        [-20, 350, 2, false, "Door_1", Infinity, 1],
                        [20, 350, 0, false, "Door_1", Infinity, 1],
                        [250, -20, 3, false, "Door_1", Infinity, 2],
                        [250, 20, 1, false, "Door_1", Infinity, 2],
                        [-250, -20, 3, false, "Door_1", Infinity, 3],
                        [-250, 20, 1, false, "Door_1", Infinity, 3],
                        [430, -100, 2, false, "Door_1", Infinity, 4],
                        [470, -100, 0, false, "Door_1", Infinity, 4],
                        [430, 100, 2, false, "Door_1", Infinity, 5],
                        [470, 100, 0, false, "Door_1", Infinity, 5],
                        [350, -170, 3, false, "Door_1", Infinity, 6],
                        [350, -130, 1, false, "Door_1", Infinity, 6],
                        [350, -420, 3, false, "Door_1", Infinity, 7],
                        [350, -380, 1, false, "Door_1", Infinity, 7],
                        [-20, -500, 2, false, "Door_1", Infinity, 8],
                        [20, -500, 0, false, "Door_1", Infinity, 8],
                        [-320, -500, 2, false, "Door_1", Infinity, 9],
                        [-280, -500, 0, false, "Door_1", Infinity, 9],
                        [380, -500, 2, false, "Door_1", Infinity, 10],
                        [420, -500, 0, false, "Door_1", Infinity, 10],
                        [-370, -300, 2, false, "Door_1", Infinity, 11],
                        [-330, -300, 0, false, "Door_1", Infinity, 11],
                        [-370, 100, 2, false, "Door_1", Infinity, 12],
                        [-330, 100, 0, false, "Door_1", Infinity, 12],
                        [-350, 255, 3, false, "Door_1", Infinity, 13],
                        [-350, 295, 1, false, "Door_1", Infinity, 13],
                        [-550, 255, 3, false, "Door_1", Infinity, 14],
                        [-550, 295, 1, false, "Door_1", Infinity, 14],
                    ]);
                    createObj(falseDoors, falseDoor, [
                        [-20, 500, 2, true, "Door_1"],
                        [20, 500, 0, true, "Door_1"],
                    ]);
                    createObj(boxes, crate, [
                        [-200, 480, 3, 0],
                        [-450, 330, 3, 1],
                        [630, -350, 2, 2],
                        [370, 0, 0, 3],
                        [450, 480, 3, 5],
                        [-150, -470, 3, 6],
                        [300, -480, 1, 7],
                        [-430, -100, 0, 9],
                    ]);
                    spawnPoints.push([-150, 0],[150, 0],[0, -200],[0,200],[0,0],[300,0],[-300,0],[300,-250],[150,-400],[0,-550],[175,-475],[400,-550],[450,-450],[450,-200],[450,0],[450,200],[450,400],[300,400],[300,200],[0,475],[-200,400],[-300,200],[-600,400],[-300,400],[-450,240],[-600,200],[-350,-200],[-550,0],[-550,-200],[-550,-400],[-350,-400],[-150,-400],[-300,-550]);
                    freePlayPlayer();
                break;
                case 1:
                    createCharacters();
                break;
            }
        },
        draw: [
            [true, function() {                
                background(220);
                stroke(0, 50);
                strokeWeight(1);
                for (var i = -650; i < 650; i += 100) {
                    line(i, -600, i, 500);
                }
                for (var i = 500; i > -600; i -= 100) {
                    line(-650, i, 650, i);
                }
                noStroke();
                stroke(200);
                strokeWeight(10);
                fill(180);
                rect(-150, -200, 200, 300, 10);
                rect(150, -200, 200, 300, 10);
                rect(-150, 200, 200, 300, 10);
                rect(150, 200, 200, 300, 10);
            }, [-650, -600, 650, 500]],
            [false, function() {
                drawImages("drawBox", turrets, allLoot, computers, boxes, debriz, bullets, enemies, allies, bombs, booms, smokeClouds, "lighting", doors, falseDoors, walls, weathers);
            }],
            [true, function() {
                fill(0);
                rect(555, 0, 100, 300);
            }, [500, -150, 600, 150]],
            [true, function() {
                var serverRack = function(x, y, r) {
                    pushMatrix();
                    translate(x, y);
                    rotate(r * 90);
                    fill(0);
                    rect(0, 0, 60, 60, 2);
                    fill(50);
                    rect(0, 0, 50, 50, 2);
                    fill(0);
                    rect(0, 0, 2, 30);
                    rect(-10, 0, 2, 30);
                    rect(10, 0, 2, 30);
                    fill(100);
                    rect(0, 27, 40, 8, 10, 10, 0, 0);
                    var a = round(random(0, 2));
                    fill((a === 1 || a === 3) ? 255 : 0, a === 2 ? 255 : 0, 0, 100);
                    rect(-11, 27, 12, 4, 10);
                    a = round(random(0, 2));
                    fill((a === 1 || a === 3) ? 255 : 0, a === 2 ? 255 : 0, 0, 100);
                    rect(4, 27, 12, 4, 10);
                    fill(0);
                    ellipse(15, 27, 4, 4);
                    popMatrix();
                };
                for (var i = -200; i <= 200; i += 100) {
                    for (var j = -300; j <= 300; j += 100) {
                        if (i !== 0 && j !== 0) {
                            serverRack(i, j, (i < 0) ? 3 : 1);
                        }
                    }
                }
            }, [-250, -350, 250, 350]],
        ],
        map: function() {
            return ["serversMap", 0, -115, 0.23];
        },
        images: [],
    },
};
var createMapImage = function(map, which) {
    background(255);
    maps[map].images.push([]);
    if (maps[map].draw[which][0]) {
        var dim = maps[map].draw[which][2];
        var a = 0;
        for (var j = dim[0]; j < dim[2]; j += 400) {
            maps[map].images[which].push([]);
            for (var k = dim[1]; k < dim[3]; k += 400) {
                background(0, 0);
                pushMatrix();
                translate(-j, -k);
                maps[map].draw[which][1]();
                maps[map].images[which][a].push(get(0, 0, 400, 400));
                popMatrix();
            }
            a++;
        }
    }
};
//} END "MAPS"

// "KEY PRESSING" {
keyPressed = function() {
    keys[keyCode] = true;
    console.deleteChain();
    if (!(keys[192] && keys[SHIFT])) {
        console.typeChain();
    }
    if ((scene === "New Game" || scene === "Free Play") && settingsSelected === 5 && playerInfo[0].length > 0 && (keyCode === BACKSPACE || keyCode === DELETE)) {
        playerInfo[0] = playerInfo[0].substring(playerInfo[0], playerInfo[0].length - 1);
    } else if ((scene === "New Game" || scene === "Free Play") && settingsSelected === 6 && playerInfo[1].length > 0 && (keyCode === BACKSPACE || keyCode === DELETE)) {
        playerInfo[1] = playerInfo[1].substring(playerInfo[1], playerInfo[1].length - 1);
    }
};
keyReleased = function() {
    var pressedInventory = false, pressedGrab = false, pressedDatapad = false;
    if (keys[192] && keys[SHIFT]) {
        console.activated = !console.activated;
        console.typingTime = 5;
    }
    if (scene !== "settings") {
        if (scene === "game" && pressed(commandKeys.menu)) {
            createBackgroundImage();
            scene = "pause";
        }
        if (console.activated && console.typingTime <= 0) {
            console.pressEnter();
        }
        if (pressed(commandKeys.inventory) && medButtonTime <= 0 && (scene === "game" || scene === "inventory") && grenadeButtonTime <= 0 && !(commandKeys.inventory[1] === "Right Mouse Button" || commandKeys.inventory[1] === "Middle Mouse Button" || commandKeys.inventory[1] === "Left Mouse Button")) {
            pressedInventory = true;
        }
        if (scene === "game" && pressed(commandKeys.cancel) && (allies[0].healing || allies[0].reloading)) {
            allies[0].healing = false;
            allies[0].reloading = false;
        }
        if (pressed(commandKeys.datapad) && gameVars.haveDatapad && !pressedInventory && medButtonTime <= 0 && (scene === "game" || scene === "datapad") && !allies[0].healing && grenadeButtonTime <= 0 && !(commandKeys.datapad[1] === "Right Mouse Button" || commandKeys.datapad[1] === "Middle Mouse Button" || commandKeys.datapad[1] === "Left Mouse Button")) {
            pressedDatapad = true;
        }
        if (scene === "game" && pressed(commandKeys.pickUp) && !(commandKeys.pickUp[1] === "Right Mouse Button" || commandKeys.pickUp[1] === "Middle Mouse Button" || commandKeys.pickUp[1] === "Left Mouse Button")) {
            pressedGrab = true;
        }
        if (scene === "inventory" && !(commandKeys.drop[1] === "Right Mouse Button" || commandKeys.drop[1] === "Middle Mouse Button" || commandKeys.drop[1] === "Left Mouse Button") && pressed(commandKeys.drop)) {
            for (var i = 0; i < UIpiecesInventory.length; i++) {
                UIpiecesInventory[i].dropLoot();
            }
        }
        keys[keyCode] = false;
        if (scene === "game" && pressedGrab && !pressed(commandKeys.pickUp) && !(commandKeys.pickUp[1] === "Right Mouse Button" || commandKeys.pickUp[1] === "Middle Mouse Button" || commandKeys.pickUp[1] === "Left Mouse Button")) {
            //if (canAct()) {
                allies[0].grabLoot();
            //}
        }
        if (pressedInventory && (scene === "game" || scene === "inventory") && !pressed(commandKeys.inventory) && medButtonTime <= 0 && grenadeButtonTime <= 0 && !(commandKeys.inventory[1] === "Right Mouse Button" || commandKeys.inventory[1] === "Middle Mouse Button" || commandKeys.inventory[1] === "Left Mouse Button")) {
            if (scene === "game") {
                createBackgroundImage();
                scene = "inventory";
            } else if (scene === "inventory") {
                scene = "game";
                onLoot = "NONE";
                lootOn = "NONE";
                draggingLoot = "NONE";
            }
        }
        if (pressedDatapad && (scene === "game" || scene === "datapad" || scene === "inventory") && !pressed(commandKeys.datapad) && medButtonTime <= 0 && grenadeButtonTime <= 0 && !(commandKeys.datapad[1] === "Right Mouse Button" || commandKeys.datapad[1] === "Middle Mouse Button" || commandKeys.datapad[1] === "Left Mouse Button")) {
            if (scene === "game") {
                createBackgroundImage();
                lastScene = "game";
                scene = "datapad";
                datapadOn = 0;
            } else if (scene === "datapad") {
                scene = lastScene;
            } else if (scene === "inventory") {
                lastScene = "inventory";
                scene = "datapad";
                datapadOn = 0;
            }
        }
        if (scene === "New Game" || scene === "Free Play") {
            if (settingsSelected === 5 && widths[5] < 120) {
                for (var i = 0; i < allLetters2.length; i++) {
                    if (key.toString().toUpperCase() === allLetters2[i].toUpperCase()) {
                        playerInfo[0] += key.toString();
                    }
                }
            } else if (settingsSelected === 6 && widths[6] < 120) {
                for (var i = 0; i < allLetters2.length; i++) {
                    if (key.toString().toUpperCase() === allLetters2[i].toUpperCase()) {
                        playerInfo[1] += key.toString();
                    }
                }
            }
        }
    } else {
        if (settingsSelected !== "NONE") {
            var a = convertToKey(key, keyCode);
            for (var i = 0; i < Object.keys(commandKeys).length; i++) {
                if (a[1] === commandKeys[Object.keys(commandKeys)[i]][1]) {
                    commandKeys[Object.keys(commandKeys)[i]][0] = " - ";
                    commandKeys[Object.keys(commandKeys)[i]][1] = " - ";
                }
            }
            commandKeys[Object.keys(commandKeys)[settingsSelected]][0] = a[0];
            commandKeys[Object.keys(commandKeys)[settingsSelected]][1] = a[1];
            settingsSelected = "NONE";
        }
    }
    keys[keyCode] = false;
};
mouseReleased = function() {
    if (levelEnds.length === 0 && transition[1] <= 50) {
        if (scene === "inventory" && mouseButton === LEFT) {
            for (var i = 0; i < UIpiecesInventory.length; i++) {
                UIpiecesInventory[i].transferLoot();
            }
            draggingLoot = "NONE";
        }
        var pressedInventory = false;
        if (scene === "game" || scene === "inventory" || scene === "datapad") {
            if (scene === "inventory" && (commandKeys.drop[1] === "Right Mouse Button" || commandKeys.drop[1] === "Middle Mouse Button" || commandKeys.drop[1] === "Left Mouse Button") && pressed(commandKeys.drop)) {
                for (var i = 0; i < UIpiecesInventory.length; i++) {
                    UIpiecesInventory[i].dropLoot();
                }
            }
            if (scene === "game" && pressed(commandKeys.pickUp) && (commandKeys.pickUp[1] === "Right Mouse Button" || commandKeys.pickUp[1] === "Middle Mouse Button" || commandKeys.pickUp[1] === "Left Mouse Button")) {
                //if (canAct()) {
                    allies[0].grabLoot();
                //}
            }
            if (pressed(commandKeys.inventory) && (scene === "game" || scene === "inventory") && !allies[0].healing && medButtonTime <= 0 && grenadeButtonTime <= 0 && (commandKeys.inventory[1] === "Right Mouse Button" || commandKeys.inventory[1] === "Middle Mouse Button" || commandKeys.inventory[1] === "Left Mouse Button")) {
                if (scene === "game") {
                    createBackgroundImage();
                    scene = "inventory";
                } else if (scene === "inventory") {
                    scene = "game";
                    onLoot = "NONE";
                    lootOn = "NONE";
                }
            }
            if (gameVars.haveDatapad && (scene === "game" || scene === "datapad" || scene === "inventory") && pressed(commandKeys.datapad) && medButtonTime <= 0 && grenadeButtonTime <= 0 && !(commandKeys.datapad[1] === "Right Mouse Button" || commandKeys.datapad[1] === "Middle Mouse Button" || commandKeys.datapad[1] === "Left Mouse Button")) {
                if (scene === "game") {
                    createBackgroundImage();
                    lastScene = "game";
                    scene = "datapad";
                    datapadOn = 0;
                } else if (scene === "datapad") {
                    scene = lastScene;
                } else if (scene === "inventory") {
                    lastScene = "inventory";
                    scene = "datapad";
                    datapadOn = 0;
                }
            }
            if (scene === "game" && pressed(commandKeys.cancel) && (allies[0].healing || allies[0].reloading)) {
                allies[0].healing = false;
                allies[0].reloading = false;
            }
        }
        if (scene === "datapad") {
            for (var i = 0; i < UIpiecesDatapad.length; i++) {
                UIpiecesDatapad[i].clickOn();
            }
        } else if (scene === "inventory") {
            for (var i = 0; i < UIpiecesInventory.length; i++) {
                UIpiecesInventory[i].clickOn();
            }
        } else if (scene === "tips") {
            for (var i = 0; i < tips.length; i++) {
                tips[i].exit();
            }
        } else if (scene === "intro" && levelEnds.length === 0) {
            levelEnds.push(construct(levelEnd, [function() {
                scene = "selectGame";
            }, true]));
        } else if (scene === "backgroundImage2") {
            if (inBox(MOUSEX, MOUSEY, 200, 265, 100, 15)) {
                levelEnds.push(construct(levelEnd, [function() {
                    if (freePlay) {
                        scene = "selectGame";
                        weathers2.clear();
                        weathers2.push(construct(weather, ["snow 2", 400, 400, 20, [800, 1600], 50]));
                        codes.splice(codes.length - 1, 1);
                    } else {
                        clearArrays();
                        scene = "loadSave";
                    }
                }, true]));
            } else {
                levelEnds.push(construct(levelEnd, [function() {
                    if (freePlay) {
                        allies.splice(0, 1);
                        freePlayPlayer();
                        scene = "game";
                    } else {
                        scene = "selectGame";
                        weathers2.clear();
                        weathers2.push(construct(weather, ["snow 2", 400, 400, 20, [800, 1600], 50]));
                    }
                }, true]));
            }
        } else if (scene === "selectGame") {
            if (inBox(MOUSEX, MOUSEY, 66, 375, 100, 40)) {
                levelEnds.push(construct(levelEnd, [function() {
                    scene = "New Game";
                    datapadOn = 0;
                    weathers2.clear();
                    weathers2.push(construct(weather, ["rain 2", 400, 400, 0, [800, 1600], 10]));
                    settingsSelected = "NONE";
                    settingsScroll = 0;
                }, true]));
            } else if (inBox(MOUSEX, MOUSEY, 200, 375, 100, 40)) {
                levelEnds.push(construct(levelEnd, [function() {
                    scene = "loadGame";
                    datapadOn = 0;
                    weathers2.clear();
                    weathers2.push(construct(weather, ["rain 2", 400, 400, 0, [800, 1600], 10]));
                    settingsSelected = "NONE";
                    settingsScroll = 0;
                }, true]));
            } else if (inBox(MOUSEX, MOUSEY, 333, 375, 100, 40)) {
                levelEnds.push(construct(levelEnd, [function() {
                    scene = "Free Play";
                    datapadOn = 0;
                    weathers2.clear();
                    weathers2.push(construct(weather, ["rain 2", 400, 400, 0, [800, 1600], 10]));
                    settingsSelected = "NONE";
                    settingsScroll = 0;
                }, true]));
            } else if (inBox(MOUSEX, MOUSEY, 360, 25, 66, 40)) {
                levelEnds.push(construct(levelEnd, [function() {
                    scene = "help";
                    lastScene = "selectGame";
                    datapadOn = 0;
                    weathers2.clear();
                    weathers2.push(construct(weather, ["rain 2", 400, 400, 0, [800, 1600], 10]));
                    settingsSelected = "NONE";
                    settingsScroll = 0;
                }, true]));
            } else if (inBox(MOUSEX, MOUSEY, 40, 25, 66, 40)) {
                levelEnds.push(construct(levelEnd, [function() {
                    scene = "settings";
                    lastScene = "selectGame";
                    datapadOn = 0;
                    weathers2.clear();
                    weathers2.push(construct(weather, ["rain 2", 400, 400, 0, [800, 1600], 10]));
                    settingsSelected = "NONE";
                    settingsScroll = -30;
                }, true]));
            }
        } else if (scene === "settings") {
            if (settingsSelected === "NONE" && inBox(MOUSEX, MOUSEY, 380, 200, 40, 50)) {
                datapadOn = (datapadOn + 1) % 2;
                settingsScroll = -30;
            } else if (settingsSelected === "NONE" && inBox(MOUSEX, MOUSEY, 20, 200, 40, 50)) {
                datapadOn = absValue(datapadOn - 1, 2);
                settingsScroll = -30;
            } 
            if (datapadOn === 0) {
                if (settingsSelected === "NONE") {
                    for (var i = 0; i < Object.keys(commandKeys).length; i++) {
                        var a = textWidth(commandKeys[Object.keys(commandKeys)[i]][1]);
                        if (MOUSEY >= 70 && MOUSEY <= 330 && inBox(MOUSEX, MOUSEY, 200, 82.5 + i * 30 - settingsScroll, 310, 25)) {
                            settingsSelected = i;
                            commandKeys[Object.keys(commandKeys)[i]][0] = " - ";
                            commandKeys[Object.keys(commandKeys)[i]][1] = " - ";
                        }
                    }
                } else {
                    var a = convertToKey(mouseButton);
                    for (var i = 0; i < Object.keys(commandKeys).length; i++) {
                        if (a[1] === commandKeys[Object.keys(commandKeys)[i]][1]) {
                            commandKeys[Object.keys(commandKeys)[i]][0] = " - ";
                            commandKeys[Object.keys(commandKeys)[i]][1] = " - ";
                        }
                    }
                    commandKeys[Object.keys(commandKeys)[settingsSelected]][0] = a[0];
                    commandKeys[Object.keys(commandKeys)[settingsSelected]][1] = a[1];
                    settingsSelected = "NONE";
                }
            } else {
                if (inBox(MOUSEX, MOUSEY, 347.5, 100, 15, 20)) {
                    fpsOptions[fpsOptions.length - 1] = absValue(fpsOptions[fpsOptions.length - 1] + 1, fpsOptions.length - 1);
                    wantedFPS = fpsOptions[fpsOptions[fpsOptions.length - 1]];
                    frameRate(wantedFPS);
                }
                if (inBox(MOUSEX, MOUSEY, 302.5, 100, 15, 20)) {
                    fpsOptions[fpsOptions.length - 1] = absValue(fpsOptions[fpsOptions.length - 1] - 1, fpsOptions.length - 1);
                    wantedFPS = fpsOptions[fpsOptions[fpsOptions.length - 1]];
                    frameRate(wantedFPS);
                }
                if (inBox(MOUSEX, MOUSEY, 347.5, 160, 15, 20)) {
                    transitionOptions[transitionOptions.length - 1] = absValue(transitionOptions[transitionOptions.length - 1] + 1, transitionOptions.length - 1);
                    transition[4] = transitionOptions[transitionOptions[transitionOptions.length - 1]];
                }
                if (inBox(MOUSEX, MOUSEY, 302.5, 160, 15, 20)) {
                    transitionOptions[transitionOptions.length - 1] = absValue(transitionOptions[transitionOptions.length - 1] - 1, transitionOptions.length - 1);
                    transition[4] = transitionOptions[transitionOptions[transitionOptions.length - 1]];
                }
                if (inBox(MOUSEX, MOUSEY, 347.5, 220, 15, 20)) {
                    graphicOptions[graphicOptions.length - 1] = absValue(graphicOptions[graphicOptions.length - 1] + 1, graphicOptions.length - 1);
                    graphicQuality = graphicOptions[graphicOptions.length - 1];
                }
                if (inBox(MOUSEX, MOUSEY, 302.5, 220, 15, 20)) {
                    graphicOptions[graphicOptions.length - 1] = absValue(graphicOptions[graphicOptions.length - 1] - 1, graphicOptions.length - 1);
                    graphicQuality = graphicOptions[graphicOptions.length - 1];
                }
            }
            if (inBox(MOUSEX, MOUSEY, 40, 25, 66, 40)) {
                var canGo = true;
                for (var i = 0; i < Object.keys(commandKeys).length; i++) {
                    if (commandKeys[Object.keys(commandKeys)[i]][1] === " - ") {
                        canGo = false;
                    }
                }
                if (canGo) {
                    levelEnds.push(construct(levelEnd, [function() {
                        scene = lastScene;
                        lastScene = "settings";
                        if (scene === "selectGame") {
                            weathers2.clear();
                            weathers2.push(construct(weather, ["snow 2", 400, 400, 20, [800, 1600], 50]));
                        }
                    }, true]));
                } else {
                    tips.push(construct(tip, ["Please make certain all keys are bound.", "WARNING"]));
                }
            }
        } else if (scene === "help") {
            if (inBox(MOUSEX, MOUSEY, 40, 25, 66, 40)) {
                levelEnds.push(construct(levelEnd, [function() {
                    scene = lastScene;
                    lastScene = "settings";
                    if (scene === "selectGame") {
                        weathers2.clear();
                        weathers2.push(construct(weather, ["snow 2", 400, 400, 20, [800, 1600], 50]));
                    }
                }, true]));
            }
        } else if (scene === "loadGame") {
            var clickedOne = false;
            for (var i = settingsScroll / 30; i < 9 + settingsScroll / 30; i++) {
                if (i < codes.length && inBox(MOUSEX, MOUSEY, 200, 80 + i * 30 - settingsScroll, 370, 25)) {
                    settingsSelected = i;
                    clickedOne = true;
                }
            }
            if (MOUSEY > 330 && MOUSEY <= 350 && settingsScroll < 30 * (codes.length - 9)) {
                settingsScroll += 30;
                clickedOne = true;
            }
            if (MOUSEY >= 50 && MOUSEY < 70 && settingsScroll > 0) {
                settingsScroll -= 30;
                clickedOne = true;
            }
            if (inBox(MOUSEX, MOUSEY, 300, 375, 66, 40) && settingsSelected !== "NONE") {
                codes.splice(settingsSelected, 1);
                clickedOne = false;
                settingsScroll = constrain(settingsScroll, 0, (codes.length >= 9) ? 30 * (codes.length - 9) : 0);
            }
            if (inBox(MOUSEX, MOUSEY, 100, 375, 66, 40) && settingsSelected !== "NONE") {
                selectedSaveCode = settingsSelected;
                freePlay = false;
                levelEnds.push(construct(levelEnd, [function() {
                    scene = "loadSave";
                }, true]));
            }
            if (!clickedOne || settingsSelected < settingsScroll / 30 || settingsSelected >= 9 + settingsScroll / 30) {
                settingsSelected = "NONE";
            }
            if (inBox(MOUSEX, MOUSEY, 40, 25, 66, 40)) {
                levelEnds.push(construct(levelEnd, [function() {
                    scene = "selectGame";
                    weathers2.clear();
                    weathers2.push(construct(weather, ["snow 2", 400, 400, 20, [800, 1600], 50]));
                }, true]));
            } else if (inBox(MOUSEX, MOUSEY, 360, 25, 66, 40)) {
                println(printSave());
            }
        } else if (scene === "New Game" || scene === "Free Play") {
            var clickedOn = false;
            if (inBox(MOUSEX, MOUSEY, 40, 25, 66, 40)) {
                levelEnds.push(construct(levelEnd, [function() {
                    scene = "selectGame";
                    weathers2.clear();
                    weathers2.push(construct(weather, ["snow 2", 400, 400, 20, [800, 1600], 50]));
                    settingsSelected = "NONE";
                }, true]));
            } else if (inBox(MOUSEX, MOUSEY, 200, 375, 66, 40)) {
                if (playerInfo[0] !== "" && playerInfo[1] !== "") {
                    levelEnds.push(construct(levelEnd, [function() {
                        playerInfo[2] = gOptions[gOptions[gOptions.length - 1]];
                        playerInfo[3] = skinOptions[skinOptions[skinOptions.length - 1]][1];
                        playerInfo[4] = hairOptions[hairOptions[hairOptions.length - 1]][1];
                        gameDifficulty = [difficulty[difficulty[difficulty.length - 1]], pHealth[pHealth[pHealth.length - 1]]];
                        clearArrays();
                        if (scene === "New Game") {
                            gameMap = ["Prisons", 0];
                            makeSave();
                            selectedSaveCode = codes.length - 1;
                            scene = "loadSave";
                            freePlay = false;
                        } else {
                            scene = "editGame";
                        }
                    }, true]));
                } else {
                    tips.push(construct(tip, ["Please make certain all fields have an entry", "WARNING"]));
                }
            } else if (inBox(MOUSEX, MOUSEY, 377.5, 110, 15, 20)) {
                difficulty[difficulty.length - 1] = absValue(difficulty[difficulty.length - 1] + 1, difficulty.length - 1);
            } else if (inBox(MOUSEX, MOUSEY, 377.5, 140, 15, 20)) {
                pHealth[pHealth.length - 1] = absValue(pHealth[pHealth.length - 1] + 1, pHealth.length - 1);
            } else if (inBox(MOUSEX, MOUSEY, 377.5, 200, 15, 20)) {
                gOptions[gOptions.length - 1] = absValue(gOptions[gOptions.length - 1] + 1, gOptions.length - 1);
            } else if (inBox(MOUSEX, MOUSEY, 377.5, 290, 15, 20)) {
                skinOptions[skinOptions.length - 1] = absValue(skinOptions[skinOptions.length - 1] + 1, skinOptions.length - 1);
            } else if (inBox(MOUSEX, MOUSEY, 377.5, 320, 15, 20)) {
                hairOptions[hairOptions.length - 1] = absValue(hairOptions[hairOptions.length - 1] + 1, hairOptions.length - 1);
            } else if (inBox(MOUSEX, MOUSEY, 352.5 - widths[0], 110, 15, 20)) {
                difficulty[difficulty.length - 1] = absValue(difficulty[difficulty.length - 1] - 1, difficulty.length - 1);
            } else if (inBox(MOUSEX, MOUSEY, 352.5 - widths[1], 140, 15, 20)) {
                pHealth[pHealth.length - 1] = absValue(pHealth[pHealth.length - 1] - 1, pHealth.length - 1);
            } else if (inBox(MOUSEX, MOUSEY, 352.5 - widths[2], 200, 15, 20)) {
                gOptions[gOptions.length - 1] = absValue(gOptions[gOptions.length - 1] - 1, gOptions.length - 1);
            } else if (inBox(MOUSEX, MOUSEY, 352.5 - widths[3], 290, 15, 20)) {
                skinOptions[skinOptions.length - 1] = absValue(skinOptions[skinOptions.length - 1] - 1, skinOptions.length - 1);
            } else if (inBox(MOUSEX, MOUSEY, 352.5 - widths[4], 320, 15, 20)) {
                hairOptions[hairOptions.length - 1] = absValue(hairOptions[hairOptions.length - 1] - 1, hairOptions.length - 1);
            } else if (inBox(MOUSEX, MOUSEY, 365 - widths[5] / 2, 230, widths[5] + 10, 20)) {
                settingsSelected = 5;
                clickedOn = true;
            } else if (inBox(MOUSEX, MOUSEY, 365 - widths[6] / 2, 260, widths[6] + 10, 20)) {
                settingsSelected = 6;
                clickedOn = true;
            }
            if (!clickedOn) {
                settingsSelected = "NONE";
            }
        } else if (scene === "editGame") {        
            if (inBox(MOUSEX, MOUSEY, 40, 25, 66, 40)) {
                levelEnds.push(construct(levelEnd, [function() {
                    scene = "Free Play";
                }, true]));
            } else if (inBox(MOUSEX, MOUSEY, 200, 375, 66, 40)) {
                levelEnds.push(construct(levelEnd, [function() {
                    gameMap = [gameMaps[gameMaps[gameMaps.length - 1]], 0];
                    freePlay = gameModes[gameModes[gameModes.length - 1]];
                    makeSave();
                    selectedSaveCode = codes.length - 1;
                    scene = "loadSave";
                }, true]));
            } else if (inBox(MOUSEX, MOUSEY, 377.5, 110, 15, 20)) {
                gameModes[gameModes.length - 1] = absValue(gameModes[gameModes.length - 1] + 1, gameModes.length - 1);
            } else if (inBox(MOUSEX, MOUSEY, 377.5, 170, 15, 20)) {
                gameMaps[gameMaps.length - 1] = absValue(gameMaps[gameMaps.length - 1] + 1, gameMaps.length - 1);
            } else if (inBox(MOUSEX, MOUSEY, 377.5, 260, 15, 20)) {
                maxEnemies[maxEnemies.length - 1] = absValue(maxEnemies[maxEnemies.length - 1] + 1, maxEnemies.length - 1);
            } else if (inBox(MOUSEX, MOUSEY, 377.5, 290, 15, 20)) {
                maxTeammates[maxTeammates.length - 1] = absValue(maxTeammates[maxTeammates.length - 1] + 1, maxTeammates.length - 1);
            } else if (inBox(MOUSEX, MOUSEY, 377.5, 320, 15, 20)) {
                crateDelay[crateDelay.length - 1] = absValue(crateDelay[crateDelay.length - 1] + 1, crateDelay.length - 1);
            } else if (inBox(MOUSEX, MOUSEY, 352.5 - widths[0], 110, 15, 20)) {
                gameModes[gameModes.length - 1] = absValue(gameModes[gameModes.length - 1] - 1, gameModes.length - 1);
            } else if (inBox(MOUSEX, MOUSEY, 352.5 - widths[1], 170, 15, 20)) {
                gameMaps[gameMaps.length - 1] = absValue(gameMaps[gameMaps.length - 1] - 1, gameMaps.length - 1);
            } else if (inBox(MOUSEX, MOUSEY, 352.5 - widths[2], 260, 15, 20)) {
                maxEnemies[maxEnemies.length - 1] = absValue(maxEnemies[maxEnemies.length - 1] - 1, maxEnemies.length - 1);
            } else if (inBox(MOUSEX, MOUSEY, 352.5 - widths[3], 290, 15, 20)) {
                maxTeammates[maxTeammates.length - 1] = absValue(maxTeammates[maxTeammates.length - 1] - 1, maxTeammates.length - 1);
            } else if (inBox(MOUSEX, MOUSEY, 352.5 - widths[4], 320, 15, 20)) {
                crateDelay[crateDelay.length - 1] = absValue(crateDelay[crateDelay.length - 1] - 1, crateDelay.length - 1);
            }
        } else if (scene === "cinematic") {
            endCinematic = true;
        } else if (scene === "pause") {
            for (var i = 0; i < UIpiecesPause.length; i++) {
                UIpiecesPause[i].clickOn();
            }
        } else if (scene === "pause2") {
            for (var i = 0; i < UIpiecesPause2.length; i++) {
                UIpiecesPause2[i].clickOn();
            }
        }
    } else if (levelEnds.length === 0 && transition[1] > 50) {
        transition[1] = 0;
    }
};
//} END "KEY PRESSING"

// "DRAW CODE" {
frameRate(wantedFPS);
draw = function() {
    if (width !== height) {
        noLoop();
        println("GAME WILL ONLY FUNCTION IF WIDTH AND HEIGHT ARE EQUAL!!!");
    }
    pushMatrix();
    scale(width / 400, height / 400);
    MOUSEX = mouseX * 400 / width;
    MOUSEY = mouseY * 400 / height;
    try {
        cursor(ARROW);
        trueFPS = this.__frameRate;
        compensateFPS = (60 / trueFPS) / timeDilation;
        if (frameCount > 15 && trueFPS > 15) {
            if (!onLoot || onLoot === "NONE") {
                onLoot = "NONE";
                lootOn = "NONE";
                boxFinalWidth = 0;
                if (scene === "inventory") {
                    lootBoxSize = 0;
                }
                lootName = "";
                lootAmmo = "";
                lootText = "";
                lootTextAlpha = lootBoxFinalAlpha;
            }
            if (scene === "load") {
                popMatrix();
                pushMatrix();
                background(0, 0);
                translate(200, 200);
                scale(5);
                noStroke();
                if (loadOn[0] === 0) {
                    pushMatrix();
                    guns[loadOn[1]].graphic = guns[loadOn[1]].graphic();
                    popMatrix();
                    noStroke();
                    background(0, 0);
                    guns[loadOn[1]].game = guns[loadOn[1]].game();
                    if (loadOn[1] >= guns.length - 1) {
                        loadOn = [1, -1];
                    }
                } else if (loadOn[0] === 1) {
                    pushMatrix();
                    melee[loadOn[1]].graphic = melee[loadOn[1]].graphic();
                    popMatrix();
                    noStroke();
                    background(0, 0);
                    melee[loadOn[1]].game = melee[loadOn[1]].game();
                    if (loadOn[1] >= melee.length - 1) {
                        loadOn = [2, [0, 0]];
                    }
                } else if (loadOn[0] === 2) {
                    var a = Object.keys(attachments)[loadOn[1][0]];
                    var b = Object.keys(attachments[a])[loadOn[1][1]];
                    attachments[a][b].graphic = attachments[a][b].graphic();
                    loadOn[1][1]++;
                    if (loadOn[1][1] >= Object.keys(attachments[a]).length) {
                        loadOn[1][0]++;
                        loadOn[1][1] = 0;
                    }
                    if (loadOn[1][0] >= Object.keys(attachments).length) {
                        loadOn = [3, -1];
                    }
                } else if (loadOn[0] === 3) {
                    pushMatrix();
                    grenades[loadOn[1]].graphic = grenades[loadOn[1]].graphic();
                    popMatrix();
                    noStroke();
                    background(0, 0);
                    grenades[loadOn[1]].game = grenades[loadOn[1]].game();
                    if (loadOn[1] >= grenades.length - 1) {
                        loadOn = [4, -1];
                    }
                } else if (loadOn[0] === 4) {
                    pushMatrix();
                    armor[loadOn[1]].graphic = armor[loadOn[1]].graphic();
                    popMatrix();
                    noStroke();
                    background(0, 0);
                    armor[loadOn[1]].game = armor[loadOn[1]].game();
                    if (loadOn[1] >= armor.length - 1) {
                        loadOn = [5, -1];
                    }
                } else if (loadOn[0] === 5) {
                    pushMatrix();
                    backpack[loadOn[1]].graphic = backpack[loadOn[1]].graphic();
                    popMatrix();
                    noStroke();
                    background(0, 0);
                    backpack[loadOn[1]].game = backpack[loadOn[1]].game();
                    if (loadOn[1] >= backpack.length - 1) {
                        loadOn = [6, -1];
                    }
                } else if (loadOn[0] === 6) {
                    ammo[Object.keys(ammo)[loadOn[1]]].graphic = ammo[Object.keys(ammo)[loadOn[1]]].graphic();
                    if (loadOn[1] >= Object.keys(ammo).length - 1) {
                        loadOn = [7, -1];
                    }
                } else if (loadOn[0] === 7) {
                    pushMatrix();
                    medical[loadOn[1]].graphic = medical[loadOn[1]].graphic();
                    popMatrix();
                    noStroke();
                    background(0, 0);
                    medical[loadOn[1]].game = medical[loadOn[1]].game();
                    if (loadOn[1] >= medical.length - 1) {
                        loadOn = [8, -1];
                    }
                } else if (loadOn[0] === 8) {
                    pushMatrix();
                    crates[loadOn[1]].locked = crates[loadOn[1]].locked();
                    popMatrix();
                    noStroke();
                    background(0, 0);
                    crates[loadOn[1]].unlocked = crates[loadOn[1]].unlocked();
                    if (loadOn[1] >= crates.length - 1) {
                        loadOn = [9, -1];
                    }
                } else if (loadOn[0] === 9) {
                    doorTypes[Object.keys(doorTypes)[loadOn[1]]].locked = doorTypes[Object.keys(doorTypes)[loadOn[1]]].locked();
                    doorTypes[Object.keys(doorTypes)[loadOn[1]]].unlocked = doorTypes[Object.keys(doorTypes)[loadOn[1]]].unlocked();
                    if (loadOn[1] >= Object.keys(doorTypes).length - 1) {
                        loadOn = [10, -1];
                    }
                } else if (loadOn[0] === 10) {
                    scale(0.2);
                    npcTypes[Object.keys(npcTypes)[loadOn[1]]][7] = npcTypes[Object.keys(npcTypes)[loadOn[1]]][7]();
                    if (loadOn[1] >= Object.keys(npcTypes).length - 1) {
                        loadOn = [11, -1];
                    }
                } else if (loadOn[0] === 11) {
                    scale(0.2);
                    images[Object.keys(images)[loadOn[1]]] = images[Object.keys(images)[loadOn[1]]]();
                    if (loadOn[1] >= Object.keys(images).length - 1) {
                        loadOn = [12, [0, 0]];
                    }
                    
                } else if (loadOn[0] === 12) {
                    popMatrix();
                    var a = Object.keys(maps)[loadOn[1][0]];
                    createMapImage(a, loadOn[1][1]);
                    if (loadOn[1][1] >= maps[a].draw.length - 1) {
                        loadOn[1][0]++;
                        loadOn[1][1] = 0;
                    } else {
                        loadOn[1][1]++;
                    }
                    if (loadOn[1][0] >= Object.keys(maps).length) {
                        loadOn = [13, -1];
                    }
                    pushMatrix();
                } else {
                    if (levelEnds.length === 0) {
                        levelEnds.push(construct(levelEnd, [function() {
                            scene = "intro";
                            weathers2.push(construct(weather, ["snow 2", 400, 400, 20, [800, 1600], 50]));
                        }, true]));
                    }
                }
                popMatrix();
                if (loadOn[1].length === undefined) {
                    loadOn[1]++;
                }
                pushMatrix();
                scale(width / 400, height / 400);
            } else if (scene === "intro") {
                background(0);
                drawImages(weathers2);
                fill(0, 50);
                rect(200, 200, 400, 400);
                image(images["escape logo"], 200, 200);
                fill(255, sin(frameCount * 3) * 255 + 50);
                textFont(fonts.AgencyFB20Italics);
                text("PRESS ANYWHERE TO START", 200, 320);
            } else if (scene === "selectGame") {
                background(255);
                image(images["select background"], 200, 200);
                drawImages(weathers2);
                fill(0);
                rect(200, 375, 400, 50);
                rect(200, 25, 400, 50);
                fill(255);
                textFont(fonts.AgencyFB20);
                text("New Game", 66, 375);
                text("Load Game", 200, 375);
                text("Free Play", 333, 375);
                text("Help", 360, 25);
                text("Settings", 40, 25);
                fill(255, 50);
                if (inBox(MOUSEX, MOUSEY, 66, 375, 100, 40)) {
                    cursor(HAND);
                    rect(66, 375, 100, 40);
                } else if (inBox(MOUSEX, MOUSEY, 200, 375, 100, 40)) {
                    cursor(HAND);
                    rect(200, 375, 100, 40);
                } else if (inBox(MOUSEX, MOUSEY, 333, 375, 100, 40)) {
                    cursor(HAND);
                    rect(333, 375, 100, 40);
                } else if (inBox(MOUSEX, MOUSEY, 360, 25, 66, 40)) {
                    cursor(HAND);
                    rect(360, 25, 66, 40);
                } else if (inBox(MOUSEX, MOUSEY, 40, 25, 66, 40)) {
                    cursor(HAND);
                    rect(40, 25, 66, 40);
                }
                image(images["escape logo"], 200, 25, 100, 100);
            } else if (scene === "loadSave") {
                background(255);
                var save = codes[selectedSaveCode];
                saveCode = save;
                objectives.clear();
                for (var i = 0; i < save.objectives.length; i++) {
                    objectives.push(construct(objective, copyArray(save.objectives[i])));
                }
                gameMap = [save.map.which, save.map.phase];
                playerInfo = [save.playerInfo.firstName, save.playerInfo.lastName, save.playerInfo.gender, save.playerInfo.skinColor, save.playerInfo.hairColor];
                gameDifficulty = copyArray(save.difficulty);
                playerData = copyArray(save.player);
                if (allies.length > 1 && allies[1].printOutType === "Partner") {
                    partnerData = copyArray(save.partner);
                }
                scene = "loadmap";
                if (playerInfo[2] === "Male") {
                    pDetails = ["he", "him", "his", "Sir"];
                } else {
                    pDetails = ["she", "her", "hers", "Ma'am"];
                }
                var a = "Player";
                if (save.difficulty[1] === "Very Low") {
                    npcTypes[a][5] = 100;
                } else if (save.difficulty[1] === "Low") {
                    npcTypes[a][5] = 175;
                } else if (save.difficulty[1] === "Normal") {
                    npcTypes[a][5] = 250;
                } else if (save.difficulty[1] === "High") {
                    npcTypes[a][5] = 325;
                } else if (save.difficulty[1] === "Very High") {
                    npcTypes[a][5] = 400;
                }
                if (save.difficulty[0] === "Very Low") {
                    gameVars.dMult = 3;
                } else if (save.difficulty[0] === "Low") {
                    gameVars.dMult = 2.5;
                } else if (save.difficulty[0] === "Normal") {
                    gameVars.dMult = 2;
                } else if (save.difficulty[0] === "High") {
                    gameVars.dMult = 1.5;
                } else if (save.difficulty[0] === "Very High") {
                    gameVars.dMult = 1;
                }
                popMatrix();
                npcTypes[a][7] = playerGraphic(playerInfo[2], playerInfo[3], playerInfo[4]);
                pushMatrix();
                scale(width / 400, height / 400);
                loadOn = 0;
            } else if (scene === "loadmap") {
                gameVars = copyArray4(gameVarsDefault);
                environment = copyArray4(environmentDefault);
                clearArrays();
                var save = codes[selectedSaveCode], a = maps[save.map.which];
                maps[gameMap[0]].run(0);
                if (gameMap[1] !== 0) {
                    maps[gameMap[0]].run(gameMap[1]);
                } else {
                    gameMap[1] = 1;
                }
                if (!freePlay) {
                    allies[0].other = copyArray(playerData);
                } else {
                    if (freePlay === "Warzone") {
                        environment.night = true;
                    }
                }
                if (allies.length > 1 && allies[1].printOutType === "Partner") {
                    allies[1].other = copyArray(partnerData);
                }
                background(255);
                mapImages.clear();
                scene = nextScene;
                timeOnLevel = 0;
                nextScene = "game";
                console.text.clear();
                console.text = [("DEVELOPER CONSOLE -- ESCAPE 2 -- VERSION " + version), ("| ")];
            } else if (scene === "game") {
                timeOnLevel += compensateFPS;
                respawnRate[0] += compensateFPS;
                respawnRate[1] += compensateFPS;
                maps[gameMap[0]].run(gameMap[1]);
                cursor("none");
                background(50);
                textAlign(CENTER, CENTER);
                if (!console.activated) {
                    Camera();
                }
                screenShake += (-screenShake / 25) * compensateFPS;
                pushMatrix();
                translate(random(-screenShake, screenShake), random(-screenShake, screenShake));
                translate(allies[0].drawX, allies[0].drawY);
                scale(1 / allies[0].zoom);
                translate(-allies[0].x, -allies[0].y);
                byConsole[0] = false;
                for (var i = allLoot.length - 1; i >= 0; i--) {
                    allLoot[i].move();
                    if ((((allLoot[i].number <= 0 && (allLoot[i].type === "Ammo" || allLoot[i].type === "Armor")) || (allLoot[i].number < 0 && !(allLoot[i].type === "Ammo" || allLoot[i].type === "Armor"))) && allLoot[i].other[0] !== "Scope") || (freePlay && allLoot[i].timeAlive >= 1800)) {
                        allLoot.splice(i, 1);
                    }
                }
                for (var i = turrets.length - 1; i >= 0; i--) {
                    turrets[i].occupy();
                }
                for (var i = bullets.length - 1; i >= 0; i--) {
                    bullets[i].hitCharacter();
                    bullets[i].collide();
                    bullets[i].move();
                    if (bullets[i].time >= bullets[i].range) {
                        bullets[i].dead = true;
                    }
                    if (((bullets[i].trail < bullets[i].speed && bullets[i].dead && bullets[i].smokeTrail.length === 0) || !bullets[i].trailOn) && bullets[i].deathTime > 1) {
                        bullets.splice(i, 1);
                        continue;
                    }
                    var bello = bullets[i].damageWho[1];
                    if (bullets[i].dead && bullets[i].deathTime === 1) {
                        bullets[i].trail += bullets[i].speed;
                        if (bullets[i].damageWho[0] === "ally" && (bello !== 0 || (bello === 0 && !godMode))) {
                            allies[bello].health -= dealDamage(bullets[i].damage, allies[bello]);
                            allies[bello].stunTime += bullets[i].stun;
                            if (allies[bello].target === "none") {
                                allies[bello].targetLoc = copyArray(bullets[i].og);
                            }
                        } else if (bullets[i].damageWho[0] === "enemy") {
                            enemies[bello].health -= dealDamage(bullets[i].damage, enemies[bello]);
                            enemies[bello].stunTime += bullets[i].stun;
                            if (enemies[bello].target === "none") {
                                enemies[bello].targetLoc = copyArray(bullets[i].og);
                            }
                        }
                    }
                    bullets[i].damageWho = ["none", 0];
                }
                for (var i = enemies.length - 1; i >= 0; i--) {
                    if (!enemies[i].initialized) {
                        enemies[i].initialize();
                        enemies[i].bombInitialize();
                        enemies[i].medInitialize();
                        enemies[i].readyMelee();
                        enemies[i].switchWeapon();
                        enemies[i].initialized = true;
                    }
                    if (enemies[i].deadTime === 1) {
                        if (enemies[i].whichSquad !== "NONE") {
                            if (enemies[i].whichSquad.members.length === 2) {
                                enemies[i].whichSquad.die();
                            } else {
                                enemies[i].whichSquad.members.splice(findInIndex(enemies, enemies[i]), 1);
                                if (enemies[i].positionInSquad === "Commander") {
                                    enemies[i].whichSquad.assignPositions();
                                }
                            }
                        }
                        enemies.splice(i, 1);
                    } else {
                        enemies[i].updateInventory();
                        enemies[i].die();
                        enemies[i].squadFormation();
                        enemies[i].useMeds();
                        enemies[i].findTarget();
                        enemies[i].findTargetDirection();
                        enemies[i].runContingency();
                        enemies[i].switchWeapon();
                        enemies[i].detectWall();
                        enemies[i].getAlerted();
                        enemies[i].targetPoint();
                        enemies[i].rotate();
                        enemies[i].move();
                        enemies[i].shoot();
                        enemies[i].throwGrenade();
                        enemies[i].reloadGun();
                        enemies[i].update();
                        enemies[i].punchAttack();
                        if (frameCount % 3 === 1) {
                            enemies[i].canScope = true;
                        }
                    }
                }
                for (var i = allies.length - 1; i >= 0; i--) {
                    if (!allies[i].initialized) {
                        allies[i].initialize();
                        allies[i].bombInitialize();
                        allies[i].medInitialize();
                        allies[i].readyMelee();
                        allies[i].switchWeapon();
                        allies[i].initialized = true;
                    }
                    if (allies[i].deadTime === 1) {
                        if (allies[i].whichSquad !== "NONE") {
                            if (allies[i].whichSquad.members.length === 2) {
                                allies[i].whichSquad.die();
                            } else {
                                allies[i].whichSquad.members.splice(findInIndex(allies, allies[i]), 1);
                                if (allies[i].positionInSquad === "Commander") {
                                    allies[i].whichSquad.assignPositions();
                                }
                            }
                        }
                        if (i !== 0) {
                            allies.splice(i, 1);
                        }
                    } else {
                        allies[i].updateInventory();
                        allies[i].die();
                        allies[i].squadFormation();
                        allies[i].useMeds();
                        allies[i].findTarget();
                        allies[i].findTargetDirection();
                        allies[i].runContingency();
                        allies[i].switchWeapon();
                        allies[i].detectWall();
                        allies[i].getAlerted();
                        allies[i].targetPoint();
                        allies[i].rotate();
                        allies[i].move();
                        allies[i].shoot();
                        allies[i].throwGrenade();
                        allies[i].reloadGun();
                        allies[i].update();
                        allies[i].punchAttack();
                        if (frameCount % 3 === 1) {
                            allies[i].canScope = true;
                        }
                    }
                }
                for (var i = bombs.length - 1; i >= 0; i--) {
                    bombs[i].collide();
                    bombs[i].move();
                    if (bombs[i].time <= 0) {
                        if (bombs[i].type.type !== "Smoke") {
                            booms.push(construct(boom, [bombs[i].x, bombs[i].y, bombs[i].range, [bombs[i].stun, (bombs[i].type.type === "Frag" ? true : false), "NOT", bombs[i].type.type]]));
                        } else {
                            smokeClouds.push(construct(smokeCloud, [bombs[i].x, bombs[i].y, bombs[i].type, ["t2", bombs[i].t2]]));
                        }
                        bombs.splice(findInIndex(bombs, bombs[i]), 1);
                    }
                }
                for (var i = booms.length - 1; i >= 0; i--) {
                    if (!booms[i].initialized) {
                        booms[i].findTargets();
                    }
                    if (booms[i].time > booms[i].size - 1) {
                        booms.splice(i, 1);
                        continue;
                    }
                }
                for (var i = computers.length - 1; i >= 0; i--) {
                    computers[i].nextTo();
                }
                for (var i = boxes.length - 1; i >= 0; i--) {
                    if (!boxes[i].opened) {
                        boxes[i].nextTo();
                    }
                }
                for (var i = doors.length - 1; i >= 0; i--) {
                    doors[i].open();
                }
                for (var i = walls.length - 1; i >= 0; i--) {
                    if (walls[i].health <= 0) {
                        walls.splice(i, 1);
                    }
                }
                for (var i = smokeClouds.length - 1; i >= 0; i--) {
                    smokeClouds[i].spawn();
                    if (smokeClouds[i].smokes.length === 0) {
                        smokeClouds.splice(i, 1);
                    }
                }
                displayMap();
                if (allies[0].deadTime === 1) {
                    transition[1] = 255;
                    levelEnds.push(construct(levelEnd, [function() {
                        filter(GRAY);
                        filter(BLUR, 2);
                        backgroundImage2 = get(0, 0, width, height);
                        scene = "backgroundImage2";
                    }, true]));
                }
                if (pressed(commandKeys.use) && canPressT && medButtonTime <= 0 && grenadeButtonTime <= 0) {
                    //if (canAct()) {
                        var clickingOnConsole = false;
                        for (var i = 0; i < turrets.length; i++) {
                            if (usingConsole === turrets[i]) {
                                clickingOnConsole = true;
                                i = turrets.length;
                            }
                        }
                        for (var i = 0; i < computers.length; i++) {
                            computers[i].use();
                            if (usingConsole === computers[i]) {
                                clickingOnConsole = true;
                                i = computers.length;
                            }
                        }
                        for (var i = 0; i < boxes.length; i++) {
                            boxes[i].use();
                            if (usingConsole === boxes[i]) {
                                clickingOnConsole = true;
                                i = boxes.length;
                            }
                        }
                        if (!clickingOnConsole) {
                            usingConsole = "NOT";
                        }
                        canPressT = false;
                    //}
                }
                if (!pressed(commandKeys.use)) {
                    canPressT = true;
                    usingConsole = "NOT";
                }
                var cWidth = byConsole[2];
                if (consoleType === "Open crate") {
                    cWidth = byConsole[3];
                } else if (consoleType === "Access turret") {
                    cWidth = byConsole[4];
                }
                if (byConsole[0]) {
                    byConsole[1] += ((cWidth - byConsole[1]) / 5) * compensateFPS;
                } else {
                    byConsole[1] += (-byConsole[1] / 5) * compensateFPS;
                }
                if (allies[0].seeHealth) {
                    rectMode(CORNER);
                    for (var i = enemies.length - 1; i >= 0; i--) {
                        var a = enemies[i];
                        fill(255, 100);
                        rect(a.x - 31, a.y + a.width / 2 + 5, 62, 10);
                        fill(255, 0, 0, 100);
                        rect(a.x - 30, a.y + a.width / 2 + 6, 60 * constrain(a.health / a.maxHealth, 0, 1), 8);
                    }
                    for (var i = allies.length - 1; i >= 0; i--) {
                        var a = allies[i];
                        fill(255, 100);
                        rect(a.x - 31, a.y + a.width / 2 + 5, 62, 10);
                        fill(255, 0, 0, 100);
                        rect(a.x - 30, a.y + a.width / 2 + 6, 60 * constrain(a.health / a.maxHealth, 0, 1), 8);
                    }
                    rectMode(CENTER);
                }
                if (environment.night) {
                    translate(allies[0].x, allies[0].y);
                    rotate(allies[0].rot + 180);
                    nightVision();
                    //fill(255, 0, 0);
                    //ellipse(0, 0, 50, 50);
                }
                popMatrix();
                if (byConsole[1] >= 2) {
                    fill(50, lootBoxFinalAlpha);
                    stroke(255);
                    strokeWeight(1);
                    rectMode(CORNER);
                    rect(allies[0].drawX, allies[0].drawY - 25, byConsole[1], 20, 5);
                    noStroke();
                    rectMode(CENTER);
                    textAlign(LEFT, CENTER);
                    fill(255);
                    textFont(fonts.TimesNewRoman10);
                    if (byConsole[1] >= cWidth - 2) {
                        text(consoleType, allies[0].drawX + 5, allies[0].drawY - 15);
                    }
                    textAlign(CENTER, CENTER);
                    if (byConsole[0]) {
                        textFont(fonts.Calibri12);
                        var firstButton = commandKeys.use[1], whichButton1 = 0;
                        if (firstButton === "Right Mouse Button" || firstButton === "Left Mouse Button" || firstButton === "Middle Mouse Button") {
                            whichButton1 = 20;
                        } else {
                            whichButton1 = constrain(textWidth(firstButton), 20, textWidth(firstButton));
                        }
                        showButtonToClick((allies[0].drawX - 3) - (whichButton1 / 2), allies[0].drawY - 15, 1, firstButton, whichButton1, 20, lootBoxFinalAlpha);
                    }
                }
                lootInfo("LOOTx", "LOOTy", commandKeys.pickUp[1], "NONE");
                for (var i = 0; i < UIpieces.length; i++) {
                    UIpieces[i].update();
                    UIpieces[i].draw();
                }
                var wantedDistance = dist(MOUSEX, MOUSEY, allies[0].drawX + (allies[0].gunX - allies[0].x), allies[0].drawY + (allies[0].gunY - allies[0].y));
                pushMatrix();
                translate(allies[0].drawX, allies[0].drawY);
                for (var i = 0; i < allies[0].hearShotsFrom.length; i++) {
                    bulletIndicator(allies[0].hearShotsFrom[i][0], 1, allies[0].hearShotsFrom[i][1] * (175 / 30), color(255, 125, 0));
                }
                popMatrix();
                pushMatrix();
                translate(MOUSEX, MOUSEY);
                rotate(atan2(MOUSEY - allies[0].drawY, MOUSEX - allies[0].drawX) - 90);
                noFill();
                var graphic;
                if (allies[0].currentWeapon === 0 || allies[0].currentWeapon === 1 || allies[0].onTurret) {
                    graphic = allies[0].weapon.mouseGraphic;
                } else {
                    graphic = "Punch";
                }
                mouseReticle(graphic, color(0), 4, ((allies[0].currentRecoil * (wantedDistance / 19)) / 2) * allies[0].accuracyMultiplier);
                mouseReticle(graphic, color(255), 2, ((allies[0].currentRecoil * (wantedDistance / 19)) / 2) * allies[0].accuracyMultiplier);
                popMatrix();
                textFont(fonts.CalibriBold18);
                pushMatrix();
                translate(200, 150);
                var message = "";
                if (allies[0].reloading) {
                    message = "Reloading ...\n[" + commandKeys.cancel[1] + "] Cancel";
                } else if (allies[0].healing) {
                    message = "Healing ...\n[" + commandKeys.cancel[1] + "] Cancel";
                }
                outlineText(message, color(0, 225 + 30 * sin(frameCount * 10)), color(255, 225 + 30 * sin(frameCount * 10)), 8, 3);
                popMatrix();
                textFont(fonts.AgencyFB20);
                fill(255, 0, 0, message2[1]);
                text(message2[0], 200, 170);
                message2[1] -= compensateFPS * 4;
                if (allies.length > 0) {
                    var a = 0;
                    if (allies[0].stunTime > 20 || allies[0].inSmoke) {
                        a = 255;
                    } else if (allies[0].stunTime > 0) {
                        a = allies[0].stunTime / 20 * 255;
                    }
                    fill(255, a);
                    rect(200, 200, 400, 400);
                }
                for (var i = 0; i < objectives.length; i++) {
                    objectives[i].work();
                }
                console.draw();
                fill(255);
                textFont(fonts.TimesNewRoman10);
                textAlign(LEFT, TOP);
                if (devMode) {
                    text(round(trueFPS) + " FPS\nTime: " + round(timeOnLevel) + "\nEnemies: " + enemies.length + "\nAllies: " + allies.length + "\nMap: " + gameMap + "\nStuff: " + (enemies.length > 0 ? enemies[0].movePath : ""), 5, 10 + console.y);
                }
                textAlign(CENTER, CENTER);
            } else if (scene === "pause") {
                background(255);
                image(backgroundImage, 200, 200, 400, 400);
                fill(255);
                textFont(fonts.AgencyFB25);
                var theLength = textWidth("PAUSED");
                text("PAUSED", 200, 60);
                stroke(255);
                strokeWeight(2);
                line(200-theLength / 2, 75, 200+theLength / 2, 75);
                line(200-theLength / 2, 46, 200+theLength / 2, 46);
                for (var i = 0; i < UIpiecesPause.length; i++) {
                    UIpiecesPause[i].update();
                    UIpiecesPause[i].draw();
                }
            } else if (scene === "pause2") {
                background(255);
                image(backgroundImage, 200, 200, 400, 400);
                for (var i = 0; i < UIpiecesPause2.length; i++) {
                    UIpiecesPause2[i].update();
                    UIpiecesPause2[i].draw();
                }
            } else if (scene === "cinematic") {
                background(0, 0);
                pushMatrix();
                translate(200, 200);
                scale(1 / cinematic[2][2]);
                translate(-cinematic[2][0], -cinematic[2][1]);
                cinematics[cinematic[0]].run(cinematic[1]);
                if (cinematic[1] === 0) {
                    subArrays = copyArray(cinematics[cinematic[0]].subtitleList);
                }
                if (cinematic[1] === -1) {
                    cinematic[1] = 0;
                } else if (cinematic[1] > -1 && !endCinematic) {
                    cinematic[1] += compensateFPS;
                    for (var i = orders.length - 1; i >= 0; i--) {
                        orders[i].run(cinematic[1]);
                    }
                    for (var i = allLoot.length - 1; i >= 0; i--) {
                        allLoot[i].move();
                    }
                    for (var i = turrets.length - 1; i >= 0; i--) {
                        turrets[i].occupy();
                    }
                    for (var i = bullets.length - 1; i >= 0; i--) {
                        bullets[i].hitCharacter();
                        bullets[i].collide();
                        bullets[i].move();
                        if (bullets[i].time >= bullets[i].range) {
                            bullets[i].dead = true;
                        }
                        if (((bullets[i].trail < bullets[i].speed && bullets[i].dead && bullets[i].smokeTrail.length === 0) || !bullets[i].trailOn) && bullets[i].deathTime > 1) {
                            bullets.splice(i, 1);
                            continue;
                        }
                        var bello = bullets[i].damageWho[1];
                        if (bullets[i].dead && bullets[i].deathTime === 1) {
                            bullets[i].trail += bullets[i].speed;
                            if (bullets[i].damageWho[0] === "ally" && (bello !== 0 || (bello === 0 && !godMode))) {
                                allies[bello].health -= dealDamage(bullets[i].damage, allies[bello]);
                                allies[bello].stunTime += bullets[i].stun;
                                if (allies[bello].target === "none") {
                                    allies[bello].targetLoc = copyArray(bullets[i].og);
                                }
                            } else if (bullets[i].damageWho[0] === "enemy") {
                                enemies[bello].health -= dealDamage(bullets[i].damage, enemies[bello]);
                                enemies[bello].stunTime += bullets[i].stun;
                                if (enemies[bello].target === "none") {
                                    enemies[bello].targetLoc = copyArray(bullets[i].og);
                                }
                            }
                        }
                        bullets[i].damageWho = ["none", 0];
                    }
                    for (var i = enemies.length - 1; i >= 0; i--) {
                        if (!enemies[i].initialized) {
                            enemies[i].initialize();
                            enemies[i].bombInitialize();
                            enemies[i].medInitialize();
                            enemies[i].readyMelee();
                            enemies[i].switchWeapon();
                            enemies[i].initialized = true;
                        }
                        if (enemies[i].deadTime === 1) {
                            if (enemies[i].whichSquad !== "NONE") {
                                if (enemies[i].whichSquad.members.length === 2) {
                                    enemies[i].whichSquad.die();
                                } else {
                                    enemies[i].whichSquad.members.splice(findInIndex(enemies, enemies[i]), 1);
                                    if (enemies[i].positionInSquad === "Commander") {
                                        enemies[i].whichSquad.assignPositions();
                                    }
                                }
                            }
                            enemies.splice(i, 1);
                        } else {
                            enemies[i].die();
                            enemies[i].getAlerted();
                            enemies[i].targetPoint();
                            enemies[i].rotate();
                            enemies[i].move();
                            enemies[i].shoot();
                            enemies[i].reloadGun();
                            enemies[i].update();
                            enemies[i].punchAttack();
                            if (frameCount % 3 === 1) {
                                enemies[i].canScope = true;
                            }
                        }
                    }
                    for (var i = allies.length - 1; i >= 0; i--) {
                        if (!allies[i].initialized) {
                            allies[i].initialize();
                            allies[i].bombInitialize();
                            allies[i].medInitialize();
                            allies[i].readyMelee();
                            allies[i].switchWeapon();
                            allies[i].initialized = true;
                        }
                        if (allies[i].deadTime === 1) {
                            if (allies[i].whichSquad !== "NONE") {
                                if (allies[i].whichSquad.members.length === 2) {
                                    allies[i].whichSquad.die();
                                } else {
                                    allies[i].whichSquad.members.splice(findInIndex(allies, allies[i]), 1);
                                    if (allies[i].positionInSquad === "Commander") {
                                        allies[i].whichSquad.assignPositions();
                                    }
                                }
                            }
                            if (i !== 0) {
                                allies.splice(i, 1);
                            }
                        } else {
                            allies[i].updateInventory();
                            allies[i].die();
                            allies[i].squadFormation();
                            allies[i].useMeds();
                            allies[i].findTarget();
                            allies[i].findTargetDirection();
                            allies[i].runContingency();
                            allies[i].switchWeapon();
                            allies[i].detectWall();
                            allies[i].getAlerted();
                            allies[i].targetPoint();
                            allies[i].rotate();
                            allies[i].move();
                            allies[i].shoot();
                            allies[i].throwGrenade();
                            allies[i].reloadGun();
                            allies[i].update();
                            allies[i].punchAttack();
                            if (frameCount % 3 === 1) {
                                allies[i].canScope = true;
                            }
                        }
                    }
                    for (var i = bombs.length - 1; i >= 0; i--) {
                        bombs[i].collide();
                        bombs[i].move();
                        if (bombs[i].time <= 0) {
                            if (bombs[i].type.type !== "Smoke") {
                                booms.push(construct(boom, [bombs[i].x, bombs[i].y, bombs[i].range, [bombs[i].stun, (bombs[i].type.type === "Frag" ? true : false), "NOT", bombs[i].type.type]]));
                            } else {
                                smokeClouds.push(construct(smokeCloud, [bombs[i].x, bombs[i].y, bombs[i].type, ["t2", bombs[i].t2]]));
                            }
                            bombs.splice(findInIndex(bombs, bombs[i]), 1);
                        }
                    }
                    for (var i = booms.length - 1; i >= 0; i--) {
                        if (!booms[i].initialized) {
                            booms[i].findTargets();
                        }
                        if (booms[i].time > booms[i].size - 1) {
                            booms.splice(i, 1);
                            continue;
                        }
                    }
                    for (var i = computers.length - 1; i >= 0; i--) {
                        computers[i].nextTo();
                    }
                    for (var i = boxes.length - 1; i >= 0; i--) {
                        if (!boxes[i].opened) {
                            boxes[i].nextTo();
                        }
                    }
                    for (var i = doors.length - 1; i >= 0; i--) {
                        doors[i].open();
                    }
                    for (var i = walls.length - 1; i >= 0; i--) {
                        if (walls[i].health <= 0) {
                            walls.splice(i, 1);
                        }
                    }
                    for (var i = smokeClouds.length - 1; i >= 0; i--) {
                        smokeClouds[i].spawn();
                        if (smokeClouds[i].smokes.length === 0) {
                            smokeClouds.splice(i, 1);
                        }
                    }
                    for (var i = 0; i < subArrays.length; i++) {
                        if (cinematic[1] >= subArrays[i][1]) {
                            subtitles = subArrays[i][0];
                            if (subtitles.length > 0) {
                                subtitles = subtitles.replaceAll("P_Valik", playerInfo[0]);
                                subtitles = subtitles.replaceAll("P_Tivian", playerInfo[1]);
                                subtitles = subtitles.replaceAll("P_He", pDetails[0]);
                                subtitles = subtitles.replaceAll("P_Him", pDetails[1]);
                                subtitles = subtitles.replaceAll("P_His", pDetails[2]);
                                subtitles = subtitles.replaceAll("P_Sir", pDetails[3]);
                                subtitles = capitalize(subtitles);
                            }
                            subArrays.splice(i, 1);
                        }
                    }
                }
                popMatrix();
                if (allies.length > 0) {
                    var a = 0;
                    if (allies[0].stunTime > 20 || allies[0].inSmoke) {
                        a = 255;
                    } else if (allies[0].stunTime > 0) {
                        a = allies[0].stunTime / 20 * 255;
                    }
                    fill(255, a);
                    rect(200, 200, 400, 400);
                }
                fill(0);
                rect(200, 30, 400, 60);
                rect(200, 370, 400, 60);
                fill(255);
                textFont(fonts.Calibri14);
                text(subtitles, 0, 165, 400, 400);
                textFont(fonts.Calibri14Italics);
                fill(200);
                if (cinematic[1] <= 360) {
                    text("click to skip", 200, 30);
                }
            } else if (scene === "inventory") {
                if (!mouseIsPressed || mouseButton !== LEFT) {
                    draggingLoot = "NONE";
                }
                background(0);
                image(backgroundImage, 200, 200, 400, 400);
                allies[0].updateInventory();
                for (var i = 0; i < UIpiecesInventory.length; i++) {
                    UIpiecesInventory[i].update();
                    UIpiecesInventory[i].draw();
                }
                onLoot = false;
                boxFinalWidth = 0;
                for (var i = 0; i < UIpiecesInventory.length; i++) {
                    UIpiecesInventory[i].showLootInfo();
                }
                textFont(fonts.AgencyFB20);
                fill(255, 0, 0, message2[1]);
                text(message2[0], 200, 170);
                message2[1] -= compensateFPS * 4;
            } else if (scene === "datapad") {
                background(0);
                image(backgroundImage, 200, 200, 400, 400);
                for (var i = 0; i < UIpiecesDatapad.length; i++) {
                    UIpiecesDatapad[i].draw();
                }
            } else if (scene === "tips") {
                background(0);
                image(backgroundImage, 200, 200, 400, 400);
                for (var i = 0; i < tips.length; i++) {
                    tips[i].work();
                }
            } else if (scene === "backgroundImage2") {
                image(backgroundImage2, 200, 200, 400, 400);
                fill(255, 0, 0, 150);
                rect(200, 200, 400, 400);
                fill(255);
                textFont(fonts.AgencyFB40);
                text(playerInfo[0].toUpperCase() + " " + playerInfo[1].toUpperCase() + " DIED", 200, 200);
                fill(255, 0, 0);
                textFont(fonts.AgencyFB20);
                textAlign(CENTER, BOTTOM);
                text("MISSION FAILED:", 200, 180);
                fill(255, sin(frameCount * 3) * 255 + 50);
                textAlign(CENTER, TOP);
                textFont(fonts.AgencyFB20Italics);
                if (freePlay) {
                    text("PRESS ANYWHERE TO RESPAWN", 200, 220);
                } else {
                    text("PRESS ANYWHERE FOR THE MENU", 200, 220);
                }
                fill(200);
                textFont(fonts.Calibri12);
                text("- OR -", 200, 244);
                textFont(fonts.Calibri14Italics);
                fill(255);
                textAlign(CENTER, CENTER);
                if (freePlay) {
                    text("exit to menu", 200, 265);
                } else {
                    text("load recent save", 200, 265);
                }
                if (inBox(MOUSEX, MOUSEY, 200, 265, 100, 15)) {
                    fill(255, 100);
                    rect(200, 265, 100, 15);
                    cursor(HAND);
                }
            } else if (scene === "settings") {
                background(30, 70, 110);
                drawImages(weathers2);
                if (datapadOn === 0) {
                    pushMatrix();
                    translate(0, -settingsScroll);
                    fill(255, 50);
                    rect(200, (Object.keys(commandKeys).length + 1) * 15 + 37.5, 310, Object.keys(commandKeys).length * 30 + 30);
                    for (var i = 0; i < Object.keys(commandKeys).length; i++) {
                        fill(255);
                        textFont(fonts.CalibriBold18);
                        textAlign(LEFT, CENTER);
                        text(commandKeys[Object.keys(commandKeys)[i]][2] + ":", 50, 82.5 + i * 30);
                        textFont(fonts.Calibri18);
                        textAlign(RIGHT, CENTER);
                        if (commandKeys[Object.keys(commandKeys)[i]][1] === " - ") {
                            fill(200);
                            textFont(fonts.Calibri18Italics);
                            text("none selected", 350, 82.5 + i * 30);
                        } else {
                            text(commandKeys[Object.keys(commandKeys)[i]][1], 350, 82.5 + i * 30);
                        }
                        var a = textWidth(commandKeys[Object.keys(commandKeys)[i]][1]);
                        if ((MOUSEY >= 70 && MOUSEY <= 330 && inBox(MOUSEX, MOUSEY, 200, 82.5 + i * 30 - settingsScroll, 310, 25) && settingsSelected === "NONE") || settingsSelected === i) {
                            if (settingsSelected === i) {
                                fill(255, 50 + sin(frameCount * 15) * 30);
                                stroke(255);
                                strokeWeight(1);
                            } else {
                                fill(255, 50);
                                cursor(HAND);
                            }
                            rect(200, 82.5 + i * 30, 310, 25);
                        }
                        noStroke();
                    }
                    fill(255);
                    textFont(fonts.CalibriBold18);
                    textAlign(CENTER, CENTER);
                    text("Key Binds", 200, 52.5);
                    popMatrix();
                    stroke(255);
                    strokeWeight(3);
                    if (MOUSEY > 330 && MOUSEY <= 350) {
                        if (settingsScroll < 19 * 30 - 267.5) {
                            settingsScroll = constrain(settingsScroll + 5 * compensateFPS, -Infinity, 19 * 30 - 267.5);
                            stroke(200);
                        } else {
                            cursor('no-drop');
                        }
                    }
                    line(200, 345, 215, 340);
                    line(200, 345, 185, 340);
                    stroke(255);
                    if (MOUSEY >= 50 && MOUSEY < 70) {
                        if (settingsScroll > -30) {
                            settingsScroll = constrain(settingsScroll - 5 * compensateFPS, -30, Infinity);
                            stroke(200);
                        } else {
                            cursor('no-drop');
                        }
                    }
                    line(200, 55, 215, 60);
                    line(200, 55, 185, 60);
                } else {
                    fill(255, 50);
                    rect(200, 162.5, 310, 210);
                    fill(255);
                    textFont(fonts.CalibriBold18);
                    text("Other", 200, 70);
                    textAlign(LEFT, CENTER);
                    textFont(fonts.Calibri18);
                    text("FPS:", 50, 100);
                    text("Transition Speed:", 50, 160);
                    text("Graphic Quality:", 50, 220);
                    textFont(fonts.Calibri18);
                    textAlign(CENTER, CENTER);
                    text(fpsOptions[fpsOptions[fpsOptions.length - 1]], 325, 100);
                    text(transitionOptions[transitionOptions[transitionOptions.length - 1]], 325, 160);
            text(graphicOptions[graphicOptions[graphicOptions.length - 1]], 325, 220);
                    fill(200);
                    textFont(fonts.Calibri12Italics);
                    text("*40, 45, 50, 55, 60 (default), 70, 90, or 120", 200, 130);
                    text("*5, 10 (default), 15, or 20", 200, 190);
                    text("*Low (default) or High", 200, 250);
                    stroke(255);
                    strokeWeight(2);
                    line(350, 100, 345, 95);
                    line(350, 100, 345, 105);
                    line(300, 100, 305, 95);
                    line(300, 100, 305, 105);
                    line(350, 160, 345, 155);
                    line(350, 160, 345, 165);
                    line(300, 160, 305, 155);
                    line(300, 160, 305, 165);
                    line(350, 220, 345, 215);
                    line(350, 220, 345, 225);
                    line(300, 220, 305, 215);
                    line(300, 220, 305, 225);
                    noStroke();
                    fill(255, 50);
                    if (inBox(MOUSEX, MOUSEY, 347.5, 100, 15, 20)) {
                        rect(347.5, 100, 15, 20);
                        cursor(HAND);
                    }
                    if (inBox(MOUSEX, MOUSEY, 347.5, 160, 15, 20)) {
                        rect(347.5, 160, 15, 20);
                        cursor(HAND);
                    }
                    if (inBox(MOUSEX, MOUSEY, 347.5, 220, 15, 20)) {
                        rect(347.5, 220, 15, 20);
                        cursor(HAND);
                    }
                    if (inBox(MOUSEX, MOUSEY, 302.5, 100, 15, 20)) {
                        rect(302.5, 100, 15, 20);
                        cursor(HAND);
                    }
                    if (inBox(MOUSEX, MOUSEY, 302.5, 160, 15, 20)) {
                        rect(302.5, 160, 15, 20);
                        cursor(HAND);
                    }
                    if (inBox(MOUSEX, MOUSEY, 302.5, 220, 15, 20)) {
                        rect(302.5, 220, 15, 20);
                        cursor(HAND);
                    }
                }
                strokeWeight(3);
                stroke(255);
                if (inBox(MOUSEX, MOUSEY, 380, 200, 40, 50) && settingsSelected === "NONE") {
                    stroke(200);
                    cursor(HAND);
                }
                line(390, 200, 385, 185);
                line(390, 200, 385, 215);
                stroke(255);
                if (inBox(MOUSEX, MOUSEY, 20, 200, 40, 50) && settingsSelected === "NONE") {
                    stroke(200);
                    cursor(HAND);
                }
                line(10, 200, 15, 185);
                line(10, 200, 15, 215);
                noStroke();
                textAlign(CENTER, CENTER);
                fill(0);
                rect(200, 25, 400, 50);
                rect(200, 375, 400, 50);
                fill(255);
                textFont(fonts.AgencyFB20);
                text("Back", 40, 25);
                textFont(fonts.AgencyFB25);
                text("SETTINGS", 200, 24.5);
                var a = textWidth("SETTINGS");
                stroke(255);
                strokeWeight(2);
                line(200 - a / 2, 10, 200 + a / 2, 10);
                line(200 - a / 2, 40, 200 + a / 2, 40);
                noStroke();
                fill(255, 50);
                if (inBox(MOUSEX, MOUSEY, 40, 25, 66, 40) && settingsSelected === "NONE") {
                    rect(40, 25, 66, 40);
                    cursor(HAND);
                }
            } else if (scene === "loadGame") {
                background(30, 70, 110);
                drawImages(weathers2);
                fill(255, 50);
                rect(200, 200, 370, 270);
                pushMatrix();
                translate(0, -settingsScroll);
                for (var i = settingsScroll / 30; i < 9 + settingsScroll / 30; i++) {
                    if (i >= 0 && i < codes.length) {
                        fill(255);
                        textFont(fonts.Calibri18);
                        textAlign(RIGHT, CENTER);
                        text(codes[i].date, 380, 80 + i * 30);
                        textFont(fonts.CalibriBold18);
                        textAlign(LEFT, CENTER);
                        text(codes[i].name, 20, 80 + i * 30);
                        var a = textWidth(codes[i].name);
                        textFont(fonts.Calibri18Italics);
                        fill(200);
                        text("(\"" + codes[i].map.which + "\")", 25 + a, 80 + i * 30);
                        textFont(fonts.Calibri12);
                        fill(255, 0);
                        if (inBox(MOUSEX, MOUSEY, 200, 80 + i * 30 - settingsScroll, 370, 25) || settingsSelected === i) {
                            if (settingsSelected === i) {
                                fill(255, 50 + sin(frameCount * 15) * 30);
                                stroke(255);
                                strokeWeight(2);
                            } else {
                                fill(255, 50);
                                cursor(HAND);
                            }
                        }
                        rect(200, 80 + i * 30, 370, 25);
                        noStroke();
                    }
                    if (codes.length === 0 && i === settingsScroll / 30) {
                        fill(200);
                        textFont(fonts.Calibri18Italics);
                        text("No saved games exist", 200, 80 + i * 30);
                    }
                }
                popMatrix();
                textAlign(CENTER, CENTER);
                stroke(255);
                strokeWeight(3);
                if (MOUSEY > 330 && MOUSEY <= 350) {
                    if (settingsScroll < 30 * (codes.length - 9)) {
                        stroke(200);
                        cursor(HAND);
                    } else {
                        cursor('no-drop');
                    }
                }
                line(200, 345, 215, 340);
                line(200, 345, 185, 340);
                stroke(255);
                if (MOUSEY >= 50 && MOUSEY < 70) {
                    if (settingsScroll > 0) {
                        cursor(HAND);
                        stroke(200);
                    } else {
                        cursor('no-drop');
                    }
                }
                line(200, 55, 215, 60);
                line(200, 55, 185, 60);
                noStroke();
                fill(0);
                rect(200, 25, 400, 50);
                rect(200, 375, 400, 50);
                fill(255);
                textFont(fonts.AgencyFB20);
                text("Back", 40, 25);
                text("Print", 360, 25);
                if (settingsSelected === "NONE") {
                    fill(200);
                }
                text("Load", 100, 375);
                text("Delete", 300, 375);
                fill(255);
                textFont(fonts.AgencyFB25);
                text("LOAD GAME", 200, 24.5);
                var a = textWidth("LOAD GAME");
                stroke(255);
                strokeWeight(2);
                line(200 - a / 2, 10, 200 + a / 2, 10);
                line(200 - a / 2, 40, 200 + a / 2, 40);
                noStroke();
                fill(255, 50);
                if (inBox(MOUSEX, MOUSEY, 40, 25, 66, 40)) {
                    rect(40, 25, 66, 40);
                    cursor(HAND);
                } else if (inBox(MOUSEX, MOUSEY, 360, 25, 66, 40)) {
                    rect(360, 25, 66, 40);
                    cursor(HAND);
                }
                if (inBox(MOUSEX, MOUSEY, 100, 375, 66, 40)) {
                    if (settingsSelected !== "NONE") {
                        rect(100, 375, 66, 40);
                        cursor(HAND);
                    } else {
                        cursor('no-drop');
                    }
                } else if (inBox(MOUSEX, MOUSEY, 300, 375, 66, 40)) {
                    if (settingsSelected !== "NONE") {
                        rect(300, 375, 66, 40);
                        cursor(HAND);
                    } else {
                        cursor('no-drop');
                    }
                }
            } else if (scene === "New Game" || scene === "Free Play") {
                background(255);
                background(30, 70, 110);
                drawImages(weathers2);
                fill(255, 50);
                rect(200, 200, 380, 280);
                fill(0);
                rect(200, 25, 400, 50);
                rect(200, 375, 400, 50);
                fill(255);
                textAlign(LEFT, CENTER);
                textFont(fonts.CalibriBold18);
                text("Enemy Accuracy:", 20, 110);
                text("Player Health:", 20, 140);
                text("Gender:", 20, 200);
                text("First Name:", 20, 230);
                text("Last Name:", 20, 260);
                text("Skin Color:", 20, 290);
                text("Hair Color:", 20, 320);
                textAlign(CENTER, CENTER);
                text("Difficulty", 200, 80);
                text("Player Settings", 200, 170);
                textFont(fonts.Calibri18);
                widths = [textWidth(difficulty[difficulty[difficulty.length - 1]]), textWidth(pHealth[pHealth[pHealth.length - 1]]), textWidth(gOptions[gOptions[gOptions.length - 1]]), textWidth(skinOptions[skinOptions[skinOptions.length - 1]][0]), textWidth(hairOptions[hairOptions[hairOptions.length - 1]][0]), textWidth(playerInfo[0]), textWidth(playerInfo[1])];
                text(difficulty[difficulty[difficulty.length - 1]], 365 - widths[0] / 2, 110);
                text(pHealth[pHealth[pHealth.length - 1]], 365 - widths[1] / 2, 140);
                text(gOptions[gOptions[gOptions.length - 1]], 365 - widths[2] / 2, 200);
                fill(skinOptions[skinOptions[skinOptions.length - 1]][1]);
                text(skinOptions[skinOptions[skinOptions.length - 1]][0], 365 - widths[3] / 2, 290);
                fill(hairOptions[hairOptions[hairOptions.length - 1]][1]);
                text(hairOptions[hairOptions[hairOptions.length - 1]][0], 365 - widths[4] / 2, 320);
                fill(255);
                textFont(fonts.Calibri18);
                if (playerInfo[0] === "") {
                    fill(200);
                    textFont(fonts.Calibri18Italics);
                    widths[5] = textWidth("none");
                    text("none", 365 - widths[5] / 2, 230);
                }
                text(playerInfo[0], 365 - widths[5] / 2, 230);
                text((settingsSelected === 5 && frameCount % 150 >= 60) ? "|" : "", 368, 230);
                fill(255);
                textFont(fonts.Calibri18);
                if (playerInfo[1] === "") {
                    fill(200);
                    textFont(fonts.Calibri18Italics);
                    widths[6] = textWidth("none");
                    text("none", 365 - widths[6] / 2, 260);
                }
                text(playerInfo[1], 365 - widths[6] / 2, 260);
                text((settingsSelected === 6 && frameCount % 150 >= 60) ? "|" : "", 368, 260);
                fill(255);
                textFont(fonts.AgencyFB20);
                text("Back", 40, 25);
                if (playerInfo[0] === "" || playerInfo[1] === "") {
                    fill(200);
                }
                if (scene === "New Game") {
                    text("Begin", 200, 375);
                } else {
                    text("Continue", 200, 375);
                }
                fill(255);
                textFont(fonts.AgencyFB25);
                text(scene.toUpperCase(), 200, 24.5);
                var a = textWidth(scene.toUpperCase());
                stroke(255);
                strokeWeight(2);
                line(200 - a / 2, 10, 200 + a / 2, 10);
                line(200 - a / 2, 40, 200 + a / 2, 40);
                line(380, 110, 375, 105);
                line(380, 110, 375, 115);
                line(350 - widths[0], 110, 355 - widths[0], 105);
                line(350 - widths[0], 110, 355 - widths[0], 115);
                line(380, 140, 375, 135);
                line(380, 140, 375, 145);
                line(350 - widths[1], 140, 355 - widths[1], 135);
                line(350 - widths[1], 140, 355 - widths[1], 145);
                line(380, 200, 375, 195);
                line(380, 200, 375, 205);
                line(350 - widths[2], 200, 355 - widths[2], 195);
                line(350 - widths[2], 200, 355 - widths[2], 205);
                line(380, 290, 375, 285);
                line(380, 290, 375, 295);
                line(350 - widths[3], 290, 355 - widths[3], 285);
                line(350 - widths[3], 290, 355 - widths[3], 295);
                line(380, 320, 375, 315);
                line(380, 320, 375, 325);
                line(350 - widths[4], 320, 355 - widths[4], 315);
                line(350 - widths[4], 320, 355 - widths[4], 325);
                noStroke();
                fill(255, 50);
                if (inBox(MOUSEX, MOUSEY, 40, 25, 66, 40)) {
                    rect(40, 25, 66, 40);
                    cursor(HAND);
                } else if (inBox(MOUSEX, MOUSEY, 200, 375, 66, 40)) {
                    if (playerInfo[0] !== "" && playerInfo[1] !== "") {
                        rect(200, 375, 66, 40);
                        cursor(HAND);
                    } else {
                        cursor('no-drop');
                    }
                } else if (inBox(MOUSEX, MOUSEY, 377.5, 110, 15, 20)) {
                    cursor(HAND);
                    rect(377.5, 110, 15, 20);
                } else if (inBox(MOUSEX, MOUSEY, 377.5, 140, 15, 20)) {
                    cursor(HAND);
                    rect(377.5, 140, 15, 20);
                } else if (inBox(MOUSEX, MOUSEY, 377.5, 200, 15, 20)) {
                    cursor(HAND);
                    rect(377.5, 200, 15, 20);
                } else if (inBox(MOUSEX, MOUSEY, 377.5, 290, 15, 20)) {
                    cursor(HAND);
                    rect(377.5, 290, 15, 20);
                } else if (inBox(MOUSEX, MOUSEY, 377.5, 320, 15, 20)) {
                    cursor(HAND);
                    rect(377.5, 320, 15, 20);
                } else if (inBox(MOUSEX, MOUSEY, 352.5 - widths[0], 110, 15, 20)) {
                    cursor(HAND);
                    rect(352.5 - widths[0], 110, 15, 20);
                } else if (inBox(MOUSEX, MOUSEY, 352.5 - widths[1], 140, 15, 20)) {
                    cursor(HAND);
                    rect(352.5 - widths[1], 140, 15, 20);
                } else if (inBox(MOUSEX, MOUSEY, 352.5 - widths[2], 200, 15, 20)) {
                    cursor(HAND);
                    rect(352.5 - widths[2], 200, 15, 20);
                } else if (inBox(MOUSEX, MOUSEY, 352.5 - widths[3], 290, 15, 20)) {
                    cursor(HAND);
                    rect(352.5 - widths[3], 290, 15, 20);
                } else if (inBox(MOUSEX, MOUSEY, 352.5 - widths[4], 320, 15, 20)) {
                    cursor(HAND);
                    rect(352.5 - widths[4], 320, 15, 20);
                }
                if (inBox(MOUSEX, MOUSEY, 365 - widths[5] / 2, 230, widths[5] + 10, 20)) {
                    cursor(HAND);
                    if (settingsSelected !== 5) {
                        rect(365 - widths[5] / 2, 230, widths[5] + 10, 20);
                    }
                }
                if (settingsSelected === 5) {
                    rect(365 - widths[5] / 2, 230, widths[5] + 10, 20);
                }
                if (inBox(MOUSEX, MOUSEY, 365 - widths[6] / 2, 260, widths[6] + 10, 20)) {
                    cursor(HAND);
                    if (settingsSelected !== 6) {
                        rect(365 - widths[6] / 2, 260, widths[6] + 10, 20);
                    }
                }
                if (settingsSelected === 6) {
                    rect(365 - widths[6] / 2, 260, widths[6] + 10, 20);
                }
            } else if (scene === "help") {
                cursor(ARROW);
                background(30, 70, 110);
                drawImages(weathers2);
                pushMatrix();
                translate(0, -settingsScroll);
                fill(255, 50);
                var a = 36;
                rect(200, 12.15 * a + 67.5, 310, 24.3 * a);
                fill(255);
                textFont(fonts.CalibriBold18);
                textAlign(CENTER, CENTER);
                textAlign(LEFT, TOP);
                text("Welcome to Escape v2!\n\t\tIn this game, you will progress through a series of different levels. You must eliminate your enemies and collect loot to defend yourself.\n\t\tThe controls are simple and can be changed in the settings. Remember to press [" + commandKeys.menu[1] + "] to pause the game!\n\t\tAccess the inventory with [" + commandKeys.inventory[1] + "]. You can equip your weapons with different attachments that you've grabbed from there and do much more.\n\t\tPress [" + commandKeys.datapad[1] + "] for your datapad. You can see your map from there.\n\t\tAttack with [" + commandKeys.attack[1] + "]. You can reload your weapon with [" + commandKeys.reload[1] + "] whenever your ammunition is low; it will automatically do so when you have nothing left. If it doesn't, you're out of ammo.\n\t\tPress [" + commandKeys.scope[1] + "] to open your scope. It will increase your accuracy but slow you down.\n\t\tPress [" + commandKeys.grenade[1] + "] to equip a grenade, and hold it to select one.\n\t\tPress [" + commandKeys.meds[1] + "] to equip medical supplies, and hold it to select.\n\t\tPress [" + commandKeys.firstWeapon[1] + "], [" + commandKeys.secondWeapon[1] + "], and [" + commandKeys.melee[1] + "] to switch between weapons.\n\t\tPress [" + commandKeys.pickUp[1] + "] to pick up loot.\n\t\tPress [" + commandKeys.use[1] + "] to use crates and consoles.\n\t\tNOTE: It is recommended that those without a separate mouse set the attacking button to a key to make it easier to aim and fire simultaneously!", 50, 70, 300, 1000);
                textAlign(CENTER, CENTER);
                popMatrix();
                stroke(255);
                strokeWeight(3);
                if (MOUSEY > 330 && MOUSEY <= 350) {
                    if (settingsScroll < 24.3 * a - 265) {
                        settingsScroll = constrain(settingsScroll + 5 * compensateFPS, -Infinity, 24.3 * a - 265);
                        stroke(200);
                    } else {
                        cursor('no-drop');
                    }
                }
                line(200, 345, 215, 340);
                line(200, 345, 185, 340);
                stroke(255);
                if (MOUSEY >= 50 && MOUSEY < 70) {
                    if (settingsScroll > 0) {
                        settingsScroll = constrain(settingsScroll - 5 * compensateFPS, 0, Infinity);
                        stroke(200);
                    } else {
                        cursor('no-drop');
                    }
                }
                line(200, 55, 215, 60);
                line(200, 55, 185, 60);
                noStroke();
                fill(0);
                rect(200, 25, 400, 50);
                rect(200, 375, 400, 50);
                fill(255);
                textFont(fonts.AgencyFB20);
                text("Back", 40, 25);
                textFont(fonts.AgencyFB25);
                text("INSTRUCTIONS", 200, 24.5);
                var a = textWidth("INSTRUCTIONS");
                stroke(255);
                strokeWeight(2);
                line(200 - a / 2, 10, 200 + a / 2, 10);
                line(200 - a / 2, 40, 200 + a / 2, 40);
                noStroke();
                fill(255, 50);
                if (inBox(MOUSEX, MOUSEY, 40, 25, 66, 40) && settingsSelected === "NONE") {
                    rect(40, 25, 66, 40);
                    cursor(HAND);
                }
            } else if (scene === "editGame") {
                background(30, 70, 110);
                drawImages(weathers2);
                fill(255, 50);
                rect(200, 200, 380, 280);
                fill(0);
                rect(200, 25, 400, 50);
                rect(200, 375, 400, 50);
                fill(255);
                textAlign(LEFT, CENTER);
                textFont(fonts.CalibriBold18);
                text("Game Mode:", 20, 110);
                text("Game Map:", 20, 170);
                text("Max Enemies:", 20, 260);
                text("Max Allies:", 20, 290);
                text("Crate Respawn Delay:", 20, 320);
                textAlign(CENTER, CENTER);
                text("Game Type", 200, 80);
                text("Game Settings", 200, 230);
                widths = [textWidth(gameModes[gameModes[gameModes.length - 1]]), textWidth(gameMaps[gameMaps[gameMaps.length - 1]]), textWidth(maxEnemies[maxEnemies[maxEnemies.length - 1]]), textWidth(maxTeammates[maxTeammates[maxTeammates.length - 1]]), textWidth(crateDelay[crateDelay[crateDelay.length - 1]])];
                text(gameModes[gameModes[gameModes.length - 1]], 365 - widths[0] / 2, 110);
                text(gameMaps[gameMaps[gameMaps.length - 1]], 365 - widths[1] / 2, 170);
                text(maxEnemies[maxEnemies[maxEnemies.length - 1]], 365 - widths[2] / 2, 260);
                text(maxTeammates[maxTeammates[maxTeammates.length - 1]], 365 - widths[3] / 2, 290);
                text(crateDelay[crateDelay[crateDelay.length - 1]], 365 - widths[4] / 2, 320);
                textFont(fonts.AgencyFB20);
                text("Back", 40, 25);
                text("Begin", 200, 375);
                fill(200);
                textFont(fonts.Calibri18Italics);
                text("\"" + gameDescriptions[gameModes[gameModes.length - 1]] + "\"", 200, 140);
                text("\"" + mapDescriptions[gameMaps[gameMaps.length - 1]] + "\"", 200, 200);
                fill(255);
                textFont(fonts.AgencyFB25);
                text("GAME SETTINGS", 200, 24.5);
                var a = textWidth("GAME SETTINGS");
                stroke(255);
                strokeWeight(2);
                line(200 - a / 2, 10, 200 + a / 2, 10);
                line(200 - a / 2, 40, 200 + a / 2, 40);
                line(380, 110, 375, 105);
                line(380, 110, 375, 115);
                line(350 - widths[0], 110, 355 - widths[0], 105);
                line(350 - widths[0], 110, 355 - widths[0], 115);
                line(380, 170, 375, 165);
                line(380, 170, 375, 175);
                line(350 - widths[1], 170, 355 - widths[1], 165);
                line(350 - widths[1], 170, 355 - widths[1], 175);
                line(380, 260, 375, 255);
                line(380, 260, 375, 265);
                line(350 - widths[2], 260, 355 - widths[2], 255);
                line(350 - widths[2], 260, 355 - widths[2], 265);
                line(380, 290, 375, 285);
                line(380, 290, 375, 295);
                line(350 - widths[3], 290, 355 - widths[3], 285);
                line(350 - widths[3], 290, 355 - widths[3], 295);
                line(380, 320, 375, 315);
                line(380, 320, 375, 325);
                line(350 - widths[4], 320, 355 - widths[4], 315);
                line(350 - widths[4], 320, 355 - widths[4], 325);
                noStroke();
                fill(255, 50);
                if (inBox(MOUSEX, MOUSEY, 40, 25, 66, 40)) {
                    rect(40, 25, 66, 40);
                    cursor(HAND);
                } else if (inBox(MOUSEX, MOUSEY, 200, 375, 66, 40)) {
                    rect(200, 375, 66, 40);
                    cursor(HAND);
                
                } else if (inBox(MOUSEX, MOUSEY, 377.5, 110, 15, 20)) {
                    cursor(HAND);
                    rect(377.5, 110, 15, 20);
                } else if (inBox(MOUSEX, MOUSEY, 377.5, 170, 15, 20)) {
                    cursor(HAND);
                    rect(377.5, 170, 15, 20);
                } else if (inBox(MOUSEX, MOUSEY, 377.5, 260, 15, 20)) {
                    cursor(HAND);
                    rect(377.5, 260, 15, 20);
                } else if (inBox(MOUSEX, MOUSEY, 377.5, 290, 15, 20)) {
                    cursor(HAND);
                    rect(377.5, 290, 15, 20);
                } else if (inBox(MOUSEX, MOUSEY, 377.5, 320, 15, 20)) {
                    cursor(HAND);
                    rect(377.5, 320, 15, 20);
                } else if (inBox(MOUSEX, MOUSEY, 352.5 - widths[0], 110, 15, 20)) {
                    cursor(HAND);
                    rect(352.5 - widths[0], 110, 15, 20);
                } else if (inBox(MOUSEX, MOUSEY, 352.5 - widths[1], 170, 15, 20)) {
                    cursor(HAND);
                    rect(352.5 - widths[1], 170, 15, 20);
                } else if (inBox(MOUSEX, MOUSEY, 352.5 - widths[2], 260, 15, 20)) {
                    cursor(HAND);
                    rect(352.5 - widths[2], 260, 15, 20);
                } else if (inBox(MOUSEX, MOUSEY, 352.5 - widths[3], 290, 15, 20)) {
                    cursor(HAND);
                    rect(352.5 - widths[3], 290, 15, 20);
                } else if (inBox(MOUSEX, MOUSEY, 352.5 - widths[4], 320, 15, 20)) {
                    cursor(HAND);
                    rect(352.5 - widths[4], 320, 15, 20);
                }
            }
            if (scene === "load" || scene === "loadSave" || scene === "loadmap") {
                loadScreenTime += compensateFPS;
                background(0);
                textFont(fonts.AgencyFB40);
                argonImagingCompany(100, 200, 1);
                argonGames(300, 200, 1);
                fill(200);
                textFont(fonts.CenturyGothic12);
                var a = "";
                if (loadScreenTime % 80 > 20 && loadScreenTime % 80 <= 40) {
                    a = ".";
                } else if (loadScreenTime % 80 > 40 && loadScreenTime % 80 <= 60) {
                    a = "..";
                } else if (loadScreenTime % 80 > 60 && loadScreenTime % 80 <= 80) {
                    a = "...";
                }
                text("loading" + a, 200, 385);
            }
            if (transition[0] && transition[1] < 255) {
                if (transition[3] === "Instant") {
                    transition[1] = 255;
                } else {
                    transition[1] += compensateFPS * transition[4];
                }
            }
            if (transition[0] && transition[1] >= 255) {
                transition[0] = false;
                orders.clear();
                for (var i = 0; i < levelEnds.length; i++) {
                    levelEnds[i].work();
                }
                if (transition[3] === "Fade") {
                    transition[1] = 254.9;
                } else {
                    transition[1] = 0;
                    transition[3] = "Fade";
                }
            }
            if (!transition[0]) {
                transition[1] = constrain(transition[1] - compensateFPS * transition[4] / 3, 0, 255);
            }
            fill(0, transition[1]);
            rect(200, 200, 400, 400);
            endCinematic = false;
        }
    } catch (e) {
        for(var i in e) {
            println(i + ": " + e[i]);
        }
        noLoop();
    }
    popMatrix();
};
//} END "DRAW CODE"
}};
// Get the canvas that ProcessingJS will use
var canvas = document.getElementById("mycanvas"); 
// Pass the function to ProcessingJS constructor
var processingInstance = new Processing(canvas, programCode);
