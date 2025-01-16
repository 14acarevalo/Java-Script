// crea una funcion con un array de numeros y que devuelva un nuevo array elevado al cuadrado

//En este caso he realizado el ejercicio con los números pares aprovechando el ejercicio 8
function operacionArrays(){
    let arrayNumeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    let arrayPares = []

    for(let x = 0; x <= arrayNumeros.length; x++){
        if (arrayNumeros[x] % 2 == 0){
            arrayPares.push(arrayNumeros[x]**2)
        }
    }

    return arrayPares
}

console.log(operacionArrays())


function operacionArrays1(){
    let arrayNumeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    let arrayCuadrado = []

    for(let x = 0; x <arrayNumeros.length; x++){
            arrayCuadrado.push(arrayNumeros[x]**2)
        }
    

    return arrayCuadrado
}

console.log(operacionArrays1())