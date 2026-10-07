let a = ["a", "b", "c"];
let b = ["d", "e", "f"];
let c = a.concat(b);
console.log(c); // Imprimo C
console.log(c.slice(2,4)); // Imprimo la cadena reducida
console.log(c.splice(1,2,"j")); // Imprimo el resultado de la funcion, en este caso lo que elimino
console.log(c); // Imprimo de nuevo C
console.log(c.sort()) // Ordena por el UNICODE de los Strings