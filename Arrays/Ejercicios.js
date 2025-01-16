//En estos ejercicios, vamos a trabajar a modo de repaso los diferentes metodos que podemos utilizar para sacar información de diferentes variables

const frutas = [" tomate ", " naranja ", " platano "]
const lacteos = [" leche ", " queso ", " yogurt "]

//Vamos a combinar ambos mediante concat

let compra = frutas.concat(lacteos)
console.log(`La compra queda asi: ${compra}`)


//podemos establecer otro orden
let compra_fin_de_semana = lacteos.concat(frutas)
console.log(`La compra del fin de semana queda asi: ${compra_fin_de_semana}`)

//En el siguiente ejercicio, vamos a verificar si todas las edades son mayores de 18

const datos = [
    {nombre: "Alberto", edad : 30},
    {nombre: "Josue", edad : 31},
    {nombre: "Felix", edad : 31},
    {nombre: "Alfredo", edad : 29},
]

let comprobacion = datos.every(edad => edad.edad >18)
console.log(`De todos los datos obtenidos, ¿la edad es mayor de 18 años?: ${comprobacion}`)

//Vamos a filtrar los datos mayores de 10

const euros = [1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20]
const mayores = euros.filter (mayores => mayores >= 10)
console.log(mayores)

//Vamos a encontrar los datos del primer usuario que su edad sea mayor de 18
const usuarios = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Luis', edad: 17 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Juan', edad: 19 },
  ];

const edad = usuarios.find(mayor => mayor.edad >18)
console.log (edad)

//Vamos a utilizar estos datos para encontrar al usuario, mejor dicho, a su indice mayor de 26 años

const usuarios2 = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Luis', edad: 17 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Juan', edad: 19 },
  ];

const indice = usuarios2.findIndex(mayor => mayor.edad >26)
console.log (indice)

//En el siguiente array, vamos a verificar si hay un color determinado
const colores = ['rojo', 'azul', 'verde', 'amarillo'];

const encontrar = colores.includes('rojo')
console.log(encontrar) //true
const encontrar1 = colores.includes('verde')
console.log(encontrar1) //true
const encontrar2 = colores.includes('yellow')
console.log(encontrar2) //false

//Vamos a verificar si hay algún dato mayor de 100
const numeros = [5, 12, 8, 130, 44];
const busqueda = numeros.some(mayor => mayor > 100)
console.log(busqueda)

const productos = [
    { nombre: 'Camisa', precio: 20 },
    { nombre: 'Pantalón', precio: 40 },
    { nombre: 'Zapatos', precio: 60 },
    { nombre: 'Sombrero', precio: 15 },
];

// Filtra los productos que cuestan menos de 50
const productosBaratos = productos.filter(producto => producto.precio < 50);
console.log(`Los productos con valor inferior a 50 € son: ${productosBaratos.map(p => p.nombre).join(", ")}`);

// Verifica si alguno de los productos tiene un precio mayor a 100 con some
const hayProductoCaro = productos.some(producto => producto.precio > 100);
console.log(`¿Hay algún producto con valor mayor que 100? ${hayProductoCaro}`);

// Concatena con otro array de productos
const other_products = [
    { nombre: 'Bikini', precio: 26 },
    { nombre: 'Gorro', precio: 10 },
];
const combinacion2 = productos.concat(other_products);
console.log(`La combinación de ambos arrays es: ${JSON.stringify(combinacion2, null, 2)}`);
