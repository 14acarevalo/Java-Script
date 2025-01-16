//Factorial del numero dado

function factorial(numero) {
    for (let x = 0; x<=numero; x++){
        factorial = x * (x+1)
        
    }
    return factorial
}

console.log(factorial(4))