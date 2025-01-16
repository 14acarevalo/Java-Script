        let nombre = prompt ("Usuario, introduce tu nombre")
        document.getElementById("nombre").innerText = nombre;

        let notas = prompt("Usuario, introduce tus notas separadas por comas (por ejemplo: 8,7,10,4):");
        notas = notas.split(",").map(nota => Number(nota.trim())); // Convierte la entrada en un array de números
        document.getElementById("notasObtenidas").innerText = notas.join(", ");

        function promedio(){
            const suma = notas.reduce((total, nota) => total + nota, 0);
            const promedio = suma / notas.length
            let elementoPromedio = document.getElementById("promedio")
            elementoPromedio.textContent = promedio
        }

        function calificacionAlta(){
            const maxNota = Math.max(...notas);
            document.getElementById("calificacionAlta").innerText = maxNota;
        }

        function suspensos() {
            // Comprobar si hay algún suspenso
            const haySuspensos = notas.some(nota => nota <= 4);
        
            if (haySuspensos) {
                // Asi calculo la nota más baja
                const minNota = Math.min(...notas);
                document.getElementById("haySuspenso").innerText = "Sí";
                document.getElementById("suspensos").innerText = `La nota más baja es ${minNota}`;
            } else {
                // Si no hay suspensos
                document.getElementById("haySuspenso").innerText = "No";
                document.getElementById("suspensos").innerText = "No existen suspensos.";
            }
        }
        


   