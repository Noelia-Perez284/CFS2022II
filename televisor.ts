class Televisor {
    private volumen : number;
    private canal : number;
    private estaPrendido: boolean;
    
    public constructor(volumen: number, canal: number, estaPrendido: boolean) {
        this.volumen = volumen;
        this.canal = canal;
        this. estaPrendido = estaPrendido;
    }
    
    public subirVolumen() : void {
        this.volumen = this.volumen + 1;
    }
    
    public bajarVolumen() : void {
        this.volumen  = this.volumen - 1; 
    }
    
    
    public apagarTele() {
        this.estaPrendido = false;
    }
    
    public prenderTele() {
        this.estaPrendido = true;
    }
    
    public getCanal() {
        return "esta en el canal " + this.canal;
    }
    
    public setCanal(canal: number) {
        this.canal = canal;
    }
}
let televisor1 = new Televisor( 10, 54, true);
console.log(televisor1.getCanal())
televisor1.setCanal(20);
televisor1.bajarVolumen();
televisor1.apagarTele();
console.log(televisor1);

