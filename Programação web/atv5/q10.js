function fatorial(n){
    if( n===0){
        return 1;
    }
    
    let fatorial = 1;
    
    for( let i = 1; i <= n;i++ ){
        fatorial *= i;
    }
    
    return fatorial;
}


console.log(fatorial(5));
console.log(fatorial(6));
console.log(fatorial(4));