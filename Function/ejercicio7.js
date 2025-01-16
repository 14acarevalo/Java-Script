// Crea una función que reciba dos arrays y los combine en uno solo, añadiendo todos los elementos del segundo array al primero usando push.


function dobleArray(){
    let array1 = [1,2,3,4,5,6,7 ]
    let palabras = [" alberto ", " estudio ", " esfuerzo ", " trabajo "]
    let unificacion = []

    unificacion.push(array1 + palabras)

    return unificacion
}

console.log(dobleArray())
