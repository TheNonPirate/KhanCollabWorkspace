var canvas = document.getElementById("canvas");                                                                                                                                                                                                                                                                         
var processing = new Processing(canvas, function(processing) {
    processing.size(600, 600);
    processing.background(0,0,0,0);
    processing.sbShow = false;

    var mouseIsPressed = false;
    $(".container").on("mousedown touchstart", function(e) {
        mouseIsPressed = true;
        processing.mouseX = e.pageX;
        processing.mouseY = e.pageY;
        processing.sbShow = false;
    }).on("mouseup touchend", function(e) {
        mouseIsPressed = false;
        processing.mouseX = e.pageX;
        processing.mouseY = e.pageY;
    }).on("mousemove touchmove", function(e) {
        processing.mouseX = e.pageX;
        processing.mouseY = e.pageY;
    });
    processing.mousePressed = function () { mouseIsPressed = true; };
    processing.mouseReleased = function () { mouseIsPressed = false; };

    var rotateFn = processing.rotate;
    processing.rotate = function(angle) {
        rotateFn(processing.radians(angle));
    }
    var theRot = 0;
    var draw = function(){
      background(255);
      pushMatrix();
      translate(200, 200);
      rotate(theRot);
      theRot = atan2(200 - mouseY, 200 - mouseX);
      rectMode(CENTER);
      rect(0, 0, 50, 50);
      popMatrix();
    };
});
