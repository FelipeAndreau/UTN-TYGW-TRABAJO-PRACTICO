
# 1er Parcial - Tecnología y Gestión Web

## Enunciado

### Práctica

1) Dado el siguiente código HTML, realice las reglas correspondientes para lograr los estilos solicitados:

- a. El contenedor header debe tener un fondo amarillo.
- b. El menú de enlaces debe estar a la izquierda.
- c. El contenedor contenido debe estar a la derecha.
- d. El encabezado principal debe tener un tamaño de fuente de 20px.
- e. Los enlaces deben ser de color negro y sin subrayado.
- f. El header del contenido debe verse en gris y en tamaño de 15px.
- g. El botón debe tener fondo color negro y bordes azules.
- h. El mail debe aparecer en color rojo.

HTML proporcionado:

```html
<div id="contenedor">
    <div id="header">
        <h1>Header Principal</h1>
        <ul>
            <li><a href="test1.html">Link 1</a></li>
            <li><a href="test2.html">Link 2</a></li>
            <li><a href="test3.html">Link 3</a></li>
            <li><a href="test4.html">Link 4</a></li>
        </ul>
    </div>
    <div id="contenido">
        <h1>Header del contenido</h1>
        <p class="primerParrafo">Esto es el texto que pertenece a la sección contenido</p>
        <p class="segundoParrafo">Este texto debería estar resaltado</p>
        <input type="button" name="boton" value="Eliminar Primer Párrafo">
    </div>
    <div id="footer">
        <span class="realizado">Realizado por la cátedra de Tecnología y Gestión Web</span>
        <span class="mail">tqweb@gmail.com</span>
    </div>
</div>
```

2) Indique mediante ejemplos de qué manera se puede incluir código Javascript en un archivo HTML.

3) Describa con sus palabras la teoría de Mark Granovetter acerca de la fortaleza de los vínculos débiles.

4) Suponga que tienen que elaborar una galería de imágenes para una inmobiliaria. Tiene que resolver dentro de un paradigma cliente-servidor, qué tecnología usaría del lado del cliente y cuál del lado del servidor. Utilice diagrama para graficar las tecnologías y explique el funcionamiento de cada una de ellas.

---

## Resolución

### 1) Reglas CSS

```css
#header {
    background-color: yellow;
}

#header ul {
    float: left;
    list-style-type: none;
    padding: 0;
}

#contenido {
    float: right;
}

#header h1 {
    font-size: 20px;
}

#header a {
    color: black;
    text-decoration: none;
}

#contenido h1 {
    color: grey;
    font-size: 15px;
}

input[name="boton"] {
    background-color: black;
    border: 2px solid blue;
    color: white;
}

.mail {
    color: red;
}
```

### 2) Incluir Javascript en HTML

**Interno:**
```html
<script>
    alert("Hola desde JavaScript interno");
</script>
```

**Externo:**
```html
<script src="script.js"></script>
```

**En línea:**
```html
<button onclick="alert('Hola desde JavaScript en línea')">Click me</button>
```

### 3) Teoría de Mark Granovetter

Granovetter sostiene que los vínculos débiles (relaciones sociales menos frecuentes o menos intensas) son más útiles para acceder a nueva información y oportunidades, ya que conectan diferentes redes sociales. A diferencia de los vínculos fuertes (familia, amigos íntimos), los débiles permiten acceder a recursos, ideas y contactos de otros círculos.

### 4) Galería de imágenes para una inmobiliaria (Paradigma cliente-servidor)

**Cliente:** Frontend en React o HTML/CSS + JavaScript.  
**Servidor:** Backend en ASP.NET Core + Base de datos SQL Server.

```
Usuario <--> Navegador (HTML + CSS + JS) <--> Servidor Web (ASP.NET Core)
                                                      |
                                                      +--> Base de Datos (SQL Server)
```

**Funcionamiento:**

El usuario accede a la web desde su navegador. El frontend envía solicitudes al servidor (ASP.NET Core) que procesa los pedidos, accede a la base de datos para obtener las imágenes y devuelve las respuestas al cliente. El cliente muestra las imágenes y permite interactuar (buscar, filtrar, etc.).
