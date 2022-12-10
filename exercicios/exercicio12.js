var n1 = prompt("Digite um número");
    n1 = parseFloat(n1);
    escreva();

function escreva() {
    var output = document.querySelector('#output');
    output.innerHTML = n1;
}

function Soma() {
   var n2 = prompt("Digite outro número");
   n2 = parseFloat(n2);
   
   n1 = n1 + n2;
   escreva();
}

function Sub() {
    var n2 = prompt("Digite outro número");
    n2 = parseFloat(n2);
    
    n1 = n1 - n2;
    escreva();
}

function Mult() {
    var n2 = prompt("Digite outro número");
    n2 = parseFloat(n2);
    
    n1 = n1 * n2;
    escreva();
}

function Divi() {
    var n2 = prompt("Digite outro número");
    n2 = parseFloat(n2);
    
    n1 = n1 / n2;
    escreva();
}