//Ejercicio 3: Calcular descuento
//Si el precio de un producto es mayor a 100 euros, aplica un descuento del 20%. En caso contrario, muestra el precio original.

const precio = 102

if (precio > 100){
    let descuento = precio - (precio*0.2)
    console.log (`El producto tiene un precio especial y se encuentra rebajado con un 20%, siendo su precio final de ${descuento}`)
} else {
    console.log ("Tu producto no tiene descuento, lo sentimos")
}