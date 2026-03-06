
EJECUCION

1. Instalar dependencias
npm install

3. Ejecutar el proyecto en modo desarrollo``
npm run dev

3. Abrir en el navegador
http://localhost:3000

ESTRUCTURA DE NAVEGACION
/src/app
  /componets
    countryCard.tsx
    countryPanel.tsx
    countryCard.css
    countryPanel.css
    
  /country/[name]
    page.tsx
    page.css
    
  /lib/[api]
    allCountries.ts
    axios.ts
    countryByName.ts
  /types
    country.ts
    index.ts

  page.tsx
  page.css
  
  
RUTA PRINCIPAL `/`

La página principal muestra un listado de países obtenidos desde la API.

Cada país se muestra mediante un componente `CountryCard` que incluye:

* Bandera
* Nombre común
* Población

También se incluye un buscador que permite filtrar los países por nombre usando el estado del componente.

Cada tarjeta es clicable y redirige a la página dinámica del país correspondiente.

RUTA DINAMICA `/country/[name]`

Cuando el usuario hace clic en un país, se navega a la ruta dinámica:
/country/[name]

Aquí se realiza una nueva petición a la API utilizando el nombre del país:
https://restcountries.com/v3.1/name/{name}
En esta página se muestran los siguientes datos:

* Nombre oficial
* Capital
* Subregión
* Lenguajes
* Monedas

También hay un boton para volver atras a la pagina principal.


MANEJO DE DATOS DE LA API

Uno de los principales problemas que tuve al usar la API de REST Countries es que algunos datos vienen como objetos anidados, por ejemplo:
Los lenguajes vienen como objeto:

"languages": {
  "spa": "Spanish",
  "cat": "Catalan"
}

Y para mostrarlos tuve que buscar en chatGPT como hacerlo porque no entendia muy bien ese formato, asi es como lo hice:
Object.values(country.languages)
Las monedas también vienen como objeto asi que tuve que hacer lo mismo.

MAS PROBLEMAS
A la hora de hacer el css cuando cambiaba cosas de el countryPanel no cambiaba nada. Me di cuenta de que habia llamado a los className de tanto countryCard como del panel igual, asi qeu se modificaban solo los de Card.

Me costo tambien hacer que fueran clickables los paises porque puse mal los links, con eso tuve que pedir ayuda.
