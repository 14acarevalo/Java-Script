/**
 * Ejercicio 1: Sistema de Vehículos (Sin Herencia)
Crea una clase llamada Vehiculo con las propiedades marca, modelo, año y 
un método que calcule la edad del vehículo (la diferencia entre el año actual y el año del vehículo). 
Luego crea una instancia de Vehiculo y muestra los datos, además de mostrar su edad.

Pistas:

Utiliza Date.now() o new Date().getFullYear() para obtener el año actual.
 */

class Vehiculo{
    constructor(marca, modelo, año){

        this.marca = marca
        this.modelo = modelo
        this.año = año

    }
    edadVehiculo(){
        let date = new Date().getFullYear()
        let edad = date - this.año
        console.log("La edad del vehículo es de: " +edad+ " años")
    }

    mostrarDatos() {
        console.log(`Vehículo: ${this.marca} ${this.modelo}, Año: ${this.año}`);
    }
}

let coche = new Vehiculo ("Opel", "Vectra", 1997)
console.log(coche)
coche.mostrarDatos()
coche.edadVehiculo()