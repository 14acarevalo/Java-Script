// Añadir números pares a un nuevo array en una función

function numPar(numero){

    let numberPar=[]

    for (let x = 0; x<=numero; x++){
        if (x%2==0){
            numberPar.push(x)
        }
    }
    return numberPar

}

console.log(numPar(6))


