Algoritmo "Questao3"

Var
saldo, debito, credito, saldoAtual: real

Inicio
escreva("Digite seu saldo: ")
leia(saldo)
escreval()

escreva("Digite seu débito: ")
leia(debito)
escreval()

escreva("Digite seu seu crédito: ")
leia(credito)
escreval()
escreval()

saldoAtual <- saldo - debito + credito

se (saldoAtual >= 0) entao
   escreval("Saldo positivo!")
   senao
        escreval ("Saldo negativo!")
fimse

Fimalgoritmo