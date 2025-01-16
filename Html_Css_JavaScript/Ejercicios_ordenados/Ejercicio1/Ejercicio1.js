
        function multiplicar(numero){
            let consumo = 1.25
            let multiplicacion = numero *consumo
            return multiplicacion
        }

        function calcular(){
            let elementoKilometros = document.getElementById("kilometros")
            let elementoResultado = document.getElementById("resultado")
            let operacion = multiplicar(Number(elementoKilometros.value))
            elementoResultado.textContent = "Deberas de llenar tu deposito con " +Math.ceil(operacion)+ " litros"

            if (elementoResultado.textContent < 10){
                elementoResultado.style.color="red"
            } else if (elementoResultado.textContent < 35){
                elementoResultado.style.color="blue"
            }else if (elementoResultado.textContent < 75) {
                elementoResultado.style.color="green"
            } else {
                elementoResultado.style.color="orange"

            }


            
        }

    