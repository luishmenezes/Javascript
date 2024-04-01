
let numeros = [];
for (let i = 0; i < 5; i++) {
    let numero = parseFloat(prompt(`Digite o ${i+1}º número:`));
    numeros.push(numero);
}


let maiorNumero = Math.max(...numeros);


console.log(`O maior número é: ${maiorNumero}`);
