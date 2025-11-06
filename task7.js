

// Type your code below this line!
import promptSync from "prompt-sync";
const prompt = promptSync();
function Car(make, model, year, engine, color, mileage) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.engine = engine,
    this.color = color,
    this.mileage = mileage
    this.printCar = function() {
        console.log(`El auto es un ${this.make} ${this.model} ${this.color} del año ${this.year} con un motor ${this.engine} y un kilometraje de  ${this.mileage}`)
    }
}

let newCar = new Car(
    prompt("Indique la marca del auto: "),
    prompt("Indique el modelo del auto: "),
    prompt("Ingrese el año de fabricación: "),
    prompt("Indique si el motor es eléctrico o a combustión: "),
    prompt("indique el color del auto: "),
    prompt("Indique la cantidad de kilométros de metraje: ")
    )

newCar.printCar();
// Type your code above this line!
