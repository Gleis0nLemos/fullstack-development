/* ----------------------------------------------------------------------------

Exercício: 024
Enunciado:
    Existem 8 checkboxes referentes a um conjunto de permissões de usuário.
    Cada uma delas pode ser checkada individualmente.
    Por baixo, existe um select com 3 perfis de usuário: administrador, coordenador
    e operador.
    Ao selecionar um perfil, as checkboxes devem ser checkadas de acordo com o
    perfil selecionado.

    Administrador: 
        Todas as permissões

    Coordenador: 
        Coordenação dos trabalhos
        Gestão de calendário
        Utilização das máquinas
        Utilização das ferramentas

    Operador:
        Utilização das máquinas
        Utilização das ferramentas

    NOTA: sem perfil, todas as checkboxes devem estar descheckadas.

---------------------------------------------------------------------------- */

// MINHA RESOLUÇÃO

// const selectPerfil = document.querySelector('#select_perfil');
// const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// selectPerfil.addEventListener('change', function () { 
//     checkboxes.forEach(checkbox => checkbox.checked = false);  

//     if (this.value === '') {
//         checkboxes.forEach(checkbox => checkbox.checked = false);   
//     }
//     if (this.value === 'administrador') {
//         checkboxes.forEach(checkbox => checkbox.checked = true);
//     }
//     if (this.value === 'coordenador') {
//         document.getElementById('check_5').checked = true; 
//         document.getElementById('check_6').checked = true; 
//         document.getElementById('check_7').checked = true; 
//         document.getElementById('check_8').checked = true; 
//     }
//     if (this.value === 'operador') {
//         document.getElementById('check_7').checked = true; 
//         document.getElementById('check_8').checked = true; 
//     }
// })

// RESOLUÇÃO DO PROFESSOR

document.querySelector('#select_perfil').addEventListener('change', () => {
    const perfil = document.querySelector('#select_perfil').value;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    if (perfil == 'administrador') {
        checkboxes.forEach(checkbox => {
            checkbox.checked = true;
        }); 
    } else if (perfil == 'coordenador') {
        checkboxes[4].checked = true;
        checkboxes[5].checked = true;
        checkboxes[6].checked = true;
        checkboxes[7].checked = true;
    } else if (perfil == 'operador') {
        checkboxes[6].checked = true;
        checkboxes[7].checked = true;
    }
})