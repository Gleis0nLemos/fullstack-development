/* ----------------------------------------------------------------------------

Exercício: 011
Enunciado:
    A grelha inicial contém dezasseis imgs sem souce.
    Quando clicamos numa das imgs, vamos apresentar o símbolo X (imagem)
    No clique seguinte, que só pode acontecer numa img que não tenha símbolo,
    vamos apresentar o símbolo 'O'.
---------------------------------------------------------------------------- */

// MINHA RESOLUCAO

// const images = document.querySelectorAll('img');

// let currentImage = 'x.png';

// images.forEach((image) => {
//   image.addEventListener('click', () => {
//     if (!image.getAttribute('src')) {
//       image.setAttribute('src', currentImage);

//       currentImage = currentImage === 'x.png' ? 'o.png' : 'x.png';
//     }
//   });
// });

// RESOLUCAO DO PROFESSOR
let filled_imgs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let symbols = "x";
document.querySelectorAll('id^=img').forEach((img) => {
    img.addEventListener('click', () => {
        let index = img.target.id.substring(3);
        place_symbo(index);
    })
})

function place_symbo(index) {
    if (filled_imgs[index] - 1 != 0) return;
    
    document.querySelector('#img' + index).setAttribute('src', '/' + symbols + 'png');
    filled_imgs[index-1] = 1;
    if(symbols == 'x') symbols = 'o';
    else symbols = 'x';
}