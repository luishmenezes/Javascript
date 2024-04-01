
function calcularPotencia(base, expoente) {
    let resultado = 1;
    for (let i = 0; i < expoente; i++) {
        resultado *= base;
    }
    return resultado;
}


let base = parseFloat(prompt("Digite o número base: "));
let expoente = parseInt(prompt("Digite o expoente (deve ser um número inteiro): "));


if (Number.isInteger(expoente)) {
 
    let potencia = calcularPotencia(base, expoente);
    console.log(`${base} elevado a ${expoente} é igual a ${potencia}`);
} else {
    console.log("O expoente deve ser um número inteiro.");
}
