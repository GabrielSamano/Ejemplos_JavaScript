
const multiply = (a,b) => {
    let resultado = 0
    const positivo = Math.abs(b) == b
    for (i = 0; i < Math.abs(b); i++){
        resultado = positivo ? resultado + a : resultado - a
    }
    return resultado
}

const a = multiply(50,70)
console.log(a)

const mayorP = (arr) => arr.reduce((acc, el) => acc > el ? acc:el)
const b = mayorP([-100,50,10,-750,250,30,300])
console.log(b) 
