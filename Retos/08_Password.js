//En este reto vamos a crear una contraseña con mayusculas, minusculas, numeros y minimo 8 caracteres
console.log(" Bienvenido usuario, vamos a detectar si la contraseña es segura o no")
let password = "12345AlbErto12345"

/**
 * Esto seria lo más facil del mundo mundial
 * 
 * if (password ===" 12345AlbErto12345 ") {
    console.log("Contraseña super segura")
} else {
    console.log("Mejora tu contraseña")
}**/


if (password.length >= 8) {
    console.log("La longitud de la contraseña es la adecuada");
} 
if (password.match(/[a-z]/)) {
    console.log("Tu contraseña tiene minúsculas");
}

if (password.match(/[A-Z]/)) {
    console.log("Tu contraseña tiene mayúsculas");
}

if (password.match(/[1-9]/)) {
    console.log("Tu contraseña tiene números, perfecto");
}

if (password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/\d/) && password.length >= 8) {
    console.log("Contraseña super segura");
} else {
    console.log("Mejora tu contraseña");
}
