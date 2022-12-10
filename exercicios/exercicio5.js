var n1 = prompt("Jogador 1 digite um número");
n1 = parseFloat(n1);

var n2 = prompt("Jogador 2 digite outro número");
n2 = parseFloat(n2);

if(n1 === n2) {
    alert("Empate");
} else {
    var sorteio = parseInt(Math.random() * 2);

    if(sorteio == 0) {
        if(n1 < n2) {
            alert("Jogador 1 ganhou");
    } else {
         alert("Jogador 2 ganhou");
        }
    } else {
        if(n1 > n2) {
            alert("Jogador 1 ganhou");
        } else {
            alert("Jogador 2 ganhou");
        } 
    }
}        