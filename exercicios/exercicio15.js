function AreaTotal () {

    var largura = prompt("Digite a largura")
    largura = parseFloat(largura);

    var altura = prompt("Digite a altura");
    altura = parseFloat(altura);

    var area = CalcularArea(largura, altura);

    document.querySelector('#output').innerHTML = "A área total é: " + area;

}

function MostrarAlert () {

    var largura = prompt("Digite a largura")
    largura = parseFloat(largura);

    var altura = prompt("Digite a altura");
    altura = parseFloat(altura);

    var area = CalcularArea(largura, altura);

    alert("A área total é: " + area);
}

function CalcularArea(l, a) {
    return l * a;
}