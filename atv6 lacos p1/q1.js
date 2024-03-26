while(true){
    var nota = parseFloat(prompt("Digite uma nota válida: "));
    if(nota >= 0 && nota <= 10){
        console.log("nota válida " + nota);
        break;
    }else {
        console.log("Digite uma nota válida(entre 0 e 10)");
    }
}
