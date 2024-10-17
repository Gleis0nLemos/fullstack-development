/* ----------------------------------------------------------------------------

Exercício: 026
Enunciado:
    Existem 4 inputs de texto, cada um com um id diferente.
    Cada input só pode receber um caracter.
    O focus deve iniciar no primeiro input.
    Ao digitar um algarismo, o focus deve ir para o próximo input.
    Ao digitar o último algarismo, o focus deve ir para o primeiro input.
    Se todos os inputs estiverem preenchidos, o sistema deve verificar se o
    número constituído pela concatenacao dos 4 algarismos é igual a 1234.
    Se for igual, deve aparecer uma mensagem de sucesso, caso contrário,
    a mensagem de sucesso deve estar escondida.
---------------------------------------------------------------------------- */

// MINHA RESOLUÇÃO

// const inputs = document.querySelectorAll('input[type="text"]');
// const message = document.querySelector('.text-success');

// message.innerHTML = '';
// inputs[0].focus();

// inputs.forEach((input, index) => {
//     input.addEventListener('input', function() {
        
//         if (this.value.length > 1) {
//             this.value = this.value.slice(0, 1)
//         }

//         if (index < inputs.length - 1) {
//             inputs[index + 1].focus();
//         } else {
//             inputs[0].focus();
//         }

//         if (Array.from(inputs).every(input => input.value !== '')) {
//             const concatenatedValue = Array.from(inputs).map(input => input.value).join('');

//             if (concatenatedValue === '1234') {
//                 message.innerHTML = 'Certo!';
//                 message.style.display = 'block';
//             } else {
//                 message.innerHTML = '';
//                 message.style.display = 'none';
//             }
//         }
//     })
// });

// RESOLUÇÃO DO PROFESSOR

const inputs = document.querySelectorAll('input[type="text"]');
const sucesso = document.querySelector('.text-success');

inputs[0].focus();
sucesso.classList.add("d-none");
let index = 0;

inputs.forEach(input => {
    input.setAttribute("maxlength", 1);
    input.addEventListener("input", () => {
        if(input.value != '') {
            index++;
            if(index == 4) {
                index = 0;
            }
            inputs[index].focus();
            verificar();
        }
    })
});

function verificar() {
    let numero = "";
    inputs.forEach(input => {
        numero += input.value;
    })
    if (numero == "1234") {
        sucesso.classList.remove("d-none");
    } else {
        sucesso.classList.add("d-none");
    }
}