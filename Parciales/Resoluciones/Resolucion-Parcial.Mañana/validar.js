function validar() {
  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const materia = document.getElementById('materia').value.trim();
  const nota1 = document.getElementById('nota1').value;
  const nota2 = document.getElementById('nota2').value;
  const nota3 = document.getElementById('nota3').value;

  if (!nombre || !apellido || !materia || !nota1 || !nota2 || !nota3) {
    alert("Todos los campos son obligatorios.");
    return false;
  }

  return true;
}
