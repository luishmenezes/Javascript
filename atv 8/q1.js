    function calculo(n){
        if( n === 1){
            return 1;
        }else if(n > 1) {
            return n + calculo(n - 1);
        } else {
            return console.log("Digite um número inteiro positivo")
        }
    }

    console.log(calculo(10));