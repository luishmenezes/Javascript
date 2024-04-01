
let numeros = [];
for (let i = 0; i < 5; i++) {
    let numero = parseFloat(prompt(`Digite o ${i+1}º número:`));
    numeros.push(numero);
}


let soma = 0;
for (let numero of numeros) {
    soma += numero;
}


let media = soma / numeros.length;


console.log(`A soma dos números é: ${soma}`);
console.log(`A média dos números é: ${media}`);
