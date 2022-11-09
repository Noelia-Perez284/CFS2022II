"use strict";
exports.__esModule = true;
var Paciente = /** @class */ (function () {
    function Paciente(nombre_paciente, dni, telefono, obra_social) {
        this.nombre_paciente = nombre_paciente;
        this.dni = dni;
        this.telefono = telefono;
        this.obra_social = obra_social;
    }
    Paciente.prototype.getNombre_paciente = function () {
        return this.nombre_paciente;
    };
    Paciente.prototype.getDni = function () {
        return this.dni;
    };
    Paciente.prototype.getTelefono = function () {
        return this.telefono;
    };
    Paciente.prototype.getObra_social = function () {
        return this.obra_social;
    };
    Paciente.prototype.setNombre = function (nuevoNombrePaciente) {
        this.nombre_paciente = nuevoNombrePaciente;
    };
    Paciente.prototype.setTelefono = function (nuevo_telefono) {
        this.telefono = nuevo_telefono;
    };
    Paciente.prototype.setObra_social = function (nuevaObraSocial) {
        this.obra_social = nuevaObraSocial;
    };
    return Paciente;
}());
exports["default"] = Paciente;
