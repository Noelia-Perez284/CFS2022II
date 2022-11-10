import Titular from "./titular";

export default class Vehiculo{
    private dominio:string;
    private marca:string;
    private modelo;
    private titular:Titular;
    
    public constructor(dominio:string,marca:string,modelo:string,titular:Titular){
        this.dominio=dominio;
        this.marca=marca;
        this.modelo=modelo;
        this.titular=titular;
    
    }

    public getDominio():string{
        return this.dominio
    }
    public getMarca():string{
        return this.marca
    }
    public getModelo():string{
        return this.modelo
    }
    public getTitular():Titular{
        return this.titular
    }
    public setTitular(nuevoTitular:string):void{
        
    }
    
}