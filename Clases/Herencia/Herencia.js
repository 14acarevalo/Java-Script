/**La herencia nos va a permitir heredar ciertos parametros de unas clases a otras
 * Con ello vamos a buscar evitar la sobrecarga de un codigo
 * Vamos a poder trabajar determinados valores que vengan de unos valores y/o clases a otras, facilitando asi su desarrollo y trabajo
 * las palabras clave van a ser extends, es decir, class claseHija extends clasePadre() {}
 * Por otro lado, cuando coincidan ciertos atributos, será necesario el uso del super(objeto que se sobrescribe)
 */

//Clase padre
class Animal {
    constructor(nombre, habitat, edad) {
        this.nombre = nombre
        this.habitat = habitat
        this.edad = edad
    }

    sound(){
        console.log("El animal " +this.nombre+ " está haciendo ruido")
    }
}

//Clase hija, la cual añadimos el extends para heredar del padre Animal
class Perro extends Animal{
    constructor(nombre, habitat, edad, patas){
        super(nombre, habitat, edad)
        this.patas=patas
    }

    sound(){ //SI ponemos el mismo metodo con otro valor, ya sea en blanco o con otro texto, se sobrescribe
        console.log("El animal " +this.nombre+ " está haciendo ladrando")

    }
}

let animalito = new Animal("Puchi", "Terreste", 5)
console.log(animalito)
animalito.sound()

let perrito = new Perro("Toby", "Terrestre", 7, 4)
console.log(perrito)
perrito.sound()