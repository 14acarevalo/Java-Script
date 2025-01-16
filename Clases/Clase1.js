/** Vamos a trabajar y practicar las clases con el objetivo de conocerlas y profundizar sobre ellas */

class Persona {
    constructor(nombre, edad, sexo, alias){
        this.nombre = nombre
        this.edad = edad
        this.sexo = sexo
        this.alias = alias
    }

    //Añadimos un nuevo metodo, en este caso saludar
     saludar (){
        console.log("Hola, me llamo " +this.nombre)
    }

    mayorEdad(){
        if (this.edad >= 18){
            console.log("Eres mayor de edad, por lo tanto puedes votar, conducir, ser más responsable, tomarte una cerveca")
        } else {
            const edadActual = 18-this.edad
            console.log("Lo siento, aun te quedan unos " +edadActual+ " años para poder hacer cosas de adulto")
        }
    }

}

let persona = new Persona ("Alberto", 1, "Masculino", "Campa")
console.log(persona)
persona.saludar()
persona.mayorEdad() //Saldra el else
console.log(typeof persona) //Objeto

class Default {

    constructor(nombre, edad, alias){
        this.nombre = "Alberto"
        this.edad = edad
        this.alias = alias
    }
}

let objeto = new Default()
console.log(objeto)
let objeto1 = new Default("Campa")
console.log(objeto1)


class DatosPrivados {

    //Para crear datos privados, es necesario definirlos antes con una #
    #cuentaBancaria

    //Una vez definida aqui, tenemos que definirla en el resto de parametros

    constructor(nombre, edad, trabajo, cuentaBancaria){
        this.nombre = nombre
        this.edad = edad
        this.trabajo = trabajo
        this.#cuentaBancaria = cuentaBancaria//El problema de poner cuenta bancaria como tal es que lo hacemos publico y cualquiera puede acceder a esto con un console.log
    }
}

//De tal forma que ahora vamos a acceder a los diferentes datos y no podremos conocer el numero de cuenta
let personaPrueba = new DatosPrivados("Alberto", 30, "Director Deportivo", "ES123456789")
console.log(personaPrueba)
//Vamos a intentar acceder al atributo
console.log(personaPrueba.cuentaBancaria) //Undefined
//console.log(personaPrueba.#cuentaBancaria) // Esto saldrá un error

personaPrueba.cuentaBancaria ="EX987654321"
console.log(personaPrueba) //Aqui saldra la cuenta bancaria creada anteriormente, pero la privada NO, esto es una nueva propiedad

