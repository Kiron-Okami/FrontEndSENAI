Algoritmo "achenegativo"

Var
valor, qtnValores, numero: inteiro


Inicio
qtnValores <- 1
escreval ("Digite 10 números para identificar quais são negativos.")
repita
      leia (valor)
      se (valor < 0) entao
         numero <- numero + 1
      fimse
      qtnValores <- qtnValores + 1
ate (qtnvalores > 10)

limpatela
escreval ("Você digitou ", numero, " números negativos!")

Fimalgoritmo