//En este caso vamos a trabajar con los string

//Buscamos valorar diferentes métodos para trabajar con los strings

const texto = `Este es un texto de prueba para trabajar con los diferentes métodos`
console.log(texto)

//Si queremos conocer la longitud de una variable, tendremos que trabajar con el método length

console.log(`La longitud de mi variables es de: ${texto.length} caracteres`)

//Si queremos valorar si una palabra está presente en una cadena de texto, incluiremos el metodo includes
console.log(`¿Está presente la palabra ayuda en el texto?: ${texto.includes("ayuda")}`)
console.log(`¿Está presente la palabra texto en el texto?: ${texto.includes("texto")}`)

//Si queremos concatenar dos variables, será necesario tener en cuenta el método concat

const producto = "Ordenador"
const precio = 30 

console.log(producto.concat(" - " + precio + " € "))
console.log(`Producto: ${producto}  - con un precio de:  ${precio}`)


//Si queremos eliminar el espacio inicial y final, utilizaremos un método totalmente diferente e innovador

const frase_prueba = "                         Fras de prueba para contar espacios                          "
//Si observamos la longitud, veremos que cuenta todos los caracteres, tanto los espacios por delante