// As translações não são cumulativas já que estão dentro dos ifs

let circlex;
let circley;

let t = 0; // Tempo
let tempoTransf = 0; // Tempo decorrido do início de cada transformação

function setup() {
  createCanvas(720, 400);
}

function draw() {
  angleMode(DEGREES);
  frameRate(30);
  
  t += deltaTime/1000; // Conta o tempo decorrido em segundos
  
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
    tempoTransf = t;
    circlex = -20;
    circley = 0;
    
    // Rotação 
    applyMatrix(
    cos((180/4)*tempoTransf), -sin((180/4)*tempoTransf),
    sin((180/4)*tempoTransf), cos((180/4)*tempoTransf),
    0,0);
  
    // Ponto inicial da trajetória (-20,0) e o raio é 20
    strokeWeight(2);
    point(circlex,circley);
  }
  
  // Segundo semi-círculo
  if (t > 4 && t <= 8){
    tempoTransf = t - 4; // Para o cálculo da rotação por segundo
    
    // Translação (a nova origem é o ponto de partida do semi-círculo anterior)
    applyMatrix(1, 0, 0,
              1, -20, 0);
    
    // Rotação 
    applyMatrix(
    cos((180/4)*tempoTransf), -sin((180/4)*tempoTransf),
    sin((180/4)*tempoTransf), cos((180/4)*tempoTransf),
    0,0); 
    
    circlex = 40; // O raio é dobrado (20 * 2)
    strokeWeight(2);
    point(circlex,circley)
  }
  
  // Terceiro semi-círculo
  if (t > 8 && t <= 12){
    tempoTransf = t - 8;
    
    // Translação em relação ao eixo original (360,200)
    applyMatrix(1, 0, 0,
              1, 20, 0);

    // Rotação 
    applyMatrix(
    cos((180/4)*tempoTransf), -sin((180/4)*tempoTransf),
    sin((180/4)*tempoTransf), cos((180/4)*tempoTransf),
    0,0); 
    
    circlex = -80; // O raio é dobrado (40 * 2)
    strokeWeight(2);
    point(circlex,circley)
  }
  
  // Quarto semi-círculo
  if (t > 12 && t <= 16){
    tempoTransf = t - 12;
    
    // Translação em relação ao eixo original (360,200) 
    applyMatrix(1, 0, 0,
              1, -60, 0);

    // Rotação
    applyMatrix(
    cos((180/4)*tempoTransf), -sin((180/4)*tempoTransf),
    sin((180/4)*tempoTransf), cos((180/4)*tempoTransf),
    0,0); 
    
    circlex = 160; // O raio é dobrado (80 * 2)
    strokeWeight(2);
    point(circlex,circley)
  }
  
  // Quinto semi-círculo
  if (t > 16 && t <= 17){
    tempoTransf = t - 16;
    
    // Translação em relação ao eixo original (360,200) 
    applyMatrix(1, 0, 0,
              1, 100, 0);
    
    // Rotação
    applyMatrix(
    cos((180/4)*tempoTransf), -sin((180/4)*tempoTransf),
    sin((180/4)*tempoTransf), cos((180/4)*tempoTransf),
    0,0); 
    
    circlex = -320; // O raio é dobrado (160 * 2)
    strokeWeight(2);
    point(circlex,circley)
  }
  
  // Loop
  if (t > 17){
    background(255);
    t = 0; 
  }
}
