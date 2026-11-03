const fs  = require("fs")
let leeme = fs.readFileSync("ficherotexto.txt", "utf8")
console.log(leeme)
fs.writeFileSync("ficheroleido.txt", leeme)

fs.readFile("ficherotexto.txt", "utf8", (err,data)=> {
    if (err) throw err
    console.log("leyendo fichero asincronamente", data)
    fs.writeFile("ficheroleidoASYNC.txt",data,err=> {if(err) throw err})
})