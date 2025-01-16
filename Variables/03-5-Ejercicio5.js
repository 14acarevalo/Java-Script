// Ejercicio 5: Función con valores predeterminados

function presentacion (nombre, edad){
    if (edad != null){
        return `Me llamo ${nombre} y tengo ${edad} años`
    } else {
        return `Me llamo ${nombre} y tengo 18 años`
    }
}

console.log(presentacion("Alberto",30))