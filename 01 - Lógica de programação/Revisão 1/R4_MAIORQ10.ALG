Algoritmo "R4_MaiorQ10"

Var
N: vetor [1..5] de real
maiorQ10: inteiro
contador: inteiro

Inicio

procedimento identifique ()
inicio
     para contador <- 1 ate 5 faca
          se (N[contador] > 10) entao
             maiorQ10 <- maiorQ10 + 1
          fimse
     fimPara
fimProcedimento


procedimento leitura()
inicio
      para contador <- 1 ate 5 faca
           escreval("Escreva o", contador, "� n�mero")
           leia(N[contador])
           escreval()
      fimPara
fimProcedimento

escreval("Quantos n�meros s�o maiores que 10: ")
escreval()
leitura()
limpatela
identifique()
escreval(maiorQ10, " n�meros s�o maiores que 10!")

Fimalgoritmo