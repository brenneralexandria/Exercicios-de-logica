 var n2 = prompt("Digite um número");
    n2 = parseFloat(n2);
    escreva(n2);

function iniciarCalculo(simbolo) {
    var n1 = document.querySelector("#output").textContent;
    n1 = parseFloat(n1);

    var n2 = prompt("Digite outro número");
    n2 = parseFloat(n2);

    var msg = calcular(simbolo, n1, n2);

    escreva(msg);
}

function escreva(mensagem) {
    var output = 
    document.querySelector('#output');
    output.innerHTML = mensagem;
}

function calcular(simbolo, n1, n2) {

    var numeroCalculado = null;
   
        switch(simbolo) {
            case '+':
                numeroCalculado = n1 + n2;
                break;
            case '-':
                numeroCalculado = n1 - n2;
                break;
            case '*':
                numeroCalculado = n1 * n2;
                break;
            case '/': 
                numeroCalculado = n1 / n2;  
        } 

        return numeroCalculado;
}