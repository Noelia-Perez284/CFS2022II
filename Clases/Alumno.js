"use strict";
exports.__esModule = true;
var Alumno = /** @class */ (function () {
    function Alumno(nombre, DNI, nota) {
        this.nombre = nombre;
        this.DNI = DNI;
        this.nota = nota;
    }
    Alumno.prototype.getNota = function () {
        return this.nota;
    };
    Alumno.prototype.estaAprobado = function () {
        if (this.nota < 7) {
            console.log("El alumno esta desaprobado");
        }
        else {
            console.log("El alumno esta aprobado");
        }
    };
    return Alumno;
}());
exports["default"] = Alumno;
