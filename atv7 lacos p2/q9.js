
function verificarPrimo(numero) {
    let divisores = [];
    if (numero <= 1) {
        return divisores; 
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            divisores.push(i); 
            if (i !== numero / i) {
                divisores.push(numero / i); 
            }
        }
    }
    return divisores;
}


let numero = parseInt(prompt("Digite um número inteiro para verificar se é primo: "));


let divisores = verificarPrimo(numero);
if (divisores.length === 0) {
    console.log(`${numero} é um número primo.`);
} else {
    console.log(`${numero} não é um número primo. Ele é divisível por: ${divisores.join(", ")}`);
}
