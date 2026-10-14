/*
Crea un array de cadenas y ordénalo usando el método sort de mayor a menor longitud.
Imprime el array original (antes de ordenarlo) y el resultado.
*/

let orderArrayLength = (array) => {
    if (Array.isArray(array)){
        console.log(array)
        array.sort((a, b) => b.length-a.length)
        console.log(array)
    }
}


var strings = ["holaa","hola","ho","hol","holaaa"]
orderArrayLength(strings)



