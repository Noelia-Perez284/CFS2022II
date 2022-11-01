import Medico from "./medico";
import Paciente from "./paciente";
import Horario from "./horario";

class Turno {
    private medico:Medico;
    private paciente:Paciente;
    private horario:Horario;
    private numeroDeTurno:number;

    public constructor(medico:Medico,paciente:Paciente,horario:Horario,numeroDeTurno:number){
        this.medico=medico;
        this.paciente=paciente;
        this.horario=horario;
        this.numeroDeTurno=numeroDeTurno
    }
    public getMedico():Medico{
        return this.medico
    }
    public setMedico(nuevoMedico:Medico):void{
        this.medico=nuevoMedico
    }
    public getPaciente():Paciente{
        return this.paciente
    }
    public setPaciente(nuevoPaciente:Paciente):void{
        this.paciente=nuevoPaciente
    }
    public getHorario():Horario{
        return this.horario
    }
    public setHorario(nuevoHorario:Horario):void{
        this.horario=nuevoHorario
    }

}
