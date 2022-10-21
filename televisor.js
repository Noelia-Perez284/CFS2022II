var Televisor = /** @class */ (function () {
    function Televisor(volumen, canal, estaPrendido) {
        this.volumen = volumen;
        this.canal = canal;
        this.estaPrendido = estaPrendido;
    }
    Televisor.prototype.subirVolumen = function () {
        this.volumen = this.volumen + 1;
    };
    Televisor.prototype.bajarVolumen = function () {
        this.volumen = this.volumen - 1;
    };
    Televisor.prototype.apagarTele = function () {
        this.estaPrendido = false;
    };
    Televisor.prototype.prenderTele = function () {
        this.estaPrendido = true;
    };
    Televisor.prototype.getCanal = function () {
        return "esta en el canal " + this.canal;
    };
    Televisor.prototype.setCanal = function (canal) {
        this.canal = canal;
    };
    return Televisor;
}());
var televisor1 = new Televisor(10, 54, true);
console.log(televisor1.getCanal());
televisor1.setCanal(20);
televisor1.bajarVolumen();
televisor1.apagarTele();
console.log(televisor1);
