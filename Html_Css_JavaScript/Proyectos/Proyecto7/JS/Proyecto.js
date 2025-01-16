function empleado (legajo, nombre, apellido, fechaNacimiento, cargo) {
    this.legajo = legajo
    this.nombre = nombre
    this.apellido = apellido
    this.fechaNacimiento = fechaNacimiento
    this.cargo = cargo
   }

   let empleados = []

   function agregarEmpleado() {
    let elementoLegajo = document.getElementById("legajo").value
    let elementoNombre = document.getElementById("nombre").value
    let elementoApellido = document.getElementById("apellido").value
    let elementoFecha = document.getElementById("fechaNacimiento").value
    let elementoCargo = document.getElementById("cargo").value

    let nuevoEmpleado = new empleado (elementoLegajo, elementoNombre, elementoApellido, elementoFecha, elementoCargo)

    empleados.push(nuevoEmpleado)
   
    alert("Empleado ingresado correctamente")
    }

    function propiedades() {
        for (let i = 0; i < empleados.length; i++) {
            let empleadoActual = empleados[i];
            for (let prop in empleadoActual) {
                let valor = empleadoActual[prop];
                alert("Empleado " + (i + 1) + " - Propiedad: " + prop + " : " + valor);
            }
        }
    }
