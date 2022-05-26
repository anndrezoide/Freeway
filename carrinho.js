var tela = document.getElementById("tela"); // Cria tela canvas 
var c = tela.getContext("2d");             // Cria "Pincel" canvas

//Função que mostra os elementos na tela
function atualizaTela(){ 
    mostraEstrada();
    mostraAtor();

    mostraCarro();
    mostraCarro2();
    mostraCarro3();
    mostraCarro4();
    mostraCarro5();
    mostraCarro6();

    movimentaCarro();
    voltaPosicao();
    verificaColisao();
    
}

setInterval(atualizaTela, 20);











