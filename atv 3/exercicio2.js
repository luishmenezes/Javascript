function realizarSaque(saldoAtual,valorSaque){
  if(valorSaque <= saldoAtual){
    saldoAtual -= valorSaque;
    console.log("Saque realizado com sucesso. Saldo atual: " + saldoAtual)
  } else {
    console.log("saldo insuficiente")
  }
}