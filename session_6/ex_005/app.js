/* ----------------------------------------------------------------------------

Exercício: 005
Enunciado: TRÊS SLIDERS COM VALORES INDEPENDENTES - VERSÃO CÓDIGO REDUZIDO
    
    O exercício anterior, mas com quantidade de código JS reduzida.

---------------------------------------------------------------------------- */

// MINHA RESOLUÇÃO

// declaração dos ranges
// const range_1 = document.querySelector('#range_1')
// const range_2 = document.querySelector('#range_2')
// const range_3 = document.querySelector('#range_3')

// function set_valor() {

//     const ranges = [range_1, range_2, range_3]
//     const values = ["#value_1", "#value_2", "#value_3"]

//     for (let i=0; i < ranges.length; I++) {
//         if (ranges[i]) {
//             ranges[i].setAttribute('min', 0, 'max', 100)
//             ranges[i].value = 0
//             ranges[i].addEventListener('input', (event) => {
//                 document.querySelector(values[i].textContent = event.target.value)
//             })
//         }
//     }
// }

// RESOLUÇÃO DO PROFESSOR

for (let r = 1; r <= 3; r++) {
    let el = document.querySelector("#range_" + r)
    el.setAttribute('min', 0)
    el.setAttribute('max', 100)
    el.value = 0
    el.addEventListener('input', (event) => {
        document.querySelector('value_' + r).textContent = event.target.value
    })
}