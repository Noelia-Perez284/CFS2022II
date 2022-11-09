//Ejercicio 1:
// Con todo lo aprendido hasta el momento optimizar el siguiente codigo,-teniendo presente todo lo hablado sobre buenas practicas- ver que herramientas de las hasta ahora vistas se pueden utilizar (composicion, herencia, polimorfismo, etc).

class Mascosta {
    private name:string;
    private sound:string;

    public constructor(name:string, sound:string){
        this.name=name;
        this.sound=sound;
    }

    public makeSound(): void {
        console.log(this.sound)
    }

}

let minino: Mascosta = new Mascosta("Pocky", " meow meow");
minino.makeSound(); // -> meow meow
let firulais: Mascosta = new Mascosta ("Pocky","wuff wuff");
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