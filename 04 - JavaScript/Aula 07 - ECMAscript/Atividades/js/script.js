// Exercício 01
// Uma função que pissa estar habilitando a pessoa de digitar um texto, e logo após utilizar as funções de replace e replaceAll
// Input - Nada
// Output - textArea texto, input do termo removido, input do termo adicionado;
var editor = document.querySelector(`#editor`);
var corpo = document.querySelector(`body`);

function substitui(){
    editor.innerHTML = `
        <h1 style="font-size: 32px;">NotePad</h1>
        <textarea cols="15" id="textoDigitado"></textarea>
        <input type="text" id="termoRemover" pleceholder="O termo que deseja remover">
        <input type="text" id="termoAdicionado" pleceholder="O termo que deseja adicionar">
        <button type="button" onclick="substituir()" id="substituir">Substituir</button>
        <button type="button" onclick="substituirTudo()" id="substituirTudo">Substituir tudo</button>
    `
} 

// Substitui a primeira palavra encontrada no texto
function substituir(){
    let textoDigitado = document.querySelector("#textoDigitado").value
    let termoRemover = document.querySelector("#termoRemover").value
    let termoAdicionado = document.querySelector("#termoAdicionado").value

    let textoAtualizado = textoDigitado.replace(termoRemover, termoAdicionado);
    document.querySelector(`#textoDigitado`).value = textoAtualizado;
}
// Substitui todas as Palavras do texto
function substituirTudo(){
    let textoDigitado = document.querySelector("#textoDigitado").value
    let termoRemover = document.querySelector("#termoRemover").value
    let termoAdicionado = document.querySelector("#termoAdicionado").value
    
    let textoAtualizado = textoDigitado.replaceAll(termoRemover, termoAdicionado);
    document.querySelector(`#textoDigitado`).value = textoAtualizado;
}
substitui()

// Execício 02
// Verifica se o usuário é ADM
function promessa(){
    new Promise((resolve, reject) => {
        let usuarioSalvo = `ADM`;
        let senhaSalvo = `ADM`;

        if(usuario == usuarioSalvo && senha == senhaSalvo){
            alert(`Seja bem-vindo senhor(a) presidente!`);
            resolve();
        } else {
            alert(`Usuário ou senha incorreta! Tente novamente!`);
            reject(`Usuário ou senha não batem como o esperado`);
        }
    })
}

// Exercício 03
// Input de Pesquisa para um elemento array. Caso seja encontrado, imprimir uma mensagem de sucesso. Caso não seja encontrado, imprimir mensagem alertando que o elemento não existe
// Input : elemento
// Output : Mensagem de verificação
corpo.innerHTML += `
    input id="pesquisa" placeholder="Digite um termo a ser pesquisado" onfocusout="pesquisar()" type="text">
`

function pesquisar(){
    let listaElementos = ["God Of War", "Computador", "Vingadores"];

    let pesquisa = document.querySelector(`#pesquisa`);

    let achou = listaElementos.includes(pesquisa);

    if(achou == true){
        alert(`Elemento encontrado!`)
    } else {
        alert(`Elemento não encontrado!`)
    }
}