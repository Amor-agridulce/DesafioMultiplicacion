// Se pide ingresar número
let numero = parseInt(prompt("Ingrese un número del 1 al 20"))

// Factorial
const factorial = num => {
    if(num <= 1) return 1
    return num * factorial(num - 1)
}

// Verifica si está el número entre 1 y 20
const verificar = (num) => {
    if(num >= 1 && num <= 20 ){

        // Calcula las tablas de multiplicar segun ese numero
        for (let i = 1; i <= num ; i++) {
             console.log(`${num} x ${i} = ${num * i}`);
        }
        
        // Calcula el factorial
        for (let i = 1; i <= num ; i++){
            console.log(`Factorial de ${i} es: ${factorial(i)}`);
        }
    }

    // Si es que ingresa mayor a 20
    else{
        console.log("Número fuera del rango")
    }
}

// Mostrar la funcion verificar
verificar(numero)

