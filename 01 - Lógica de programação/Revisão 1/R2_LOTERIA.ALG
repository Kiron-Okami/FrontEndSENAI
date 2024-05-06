Algoritmo "loteria"

Var
num, palpite: vetor[1..3] de inteiro
acertos, contador: inteiro

Inicio

  num[1] <- randi(10)
  num[2] <- randi(10)
  num[3] <- randi(10)

para contador <- 1 ate 3 faca
  escreval ("-_-_-_-_-_-LOTERIA-_-_-_-_-_-")
  escreval()
  escreval("NOTA: Digite APENAS números de 0 a 10")
  escreval()
     escreval("Digite o ", contador, "º número")
     leia (palpite[contador])
     limpatela
fimPara

para contador <- 1 ate 3 faca
   se (num[contador] = palpite[1]) ou (num[contador] = palpite[2]) ou (num[contador] = palpite[3]) entao
      acertos <- acertos + 1
   fimse
fimpara

limpatela
se (acertos = 0) entao
     escreval("Você não acertou nada.")
  senao
     escreval("Você fez ", acertos, " acertos!!!")
fimse
//Depois eu conserto a duplicação e os números repetidos
Fimalgoritmo