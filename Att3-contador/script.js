/* alert("Bem-vindas (os) ao jogo do número secreto");
let numeroSecreto = parseInt(Math.random() * 10 + 1);
console.log(numeroSecreto)
let chute
let tentativas = 1;

// se a variável chute for igual ao número secreto
// While = enquanto
while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10');
    if (chute == numeroSecreto) {
        break;
} else {
    if(chute > numeroSecreto){
        alert(`O número secreto é menor que ${chute}`);
    } else{
        alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
}
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`); */

/*Soma de 1 até 10  */
let contador1 = 1;
while (contador1 <= 10) {
  alert(`Contagem progressiva : ${contador1}`);
  contador1++; 
}
/*Soma de 10 até 0  */
let contador2 = 10;
while (contador2 >= 0) {
  alert(` Contagem regressiva : ${contador2}`);
  contador2--; 
}

/*Contagem regressiva  */
let numero1 = prompt("Digite um número para começar a contagem regressiva:");

while (numero1 >= 0) {
  alert(`Contagem regressiva : ${numero1}`);
  numero1--;
}

/*Contagem progressiva  */
let numero = prompt("Digite um número para começar a contagem progressiva:");
let contador = "0";

while (contador <= numero) {
  alert(`contagem progressiva : ${contador}`);
  contador++;
}


