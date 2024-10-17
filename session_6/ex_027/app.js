/* ----------------------------------------------------------------------------

Exercício: 027
Enunciado:
    Existe um input de texto no qual, sempre que for alterado o seu conteúdo,
    o mesmo deve ser apresentado em tempo real no div cujo id é igual a "conteudo".
    Contudo, se o texto contém a palavra "olá", a cor do texto deve ser verde.
    Caso contrário deverá ser sempre branca.
---------------------------------------------------------------------------- */

// MINHA RESOLUÇÃO

// const inputText = document.querySelector('#text_frase');

// inputText.addEventListener('input', function () {
//     const conteudo = document.querySelector('#conteudo');
//     conteudo.textContent = this.value;
    
//     if (this.value.includes('olá')) {
//         conteudo.style.color = 'green';
//     }
//     if (!this.value.includes('olá')) {
//         conteudo.style.color = 'white';
//     }
// });

// RESOLUÇÃO DO PROFESSOR 

const conteudo = document.querySelector('#conteudo');
document.querySelector('#text_frase').addEventListener('input', (e) => {
    conteudo.textContent = e.target.value;
    conteudo.style.color = e.target.value.includes('olá')? 'green' : 'white';
});