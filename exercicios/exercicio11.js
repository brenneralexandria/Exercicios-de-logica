function MostrarTabuada() {

    var n1 = prompt("Qual tabuada você quer?")
    n1 = parseInt(n1);

    var mensagem = '';

    for(var i = 1; i <= 10; i++) {
        mensagem += n1 + "x" + i + "= " + (n1*i) + "<br>";
        LimparTabuada();
    }
        output.innerHTML = mensagem;
}

function LimparTabuada() {
    mensagem = '';
    output.innerHTML = mensagem;
}    