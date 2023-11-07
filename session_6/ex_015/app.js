/* ----------------------------------------------------------------------------

Exercício: 015
Enunciado:
    Ao clicar em "Adicionar", se o input tiver texto, adicionar o mesmo num
    parágrafo por baixo do botão.

    As palavras e frases mais recentes devem ficar no topo.
---------------------------------------------------------------------------- */

// MINHA RESOLUCAO

// btnAdd = document.querySelector('.btn')
// btnAdd.addEventListener('click', () => {
//     let input = document.querySelector('#text_post');
//     if (input.value !== '') {
//         let p = document.createElement('p');
//         p.textContent = input.value;
//         let post = document.querySelector('#posts');

//         let firstChild = post.firstChild;
//         post.insertBefore(p, firstChild);
//         input.value = '';
//         input.focus();
//     }    
// });

// RESOLUCAO DO PROFESSOR

document.querySelector('.btn').addEventListener('click', () => {
    let input = document.querySelector('#text_post');
    if (input.value !== '') {
        let p = document.createElement('p');
        p.textContent = input.value;
        document.querySelector('#posts').prepend(p);
        input.value = '';
        input.focus();
    }    
});