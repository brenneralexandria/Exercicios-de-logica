var ano = 1004;

while (ano <= 2017) {
    
    if( !(ano % 100 === 0) || (ano % 400 === 0)) {
       console.log(ano);
    } else {
        console.log(ano + "não é bissexto");
    }
    ano += 4;
}