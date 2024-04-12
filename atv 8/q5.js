function Pell(n){
    if( n === 0){
        return 0;
    } else if(n === 1){
        return 1;
    } else if(n == 2) {
        return 2;
    } else if( n > 2){
        return 2 * Pell(n - 1) + Pell(n - 2);
    } else {
        console.log("Digite um número inteiro.")
    }
}

console.log(Pell(4))