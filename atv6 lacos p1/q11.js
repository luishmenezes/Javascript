
let numero1 = parseInt(prompt("Digite o primeiro número inteiro: "));
let numero2 = parseInt(prompt("Digite o segundo número inteiro: "));


let menorNumero = Math.min(numero1, numero2);
let maiorNumero = Math.max(numero1, numero2);


let soma = 0;

a
console.log(`Números no intervalo entre ${menorNumero} e ${maiorNumero}:`);
for (let i = menorNumero; i <= maiorNumero; i++) {
    console.log(i);
    soma += i;
}


console.log(`A soma dos números no intervalo é: ${soma}`);
