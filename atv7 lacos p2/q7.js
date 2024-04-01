
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let fatorial = 1;
        for (let i = 2; i <= numero; i++) {
            fatorial *= i;
        }
        return fatorial;
    }
}


while (true) {
    let numero;
    do {
        numero = parseInt(prompt("Digite um número inteiro positivo menor que 16 para calcular o fatorial (ou -1 para sair):"));
        if (numero === -1) {
            break;
        }
        if (numero < 0 || numero >= 16 || isNaN(numero)) {
            console.log("Por favor, digite um número inteiro positivo menor que 16.");
        }
    } while (numero < 0 || numero >= 16 || isNaN(numero));

    if (numero === -1) {
        console.log("Encerrando o programa...");
        break;
    } else {
        let fatorial = calcularFatorial(numero);
        console.log(`${numero}! = ${fatorial}`);
    }
}

