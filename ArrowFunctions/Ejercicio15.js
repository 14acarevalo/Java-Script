/**
 * Enunciado:
Estás trabajando en un sistema de gestión de inventarios para una tienda en línea. Tu tarea es realizar las siguientes operaciones sobre un 
conjunto de productos:

Filtrar los productos que pertenecen a la categoría "Electrónica".
Calcular el precio total de cada producto en función de su precioUnitario y su cantidad. Si el producto pertenece a la categoría "Electrónica", deberás aplicar un descuento del 10% sobre el precio total.
Filtrar los productos cuyo precio total (después de aplicar el descuento, si corresponde) sea superior a 500.
Datos:
Tienes la siguiente lista de productos, con su nombre, categoría, precio unitario y cantidad:

const productos = [
  { nombre: "Televisor", categoria: "Electrónica", precioUnitario: 300, cantidad: 10 },
  { nombre: "Silla", categoria: "Mobiliario", precioUnitario: 50, cantidad: 15 },
  { nombre: "Laptop", categoria: "Electrónica", precioUnitario: 700, cantidad: 5 },
  { nombre: "Mesa", categoria: "Mobiliario", precioUnitario: 120, cantidad: 7 },
  { nombre: "Smartphone", categoria: "Electrónica", precioUnitario: 400, cantidad: 8 },
  { nombre: "Cuchara", categoria: "Utensilios", precioUnitario: 5, cantidad: 30 }
];

Objetivos:
Filtrar los productos de la categoría "Electrónica" y mostrarlos en consola.
Calcular el precio total por producto (precioUnitario * cantidad) y aplicar un descuento del 10% si es de la categoría "Electrónica". Mostrar los resultados en consola.
Filtrar los productos cuyo precio total (con el descuento aplicado, si corresponde) sea mayor a 500 y mostrar estos productos en consola.
 */


const productos = [
    { nombre: "Televisor", categoria: "Electrónica", precioUnitario: 300, cantidad: 10 },
    { nombre: "Silla", categoria: "Mobiliario", precioUnitario: 50, cantidad: 15 },
    { nombre: "Laptop", categoria: "Electrónica", precioUnitario: 700, cantidad: 5 },
    { nombre: "Mesa", categoria: "Mobiliario", precioUnitario: 120, cantidad: 7 },
    { nombre: "Smartphone", categoria: "Electrónica", precioUnitario: 400, cantidad: 8 },
    { nombre: "Cuchara", categoria: "Utensilios", precioUnitario: 5, cantidad: 30 }
  ];

const elementoElectronico = productos.filter(producto => producto.categoria === "Electrónica")
console.log("Los productos de la categoria electrónica son: " ,elementoElectronico)


const elementoPrecio = productos.map(producto => {
    let total = producto.precioUnitario * producto.cantidad;
  
    // Si el producto es de "Electrónica", aplicar el descuento del 10%
    if (producto.categoria === "Electrónica") {
      total *= 0.9; // Aplica el descuento del 10%
    }
  
    return {
      nombre: producto.nombre,
      categoria: producto.categoria,
      precioUnitario: producto.precioUnitario,
      cantidad: producto.cantidad,
      total: total // Muestra el total con o sin descuento
    };
  });

console.log("Precio total: " ,elementoElectronico)

// const elementoMayor = elementoPrecio.filter(producto => )