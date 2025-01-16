/**
 * Ejercicio 2: Sistema de Bibliotecas (Sin Herencia)
Crea una clase Libro con las propiedades titulo, autor y añoDePublicacion. La clase debe tener 
un método que devuelva un resumen del libro, mostrando todas sus propiedades. 
Luego, crea una clase Biblioteca que contenga una lista de libros, y métodos para:

Agregar un libro.
Mostrar todos los libros.
Buscar un libro por su título.
 */
class Libro {

    constructor(titulo, autor, añoDePublicacion){
        this.titulo = titulo
        this.autor = autor
        this.añoDePublicacion = añoDePublicacion
    }

    mostrarInformacion(){
        console.log ("El libro, conocido como " +this.titulo+ " es del autor " +this.autor+ " y es del " +this.añoDePublicacion)
    }
}

let libro = new Libro("Harry Potter", "J.K Rowling", 1999)
console.log(libro)
libro.mostrarInformacion()

class Biblioteca {
    constructor(){
        this.libro = []
    }
    
    agregarLibro (libro){
        this.libro.push(libro)
    }

    mostrarLibros(){
        for (let x = 0; x <this.libro.length; x++){
            console.log ("Libros: ")
            this.libro[x].mostrarInformacion()
        }
    }

    buscarLibro(titulo){
        for(let libro of this.libro){
            if (libro.titulo === titulo){
                console.log("Libro encontrado")
                libro.mostrarInformacion()
                return
            }

        }
        console.log ("Libro no encontrado")
    }
}



let libro1 = new Libro("Harry Potter", "J.K. Rowling", 1999);
let libro2 = new Libro("El Señor de los Anillos", "J.R.R. Tolkien", 1954);

let miBiblioteca = new Biblioteca();
miBiblioteca.agregarLibro(libro1);
miBiblioteca.agregarLibro(libro2);

miBiblioteca.buscarLibro("Harry Potter"); // Debería encontrarlo
miBiblioteca.buscarLibro("El Hobbit"); // No debería encontrarlo