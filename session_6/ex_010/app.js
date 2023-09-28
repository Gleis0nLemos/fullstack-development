/* ----------------------------------------------------------------------------

Exercício: 010
Enunciado:
    Existem 4 áreas a cinza.
    Ao clicar numa das áreas a área clicada deve ficar com fundo
    amarelo e as restantes a vermelho.
---------------------------------------------------------------------------- */

// MINHA RESOLUCAO

// document.querySelectorAll('.box').forEach((box) => {
//     box.addEventListener('click', (e) => {
//         const clickedBox = e.target;
//         clickedBox.style.backgroundColor = 'yellow';

//         document.querySelectorAll('.box').forEach((otherBox) => {
//             if (otherBox !== clickedBox) {
//                 otherBox.style.backgroundColor = 'red';
//             }
//         });
//     });
// });

// RESOLUCAO DO PROFESSOR

const boxes = document.querySelectorAll('[id^="box"]');
boxes.forEach((box) => {
    box.addEventListener('click', (box) => {
        all_red()
        box.style.backgroundColor = 'yellow';
    })
})

function all_red() {
    boxes.forEach((box) => {
        box.style.backgroundColor = 'red';
    })
}