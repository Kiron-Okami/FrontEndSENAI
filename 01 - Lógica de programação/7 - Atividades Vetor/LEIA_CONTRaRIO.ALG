Algoritmo "leia contr�rio"

Var
numero: vetor [1..10] de inteiro
contador: inteiro

Inicio
//Escreva 10 n�meros. Ao final, a ordem dos n�meros
//inseridos estar� ao contr�rio}

escreval("insira 10 n�meros")
para contador <- 1 ate 10 faca
leia (numero[contador])
fimpara

limpatela

repita
      escreval(numero[contador])
      contador <- contador - 1
ate (contador < 1)

Fimalgoritmo