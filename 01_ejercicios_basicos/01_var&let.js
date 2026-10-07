for (var i = 0; i < 3; i++) {
    var mensaje = "Vuelta " + i;
}
console.log("i vale:", i);
console.log("mensaje:", mensaje);
for (let j = 0; j < 3; j++) {
    let texto = "Vuelta " + j;
}
console.log("j vale:", j);

// ¿Qué valor tienen i y mensaje fuera del bucle? -> i vale 3, mensaje vale "Vuelta 2"
// ¿Qué ocurre en la última línea? ¿Por qué? -> La última línea genera un error porque la variable j y texto fueron declaradas con let, lo que significa que su alcance está limitado al bloque del bucle for. Por lo tanto, fuera del bucle, j y texto no están definidas y no se pueden acceder.
//  Explica con tus palabras la diferencia entre var y let -> var tiene un alcance global o funcional, mientras que let tiene un alcance de bloque. Esto significa que las variables declaradas con let solo son accesibles dentro del bloque donde fueron declaradas.
