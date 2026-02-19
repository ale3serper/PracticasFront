
ALEJANDRA SERRANO PEREZ

1.Primero debes instalarte todas las dependencias con el comando npm install.

2.Luego tienes que arrancar el proyecto usando el comando de npm run dev

3.Cuando aparezca en terminal Local: *puerto de localhost* le das ctrl y click en el link.



Resolucion del proyecto:

He añadido una carpeta "Componentes" la cual contiene CharacterCard, CharacterList, Error, Loader.

CharacterCard es basicamente un div el cual se encarga de mostrar los datos de los personajes, yo he usado params para acceder a los datos de los props.

CharacterList es donde mapeo la lista de personajes, si no existe devuelve un texto de error (cuando el tamaño de la lista es igual a 0 ).

Error y loader es muy simple,Los uso para evitar paginas en blanco mientras se carga la pagina o da error. Estos componentes se implementan en la App junto a los demas componentes.

El app.tsx es donde realizo la llamada a la api (tuve problemas al meter la url en un .env asi que decidi dejarlo asi que me funcionaba bien). En el fetch hago una promesa, si funciona guardo los personajes en una lista y si no da error. Tambien hago un manejo de errores y hago la paginacion aqui.

La paginacion no sabia muy bien como hacerla asi que le pregunte a chatgpt. Por lo que tengo entendido el funcionamiento es el siguiente

Primero se agregan los datos actuales a setPersonajes y setSiguientePagina guarda la url de la siguiente pagina para para poder cargarla luego. Asi cuando se hace fetch se acumulan los personajes.


Luego el css ha sido hecho mediante cosas que he aprendido en clase y otras cosas que he aprendido en youtube para el diseño de paginas.






Tuve un error al compilar porque me decia "no matching export in "src/App.tsx" for import default". Lo arregle quitando el export const del App. Lo deje solo como una constante y abajo añadi el export defaul App y sorprendentemente se arreglo.