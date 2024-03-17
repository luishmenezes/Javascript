function realizarTransferencia(saldoOrigem,saldoDestino,valorTransferencia,limiteTransferencia){
  if(valorTransferencia <= saldoOrigem && valorTransferencia <= limiteTransferencia){
    saldoDestino += valorTransferencia;
    console.log("Transferencia realizada com sucesso")
  } else if(valorTransferencia < saldoOrigem) {
  console.log("transferencia não realizada. Saldo insuficiente")
  } else {
    console.log("valor de transferencia maior que o limite.")
  }
}