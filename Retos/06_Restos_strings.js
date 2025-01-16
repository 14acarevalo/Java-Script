/**
 * Dividir un texto por comas
Escribe una función que reciba una lista de palabras separadas por comas y devuelva un array con esas palabras.
Ejemplo:
Entrada: "manzana,pera,platano"
Salida: ["manzana", "pera", "platano"]

 */

function ejemplo (lista) {
    console.log(`La lista recibida es la siguiente ${lista}`)
    console.log(lista.split(","))
}

ejemplo("manzana,pera,platano")