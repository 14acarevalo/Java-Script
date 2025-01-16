//Contraseña segura

const clave = "ContraseñaSegura12"

if (clave.length < 8) {
    console.log (`Contraseña insegura, ya que debe tener al menos 8 caracteres`)
} else if (!/[A-Z]/.test(clave)) {
    console.log (`Contraseña insegura, ya que debe de tener alguna mayúscula`)
} else if (!/[a-z]/.test(clave)) {
    console.log (`Contraseña insegura, ya que debe de tener alguna minuscula`)
} else if (!/[1-9]/.test(clave)) {
    console.log (`Contraseña insegura, ya que debe de tener algún número`)
} else {
    console.log (`Contraseña segura`)
}