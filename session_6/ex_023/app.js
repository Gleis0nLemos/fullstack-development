/* ----------------------------------------------------------------------------

Exercício: 023
Enunciado:
    Existem 4 checkboxes referentes a um conjunto de permissões de usuário.
    Cada checkbox pode ser checkada individualmente.
    Por baixo existem duas opções: todas e nenhuma.
    Ao clicar em todas, todas as checkboxes devem ser checkadas.
    Ao clicar em nenhuma, todas as checkboxes devem ser descheckadas.
---------------------------------------------------------------------------- */

// MINHA RESOLUÇÃO

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

document.querySelector('#all').addEventListener('click', () => {
    checkboxes.forEach(checkbox => checkbox.checked = true);
});

document.querySelector('#none').addEventListener('click', () => {
    checkboxes.forEach(checkbox => checkbox.checked = false);
});

