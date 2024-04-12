function calculoPotencia(x , k){
    if( k === 0){
        return 1;
    }else if(x > 1) {
        return x * calculoPotencia(x,k - 1);
    } else {
        return console.log("Digite um número inteiro positivo");
    }
}

console.log(calculoPotencia(2,4));
