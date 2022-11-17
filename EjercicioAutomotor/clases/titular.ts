export default class Titular{
    private nombre:string;
    private dni:number;
    private domicilio:string;
    
    public constructor( nombre:string,dni:number,domicilio:string){
        this.nombre=nombre;
        this.dni=dni;
        this.domicilio=domicilio;
    }

    public getNombre():string{
        return this.nombre
    }
    public getDni():number{
        return this.dni
    }
    public getDomicilio():string{
        return this.domicilio
    }
    public setNombre(nuevoNombre:string):void{
        this.nombre=nuevoNombre
    }
    public setDomicilio(nuevoDomicilio:string):void{
        this.domicilio=nuevoDomicilio
    }
}