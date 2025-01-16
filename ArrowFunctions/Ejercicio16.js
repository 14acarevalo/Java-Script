/**
 * Enunciado:
Estás ayudando a una tienda de alimentos saludables a gestionar su inventario. Necesitas realizar las siguientes operaciones sobre su lista de productos:

Filtrar los productos que tienen menos de 50 calorías.
Calcular el valor total de cada producto multiplicando su precio unitario por la cantidad disponible.
Si el producto es de la categoría "Fruta", aplica un descuento del 5% al precio total.
Filtrar los productos cuyo valor total (después de aplicar el descuento, si corresponde) sea mayor a 100 y mostrar los resultados en consola.
Datos:
javascript
Copiar
Editar
const productos = [
  { nombre: "Manzana", categoria: "Fruta", calorias: 52, precioUnitario: 1.5, cantidad: 40 },
  { nombre: "Plátano", categoria: "Fruta", calorias: 89, precioUnitario: 1, cantidad: 25 },
  { nombre: "Lechuga", categoria: "Verdura", calorias: 15, precioUnitario: 0.8, cantidad: 50 },
  { nombre: "Zanahoria", categoria: "Verdura", calorias: 35, precioUnitario: 0.5, cantidad: 80 },
  { nombre: "Nueces", categoria: "Frutos Secos", calorias: 607, precioUnitario: 10, cantidad: 10 },
  { nombre: "Fresas", categoria: "Fruta", calorias: 32, precioUnitario: 2, cantidad: 30 }
];
 */

const productos = [
    { nombre: "Manzana", categoria: "Fruta", calorias: 52, precioUnitario: 1.5, cantidad: 40 },
    { nombre: "Plátano", categoria: "Fruta", calorias: 89, precioUnitario: 1, cantidad: 25 },
    { nombre: "Lechuga", categoria: "Verdura", calorias: 15, precioUnitario: 0.8, cantidad: 50 },
    { nombre: "Zanahoria", categoria: "Verdura", calorias: 35, precioUnitario: 0.5, cantidad: 80 },
    { nombre: "Nueces", categoria: "Frutos Secos", calorias: 607, precioUnitario: 10, cantidad: 10 },
    { nombre: "Fresas", categoria: "Fruta", calorias: 32, precioUnitario: 2, cantidad: 30 }
];

// 1. Filtrar productos con menos de 50 calorías
const filtrar = productos.filter(producto => producto.calorias < 50);
console.log("Productos con menos de 50 calorías: ", filtrar);

// 2. Calcular el valor total de cada producto
const calcular = productos.map(producto => {
    const total = producto.precioUnitario * producto.cantidad;
    return { ...producto, total }; // Devolvemos el producto con el valor total incluido
});
console.log("Productos con valor total calculado: ", calcular);

// 3. Aplicar un descuento del 5% si es categoría "Fruta"
const calcularConDescuento = calcular.map(producto => {
    let totalConDescuento = producto.total;
    if (producto.categoria === "Fruta") {
        totalConDescuento *= 0.95; // Aplicar el descuento del 5%
    }
    return { ...producto, totalConDescuento }; // Agregamos el total con descuento al objeto
});
console.log("Productos con descuento aplicado: ", calcularConDescuento);

// 4. Filtrar productos cuyo valor total con descuento sea mayor a 100
const filtrar2 = calcularConDescuento.filter(producto => producto.totalConDescuento > 100);
console.log("Productos con valor total > 100 después del descuento: ", filtrar2);
