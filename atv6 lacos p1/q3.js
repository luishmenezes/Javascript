while(true){
    var nome = prompt("Digite um nome: ");
    var idade = parseFloat(prompt("digite sua idade: "));
    var salario = parseFloat(prompt("digite o seu salário: "));
    var sexo = prompt("Digite o seu sexo: ");
    var estadoCivil = prompt("Digite o seu estado civil: ");
    
    
    if(nome.length > 3 && idade > 0 && idade < 150 && salario > 0 && (sexo == "f" || sexo == "m") && (estadoCivil == "s" || estadoCivil == "c" || estadoCivil == "v" || estadoCivil == "d" ) ){
        console.log("dados válidos e salvos!")
        break;
    } else{
        console.log("seu nome não pode ser igual a sua senha!")
    }
}
