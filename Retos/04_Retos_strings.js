/**Escribe una función que reciba un texto, una palabra a buscar, y otra palabra para reemplazarla. Devuelve el texto con la palabra reemplazada. */

function reemplazar(texto, palabra){
    let word = "cambio"
    console.log(`Vamos a reemplazar palabras de nuestro texto, texto original es: ${texto}`)
    if (texto.includes(palabra)){
        let reemplazando = texto.replace(palabra, word)
        console.log(`El texto cambiado, queda asi: ${reemplazando}`)
    }else {
        console.log(`No hemos podido reemplazar tu palabra`)
    }
}

reemplazar("Vamos a proceder a realizar un modificacion", "modificacion")
