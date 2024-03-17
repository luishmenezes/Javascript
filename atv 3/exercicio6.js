function atualizarCadastro(cadastroAtivo, saldo) {
  if (cadastroAtivo) {
    if (saldo > 0) {
      console.log("Cadastro ativo e saldo positivo");
    } else {
      console.log("Cadastro ativo mas precisa regularizar saldo");
    }
  } else {
    console.log("Por favor, atualize seu cadastro");
  }

}