//Crea una funcion que reciba un array de strings y devuelva un nuevo array con las strings en mayusuclas

function arrayMayusculas() {
    let arrayMinusculas = ["a", "e", "i", "o", "u"];
    let arrayMayusculas = arrayMinusculas.map(letra => letra.toUpperCase());
    return arrayMayusculas;
}

console.log(arrayMayusculas()); // Devuelve ["A", "E", "I", "O", "U"]


function cambio(){
    let arrayMinusculas = ["a", "e", "i", "o", "u"];
    let arrayMayusculas=[]

    for (let letra of arrayMinusculas){
        arrayMayusculas.push(letra.toUpperCase())
    }
    return arrayMayusculas
}

console.log(cambio())