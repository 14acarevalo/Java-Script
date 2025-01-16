function esPrimo(numero) {
    // Si el número es menor o igual a 1, no es primo
    if (numero <= 1) {
        console.log("No es primo");
        return;
    }

    // Caso especial: El número 2 es primo (es el único número primo par)
    if (numero === 2) {
        console.log("Es primo");
        return;
    }

    // Verificar si el número es divisible por algún número entre 2 y la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            console.log("No es primo");
            return;
        }
    }

    console.log("Es primo");
}

console.log(esPrimo(6));  // No es primo
console.log(esPrimo(7));  // Es primo
console.log(esPrimo(2));  // Es primo
console.log(esPrimo(1));  // No es primo
