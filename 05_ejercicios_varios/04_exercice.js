let productTaxes = (name = "Producto generico", price = 100, tax = 21) => {
    if(typeof name !== "string" || typeof price !== "number" || typeof tax !== "number"){
        console.error("Invalid input")
    } else {
        console.log(`El producto \"${name}\" tiene un precio de ${price*(tax/100)}`)
    }
}

productTaxes("Test")




