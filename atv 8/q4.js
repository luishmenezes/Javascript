function tribonacci(n){
    if( n === 0){
        return 0;
    } else if(n === 1){
        return 1;
    } else if (n === 2){
        return 2;
    } else if( n > 2){
        return tribonacci(n -1) + tribonacci( n - 2) + tribonacci( n - 3);
    } else {
        console.log("Digite um número inteiro.")
    }
}


console.log(tribonacci(2))