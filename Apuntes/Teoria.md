```markdown
# Resumen de Fuentes sobre Tecnología y Gestión Web

Este documento recopila y organiza la información proporcionada en las fuentes sobre diversos temas relacionados con la tecnología y la gestión web, incluyendo Equipos Ágiles, Historia de la Web, Arquitectura Web, HTML, CSS, JavaScript, Modelos de Negocios, Redes Sociales, Contenedores, APIs, Analytics y CMS.

## Equipos Ágiles de Delivery de Software

Un **Equipo Ágil** de desarrollo es un conjunto de personas que trabajan de forma colaborativa para entregar software. El concepto de **"Delivery"** en software es el proceso completo de hacer llegar un producto de software a los clientes.

Características importantes de los Equipos Ágiles:
*   **Autonomía y Autoorganización**.
*   **Colaboración y Comunicación Abierta**.
*   **Adaptabilidad al Cambio**.
*   **Roles Claros y Responsabilidad Compartida**.
*   **Feedback Constante y Mejora Continua**.
*   **Compromiso y Motivación del Equipo**.
*   **Multidisciplinarios y Distribuidos**.

Trabajar con equipos distribuidos presenta desafíos como:
*   Diferencias de Zona Horaria y Disponibilidad.
*   Barreras de Comunicación y Cultura.
*   Confianza y Empatía.
*   Gestión de Equipos y Cultura de Empresa.
*   Liderazgo Técnico y Gestión de Equipos.

Algunas claves para trabajar en equipo incluyen:
*   Buen ambiente (humor).
*   Comunicación constante.
*   Reuniones activas.
*   Objetivos claros.
*   Responsabilidades claras.
*   Feedback.
*   Evaluaciones de performance.

En el desarrollo de software, los equipos están compuestos por diferentes roles con distintas habilidades:
*   Developers.
*   Testers.
*   Business Analyst.
*   Technical Lead.
*   Scrum Master.
*   Project Manager.
*   Product Owner.

El **Delivery** (entrega del software) es el proceso completo de hacer llegar un producto de software a los clientes. La importancia del Delivery radica en:
*   Responder a las necesidades del mercado.
*   Adaptar el producto o servicio.
*   Mejorar el posicionamiento en el Mercado.
*   Tener ventaja sobre la Competencia.
*   Mejorar procesos y crear nuevos.
*   Ahorrar tiempo y dinero.
*   **GANAR MÁS DINERO**.

La agenda de temas presentada incluye:
*   ¿Qué es “un Equipo Ágil”?.
*   ¿Qué es “Delivery”?.
*   ¿Cómo nos comunicamos?.
*   ¿Cómo nos medimos?.
*   A Producción Agilmente.

## Historia de la Web

La historia de la web comienza con hitos como la presentación del software **HyperCard** para Macintosh en 1987, que permitía crear hiperlinks entre documentos. En 1989, Tim Berners-Lee propuso **HTML** para el CERN y el manejo interno de información mediante hipervínculos.

La web es uno de los servicios que funcionan sobre internet y se considera una interfaz para utilizar la red.

Etapas de la Web:
*   **Web 1.0 (1994-1997):** Páginas estáticas con información útil que cambiaba poco, modificada por desarrolladores web expertos. Posibilidad de crear botones gráficos, incluyendo GIFs. Aplicaciones propietarias vendidas a usuarios sin acceso al código (Ej: Netscape).
*   **Web 1.5 (1997-2003):** Páginas dinámicas donde el usuario interactúa (Ej: búsquedas basadas en idioma). Surgen lenguajes de desarrollo en servidor (PHP, ASP, JSP) para interactuar con servers durante la petición del navegador (Ej: envíos de formularios). Lenguajes de desarrollo en el cliente (JS, VBScript) se ejecutan en el navegador. Lenguajes complementarios (XML para interacción asincrónica, XHTML como extensión de XML para reemplazar HTML, CSS para separar contenido y presentación). Los framesets son eliminados y reemplazados por nuevos tags y hojas de estilo. La gestión de bases de datos se convierte en competencia básica, donde reside el valor de las aplicaciones (SQL dentro de HTML).
*   **Web 2.0 (2003-2007):** Aprovechamiento de la **inteligencia colectiva**; el conocimiento aportado por los usuarios beneficia al resto (Ej: Amazon, Yahoo, eBay). La actividad del usuario pasa a tener un rol fundamental.
*   **Web 3.0 (2007-...):** Caracterizada por la **Inteligencia Artificial** (reconocimiento de voz, asistentes virtuales, chatbots) que permiten a los dispositivos aprender de las interacciones y adaptarse a las necesidades del usuario, proporcionando una experiencia personalizada y eficiente. Tecnologías como **HTML5 y CSS3** permiten la creación de aplicaciones web ricas y dinámicas con diseños atractivos y receptivos, funcionando en variedad de dispositivos (desktop, móviles) y mejorando la accesibilidad.

## Arquitectura Web y Redes

La comunicación entre dispositivos en una red se puede describir mediante modelos de referencia.

**Modelo OSI** (Open Systems Interconnection): Creado por ISO en 1984, divide la comunicación en 7 capas:
1.  **Capa Física:** Describe el medio físico (cable, aire) y la forma de transmisión (Ej: cables UTP para Ethernet). Define características de la interfaz respecto al establecimiento, mantenimiento y liberación del enlace.
2.  **Capa de Enlace de Datos:** Direccionamiento físico (direcciones MAC), topología de red, acceso al medio, detección de errores, control de flujo, distribución ordenada de tramas. Regula la forma de comunicación sobre una red. Dispositivos como switches operan en esta capa. Permite la comunicación entre dos nodos en la misma red lógica. Las direcciones Ethernet (48 bits, identificador único por fabricante/dispositivo) son un ejemplo. El protocolo **ARP** (Address Resolution Protocol) se usa para conocer la dirección MAC de un nodo en la misma red a partir de su IP, y la información se almacena en la tabla ARP.
3.  **Capa de Red:** Identifica el **direccionamiento lógico (IP)** y el enrutamiento entre redes. El router es el dispositivo característico de esta capa. Permite la comunicación entre redes lógicas configuradas por el usuario. El direccionamiento IP (IPv4) usa 32 bits, se escribe en cuatro octetos decimales y tiene una máscara de red para delimitar red y host. Las direcciones pueden ser **classful** (Clase A, B, C, D, E) o **classless** (máscaras variables). Existen direcciones reservadas para uso privado (Ej: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) que requieren **NAT** (Network Address Translation) para ser ruteadas por internet. El **ruteo** ocurre cuando nodos están en redes lógicas separadas, usando routers para enviar tráfico; puede ser estático o dinámico (Ej: BGP en Internet).
4.  **Capa de Transporte:** Encargada de administrar el transporte de información entre ambos extremos. Se definen dos protocolos principales: **TCP** (Transmission Control Protocol), orientado a la conexión con control exhaustivo y confirmación de recepción; y **UDP** (User Datagram Protocol), no orientado a la conexión sin confirmación, delegando el control a capas superiores. Define **sockets o puertos** (0-65535) para conectar origen y destino (Ej: puerto 80 para HTTP).
5.  **Capa de Sesión:** Encargada de mantener y controlar el enlace entre extremos, permitiendo reanudar la sesión si se interrumpe.
6.  **Capa de Presentación:** Adapta las diferentes representaciones de caracteres de los dispositivos.
7.  **Capa de Aplicación:** Incluye protocolos que utilizan las aplicaciones (Ej: SMTP para correo, DNS para resolución de nombres, FTP para archivos, HTTP para navegación web). Cada protocolo en esta capa define una aplicación.

El proceso de tomar datos de una capa superior e incluirlos en la inferior se llama **encapsulación**. El nodo receptor realiza el proceso inverso, **desencapsulación**.

**Modelo TCP/IP:** Creado en 1970 por DARPA, es un conjunto de guías para diseño e implementación de protocolos, con 4 capas:
*   **Capa de Enlace:** Combina las capas Física y de Enlace de Datos del modelo OSI. Describe el acceso al medio.
*   **Capa de Red:** Similar a la capa de Red de OSI, define el direccionamiento.
*   **Capa de Transporte:** Similar a la capa de Transporte de OSI.
*   **Capa de Aplicación:** Incluye las funcionalidades de las capas de Sesión, Presentación y Aplicación de OSI.

El modelo TCP/IP es el más utilizado para describir las aplicaciones existentes en internet.

El protocolo **TCP** establece y administra la conexión entre dos extremos. Un **servidor** tiene una aplicación corriendo permanentemente y escuchando en un puerto determinado. Un **cliente** establece una conexión contra un servidor (IP) en un puerto específico. El proceso de inicio de conexión TCP es el **3-Way Handshake**.

El servicio de **resolución de nombres DNS** (Domain Name System) convierte nombres de dominio en direcciones IP. Funciona sobre TCP y UDP, utilizando el puerto 53.

**HTTP** (Hypertext Transfer Protocol) es el principal protocolo de la Web. Define la sintaxis y semántica para la comunicación entre clientes (User Agent, usualmente el navegador), servidores y proxies. La información (recurso) se identifica por una URL. HTTP es un protocolo **stateless** (sin estado), no guarda información sobre conexiones anteriores; el manejo de sesiones se delega a la capa de aplicación (Ej: mediante cookies). HTTP funciona sobre TCP, por defecto en el puerto 80 (HTTP) o 443 (HTTPS cifrado). La versión 1.1, aún muy usada, introdujo el campo Host en el requerimiento, conexiones persistentes y soporte para caching.

Una **HTTP Request** es un mensaje del cliente al servidor para solicitar una acción. Contiene un encabezado (con método, URL, versión del protocolo, headers como Host, User-Agent, Cookie), seguido opcionalmente de una línea en blanco y datos (body/payload).

Los **métodos HTTP** más comunes son:
*   **GET:** Solicita un recurso. No debe tener efectos secundarios, transmite info en URL con parámetros.
*   **POST:** Envía datos al servidor para ser procesados por el recurso identificado. Datos van en el body.
*   **HEAD:** Similar a GET, pero solo devuelve cabeceras, no contenido. Útil para obtener información sobre un recurso.
*   **PUT:** Guarda el contenido enviado en el recurso definido por la URL. Si la URL no existe, crea el recurso; si existe, lo actualiza.
*   **DELETE:** Borra un recurso determinado.
*   **TRACE:** Usado para diagnóstico, verifica si el receptor de un mensaje existe.
*   **OPTIONS:** Solicita información sobre las opciones de comunicación disponibles para un recurso.

Una **HTTP Response** es el mensaje del servidor al cliente en respuesta a una petición. Contiene una línea de estado (versión, código y significado del estado), cabeceras y el body (contenido o mensaje de error). Los **códigos de estado** (Ej: 200 OK, 404 Not Found, 500 Internal Server Error) indican el resultado de la petición (1xx: Informativo, 2xx: Éxito, 3xx: Redirección, 4xx: Error del cliente, 5xx: Error del servidor).

Un **Navegador Web** (Browser) es una aplicación cliente que se conecta a un servidor, realiza un pedido y muestra la respuesta (**renderizado**), interpretando tecnologías del lado del cliente.

Los **Servidores Web** implementan el protocolo HTTP, responden a peticiones y pueden tener extensiones para conectar con bases de datos o lenguajes de scripting. **CGI** (Common Gateway Interface) es un método estándar para extender un servidor web y delegar la generación de contenido a aplicaciones externas.

## Tecnologías del Lado del Cliente: HTML, CSS y JavaScript

**HTML** (HyperText Markup Language) es el lenguaje de marcado predominante para elaborar páginas web. Se utiliza para describir la estructura y la información mediante **etiquetas** (`<>`). HTML puede describir la apariencia (en cierta medida) e incluir scripts como JavaScript. Es un **lenguaje de etiquetas (markup language)**, donde las etiquetas marcan el inicio y fin de secciones. Las etiquetas se forman en pares (`<etiqueta>`, `</etiqueta>`) aunque hay excepciones. Un documento HTML se divide en **cabecera (`<head>`)** con información sobre la página (título, idioma, metadatos) y **cuerpo (`<body>`)** con el contenido visible para el usuario (texto, imágenes, tablas). Las etiquetas principales son `<HTML>`, `<head>` y `<body>`. HTML define 91 etiquetas, algunas consideradas obsoletas.

Los **atributos** permiten personalizar las etiquetas HTML, proporcionando información adicional (Ej: `href` en `<a>`). Atributos básicos como `id` y `class` son muy usados con CSS y JavaScript. Atributos de eventos (Ej: `onclick`) se usan en páginas dinámicas con JavaScript.

Los elementos HTML se clasifican en dos grupos:
*   **Elementos en bloque (`block elements`):** Siempre empiezan en una nueva línea y ocupan todo el espacio disponible. Pueden contener elementos en línea y otros en bloque. Ejemplos: `<div>`, `<p>`, `<h1>`.
*   **Elementos en línea (`inline elements`):** Solo ocupan el espacio necesario para mostrar su contenido. Solo pueden contener texto u otros elementos en línea. Ejemplos: `<a>`, `<strong>`, `<img>`.

Las divisiones comunes en HTML usando `<div>` (o etiquetas semánticas en HTML5) incluyen: `container`/`wrapper`, `header`, `content`, `menu`, `footer`, `sidebar`.

La **metainformación** o **metadatos** es información adicional sobre la página, siempre incluida en la sección `<head>`. Se definen con la etiqueta `<meta>`, usando atributos como `name` y `content` (Ej: autor, keywords, description) o `http-equiv` (Ej: Content-Type). El título de la página (`<title>`), mostrado en la ventana del navegador y usado por buscadores, es obligatorio en XHTML.

El **Doctype** (`<!DOCTYPE>`) indica el **DTD** (Document Type Definition) que recoge las normas y restricciones que debe cumplir el documento. XHTML define DTDs estrictos que requieren separación total de HTML y CSS. HTML es más flexible y permisivo que XHTML en sintaxis (orden de etiquetas, mayúsculas/minúsculas, uso de comillas en atributos, atributos sin valor).

HTML5 incorporó etiquetas para contenido multimedia, manejo de datos (`details`, `menu`), mejoras en formularios, **Drag & Drop**, **SVG**, **Web storage** (LocalStorage, SessionStorage) y **etiquetas semánticas**.

**CSS** (Cascading Style Sheets) es un lenguaje que permite separar el contenido de la presentación (formato). Esto permite reutilizar definiciones de estilo y modificarlas en un solo lugar para impactar múltiples elementos/páginas. La sintaxis de CSS consta de un **selector** y una o más **declaraciones** (propiedad: valor;). Los **selectores** definen a qué elementos HTML se aplica el estilo (Ej: selector universal `*`, selector de etiqueta `h1`, selector descendente `div p`). Las **propiedades** definen el estilo (Ej: `color`, `font-family`, `font-size`). Los valores pueden usar **unidades de medida** (absolutas: in, cm, mm, pt, pc; relativas: em, ex, px; porcentajes) y **colores** (palabras clave, RGB decimal/porcentual/hexadecimal). Conceptos clave de CSS incluyen el **Modelo de Cajas** (Width, Height, Margin, Padding, Border, Background) y **Posicionamiento y Visualización** (tipos de elementos, static, relative, absolute, fixed, float, display, visibility). CSS se puede incluir en línea en elementos HTML, dentro del documento en la etiqueta `<style>`, o en un archivo externo enlazado.

**JavaScript** es un lenguaje de programación interpretado, orientado a objetos, imperativo, débilmente tipado y dinámico. Se usa principalmente en el lado del cliente (en navegadores) para crear contenido dinámico, controlar multimedia, animar imágenes e implementar funciones complejas. Se interpreta en el navegador a medida que se descarga junto con el HTML. Se puede incluir en línea en elementos HTML, en un bloque dentro de la etiqueta `<script>` en el documento, o en un archivo externo enlazado con `<script src="...">`. La sintaxis no considera espacios en blanco ni nuevas líneas, distingue mayúsculas/minúsculas, no tipa variables y el punto y coma es opcional. Las variables se declaran con `var`. JavaScript tiene operadores (asignación, comparación, lógicos, etc.). El **ámbito de las variables** puede ser global (fuera de funciones o sin `var` dentro de funciones) o local (con `var` dentro de funciones). Las **funciones** se definen con `function nombre() { ... }` y pueden recibir **argumentos** (variables necesarias, listadas en paréntesis) y devolver valores usando `return`. Se mencionan funciones útiles para cadenas de texto (length, +, concat, toUpperCase, toLowerCase, substring, split).

El **DOM** (Document Object Model) representa un documento (HTML/XHTML) como un **árbol lógico de nodos**. Permite acceder y manipular la estructura, el estilo y el contenido del documento mediante programación. Los nodos representan etiquetas (`Element`), atributos (`Attr`), texto (`Text`) y comentarios (`Comments`). Se puede acceder a los nodos (Ej: `document.getElementsByTagName()`, `document.getElementById()`), crear nuevos nodos (`document.createElement()`, `document.createTextNode()`) y añadirlos (`appendChild()`). Los atributos HTML se transforman en propiedades de los nodos.

Los **Eventos** permiten la interacción del usuario con la página (clics, movimientos del ratón, pulsaciones de teclas, etc.). Se les pueden asociar **manejadores de eventos** (`event handlers`), que son funciones JavaScript que se ejecutan cuando ocurre el evento. Hay diferentes formas de asociar manejadores: como atributos en el HTML (`onclick="..."`), como funciones externas, o semánticamente usando propiedades del DOM.

JavaScript facilita el manejo de **formularios**. El navegador crea automáticamente un array `document.forms` con referencias a todos los formularios. Se puede acceder a elementos del formulario por ID o nombre. Propiedades como `value` (para campos de texto) y `checked` (para radiobuttons/checkboxes) permiten obtener sus valores. Se recomienda **validar los formularios** en el lado del cliente con JavaScript antes de enviarlos al servidor para notificar errores instantáneamente, mejorando la experiencia del usuario y reduciendo la carga del servidor. La validación se suele hacer llamando a una función desde el evento `onsubmit` del formulario; si la función devuelve `false`, el formulario no se envía.

**jQuery** es una librería JavaScript que simplifica el desarrollo del lado del cliente. Es rápida y ligera, y unifica funcionalidades comunes de DOM, eventos, efectos y AJAX. Permite cambiar contenido sin recargar la página manipulando el DOM y haciendo peticiones AJAX. Se interactúa con la página usando la función `$()` que selecciona nodos.

## Modelo de Negocios Web, Redes Sociales y Contenedores

Un **modelo de negocios** es la forma en que una compañía genera ingresos, incluyendo su estrategia y posición en la cadena de valor.

Modelos de Negocios Web descritos:
*   **Advertising (Publicidad):** Ofrecer contenido/servicios gratuitos y generar ingresos por publicidad (banners, texto, video), dependiendo del tráfico. Ej: Yahoo, Google.
*   **Infomediary (Infomediarios):** Recopilar y vender datos sobre consumidores y productos. Pueden también proveer información independiente a consumidores. Ej: DoubleClick, Netratings.
*   **Merchant (Comerciantes):** Vender bienes/servicios directamente a consumidores a través de plataformas online (minoristas tradicionales o tiendas exclusivamente online). Ej: Amazon.com, iTunes.
*   **Manufacturer (Direct) (Manufactureros):** Fabricantes venden productos directamente a consumidores vía web, sin intermediarios, controlando la distribución y relación con clientes. Ej: Dell.
*   **Community (Comunidades):** Crear y gestionar comunidades online donde usuarios interactúan y comparten. Ingresos por productos complementarios, publicidad contextual, suscripciones premium, donaciones. Ej: Wikipedia, Facebook.
*   **Utility (Utilización):** Usuarios pagan según el uso del servicio, no una tarifa fija. Común en servicios online como alojamiento web o almacenamiento en la nube. Ej: Slashdot.

En **Redes Sociales**, el concepto de **lazos** (fuertes, débiles, ausentes) es fundamental. La **fuerza del vínculo** se basa en tiempo, intensidad emocional, intimidad y servicios recíprocos. Los **vínculos débiles** son más efectivos para la **difusión** de información, oportunidades laborales, etc., actuando como **puentes** entre distintos grupos sociales, facilitando innovación y acceso a recursos. Las redes con lazos fuertes tienden a ser "punto cerrado", limitando la información. Individuos con muchos vínculos débiles acceden a información externa a su red cercana.

Se mencionan conceptos como **Capital Humano** (talento, carisma, lucidez, fortaleza mental, formación profesional) y **Capital Social** (recursos, información, contactos, participación en organizaciones/actividades, resultados de acción colectiva, reglas de conducta).

Las **APIs** (Interfaces de Programación de Aplicaciones) son conjuntos de reglas y protocolos que permiten la comunicación entre diferentes aplicaciones informáticas. Permiten:
*   **Acceso a Datos:** Buscar y obtener información de plataformas (publicaciones, usuarios, datos demográficos).
*   **Personalización:** Crear servicios propios o conocer usuarios usando datos de la API.
*   **Automatización:** Programar publicaciones, responder automáticamente.
*   **Innovación:** Crear nuevas aplicaciones que aprovechen funcionalidades.
Se listan ejemplos de referencias de APIs como Facebook, Twitter, Instagram.

Los **Contenedores** son paquetes ligeros que incluyen el código de las aplicaciones junto con sus dependencias (entornos de ejecución, bibliotecas). Son una solución al problema de la **escalabilidad**, la capacidad de un sistema de manejar un aumento de carga. Empaquetan todo lo necesario para que la aplicación se ejecute. Son ligeros, portátiles, aislados y pueden ejecutarse en cualquier entorno con un servicio de contenerización (Ej: Docker). La **orquestación de contenedores** (Ej: Docker Swarm, Kubernetes) automatiza su administración a gran escala.

Beneficios generales de los contenedores:
*   **Flexibilidad:** Crear, implementar y escalar rápidamente.
*   **Aislamiento:** Evitan conflictos entre aplicaciones.
*   **Reproducibilidad:** Consistencia en diferentes entornos.
*   **Escalabilidad horizontal:** Permite agregar más instancias según demanda.
*   **Optimización de recursos:** Comparten SO, reduciendo uso de recursos.
Ofrecen beneficios particulares para Developers y DevOps.

El flujo de trabajo en Docker incluye: **Build** (crear imagen desde Dockerfile), **Pull** (descargar imagen de un registro) y **Run** (crear y ejecutar un contenedor a partir de una imagen). La arquitectura Docker incluye **Cliente Docker** (interactúa con el daemon vía CLI), **Servidor Docker (Daemon)** (programa en segundo plano que administra contenedores/imágenes), **Contenedor Docker** (instancia en ejecución de una imagen), **Imagen de Contenedor** (plantilla preconfigurada) y **Registro Docker (Registry)** (repositorio central de imágenes, como Docker Hub).

Los contenedores son más ligeros (medidos en MB) y portátiles que las Máquinas Virtuales, no usan hipervisor y comparten el mismo SO.

## Analytics y Métricas

Las **métricas** colaboran con:
*   Impulsar y Gestionar una estrategia.
*   Proveer visibilidad y foco.
*   Permitir el aprendizaje continuo.
*   Generar buenas relaciones.
*   Gestionar la performance.
*   Promover la evolución.
*   Tomar decisiones.

Algunas razones erróneas para usar métricas son: usarlas solo por tenerlas, usarlas como mecanismo de control o como medida de éxito de un producto.

Características de las métricas descritas en el contexto de KRIs:
*   Valores medibles.
*   Objetivos.
*   Sin sesgo.
*   Uniformes.

Métricas que pueden mejorar la performance y planificación:
*   **VELOCIDAD:** Velocity (SPs).
*   **PREDICTIBILIDAD:** Velocity Variance (%), Delivery Ratio (%), Re-Scoping Ratio (%). SAFe Flow Predictability (BV).
*   **CALIDAD:** Open Bugs (#), Defect Density (#), Acceptance Ratio (%).
*   SAFe Flow Distribution (%), Flow Velocity (#).

Los **KRI** (Key Result Indicators) son métricas para detectar anticipadamente los riesgos de una actividad. Funcionan como avisos tempranos ante posibles riesgos que podrían comprometer objetivos estratégicos, basándose en tendencias y datos internos/externos para predecir problemas futuros. Ejemplos de KRIs mencionados:
*   Tiempo de Resolución de Requerimientos Individuales: Mide el tiempo para implementar funcionalidades o atender pedidos.
*   Cantidad de Incidentes Resueltos en un Período: Mide la certeza de alcance de los incidentes resueltos (como KRI), evaluando eficiencia del equipo de soporte y capacidad del sistema.

## CMS (Content Management System)

Un **CMS** es un programa informático para crear un entorno de trabajo para la creación y administración de contenidos, principalmente en páginas web, por parte de diversos usuarios (administradores, editores, etc.).

Componentes de un CMS:
*   Seguridad.
*   Generación de páginas vía templates.
*   Acceso a Base de Datos.
*   Caching.
*   Mapeo de URLs.
*   Extensibilidad.

Las **Cookies** se usan para mantener sesiones (ya que HTTP no guarda estado). Cada sitio puede leer solo las cookies guardadas en el cliente de su propio sitio. Tienen limitación de espacio. Se mencionan como estrategia para captura de información de otros sitios.
Los **JWT** (JSON Web Token) se envían en cada request, no se guardan en el servidor, pueden enviar más datos (como perfil de usuario), no necesitan búsquedas en el servidor (son más rápidos) pero consumen mayor espacio que las cookies.

```
