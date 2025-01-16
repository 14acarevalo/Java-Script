/**
 * Ejercicio: Obtener datos de una API pública y mostrarlos en la consola
Objetivo: Utilizando la API pública de JSONPlaceholder, que simula una base de datos de usuarios, debes obtener la lista de usuarios y mostrar sus nombres y correos electrónicos en la consola.

Pasos:
Usa la API pública de JSONPlaceholder para obtener una lista de usuarios. La URL de la API es: https://jsonplaceholder.typicode.com/users
Usa fetch para hacer la solicitud.
Convierte la respuesta en formato JSON usando .json().
Muestra en la consola los nombres y correos electrónicos de los usuarios obtenidos.
 */

fetch('https://jsonplaceholder.typicode.com/users')
.then(respuesta => respuesta.json())
.then(data => {
    console.log(data)

    for (const user of data) {
        console.log (`Datos ${user.id}, ${user.name}, ${user.adress}, ${user.username}`)
    }
})


.catch(error => console.error('Error' +error))
