"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var persona_1 = require("./persona");
var Repositor = /** @class */ (function (_super) {
    __extends(Repositor, _super);
    function Repositor(nombre, apellido, dni, domicilio, sueldo, numeroDeLegajo, obra_social) {
        var _this = _super.call(this, nombre, apellido, dni, domicilio) || this;
        _this.sueldo = sueldo;
        _this.numeroLegajo = numeroDeLegajo;
        _this.obra_social = obra_social;
        return _this;
    }
    Repositor.prototype.getDni = function () {
        return this.dni;
    };
    Repositor.prototype.ficharIngreso = function () {
        console.log("fecha y hora de ingreso");
    };
    Repositor.prototype.avisoVacaciones = function () {
        console.log("Fecha de vacaciones");
    };
    return Repositor;
}(persona_1["default"]));
exports["default"] = Repositor;
