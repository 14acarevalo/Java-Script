function area(){

    let elementoPoligono = document.getElementById("poligono").value 
    let elementoLado1 = document.getElementById("lado1").value
    let elementoLado2 = document.getElementById("lado2").value
    let elementoResultado = document.getElementById("resultado")


    if (elementoPoligono === "Triangulo"){
       
        let operacionTriangulo = (elementoLado1*elementoLado2)/2
        alert("Resultado " +operacionTriangulo)
        elementoResultado.textContent = operacionTriangulo

    }

    if (elementoPoligono === "Cuadrado"){
        console.log("Vamos a calcular el área de un poligono, en este caso, el CUADRADO!!!!")
        
        let operacionCuadrado = elementoLado1*elementoLado2
        alert("Resultado " +operacionCuadrado)
        elementoResultado.textContent = operacionCuadrado
    }

    if (elementoPoligonooligono === "Rectangulo"){
        console.log("Vamos a calcular el área de un poligono, en este caso, el RECTANGULO!!!!")
       
        let operacionRectangulo = elementoLado1*elementoLado2
        alert("Resultado " +operacionRectangulo)
        elementoResultado.textContent = operacionRectangulo
    }

}