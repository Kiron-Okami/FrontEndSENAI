var btnLogar = document.querySelector(`#logarUsuario`); 

// addEventListener = chama uma função no evento criado
btnLogar.addEventListener(`click`, fazerlLogin)

function fazerlLogin(){
    usuario = document.querySelector(`#usuario`).value;
    senha = document.querySelector(`#senha`).value;

    document.querySelector(`#usuarioStatus`).innerHTML = `Seja bem-vindo(a), ${usuario}`
}








// carrinho 

var catalogo = ["Placa de vídeo", "Placa-mãe", "Processador", "Memória ram", "Fonte", "Monitor"]

catalogo.forEach(element => {
    document.querySelector("main").innerHTML += `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${element}</h5>
            <button onclick="adicionarCarrinho(${element})" class="btn btn-primary">Comprar</a>
        </div>
    </div>
    `
})

var carrinho

function adicionarCarrinho(produto){
    carrinho.push(produto);
    alert(`O produto foi adicionado com sucesso!`) 
}