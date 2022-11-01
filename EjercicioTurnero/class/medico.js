"use strict";
exports.__esModule = true;
var Medico = /** @class */ (function () {
    function Medico(nombreMedico, matricula, especialidad) {
        this.nombreMedico = nombreMedico;
        this.matricula = matricula;
        this.especialidad = especialidad;
    }
    Medico.prototype.getNombreMedico = function () {
        return this.nombreMedico;
    };
    Medico.prototype.setNombre = function (nuevoNombre) {
        this.nombreMedico = nuevoNombre;
    };
    Medico.prototype.getMatricula = function () {
        return this.matricula;
    };
    Medico.prototype.getEspecialidad = function () {
        return this.especialidad;
    };
    Medico.prototype.setEspecialidad = function (nueva_especialidad) {
        this.especialidad = nueva_especialidad;
    };
    return Medico;
}());
exports["default"] = Medico;
