Algoritmo "escolhamaior"

Var
quantidade, numero, qntAtual, numeroMaior: inteiro

Inicio
escreval ("Quantos números irá digitar?")
leia (quantidade)
qntAtual <- 1
numeroMaior <- 0
limpatela
escreval ("Digite seus números")
escreval ()

enquanto (qntAtual <= quantidade) faca
         leia (numero)
         se (numero > numeroMaior) entao
            numeroMaior <- numero
         fimse
         qntAtual <- qntAtual + 1
fimEnquanto
limpatela
escreval (numeroMaior, " é o número maior!")


Fimalgoritmo