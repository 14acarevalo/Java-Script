//En estos ejercicios, vamos a trabajar y aprender a utilizar los maps

/**
 * Nivel 1: Básico
Ejercicio 1: Crear y acceder a datos en un objeto
Crea un objeto llamado persona con las siguientes propiedades: nombre, edad, y profesión. Luego:

Accede a cada propiedad del objeto y muestra su valor en consola.
Añade una nueva propiedad hobby al objeto y muestra el objeto actualizado.
 */

const map = new Map()
map.set  ("nombre", "alberto")
map.set  ("edad", 30)
map.set  ("profesion", "coordinador deportivo")

//Listamos todo
console.log("Nombre: " +map.get("nombre"))
console.log("Edad: " +map.get("edad"))
console.log("Profesion: " +map.get("profesion"))

//Añadimos hobby
map.set("hobby", "leer")

console.log("Hobby: ", map.get("hobby"))

//Accedemos a todos
console.log(map)