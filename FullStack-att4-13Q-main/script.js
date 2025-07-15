/* 1 - mensagem boas vindas */
let boasVindas = "Bem-vinda ao site";
    console.log(boasVindas);

/* 2 - Nome */
let nome = "Júlia";
    console.log(`Olá, ${nome}`);

/* 3 - alert nome */
let nome2 = "Júlia";
    alert(`Olá, ${nome2}!`);

/* 4 - Qual a linguagem de programação que você mais gosta? */
let pergunta = prompt("Qual a linguagem de programação que você mais gosta?");
    console.log(pergunta);

/* 5 Valores*/
let valor1 = 5;
let valor2 = 8;
let resultado = (valor1 + valor2) ;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

/* 6 - Valores */

let valor3 = 6;
let valor4 = 4;
let resultado2 = valor3 - valor4;
console.log(`A diferença entre ${valor3} e ${valor4} é igual a ${resultado2}.`);

/* 7 - Idade */
let idade = prompt("Digite sua idade");
    if(idade >= 18){
        console.log("Você é maior de idade.");
    }else{
        console.log("Você é menor de idade.");
    }

/* 8 -  */
let numero = prompt("Digite um número");
    if(numero > 0){
        console.log("seu numero é positivo");
    }else{
        console.log("seu numero é negativo");
}

/* 9 - contagem progressiva */
let contador = 1;
while(contador <= 10){
    console.log(`contagem progressiva : ${contador}`);
    contador++
}

/* 10 - Nota */
let nota = 8;
if (nota >= 7){
    console.log("Aprovado");
}else{
       console.log("Reprovado");
}

/* 11 - Math.random */
console.log( parseInt(Math.random()));

/* 12 - Math.random*/

console.log( parseInt(Math.random() * 10));

/* 13 - Math.random */

console.log( parseInt(Math.random() * 100));