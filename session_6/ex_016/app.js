/* ----------------------------------------------------------------------------

Exercício: 016
Enunciado:
    Ao clicar em "Adicionar", se o input tiver texto, adicionar o mesmo num
    parágrafo por baixo do botão. 
    Não importa a ordem das palavras e frases.
    Quando clicar em "Limpar", todas as palavras e frases devem desaparecer
    e o input deve ficar limpo e receber o focus.

    NOTA: O HTML não pode ser alterado.
---------------------------------------------------------------------------- */

// MINHA RESOLUCAO

// let input = document.querySelector('#text_post');

// //add
// document.querySelectorAll('.btn')[1].addEventListener('click', () => {
//     if (input.value !== '') {
//         let p = document.createElement('p');
//         p.textContent = input.value;
//         document.querySelector('#posts').prepend(p);
//         input.value = '';
//         input.focus();
//     }    
// });

// //clean
// document.querySelectorAll('.btn')[0].addEventListener('click', () => {
//     document.querySelector('#posts').innerHTML = '';
//     input.value = '';
//     input.focus();  
// });

// RESOLUCAO DO PROFESSOR

let input = document.querySelector('#text_post');

//add
document.querySelector('.mt-3.text-center').lastElementChild.addEventListener('click', () => {
    if (input.value !== '') {
        let p = document.createElement('p');
        p.textContent = input.value;
        document.querySelector('#posts').prepend(p);
        input.value = '';
        input.focus();
    }    
});

//clean
document.querySelector('.mt-3.text-center').firstElementChild.addEventListener('click', () => {
    document.querySelector('#posts').innerHTML = null;
    input.value = '';
    input.focus();  
});