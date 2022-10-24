import  Alumno  from "./Alumno";

export default class Profesor {
    private nombre: string;
    private DNI: number;
    private listaAlumnos: Array<Alumno>;

    public constructor(nombre: string, DNI: number, listaAlumnos: Array<Alumno>) {
        this.nombre = nombre;
        this.DNI = DNI;
        this.listaAlumnos = listaAlumnos;
    }

    public getListaAlumnos() {
        return this.listaAlumnos;
    }

public mostrarAlumnos() {
        console.log(this.listaAlumnos)
    }

}