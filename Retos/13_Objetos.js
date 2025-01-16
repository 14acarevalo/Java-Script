/**Prácticas: Loop For In 1
Implementar la función mostrarInfo(), que utilizando un Loop For In, debe imprimir en consola las propiedades/atributos del objeto automovil con el siguiente formato:

marca: Ford

modelo: Fiesta

anio: 2015



IMPORTANTE: Si no puedes resolver el ejercicio, considera lo siguiente:

Aunque la solución que hayas escrito no tenga errores de código, aún así puede que no responda exactamente a la consigna. Verifica que el resultado que obtienes sea exacto con la consigna (con puntos, comas y acentos)

Si aún así no logras resolverlo (puede suceder), revisa la lección "Soluciones a los Ejercicios Prácticos del Día" que se encuentra casi al final de las lecciones de cada día.*/

let vehiculos = {
    marca : "Ford",
    modelo : "Fiesta",
    anio : 2015
}
       
function mostrarInfo (){

    for (let propiedad in vehiculos){
        console.log("Propiedad: " +propiedad+ " : " +vehiculos[propiedad])
        
    }
}

mostrarInfo()

