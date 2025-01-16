//Reto del programa fibonacci

let fibonacci = 100
let a = 0
let b = 1

console.log("El resultado del programa Fibonacci es:");
console.log(a); // Mostramos el primer número
console.log(b); // Mostramos el segundo número

for (let i = 2; i < fibonacci; i++) {
    let suma = a + b; // La suma de los dos últimos números
    console.log(suma); // Mostramos el siguiente número de Fibonacci
    a = b; // Actualizamos a para el siguiente ciclo
    b = suma; // Actualizamos b para el siguiente ciclo
}
