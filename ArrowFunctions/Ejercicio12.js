/**
 * Ejercicio: Filtrar y transformar productos en un carrito de compras
Imagina que tienes un carrito de compras con varios productos. Cada producto tiene un nombre, un precio y una cantidad. Quieres hacer lo siguiente:

Filtrar los productos cuyo precio sea mayor a 20.
Transformar el array para que cada producto tenga un nuevo campo llamado total que sea el resultado de multiplicar 
el precio por la cantidad de ese producto.
Devolver un nuevo array con los productos que cumplan la condición, y con la propiedad total calculada.
Array de productos:

const carrito = [
  { nombre: "Camiseta", precio: 15, cantidad: 2 },
  { nombre: "Pantalón", precio: 30, cantidad: 1 },
  { nombre: "Zapatos", precio: 50, cantidad: 3 },
  { nombre: "Gorra", precio: 10, cantidad: 5 }
];
Tareas:
Usa el método filter() para obtener solo los productos cuyo precio sea mayor a 20.
Luego, usa map() para agregar la propiedad total a cada uno de los productos filtrados.
Devuelve un nuevo array con los productos filtrados y con el total calculado.
Muestra el nuevo array con los resultados en la consola.
Este ejercicio combina el uso de filter() y map(), dos métodos muy útiles, y también te permite trabajar con Arrow Functions de una manera más práctica.

Hazlo paso a paso y me vas mostrando tu progreso. ¿Te animas a intentarlo?
 */
const carrito = [
    { nombre: "Camiseta", precio: 15, cantidad: 2 },
    { nombre: "Pantalón", precio: 30, cantidad: 1 },
    { nombre: "Zapatos", precio: 50, cantidad: 3 },
    { nombre: "Gorra", precio: 10, cantidad: 5 }
  ];
  
  const carro = carrito.filter(producto => producto.precio > 20);
  console.log(carro);
  
  const operar = carro.map(producto => {
    const total = producto.cantidad * producto.precio;
    return {
      nombre: producto.nombre,     // 
      precio: producto.precio,     // 
      cantidad: producto.cantidad, // 
      total: total
    };
  });
  
  console.log("Los resultados obtenidos al calcular el total y multiplicarlo, son los siguientes:");
  console.log(operar);
  
