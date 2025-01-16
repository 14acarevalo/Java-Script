//El filter nos va a permitir, como obviamente parece, filtrar diferentes datos
//Seguiremos usando los datos vistos hasta el momento

const objeto = [
    {nombre: "Alberto", dni: "01234A"},
    {nombre: "Pablo", dni: "01234B"},
    {nombre: "Fernando", dni: "01234P"},
    {nombre: "Isabel", dni: "01234M"}
]

const array = [1,2,3,4,5,6,7,8,9]

// Como podemos observar, nos encuentra los diferentes valores en función de lo que le pidamos

const filtro = objeto.filter (nombre => nombre.nombre != "Alberto")
console.log (filtro)
const filtro1 = objeto.filter (nombre => nombre.nombre == "Alberto")
console.log (filtro1)
const filtro3 = array.filter (numero => numero > 4)
console.log (filtro3)
const filtro4 = array.filter (numero => numero > 6)
console.log (filtro4)
const filtro5 = array.filter (numero => numero > 8)
console.log (filtro5)