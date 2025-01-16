//Contar ocurrencias de una letra
//Crea una función que reciba una cadena y una letra, y cuente cuántas veces aparece esa letra en la cadena.
//Ejemplo:
//Entrada: "JavaScript es genial", "a"
//Salida: 3

function ejemplo(texto, letra){
    let contador = 0
    for (let char of texto) {
        if (char === letra) {
            contador ++
        }
    } 
    console.log(`El número de veces presente de la ${letra} es: ${contador}`)

}

ejemplo("Aprendiendo Java Script con Chat Gpt", "a")