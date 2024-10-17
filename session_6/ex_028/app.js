/* ----------------------------------------------------------------------------

Exercício: 028
Enunciado:
    Existe um botão o qual, ao ser clicado, cria 20 números aleatórios entre 1 e 1000.
    Esses números devem ser apresentados cada um em sua própria linha dentro do elemento
    cujo id é igual a "numeros".
---------------------------------------------------------------------------- */

// MINHA RESOLUÇÃO

// const botaoGerarNumeros = document.querySelector('button');
// const divNumeros = document.querySelector('#numeros');

// botaoGerarNumeros.addEventListener('click', () => {
//     divNumeros.innerHTML = '';

//     for (let i = 0; i < 20; i++) {
//         const numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
//         divNumeros.innerHTML += `<p>${numeroAleatorio}</p>`;
//     }
// });

// RESOLUÇÃO DO PROFESSOR

document.querySelector("button").addEventListener("click", () => {
    const numeros = document.querySelector("#numeros");
    numeros.innerHTML = "";

    for (let i = 0; i < 20; i++) {
        const numero = Math.floor(Math.random() * 1000) + 1;
        numeros.innerHTML += `${numero}<br>`;
    }
})