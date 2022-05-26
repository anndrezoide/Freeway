//Variaveis do ator
var xAtor = 100;
var yAtor = 370;

let meusPontos = 0;

//Cria ator atraves da imagem 'Ator';
function mostraAtor(){
  ator.src = "img/ator-1.png";
  ator.onload = function(){
      c.drawImage(ator, xAtor, yAtor, 25, 25);
      console.log(yAtor);

      if(yAtor <= 10){
        meusPontos++;
        yAtor = 370;
      }
      if(yAtor >= 370){
        yAtor = 370;
      }
  }
}

//Evento para disparo das teclas, 'setaCima' e 'setaBaixo'
document.addEventListener("keydown", function(event){
    console.log(event.key);
    if(event.key == "ArrowUp"){
        yAtor -= 8;
    }
    if(event.key == "ArrowDown"){
        yAtor += 8;
    }

});


// Função que verifica a colisão do ator com os carros em movimento.
function verificaColisao(){
  for(let i = 0; i < xCarros.length; i++){
    if((xCarros[i] > xAtor - 36.5)
      && (xCarros[i] < xAtor + 36.5)
      && (yCarros[i] > yAtor - 36.5)
      && (yCarros[i] < yAtor + 36.5)){
        yAtor=370;
        meusPontos--;
        if(meusPontos < 0){
          meusPontos = 0;
        }
    }
  }
} 

//Função para contagem de pontos.
function incluiPontos(){
  c.fillStyle = "black";
  c.font = "bold 32px arial";
  c.fillText("Pontos: ", 150, 28);
  c.fillText(meusPontos, 280, 30);
  c.fill();
}

setInterval(incluiPontos, 0.01);


