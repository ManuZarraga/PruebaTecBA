# Prueba Técnica · Manuel Zarraga

Este repositorio contiene mi solución completa para la prueba técnica: está organizada en secciones lógicas Backend, Frontend, SQL y GIT (y el archivo Postman por separado).

---

## 1. Sección Backend + Postman
Construí el backend usando NodeJs y Express y lo conecté a MongoDB en local. En el código creo el modelo de Producto y configuro la conección a Mongo, las rutas para utilizar y el controlador para cada una de las operaciones. El archivo json de Postman para probar los endpoints se encuentra en otra carpeta separada en la raiz del repositorio.

- Node.js (v16.19.1)
- Express (Framework web)
- Mongoose (ODM para MongoDB)
- MongoDB (Base de datos usada para las operaciones CRUD)
- Las operaciones CRUD de “Producto” se realiza con los endpoints:
  - `GET /api/productos`
  - `GET /api/productos/{id}`
  - `POST /api/productos`
  - `PUT /api/productos/{id}`
  - `DELETE /api/productos/{id}`
- Pruebo los endpoints en Postman y reviso MongoDB para actualizar y verificar los datos.

---

## 2. Sección Frontend

- Construí una interfaz usando HTML, CSS y JavaScript para consumir los endpoints del backend:
  - `index.html:` HTML que se llena de información cuando se busca una calle.
  - `styles.css:` Estilos básicos para darle presentación al trabajo.
  - `script.js:` Código de Javascript que consume el endpoint principal y popula el HTML con la información obtenida.

---

## 3. Sección GIT

- Al tratarse de un ejercicio teórico, resolví ambos puntos en un archivo .txt utilizando mis conocimientos precios de GIT e investigando sobre flags.
- Las fuentes de donde consulté información:
  - https://git-scm.com/docs/git-log
  - https://git-scm.com/book/en/v2/Git-Basics-Tagging
  - https://git-scm.com/docs/git-merge

---

## 4. Sección Base de Datos - SQL
- Trabajé esta sección en MySQLWorkbench. En la carpeta subo el archivo SQL que contiene:
- `creación` de las tablas dadas en el enunciado.
- `inserts` de datos iniciales (productos, clientes, ventas, detalleventa).
- `consultas y resolución` de los puntos:
  - a) Productos con nombre y sin descripción.
  - b) Productos vendidos en últimas 24 h.
  - c) Recuento por estado de venta.
  - d) Ventas de un cliente con email X por monto > Y.
- Además, subo un archivo .txt con el mísmo código que el archivo SQL, para ver mi resolución sin tener que entrar a un motor SQL.

---

## Consideraciones
- Para iniciar el Backend y realizar pruebas con Postman, se debe iniciar MongoDB en local y correr el código de Node usando `npm run dev`.
- Para visualizar el Frontend, se debe abrir el archivo `index.html` en su navegador de preferencia o utilizar la extensión `Live Server` de Visual Studio Code.
- El SQL fue trabajado en `MySQLWorkbench`. Usar otro motor como `SQLServer` puede dar error en las consultas que incluyan DATE debido a la diferencia entre ambos motores.
