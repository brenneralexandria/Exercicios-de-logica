var n1 = prompt("Qual tabuada você quer?")
n1 = parseInt(n1);

var i = 1;

while(i <= 10) {
    console.log(n1 + "x" + i + " = " + (n1 * i));

    // caso eu queira colocar uma linha separando de 10 em 10.
    if(i % 10 === 0) {
        console.log("<hr>");
    }
    
    i++;
}
console.log("A tabuada do " + n1 + " acabou");