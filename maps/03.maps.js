/**
 * Ejercicio 4: Iterar sobre un Map
Crea un Map llamado productos donde las claves sean nombres de productos y los valores sean sus precios. Luego:

Añade al menos 5 productos con sus precios.
Usa un bucle for...of para mostrar cada producto y su precio.
Calcula el precio total de todos los productos.
 */

//Creamos el map
const productos = new Map
productos.set("Leche", 15)
productos.set("Agua", 1)
productos.set("Pan", 2)
productos.set("Pollo", 24)
productos.set("Lentejas", 4)


//Listamos todo el map
console.log(productos)
let suma = 0

for (const [producto, precio] of productos){
    console.log("Producto: " +producto +" - Precio: " +precio)
     suma = suma + precio
     //     console.log ("Precio total: " +suma) - lo podemos ver aqui para comprobar el sumatorio producto por producto

}
console.log ("Precio total: " +suma)



