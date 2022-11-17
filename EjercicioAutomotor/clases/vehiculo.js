"use strict";
exports.__esModule = true;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(dominio, marca, modelo, titular) {
        this.dominio = dominio;
        this.marca = marca;
        this.modelo = modelo;
        this.titular = titular;
    }
    Vehiculo.prototype.getDominio = function () {
        return this.dominio;
    };
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.getTitular = function () {
        return this.titular;
    };
    Vehiculo.prototype.setTitular = function (nuevoTitular) {
    };
    return Vehiculo;
}());
exports["default"] = Vehiculo;
