Algoritmo "tabuada"

Var
multiplicando, multiplicador: inteiro

Inicio
escreval ("Escreva um número para sua tabuada: ")
leia (multiplicando)
multiplicador <- 1
limpatela
enquanto (multiplicador <= 10) faca
         escreval (multiplicando, " *", multiplicador, " = ", (multiplicador * multiplicando))
         multiplicador <- multiplicador + 1
fimenquanto

Fimalgoritmo