/**
 * Ejercicio 1: Arrow Functions con un Array
Crea un array de productos. Cada producto debe ser un objeto con las propiedades:

id: un número único que identifica al producto.
nombre: el nombre del producto.
precio: el precio del producto.
stock: la cantidad disponible del producto en inventario.

 */

const productos = [
    { id: 1, nombre: "Camiseta", precio: 20, stock: 100 },
    { id: 2, nombre: "Pantalón", precio: 35, stock: 60 },
    { id: 3, nombre: "Zapatos", precio: 50, stock: 40 },
    { id: 4, nombre: "Gorra", precio: 15, stock: 200 }
  ];

  const elementoProducto =(id) => productos.find(elementoProducto => elementoProducto.id === id)
  const elementoNombre = (nombre) => productos.find(elementoNombre => elementoNombre.nombre === nombre)
  const elementoPrecio = (precio) => productos.filter(elementoPrecio => elementoPrecio.precio === precio)
  const elementoStock = (stock) => productos.filter(elementoStock => elementoStock.stock === stock)

  console.log("Buscando el elemento producto: " ,elementoProducto(1))
  console.log("Buscando el elemento producto: " ,elementoProducto(4))

  const elementosTener = elementoProducto()
  for (let x = 0; x<elementoProducto.length; x++){
    console.log("Producto: " ,elementoProducto[x])
  }