/**
 * Ejercicio 2: Crear y usar un Map básico
Crea un Map llamado colores donde las claves sean los nombres de colores y los valores sean los códigos HEX. Luego:

Añade los colores rojo, verde, y azul.
Accede al código HEX del color verde y muéstralo en consola.
Elimina el color azul y muestra el contenido del Map.
 */

//Creamos los colores
const colores = new Map()
colores.set("HEX1", "verde")
colores.set("HEX2", "rojo")
colores.set("HEX3", "azul")
colores.set("HEX4", "amarillo")

//Accedemos al verde
console.log(colores.get("HEX1"))
//Mostramos por consola
console.log(colores)
//Eliminamos el azul
colores.delete("HEX3")
console.log(colores)
