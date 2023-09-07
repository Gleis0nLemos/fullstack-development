/* ----------------------------------------------------------------------------

Exercício: 001
Enunciado: CONTADOR
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento. Ao clicar em cada
    um dos botões, o utilizador irá aumentar ou diminuir o valor em uma unidade.

---------------------------------------------------------------------------- */

//MINHA RESOLUÇÃO
document.querySelector('#btn_incremento').addEventListener('click', () => {
    let cont = document.querySelector("#valor")
    let currentValue = parseInt(cont.innerHTML)
    currentValue += 1
    cont.innerHTML = currentValue
})

document.querySelector('#btn_decremento').addEventListener('click', () => {
    let cont = document.querySelector("#valor")
    let currentValue = parseInt(cont.innerHTML)
    currentValue -= 1
    cont.innerHTML = currentValue
})

//RESOLUÇÃO DO PROFESSOR
let valor = 0

const h1_valor = document.querySelector("#valor")

document.querySelector("#btn_incremento").addEventListener('click', () => {
    h1_valor.textContent = ++valor
})

document.querySelector("#btn_decremento").addEventListener('click', () => {
    h1_valor.textContent = --valor
})