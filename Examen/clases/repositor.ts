import Persona from "./persona";
import Trabajador from "./trabajador";

export default class Repositor extends Persona implements Trabajador {
    private sueldo:number;
    private numeroLegajo:number;
    private obra_social:string;
    
    public constructor(nombre:string,apellido:string,dni:number,domicilio:string,sueldo:number,numeroDeLegajo:number,obra_social:string){
        super(nombre,apellido,dni,domicilio)
        this.sueldo=sueldo;
        this.numeroLegajo=numeroDeLegajo;
        this.obra_social=obra_social;

    }
    
    
    public getDni(): number {
        return this.dni;
    }
    public ficharIngreso() {
    console.log("fecha y hora de ingreso")
    }
    public avisoVacaciones(){
     console.log("Fecha de vacaciones")
    }
}

