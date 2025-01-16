/**
 * Buscar una letra en un texto
Crea una función que reciba un texto y una letra, y devuelva la posición de la primera vez que aparece esa letra en el texto. Si no está, devuelve -1.
Ejemplo:
Entrada: "Hola, JavaScript", "a"
Salida: 3
 */

function busqueda (texto, letra){
    console.log(`El texto es el siguiente: ${texto}`)
        if (texto.includes(letra)) {
            let posicion = texto.indexOf(letra)
            console.log(`La posición de la letra es la siguiente: ${posicion}`)
        } else {
            console.log(`No existe tal posición, por lo tanto, nos encontramos con: -1`)
            return -1
        }
    }


busqueda("My name is Harry Potter", "e")