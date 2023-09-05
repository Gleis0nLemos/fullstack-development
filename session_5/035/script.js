// EVENT HANDLERS

function funcao () {
    console.log("clique")
}

function alterar_texto (e) {
    document.querySelector("h1").textContent = "Novo título"
    console.log(e.target)
}