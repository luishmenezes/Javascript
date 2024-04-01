
let quantidadeNotas = parseInt(prompt("Digite a quantidade de notas: "));


let soma = 0;


for (let i = 1; i <= quantidadeNotas; i++) {
    let nota = parseFloat(prompt(`Digite a ${i}ª nota:`));
    soma += nota;
}


let media = soma / quantidadeNotas;

console.log(`A média aritmética das ${quantidadeNotas} notas é: ${media}`);
