/**
 * 
 * Crea una función que simule las condiciones climáticas (temperatura y probabilidad de lluvia)
 * de un lugar ficticio al pasar un número concreto de días según estas reglas:
 * - La temperatura inicial y el % de probabilidad de lluvia lo define el usuario.
 * - Cada día que pasa:
 *   - 10% de posibilidades de que la temperatura aumente o disminuya 2 grados.
 *   - Si la temperatura supera los 25 grados, la probabilidad de lluvia al día
 *     siguiente aumenta en un 20%.
 *   - Si la temperatura baja de 5 grados, la probabilidad de lluvia al día
 *     siguiente disminuya en un 20%.
 *   - Si llueve (100%), la temperatura del día siguiente disminuye en 1 grado.
 * - La función recibe el número de días de la predicción y muestra la temperatura
 *   y si llueve durante todos esos días.
 * - También mostrará la temperatura máxima y mínima de ese periodo y cuántos días va a llover.
 */
 

function tiempo(dias, elementoTemperatura, elementoProbabilidad) {
    let temperatura = elementoTemperatura;
    let probabilidadLluvia = elementoProbabilidad;
    let diasLluvia = 0;
    let temperaturas = [];
    let probabilidadPorLluvia = [];

    for (let dia = 1; dia <= dias; dia++) {
        // Generar cambio aleatorio
        let cambio = Math.random();
        if (cambio < 0.1) {
            temperatura += 2; // Sube 2 grados
        } else if (cambio < 0.2) {
            temperatura -= 2; // Baja 2 grados
        }

        // Ajustar probabilidad de lluvia
        if (temperatura > 25) {
            probabilidadLluvia += 20;
        } else if (temperatura < 5) {
            probabilidadLluvia -= 20;
        }

        // Limitar probabilidad entre 0 y 100
        if (probabilidadLluvia > 100) {
            probabilidadLluvia = 100;
        } else if (probabilidadLluvia < 0) {
            probabilidadLluvia = 0;
        }

        // Simular lluvia
        let llueve = Math.random() * 100 <= probabilidadLluvia;
        if (llueve) {
            diasLluvia++; // Aumenta contador de días de lluvia
            temperatura -= 1; // Baja 1 grado si llueve
        }

        // Guardar datos del día
        temperaturas.push(temperatura);
        probabilidadPorLluvia.push(probabilidadLluvia);
    }

    // Calcular resultados
    let tempMax = Math.max(...temperaturas);
    let tempMin = Math.min(...temperaturas);

    // Mostrar resultados
    console.log("Temperaturas por día:", temperaturas);
    console.log("Probabilidades de lluvia por día:", probabilidadPorLluvia);
    console.log(`Temperatura máxima: ${tempMax}`);
    console.log(`Temperatura mínima: ${tempMin}`);
    console.log(`Días con lluvia: ${diasLluvia}`);
}

// Ejemplo de uso
tiempo(10, 25, 50);
