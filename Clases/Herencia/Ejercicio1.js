/**
 * Ejercicio 1: Crea una clase Gato que herede de Animal, pero con características propias (por ejemplo, color de pelaje). 
 * Redefine el método sound() para que diga "Miau" en lugar de "El animal está haciendo ruido".
 */

class Animal {
    constructor(nombre, edad, colorPelaje){
        this.nombre=nombre
        this.edad=edad
        this.colorPelaje=colorPelaje
    }

    sound(){
        console.log("El animal " +this.nombre+ " esta haciendo ruido")
    }

    mostrarInfo(){
        console.log(`El animal ${this.nombre}, tiene unos ${this.edad} años y un color de pelo de ${this.colorPelaje}`)
    }
}

class Gato extends Animal {
    constructor(nombre, edad, colorPelaje, sexo){
        super(nombre, edad, colorPelaje)
        this.sexo=sexo
    }

    raza(){
        console.log("El Gato " +this.nombre+ " es de sexo " +this.sexo)
    }

    sound(){
        console.log("Miau")
    }

}

let puchi = new Animal ("Mowgly", 14, "marron")
console.log(puchi)
puchi.sound()
puchi.mostrarInfo()

let junior = new Gato ("Junior", 7, "blanco", "macho")
console.log(junior)
junior.sound()
junior.raza()
junior.mostrarInfo()