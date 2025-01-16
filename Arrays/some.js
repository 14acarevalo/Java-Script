//Some nos va ayudar para conseguir y buscar algo en concreto

const objeto = [
    {nombre: "Alberto", dni: "01234A"},
    {nombre: "Pablo", dni: "01234B"},
    {nombre: "Fernando", dni: "01234P"},
    {nombre: "Isabel", dni: "01234M"}
]

 
const existe = objeto.some(nombre => nombre.nombre == "Alberto")
console.log(existe)
const existe1 = objeto.some(nombre => nombre.nombre == "Pepito")
console.log(existe1)

const existe_dni = objeto.some(tipo_dni => tipo_dni.dni === "123456")
console.log (existe_dni) // False
const existe_otro_dni = objeto.some(dni => dni.dni === "01234M")
console.log(existe_otro_dni) // True