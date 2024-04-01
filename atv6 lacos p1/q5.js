
function calcularAnosPopulacao(populacaoA, taxaCrescimentoA, populacaoB, taxaCrescimentoB) {
    let anos = 0;
    while (populacaoA < populacaoB) {
        populacaoA *= 1 + taxaCrescimentoA / 100;
        populacaoB *= 1 + taxaCrescimentoB / 100;
        anos++;
    }
    return anos;
}


function main() {
    while (true) {
        let populacaoA = parseInt(prompt("Informe a população do país A: "));
        let taxaCrescimentoA = parseFloat(prompt("Informe a taxa de crescimento do país A (%): "));
        let populacaoB = parseInt(prompt("Informe a população do país B: "));
        let taxaCrescimentoB = parseFloat(prompt("Informe a taxa de crescimento do país B (%): "));

        if (populacaoA <= 0 || taxaCrescimentoA <= 0 || populacaoB <= 0 || taxaCrescimentoB <= 0) {
            alert("As populações e as taxas de crescimento devem ser maiores que zero. Por favor, tente novamente.");
            continue;
        }

        let anosNecessarios = calcularAnosPopulacao(populacaoA, taxaCrescimentoA, populacaoB, taxaCrescimentoB);
        alert(`Serão necessários ${anosNecessarios} anos para que a população do país A ultrapasse ou iguale a população do país B.`);
        
        let repetir = prompt("Deseja repetir a operação? (S/N)").toUpperCase();
        if (repetir !== 'S') {
            break;
        }
    }
}

// Chamada da função principal
main();
