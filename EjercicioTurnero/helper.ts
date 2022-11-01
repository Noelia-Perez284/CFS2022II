import Especialidad from "./class/especialidad";
import * as ReadlineSync from 'readline-sync';
import Medico from "./class/medico";


export function crearNumRamdom(max :number) {
    return Math.floor(Math.random() * max);   //Math.floor 
}

//en esta funcion voy a cargar el arreglo de obj de tipo Especialidad, 
//utilizando el arreglo datosEspecialidad de tipo String que creo el GestorDeArchivos.

export function cargarEspecialidades(arreglo:Array<Especialidad>, nombreEspecialidad:string) {
    let nuevaEspecialidad: Especialidad= new Especialidad (nombreEspecialidad);
    arreglo.push(nuevaEspecialidad);
    return arreglo
}

//funcion para crear una nueva especialidad.
export function crearEspecialidad(arreglo:Array<Especialidad>):Especialidad {
    let nombreEspecialidad:string= ReadlineSync.question("Ingrese nombre de la especialidad: ");
    let nuevaEspecialidad:Especialidad=new Especialidad(nombreEspecialidad);
    arreglo.push(nuevaEspecialidad);
    return nuevaEspecialidad
}


//Funcion para borrar una especialidad
export function borrarEspecialidad(arreglo:Array<Especialidad>,nombreEspecialidad:string){
    for(let i:number=0; i<arreglo.length;i++){
        if(nombreEspecialidad==arreglo[i].getNombre()){
          arreglo.splice(i,1)
        }
    }
}
//------------FUNCIONES PARA MEDICOS--------

export function cargarMedico(arregloMedico:Array<Medico>, especialidad:Especialidad, medico:string){
    let datosArreglo:string[]= medico.split(",")
    let nombre:string=datosArreglo[0];
    let matricula:number=Number(datosArreglo[1]);

    let nuevoMedico:Medico=new Medico(nombre,matricula,especialidad);
    arregloMedico.push(nuevoMedico);

    return arregloMedico;
}