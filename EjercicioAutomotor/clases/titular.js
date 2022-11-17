"use strict";
exports.__esModule = true;
var Titular = /** @class */ (function () {
    function Titular(nombre, dni, domicilio) {
        this.nombre = nombre;
        this.dni = dni;
        this.domicilio = domicilio;
    }
    Titular.prototype.getNombre = function () {
        return this.nombre;
    };
    Titular.prototype.getDni = function () {
        return this.dni;
    };
    Titular.prototype.getDomicilio = function () {
        return this.domicilio;
    };
    Titular.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Titular.prototype.setDomicilio = function (nuevoDomicilio) {
        this.domicilio = nuevoDomicilio;
    };
    return Titular;
}());
exports["default"] = Titular;
