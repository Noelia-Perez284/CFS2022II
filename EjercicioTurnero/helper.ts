import Especialidad from "./class/especialidad";
import * as ReadlineSync from 'readline-sync';
import Medico from "./class/medico";
import { readlinkSync } from "fs";
import Paciente from "./class/paciente";


export function crearNumRamdom(max :number) {
    return Math.floor(Math.random() * max);   //Math.floor 
}
//-----------------------FUNCIONES PARA ESPECIALIDADES--------CRUD-- "Crear, Leer, Actualizar y Borrar" 


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
export function borrarEspecialidad(arregloEspecialidad:Array<Especialidad>,nombreEspecialidad:string){
    for(let i:number=0; i<arregloEspecialidad.length;i++){
        if(nombreEspecialidad==arregloEspecialidad[i].getNombre()){
          arregloEspecialidad.splice(i,1)
        }
    }
}
//-----------------------FUNCIONES PARA MEDICOS--------CRUD-- "Crear, Leer, Actualizar y Borrar" 

//funcion cargar lista de Medicos

export function cargarMedico(arregloMedico:Array<Medico>, especialidad:Especialidad, medico:string){
    let datosArreglo:string[]= medico.split(",")
    let nombre:string=datosArreglo[0];
    let matricula:number=Number(datosArreglo[1]);

    let nuevoMedico:Medico=new Medico(nombre,matricula,especialidad);
    arregloMedico.push(nuevoMedico);

    return arregloMedico;
}

//-------funcion para crear una nuevo Medico 

// funcion que verifica si existe matricula

function existeMatricula(arregloMedico:Array<Medico>,matricula:number){
    let existe:boolean= false;
    let i:number=0;
    while ( (existe== false) && (i <arregloMedico.length )){
        if (matricula == arregloMedico[i].getMatricula()){
            existe= true;
        }
        i=i+1;
    }
    return existe
}


export function crearNuevoMedico(arregloMedico:Array<Medico>,arregloEspecialidad:Array<Especialidad>){
    let nombreMedico:string=ReadlineSync.question("Ingrese el nombre del medico: ");
    let nuevaMatricula:number =Number(ReadlineSync.question("Ingrese la nueva matricula: "));
    
    while(existeMatricula(arregloMedico,nuevaMatricula)==true ){
        nuevaMatricula=Number(ReadlineSync.question("La matricula ya existe, ingrese otra: "))
    }
    
    // for (let i:number= 0 ; i<arregloMedico.length ; i++){
    //     if (nuevaMatricula == arregloMedico[i].getMatricula()){
    //         console.log("La matricula ya exixte, debe ingresar una nueva matricula")}
    // }
       
    let especialidad:Especialidad=arregloEspecialidad[crearNumRamdom(arregloEspecialidad.length)];

    let nuevoMedico:Medico=new Medico(nombreMedico,nuevaMatricula,especialidad);
    arregloMedico.push(nuevoMedico);
    return nuevoMedico;
}

//Funcion para borrar un Medico


export function encontrarUbicacionMedico(arregloMedico:Array<Medico>,matricula:number){
    let i:number=0;
    let ok:boolean=true;
    let ubicacion:number=-1;

    while ((i<arregloMedico.length)&&(ok==true)){
        if(arregloMedico[i].getMatricula()==matricula){
            ubicacion=i;
            ok=false
        }else{
            i=i+1
        }
    }
    return ubicacion
}

export function borrarMedico2(arregloMedico:Array<Medico>){
    let matricula:number=ReadlineSync.questionInt("Ingrese el numero de matricula del medico que desea borrar: ");
    let u:number= encontrarUbicacionMedico(arregloMedico,matricula);
    if((u==-1)){
        console.log("No se encontro la matricula ingresada")
    }else{
        arregloMedico.slice(u,1);
        console.log(`Se elimino ${arregloMedico[u].getNombreMedico()}`)
    }
}




//-------------------------------------------------------------------------

export function borrarMedico(arregloMedico:Array<Medico>){
    let numeroMatricula:number=ReadlineSync.questionInt("Ingrese la matricula del medico a eliminar: ")
   
    let i:number=0;
    while(i<arregloMedico.length){
        if(existeMatricula(arregloMedico,numeroMatricula)==true){
            for (let i:number=0; i<arregloMedico.length;i++){
                if(numeroMatricula==arregloMedico[i].getMatricula()){
                arregloMedico.splice(i,1)
                } 
            
            }
    
        }else if(existeMatricula(arregloMedico,numeroMatricula)==false){
            numeroMatricula=ReadlineSync.questionInt("La matricula ingresada no existe, debe ingresar una nueva matricula: ")
        }
        i=i+1;
    }

    }
    
    // while((existeMatricula(arregloMedico,numeroMatricula)==false)&&(i< arregloMedico.length)){
        //     if (numeroMatricula==arregloMedico[i].getMatricula()){
        //         arregloMedico.splice(i,1);
        //     }
        //     i=i+1;
        // }
    
        // for (let i:number=0; i<arregloMedico.length;i++){
        //     if(numeroMatricula==arregloMedico[i].getMatricula()){
        //         arregloMedico.splice(i,1)
        //     }
        // }
    


//------------------FUNCIONES PARA PACIENTES--------CRUD-- "Crear, Leer, Actualizar y Borrar" 

//funcion para cargar pacientes

export function cargarPacientes(arregloPacientes:Array<Paciente>,paciente: string){
    let datosDelArreglo:string []=paciente.split(",");
    let nombre:string=datosDelArreglo[0];
    let dni:number=Number(datosDelArreglo[1]);
    let telefono:number=Number(datosDelArreglo[2]);
    let obra_social:string=datosDelArreglo[3];

    let nuevoPaciente:Paciente=new Paciente(nombre,dni,telefono,obra_social);
    arregloPacientes.push(nuevoPaciente);

    return nuevoPaciente;

}
 //funcion para cargar nuevo Paciente

 //funcion para verificar si existe dni a cargar.

 export function existeDni(arregloPacientes:Array<Paciente>,numeroDni:number){
    let existe:boolean=false
    let i:number=0
    while((existe==false)&&(i<arregloPacientes.length)){
        if(numeroDni==arregloPacientes[i].getDni()){
            existe=true;
        }
        i=i+1;
    }
    return existe
 }
 

//funcion para crear un nuevo PACIENTE

export function cargarNuevoPaciente(arregloPacientes:Array <Paciente>){
    let nombrePaciente:string=ReadlineSync.question("Ingrese el nombre del paciente: ");
    let dni:number=ReadlineSync.questionInt("Ingrese dni del paciente: ");
    
    //comprobacion si existe dni ingreso
    let i:number=0;
    while((existeDni(arregloPacientes,dni)==true)&&(i<arregloPacientes.length)){
        dni=ReadlineSync.questionInt("El dni ya existe, debe ingresar un nuevo dni: ");
        i=i+1;
    }
    let telefono:number=ReadlineSync.questionInt("Ingrese numero de telefono: ");
    let obra_social:string=ReadlineSync.question("Ingrese nombre de la Obra Social: ");

    let nuevoPaciente:Paciente=new Paciente(nombrePaciente,dni,telefono,obra_social);
    arregloPacientes.push(nuevoPaciente);

    return nombrePaciente
}

//Funcion para borrar un PACIENTE.

export function borrarPaciente (arregloPacientes:Array<Paciente>){
    let numeroDni:number=ReadlineSync.questionInt("Ingrese el dni del paciente a eliminar: ");
    let i:number=0;
    while ((existeDni(arregloPacientes,numeroDni)==false)&&(i< arregloPacientes.length)) {
        if(numeroDni==arregloPacientes[i].getDni()){
            numeroDni=ReadlineSync.questionInt("El dni ingresado no existe, debe ingresar un nuevo ")
        }
        
    }
}