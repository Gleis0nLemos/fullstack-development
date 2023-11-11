/* ----------------------------------------------------------------------------

Exercício: 019
Enunciado:
    Está declarado um array de frutos.
    Ao inserir uma palavra no input text e clicando em pesquisar, o sistema deverá
    indicar se a palavra existe ou não no array e indicar o resultado SIM ou NAO no
    elemento com o id = "resultado"

    NOTA: Não podes usar um ciclo neste exercício.
---------------------------------------------------------------------------- */

// MINHA RESOLUCAO

// let frutos = ['laranja', 'maçã', 'pêra', 'morango', 'ananás', 'limão', 'banana'];

// const button = document.querySelector('.btn');
// const input = document.querySelector('#text_palavra');
// const resultado = document.querySelector('#resultado');

// button.addEventListener('click', () => {
//   const palavra = input.value;
//   if (frutos.includes(palavra)) {
//     resultado.textContent = 'SIM';
//   } else {
//     resultado.textContent = 'NÃO';
//   }
// });

// RESOLUCAO DO PROFESSOR

let frutos = ['laranja', 'maçã', 'pêra', 'morango', 'ananás', 'limão', 'banana'];

document.querySelector(".btn").addEventListener('click', () => {
    document.querySelector("#resultado").textContent = frutos.includes(
        document.querySelector("#text_palavra").value
    ) ? "SIM" : "NÃO";
})