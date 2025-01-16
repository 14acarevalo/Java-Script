/**
 * Ejercicio 2: Agrega un nuevo tipo de animal, por ejemplo, Pajaro, con una propiedad adicional como vuelo y un método volar(). 
 * Haz que todas las clases (perro, gato, pájaro) hereden de Animal.
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

class Pajaro extends Animal{
    
    constructor(nombre, edad, colorPelaje, vuelo){
        super(nombre, edad, colorPelaje)
        this.vuelo = vuelo

    }

    volar(){
        console.log("El pajaro " +this.nombre+ " esta volando")
    }
}

let animal = new Animal("Michi", 3, "beis")
console.log(animal)
animal.sound()
animal.mostrarInfo()
let pajarito = new Pajaro("Heigwhi", 5, "amarillo", true)
console.log(pajarito)
pajarito.sound()
pajarito.mostrarInfo()
pajarito.volar()