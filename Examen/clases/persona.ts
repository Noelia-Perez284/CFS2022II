 export default abstract class Persona {
    protected nombre:string;
    protected apellido:string;
    protected dni:number;
    protected domicilio:string;

    public constructor(nombre:string,apellido:string,dni:number,domicilio:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.domicilio=domicilio;
    }

    public abstract getDni():number;
    
    public getNombre(): string {
        return this.nombre
    }
    
    public getApellido(): string {
        return this.apellido
    }
    
}