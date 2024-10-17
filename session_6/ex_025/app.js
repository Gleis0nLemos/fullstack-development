/* ----------------------------------------------------------------------------

Exercício: 025
Enunciado:
    O input number text_numero é o multiplicando. O seu valor só pode variar
    entre 1 e 20. Ao alterar o valor, deve ser apresentada a tabuada do número definido
    no div cujo id = resultados.
---------------------------------------------------------------------------- */

// MINHA RESOLUÇÃO

// // const inputNumber = document.querySelector('#text_numero');
// // const divResultados = document.querySelector('#resultados');

// // inputNumber.addEventListener('input', () => {
// //     const numero = parseInt(inputNumber.value);
    
// //     if (numero < 1 || numero > 20) {
// //         divResultados.textContent = '';
// //         return;     
// //     }

// //     divResultados.textContent = '';

// //     for (let i = 1; i <= 10; i++) {
// //         const p = document.createElement('p');
// //         p.textContent = `${numero} x ${i} = ${numero * i}`
// //         divResultados.appendChild(p);
// //     }
// })

// RESOLUÇÃO DO PROFESSOR

const resultados = document.querySelector("#resultados");
const text_numero = document.querySelector("#text_numero");

text_numero.setAttribute("min", 1);
text_numero.setAttribute("max", 20);

tabuada(1);

text_numero.addEventListener('change', () => {
    tabuada(text_numero.value);
});

function tabuada(valor) {
    let html = "";
    for (let i = 1; i <= 10; i++) {
        html += `${valor} x ${i} = ${valor * i}<br>`;
    }
    resultados.innerHTML = html;
}