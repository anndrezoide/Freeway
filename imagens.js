//Criando os objetos imagem para animação.

var estrada = new Image();
var ator = new Image();
var carro1 = new Image();
var carro2 = new Image();
var carro3 = new Image();
var carro4 = new Image();
var carro5 = new Image();
var carro6 = new Image();

//Criando a estrada atraves da imagem 'estrada';
function mostraEstrada() {
  estrada.src = "img/estrada.png";
  estrada.onload = function() {
    c.drawImage(estrada, 0, 0, 600, 400);
  }
}





