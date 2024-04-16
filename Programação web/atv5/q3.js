function media(numeros){
    if( numeros.length === 0){
        return 0;
    }
    
    var soma = 0
    
    for(var i = 0 ; i < numeros.length; i++){
        soma += numeros[i];
    
}

    return soma/numeros.length;
    
}

var arr1 = [1,2,3,4,5];
var arr2 = [6,7,8,9,10];

console.log("A média dos array 1 é de: " + media(arr1))
console.log("A média dos array 2 é de: " + media(arr2))