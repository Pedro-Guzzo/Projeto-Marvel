window.alert('Hello! Be Welcome to the website where It will show you some main characters from Marvel')

const buttons = document.querySelectorAll(".button");
const characters = document.querySelectorAll(".character");

buttons.forEach((button, indice,) => {
    button.addEventListener("click", () => {

        desselecionarBotao();
        desselecionarPersonagem();

        button.classList.add("selected")
        characters[indice].classList.add("selected");
    })
})

buttons.addEventListener("click", () => {
    console.log("clicou no botão")
})

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".character.selected");
    personagemSelecionado.classList.remove("selected");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".button.selected");
    botaoSelecionado.classList.remove("selected");
}
