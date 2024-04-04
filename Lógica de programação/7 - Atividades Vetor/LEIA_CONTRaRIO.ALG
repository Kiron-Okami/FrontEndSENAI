Algoritmo "leia contrário"

Var
numero: vetor [1..10] de inteiro
contador: inteiro

Inicio
//Escreva 10 números. Ao final, a ordem dos números
//inseridos estará ao contrário}

escreval("insira 10 números")
para contador <- 1 ate 10 faca
leia (numero[contador])
fimpara

limpatela

repita
      escreval(numero[contador])
      contador <- contador - 1
ate (contador < 1)

Fimalgoritmo