/**
 * Ejercicios básicos con Arrow Functions:

Ejemplo 1: Doblar números en un array.


const numeros = [1, 2, 3, 4];
const doblar = numeros.map(num => num * 2); // Tarea: multiplica cada número por 2
console.log(doblar); // Salida: [2, 4, 6, 8]
Meta: Comprender cómo usar una función flecha en un método básico como map.
 */

const numeros = [1,2,3,4,5,6,7,8,9]
const duplicar = numeros.map(num => num*2)
console.log("Los números duplicados, son: " +duplicar)

/**
 * Ejemplo 2: Filtrar números mayores que 5.

javascript
Copiar
Editar
const numeros = [2, 5, 8, 1, 10];
const mayoresQueCinco = numeros.filter(num => num > 5); // Tarea: Filtra números > 5
console.log(mayoresQueCinco); // Salida: [8, 10]
Meta: Aprender a usar funciones flecha con filter para seleccionar elementos de un array.
 */


const numeros2 = [1,2,3,4,5,6,7,8,9]

const filtrar = numeros2.filter(numero => numero > 5)
console.log("Los números mayores de 5, son: " +filtrar)

/**
 * Ejercicio guiado:
 ordenar números, lo desglosamos en partes:


const numeros = [3, 5, 2, 10, 8];
 */


const numeros3 = [3, 5, 2, 10, 8];
const ordenarMenor = numeros.sort((a,b)=> a - b)
console.log("Los números ordenados de menor a mayor, quedan: " +ordenarMenor)

const ordenarMayor = numeros.sort((a,b) => b-a)
console.log("Los números ordenados de mayor a menor, quedan: " +ordenarMayor)


/**
 * Dado el siguiente array de palabras:


const palabras = ["manzana", "kiwi", "fresa", "naranja", "uva"];
Usa una Arrow Function con sort() para ordenar las palabras por su longitud de forma ascendente (de más corta a más larga).
Muestra el array ordenado en la consola.
 */

const palabras = ["manzana", "kiwi", "fresa", "naranja", "uva"];
const ordenarPalabras = palabras.sort((a,b) => a.length-b.length)
console.log("Las palabras ordenadas, quedan asi: " +ordenarPalabras)

/**
 * Ejercicio 2: Ordenar objetos por precio
Dado el siguiente array de productos:

const productos = [
  { nombre: "Camiseta", precio: 20 },
  { nombre: "Zapatos", precio: 50 },
  { nombre: "Pantalón", precio: 30 },
  { nombre: "Gorra", precio: 15 }
];
Usa una Arrow Function con sort() para ordenar los productos de mayor a menor precio.
Muestra el array ordenado en la consola.
 * 
 */

const productos = [
    { nombre: "Camiseta", precio: 20 },
    { nombre: "Zapatos", precio: 50 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Gorra", precio: 15 }
  ];

const ordenarProductos = productos.sort((a,b) => b.precio - a.precio )
console.log("Los productos ordenados por el precio, de mayor a menor quedan: " +ordenarProductos)

/**
 * Ejercicio 4: Filtrar elementos por condición
Dado el siguiente array de usuarios:


const usuarios = [
  { nombre: "Carlos", edad: 34 },
  { nombre: "Ana", edad: 25 },
  { nombre: "María", edad: 29 },
  { nombre: "Juan", edad: 41 },
  { nombre: "Lucía", edad: 18 }
];
Usa una Arrow Function con filter() para obtener un array de usuarios cuya edad sea mayor o igual a 30 años.
Muestra el nuevo array filtrado en la consola.
 */

const usuarios = [
    { nombre: "Carlos", edad: 34 },
    { nombre: "Ana", edad: 25 },
    { nombre: "María", edad: 29 },
    { nombre: "Juan", edad: 41 },
    { nombre: "Lucía", edad: 18 }
  ];

  const filtrar1 = usuarios.filter(usuario =>  usuario.edad > 30)
  console.log(filtrar1)

/**
 * Ejercicio 5: Buscar un producto por nombre
Dado el siguiente array de productos, queremos buscar un producto específico por su nombre utilizando una Arrow Function.

const productos = [
  { nombre: "Camiseta", precio: 20 },
  { nombre: "Zapatos", precio: 50 },
  { nombre: "Pantalón", precio: 30 },
  { nombre: "Gorra", precio: 15 }
];
Tareas:

Escribe una Arrow Function que busque un producto por su nombre.
Si el producto existe, devuelve el objeto con los detalles del producto (nombre y precio).
Si el producto no existe, devuelve un mensaje que diga "Producto no encontrado".
 */

const productos3 = [
    { nombre: "Camiseta", precio: 20 },
    { nombre: "Zapatos", precio: 50 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Gorra", precio: 15 }
  ];

  const buscar = productos3.find(producto => producto.nombre == "Camiseta")
  console.log(buscar)

  const buscar1 = productos3.find(producto => producto.nombre == "Sudadera")
  console.log(buscar1)


