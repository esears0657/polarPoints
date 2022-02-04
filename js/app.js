
function setup() {
  createCanvas(900, 800);
}

function polarPoint(r){
  var x = r*Math.sin(mouseX);
  var y = r*Math.cos(mouseX);

  return createVector(x,y);
}

function draw(){
  
  var res = polarPoint();
  translate(100,100);
  background(150);
  circle(res.x, res.y, 10)
  console.log(res)
}
