// Cuando queremos averiguar si dentro de un array o dentro de un objeto, TODOS, cumplen una condición determinada, usaremos every

//Por el contrario, si sólo queremos saber si uno cumple con una condición, usaremos some

//Tiene su logica y su traducción del inglés al español

const objeto = [
    {nombre: "Alberto", dni: "01234A"},
    {nombre: "Pablo", dni: "01234B"},
    {nombre: "Fernando", dni: "01234P"},
    {nombre: "Isabel", dni: "01234M"}
]

const array = [1,2,3,4,5,6,7,8,9]

const todos = array.every(numeros => numeros > 0) // True
console.log(todos)
const todos1 = array.every(numeros => numeros > 5) // False -> Para eso usamos some
console.log(todos1)
const todos2 = array.some(numeros => numeros > 5) // True, alguno si puede ser mayor que 5
console.log(todos2)