/* ----------------------------------------------------------------------------

Exercício: 009
Enunciado:
    Exercício simples: O texto é branco e o elemento range vai servir para
    alterar a transparência do texto. Do valor mais opaco à esquerda, até
    à transparência total à direita.

    NOTA: Deves definir os valores do range.
---------------------------------------------------------------------------- */

// MINHA RESOLUÇÃO

// // Seleciona o elemento de input tipo range.
// const rangeInput = document.querySelector('#range');

// // Seleciona o elemento de texto que deseja alterar a opacidade.
// const texto = document.querySelector('h3');

// // Adiciona um ouvinte de evento para detectar alterações no input tipo range.
// rangeInput.addEventListener('input', () => {
//     // Obtém o valor atual do input.
//     const valorRange = rangeInput.value;

//     // Calcula a opacidade com base no valor do range (de 0 a 1).
//     const opacidade = valorRange / 100;

//     // Define a opacidade do texto.
//     texto.style.opacity = opacidade;
// });

// RESOLUÇÃO DO PROFESSOR

const range = document.querySelector("#range")
const texto = document.querySelector("h3")
range.setAttribute('min', 0);
range.setAttribute('max', 100);
range.value = 0;
range.addEventListener('input', (el) => {
    texto.style.opacity = 1 - el.target.value / 100;
})


