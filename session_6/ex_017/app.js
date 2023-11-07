/* ----------------------------------------------------------------------------

Exercício: 017
Enunciado:
    Ao clicar em "Adicionar", se o input tiver texto, adicionar o mesmo num
    parágrafo por baixo do botão. 
   
    Não pode ser adicionada uma palavra ou frase repetida.
---------------------------------------------------------------------------- */

// MINHA RESOLUCAO

// const btnAdd = document.querySelector('.btn');
// const inputText = document.querySelector('#text_post');
// const posts = document.querySelector('#posts');
// const addedTexts = new Set();

// btnAdd.addEventListener('click', () => {

//     const text = inputText.value;

//     if (text !== '') {
//         if (!addedTexts.has(text)) {
//             const p = document.createElement('p');
//             p.textContent = text;
//             document.querySelector('#posts').appendChild(p);
//             addedTexts.add(text);    
//         }
//         inputText.value = '';
//         inputText.focus();
//     }    
// });

// RESOLUCAO DO PROFESSOR

let frases = [];

document.querySelector('.btn').addEventListener('click', () => {
    let input = document.querySelector('#text_post');
    if (input.value !== '') {
        if (!frases.includes(input.value)) {
            let p = document.createElement('p');
            p.textContent = input.value;
            document.querySelector('#posts').appendChild(p);
            frases.push(input.value);
        }
        input.value = '';
        input.focus();
    }
})