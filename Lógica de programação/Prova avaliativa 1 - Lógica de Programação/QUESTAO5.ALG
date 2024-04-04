Algoritmo "Questao5"

Var
V1, V2: vetor [1..5] de caractere
contador, paridade: inteiro

Inicio
escreval("Escreva 5 números para V1")
para contador <- 1 ate 5 faca
leia(V1[contador])
fimpara
escreval()
escreval("Escreva 5 números para V2")
para contador <- 1 ate 5 faca
leia(V2[contador])
fimpara
limpatela

para contador <- 1 ate 5 faca
     se (V1[1] = V2[contador]) entao
        paridade <- paridade + 1
     fimse
     se (V1[2] = V2[contador]) entao
        paridade <- paridade + 1
     fimse
     se (V1[3] = V2[contador]) entao
        paridade <- paridade + 1
     fimse
     se (V1[4] = V2[contador]) entao
        paridade <- paridade + 1
     fimse
     se (V1[5] = V2[contador]) entao
        paridade <- paridade + 1
     fimse
fimpara

escreval(paridade, " paridade!!")

Fimalgoritmo