/**
 * Ejercicio 5: Uso de Map con objetos
Crea un Map que contenga información sobre varias personas. Cada persona será representada como un objeto con su nombre, edad y profesión. Luego realiza lo siguiente:

Añade al menos 3 personas con sus respectivos datos (nombre, edad, profesión).
Usa un bucle para mostrar el nombre, edad y profesión de cada persona.
Modifica la edad de una persona y muestra los datos actualizados.
Elimina a una persona del Map y muestra los datos restantes.
 */

const personas = new Map
personas.set ("Alberto",{"Edad": 30, "Profesion" : "Coordinador Deportivo"})
personas.set ("Sandra", {"Edad": 27, "Profesion" : "Experta en marketing"})
personas.set ("Pablo", {"Edad": 22, "Profesion" : "Ingeniero informático"})

console.log(personas)

/*for (const persona [Nombre, Edad, Profesion] of personas){
    console.log(persona)
}*/

for(const [valor, datos] of personas){
    console.log("Nombre: " + valor+ " Datos: " +datos.Edad+ " años y profesión: " +datos.Profesion )
}

const alberto = personas.get("Alberto")
alberto.Edad = 29
alberto.Profesion = "Monitor deportivo"
console.log(personas)

alberto.Edad = 31
alberto.Profesion = "Desarrollador web"
console.log(personas)


