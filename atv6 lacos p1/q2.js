while(true){
    var nome = prompt("Digite um nome: ");
    var senha = prompt("digite sua senha: ");
    
    if(nome == senha){
        console.log("seu nome não pode ser igual a sua senha!")
    } else{
        console.log("dados válidos e salvos!")
        break;
    }
}
