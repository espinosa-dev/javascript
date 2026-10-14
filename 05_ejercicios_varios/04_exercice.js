let productTaxes = (name = "Producto generico", price = 100, tax = 21) => {
    if(typeof name !== "string" || typeof price !== "number" || typeof tax !== "number") {
        console.error("Invalid input")
    } else {
        console.log(`El producto \"${name}\" tiene un precio de ${price*((tax/100)+1)}`)
    }
}

productTaxes("Test")
// Salida esperada: El producto "Test" tiene un precio de 121
productTaxes("Test", 20 , 10)
// Salida esperada: El producto "Test" tiene un precio de 22

