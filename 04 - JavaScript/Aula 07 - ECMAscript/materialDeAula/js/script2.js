// promisses
var promessa = new Promise((resolve, reject) => {
    let nome = "Kiron";
    console.log(`---------------Promise---------------`)

    if (nome == "Leo"){
        resolve(`O usuário foi encontrado`)
    }else{
        reject(`O usuário não é o Kiron`)
    }
} )

// promessa.então(faça = {algo})
promessa.then((resultado) => {
    console.log(resultado)
})

// promessa.então(faça => {algo esperando um erro})
    // promessa.catch((resultado) => {
    //     console.log(resultado)
    // })

function codigoDemorado (){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Enrolei`)
            resolve()
        }, 3000)
    })
}

async function carregando(){
    console.log("Comecei")
    await codigoDemorado()
    console.log(`Terminei`)
}

carregando()