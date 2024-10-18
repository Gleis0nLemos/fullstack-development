/* ----------------------------------------------------------------------------

Exercício: 030
Enunciado:
    No input de texto só podemos inserir números.
    Se clicarmos no botão "Calcular", devemos apresentar o resultado do valor
    inserido no input de texto a dividir por 3.
    Todos os resultados devem ser apresentados com uma casa decimal.
    Se o resultado de qualquer cálculo for incorreto, deve aparecer a mensagem
    "Valor inválido"
---------------------------------------------------------------------------- */

// MINHA RESOLUÇÃO

// const inputNumber = document.querySelector('#text_valor')
// const resultado = document.querySelector('#resultado');

// document.querySelector('button').addEventListener('click', () => {
//     const number = inputNumber.value;

//     resultado.innerHTML = '';

//     if (isNaN(number)) {
//         resultado.textContent = 'Valor inválido';
//         return;
//     }

//     const divisao = (number / 3).toFixed(1);

//     resultado.textContent = `Resultado: ${divisao}`;
//  });

// RESOLUÇÃO DO PROFESSOR

document.querySelector("button").addEventListener('click', () => {
    const resultado = document.querySelector("#resultado");
    const valor = document.querySelector("#text_valor").value;

    if(valor === '' || isNaN(valor)) {
        resultado.textContent = "Valor inválido";
        return;
    }
    
    resultado.textContent = (valor / 3).toFixed(1);
})