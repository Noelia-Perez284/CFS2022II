export default class Horario {
    private fecha:string;
    private hora:string;

    public constructor(fecha:string,hora:string){
        this.fecha=fecha;
        this.hora=hora;
    }

    public getFecha():string{
        return this.fecha
    }
    public getHora():string{
        return this.hora
    }
    public setFecha(nuevaFecha:string):void{
        this.fecha=nuevaFecha
    }
    public setHora(nuevaHora:string):void {
        this.hora=nuevaHora
    }
}