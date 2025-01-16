function analizar() {

    let elementoEdad = document.getElementById("edad")
    let elementoComedia = document.getElementById("comedia")
    let elementoCrimen = document.getElementById("crimen")
    let elementoDrama = document.getElementById("drama")
    let elementoMusical = document.getElementById("musical")
    let elementoGenero = document.getElementById("genero")
    let elementoResultado = document.getElementById("resultado")

    let opcion = elementoGenero.value
    let edad = elementoEdad.value

    switch(opcion){
        case "Comedia":
            if (edad < 13){
                elementoResultado.textContent = "Back to the Future"
            } else if (edad <= 16 && edad >= 13) {
                elementoResultado.textContent = "The Truman Show"
            } else {
                elementoResultado.textContent = "The Wolf of Wall Street"
            }
            break
        
        case "Crimen":
            if (edad < 13){
                elementoResultado.textContent = "Lo siento, no hay peliculas de este estilo para esta edad"
            } else if (edad <= 16 && edad >= 13) {
                elementoResultado.textContent = "El secreto de sus ojos"
            } else {
                elementoResultado.textContent = "The Godfather"
            }
            break
        
        case "Drama":
            if (edad < 13){
                elementoResultado.textContent = "Casa Blanca"
            } else if (edad <= 16 && edad >= 13) {
                elementoResultado.textContent = "The Shawshank Redemption"
            } else {
                elementoResultado.textContent = "Taxi Driver"
            }
            break
        
        case "Musical":
            if (edad < 13){
                elementoResultado.textContent = "La La Land"
            } else if (edad <= 16 && edad >= 13) {
                elementoResultado.textContent = "Los Miserables"
            } else {
                elementoResultado.textContent = "The Rocky Horro Picture Show"
            }
            break

    }


}