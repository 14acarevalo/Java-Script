
let elementoNumero1 = document.getElementById("number1");
let elementoNumero2 = document.getElementById("number2");
let elementoResultado = document.getElementById("resultado");

function sumar() {
    let numero1 = Number(elementoNumero1.value);
    let numero2 = Number(elementoNumero2.value);
    let suma = numero1 + numero2;
    elementoResultado.textContent = suma;
}

function restar() {
    let numero1 = Number(elementoNumero1.value);
    let numero2 = Number(elementoNumero2.value);
    if (numero2 > numero1) {
        alert("No se puede efectuar dicha operación al ser el segundo número mayor que el primero");
    } else {
        let resta = numero1 - numero2;
        elementoResultado.textContent = resta;
    }
}

function multiplicar() {
    let numero1 = Number(elementoNumero1.value);
    let numero2 = Number(elementoNumero2.value);
    let multiplicacion = numero1 * numero2;
    elementoResultado.textContent = multiplicacion;
}

function dividir() {
    let numero1 = Number(elementoNumero1.value);
    let numero2 = Number(elementoNumero2.value);
    if (numero2 === 0) {
        alert("No se puede dividir entre cero");
    } else {
        let division = numero1 / numero2;
        elementoResultado.textContent = division;
    }
}

function potencia() {
    let numero1 = Number(elementoNumero1.value);
    let potencia = numero1 ** 2;
    elementoResultado.textContent = potencia;
}

function raiz() {
    let numero1 = Number(elementoNumero1.value);
    let raizCuadrada = Math.sqrt(numero1);
    elementoResultado.textContent = raizCuadrada;
}

function random(maximo) {
    let resultado = Math.floor(Math.random() * maximo);
    elementoResultado.textContent = resultado;
}

function round (){
    let redondeo = Math.round(elementoNumero1.value)
    elementoResultado.textContent = redondeo
}

function floor (){
    let redondeoHaciaAbajo = Math.floor(elementoNumero1.value)
    elementoResultado.textContent = redondeoHaciaAbajo
}

function ceil (){
    let redondeoHaciaArriba = Math.ceil(elementoNumero1.value)
    elementoResultado.textContent = redondeoHaciaArriba
}