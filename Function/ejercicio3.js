//Crea una funcion que reciba un string y delvuelva el numero de vocales que existe

function arrayString(palabra){
    let vocalesArray = ["a","e","i","o","u","A","E","I","O","U"]
    let contadorVocales = 0

    for(let vocal of palabra.split('')){
        if(vocalesArray.includes(vocal)){
            contadorVocales++
        }
    }
    return contadorVocales
}

console.log("Dentro de mi palabra, existen " +arrayString("Texto de prueba de Alberto Campanero Arévalo")+ " vocales")

