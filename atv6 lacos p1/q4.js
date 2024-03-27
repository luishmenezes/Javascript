let populacaoA = 80000;
let crescimentoA = 0.03;
let populacaoB = 200000;
let crescimentoB = 0.015;
let anos = 0;

while(populacaoA <= populacaoB){
    populacaoA *= (1 + crescimentoA);
    populacaoB *= (1 + crescimentoB);
    anos++;
}

console.log("o ano em que se igualam é: " + anos);
