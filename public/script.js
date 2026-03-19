// colem aqui a URL gerada no seu projeto do codespace
const url = "https://urban-rotary-phone-p4v44r9jjrw2r7pp-3000.app.github.dev/alunos"

function carregar() {
    fetch(url,{
        method: "GET"
    })
        .then((res) => {
            return res.json()
        })
        .then((dados) => {
            console.log("OS DADOS AQUIIIIIIII", dados)
            for (let dado of dados) {
                document.querySelector("ul").innerHTML += ` <li class="list-group-item">${dado.nome}</li>`
            }

        })
}

carregar()

// função salvar aluno
function salvar() {
    aluno = {
        nome: document.querySelector("#nome").value,
        idade: document.querySelector("#idade").value,
        sexo: document.querySelector("#sexo").value
    }
    console.log("aluno para salvar", aluno)

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(aluno)
    })
        .then(response => response.json())
        .then(data => {
            console.log("Sucesso:", data)
            document.querySelector("ul").innerHTML = ""
            carregar()
        })
        .catch(error => {
            console.error("Erro:", error)
        })
}