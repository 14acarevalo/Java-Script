//En el caso de que queramos buscar un indice determinado de un valor determinado, lo mejor es el uso del findIndex, tomaremos como ejemplo los arrays y objetos anteriores

const objeto = [
    {nombre: "Alberto", dni: "01234A"},
    {nombre: "Pablo", dni: "01234B"},
    {nombre: "Fernando", dni: "01234P"},
    {nombre: "Isabel", dni: "01234M"}
]

const array = [1,2,3,4,5,6,7,8,9]


const find = objeto.findIndex (nombre => nombre.nombre == "Alberto")
console.log(find)

const find1 = objeto.findIndex(nombre => nombre.nombre == "Pablo")
console.log(find1)

const find2 = array.findIndex(number => number == 4)
console.log(find2)

const find3 = array.findIndex(number => number == 34)
console.log(find3)
