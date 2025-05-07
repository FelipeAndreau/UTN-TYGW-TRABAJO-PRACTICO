<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST["nombre"] ?? '';
  $apellido = $_POST["apellido"] ?? '';
  $materia = $_POST["materia"] ?? '';
  $nota1 = (int)$_POST["nota1"];
  $nota2 = (int)$_POST["nota2"];
  $nota3 = (int)$_POST["nota3"];

  $promedio = ($nota1 + $nota2 + $nota3) / 3;
  $promedio = round($promedio, 2);

  echo "<h1>Resultado</h1>";
  echo "<p><strong>Alumno:</strong> $nombre $apellido</p>";
  echo "<p><strong>Materia:</strong> $materia</p>";
  echo "<p><strong>Notas:</strong> $nota1, $nota2, $nota3</p>";
  echo "<p><strong>Promedio:</strong> $promedio</p>";
} else {
  echo "Acceso no permitido.";
}
?>
