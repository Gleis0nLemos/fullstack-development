/* ----------------------------------------------------------------------------

Exercício: 012
Enunciado:
    Ao clicar no botão "Adicionar", se o input de texto não estiver vazio, adicionar
    um parágrafo com esse texto por baixo do botão.
---------------------------------------------------------------------------- */

// MINHA RESOLUCAO

// document.querySelector('.btn').addEventListener('click', () => {
//     const inputText = document.querySelector('#text_post').value;
//     if (inputText !== '') {
//         const paragraph = document.createElement('p');
//         paragraph.textContent = inputText;
//         document.querySelector('#posts').appendChild(paragraph);
//     }
// });


// RESOLUCAO DO PROFESSOR

document.querySelector('.btn').addEventListener('click', () => {
    let texto = document.querySelector('#text_post').value;
    if (texto !== '') {
        let p = document.createElement('p');
        p.textContent = texto;
        document.querySelector('#posts').appendChild(p);
    }
});