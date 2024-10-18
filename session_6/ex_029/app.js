/* ----------------------------------------------------------------------------

Exercício: 029
Enunciado:
    Começando pelo exercício 28, mas agora queremos apresentar os números numa
    sequência de quatro por cada linha. Deve aparecer com fundo branco e texto 
    de cor verde. Deve ter uma distribuição consistente da informação. 
---------------------------------------------------------------------------- */

// MINHA RESOLUÇÃO

// document.querySelector("button").addEventListener("click", () => {
//     const numeros = document.querySelector("#numeros");
//     numeros.innerHTML = "";

//     let linha = '';

//     for (let i = 0; i < 20; i++) {
//         const numero = Math.floor(Math.random() * 1000) + 1;
//         linha += `
//             <span
//                 style="
//                     display: inline-block;
//                     font-size: 20px;
//                     min-width: 50px;
//                     text-align: center;"        
//             >${numero}</span> `;
        
//         if ((i + 1) % 4 === 0) {
//             numeros.innerHTML += `
//              <div 
//                 style="
//                     background-color: white; 
//                     color: green;
//                     padding: 10px;
//                     display: flex;
//                     width: 50%;
//                     justify-content: space-around;
//                     margin: 0 auto;"
//             >
//                 ${linha}
//             </div>`;
//             linha = '';
//         }
//     }
// })

// RESOLUÇÃO DO PROFESSOR

const numeros = document.querySelector("#numeros");
const div_row = document.createElement("div");

div_row.classList.add("row");

document.querySelector("button").addEventListener('click', () => {
    div_row.innerHTML = null;

    for(let i = 0; i < 20; i++) {
        const numero = Math.floor(Math.random() * 1000) + 1;
        const div_col = document.createElement("div");
        div_col.classList.add('col-3', 'text-center');
        div_col.style.backgroundColor = "white";
        div_col.style.color = "green";
        div_col.style.padding = "10px";
        div_col.textContent = numero;
        div_row.appendChild(div_col);
    }

    numeros.appendChild(div_row);
})