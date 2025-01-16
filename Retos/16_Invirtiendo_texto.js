/** 
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */


/**
 * Invierte el orden de una cadena de texto sin usar funciones propias.
 * @param {string} texto - La cadena de texto a invertir.
 * @returns {string} - La cadena invertida.
 */
function invertirTexto(texto) {
    let textoInvertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
    }
    return textoInvertido;
}

// Ejemplo de uso:
const cadena = "Hola mundo";
const resultado = invertirTexto(cadena);
console.log("Texto original: ", cadena);
console.log("Texto invertido: ", resultado);
