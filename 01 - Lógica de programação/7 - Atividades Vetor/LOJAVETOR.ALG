Algoritmo "LojaVetor"

Var
produto: vetor [1..3] de caractere
preco: vetor [1..3] de real
contador: inteiro

Inicio

procedimento configurar()
inicio

//Usuário insere produtos desejados
escreval ("Digite o nome de 3 produtos: ")
escreval()
para contador <- 1 ate 3 faca
         leia (produto[contador])
fimPara
limpatela

//Usuário insere os preços
para contador <- 1 ate 3 faca
         escreval ("Insira o preço de ", produto[contador])
         leia (preco[contador])
fimPara
limpatela
fimprocedimento

procedimento tabela ()
var
total: real

inicio

//Lista os produtos e os preços
para contador <- 1 ate 3 faca
     escreval(produto[contador], ": R$", preco[contador])
     total <- total + preco[contador]
fimpara
escreval ("Total: ", total)
fimprocedimento

procedimento mediaprecos ()
var
media: real

inicio
//Mostra a média dos preços
para contador <- 1 ate 3 faca
     media <- media + preco[contador]
fimpara
       media <- media / contador
escreval ()
escreval ("A média dos precos é ", media)
fimprocedimento

configurar()
tabela()
mediaprecos()

Fimalgoritmo