var Animal = /** @class */ (function () {
    function Animal(cantidadDePatas, nombre) {
        this.cantidadDePatas = cantidadDePatas;
        this.nombre = nombre;
    }
    Animal.prototype.mostrarInfo = function () {
        console.log("La info es: Nombre ".concat(this.nombre, " y tiene ").concat(this.cantidadDePatas, " patas"));
    };
    return Animal;
}());
var araña = new Animal(8, "Araña");
console.log(araña.mostrarInfo());
