# Demo-GraphQL
Simple demo GraphQL server.

***
## Table of Contents
1. [Instalacion](#Instalacion)
2. [Ejemplo de uso](#Ejemplo-de-uso) 



***
<a name="Instalacion"></a>
## Instalacion
 
```
$ git clone https://github.com/chewydc/Demo-GraphQL.git
$ cd Demo-GraphQL
$ npm install
$ npm start
```

***
<a name="Ejemplo-de-uso"></a>
## Ejemplo de uso

```
$  curl 'http://localhost:3000/'
```

### Query de ejemplo, recursividad:
Uno de los puntos fuertes de GraphQL y que mas me llamaron la atencion fue lo simple de armar una consulta recursiva. Por ejemplo:

 Buscamos sin filtros, que nos devuelva todos los autores de la base (campos id, nombre y libros de ese autor). Pero a su vez, el campo libro posee un id de libro, su titulo y su autor (aca deberá corresponder el id de autor con el primer id de la busqueda general de autores). Si luego buscamos por id de autor del libro, llegamos al primer query. Podriamos seguir adelante buscando los libros de ese autor y demas... 

```
{
    authors{
        id
      name
      books{
        id
        title
        author{
          id
          name
            }
        }
    }
}
```

![Image text]()



