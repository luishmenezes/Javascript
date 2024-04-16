function calcularPercentualAcrescido(valor,porcentagem){
    var acrescimo = valor * (porcentagem/100);
    
    return valor + acrescimo;
}

console.log(calcularPercentualAcrescido(100,5));
