 /**
   * Ejercicio: Gestión de Empleados en una Empresa
Tienes un array con información de empleados de una empresa. Cada objeto contiene el nombre, edad, departamento y salario del empleado. Tu tarea es realizar lo siguiente:

Filtrar los empleados que tienen más de 30 años.
Calcular el salario anual de cada empleado (su salario mensual multiplicado por 12).
Filtrar los empleados cuyo salario anual sea superior a 30,000.
Mostrar una lista con los nombres de los empleados que cumplen con los requisitos anteriores.
Datos:

const empleados = [
  { nombre: "Juan", edad: 25, departamento: "Ventas", salarioMensual: 2200 },
  { nombre: "Ana", edad: 32, departamento: "Marketing", salarioMensual: 2800 },
  { nombre: "Pedro", edad: 45, departamento: "Finanzas", salarioMensual: 3500 },
  { nombre: "Maria", edad: 29, departamento: "Recursos Humanos", salarioMensual: 2700 },
  { nombre: "Luis", edad: 38, departamento: "Ventas", salarioMensual: 3200 },
  { nombre: "Carla", edad: 35, departamento: "Marketing", salarioMensual: 3800 }
];
Tareas:
Filtrar empleados mayores de 30 años.
Calcular el salario anual de cada uno de los empleados.
Filtrar los empleados cuyo salario anual sea superior a 30,000.
Mostrar por consola los nombres de los empleados que cumplen con estos criterios.
   */

const empleados = [
    { nombre: "Juan", edad: 25, departamento: "Ventas", salarioMensual: 2200 },
    { nombre: "Ana", edad: 32, departamento: "Marketing", salarioMensual: 2800 },
    { nombre: "Pedro", edad: 45, departamento: "Finanzas", salarioMensual: 3500 },
    { nombre: "Maria", edad: 29, departamento: "Recursos Humanos", salarioMensual: 2700 },
    { nombre: "Luis", edad: 38, departamento: "Ventas", salarioMensual: 3200 },
    { nombre: "Carla", edad: 35, departamento: "Marketing", salarioMensual: 3800 }
  ];

  //Buscamos los empleados mayores de 30
  const mayor = empleados.filter(empleado => empleado.edad > 30)
  console.log("Los empleados mayores de 30 años son: ", mayor)

  //Calculamos el salario anual
  const salarioAnual = empleados.map(empleado => {
    const salario = empleado.salarioMensual*12
    return {
        nombre: empleado.nombre,
        edad: empleado.edad,
        departamento: empleado.departamento,
        salarioMensual: empleado.salarioMensual,
        salario: salario
    }
  })
  console.log("El salario anual se corresponde con: " ,salarioAnual)

  //Buscamos los empelados cuyo salario sea mayor a 30.000, por ello, trabajaremos sobre salarioAnual

  const altoSalario = salarioAnual.filter(empleado => empleado.salario > 30000)
  console.log("Salarios superiores a 30.000: ", altoSalario)
