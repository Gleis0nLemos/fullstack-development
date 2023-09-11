/* ----------------------------------------------------------------------------

Exercício: 004
Enunciado: TRÊS SLIDERS COM VALORES INDEPENDENTES
    
    Estão disponíveis três input ranges e respectivas áreas de apresentação dos valores.
    Criar os mecanismos que permitem visualizar os valores dos sliders.
    Todos os sliders devem variar entre 0 e 100. Essas propriedades devem ser
    definidas através do JavaScript.

---------------------------------------------------------------------------- */

// MINHA RESOLUÇÃO

// valores
// const valor_1 = document.querySelector('#value_1')
// const valor_2 = document.querySelector('#value_2')
// const valor_3 = document.querySelector('#value_3')

// // range
// const range_1 = document.querySelector('#range_1')
// const range_2 = document.querySelector('#range_2')
// const range_3 = document.querySelector('#range_3')

// range_1.addEventListener('input', () => {
//     set_valor()
// })

// range_2.addEventListener('input', () => {
//     set_valor()
// })

// range_3.addEventListener('input', () => {
//     set_valor()
// })

// function set_valor() {
//     if (range_1) {
//         const valor = range_1.value
//         valor_1.textContent = valor
//     } 
//     if (range_2) {
//         const valor = range_2.value
//         valor_2.textContent = valor
//     } 
//     if (range_3){
//         const valor = range_3.value
//         valor_3.textContent = valor
//     }
// }

// RESOLUÇÃO DO PROFESSOR

const range_1 = document.querySelector('#range_1')
range_1.setAttribute('min', 0)
range_1.setAttribute('max', 100)
range_1.value = 0
range_1.addEventListener('input', (event) => {
    document.querySelector('#value_1').textContent = event.target.value
})

const range_2 = document.querySelector('#range_2')
range_2.setAttribute('min', 0)
range_2.setAttribute('max', 100)
range_2.value = 0
range_2.addEventListener('input', (event) => {
    document.querySelector('#value_2').textContent = event.target.value
})

const range_3 = document.querySelector('#range_3')
range_3.setAttribute('min', 0)
range_3.setAttribute('max', 100)
range_3.value = 0
range_3.addEventListener('input', (event) => {
    document.querySelector('#value_3').textContent = event.target.value
})