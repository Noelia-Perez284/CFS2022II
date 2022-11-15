import Titular from "./clases/titular";
import Vehiculo from "./clases/vehiculo";
import GestorDeArchivos from "./clases/gestorDeArchivo";

import * as ReadlineSync from 'readline-sync';
import { readlinkSync } from "fs";

export function crearNumRamdom(max :number) {
    return Math.floor(Math.random() * max);   //Math.floor 
}

//Funcion para cargar lista de Titulares CRUD--"Crear, Leer, Actualizar y Borrar" 

//en esta funcion voy a cargar el arreglo de obj de tipo Titular, 
//utilizando el arreglo datosDelGestor de tipo String que creo el GestorDeArchivos.
 export function cargarTitular (arregloTitular:Array <Titular>,titular:string){
    let datosDelGestor:string[]=titular.split(",");
    let nombre:string=datosDelGestor[0];
    let dni:number=Number(datosDelGestor[1]);
    let domicilio:string=datosDelGestor[2];

    let nuevoTitular:Titular=new Titular(nombre,dni,domicilio);
    arregloTitular.push(nuevoTitular);
    return arregloTitular
 }

 //Funcion para cargar un nuevo titular

//funcion para verificar que existe dni
 function existeDni(arregloTitular:Array<Titular>,dni:number){
    let existe:boolean=false;
    let i:number=0;
    while((existe==false)&&(i<arregloTitular.length)){
        if(dni==arregloTitular[i].getDni()){
            existe=true;
        }
        i=i+1;
    }
    return existe
 }

 export function crearTitular(arregloTitular:Array<Titular>){
    let nombre:string= ReadlineSync.question("Ingrese nombre del titular: ");
    let dni:number=ReadlineSync.questionInt("Ingrese el dni del tiular: ");
    
    if(existeDni(arregloTitular,dni)==true){
        dni=ReadlineSync.questionInt("El dni ingresado ya existe, debe ingresar un nuevo numero: ")
    }
    
    let domicilio:string=ReadlineSync.question("Ingrese el domicilio del titular: ")

    let nuevoTitular:Titular=new Titular(nombre,dni,domicilio);
    arregloTitular.push(nuevoTitular);
    
    return nuevoTitular
 }

 //funcion Borrar titular

 //funcion buscar por posicion
 function buscarUbicacion(arregloTitular:Array<Titular>,dni:number){
    let ok:boolean=false;
    let ubicacion:number=-1;
    let i:number=0;
    while((ok==false)&&(i<arregloTitular.length)){
        if(arregloTitular[i].getDni()==dni){
            ubicacion=i;
            ok=true;
        }else{
            i=i+1
        }
    }
    return ubicacion
 }

 export function borrarTitular(arregloTitular:Array<Titular>){
    let dni:number=ReadlineSync.questionInt("Ingrese el dni del titular a borrar: ");
    
    let u=buscarUbicacion(arregloTitular,dni)
    if(u==-1){
        console.log("No se encontro dni ingresado")
    }else{
        console.log(`Se elimino el titular ${arregloTitular[u].getNombre()}`)
        arregloTitular.splice(u,1) 
    }
    
    
    // if (existeDni(arregloTitular,dni)==false){
    //     console.log("El dni ingresado no existe")
    // }else{
    //     for(let i:number=0; i< arregloTitular.length;i++){
    //         if
    //     }
    // }
 }
//------------------------VEHICULOS-----------------------

//Funcion para cargar lista de Vehiculos CRUD--"Crear, Leer, Actualizar y Borrar" 

export function cargarVehiculo(arregloVehiculos:Array<Vehiculo>,vehiculo:string, arregloTitular:Array <Titular>){
    let datosDelGestor:string[]=vehiculo.split(",");
    let dominio:string=datosDelGestor[0];
    let marca:string=datosDelGestor[1];
    let modelo:string=datosDelGestor[2];
    let titular:Titular=arregloTitular[crearNumRamdom(arregloTitular.length)];

    let nuevoVehiculo: Vehiculo=new Vehiculo(dominio,marca,modelo,titular);
    arregloVehiculos.push(nuevoVehiculo);
    
    return arregloVehiculos
}


//Funcion para cargar un nuevo Vehiculo
//Funcion para verificar si existe dominio
function existeDominio(arregloVehiculos:Array <Vehiculo>,dominio:string){
let existe:boolean=false;
let i:number=0;
while((existe==false)&&(i<arregloVehiculos.length)){
    if(dominio==arregloVehiculos[i].getDominio()){
        existe=true;
    }
    i=i+1;
}
return existe
}

export function cargarNuevoVehiculo(arregloVehiculos:Array<Vehiculo>,arregloTitular:Array<Titular>){
    
    let dominio:string=ReadlineSync.question("Ingrese Dominio del Vehiculo: ");
    if (existeDominio(arregloVehiculos,dominio)==true){
        dominio=ReadlineSync.question("El dominio ingresado ya existe, debe ingresar un nuevo dominio: ")
    }
    let marca:string=ReadlineSync.question("Ingrese marca del vehiculo: ");
    let modelo:string=ReadlineSync.question("Ingrese modelo del vehiculo: ");
    let titular:Titular=crearTitular(arregloTitular);
    let nuevoVehiculo:Vehiculo=new Vehiculo(dominio,marca,modelo,titular);
    arregloVehiculos.push(nuevoVehiculo);

    return nuevoVehiculo;
}

//funcion Borrar Vehiculo
//funcion para buscar por posicion
export function buscarUbicacionVehiculo(arregloVehiculos:Array<Vehiculo>,dominio:string){
    let ok:boolean=false;
    let ubicacion:number=-1;
    let i:number=0;
    while((ok==false)&& (i<arregloVehiculos.length)){
        if(dominio==arregloVehiculos[i].getDominio()){
            ok=true
        }else{
            i=i+1
        }
    }
}

export function deleteVehiculo(arregloVehiculos:Array<Vehiculo>){

}



