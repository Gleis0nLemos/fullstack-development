/* ----------------------------------------------------------------------------

Exercício: 006
Enunciado:
    O mesmo exercício do vídeo anterior, mas com código mais sintético.
---------------------------------------------------------------------------- */

// MINHA RESOLUÇÃO

// const tabButtons = document.querySelectorAll('[id^="tab"]');
// const infoElements = document.querySelectorAll('[id^="info"]');

// tabButtons.forEach((button, index) => {
//     button.addEventListener('click', () => {
//         infoElements.forEach((element) => element.classList.add("d-none"));
//         infoElements[index].classList.remove("d-none");
//     });
// });

// infoElements.forEach((element, index) => {
//     if (index !== 0) {
//         element.classList.add("d-none");
//     }
// });

// RESOLUÇÃO DO PROFESSOR

document.querySelectorAll('[id^="info"]').forEach((e) => [e.classList.add("d-none")]);
document.querySelector('#info1').classList.remove("d-none");
document.querySelectorAll('[id^="tab"]').forEach((btn) => {
    btn.addEventListener('click', (btn) => {
        document.querySelectorAll('[id^="info"]').forEach((e) => [e.classList.add("d-none")]);
        document.querySelector("#info" + btn.target.id.substring(3)).classList.remove("d-none");
    })
}) 
