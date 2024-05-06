Algoritmo "R6_cadastro"

Var
nomeUsuario, senhaUsuario: vetor [1..3] de caractere
contador: inteiro

Inicio
escreval("************Cadastro************")
escreval()

para contador <- 1 ate 3 faca
     escreval("Usuário ", contador, ": ")
     escreva("Nome: ")
     leia(nomeUsuario[contador])
     escreval()
     escreva("Senha: ")
     leia(senhaUsuario[contador])
fimpara
limpatela

escreval("Usuários cadastrados com sucesso!")

Fimalgoritmo