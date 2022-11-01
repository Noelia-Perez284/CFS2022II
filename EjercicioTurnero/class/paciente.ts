export default class Paciente {
    private nombre_paciente:string;
    private dni:number;
    private telefono:number;
    private obra_social: string;

    public constructor(nombre_paciente: string, dni:number,telefono:number, obra_social:string){
        this.nombre_paciente=nombre_paciente;
        this.dni=dni;
        this.telefono=telefono;
        this.obra_social=obra_social;
    }

    public getNombre_paciente():string{
        return this.nombre_paciente
    }
    public getDni():number{
        return this.dni
    }
    public getTelefono():number{
        return this.telefono
    }
    public getObra_social():string {
        return this.obra_social
    }
    public setNombre(nuevoNombrePaciente:string) :void {
        this.nombre_paciente=nuevoNombrePaciente
    }
    public setTelefono(nuevo_telefono:number):void{
        this.telefono=nuevo_telefono
    }
    public setObra_social(nuevaObraSocial:string): void {
        this.obra_social=nuevaObraSocial
    }
}