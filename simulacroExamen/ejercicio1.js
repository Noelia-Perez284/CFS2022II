//Ejercicio 1:
// Con todo lo aprendido hasta el momento optimizar el siguiente codigo,-teniendo presente todo lo hablado sobre buenas practicas- ver que herramientas de las hasta ahora vistas se pueden utilizar (composicion, herencia, polimorfismo, etc).
var Mascosta = /** @class */ (function () {
    function Mascosta(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    Mascosta.prototype.makeSound = function () {
        console.log(this.sound);
    };
    return Mascosta;
}());
var minino = new Mascosta("Pocky", " meow meow");
minino.makeSound(); // -> meow meow
var firulais = new Mascosta("Pocky", "wuff wuff");
firulais.makeSound(); // -> wuff wuff
// class Dog {
//  public name: string;
//  constructor(name: string) {
//    this.name = name;
//  }
//  public makeSound(): void {
//    console.log ('wuff wuff\n');
//  }
// }
// class Cat {
//  public name: string;
//  constructor(name: string) {
//    this.name = name;
//  }
//   public makeSound(): void {
//    console.log('meow meow\n');
//  }
// }
// let minino: Cat = new Cat('Pocky');
// minino.makeSound(); // -> meow meow
// let firulais: Dog = new Dog('Pocky');
// firulais.makeSound(); // -> wuff wuff
