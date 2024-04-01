
let fibonacci = [0, 1];


let i = 2;
while (true) {
    let proximoTermo = fibonacci[i - 1] + fibonacci[i - 2];
    if (proximoTermo > 500) {
        break; /
    }
    fibonacci.push(proximoTermo);
    i++;
}

console.log("Sequência de Fibonacci até que o valor seja maior que 500:");
console.log(fibonacci.join(", "));
