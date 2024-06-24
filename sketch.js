let palavra;

function setup() {
  createCanvas(400, 400);
  palavra = palavraAleatoria()
  
}

function palavraAleatoria() {
  let palavras = ["Caminhão", "Cama", "Caminha", "ceú"];
  return random(palavras);
}
function inicializaCores(){
  background("red");
  fill("black");
  textSize(64);
  textAlign(CENTER, CENTER);

}
function palavraParcial(minimo, maximo){
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw(){
  inicializaCores();
  let maximo = width;
  let minimo = 0;
  let parcial = palavraParcial(0, width);
  text(parcial, 200, 200);
}