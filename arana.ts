class Animal{
    cantidadDePatas : number;
    nombre: string;
    mostrarInfo(){
        console.log(`La info es: Nombre ${this.nombre} y tiene ${this.cantidadDePatas} patas`)
    }
    constructor(cantidadDePatas:number,nombre:string){
        this.cantidadDePatas = cantidadDePatas;
        this.nombre = nombre;
    }
}
let araña = new Animal(8,"Araña");
console.log(araña.mostrarInfo());