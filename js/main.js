const controle = document.querySelectorAll(".controle-ajuste")

console.forEach(elemento => {
    elemento.addEventListener("click", (evento) =>{
        manipulaDados(evento.target.textContent, evento.target.parentNode)
    })
});

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector(".controle-contador")

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    }else{
        peca.value = pareInt(peca.value) + 1
    }
}
