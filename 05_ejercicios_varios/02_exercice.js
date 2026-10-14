function recursiveMultiplicator(laps, number){
    for (let i = 0; i < laps; i++) {
        console.log(number)
        number = number * 2
    }
}

recursiveMultiplicator(4,6)