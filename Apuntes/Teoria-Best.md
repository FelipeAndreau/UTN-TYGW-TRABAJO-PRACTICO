# Resumen Tecnología y Gestión Web

---

## 1. Historia de la Web
- **Hipertexto:** Texto con enlaces a otros documentos o secciones.

- **Cronología clave:**
  - **1941** – *El jardín de los senderos que se bifurcan* (J. L. Borges)
  - **1945** – Memex (V. Bush): máquina teórica de organización documental.
  - **1963/1968** – Ted Nelson (Hypertext-Hypermedia) y Douglas Engelbart (primera interfaz de hipertexto)
  - **1980** – ENQUIRE (Tim Berners-Lee): base de datos de hipertexto proto-WWW
  - **1987** – HyperCard (Apple): enlaces entre “cartas” visuales

- **Nacimiento de la Web:**
  - Servicio sobre Internet, usando HTTP para transmitir información.
  - **1989** – Propuesta de un sistema de manejo de información (Berners-Lee)
  - **1991** – HTTP/0.9
  - **1992** – Definición de HTML (≲15 etiquetas)

---

## 2. Protocolos de Internet

### 2.1 Internet y HTTP
- **Internet:** Red de redes con protocolos comunes (FTP, SMTP/POP, TELNET, GOPHER, WAIS, HTTP).
- **HTTP (HyperText Transfer Protocol):**
  - Base de la WWW, opera sobre TCP.
  - Protocolo sin estado; la gestión de sesiones se hace en capa de aplicación.

### 2.2 DNS
- Traduce nombres de dominio a direcciones IP, simplificando la configuración de clientes.

---

## 3. HTML
- **Definición:** Lenguaje de marcado para estructurar documentos web mediante “etiquetas”.
- **Versiones principales:**
  - HTML 1 (1991) → 22 elementos
  - HTML 2.0 (1995) → estandarización IETF
  - HTML 3.2 (1997) → applets Java, texto alrededor de imágenes
  - HTML 4.0 / 4.01 (1998/1999) → CSS, scripts, accesibilidad, formularios mejorados
  - XHTML 1.0 (2000) → DTD XML
  - HTML5 (2014) → 142 elementos, multimedia nativo, APIs semánticas

---

## 4. Evolución de la Web

| Era            | Años        | Características principales                                                                                  |
| -------------- | ----------- | ------------------------------------------------------------------------------------------------------------ |
| **Web 1.0**    | 1994 – 1997  | Páginas estáticas; no interactividad; framesets; contadores de visitas; libros de visitas; GIFs.            |
| **Web 1.5**    | 1997 – 2003  | Páginas dinámicas; PHP, ASP, JSP; JavaScript, VBScript; XML, XHTML, CSS; uso de bases de datos.             |
| **Web 2.0**    | 2003 – hoy   | La Web como plataforma; inteligencia colectiva; fin de versiones rígidas; UX rica.                           |
| **Web 3.0/5.0**| Futuro      | Web semántica; IA; realidad aumentada; 3D; HTML5/CSS3 avanzado.                                              |

---

## 5. Arquitectura Web

### 5.1 Componentes
- **Cliente (navegador):** Interfaz de usuario; envía peticiones HTTP.
- **Servidor:** Responde peticiones; ejecuta aplicaciones web.

### 5.2 Modelos de red

#### Modelo OSI (7 capas)
1. **Física:** Medio de transmisión (cable, señal binaria)  
2. **Enlace de datos:** Direcciones MAC, tramas, control de errores y flujo  
3. **Red:** IP, enrutamiento, paquetes  
4. **Transporte:** TCP (conexión), UDP (sin conexión), sockets/puertos  
5. **Sesión:** Gestión de sesiones y reanudación  
6. **Presentación:** Adaptación de formatos (codificaciones de caracteres)  
7. **Aplicación:** Protocolos de alto nivel (HTTP, FTP, SMTP…)

#### Modelo TCP/IP (4 capas)
1. **Enlace:** Física + enlace de datos  
2. **Red:** IP  
3. **Transporte:** TCP/UDP  
4. **Aplicación:** Sesión + presentación + aplicación

---

## 6. Tecnologías de Front-End

### 6.1 HTML5 (elementos semánticos)
- `<section>`, `<article>`, `<header>`, `<nav>`, `<aside>`, `<footer>`, `<video>`, `<audio>`, `<details>`, `<svg>`, Web Storage.

### 6.2 CSS / CSS3
- **Historia:** Nace en 1994–95 (Lie & Bos).  
- **Ventaja:** Separación contenido/estilo; herencia en cascada.  
- **Incorporación:** Inline, `<style>` en `<head>`, archivos externos (`<link>`).  
- **Selectores:** Universal `*`, etiqueta, clase `.clase`, ID `#id`, combinadores.  
- **Modelo de caja:** `margin`, `border`, `padding`, `width`, `height`.  
- **CSS3:** Bordes redondeados, sombras, múltiples fondos, columnas, media queries.

### 6.3 JavaScript
- **Definición:** Lenguaje interpretado, prototípico, débilmente tipado.  
- **Historia:** LiveScript → JavaScript (1995, Netscape); ECMA-262 1ª ed. (1997).  
- **Incorporación:** Inline `<script>`, externo `.js`, en atributos HTML.  
- **DOM:** Árbol de nodos; manipulación vía `document.getElementById`, creación/eliminación de nodos.  
- **Eventos:** `onclick`, `onload`, `onchange`, `onmouseover`; manejadores en atributos o vía JS.

---

## 7. Metodologías Ágiles

- **Principios (Manifiesto Ágil):**  
  1. Individuos e interacciones sobre procesos y herramientas  
  2. Software funcionando sobre documentación exhaustiva  
  3. Colaboración con el cliente sobre negociación contractual  
  4. Responder al cambio sobre seguir un plan

- **Scrum:**  
  - **Roles:** Product Owner, Scrum Master, Equipo de desarrollo  
  - **Artefactos:** Product Backlog, Sprint Backlog, Incremento  
  - **Ceremonias:** Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective  
  - **Sprints:** Iteraciones cortas (2–4 semanas)

- **Kanban:**  
  - Visualiza el flujo de trabajo (tablero con columnas: “Por hacer”, “En progreso”, “Hecho”)  
  - Límites de trabajo en progreso (WIP)  
  - Mejora continua mediante métricas (lead time, throughput)

- **XP (eXtreme Programming):**  
  - Prácticas: programación en parejas, desarrollo basado en pruebas (TDD), integración continua, refactoring, entrega continua.

---

## 8. Modelos de Negocio Web
- **B2B / B2C / C2C**  
- **Long Tail:** Muchos nichos que suman más que unos pocos éxitos.  
- **Tipología (Rappa):**  
  - **Brokerage:** mercados (Airbnb, Mercado Libre)  
  - **Advertising:** portales y banners (Facebook, Infobae)  
  - **Infomediary:** análisis de datos (TripAdvisor)  
  - **Merchant:** venta directa (Amazon, Alibaba)  
  - **Manufacturer Direct:** canal directo (Dell, Apple)  
  - **Affiliate:** comisiones por tráfico/ventas  
  - **Community:** contenido colaborativo (Wikipedia, Twitch)  
  - **Subscription:** pago periódico (Netflix)  
  - **Utility:** pago por uso (AWS)

---

## 9. Redes Sociales y APIs
- **Redes Sociales:**  
  - Origen teórico (1954: Barnes); “lazos débiles” (Granovetter, 1973).  
  - Difusión de información y capital social vs. humano.

- **Social Media (Kaplan & Haenlein, 2009):** Apps web 2.0 para creación/intercambio de contenido UGC.

- **APIs:** Permiten integración, automatización y acceso a datos de múltiples plataformas.
