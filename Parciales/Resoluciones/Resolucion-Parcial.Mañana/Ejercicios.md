# Resolución desde el Enunciado 2 y 3

---

## 2. Función `validar()` en JavaScript

```javascript
function validar() {
  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const materia = document.getElementById('materia').value.trim();
  const nota1 = document.getElementById('nota1').value;
  const nota2 = document.getElementById('nota2').value;
  const nota3 = document.getElementById('nota3').value;

  if (!nombre || !apellido || !materia || !nota1 || !nota2 || !nota3) {
    const error = document.getElementById("mensaje-error");
    error.textContent = "Todos los campos son obligatorios.";
    error.style.color = "red";
    error.style.fontSize = "20px";
    return false;
  }

  if (nota1 == 0 || nota2 == 0 || nota3 == 0) {
    const error = document.getElementById("mensaje-error");
    error.textContent = "Las notas deben ser mayores a 0.";
    error.style.color = "red";
    error.style.fontSize = "20px";
    return false;
  }

  return true;
}
```

`<div id="mensaje-error"></div>` en el HTML para mostrar el mensaje.

---

## 3. Script `promedio.php`

```php
<?php
function imprimirError($mensaje) {
  echo "<p style='color:red; font-size:20px;'>$mensaje</p>";
  exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = trim($_POST["nombre"] ?? '');
  $apellido = trim($_POST["apellido"] ?? '');
  $materia = trim($_POST["materia"] ?? '');
  $nota1 = (int)($_POST["nota1"] ?? 0);
  $nota2 = (int)($_POST["nota2"] ?? 0);
  $nota3 = (int)($_POST["nota3"] ?? 0);

  if (!$nombre || !$apellido || !$materia || $nota1 == 0 || $nota2 == 0 || $nota3 == 0) {
    imprimirError("Todos los campos deben estar completos y las notas deben ser mayores a 0.");
  }

  $promedio = round(($nota1 + $nota2 + $nota3) / 3, 2);
  $color = ($promedio < 6) ? "red" : "green";

  echo "<div>";
  echo "<p><strong>Nombre:</strong> $nombre</p>";
  echo "<p><strong>Apellido:</strong> $apellido</p>";
  echo "<p><strong>Materia:</strong> $materia</p>";
  echo "<p><strong>Promedio:</strong> <span style='color:$color;'>$promedio</span></p>";
  echo "</div>";
} else {
  imprimirError("Acceso inválido.");
}
?>
```

---

## 4. Tecnología del Cliente

Las tecnologías del cliente son aquellas que se ejecutan del lado del usuario final, en su navegador. Permiten la interacción directa con la aplicación web. Algunos ejemplos son:

- **HTML:** estructura el contenido de la web.
- **CSS:** define la presentación visual.
- **JavaScript:** añade interactividad.
- **Frameworks JS (React, Vue, Angular):** facilitan el desarrollo dinámico.
- **APIs del navegador (DOM, Fetch):** permiten manipular el contenido y comunicarse con el servidor.

---

## 5. Evolución de las Tecnologías del Cliente

Las tecnologías del cliente han evolucionado enormemente:

- Pasamos de páginas estáticas a **aplicaciones web interactivas**.
- El uso de **AJAX y fetch** permitió cargar datos sin recargar la página.
- Surgieron frameworks como **React** o **Angular**, que facilitan el desarrollo modular.
- Mejores prácticas de **diseño responsivo y accesibilidad**.
- Mayor poder de cómputo en el navegador y herramientas de desarrollo integradas.

---

## 6. Modelo TCP/IP

### a) Capas existentes y sus características

El modelo TCP/IP tiene 4 capas:

1. **Capa de Aplicación:** proporciona servicios de red a las aplicaciones del usuario (HTTP, FTP, SMTP).
2. **Capa de Transporte:** asegura la entrega de los datos (TCP, UDP).
3. **Capa de Internet:** se encarga del direccionamiento y el envío de paquetes (IP).
4. **Capa de Acceso a la Red:** maneja la transmisión física de datos (Ethernet, Wi-Fi).

### b) Ejemplo de funcionamiento

Cuando un usuario accede a una página web:

- La **capa de aplicación** usa HTTP para solicitar la página.
- La **capa de transporte** divide la solicitud en segmentos TCP.
- La **capa de internet** agrega direcciones IP para el enrutamiento.
- La **capa de red** transmite los datos por cables o inalámbricamente.

Cada capa interactúa solo con las adyacentes, permitiendo modularidad y eficiencia.

---
