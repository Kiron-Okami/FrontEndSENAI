Algoritmo "questao6"

Var
nomes: vetor [1..11] de caractere
contador: inteiro
adivinha: caractere
achado: inteiro

Inicio
escreval("Insira 10 nomes")
para contador <- 1 ate 10 faca
     leia(nomes[contador])
fimpara

limpatela

escreval("Digite um nome e irei procurar no bando de dados!")
leia(adivinha)
limpatela

contador <- 0
repita
contador <- contador + 1
até (adivinha = nomes[contador]) ou (contador > 10)

se (adivinha = nomes[contador]) entao
   escreval("ACHEI! ", nomes[contador])
   senao
        escreval("NÃO ACHEI!")
fimse

Fimalgoritmo