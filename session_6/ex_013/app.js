/* ----------------------------------------------------------------------------

Exercício: 013
Enunciado:
    Ao clicar no botão "Adicionar", se o input de texto não estiver vazio, adicionar
    um parágrafo com esse texto por baixo do botão. O texto deve apresentar uma numeração
    sequencial e depois de inserido, o input deve ser limpo e receber o focus para
    nova inserção.
---------------------------------------------------------------------------- */

// MINHA RESOLUÇÃO

// let count = 0;
// const btnAdd = document.querySelector('.btn');
// const inputText = document.querySelector('#text_post')

// btnAdd.addEventListener('click', () => {
//    const text = inputText.value;
//     if (text !== '') {
//         const paragraph = document.createElement('p');
//         paragraph.textContent = `${++count} - ${text}`;
//         document.querySelector('#posts').appendChild(paragraph);

//         inputText.value = '';
//         inputText.focus();
//     }    
// });

// RESOLUCAO DO PROFESSOR

let index = 1;
document.querySelector('.btn').addEventListener('click', () => {
    let input = document.querySelector('#text_post');
    if (input.value !== '') {
        let p = document.createElement('p');
        p.textContent = `${index++} - ${input.value}`;
        document.querySelector('#posts').appendChild(p);

        input.value = '';
        input.focus();
    }    
});