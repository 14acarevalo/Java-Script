// Para unir dos o mas variables, utilizaremos concat

const objeto = [
    {nombre: "Alberto", dni: "01234A"},
    {nombre: "Pablo", dni: "01234B"},
    {nombre: "Fernando", dni: "01234P"},
    {nombre: "Isabel", dni: "01234M"}
]

const array = [1,2,3,4,5,6,7,8,9]
const array1 = [10,11,12]
const array2 = [13,14]
const array3 = 15

//Vamos a fusionar y unir
const fusion = array.concat(array1, array2, array3)
console.log(fusion)

//Unir solamente 2
const union = array2.concat(array)
console.log (union)