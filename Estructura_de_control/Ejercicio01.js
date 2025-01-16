// Comparador de números por intervalos
const num1 = 5;
const num2 = 8;
const num3 = 14;

const num_a_comparar = 15;

if (num_a_comparar === num1) {
    console.log(`El número ${num_a_comparar} es igual que el ${num1}`);
} else if (num_a_comparar > num1 && num_a_comparar <= num2) {
    console.log(`El número ${num_a_comparar} es mayor que el ${num1} y menor o igual que el ${num2}`);
} else if (num_a_comparar > num2 && num_a_comparar <= num3) {
    console.log(`El número ${num_a_comparar} es mayor que el ${num2} y menor o igual que el ${num3}`);
} else if (num_a_comparar > num3) {
    console.log(`El número ${num_a_comparar} es mayor que el ${num3}`);
} else {
    console.log(`El número ${num_a_comparar} es menor o igual que el ${num1}`);
}
