const NOTA_MAXIMA = 10;

for (let i = 0; i <= 10; i++) {
    let input = i;
    if (input < 0 || input > NOTA_MAXIMA) {
        console.log("Nota no válida.");
    } else if (input < 5) {
        console.log("Suspenso.")
    } else if (input >= 5 && input <= 6.99) {
        console.log("Aprobado.")
    } else if (input >= 7 && input <= 8.99) {
        console.log("Notable.")
    } else if (input >= 9) {
        console.log("Sobresaliente.")
    }
}

// Después intenta cambiar el valor de NOTA_MAXIMA a 20 en una línea posterior: ¿qué ocurre? -> Lo que ocurre es que como NOTA_MAXIMA es 'const' si intentamos cambiarlo nos da error porque la hemos declarado como constante.

