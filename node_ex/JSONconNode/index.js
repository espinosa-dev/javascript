//cargar módulo fs
const fs = require('fs')
// esto lee
let fichero = fs.readFileSync('./clientes.json');
let clientes = new Array();
clientes = JSON.parse(fichero);
console.log(clientes)

fs.writeFileSync('./clientes2.json', JSON.stringify(clientes));