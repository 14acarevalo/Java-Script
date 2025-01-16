// Es un ejercicio para trabajar el bucle for, todo multiplo de 3 escribimos fizz, multiplo de 5 buzz y de ambos fizz buzz
//El resultado, es una combinación de for y de if

for (let i = 0; i<=100; i++){
//podemos añadir un console.log (i) para mostrar los diferentes datos del bucle
    if (i%3 === 0){
        console.log(`Fizz ${i}`)
    } else if (i%5 === 0){
        console.log(`Buzz ${i}`)
    } else if (i % 5 === 0 && i % 3 === 0 ){
    }
}