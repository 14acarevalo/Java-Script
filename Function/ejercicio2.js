//Crea una función que reciba un array de numeros y devuelva el mayor

function arrayNumeros(){
    let array = [1,67,34,89,25,1000]
    let mayor = 0

    for(let x=0; x<=array.length; x++){
        if(mayor < array[x]){
            mayor = array[x]
        }

    } 
    return mayor
}

console.log(arrayNumeros())