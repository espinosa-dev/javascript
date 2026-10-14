// Arrow function

let searchInString = (chain, toSearch) => {
    
    if (typeof chain !== "string" || typeof toSearch !== "string"){
        console.error("Invalid input type.")
    } else {
        chain = chain.toLowerCase();
        toSearch = toSearch.toLowerCase();
        
        if (chain.includes(toSearch)){
            console.log(true)
        }
    }
}

searchInString("Hola que tal estas, yo estoy muy bien.","YO")