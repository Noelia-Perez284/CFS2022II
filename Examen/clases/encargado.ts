import Persona from "./persona";

export default class Encargado extends Persona {
    private numeroDeSucursales:number;
    
    public constructor(nombre:string,apellido:string,dni:number,domicilio:string,numeroDeSucursales:number){
        super(nombre,apellido,dni,domicilio)
        this.numeroDeSucursales=numeroDeSucursales;
    }
    getDni(): number {
        return this.dni;
    }

   
}