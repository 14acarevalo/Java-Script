fetch('https://jsonplaceholder.typicode.com/comments')
.then (resultado => resultado.json())
.then (datos => {
    console.log(datos)

    for(const x of datos){
        if(x.id >= 5){
            console.log(`Datos a tener en cuenta, Nombre: ${x.name}, Email: ${x.email}, Body: ${x.body}`)
        }
    }
})

.catch(error => console.log('Error' +error))