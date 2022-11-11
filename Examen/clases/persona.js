"use strict";
exports.__esModule = true;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, dni, domicilio) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.domicilio = domicilio;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    return Persona;
}());
exports["default"] = Persona;
