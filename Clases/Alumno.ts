export default class Alumno {
    private nombre: string;
    private DNI: number;
    private nota: number;

    public constructor(nombre: string, DNI: number,nota: number,) {
        this.nombre = nombre;
        this.DNI = DNI;
        this.nota = nota;
    }

    public getNota() {
        return this.nota;
    }

    public estaAprobado() {
        if (this.nota < 7) {
            console.log("El alumno esta desaprobado")
        } else {
            console.log("El alumno esta aprobado")
        }
    }
}