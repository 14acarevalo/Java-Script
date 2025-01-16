//Cambio de temperatura

function celsiusAFahrenheit(celsius){
    let F = celsius * 9/5 + 32
    return F
}

console.log(`Vamos a cambiar los celsius a Fahrenheit , de tal forma, que obtenemos los siguientes grados ${celsiusAFahrenheit(4)}`)