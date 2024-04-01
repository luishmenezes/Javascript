
let numero = parseInt(prompt("Digite um número inteiro para calcular o fatorial: "));


if (numero >= 0) {
    let fatorial = 1;
    

    for (let i = numero; i >= 1; i--) {
        fatorial *= i;
    }
    

    console.log(`O fatorial de ${numero} é: ${fatorial}`);
} else {
    console.log("Por favor, digite um número inteiro não negativo.");
}
