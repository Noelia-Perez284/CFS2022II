import * as fs from 'fs';
// import * as 'readline-sync'

export default class GestorDeArchivos {
    ​
        private arregloString: string[];
    ​
        constructor(txtFileLocation: string) {
    
            let archivoTxt: string = fs.readFileSync(txtFileLocation, 'utf-8');
            this.arregloString = archivoTxt.split(';');  //vamos a tener nuestro "objetos" separados por ;
            //[Juan Perez,333333333,Karen Simari,22222222]
    
        }
    
    
    public mostrarArreglo(): void {
            console.log(this.arregloString);
        } 
    
    
    public getArregloString(): string[] {
            return this.arregloString;
        }
    ​
    }