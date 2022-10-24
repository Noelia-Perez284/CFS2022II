import  Alumno  from "./Alumno";
import  Profesor from "./Profesor";



export default class Escuela {
    private nombre: string;
    private direccion: string;
    private listaAlumnos: Array<Alumno>;
    private listaProfes: Array<Profesor>;

    public constructor(nombre: string, direccion: string, listaAlumnos: Array<Alumno>, listaProfes: Array<Profesor>) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.listaAlumnos = listaAlumnos;
        this.listaProfes = listaProfes;
    }

    public getListaAlumnos() {
        return this.listaAlumnos;
    }

    public getListaProfes() {
        return this.listaProfes;
    }

}