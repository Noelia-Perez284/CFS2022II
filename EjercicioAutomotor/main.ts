import GestorDeArchivos from "./clases/gestorDeArchivo";
import Titular from "./clases/titular";
import Vehiculo from "./clases/vehiculo";
import { borrarTitular, cargarTitular, crearTitular,cargarVehiculo } from "./helper";


//-----------Titulares--------

let listaTitulares:Array<Titular>=[];
let datosDelGestorTitulares:GestorDeArchivos=new GestorDeArchivos("./listas/titulares.txt");

datosDelGestorTitulares.mostrarArreglo();

for(let i:number=0; i< datosDelGestorTitulares.getArregloString().length; i++){
    cargarTitular(listaTitulares,datosDelGestorTitulares.getArregloString()[i])
}

console.log(listaTitulares);

crearTitular(listaTitulares);

console.log(listaTitulares);

borrarTitular(listaTitulares)

console.log(listaTitulares);

//-------------------VEHICULOS----------------

let listaVehiculo:Array<Vehiculo>=[];

let datosDelGestorVehiculo:GestorDeArchivos=new GestorDeArchivos("./listas/vehiculos.txt");
console.log(datosDelGestorVehiculo);

for (let i:number=0; i<datosDelGestorVehiculo.getArregloString().length; i++){

    cargarVehiculo(listaVehiculo,datosDelGestorVehiculo.getArregloString()[i],listaTitulares);

}

console.log(listaVehiculo)

