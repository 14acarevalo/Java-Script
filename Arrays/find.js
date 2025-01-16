//Find nos va a servir para buscar cosas, parecido a include

const objeto = [
    {nombre: "Alberto", dni: "01234A"},
    {nombre: "Pablo", dni: "01234B"},
    {nombre: "Fernando", dni: "01234P"},
    {nombre: "Isabel", dni: "01234M"}
]

const array = [1,2,3,4,5,6,7,8,9]


const buscar = objeto.find(nombre => nombre.nombre == "Alberto")
console.log(buscar)
const buscar1 = objeto.find(nombre => nombre.nombre != "Alberto") //Como puedes ver, te saca el primero diferente
console.log(buscar1)
const buscar2 = objeto.find(nombre => nombre.nombre == "Lucas") //No existe
console.log(buscar2)