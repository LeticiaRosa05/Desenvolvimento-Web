/*var nome = prompt('Qual seu nome?');
alert('Olá ' + nome + ', seja bem-vindo(a)!');

var idade = prompt('Qual sua idade?');
if (idade < 18) {
    alert('Você é menor de idade!');
} else if (idade >= 18 && idade < 60) {
    alert('Você é adulto!');
} else {
    alert('Você é idoso!');
}*/

var nome = prompt('Qual seu nome?');
var peso = parseFloat(prompt("Qual o seu peso em kg?"));
var altura = parseFloat(prompt("Digite sua altura:"));
var imc = peso / (altura * altura);

if (imc < 16){
    alert(nome+', você possui índice de massa corporal igual a '+imc.toFixed(2)+', sendo classificado como: Abaixo do peso - muito grave');
} else if (imc >= 16 && imc <= 16.99){
    alert(nome+', você possui índice de massa corporal igual a '+imc.toFixed(2)+', sendo classificado como: Abaixo do peso - grave');
} else if (imc >= 17 && imc <= 18.49){
    alert(nome+', você possui índice de massa corporal igual a '+imc.toFixed(2)+', sendo classificado como: Abaixo do peso');
} else if (imc >= 18.5 && imc <= 24.99){
    alert(nome+', você possui índice de massa corporal igual a '+imc.toFixed(2)+', sendo classificado como: Peso normal');
} else if (imc >= 25 && imc <= 29.99){
    alert(nome+', você possui índice de massa corporal igual a '+imc.toFixed(2)+', sendo classificado como: Sobrepeso');
} else if (imc >= 30 && imc <= 34.99){
    alert(nome+', você possui índice de massa corporal igual a '+imc.toFixed(2)+', sendo classificado como: Obesidade grau I');
} else if (imc >= 35 && imc <= 39.99){
    alert(nome+', você possui índice de massa corporal igual a '+imc.toFixed(2)+', sendo classificado como: Obesidade grau II');
} else {
    alert(nome+', você possui índice de massa corporal igual a '+imc.toFixed(2)+', sendo classificado como: Obesidade grau III');
}

