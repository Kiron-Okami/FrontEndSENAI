var texto = "Olá mundo, o mundo está bonito, tchau mundo";
var nome = "Kíron";
var sobrenome = "Okami";

console.log("-------REPLACE------")
console.log(texto);
// replace = substitui o primeiro item com o nome
console.log(texto.replace("mundo","banana"));
// replaceAll = substitui todos os itens com o nome
console.log(texto.replaceAll("mundo","olá"));

console.log("------IndexOf/Includes------")
var alunos = ["Leo", "Juliana", "Fernanda", nome]

//indexOf = retorna a posição do primeiro item encontrado no array, Retorna -1 se o item não exitir
var pesquisa = alunos.indexOf(nome)

// includes = retorna true caso o item esteja no array citado e falso caso o contrário
var pesquisa2 = alunos.includes(nome)


if(pesquisa >= 0 || pesquisa == true){
    console.log(`Item foi encontrado!`)
}else{
    console.log(`Item não encontrado! Tente novamente!`)
}