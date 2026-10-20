let fecha = (dateChain) => {
    let f = new Date(dateChain)
    let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    let days = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]
    console.log(`${days[f.getDay()]}, ${f.getDate()} de ${meses[f.getMonth()]} de ${f.getFullYear()}`)
}

fecha("2006-11-30")