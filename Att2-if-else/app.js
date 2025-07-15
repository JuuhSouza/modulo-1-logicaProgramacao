
/* aula alura Jogo do numero */
/* alert('Bem vindo ao jogo secreto');
let numeroSecreto = 2;
console.log(numeroSecreto)
let chute = prompt('escolha um numero entre 1 e 100');

if (chute == numeroSecreto){
    alert(`Isso ai! você acertou o número secreto ${numeroSecreto}`);
}else{
    alert('você errou :(')
} */

/* DESAFIO */
/* 1 - Dia da semana */
let semana = prompt ('Qual é o dia da semana?');
if (semana == "sabado" || semana == "domingo"){
    alert('Bom fim de semana');
}else{
    alert('Boa semana');
}

/* 2 - numeros negativos ou positivos */
let numeros = prompt('Digite um numero, que lhe falarei se é negativo ou positivo.')
if(numeros < 0){
    alert('Este número é negativo')
}else{
   alert('Este numero é positivo')
}

/* 3- Jogo do numero */
let numero = prompt('Digite sua pontuação');
if (numero >= 100){
    alert("Parabéns, você venceu!");
}
 else{
    alert("Tente novamente para ganhar.");
}

/* 4 - Saldo*/
let senhaLog = 123456;
console.log(senhaLog)
let senha = prompt('Digite sua senha');

if (senha == senhaLog){
    alert('Seu saldo é de R$2,00');
}else{
    alert('Senha incorreta')
}

/*5 - Nome de usuario */
let nomeUsuario = prompt('Qual seu nome?');
alert(`Olá, bem-vindo ao site ${nomeUsuario}`);
