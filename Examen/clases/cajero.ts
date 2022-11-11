import CajaRegistradora from "./cajaRegistradora";
import Persona from "./persona";
import Trabajador from "./trabajador";

class Cajero extends Persona implements Trabajador{
    
    sueldo:number;
    numeroLegajo:number;
    obra_social:string;
    cajaRegistradora:CajaRegistradora;

    public constructor(nombre:string,apellido:string,dni:number,domicilio:string,sueldo:number,numeroDeLegajo:number,obra_social:string,cajaRegistradora:CajaRegistradora){
        super(nombre,apellido,dni,domicilio)
        this.sueldo=sueldo;
        this.numeroLegajo=numeroDeLegajo;
        this.obra_social=obra_social;
        this.cajaRegistradora=cajaRegistradora;

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