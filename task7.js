

// Type your code below this line!
function Car(make, model, year, engine, mileage) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.engine = engine,
    this.mileage = mileage
}

const newCar = new Car("Hyundai", "Creta Su2id", 2025, "a combustión", "0km")

console.log("El auto es un " + newCar.make + " " + newCar.model + " del año " + newCar.year + ", con un motor " + newCar.engine + " y un kilometraje de " + newCar.mileage);

// Type your code above this line!

