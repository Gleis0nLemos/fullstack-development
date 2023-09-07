/* ----------------------------------------------------------------------------

Exercício: 002
Enunciado: CONTADOR COM INTERVALO DE VALORES
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento.
    O valor nunca poderá ser inferior a -10 ou superior a 10.

---------------------------------------------------------------------------- */

// MINHA RESOLUÇÃO

let value = 0

const h1_value = document.querySelector("#valor")

document.querySelector("#btn_incremento").addEventListener('click', (event) => {
    if (valor >= 10) {
        alert("Valor limite ultrapassado!")
    } else {
        h1_valor.textContent = ++valor
    }
})

document.querySelector("#btn_decremento").addEventListener('click', (event) => {
    if (valor <= -10) {
        alert("Valor limite ultrapassado!")
    } else {
        h1_valor.textContent = --valor
    }
})

// RESOLUÇÃO DO PROFESSOR

let valor = 0

const h1_valor = document.querySelector("#valor")

document.querySelector("#btn_incremento").addEventListener('click', (event) => {
    if (valor == 10) return;
    h1_valor.textContent = ++valor
})

document.querySelector("#btn_decremento").addEventListener('click', (event) => {
    if (valor == 10) return;
    h1_valor.textContent = --valor
})