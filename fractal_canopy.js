var angle = 0;
var slider_angle;
var slider_len;
var slider_multiplier;

function setup() {
  createCanvas(windowWidth, windowHeight-4);
  
  // Angle Slider
  label_angle = createDiv('Branch Angle');
  label_angle.position(30, 30);
  label_angle.style('color', '#fff');
  slider_angle = createSlider(0, TWO_PI, PI*1.9, 0.01);
  slider_angle.parent(label_angle);
  
  // Length Slider
  label_len = createDiv('Branch Length');
  label_len.position(30, 60);
  label_len.style('color', '#fff');
  slider_len = createSlider(0, 200, 100, 1);
  slider_len.parent(label_len);
  
  //Multiplier Slider
  label_multiples = createDiv('No. of Branches');
  label_multiples.position(30, 90);
  label_multiples.style('color', '#fff');
  slider_multiplier = createSlider(0.4, 0.8, 0.75, 0.01);
  slider_multiplier.parent(label_multiples);
}

function draw() {
  //Background setup
  background(0);  
  stroke(255);
  
  //Translating to make the root of tree as 0,0
  translate(width/2, height);
  
  //Intiating Recurssion
  branch(slider_len.value(), slider_multiplier.value());
}

function branch(len, multiplier){
  angle= slider_angle.value();
  
  //Dynamic strokeWeight based on length of the branch
  strokeWeight(0.5+len/30);
  
  //Drawing the branch based in length
  line(0, 0, 0, -len);
  
  //Again translating to make the ending point of drawn branch as 0,0
  translate(0, -len); 
  
  //Condition added to end recurssion
  if(len>slider_len.value()/25){
    
    //Coloring the outer branches red
    if(len<10){
      stroke('red');
    }
    
    //rememebering this point to come back at this for diversion
    push();
    
    //Drawing branch on right side
    rotate(angle); 
    branch(len*multiplier, multiplier);
    
    //Coming back to the push point to start drawing the left side branches
    pop();
    
    //Drawing branch on left side
    rotate(-angle);
    branch(len*multiplier, multiplier);      
  }
}
