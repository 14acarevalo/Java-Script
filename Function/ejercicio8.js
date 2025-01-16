//Crea una funcion que reciba un array de numeros y devuelva la suma de los números pares


function operacionArrays(){
    let arrayNumeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    let arrayPares = []

    for(let x = 0; x <= arrayNumeros.length; x++){
        if (arrayNumeros[x] % 2 == 0){
            arrayPares.push(arrayNumeros[x])
        }
    }

    return arrayPares
}

console.log(operacionArrays())