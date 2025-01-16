/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

function area(poligono, lado1, lado2){

    if (poligono === "Triangulo"){
        console.log("Vamos a calcular el área de un poligono, en este caso, el TRIANGULO!!!!")
       
        let operacionTriangulo = (lado1*lado2)/2
        console.log("Resultado " +operacionTriangulo)
    }

    if (poligono === "Cuadrado"){
        console.log("Vamos a calcular el área de un poligono, en este caso, el CUADRADO!!!!")
        
        let operacionCuadrado = lado1*lado2
        console.log("Resultado " +operacionCuadrado)
    }

    if (poligono === "Rectangulo"){
        console.log("Vamos a calcular el área de un poligono, en este caso, el RECTANGULO!!!!")
       
        let operacionRectangulo = lado1*lado2
        console.log("Resultado " +operacionRectangulo)
    }

}

area("Triangulo", 5,6)
area("Cuadrado", 7,8)
area("Rectangulo", 9,10)