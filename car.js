class car{
    constructor(Marca){
        this.carName=Marca
    }
    present(){
        return 'I have a ' + this.carName
    }
}

class Model extends car{
    constructor(Marca, mod){
        super(Marca);
        this.model = mod;
    }
    show(){
        return this.present() + ', it is a ' + this.model;
    }
}

let myCar = new Model("Ferrari", "BMW");
myCar.show()
console.log(myCar.show());