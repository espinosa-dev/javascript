const os = require("os");
let resultado = os.userInfo().username;
console.log(`Hola ${resultado}`)