Algoritmo "cres ou desc"

Var
num: vetor [1..3] de inteiro
contador, menor, mediano, maior : inteiro

Inicio

escreval ("Escreva 3 números diferentes para vê-los em forma crescente/decrescente: ")
escreval()

para contador <- 1 ate 3 faca
      leia (num[contador])
fimPara


//maior
para contador <- 1 ate 3 faca
     se (num[contador] > maior) entao
        maior <- num[contador]
     fimSe
fimPara

//menor
menor <- maior
para contador <- 1 ate 3 faca
     se (num[contador] < menor) entao
        menor <- num[contador]
     fimSe
fimPara

//Mediana
para contador <- 1 ate 3 faca

se (num[contador] < maior) e (num[contador] > menor) entao
   mediano <- num[contador]
fimse
fimpara

limpatela

escreval ("crescente")
  escreval(menor)
  escreval(mediano)
  escreval(maior)
escreval()

escreval("decrescente")
  escreval(maior)
  escreval(mediano)
  escreval(menor)

Fimalgoritmo