const persona = require("./persona.js");

let personas = ["Caillou", "Huevito", "Huevo Kinder", "Calamardo", "Gru", "Po"]

persona.add("Hugo Payo", personas)
console.log(personas)
persona.del("Huevo Kinder", personas)
console.log(personas)