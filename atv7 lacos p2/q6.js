
let n = parseInt(prompt("Digite a quantidade de números a serem fornecidos: "));


let menorValor = Infinity;
let maiorValor = -Infinity;
let soma = 0;


for (let i = 0; i < n; i++) {
    let numero;
    do {
        numero = parseFloat(prompt(`Digite o ${i + 1}º número (entre 0 e 1000):`));
        if (numero < 0 || numero > 1000 || isNaN(numero)) {
            console.log("Por favor, digite um número entre 0 e 1000.");
        }
    } while (numero < 0 || numero > 1000 || isNaN(numero));
    

    if (numero < menorValor) {
        menorValor = numero;
    }
    if (numero > maiorValor) {
        maiorValor = numero;
    }
    

    soma += numero;
}


console.log(`Menor valor: ${menorValor}`);
console.log(`Maior valor: ${maiorValor}`);
console.log(`Soma dos valores: ${soma}`);
