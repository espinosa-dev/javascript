/*

function moreLength(chain1, chain2){
    if(typeof chain1 !== "string" || typeof chain2 !== "string") {
        console.error("Inputs have to be Strings.")
    } else {
        console.log((chain1.length>chain2.length)?`La cadena \'${chain1}\' es la mas larga`:(chain1.length==chain2.length)?`Las cadenas son igual de largas.`:`La cadena \'${chain2}\' es la más larga.`)
    }
    
}
*/

var moreLength = (chain1, chain2) => {
    if(typeof chain1 !== "string" || typeof chain2 !== "string") {
        console.error("Inputs have to be Strings.")
    } else {
        console.log((chain1.length>chain2.length)?`La cadena \'${chain1}\' es la mas larga`:(chain1.length==chain2.length)?`Las cadenas son igual de largas.`:`La cadena \'${chain2}\' es la más larga.`)
    }
}

moreLength("hola", "holaa")


