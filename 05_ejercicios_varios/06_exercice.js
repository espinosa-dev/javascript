/*
Realiza los siguientes pasos (muestra por consola el resultado después de aplicar cada uno):
- Crea un array con 4 elementos
- Concatena 2 elementos más al final y 2 al principio
- Elimina las posiciones de la 3 a la 5 (ambas incluidas)
- Inserta 2 elementos más entre el penúltimo y el último
- Muestra el array del paso anterior, pero con los elementos separados por " ==> "
 */

var array = [1,2,3,4]

console.log(`Creamos el array: ${array}`)
array.push(5,6)
array.unshift(-1,0)
console.log(`Añadimos elementos: ${array}`)
array.splice(3,3)
console.log(`Eliminamos elementos: ${array}`)