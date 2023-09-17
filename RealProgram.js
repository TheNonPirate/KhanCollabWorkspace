var programCode = function(processingInstance) {
    
    with (processingInstance) {
      size(600, 600); 
      frameRate(60);
        background(255, 0, 0);

}};

  // Get the canvas that ProcessingJS will use
  var canvas = document.getElementById("mycanvas"); 
  // Pass the function to ProcessingJS constructor
  var processingInstance = new Processing(canvas, programCode);
