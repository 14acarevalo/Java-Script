//A la hora de buscar un valor determinado dentro de un array, podemos encontrarnos con la opción de utilizar el includes

const array = [1,2,3,4,5,6,7,8,9]

const aparece = array.includes(1)
const aparece_otro = array.includes(14)

console.log(aparece) //true
console.log(aparece_otro) //false