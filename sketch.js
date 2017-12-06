var mic;
var snow = []

function preload() {
    santahead = loadImage('assets/testa.png');
    santabody = loadImage('assets/corpo.png');
    santahandsx = loadImage('assets/bracciosx.png');
    santahanddx = loadImage('assets/bracciodx.png');
    santalegs = loadImage('assets/gambe.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

    mic = new p5.AudioIn();
  mic.start();
    
    angleMode(DEGREES);
}


function draw() {
    background(0,0,139);
   if(width>height){
    d=height;
  }
  else {
  d=width;
  }
    
    //ellipse(windowWidth/2, windowHeight/2,d,d);
    var volume = mic.getLevel();
    
    push()
    translate(width/2,height/3);
  noStroke();
    //albero1
    fill(50,205,50);
    triangle(width/6-width/7, height/6+2*height/10, -width/7,2*height/10, -width/6-width/7, height/6+2*height/10);
    fill(0,128,0);
    triangle(width/6-width/7, height/6+height/10, -width/7,height/10, -width/6-width/7, height/6+height/10);
    fill(0,100,0);
    triangle(width/6-width/7, height/6, -width/7,0, -width/6-width/7, height/6);
 
    //albero2
    push()
    translate(width/4,height/3);
    fill(50,205,50);
    triangle(width/6-width/7, height/6+2*height/10, -width/7,2*height/10, -width/6-width/7, height/6+2*height/10);
    fill(0,128,0);
    triangle(width/6-width/7, height/6+height/10, -width/7,height/10, -width/6-width/7, height/6+height/10);
    fill(0,100,0);
    triangle(width/6-width/7, height/6, -width/7,0, -width/6-width/7, height/6);
    pop();
    
    
    fill(255);
    rect(-width/2,height/3,width,height);
    pop();
    
    //babbo natale
    var a=map(volume,0,1,0,200);
    push()
   translate(0,a);
    //riempimento buco
 push()
    translate(width/2,height/2);
  imageMode(CENTER);
    fill('red');
    noStroke();
    ellipse(0,0,d/7,d/7);
    pop();
   
    //braccia
    push();
    imageMode(CENTER);
    translate(width/2,height/2);
    var r=map(volume,0,1,0,500);
  rotate(r);
    //rotate(-angolo*10);
    image(santahandsx,width/200,0,d/3,d/3);
pop();
     
    
    push();
    imageMode(CENTER);
    translate(width/2,height/2);
    var r=map(volume,0,1,0,500);
  rotate(-r);
     image(santahanddx,-width/200,0,d/3,d/3);
    pop();
    
    //gambe
    push()
    imageMode(CENTER);
    translate(width/2,height/2);
    
    image(santalegs,0,0,d/3,d/3);
    pop();
    
    //corpo
    push()
    translate(width/2,height/2);
  imageMode(CENTER);
    image(santabody,0,0,d/3,d/3);
    pop();
    
    //testa
    push()
 translate(width/2,height/2);
  imageMode(CENTER);
  var r=map(volume,0,1,0,60);
  rotate(r);
 image(santahead,0,0,d/3,d/3);
    pop();  
    
    //naso
    push()
    translate(width/2,height/2);
  imageMode(CENTER);
    noStroke();
    if(volume=>0.2){
        fill(76,28,36);
        ellipse(0,-d/15,d/30,d/50);
    }else {
        fill(255,0,0);
        ellipse(0,-d/15,d/30,d/50);
    }
    
    //ellipse(0,-d/15,d/30,d/50);
    

    pop();
    
    
pop();
    
    
//neve 
    var value= map(volume,0,1,0,40);
    for(i=1; i <= value; i++) {
      var obj = {
        x: random(),
        y: random(0,-windowHeight/5),
        size: random(1, value)
      }
      snow.push(obj);
    }
  
   for(var i=0; i< snow.length; i++) {
    var fall = 1;
    snow[i].y += fall; 
    
    noStroke();
    fill(255,255,255,random(50,100));
    ellipse(snow[i].x*width, snow[i].y, snow[i].size);
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}