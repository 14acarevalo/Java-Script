/**
 * Ejercicio: Gestión de Inventario de Tienda
Imagina que trabajas en una tienda en línea y tienes un inventario de productos. Cada producto tiene un nombre, precio, cantidad disponible y una categoría. Tu tarea es realizar las siguientes operaciones:

Filtrar los productos: Filtra los productos que están disponibles en más de 5 unidades.
Calcular el valor total de inventario por producto: Para cada producto filtrado, calcula el valor total en inventario (precio * cantidad).
Obtener los productos más caros: Filtra los productos cuyo valor total sea mayor a 50.
Transformar el resultado: Crea un nuevo array con los productos filtrados, y agrega una propiedad llamada precio_total que sea el valor total del inventario.
Array de productos:

const inventario = [
  { nombre: "Laptop", precio: 700, cantidad: 10, categoria: "Electrónica" },
  { nombre: "Camiseta", precio: 25, cantidad: 15, categoria: "Ropa" },
  { nombre: "Auriculares", precio: 50, cantidad: 4, categoria: "Electrónica" },
  { nombre: "Zapatos", precio: 60, cantidad: 3, categoria: "Ropa" },
  { nombre: "Smartphone", precio: 500, cantidad: 8, categoria: "Electrónica" },
  { nombre: "Mochila", precio: 40, cantidad: 10, categoria: "Accesorios" }
];
Tareas:

Filtra los productos con cantidad mayor a 5.
Calcula el valor total de inventario para cada producto (precio * cantidad).
Filtra los productos cuyo valor total sea mayor a 50.
Muestra el resultado en la consola.
 */

const inventario = [
    { nombre: "Laptop", precio: 700, cantidad: 10, categoria: "Electrónica" },
    { nombre: "Camiseta", precio: 25, cantidad: 15, categoria: "Ropa" },
    { nombre: "Auriculares", precio: 50, cantidad: 4, categoria: "Electrónica" },
    { nombre: "Zapatos", precio: 60, cantidad: 3, categoria: "Ropa" },
    { nombre: "Smartphone", precio: 500, cantidad: 8, categoria: "Electrónica" },
    { nombre: "Mochila", precio: 40, cantidad: 10, categoria: "Accesorios" }
  ];

  //Vamos a filtrar los productos que estén disponibles en más de 5 unidades

  const filtrar = inventario.filter(producto => producto.cantidad > 5)
  //Mostramos por consola
  console.log("Los productos cuyas cantidades son mayores de 5, son: ", filtrar) //Para el uso de arrays, utilizamos la coma por delante del + 

  //Vamos a calcular el valor total del inventario
  const calcular = inventario.map(operacion => {
    const total = operacion.precio * operacion.cantidad
    return {
        nombre : operacion.nombre,
        precio : operacion.precio,
        cantidad : operacion.cantidad,
        categoria : operacion.categoria,
        total : total
    }
  })

  console.log("El resultado total, queda asi: ", calcular)

  const nuevoFiltro = calcular.filter(producto => producto.total > 50)
  console.log("Con el nuevo cambio y el nuevo filtro, los productos mayores de 50 son: ",nuevoFiltro)


 