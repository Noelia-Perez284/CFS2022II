import Especialidad from "./especialidad";

export default class Medico {
    private nombreMedico:string;
    private matricula:number;
    private especialidad:Especialidad;

    public constructor (nombreMedico:string, matricula:number, especialidad:Especialidad){
        this.nombreMedico=nombreMedico;
        this.matricula=matricula;
        this.especialidad= especialidad;
    }

    public getNombreMedico(){
        return this.nombreMedico
    }
    public setNombre(nuevoNombre:string):void {
        this.nombreMedico=nuevoNombre
    }
    public getMatricula(){
        return this.matricula
    }
    public getEspecialidad():Especialidad {
        return this.especialidad

    }
    public setEspecialidad(nueva_especialidad:Especialidad):void{
        this.especialidad=nueva_especialidad
    }

}