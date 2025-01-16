//Para un mayor control, para evitar codigos muy largos y evitar una sobre carga con el else if, podemos utilizar el switch

//El switch nos va a permitir organizar diferentes opciones y diferentes posibilidades dentro de un mismo código

const opcion = "bizum"

switch(opcion) {
    case 'metalico':
        console.log ("Has pagado en metalico")
        break;
    case 'bizum':
        console.log ("Has pagado en bizum")
        break;
    case 'transferencia':
        console.log("Has pagado en transferencia")
        break;
    default:
        console.log("Ninguna de las opciones son válidas para el pago")
        break;
}