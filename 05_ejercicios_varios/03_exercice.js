var characterInString=(chain, char)=>{
    if(typeof chain !== "string" || typeof char !== "string"){
        console.error("Input data error")
    } else {
        if(char.length == 1){
            let numLetres = 0;
            for(let i=0;i<chain.length;i++){
                if(chain.charAt(i) == char){
                    numLetres++;
                }
            }
            console.log(numLetres)
        } else {
            console.error("No es un character")
        }
    }
}

characterInString("hola","a")