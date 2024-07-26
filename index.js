let leonardo = window.document.getElementById("leonardo");
let samantha = window.document.getElementById("samantha");
let bruna = window.document.getElementById("bruna");

let setaDireita = window.document.getElementById("setaDireita");
let setaEsquerda = window.document.getElementById("setaEsquerda");

function irParaDireita(){
    leonardo.style = "display: none";
    bruna.style = "display: flex";
    setaEsquerda.style = "display: flex; margin-top: 55px;";
    setaDireita.style = "display: none";
}

function irParaEsquerda(){
    leonardo.style = "display: flex";
    bruna.style = "display: none";
    setaEsquerda.style   = "display: none";
    setaDireita.style = "display: flex; margin-top: 55px;";
}