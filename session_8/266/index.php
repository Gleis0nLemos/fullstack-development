<?php

  // OPERADORES DE STRINGS  
  // . .=  

  // São operadores específicos para efetuar operações com strings  
  // Estamos a falar especificamente de operadores de concatenação.  

  $nome = "joao";  
  $nome = $nome . " Ribeiro"; // joao Ribeiro  
  $apresentacao = "Bom dia, " . $nome . '.'; // Bom dia, joao Ribeiro.  

  // Podemos simplificar uma parte do código acima da seguinte forma  
  $nome = "joao";  
  $nome .= " Ribeiro"; // joao Ribeiro  

  // portanto...  
  $cliente = "joao Ribeiro";  
  $telefone = "123456789";  
  $email = "joao.ribeiro@gmail.com";  

  $completo = $cliente . ' - ' . $telefone . ' - ' . $email;  
  // joao Ribeiro - 123456789 - joao.ribeiro@gmail.com