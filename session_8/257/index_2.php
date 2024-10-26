<?php

  // FLOATS

  // Tal como os inteiros, o valor mínimo e máximo depende da plataforma
  // 32 ou 64 bits

  echo PHP_FLOAT_MIN . '<br>';
  echo PHP_FLOAT_MAX . '<br>';

  // Infinity - INF - o valor é demasiado elevado para ser apresentado
  $valor = PHP_FLOAT_MAX * 3;
  echo $valor . '<br>';
  var_dump($valor);

  // converter para float
  echo '<br>';
  $valor = 10;
  $valor_float = (float)$valor;
  echo '<br>';
  var_dump($valor_float);