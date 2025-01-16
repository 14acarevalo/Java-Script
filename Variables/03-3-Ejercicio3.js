//Ejercicio par o impar

function type_of_number(number) {
    if (number % 2 == 0) {        
        return "Par"; // Devolver "Par" si es divisible entre 2
    } else {
        return "Impar"; // Devolver "Impar" si no lo es
    }
}

// Probamos la función
console.log(type_of_number(3)); // "Impar"
console.log(type_of_number(4)); // "Par"

