var nome = prompt('Qual seu nome?');
alert('Olá ' + nome + ', seja bem-vindo(a)!');

var idade = prompt('Qual sua idade?');
if (idade < 18) {
    alert('Você é menor de idade!');
} else if (idade >= 18 && idade < 60) {
    alert('Você é adulto!');
} else {
    alert('Você é idoso!');
}
