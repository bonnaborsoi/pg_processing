// As translações não são cumulativas já que estão dentro dos ifs

let circlex = -20;
let circley = 0;

function setup() {
  createCanvas(720, 400);
}

function draw() {
  angleMode(DEGREES);
  frameRate(30);
  
  let t = millis()/1000; // Conta o tempo decorrido em segundos
  
  // Translação que traz a origem pro ponto (360,200)
  applyMatrix(1, 0, 0,
              1, 360, 200);

  // Desenho dos eixos x e y
  strokeWeight(1);
  stroke('green');
  line(0, -200, 0, 200);
  
  stroke('red');
  line(-360, 0, 360, 0);

  // Primeiro semi-círculo
  if (t <= 4){
    
  // Rotação 
  applyMatrix(
    cos((180/4)*t), -sin((180/4)*t),
    sin((180/4)*t), cos((180/4)*t),
    0,0);
  
  // Ponto inicial da trajetória (-20,0) e o raio é 20
  strokeWeight(2);
  point(circlex,circley);
  }
  
  // Segundo semi-círculo
  if (t > 4 && t <= 8){
    t = t - 4; //// COMENTARRRR
    
    // Translação (a nova origem é o ponto de partida do semi-círculo anterior)
    applyMatrix(1, 0, 0,
              1, -20, 0);
    
    // Rotação 
    applyMatrix(
    cos((180/4)*t), -sin((180/4)*t),
    sin((180/4)*t), cos((180/4)*t),
    0,0); 
    
    circlex = 40; // O raio é dobrado (20 * 2)
    strokeWeight(2);
    point(circlex,circley)
  }
  
  // Terceiro semi-círculo
  if (t > 8 && t <= 12){
    t= t - 8;
    
    // Translação em relação ao eixo original (360,200)
    applyMatrix(1, 0, 0,
              1, 20, 0);

    // Rotação 
    applyMatrix(
    cos((180/4)*t), -sin((180/4)*t),
    sin((180/4)*t), cos((180/4)*t),
    0,0); 
    
    circlex = -80; // O raio é dobrado (40 * 2)
    strokeWeight(2);
    point(circlex,circley)
  }
  
  // Quarto semi-círculo
  if (t > 12 && t <= 16){
    t = t - 12;
    
    // Translação em relação ao eixo original (360,200) 
    applyMatrix(1, 0, 0,
              1, -60, 0);

    // Rotação
    applyMatrix(
    cos((180/4)*t), -sin((180/4)*t),
    sin((180/4)*t), cos((180/4)*t),
    0,0); 
    
    circlex = 160; // O raio é dobrado (80 * 2)
    strokeWeight(2);
    point(circlex,circley)
  }
  
  // Quinto semi-círculo
  if (t > 16 && t <= 18){
    t = t - 16;
    
    // Translação em relação ao eixo original (360,200) 
    applyMatrix(1, 0, 0,
              1, 100, 0);
    
    // Rotação
    applyMatrix(
    cos((180/4)*t), -sin((180/4)*t),
    sin((180/4)*t), cos((180/4)*t),
    0,0); 
    
    circlex = -320; // O raio é dobrado (160 * 2)
    strokeWeight(2);
    point(circlex,circley)
  } 
}
