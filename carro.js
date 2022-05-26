
// Variaveis do carro
let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 95, 150, 210, 270, 318];
let velocidadeCarros = [3, 4, 5.5, 6.5, 2.5, 4.7];
let comprimentoCarro = 45;
let alturaCarro = 40;

//Criação dos carros atraves das imgaens 'carro 1,2 e 3'.
function mostraCarro(){
  carro1.src = "img/carro-1.png";
  carro1.onload = function(){
      c.drawImage(carro1, xCarros[0], yCarros[0], comprimentoCarro, alturaCarro);
  }
}

function mostraCarro2(){
  carro2.src = "img/carro-2.png";
  carro2.onload = function(){
      c.drawImage(carro2, xCarros[1], yCarros[1], comprimentoCarro, alturaCarro);
  }
}

function mostraCarro3(){
  carro3.src = "img/carro-3.png";
  carro3.onload = function(){
      c.drawImage(carro3, xCarros[2], yCarros[2], comprimentoCarro, alturaCarro);
  }
}

function mostraCarro4(){
  carro4.src = "img/carro-1.png";
  carro4.onload = function(){
      c.drawImage(carro4, xCarros[3], yCarros[3], comprimentoCarro, alturaCarro);
  }
}

function mostraCarro5(){
  carro5.src = "img/carro-2.png";
  carro5.onload = function(){
      c.drawImage(carro5, xCarros[4], yCarros[4], comprimentoCarro, alturaCarro);
  }
}

function mostraCarro6(){
  carro6.src = "img/carro-3.png";
  carro6.onload = function(){
      c.drawImage(carro6, xCarros[5], yCarros[5], comprimentoCarro, alturaCarro);
  }
}

//Função que da movimento aos carros.
function movimentaCarro(){
  for(var i = 0; i < xCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

//Função que retorna os carros para posição inical da tela.
function voltaPosicao(){
  for(var i = 0; i < xCarros.length; i++){
    if(passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

//Verifica se o carro inteiro ja passou da tela para voltar a posição inicial acima.
function passouTodaATela(xCarros){
  return xCarros < -50;
}