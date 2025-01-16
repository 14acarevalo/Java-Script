/**Recortar palabras largas
Escribe una función que recorte cualquier palabra de más de 5 caracteres y añada "..." al final.
Ejemplo:
Entrada: "Estoy aprendiendo JavaScript"
Salida: "Estoy apre... Java..." **/
function recortar(texto) {
    console.log(`El texto escrito es: "${texto}", procedemos a recortarlo`);
    // Dividimos el texto en palabras
    let palabras = texto.split(" ");
    // Procesamos cada palabra
    let palabrasRecortadas = palabras.map(palabra => {
        if (palabra.length > 5) {
            return palabra.substring(0, 5) + "..."; // Recortamos y añadimos "..."
        } else {
            return palabra; // Dejamos la palabra como está
        }
    });
    // Unimos las palabras recortadas en un solo texto
    let textoRecortado = palabrasRecortadas.join(" ");
    console.log(`Texto recortado: "${textoRecortado}"`);
    return textoRecortado;
}

// Probamos la función
recortar("Estoy aprendiendo JavaScript");
