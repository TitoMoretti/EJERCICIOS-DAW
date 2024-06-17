La problemática de la semana 10 consiste en crear una página sencilla en la cual se realicen llamados a la API REST ofrecida por rickandmortyapi.com* y se muestre, en pantalla la información obtenida. Esta página deberá de ser subida a Github Pages

La página web deberá de contener un botón el cual obtenga todos los personajes (characters) y se deberán mostrar en pantalla, renderizando esta lista en algún elemento del DOM.

La salida en pantalla, puede ser tanto la información cruda como también información organizada en una tabla.

A su vez, deberá de contener un campo (input) por cada posible filtro, en los cuales se pueda escribir un valor para obtener los personajes filtrados (leer documentación, apartado Filter Characters). Los campos pueden ser:
name: filter by the given name.
status: filter by the given status (alive, dead or unknown).
species: filter by the given species.
type: filter by the given type.
gender: filter by the given gender (female, male, genderless or unknown).

Deberá de haber un botón asociado para hacer una request con filtros. Esta información deberá de mostrarse también en pantalla.

En caso de que alguna de las request falle, mostrar en pantalla un mensaje de error.

Subir todos los cambios a Github y responder la problemática con la URL de la página de Github Pages con el formulario funcionando.

Pasos a seguir:
1. Crear un archivo HTML y un archivo CSS para estilos

2. Crear un archivo JS con toda la lógica necesaria para manejar las request HTTP

3. En el HTML, añadir:
3.1 Un botón para hacer un GET de todos los personajes
3.2 Un input por cada filtro, en los cuales se pueda ingresar el valor de cada uno de los filtros
3.3 Considerar de que estos input deben tener un botón de submit asociado

4. En el CSS, añadir el mínimo estilo requerido para ver una página agradable a la vista

5. En el archivo JS, añadir:
5.1 La lógica necesaria para manejar cada una de las request

6. Hacer commits con el progreso y subir todos los cambios siempre verificando que se vea correctamente en Github Pages.