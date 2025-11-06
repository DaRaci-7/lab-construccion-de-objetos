

// Type your code below this line!
import promptSync from "prompt-sync";
const prompt = promptSync();
function Car(make, model, year, engine, mileage) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.engine = engine,
    this.mileage = mileage
}

let newCar = new Car(
    prompt("Indique la marca del auto: "),
    prompt("Indique el modelo del auto: "),
    prompt("Ingrese el año de fabricación: "),
    prompt("Indique si el motor es eléctrico o a combustión: "),
    prompt("Indique la cantidad de kilométros de metraje: ")
    )

console.log("El auto es un " + newCar.make + " " + newCar.model + " del año " + newCar.year + ", con un motor " + newCar.engine + " y un kilometraje de " + newCar.mileage);
// Type your code above this line!
