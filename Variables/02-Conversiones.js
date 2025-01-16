// En este documento, vamos a trabajar con conversiones

let year = 2024;
let name = "Alberto";
let boolean = true;

console.log(typeof year);    // number
console.log(typeof name);    // string
console.log(typeof boolean); // boolean

// Para convertir una variable a otro tipo de dato, es importante realizar:

let año_nuevo = String(year); // Cambiamos el year a string
let numero = Number(name);    // Cambiamos de tipo string a numero (esto será NaN)
let boleano_mal_escrito = String(boolean); // Cambiamos el valor a string
let change = Boolean(year);   // Cambiamos el número a boolean

console.log(typeof año_nuevo);         // string
console.log(typeof numero);            // number (aunque el valor será NaN)
console.log(typeof boleano_mal_escrito); // string
console.log(typeof year);              // number (no cambia)

//Conclusión final
//Si queremos cambiar a un determinado tipo de dato, es importante crear una nueva variable = Number() o String() o Boolean() dependiendo de lo que quieras cambiar

