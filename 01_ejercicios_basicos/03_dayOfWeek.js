
for (let i = 0; i <=7; i++){
    let dayNumber = i;
    switch(true) {
        case (dayNumber >= 1 && dayNumber <= 5):
            console.log("Día laborable")
            break;
        case (dayNumber >= 6 && dayNumber <= 10):
            console.log("Fin de semana.")
            break;
        default: 
        console.log("Día Incorrecto.")
        break;
    }
}