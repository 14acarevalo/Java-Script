fetch('https://jsonplaceholder.typicode.com/posts')
.then (response => response.json())
.then (data => {
    console.log(data)

    for (const valor of data){
        if (valor.title.includes("qui")){
            console.log (`Datos a tener en cuenta: Titulo ${valor.title} - Body ${valor.body}`)
        } 
    }
})

.catch(error => console.log('Error', error))

