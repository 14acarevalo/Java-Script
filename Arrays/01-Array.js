const array = [] //Para crear un array, tendremos que tener en cuenta la presencia de los corchetes
const datos = ["Alberto", 30, "programador", "1234567K", 123456789] //Como puedes observar, son varios datos los que se recogen en un sólo array
console.log(datos) //Saldrán los datos anteriores
console.log(array) //Saldrán los datos vacios

//Recuerda, partimos siempre de 0 en un array

console.log(`La edad correspondiente del usuario es: ${datos[1]}`) //Edad
console.log(`El nombre correspondiente del usuario es: ${datos[0]}`) //Edad
console.log(`El trabajo correspondiente del usuario es: ${datos[2]}`) //Edad


//Ejercicio 1: Crear y acceder a arrays
//Crea un array llamado frutas que contenga las frutas: "manzana", "plátano" y "naranja".
//Muestra la primera fruta en la consola.
//Cambia el segundo elemento del array por "pera" y muestra el array completo.

const frutas = ["manzana", "platano", "naranja"]
console.log(`La primera fruta del array frutas es: ${frutas[0]}`)
console.log(frutas)
frutas[1]= "pera"
console.log(`El array completo queda asi: ${frutas}`)

// Ejercicio 2: Métodos básicos de arrays
// Crea un array llamado numeros con los valores: 1, 2, 3, 4, 5.
// Agrega el número 6 al final del array.
// Quita el primer elemento del array.
// Muestra el array resultante.

const numeros = [1,2,3,4,5, [1,2,3,4,5,6,7,8,9,10]]
console.log(numeros)
console.log(numeros[5][4]) // Asi llegamos al quinto subelemento
numeros.push(6)
console.log(`Añadimos el número 6: ${numeros}`)
numeros.shift()
console.log(`Quitamos el primer número: ${numeros}`)

//Ejercicio 3: Recorrer un array
//Crea un array llamado colores con los valores: "rojo", "verde", "azul", "amarillo".
//Usa un bucle for para mostrar cada color en la consola.
//Usa el método forEach para lograr lo mismo.

const colores =["rojo", "verde", "azul", "amarillo"]
console.log (colores.length)
for (let i = 0; i<=colores.length; i++){
    console.table(`Color: ${i}`)
    peneeeeeeeeeeeeeeeeeee
}
    

