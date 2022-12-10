// Para acessar os documentos do HTML usamos document. 
// E o quarySelector vai me trazer uma referencia do id output.
var output = document.querySelector('#output');

var mensagem = '';

for(var i = 0; i <= 1000; i++) {
    mensagem += 'i: ' + i + '<br>'; 
}
// Para adicionar valor ao elemento por Js.
output.innerHTML = mensagem;
