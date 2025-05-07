# Resolución – Parcial Tecnología y Gestión Web (29/06/2018)

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
  const mensaje = document.getElementById('mensaje-error');

  if (!nombre || !apellido || !materia || nota1 == 0 || nota2 == 0 || nota3 == 0) {
    mensaje.textContent = "Todos los campos deben estar completos y las notas mayores a 0.";
    mensaje.style.color = "red";
    mensaje.style.fontSize = "20px";
    return false;
  }

  mensaje.textContent = ""; // limpiar mensaje anterior
  return true;
}
```

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
    imprimirError("Todos los campos deben estar completos y las notas mayores a 0.");
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

## 4. Web 2.0 – Conceptos y Ejemplos

- **Participación del usuario:** Los usuarios generan contenido (ej: YouTube, Wikipedia).
- **Inteligencia colectiva:** Opiniones de usuarios construyen valor (ej: TripAdvisor, MercadoLibre).
- **Interactividad:** Interfaces dinámicas y personalizadas (ej: Facebook, Gmail).

---

## 5. Modelos de Negocio

### a) Advertising (Publicidad)
Ingresos por mostrar anuncios.
- Google Ads
- YouTube
- Facebook

### b) Manufacturer (Fabricante)
Venta directa del fabricante al consumidor.
- Apple
- Tesla
- Dell

### c) Subscription (Suscripción)
Acceso continuo a cambio de pagos periódicos.
- Netflix
- Spotify
- Adobe Creative Cloud

---

## 6. Protocolo HTTP

### Características:
- Usa el modelo cliente-servidor
- Funciona sobre el puerto 80 (HTTP) o 443 (HTTPS)
- Basado en peticiones (GET, POST, etc.) y respuestas
- No guarda estado (stateless)

### Ejemplos:
- Cliente: navegador web
- Servidor: Apache, Nginx, IIS

### Seguridad en comercio electrónico:
- Se usa **HTTPS** (HTTP sobre TLS/SSL)
- Garantiza **encriptación**, **integridad** y **autenticación**

---
