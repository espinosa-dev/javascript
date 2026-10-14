
let studentAvearage = (name, ...grades) => {
    console.log(`La media de notas de \'${name}\' es: ${grades.reduce((total, num) => ((total + num)), 0)/grades.length}`)
}

studentAvearage("Hugo", 4.25, 6, 8.5, 9)