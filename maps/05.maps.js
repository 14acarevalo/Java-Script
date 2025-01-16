/**
 * Ejercicio 6: Uso avanzado de Map con iteradores
Descripción:
Crea un Map donde las claves sean los nombres de ciudades y los valores sean objetos 
con la información de cada ciudad, como la población y el país al que pertenece. Luego, realiza lo siguiente:

Añade al menos 5 ciudades con sus respectivos datos (nombre, población, país).
Usa un bucle para mostrar la ciudad, población y país de cada una.
Usa el método has para verificar si una ciudad existe en el Map.
Usa el método clear para vaciar el Map y mostrar el contenido final.

 */

const ciudades = new Map 
ciudades.set("Madrid", {Población : "Madrileños", Pais: "España"})
ciudades.set("Toledo", {Población : "Toledanos", Pais: "España"})
ciudades.set("Paris", {Población : "Parisinos", Pais: "Franceses"})

//Utilizamos el bucle for para recorrer todos los datos:
for (const[ciudad, valor] of ciudades){
    console.log("Datos de las ciudades: \n Ciudad: " +ciudad+ "\n Población: " +valor.Población+ " País: " +valor.Pais )
}

//Vamos a verificar si un dato existe o no:
console.log(ciudades.has("Madrid")) //True
console.log(ciudades.has("Turin")) //False
console.log(ciudades.has("Roma")) //False
console.log(ciudades.has("Toledo")) //True

//Vamos a vaciar todo el contenido

ciudades.clear()
console.log(ciudades)






