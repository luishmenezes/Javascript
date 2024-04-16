function decimalParaBinario(numero) {
    
    if (isNaN(numero) || !Number.isInteger(numero) || numero < 0) {
        return "Número inválido";
    }

    
    if (numero === 0) {
        return "0";
    }

    let binario = "";
    
    
    while (numero > 0) {
        binario = (numero % 2) + binario;
        numero = Math.floor(numero / 2);
    }

    return binario;
}


console.log(decimalParaBinario(10));  
console.log(decimalParaBinario(27));  
console.log(decimalParaBinario(0));   
console.log(decimalParaBinario(123));