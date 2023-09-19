/* ----------------------------------------------------------------------------

Exercício: 008
Enunciado:
    Existem 5 botões, cada um com uma cor diferente do Bootstrap.
    A ideia é criar o código javascript que permita que o clique em cada
    um dos botões altere o texto acima para a cor de fundo do botão.
---------------------------------------------------------------------------- */

// MINHA RESOLUÇÀ0

// document.querySelector('#btn1').addEventListener('click', () => {
//     document.querySelector('h3').style.color = 'aqua'
// })

// document.querySelector('#btn2').addEventListener('click', () => {
//     document.querySelector('h3').style.color = 'magenta'
// })

// document.querySelector('#btn3').addEventListener('click', () => {
//     document.querySelector('h3').style.color = 'green'
// })

// document.querySelector('#btn4').addEventListener('click', () => {
//     document.querySelector('h3').style.color = 'red'
// })

// document.querySelector('#btn5').addEventListener('click', () => {
//     document.querySelector('h3').style.color = 'orange'
// })

// RESOLUÇÃO DO PROFESSOR

const cores = ['primary', 'info', 'success', 'danger', 'warning']

document.querySelectorAll('[id^="btn"]').forEach((btn) => {
    btn.addEventListener('click', (btn) => {
        let index = btn.target.id.substring(3, 4) - 1
        document.querySelector("h3").className = "text-" + cores[index]
    })
});