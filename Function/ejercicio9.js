//Crear una funcion que reciba un array y devuelva todos la suma de todos los numeros pares


function operacionArrays(){
    let arrayNumeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    let suma = 0

    for(let x = 0; x <= arrayNumeros.length; x++){
        if (arrayNumeros[x] % 2 == 0){
            suma = suma + arrayNumeros[x]
        }
    }

    return suma
}

console.log(operacionArrays())