export default class Especialidad {
private nombreEspecialidad:string;
public constructor(nombreEspecialidad:string){
    this.nombreEspecialidad=nombreEspecialidad
}

public getNombre(): string{
    return this.nombreEspecialidad
}
}