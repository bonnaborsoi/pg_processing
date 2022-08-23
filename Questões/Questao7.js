//eixo x em verde
//eixo y em azul
//eixo z em vermelho
let t = 0;
let tempoTransform = 0;

function setup() {
  createCanvas(720, 400, WEBGL);
  angleMode(DEGREES)
  frameRate(60);
  
}

function draw() {
  background(220);
  t += deltaTime/1000; // Conta o tempo decorrido em segundos
  push()
  stroke('blue')
  cylinder(1,1000); //eixo y
  pop()
   
  //camera(0, 1800, 270, 0, 0, 270, 0, 0, -1)
  
  //camera(-1200, 0, 0, 0, 0, 0, 0, 0, -1)
  
  camera(-900+10*t, 300-75*t, 500, 0, 0, 200, 0, 0, -1)
  
  push()
  applyMatrix(1, 0, 0, 0, 0, cos(90), sin(90), 0, 0, -sin(90), cos(90), 0,   0, 0, 0, 1)
  stroke('red');
  cylinder(1,1000); //eixo z
  pop()
  
  push()
  applyMatrix(cos(90), sin(90), 0, 0, 
              -sin(90), cos(90), 0, 0, 0, 0, 1, 0,
              0, 0, 0, 1)
  stroke('green');
  cylinder(1,1000); //eixo x
  pop()
  
  /*
  push()
    applyMatrix(1,0,0,0, 0,1,0,0, 0,0,1,0, 400,100,0,1) //translate(400,100,0) 
    sphere(20); //A
  pop()
  push()
    applyMatrix(1,0,0,0, 0,1,0,0, 0,0,1,0, -100,50/3,500,1) //translate(-100,50/3,500)  
    sphere(20); //B
  pop()
  push()
    applyMatrix(1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,600,1) //translate(0,0,600)
    //translate(0,0,600); 
    sphere(20); //C
  pop()
  push()
    applyMatrix(1,0,0,0, 0,1,0,0, 0,0,1,0, 100,-50/3,500,1) // translate(100,-50/3,500); //D
    sphere(20);
  pop()
  push()
    applyMatrix(1,0,0,0, 0,1,0,0, 0,0,1,0, -400,-100,0,1) // translate(-400,-100,0); 
    sphere(20) //E
  pop()
  */
  
  
  if (t<3){
    push()
    tempoTransform = t;
    
    applyMatrix(1,0,0,0, 0,1,0,0, 0,0,1,0, 400,100,500,1) // translate(400,100,500); Botar origem acima do ponto A
    
    applyMatrix(1, 0, 0, 0, 
              0, 1, 0, 0, 0, 0, 1, 0,
              0, (-250/9)*t, 0, 1)
    
    applyMatrix(cos(30*t), 0, -sin(30*t), 0, 
              0, 1, 0, 0, sin(30*t), 0, cos(30*t), 0,
              0, 0, 0, 1)
  
    push()
    applyMatrix(1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,-500,1) // translate(0,0,-500); Botar origem no ponto A
    sphere(20);
    pop()
    pop()
  }
  if (t>=3 && t<5){
    tempoTransform = t - 3
    push()
    applyMatrix(1,0,0,0, 0,1,0,0, 0,0,1,0, 0,50/3,500,1) // translate(0,50/3,500); Botar origem um pouco antes de B
    
    applyMatrix(1, 0, 0, 0, 
              0, 1, 0, 0, 0, 0, 1, 0,
              0, (-100/6)*tempoTransform, 0, 1)
    
    applyMatrix(cos(90*tempoTransform), 0, -sin(90*tempoTransform), 0, 
              0, 1, 0, 0, sin(90*tempoTransform), 0, cos(90*tempoTransform), 0,
              0, 0, 0, 1)
    
    push()
    applyMatrix(1,0,0,0, 0,1,0,0, 0,0,1,0, 0,-50/3,-500,1) // translate(0,-50/3,-500)
    applyMatrix(1,0,0,0, 0,1,0,0, 0,0,1,0, -100,50/3,500,1) // translate(-100,50/3,500)
    sphere(20);
    pop()
    pop()
  }
  if (t>=5 && t<8){
    tempoTransform = t - 5
    push()
    
    applyMatrix(1,0,0,0, 0,1,0,0, 0,0,1,0, -400,-100,500,1) // translate(-400,-100,500)
    
    applyMatrix(1, 0, 0, 0, 
              0, 1, 0, 0, 0, 0, 1, 0,
              0, (-250/9)*tempoTransform, 0, 1)
    
    applyMatrix(cos(30*tempoTransform), 0, -sin(30*tempoTransform), 0, 
              0, 1, 0, 0, sin(30*tempoTransform), 0, cos(30*tempoTransform), 0,
              0, 0, 0, 1)
    
    push()
    applyMatrix(1,0,0,0, 0,1,0,0, 0,0,1,0, 400,+100,-500,1) // translate(400,+100,-500)
    applyMatrix(1,0,0,0, 0,1,0,0, 0,0,1,0, 100,-50/3,500,1) // translate(100,-50/3,500)
    sphere(20)
    pop()
    pop()
  }
  if(t>=8){
    applyMatrix(1,0,0,0, 0,1,0,0, 0,0,1,0, -400,-100,0,1) // translate(-400,-100,0)
    sphere(20)
    //noLoop()
    t = 0;
  }
  
}
