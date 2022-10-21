class Rueda{
    private medidaDeRueda:number;
    public constructor(medidaDeRueda:number){
        this.medidaDeRueda=medidaDeRueda;
    }
}

let rueda= new Rueda(26)

class Auto {
    private marca:string;
    private cantidadDeRuedas:number;
    private cantidadDePuertas:number;
    private estaEnMarcha:boolean;
    private velocidad:number;
    private year:number;
    private rueda:Rueda;
    
    public constructor(marca:string, cantidadDeRuedas:number, cantidadDePuertas:number,estaEnMarcha: boolean,velocidad:number, rueda:Rueda, year?:number){
        this.marca= marca;
        this.cantidadDeRuedas= cantidadDeRuedas;
        this.cantidadDePuertas= cantidadDePuertas;
        this.estaEnMarcha= estaEnMarcha;
        this.velocidad=velocidad;
        this.rueda= rueda;
        
        if(year == undefined){
            this.year= -1
        }
        else {
            this.year=year
        }

    }

    /*Metodos*/
    
    public prenderAuto(){
        this.estaEnMarcha= true;
    }
    
    public apagarAuto(){
        return this.estaEnMarcha= false;
    }

    public getEstaEnMarcha(){
        return "El auto esta en marcha= " + this.estaEnMarcha
    }
    
    public acelerar() {
        return this.velocidad= this.velocidad + 50
    }
}

let auto1= new Auto("Ford", 4, 5, true, 50,rueda);
let auto2= new Auto("Fiat", 4, 3, true, 100, rueda);
let auto3= new Auto("Chevrolet", 4, 5, true, 90, rueda);
let auto4= new Auto("Toyota", 4, 5, true, 60, rueda);

let arregloAuto: Auto []= [auto1,auto2,auto3,auto4]
console.log(auto1);
console.log(auto1.acelerar())
console.log(auto1.apagarAuto());
console.log(auto1.getEstaEnMarcha());
console.log(auto1)

console.log(arregloAuto)
