// El bucle for es un bucle que nos permite recorrer todos los elementos de una variable y extraer los datos de dicha variable

const ejemplo = [1,2,3,4,5,6,7,8]

for (let i = 0; i<ejemplo.length; i++){
    console.log(i)
}

for (let i = 0; i<=50; i+= 2){
    console.log(i)
}


for (let i = 0; i<=10; i ++){
    if (i%2 == 0) {
        console.log(`Pares: ${i}`)
    }
}

for (let i = 0; i<=10; i ++){
    if (i%2 != 0) {
        console.log(`Impares: ${i}`)
    }
}

//Por otro lado, si sólo deseamos encontrar un determinado valor dentro de un bucle for, podemos utilizar condiciones como break para romperlas y parar cuando se alcance dicho valor

for (let i = 0; i<=10; i ++){
    if (i%2 != 0) {
        console.log(`Impares: ${i}`)
        if (i == 7) {
            console.log("Hemos llegado al 7 y paramos")
            break
        }
    }
}

// Por el contrario, si queremos alcanzar un valor determinado y continuar, en vez del break, utilizaremos el continue
for (let i = 0; i<=10; i ++){
    if (i%2 != 0) {
        console.log(`Impares: ${i}`)
        if (i == 7) {
            console.log("Hemos llegado al 7 y pero seguimos")
            continue
        }
    }
}