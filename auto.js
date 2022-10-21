var Rueda = /** @class */ (function () {
    function Rueda(medidaDeRueda) {
        this.medidaDeRueda = medidaDeRueda;
    }
    return Rueda;
}());
var rueda = new Rueda(26);
var Auto = /** @class */ (function () {
    function Auto(marca, cantidadDeRuedas, cantidadDePuertas, estaEnMarcha, velocidad, rueda, year) {
        this.marca = marca;
        this.cantidadDeRuedas = cantidadDeRuedas;
        this.cantidadDePuertas = cantidadDePuertas;
        this.estaEnMarcha = estaEnMarcha;
        this.velocidad = velocidad;
        this.rueda = rueda;
        if (year == undefined) {
            this.year = -1;
        }
        else {
            this.year = year;
        }
    }
    /*Metodos*/
    Auto.prototype.prenderAuto = function () {
        this.estaEnMarcha = true;
    };
    Auto.prototype.apagarAuto = function () {
        return this.estaEnMarcha = false;
    };
    Auto.prototype.getEstaEnMarcha = function () {
        return "El auto esta en marcha= " + this.estaEnMarcha;
    };
    Auto.prototype.acelerar = function () {
        return this.velocidad = this.velocidad + 50;
    };
    return Auto;
}());
var auto1 = new Auto("Ford", 4, 5, true, 50, rueda);
var auto2 = new Auto("Fiat", 4, 3, true, 100, rueda);
var auto3 = new Auto("Chevrolet", 4, 5, true, 90, rueda);
var auto4 = new Auto("Toyota", 4, 5, true, 60, rueda);
var arregloAuto = [auto1, auto2, auto3, auto4];
console.log(auto1);
console.log(auto1.acelerar());
console.log(auto1.apagarAuto());
console.log(auto1.getEstaEnMarcha());
console.log(auto1);
console.log(arregloAuto);
