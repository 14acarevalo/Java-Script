/**
 * Ejercicio 3: Calcular el total de un carrito
Tienes un carrito de compras representado como un array de objetos:

javascript
Copiar
Editar
const carrito = [
  { producto: "Camiseta", precio: 20, cantidad: 2 },
  { producto: "Pantalón", precio: 30, cantidad: 1 },
  { producto: "Zapatos", precio: 50, cantidad: 3 }
];
Tareas:

Escribe una Arrow Function que use reduce para calcular el total del carrito (precio × cantidad).
Muestra el total en la consola.
 */

const carrito = [
    { producto: "Camiseta", precio: 20, cantidad: 2 },
    { producto: "Pantalón", precio: 30, cantidad: 1 },
    { producto: "Zapatos", precio: 50, cantidad: 3 }
  ];

const calcular = carrito.reduce((total, x)  => total + x.precio*x.cantidad, 0)
console.log(calcular)