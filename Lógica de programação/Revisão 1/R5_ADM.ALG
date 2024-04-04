Algoritmo "semnome"

Var
usuario, senha, tentaSenha, tentaUsuario: caractere

Inicio
usuario <- "ADM"
senha <- "ADM"

escreval("#############Banco de Dados#############")
escreval()
escreval()
escreval("Digite o nome do Usuário: ")
leia(tentaUsuario)
escreval()

escreval("digite a senha: ")
leia(tentaSenha)
limpatela

se (tentaUsuario = usuario) e (tentaSenha = senha) entao
   escreval("Login efetuado com sucesso!!!")
   escreval()
   escreval("Seja bem-vindo senhor presidente!")
   senao
        escreval("Erro!")
fimse

Fimalgoritmo