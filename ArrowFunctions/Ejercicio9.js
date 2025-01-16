/**
 * Ejercicio 1: Filtrar elementos mayores a un valor
Dado el siguiente array de números:

javascript
Copiar
Editar
const numeros = [5, 12, 8, 130, 44];
Tareas:

Escribe una Arrow Function que filtre todos los números mayores a 10.
Almacena el resultado en una nueva variable y muéstralo en la consola.
 */
const numeros = [5, 12, 8, 130, 44]

const filtrar = numeros.filter(num => num > 10)
console.log(filtrar)