function encontrarPrimos(n) {
    let primos = [];
    let divisoes = 0;

    for (let i = 2; i <= n; i++) {
        let divisivel = false;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            divisoes++;
            if (i % j === 0) {
                divisivel = true;
                break;
            }
        }
        if (!divisivel) {
            primos.push(i);
        }
    }

    return { primos: primos, divisoes: divisoes };
}

let numero = parseInt(prompt("Digite um número inteiro para encontrar todos os primos até esse número: "));
let resultado = encontrarPrimos(numero);

console.log(`Números primos até ${numero}: ${resultado.primos}`);
console.log(`Número de divisões realizadas: ${resultado.divisoes}`);
