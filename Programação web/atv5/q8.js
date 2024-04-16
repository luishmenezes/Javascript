function verificaPalindromo(palavra) {
    
    palavra = palavra.toLowerCase().replace(/\s/g, '');

   
    var palavraInvertida = palavra.split('').reverse().join('');

    
    return palavra === palavraInvertida;
}


console.log(verificaPalindromo("ovo"));
console.log(verificaPalindromo("arara")); 
console.log(verificaPalindromo("casa")); 
console.log(verificaPalindromo("Ame a ema"));