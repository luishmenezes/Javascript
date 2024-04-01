
let numero = parseInt(prompt("Digite um número inteiro entre 1 e 10: "));


if (numero >= 1 && numero <= 10) {
    console.log(`Tabuada de ${numero}:`);
    
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} X ${i} = ${resultado}`);
    }
} else {
    console.log("Número inválido. Por favor, digite um número entre 1 e 10.");
}
