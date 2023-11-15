/* ----------------------------------------------------------------------------

Exercício: 021
Enunciado:
    Existem 4 inputs na página.
    1. Coloca o focus automaticamente no input acima e à esquerda.
    2. Sempre que pressionares a tecla Enter (return), o focus deverá
    passar para o input seguinte, mesmo que não tenhas escrito qualquer texto.
---------------------------------------------------------------------------- */

// MINHA RESOLUCAO

// const input1 = document.querySelector('input[name="text_1"]');
// const input2 = document.querySelector('input[name="text_2"]');
// const input3 = document.querySelector('input[name="text_3"]');
// const input4 = document.querySelector('input[name="text_4"]');

// input1.addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//         event.preventDefault();
//         input2.focus();
//     }
// });

// input2.addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//         event.preventDefault();
//         input3.focus();
//     }
// });

// input3.addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//         event.preventDefault();
//         input4.focus();
//     }
// });

// input4.addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//         event.preventDefault();
//         // Se quiser voltar para o primeiro input, pode usar input1.focus();
//         // Ou pode adicionar uma lógica específica aqui, dependendo do que deseja fazer
//     }
// });

// RESOLUCAO DO PROFESSOR

let inputs = document.querySelectorAll('[name^="text_"]');
inputs[0].focus();
inputs.forEach(input => {
    input.addEventListener('keyup', (evt) => {
        if (evt.code == 'Enter') {
            let index = input.name.substring(5) - 1;
            index++;
            if (index == 4) index = 0;
            inputs[index].focus();
        }
    });
})