"use strict";
exports.__esModule = true;
var Escuela = /** @class */ (function () {
    function Escuela(nombre, direccion, listaAlumnos, listaProfes) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.listaAlumnos = listaAlumnos;
        this.listaProfes = listaProfes;
    }
    Escuela.prototype.getListaAlumnos = function () {
        return this.listaAlumnos;
    };
    Escuela.prototype.getListaProfes = function () {
        return this.listaProfes;
    };
    return Escuela;
}());
exports["default"] = Escuela;
