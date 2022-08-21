// Pontos
let xjoint1, yjoint1; // Ombro
let xjoint2, yjoint2; // Cotovelo
let xjoint3, yjoint3; // Punho

let frames = 0;

function setup() {
  createCanvas(720, 400);
  frameRate(30);
  
  // Define os pontos (em relação à origem comentado ao lado)
  xjoint1 = 0; // 360
  yjoint1 = 0; // 100

  xjoint2 = 0; // 360
  yjoint2 = 100; // 200

  xjoint3 = 0; // 360
  yjoint3 = 150; // 350
}

function draw() {
  background('rgb(165,129,221)')
  angleMode(DEGREES); // Ângulos em graus
  const t = millis()/1000; // Conta o tempo decorrido em segundos

  strokeWeight(4); // Espessura das linhas
  
  // Translação para o ponto x1,y1 (Que era 360,100 em relação à origem inicial)
  applyMatrix(1, 0, 0,
              1, 360, 100);
  yjoint2 = 100;
    
  // Rotação do braço (45 graus)
  applyMatrix(
  cos((45/2)*t), -sin((45/2)*t),
  sin((45/2)*t), cos((45/2)*t),
  0,0);
    
  line(xjoint1,yjoint1,xjoint2,yjoint2); // Braço
    
  push();
  strokeWeight(10);
  point(xjoint1,yjoint1) // Ombro
  pop();
    
  // Translação pro ponto x2,y2 (Que era 360,200 em relação à origem inicial)
  applyMatrix(1, 0, 0,
              1, 0, 100);
    
  yjoint2 = 0; // 200 em relação à origem inicial
    
  // Rotação do antebraço: pega as duas rotações (90/2)
  applyMatrix(
  cos((45/2)*t), -sin((45/2)*t),
  sin((45/2)*t), cos((45/2)*t),
  0,0); 
    
  line(xjoint2,yjoint2,xjoint3,yjoint3); // Antebraço
    
  strokeWeight(10);
  point(xjoint2,yjoint2) // Cotovelo
  point(xjoint3,yjoint3) // Punho
  
  // Stop
  if (t >= 2){
    noLoop();
  }
}
