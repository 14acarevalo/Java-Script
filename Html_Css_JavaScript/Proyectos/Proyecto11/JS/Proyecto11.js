class Animal {
    constructor(nombre, peso, edad){
        this.nombre = nombre
        this.peso = peso
        this.edad = edad
    }

    informacion(){
        return ` El animal, con nombre ${this.nombre}, tiene un peso de ${this.peso} kilogramos y tiene ${this.edad} años`
    }
}

class Perro extends Animal {
    constructor(nombre, peso, edad, raza) {
        super(nombre, peso, edad)
        this.raza = raza
    }

    informacion(){
        return ` El animal, con nombre ${this.nombre}, tiene un peso de ${this.peso} kilogramos y tiene ${this.edad} años y de raza ${this.raza}`
    }
}

class Gato extends Animal {
    constructor(nombre, peso, edad, sexo) {
        super(nombre, peso, edad)
        this.sexo = sexo
    }

    informacion(){
        return ` El animal, con nombre ${this.nombre}, tiene un peso de ${this.peso} kilogramos y tiene ${this.edad} años y de sexo ${this.sexo}`
    }
}

class Conejo extends Animal {
    constructor(nombre, peso, edad, color) {
        super(nombre, peso, edad)
        this.color = color
    }

    informacion(){
        return ` El animal, con nombre ${this.nombre}, tiene un peso de ${this.peso} kilogramos y tiene ${this.edad} años y de color ${this.color}`
    }
}

/**
let animalito = new Animal ("Punki", 48, 4)
console.log(animalito)
animalito.informacion()

//Resto de animales

//Perro
let perrito = new Perro("Mowgly", 14, 8, "podenco")
console.log(perrito)
perrito.informacion()

//Gato
let gatito = new Gato("Junior", 10, 7, "macho")
console.log(gatito)
gatito.informacion()

//Conejo
let conejito = new Conejo ("Tambor", 4, 2, "blanco")
console.log(conejito)
conejito.informacion()
*/
function mostrarInfo(){
    let animalito = new Animal("Punki", 48, 4);
    let perrito = new Perro("Mowgly", 14, 8, "podenco");
    let gatito = new Gato("Junior", 10, 7, "macho");
    let conejito = new Conejo("Tambor", 4, 2, "blanco");

    let elementoInformacion = document.getElementById("informacion");

    // Actualizar el contenido con la información de los animales
    elementoInformacion.innerHTML = `
        <p>${animalito.informacion()}</p>
        <p>${perrito.informacion()}</p>
        <p>${gatito.informacion()}</p>
        <p>${conejito.informacion()}</p>
    `;
}
