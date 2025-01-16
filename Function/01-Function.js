//Las funciones nos ayudan a realizar un código más limpio y organizado

//Las funciones nos pueden ayudar a organizar el trabajo y el desarrollo de los proyectos

//Es necesario tener en cuenta lo que hay presente dentro de estas para poder trabajarlo y organizarlo

function ejemplo(){
    console.log("Esto es un ejemplo")
}

ejemplo()

//En este documento vamos a trabajar las funciones

function primeraFuncion(){
    console.log (`Estamos creando la primera función`)
}

primeraFuncion()

function informacion(){
    console.log(`Para crear una función necesitamos los siguientes datos:
        en primer lugar el termino function
        en segundo lugar el nombre de nuestra función seguida de dos parentesis ()
        en tercer lugar { y dentro de estás, podemos escribir todo lo que necesitemos dentro de nuestra función }`)
}

//los ejercicios con el 03 serán ejercicios de funciones

//Existe otra forma de formarlas y trabajar con ellas

const ejemplo2 = function(){
    console.log("Este es otro ejemplo de función")
}

ejemplo2()

//Diferencia entre una función y un método

let number = 20
let nombre = "20"

console.log(parseInt(nombre)) //Me devolverá un int
console.log(number.toString()) //Me devolverá un string

//Valores default o por defecto

function datos1 (nombre ="Desconocido", apellidos ="No existentes"){
    console.log(`Hola usuario con nombre ${nombre} y apellidos ${apellidos}`)
}
datos1()
datos1("Alberto")
datos1("Pepe", "Perez")

const datos = {
    añadir : function(id) {
        console.log(`Añadiendo cancion ${id}`)
    },
    borrar : function(id) {
        console.log(`Borrando cancion ${id}`)
    },
    pausar : function(id) {
        console.log(`Pausando cancion ${id}`)
    }
}

datos.añadir(2)
datos.borrar(3)
datos.pausar(4)